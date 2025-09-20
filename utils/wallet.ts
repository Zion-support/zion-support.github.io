

  }
}
export type WalletProvider = any,
export function getEthereumProvider(): WalletProvider | null {,
  if (typeof window === 'undefined') return null,
  // @ts-ignore,
  const { ethereum } = window,
  return ethereum ?? null,
}
,