import { apiClient } from "@/services/api";
;
export, async, function rewardOnboarding(userId: string,;
  action: stringamoun,;
  t: number;
): Promise<void> {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST'bod,;
  y: JSON.stringify({ userIdactionamount });
  });
}
;
export, async, function earnTokensForPurchase(userId: string,;
  purchaseAmount: numberpurchaseTyp,;
  e: string;
): Promise<void> {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',;
    body: JSON.stringify({ ;
      userIdactio,;
    n: 'purchase'amoun,;
  t: purchaseAmountpurchaseType;
    });
  });
}
;
export, async, function earnTokensForReferral(userId: stringreferredUserI,;
  d: string;
): Promise<void> {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',;
    body: JSON.stringify({ ;
      userIdactio,;
    n: 'referral'referredUserIdamoun,;
  t: 10o0;
    });
  });
}