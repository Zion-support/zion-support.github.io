<<<<<<< HEAD
// Support utilities
export const support = {
  // Add support functionality here
<<<<<<< HEAD
  logEvent: (event: any) => null
  getArticles: () => []
  getArticleById: (id: string) => null
}
=======
  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null;
};

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;
<<<<<<< HEAD
}
=======
export type HelpArticle = {
  id: string;
  slug: string;
  title: string;
  body: string;
  category:
    | 'Getting Started'
    | 'Hiring'
    | 'Profile Setup'
    | 'Payments'
    | 'Disputes';
  updatedAt: string;
  keywords?: string[];
};

export type IntentResult = {
  intentMatched: boolean;
  matchedArticleIds: string[];
};
}

export function matchIntent(
  query: string,
  articles: HelpArticle[]
): IntentResult {
  const q = query.toLowerCase();
  const matched = new Set<string>();

  const keywordToArticle = new Map<string, string[]>();
  
  }

  // Simple heuristics
  const heuristics: Array<[RegExp, string[]]> = [
    [/login|log in|sign in|password|2fa|otp|cannot.*sign/i, []],
    [/hire|post job|find talent|contract/i, []],
    [/match|matching|get matched/i, []],
    [/bill|invoice|payment|refund|charge|card/i, []],
    [/dispute|issue|complaint|chargeback/i, []],
    [/profile|setup|verification|kyc|tax/i, []],
  ];

  let heuristicHit = false;
  for (const [re] of heuristics) {
    if (re.test(q)) {
      heuristicHit = true;
      for (const [kw, ids] of keywordToArticle.entries()) {
        if (q.includes(kw)) ids.forEach(id => matched.add(id));
      }
    }
  }

  // Keyword fallback
  for (const [kw, ids] of keywordToArticle.entries()) {
    if (q.includes(kw)) ids.forEach(id => matched.add(id));
  }

  const matchedIds = Array.from(matched);
  return {
    intentMatched: heuristicHit || matchedIds.length > 0,
    matchedArticleIds: matchedIds.slice(0, 3),
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
};
=======

}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
