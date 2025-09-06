<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';
export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import {
  addTransaction,
  getAllTransactions,
  getUserBalance,
} from "./tokenStore";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  const actualAmount = Math && Math.min(amount, currentBalance);
  

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  const actualAmount = Math && Math.min(amount, currentBalance);
  

  const currentBalance = getUserBalance(userId);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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