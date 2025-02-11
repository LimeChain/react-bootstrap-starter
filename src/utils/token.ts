import {
  createInitializeMintInstruction,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  getMinimumBalanceForRentExemptMint,
} from '@solana/spl-token';
import { Connection, Transaction, SystemProgram, Keypair } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

export const createToken = async (
  connection: Connection,
  wallet: PhantomWalletAdapter,
): Promise<string> => {
  try {
    if (!wallet.publicKey) {
      throw new Error('Wallet not connected');
    }

    // Generate a new keypair for the mint account
    const mintKeypair = Keypair.generate();

    // Get the minimum lamports required for the mint
    const lamports = await getMinimumBalanceForRentExemptMint(connection);

    // Create a new transaction
    const transaction = new Transaction();

    // Get the latest blockhash
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = wallet.publicKey;

    // Add instructions
    transaction.add(
      // Create mint account
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_PROGRAM_ID,
      }),
      // Initialize mint account
      createInitializeMintInstruction(
        mintKeypair.publicKey, // mint pubkey
        9, // decimals
        wallet.publicKey, // mint authority
        wallet.publicKey, // freeze authority
        TOKEN_PROGRAM_ID, // program id
      ),
    );

    // Partially sign with the mint keypair
    transaction.partialSign(mintKeypair);

    // Get the wallet to sign
    const signedTx = await wallet.signTransaction(transaction);

    // Send the transaction
    const rawTransaction = signedTx.serialize();
    const txId = await connection.sendRawTransaction(rawTransaction, {
      skipPreflight: false,
      preflightCommitment: 'confirmed',
    });

    // Wait for confirmation
    await connection.confirmTransaction(txId, 'confirmed');
    console.log('Transaction ID:', txId);

    return mintKeypair.publicKey.toBase58();
  } catch (error) {
    console.error('Error creating token:', error);
    throw error;
  }
};
