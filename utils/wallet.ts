export type WalletProvider = any;

export function getEthereumProvider(): WalletProvider | null {_if (typeof window === 'undefined') return null;
  // @ts-ignore
  const { ethereum} = window;
  return ethereum ?? null;
}

export async function connectMetaMask(): Promise<string[] | null> {_const _provider = getEthereumProvider();
  if (!provider) return null;
  try {
    const accounts: string[] = await provider.request({ method: 'eth_requestAccounts'});
    return accounts;
  } catch (e) {_return null;}
}

export async function getAccounts(): Promise<string[] | null> {_const _provider = getEthereumProvider();
  if (!provider) return null;
  try {
    const accounts: string[] = await provider.request({ method: 'eth_accounts'});
    return accounts;
  } catch (e) {_return null;}
}