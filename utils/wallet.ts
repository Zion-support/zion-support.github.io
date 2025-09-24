declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<any>;
      on?: (event: string, callback: (accounts: string[]) => void) => void;
    };
  }
}

export async function connectMetaMask(): Promise<string[]> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts as string[];
}

export async function getAccounts(): Promise<string[]> {
  if (typeof window === 'undefined' || !window.ethereum) {
    return [];
  }
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  return (accounts as string[]) || [];
}

export async function getBalance(address: string): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  const balance = await window.ethereum.request({
    method: 'eth_getBalance',
    params: [address, 'latest']
  });
  return balance as string;
}

export async function signMessage(message: string, address: string): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }
  const signature = await window.ethereum.request({
    method: 'personal_sign',
    params: [message, address]
  });
  return signature as string;
}

