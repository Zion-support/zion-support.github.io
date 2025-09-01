
export async function rewardOnboarding(...args: any[]): {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action, amount })
  });

export async function earnTokensForPurchase(userId: string,
  purchaseAmount: number,
  purchaseType: string
: any): Promise<any> {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action: 'purchase', amount: purchaseAmount, purchaseType })
  });

export async function earnTokensForReferral(userId: string,
  referredUserId: string
: any): Promise<any> {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action: 'referral', referredUserId, amount: 100 })
  })}}}