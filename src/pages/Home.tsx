import { useState } from 'react';
import { useWalletStore } from '../stores/useWalletStore';
import { createToken } from '../utils/token';
import toast from 'react-hot-toast';

const Home = () => {
  const { wallet, connection, connected } = useWalletStore();
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateToken = async () => {
    if (!wallet || !connection || !connected) {
      toast.error('Please connect your wallet first');
      return;
    }

    try {
      setIsCreating(true);
      const mintAddress = await createToken(connection, wallet);
      toast.success(`Token created successfully! Mint address: ${mintAddress}`);
    } catch (error) {
      console.error('Failed to create token:', error);
      toast.error('Failed to create token. Check console for details.');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container my-5 my-lg-10">
      <div className="text-center">
        <h1 className="heading-large text-bold mb-5">Create Solana Token</h1>
        <button
          className="btn btn-primary btn-lg"
          onClick={handleCreateToken}
          disabled={!connected || isCreating}
        >
          {isCreating ? 'Creating Token...' : 'Create New Token'}
        </button>
        {!connected && (
          <p className="text-muted mt-3">Please connect your wallet to create tokens</p>
        )}
      </div>
    </div>
  );
};

export default Home;
