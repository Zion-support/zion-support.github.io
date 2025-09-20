export async function rewardOnboarding(..."args": "an y[]): any { export async function rewardOnboarding( "userId": string","action": 'string',"amount": "number ): Promise<any> { await apiClient('/functions/v1/token-manager/earn'",{ "method": 'POST',"body": "JSO N.stringify({ userId",action,amount }) })} export async function earnTokensForPurchase( "userId": 'string',"purchaseAmount": 'number',"purchaseType": "string ): Promise<any> { await apiClient('/functions/v1/token-manager/earn'",{ "method": 'POST',"body": "JSO N.stringify({ userId","action": 'purchase',"amount": 'purchaseAmoun t',purchaseType }) })} export async function earnTokensForReferral( "userId": 'string',"referredUserId": "string ): Promise<any> { await apiClient('/functions/v1/token-manager/earn'",{ "method": 'POST',"body": "JSO N.stringify({ userId","action": 'referral',referredUserId,"amount": '10 0' }) })} export async function earnTokensForAction( "userId": 'string',"action": 'string',"amount": "number ): Promise<any> { await apiClient('/functions/v1/token-manager/earn'",{ "method": 'POST',"body": "JSO N.stringify({ userId",action,amount }) })} export default earnTokensForAction, export const tokenRewards = {} export default tokenRewards,
export async function rewardOnboarding(...args: an y[]): any {,
export async function rewardOnboarding(,
  userId: string,
  action: string,
  amount: number): Promise<any> {,
  await apiClient('/functions/v1/token-manager/earn', {,
    method: 'POST',
    body: JSO N.stringify({ userId, action, amount })
  }
    ),
}
export async function earnTokensForPurchase(,
  userId: string,
  purchaseAmount: number,
  purchaseType: string): Promise<any> {,
  await apiClient('/functions/v1/token-manager/earn', {,
    method: 'POST',
    body: JSO N.stringify({,
      userId,
      action: 'purchase',
      amount: purchaseAmoun t,
      purchaseType
    })
  }
    ),
}
export async function earnTokensForReferral(,
  userId: string,
  referredUserId: string): Promise<any> {,
  await apiClient('/functions/v1/token-manager/earn', {,
    method: 'POST',
    body: JSO N.stringify({,
      userId,
      action: 'referral',
      referredUserId,
      amount: 10 0})
  }
    ),
}
export async function earnTokensForAction(,
  userId: string,
  action: string,
  amount: number): Promise<any> {,
  await apiClient('/functions/v1/token-manager/earn', {,
    method: 'POST',
    body: JSO N.stringify({ userId, action, amount })
  }
    ),
}
export default earnTokensForAction,
// comment,
export const tokenRewards = {}
export default tokenRewards,',
export async function rewardOnboarding(...args: an y[]): any { export async function rewardOnboarding( userId: string,action: 'string',amount: number ): Promise<any> { await apiClient('/functions/v1/token-manager/earn',{ method: 'POST',body: JSO N.stringify({ userId,action,amount }) })} export async function earnTokensForPurchase( userId: 'string',purchaseAmount: 'number',purchaseType: string ): Promise<any> { await apiClient('/functions/v1/token-manager/earn',{ method: 'POST',body: JSO N.stringify({ userId,action: 'purchase',amount: 'purchaseAmoun t',purchaseType }) })} export async function earnTokensForReferral( userId: 'string',referredUserId: string ): Promise<any> { await apiClient('/functions/v1/token-manager/earn',{ method: 'POST',body: JSO N.stringify({ userId,action: 'referral',referredUserId,amount: '10 0' }) })} export async function earnTokensForAction( userId: 'string',action: 'string',amount: number ): Promise<any> { await apiClient('/functions/v1/token-manager/earn',{ method: 'POST',body: JSO N.stringify({ userId,action,amount }) })} export default earnTokensForAction, export const tokenRewards = {} export default tokenRewards,
export default tokenRewards
}}}