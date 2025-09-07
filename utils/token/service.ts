import { randomUUID } from 'crypto';
import { tokenStore } from './storage';
import { TokenTransaction, WalletSummary } from './types';

export function getWalletSummary(userId: string): WalletSummary {
	const wallet = tokenStore.getWallet(userId);
	const transactions = tokenStore.getTransactions(userId);
	const config = tokenStore.getConfig(userId);
	return { wallet, transactions, config } as WalletSummary;
}

export function earnTokens(
	userId: string,
	amount: number,
	reason: string,
	metadata?: Record<string, any>
): TokenTransaction {
	if (amount <= 0) throw new Error('Amount must be positive');
	const wallet = tokenStore.getWallet(userId);
	const newBalance = (wallet?.balance || 0) + amount;
	tokenStore.setWalletBalance(userId, newBalance);
	const tx: TokenTransaction = {
		id: randomUUID(),
		userId,
		type: 'earn',
		amount,
		reason,
		metadata,
		createdAt: new Date().toISOString(),
	};
	tokenStore.addTransaction(userId, tx);
	return tx;
}

export function burnTokens(
	userId: string,
	amount: number,
	reason: string,
	metadata?: Record<string, any>
): TokenTransaction {
	if (amount <= 0) throw new Error('Amount must be positive');
	const wallet = tokenStore.getWallet(userId);
	if ((wallet?.balance || 0) < amount) throw new Error('Insufficient balance');
	const newBalance = (wallet?.balance || 0) - amount;
	tokenStore.setWalletBalance(userId, newBalance);
	const tx: TokenTransaction = {
		id: randomUUID(),
		userId,
		type: 'burn',
		amount,
		reason,
		metadata,
		createdAt: new Date().toISOString(),
	};
	tokenStore.addTransaction(userId, tx);
	return tx;
}

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
	const tx = earnTokens(userId, amount, reason);
	tx.type = 'earn';
	return tx;
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
	const tx = burnTokens(userId, amount, reason);
	tx.type = 'burn';
	return tx;
}

export function handleAction(userId: string, action: string, metadata?: Record<string, any>): TokenTransaction {
	const { earnRules } = tokenStore.getConfig(userId);
	const amount = earnRules?.[action] || 0;
	if (!amount) throw new Error('No rule for action');
	return earnTokens(userId, amount, action, metadata);
}

export function burnForFeature(userId: string, feature: string, metadata?: Record<string, any>): TokenTransaction {
	const { burnRules } = tokenStore.getConfig(userId);
	const amount = burnRules?.[feature] || 0;
	if (!amount) throw new Error('No rule for feature');
	return burnTokens(userId, amount, feature, metadata);
}

export function redeemToCredits(userId: string, amount: number): { tx: TokenTransaction; usd: number } {
	const { usdPerToken } = tokenStore.getConfig(userId);
	const tx = burnTokens(userId, amount, 'redeem');
	tx.type = 'burn';
	const usd = amount * (usdPerToken || 0);
	return { tx, usd };
}

export function getAllTransactions(userId?: string) {
	return tokenStore.getTransactions(userId as any);
}

export function getConfig(userId?: string) {
	return tokenStore.getConfig(userId as any);
}

export function setConfig(partial: Partial<ReturnType<typeof getConfig>>, userId?: string): void {
	const current = tokenStore.getConfig(userId as any);
	tokenStore.setConfig({ ...current, ...partial }, userId as any);
}