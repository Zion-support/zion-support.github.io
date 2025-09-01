import { apiClient } from '@/utils/apiClient';

type EarnPayload = {
  userId: string;
  action: 'onboarding' | 'purchase' | 'referral';
  amount?: number;
  purchaseType?: string;
  referredUserId?: string;
};

async function earnTokens(payload: EarnPayload): Promise<any> {
  return apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function rewardOnboarding(userId: string, amount = 50): Promise<any> {
  return earnTokens({ userId, action: 'onboarding', amount });
}

export async function earnTokensForPurchase(
  userId: string,
  purchaseAmount: number,
  purchaseType: string
): Promise<any> {
  return earnTokens({ userId, action: 'purchase', amount: purchaseAmount, purchaseType });
}

export async function earnTokensForReferral(
  userId: string,
  referredUserId: string
): Promise<any> {
  return earnTokens({ userId, action: 'referral', referredUserId, amount: 100 });
}
