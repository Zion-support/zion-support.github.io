import { apiClient   } from "@/services/api";
export async function rewardOnboarding(user,
  I: d: string) {
  await apiClient('/functions/v1/token-manager/earn', {
  meth,
  o: d: 'POST',bo,
  d: y: JSON.stringify({ userId, action, amount })
  })
}

export async function earnTokensForPurchase(
  user,
  I: d: string,purchaseAmou,
  n: t: number,purchaseTy,
  p: e: string;
): Promise<void> {
  await apiClient('/functions/v1/token-manager/earn', {
  meth,
  o: d: 'POST',bo,
  d: y: JSON.stringify({ userId, acti,
  o: n: 'purchase', amou,
  n: t: purchaseAmount, purchaseType })
  })
}

export async function earnTokensForReferral(
  user,
  I: d: string,referredUser,
  I: d: string;
): Promise<void> {
  await apiClient('/functions/v1/token-manager/earn', {
  meth,
  o: d: 'POST',bo,
  d: y: JSON.stringify({ userId, acti,
  o: n: 'referral', referredUserId, amou,
  n: t: 100 })
  })
}
