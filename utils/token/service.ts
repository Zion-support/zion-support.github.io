
export function getWalletSummary(_userId: string): WalletSummary {_const _wallet = tokenStore.getWallet(userId);
  const _transactions = tokenStore.getTransactions(userId);
  const _config = tokenStore.getConfig();
  return { wallet, _transactions, _config};
}

export function earnTokens(_userId: string, _amount: number, _reason: string, _metadata?: Record<string, _any>): TokenTransaction {_if (amount <= 0) throw new Error("Amount must be positive");
  const _wallet = tokenStore.getWallet(userId);
  const _newBalance = wallet.balance + amount;
  tokenStore.setWalletBalance(userId, _newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(), _userId, _type: "earn", _amount, _reason, _metadata, _createdAt: new Date().toISOString()};
  tokenStore.addTransaction(tx);
  return tx;
}

export function burnTokens(_userId: string, _amount: number, _reason: string, _metadata?: Record<string, _any>): TokenTransaction {_if (amount <= 0) throw new Error("Amount must be positive");
  const _wallet = tokenStore.getWallet(userId);
  if (wallet.balance < amount) throw new Error("Insufficient balance");
  const _newBalance = wallet.balance - amount;
  tokenStore.setWalletBalance(userId, _newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(), _userId, _type: "burn", _amount, _reason, _metadata, _createdAt: new Date().toISOString()};
  tokenStore.addTransaction(tx);
  return tx;
}

export function issueTokens(_userId: string, _amount: number, _reason: string): TokenTransaction {_const _tx = earnTokens(userId, _amount, _reason);
  tx.type = "issue";
  return tx;}

export function revokeTokens(_userId: string, _amount: number, _reason: string): TokenTransaction {_const _tx = burnTokens(userId, _amount, _reason);
  tx.type = "revoke";
  return tx;}

export function handleAction(_userId: string, _action: string, _metadata?: Record<string, _any>): TokenTransaction {_const { earnRules} = tokenStore.getConfig();
  const _amount = earnRules[action];
  if (!amount) throw new Error("Unknown action");
  return earnTokens(userId, amount, action, metadata);
}

export function burnForFeature(_userId: string, _feature: string, _metadata?: Record<string, _any>): TokenTransaction {_const { burnRules} = tokenStore.getConfig();
  const _amount = burnRules[feature];
  if (!amount) throw new Error("Unknown feature");
  return burnTokens(userId, amount, feature, metadata);
}

export function redeemToCredits(_userId: string, _amount: number): {_tx: TokenTransaction; usd: number} {_const { usdPerToken} = tokenStore.getConfig();
  const _tx = burnTokens(userId, amount, "redeem_credits");
  tx.type = "redeem";
  const _usd = parseFloat((amount * usdPerToken).toFixed(2));
  return {_tx, _usd};
}

export function getAllTransactions() {_return tokenStore.getTransactions();}

export function getConfig() {_return tokenStore.getConfig();}

export function setConfig(_partial: Partial<ReturnType<typeof getConfig>>): void {_const _current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, _...partial});
}