    export async function earnTokensForReferral (userId: string,
  export async function earnTokensForPurchase (userId: string,
export async function rewardOnboarding (...args: any[]) : any {


  await apiClient ('/functions / v1 / token - manager / earn', {
    method: 'POST',
    body: JSON.stringify ({ userId, action, amount }) ,
  }) ;

    purchaseAmount: number,
    purchaseType: string) : Promise < any> {
    await apiClient ('/functions / v1 / token - manager / earn', {
      method: 'POST',
      body: JSON.stringify ({
        userId,
        action: 'purchase',
        amount: purchaseAmount,
        purchaseType,
      }) ,
    }) ;

      referredUserId: string) : Promise < any> {
      await apiClient ('/functions / v1 / token - manager / earn', {
        method: 'POST',
        body: JSON.stringify ({
          userId,
          action: 'referral',
          referredUserId,
          amount: 100,
        }) ,
      }) }
  }
}
