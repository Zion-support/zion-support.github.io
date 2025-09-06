<<<<<<< HEAD
export async function connectMetaMask(): Promise<string[]> {
<<<<<<< HEAD
  if (typeof window === 'undefined' |!window.ethereum) {
=======
  if (typeof window === 'undefined' || !window.ethereum) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    throw new Error('MetaMask is not installed');
  }
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    return accounts;
  } catch (error) {
    throw new Error('Failed to connect to MetaMask');
  }
}
export async function getAccounts(): Promise<string[]> {
<<<<<<< HEAD
  if (typeof window === 'undefined' |!window.ethereum) {
=======
  if (typeof window === 'undefined' || !window.ethereum) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return [];
  }
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
    });
    return accounts;
  } catch (error) {
    return [];
  }
}
export async function getBalance(address: string): Promise<string> {
<<<<<<< HEAD
  if (typeof window === 'undefined' |!window.ethereum) {
=======
  if (typeof window === 'undefined' || !window.ethereum) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    throw new Error('MetaMask is not installed');
  }
  try {
    const balance = await window.ethereum.request({
      method: 'eth_getBalance'
      params: [address, 'latest']
    });
    return balance;
  } catch (error) {
    throw new Error('Failed to get balance');
  }
}
export async function signMessage(message: string, address: string): Promise<string> {
<<<<<<< HEAD
  if (typeof window === 'undefined' |!window.ethereum) {
=======
  if (typeof window === 'undefined' || !window.ethereum) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    throw new Error('MetaMask is not installed');
  }
  try {
    const signature = await window.ethereum.request({
      method: 'personal_sign'
      params: [message, address]
    });
    return signature;
  } catch (error) {
    throw new Error('Failed to sign message');
  }
}
// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
      removeListener: (event: string, callback: (accounts: string[]) => void) => void;
<<<<<<< HEAD
    }
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    };
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}