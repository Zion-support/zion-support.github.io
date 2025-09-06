<<<<<<< HEAD
const actualAmount = Math && Math.min(amount, currentBalance);
=======
import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';
export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({
<<<<<<< HEAD
<<<<<<< HEAD

  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);
=======

  const actualAmount = Math && Math.min(amount, currentBalance);
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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