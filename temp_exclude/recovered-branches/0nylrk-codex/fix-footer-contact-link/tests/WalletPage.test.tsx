 transactions: [], loading: false,
fetchWallet: vi.fn (), fetchTransactions: vi.fn (),
earnTokens: vi.fn (),
spendTokens: vi.fn () 
}as any);
render (<WalletPage />);
expect (