

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


  }
}
=======
export type WalletProvider = any;

export function getEthereumProvider(): WalletProvider | null {
  if (typeof window === 'undefined') return null;
  // @ts-ignore
  const { ethereum } = window;
  return ethereum ?? null;
}

export async function connectMetaMask(): Promise<string[] | null> {
  const provider = getEthereumProvider();
  if (!provider) return null;
  try {
    const accounts: string[] = await provider.request({ method: 'eth_requestAccounts' });
    return accounts;
  } catch (e) {
    return null;
  }
}

export async function getAccounts(): Promise<string[] | null> {
  const provider = getEthereumProvider();
  if (!provider) return null;
  try {
    const accounts: string[] = await provider.request({ method: 'eth_accounts' });
    return accounts;
  } catch (e) {
    return null;
  }
}
>>>>>>> origin/auto/autonomy-17186719616
