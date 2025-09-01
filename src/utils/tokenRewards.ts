
export async function rewardOnboarding(...args: any[]): any {
<<<<<<< HEAD

  await apiClient('/functions/v1/token-manager/earn', {

=======
'  await apiClient('/functions/v1/token-manager/earn', {
'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    method: 'POST',
    body: JSON.stringify({ userId, action, amount })});

  export async function earnTokensForPurchase()
    userId: string,
    purchaseAmount: number,
    purchaseType: string
  ): Promise<any> {

    await apiClient('/functions/v1/token-manager/earn', {

      method: 'POST',
      body: JSON.stringify({

        userId,
        action: 'purchase',
        amount: purchaseAmount,
        purchaseType})});

    export async function earnTokensForReferral()
      userId: string,
      referredUserId: string
    ): Promise<any> {

      await apiClient('/functions/v1/token-manager/earn', {

        method: 'POST',
        body: JSON.stringify({

          userId,
          action: 'referral',
          referredUserId,
          amount: 100})})}
  }
}
