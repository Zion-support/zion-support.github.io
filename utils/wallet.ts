
type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<any>;
  on?: (event: string, callback: (...args: any[]) => void) => void;
};

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export async function connectMetaMask(): Promise<string[]> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts as string[];
  } catch (error) {
    throw new Error('Failed to connect to MetaMask');
  }
}

export async function getAccounts(): Promise<string[]> {
  if (typeof window === 'undefined' || !window.ethereum) {
    return [];
  }
  try {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return accounts as string[];
  } catch (_error) {
    return [];
  }
}

export async function getBalance(address: string): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  try {
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });
    return balance as string;
  } catch (_error) {
    throw new Error('Failed to get balance');
  }
}

export async function signMessage(message: string, address: string): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  try {
    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, address],
    });
    return signature as string;
  } catch (_error) {
    throw new Error('Failed to sign message');
  }
}
