type EarnAction = 'onboarding' | 'purchase' | 'referral' | 'custom';

async function apiClient(path: string, init?: RequestInit) {
  return fetch(path, init);
}

export async function rewardOnboarding(userId: string, amount: number) {
  return apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ userId, action: 'onboarding' as EarnAction, amount }),
  });
}

export async function earnTokensForPurchase(userId: string, purchaseAmount: number, purchaseType: string) {
  return apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ userId, action: 'purchase' as EarnAction, amount: purchaseAmount, purchaseType }),
  });
}

export async function earnTokensForReferral(userId: string, referredUserId: string) {
  return apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ userId, action: 'referral' as EarnAction, referredUserId, amount: 100 }),
  });
}

export async function earnTokensForAction(userId: string, action: EarnAction, amount: number) {
  return apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ userId, action, amount }),
  });
}