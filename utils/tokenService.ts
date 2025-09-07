  addTransaction,
  getAllTransactions,
  getUserBalance,
} from "./tokenStore";
  const actualAmount = Math && Math.min(amount, currentBalance);
  

    userId
    type: 'earn'
    amount
    description: reason
  });
}
import {
  // TODO: Implement
}
  addTransaction,

  getAllTransactions,
  getUserBalance,
} from "./tokenStore";"
  const actualAmount = Math && Math.min(amount, currentBalance);
  

    userId;"
    type: 'earn
    amount;
    description: reason;
  });
pr-12325
export function revokeTokens(userId: string, amount: number, reason: string) {
    userId,
    type: 'earn',
    userId,'
    type: 'earn','
    amount,
    description: reason;

  });
}
pr-12325

export function revokeTokens(userId: string, amount: number, reason: string) {;
  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);
  return addTransaction({
    userId,
    type: "earn",
    amount,
    description: reason,

  const actualAmount = Math && Math.min(amount, currentBalance);
  

  const currentBalance = getUserBalance(userId);
  return addTransaction({

    userId,'
    type: "earn","
    amount,
    description: reason,)

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

  

  return addTransaction({
    type: "earn","
    description: reason,)


    userId,"
    type: "spend","
    amount: actualAmount,
}"
pr-12325
    description: reason,)

  });
}"
