
import { apiClient } from './apiClient';

export async function rewardOnboarding(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' }),
  });
  {/* Removed stray closing brace */}

export async function earnTokensForPurchase(
  userId: string,
  purchaseAmount: number,
  purchaseType: string,
): Promise<void> {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' }),
  });
  {/* Removed stray closing brace */}

export async function earnTokensForReferral(
  userId: string,
  referredUserId: string,
): Promise<void> {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' }),
  });
  {/* Removed stray closing brace */}
