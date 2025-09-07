export type WalletProvider = $2;
export function getEthereumProvider(): WalletProvider | null {
  if (typeof window = $2;
  // @ts-ignore
  const { ethereum } = window,
  return ethereum ?? null
}

export async function connectMetaMask(): Promise<string[] | null> {
  const provider = getEthereumProvider($2);
  if (!provider) return null,
  try {
    const accounts: string[] = await provider.request($2);
    return accounts
  } catch (e) {
    return null
  }
}

export async function getAccounts(): Promise<string[] | null> {
  const provider = getEthereumProvider($2);
  if (!provider) return null,
  try {
    const accounts: string[] = await provider.request($2);
    return accounts
  } catch (e) {
    return null
  }
}