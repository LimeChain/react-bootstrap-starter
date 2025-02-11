import { create } from 'zustand';
import { Connection, PublicKey } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

interface WalletState {
  wallet: PhantomWalletAdapter | null;
  publicKey: PublicKey | null;
  connected: boolean;
  connecting: boolean;
  connection: Connection | null;
  initialize: () => Promise<void>;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

// Initialize Solana connection (using devnet for development)
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

export const useWalletStore = create<WalletState>((set, get) => ({
  wallet: null,
  publicKey: null,
  connected: false,
  connecting: false,
  connection: connection,

  initialize: async () => {
    const wallet = new PhantomWalletAdapter();
    set({ wallet });

    wallet.on('connect', () => {
      set({
        connected: true,
        connecting: false,
        publicKey: wallet.publicKey,
      });
    });

    wallet.on('disconnect', () => {
      set({
        connected: false,
        publicKey: null,
      });
    });
  },

  connect: async () => {
    const { wallet } = get();
    if (!wallet) return;

    try {
      set({ connecting: true });
      await wallet.connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      set({ connecting: false });
    }
  },

  disconnect: async () => {
    const { wallet } = get();
    if (!wallet) return;

    try {
      await wallet.disconnect();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  },
}));
