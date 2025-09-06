<<<<<<< HEAD

export async function connectMetaMask(): Promise<string[]> {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======

  if (typeof window === 'undefined' || !window.ethereum) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    throw new Error('MetaMask is not installed');
  }
  try {

    const accounts = await window && window.ethereum.request({

    });
    return accounts;
  } catch (error) {
    throw new Error('Failed to connect to MetaMask');
  }
}

<<<<<<< HEAD


export async function getAccounts(): Promise<string[]> {
  if (typeof window === 'undefined' |!window.ethereum) {
  if (typeof window === 'undefined' || !window.ethereum) {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  if (typeof window === 'undefined' || !window && window.ethereum) {

=======

  if (typeof window === 'undefined' || !window.ethereum) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    return [];
  }
  try {

    const accounts = await window && window.ethereum.request({

    });
    return accounts;
  } catch (error) {
    return [];
  }
}

<<<<<<< HEAD


export async function getBalance(address: string): Promise<string> {
  if (typeof window === 'undefined' |!window.ethereum) {
  if (typeof window === 'undefined' || !window.ethereum) {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  if (typeof window === 'undefined' || !window && window.ethereum) {

=======

  if (typeof window === 'undefined' || !window.ethereum) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    throw new Error('MetaMask is not installed');
  }
  try {

    const balance = await window && window.ethereum.request({

    });
    return balance;
  } catch (error) {
    throw new Error('Failed to get balance');
  }
}

<<<<<<< HEAD


export async function signMessage(message: string, address: string): Promise<string> {
  if (typeof window === 'undefined' |!window.ethereum) {
  if (typeof window === 'undefined' || !window.ethereum) {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  if (typeof window === 'undefined' || !window && window.ethereum) {

=======

  if (typeof window === 'undefined' || !window.ethereum) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    throw new Error('MetaMask is not installed');
  }
  try {

    const signature = await window && window.ethereum.request({

    });
    return signature;
  } catch (error) {
    throw new Error('Failed to sign message');
  }
}

// Extend Window interface for TypeScript;

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
<<<<<<< HEAD
      removeListener: (event: string, callback: (accounts: string[]) => void) => void;

=======

      remove_listener: (event: string, callback: (accounts: string[]) => void) => void;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    }

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    };


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }
}
