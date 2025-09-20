// Token rewards utility for managing user token rewards

// Mock API client for demonstration
const apiClient = async (url: string, options: any) => {
  console.log(`API call to ${url}`, options);
  return { success: true };
};

export async function rewardOnboarding(userId: string, action: string, amount: number): Promise<void> {
  await apiClient("/functions/v1/token-manager/earn", {
    method: "POST",
    body: JSON.stringify({ userId, action, amount })
  });
}

export async function earnTokensForPurchase(
  userId: string, 
  purchaseAmount: number, 
  purchaseType: string
): Promise<void> {
  await apiClient("/functions/v1/token-manager/earn", {
    method: "POST",
    body: JSON.stringify({
      userId, 
      action: "purchase",
      amount: purchaseAmount,
      purchaseType,
    })
  });
}

export async function earnTokensForReferral(
  userId: string, 
  referredUserId: string
): Promise<void> {
  await apiClient("/functions/v1/token-manager/earn", {
    method: "POST",
    body: JSON.stringify({
      userId, 
      action: "referral",
      referredUserId,
      amount: 100,
    })
  });
}