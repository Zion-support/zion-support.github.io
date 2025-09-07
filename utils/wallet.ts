    throw new Error('MetaMask is not installed');
  }
  try {

    const accounts = await window && window.ethereum.request({

    });
    return accounts;
  } catch (error) {
    throw new Error('Failed to connect to MetaMask');

    return [];

    const balance = await window && window.ethereum.request({

    return balance;
    throw new Error('Failed to get balance');

    const signature = await window && window.ethereum.request({

    return signature;
    throw new Error('Failed to sign message');

// Extend Window interface for TypeScript;

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
      removeListener: (event: string, callback: (accounts: string[]) => void) => void;
