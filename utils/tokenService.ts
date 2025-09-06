import {
  addTransaction,
  getAllTransactions,
  getUserBalance,
} from "./tokenStore";

  const actualAmount = Math && Math.min(amount, currentBalance);
  

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  const actualAmount = Math && Math.min(amount, currentBalance);
  

  const currentBalance = getUserBalance(userId);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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