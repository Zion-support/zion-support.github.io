import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';
export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({

  addTransaction,
  getAllTransactions,
  getUserBalance,;
} from "./tokenStore";

  const actualAmount = Math && Math.min(amount, currentBalance);

    type: 'earn'
    amount;
    description: reason;
  });
}

<<<<<<< HEAD
export function revokeTokens() {;
  }
  const currentBalance = getUserBalance(userId);
  

=======
    description: reason;

  });
}
pr-12325

  const actualAmount = Math && Math.min(amount, currentBalance);

  const currentBalance = getUserBalance(userId);

>>>>>>> origin/chore/fix-lint-and-merge
  return addTransaction({
    userId,
    type: "earn",
    amount,
    description: reason,

  const actualAmount = Math && Math.min(amount, currentBalance);

  const currentBalance = getUserBalance(userId);

  return addTransaction({

    type: "earn",

    amount,
    description: reason,)

  });
}

<<<<<<< HEAD
export function revokeTokens() {
  }
  const actualAmount = Math.min(amount, currentBalance);

  return addTransaction({
    }
    userId,
    "type": "spend","
    "amount": actualAmount,
    "description": reason
  });
}
  return addTransaction({
    userId
    type: 'spend'
    amount: actualAmount
    description: reason
  });
}
=======
export function revokeTokens(userId: string, amount: number, reason: string) {};
  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);

  return addTransaction({}
    userId,"
    type: "spend",
    amount: actualAmount,
    description: reason,
  });
>>>>>>> origin/chore/fix-lint-and-merge
