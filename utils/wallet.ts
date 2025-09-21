export type WalletProvider = any;

<<<<<<< HEAD

  }
}
export type WalletProvider = any,
export function getEthereumProvider(): WalletProvider | null {,
  if (typeof window === 'undefined') return null,
  // @ts-ignore,
  const { ethereum } = window,
  return ethereum ?? null}
,
=======
export function getEthereumProvider(): WalletProvider | null {
  if (typeof window === 'undefined') return null;
  // @ts-ignore
  const { ethereum } = window;
  return ethereum ?? null;
}
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
