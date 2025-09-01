import { apiClient } from '@/utils/apiClient';

export interface TokenRewardAction {
  userId: string;
  action: string;
  amount: number;
  metadata?: Record<string, any>;
}

export async function rewardOnboarding(userId: string, amount: number = 100): Promise<any> {
  try {
    return await apiClient('/functions/v1/token-manager/earn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        userId, 
        action: 'onboarding', 
        amount 
      })
    });
  } catch (error) {
    console.error('Error rewarding onboarding:', error);
    throw error;
  }
}

export async function earnTokensForPurchase(
  userId: string,
  purchaseAmount: number,
  purchaseType: string
): Promise<any> {
  try {
    const rewardAmount = Math.floor(purchaseAmount * 0.1); // 10% reward
    
    return await apiClient('/functions/v1/token-manager/earn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        action: 'purchase',
        amount: rewardAmount,
        metadata: {
          purchaseAmount,
          purchaseType
        }
      })
    });
  } catch (error) {
    console.error('Error rewarding purchase:', error);
    throw error;
  }
}

export async function earnTokensForReferral(
  userId: string,
  referredUserId: string,
  amount: number = 50
): Promise<any> {
  try {
    return await apiClient('/functions/v1/token-manager/earn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        action: 'referral',
        amount,
        metadata: {
          referredUserId
        }
      })
    });
  } catch (error) {
    console.error('Error rewarding referral:', error);
    throw error;
  }
}

export async function earnTokensForActivity(
  userId: string,
  activityType: string,
  amount: number
): Promise<any> {
  try {
    return await apiClient('/functions/v1/token-manager/earn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        action: activityType,
        amount
      })
    });
  } catch (error) {
    console.error('Error rewarding activity:', error);
    throw error;
  }
}

export async function getTokenBalance(userId: string): Promise<number> {
  try {
    const response = await apiClient(`/functions/v1/token-manager/balance/${userId}`, {
      method: 'GET',
    });
    return response.balance || 0;
  } catch (error) {
    console.error('Error getting token balance:', error);
    return 0;
  }
}

export const tokenRewardAmounts = {
  onboarding: 100,
  dailyLogin: 10,
  profileComplete: 50,
  firstPurchase: 200,
  referral: 50,
  review: 25,
  socialShare: 15,
  newsletter: 20
} as const;

export type TokenRewardType = keyof typeof tokenRewardAmounts;