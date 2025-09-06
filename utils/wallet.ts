export async function connectMetaMask(): Promise<string[]> {
<<<<<<< HEAD
  if (typeof window === 'undefined' |!window.ethereum) {
=======
  if (typeof window === 'undefined' || !window && window.ethereum) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    throw new Error('MetaMask is not installed');
  }
  try {
<<<<<<< HEAD
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
=======
    const accounts = await window && window.ethereum.request({
      method: 'eth_requestAccounts',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  if (typeof window === 'undefined' || !window && window.ethereum) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return [];
  }
  try {
<<<<<<< HEAD
    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
=======
    const accounts = await window && window.ethereum.request({
      method: 'eth_accounts',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  if (typeof window === 'undefined' || !window && window.ethereum) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    throw new Error('MetaMask is not installed');
  }
  try {
<<<<<<< HEAD
    const balance = await window.ethereum.request({
      method: 'eth_getBalance'
      params: [address, 'latest']
=======
    const balance = await window && window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  if (typeof window === 'undefined' || !window && window.ethereum) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    throw new Error('MetaMask is not installed');
  }
  try {
<<<<<<< HEAD
    const signature = await window.ethereum.request({
      method: 'personal_sign'
      params: [message, address]
=======
    const signature = await window && window.ethereum.request({
      method: 'personal_sign',
      params: [message, address],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
    }
  }
}