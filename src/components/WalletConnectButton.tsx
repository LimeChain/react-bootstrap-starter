import { useEffect } from 'react';
import { useWalletStore } from '../stores/useWalletStore';

export const WalletConnectButton = () => {
  const { initialize, connect, disconnect, connected, connecting, publicKey } = useWalletStore();

  useEffect(() => {
    // Initialize wallet adapter when component mounts
    initialize();
  }, [initialize]);

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <button
      className={`btn ${connected ? 'btn-danger' : 'btn-primary'}`}
      onClick={handleClick}
      disabled={connecting}
    >
      {connecting ? (
        'Connecting...'
      ) : connected ? (
        <>
          {publicKey?.toString().slice(0, 4)}...
          {publicKey?.toString().slice(-4)}
        </>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
};
