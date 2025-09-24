// Minimal MetaMask typings
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, callback: (payload: unknown) => void) => void;
    };
  }
}

export async function connectMetaMask(): Promise<string[]> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  try {
    const accounts = (await window.ethereum.request({
      method: 'eth_requestAccounts',
    })) as string[];
    return accounts;
  } catch (error) {
    throw new Error('Failed to connect to MetaMask');
  }
}

export async function getAccounts(): Promise<string[]> {
  if (typeof window === 'undefined' || !window.ethereum) {
    return [];
  }
  try {
    const accounts = (await window.ethereum.request({
      method: 'eth_accounts',
    })) as string[];
    return accounts;
  } catch (_error) {
    return [];
  }
}

export async function getBalance(address: string): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  try {
    const balance = (await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    })) as string;
    return balance;
  } catch (_error) {
    throw new Error('Failed to get balance');
  }
}

export async function signMessage(message: string, address: string): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  try {
    const signature = (await window.ethereum.request({
      method: 'personal_sign',
      params: [message, address],
    })) as string;
    return signature;
  } catch (_error) {
    throw new Error('Failed to sign message');
  }
}
