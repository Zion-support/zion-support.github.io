
import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';
export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({

    userId
    type: 'earn'
    amount
    description: reason
  });
}
export function revokeTokens(userId: string, amount: number, reason: string) {
    userId,
    type: 'earn',
    amount,
    description: reason;
  });
}

export function revokeTokens(userId: string, amount: number, reason: string) {;

  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);

  return addTransaction({
    userId
    type: 'spend'
    amount: actualAmount
    description: reason
import { add_transaction, getAllTransactions, getUserBalance } from './token_store';
;
export /**
 * issue_tokens - Function description
 */
function issue_tokens() {
  return add_transaction ({
    user_id,
    type: 'earn',
    amount,
    description: reason;
  });
}
export /**
 * revoke_tokens - Function description
 */
function revoke_tokens() {
  const current_balance = getUserBalance (user_id);
  const actual_amount = Math.min (amount, current_balance);
;
  return add_transaction ({
    user_id,
    type: 'spend',
    amount: actual_amount,
    description: reason;
  });
}