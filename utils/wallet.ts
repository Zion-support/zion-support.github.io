// Wallet utilities
export interface WalletAccount {
  address: string;
  balance: string;
  chainId: number;
}

export async function connectMetaMask(): Promise<WalletAccount | null> {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error('MetaMask not installed');
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (accounts.length === 0) {
      throw new Error('No accounts found');
    }

    const address = accounts[0];
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest']
    });

    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      address,
      balance,
      chainId: parseInt(chainId, 16)
    };
  } catch (error) {
    console.error('Failed to connect MetaMask:', error);
    return null;
  }
}

export async function getAccounts(): Promise<string[]> {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      return [];
    }

    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
    });

    return accounts;
  } catch (error) {
    console.error('Failed to get accounts:', error);
    return [];
  }
}

export async function getBalance(address: string): Promise<string> {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      return '0';
    }

    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest']
    });

    return balance;
  } catch (error) {
    console.error('Failed to get balance:', error);
    return '0';
  }
}

export async function switchChain(chainId: number): Promise<boolean> {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      return false;
    }

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }]
    });

    return true;
  } catch (error) {
    console.error('Failed to switch chain:', error);
    return false;
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}