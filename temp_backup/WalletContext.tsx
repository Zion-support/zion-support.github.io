import React, { createContext, useContext, useState } from 'react';

interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
}

interface WalletContextType {
  walletState: WalletState;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
  });

  const connectWallet = async () => {
    // Simplified wallet connection
    setWalletState({
      isConnected: true,
      address: '0x1234567890123456789012345678901234567890',
      balance: '0.0',
    });
  };

  const disconnectWallet = async () => {
    setWalletState({
      isConnected: false,
      address: null,
      balance: null,
    });
  };

  return (
    <WalletContext.Provider
      value={{ walletState, connectWallet, disconnectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
