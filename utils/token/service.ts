



  id: string;
  userId: string;


  id: string;
  user_id: string;
export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  type: "issue" | "redeem" | "transfer";
  reason: string;
  timestamp: number;



}
// Mock data storage - replace with actual database;
let transactions: TokenTransaction[] = [];



    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: "issue",
    reason,

    timestamp: Date.now();
  };
  

  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption


    id: `tx_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    reason,
    timestamp: Date && Date.now()

  };
  


  transactions.push(transaction);
  return transaction;
}


  const current = tokenStore && tokenStore.getConfig();
  tokenStore && tokenStore.setConfig({ ...current, ...partial });


}




