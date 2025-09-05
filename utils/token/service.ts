import { randomUUID } from &quot;crypto&quot;;
import { tokenStore } from &quot;./storage&quot;;
import { TokenTransaction, WalletSummary } from &quot;./types&quot;;

export function getWalletSummary(userId: string): WalletSummary {
  const wallet = tokenStore.getWallet(userId);
  const transactions = tokenStore.getTransactions(userId);
  const config = tokenStore.getConfig();
  return { wallet, transactions, config };
}

export function earnTokens(
  userId: string,
  amount: number,
  reason: string,
  metadata?: Record<string, any>
): TokenTransaction {
  if (amount <= 0) throw new Error(&quot;Amount must be positive&quot;);
  const wallet = tokenStore.getWallet(userId);
  const newBalance = wallet.balance + amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(),
    userId,
    type: &quot;earn&quot;,
    amount,
    reason,
    metadata,
    createdAt: new Date().toISOString()};
  tokenStore.addTransaction(tx);
  return tx;
}

export function burnTokens(
  userId: string,
  amount: number,
  reason: string,
  metadata?: Record<string, any>
): TokenTransaction {
  if (amount <= 0) throw new Error(&quot;Amount must be positive&quot;);
  const wallet = tokenStore.getWallet(userId);
  if (wallet.balance < amount) throw new Error(&quot;Insufficient balance&quot;);
  const newBalance = wallet.balance - amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(),
    userId,
    type: &quot;burn&quot;,
    amount,
    reason,
    metadata,
    createdAt: new Date().toISOString()};
  tokenStore.addTransaction(tx);
  return tx;
}

export function issueTokens(
  userId: string,
  amount: number,
  reason: string
): TokenTransaction {
  const tx = earnTokens(userId, amount, reason);
  tx.type = &quot;issue&quot;;
  return tx;
}

export function revokeTokens(
  userId: string,
  amount: number,
  reason: string
): TokenTransaction {
  const tx = burnTokens(userId, amount, reason);
  tx.type = &quot;revoke&quot;;
  return tx;
}

export function handleAction(userId: string, action: string, metadata?: Record<string, any>): TokenTransaction {
  const { earnRules } = tokenStore.getConfig();
  const amount = earnRules[action];
  if (!amount) throw new Error(&quot;Unknown action&quot;);
  return earnTokens(userId, amount, action, metadata);
}

export function burnForFeature(userId: string, feature: string, metadata?: Record<string, any>): TokenTransaction {
  const { burnRules } = tokenStore.getConfig();
  const amount = burnRules[feature];
  if (!amount) throw new Error(&quot;Unknown feature&quot;);
  return burnTokens(userId, amount, feature, metadata);
}

export function redeemToCredits(userId: string, amount: number): { tx: TokenTransaction; usd: number } {
  const { usdPerToken } = tokenStore.getConfig();
  const tx = burnTokens(userId, amount, &quot;redeem_credits&quot;);
  tx.type = &quot;redeem&quot;;
  const usd = parseFloat((amount * usdPerToken).toFixed(2));
  return { tx, usd };
}

export function getAllTransactions() {
  return tokenStore.getTransactions();
}

export function getConfig() {
  return tokenStore.getConfig();
}

export function setConfig(partial: Partial<ReturnType<typeof getConfig>>): void {
  const current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, ...partial });
}