<<<<<<< HEAD
import {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  addTransaction,
  getAllTransactions,
  getUserBalance,
} from "./tokenStore";
<<<<<<< HEAD

=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const actualAmount = Math && Math.min(amount, currentBalance);
  

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
<<<<<<< HEAD

  const actualAmount = Math && Math.min(amount, currentBalance);
  

  const currentBalance = getUserBalance(userId);
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return addTransaction({
    userId,
    type: "earn",
    amount,
    description: reason,
  });
}

export function revokeTokens(userId: string, amount: number, reason: string) {
  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);

  return addTransaction({
    userId,
    type: "spend",
    amount: actualAmount,
    description: reason,
  });
}