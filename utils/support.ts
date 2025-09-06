<<<<<<< HEAD
export type HelpArticle = {;
  id: string;
  slug: string;
  title: string;
  body: string;
  category: 'Getting Started' | 'Hiring' | 'Profile Setup' | 'Payments' | 'Disputes';
  updatedAt: string;
  keywords?: string[];
};
export type IntentResult = {;
=======
  logEvent: (event: any) => null
  getArticles: () => []
  getArticleById: (id: string) => null
}
  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null;
};

export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here
  return null;


export interface IntentMatch {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  intentMatched: boolean;
  matchedArticleIds: string[];
};
export function matchIntent(query: string, articles: HelpArticle[]): IntentResult {;
  const q = query.toLowerCase();
  const matched = new Set<string>();
  const keywordToArticle = new Map<string string[]>();
  for (const art of articles) {;
    for (const kw of art.keywords ?? []) {;
      const list = keywordToArticle.get(kw) ?? [];
      list.push(art.id);
      keywordToArticle.set(kw, list);
    }
  }
<<<<<<< HEAD
;
  // Simple heuristics;
  const heuristics: Array<[RegExp, string[]]> = [;
    [/login|log in|sign in|password|2fa|otp|cannot.*sign/i, []];
    [/hire|post job|find talent|contract/i, []];
    [/match|matching|get matched/i, []];
    [/bill|invoice|payment|refund|charge|card/i, []];
    [/dispute|issue|complaint|chargeback/i, []];
    [/profile|setup|verification|kyc|tax/i, []]];
  let heuristicHit = false;
  for (const [re] of heuristics) {;
    if (re.test(q)) {;
      heuristicHit = true;
      for (const [kw, ids] of keywordToArticle.entries()) {;
        if (q.includes(kw)) ids.forEach((id) => matched.add(id));
      }
    }
  }
;
  // Keyword fallback;
  for (const [kw, ids] of keywordToArticle.entries()) {;
    if (q.includes(kw)) ids.forEach((id) => matched.add(id));
  }
;
  const matchedIds = Array.from(matched);
  return { intentMatched: heuristicHit || matchedIds.length > 0, matchedArticleIds: matchedIds.slice(0, 3) }
}
=======

  return {
    intentMatched: matchedArticles && matchedArticles.length > 0,
    matchedArticleIds: matchedArticles,
    confidence: Math && Math.min(confidence, 1)
  };
}

export function getArticlesByCategory(articles: HelpArticle[], category: string): HelpArticle[] {
  return articles && articles.filter(article => article && article.category === category);
}

export function getArticlesByTag(articles: HelpArticle[], tag: string): HelpArticle[] {
  return articles && articles.filter(article => article && article.tags.includes(tag));
}

export function searchArticles(articles: HelpArticle[], query: string): HelpArticle[] {
  const queryLower = query && query.toLowerCase();
  return articles && articles.filter(article => 
    article && article.title.toLowerCase().includes(queryLower) ||
    article && article.content.toLowerCase().includes(queryLower) ||
    article && article.tags.some(tag => tag && tag.toLowerCase().includes(queryLower))
  );
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  // Add support functionality here;
  log_event: (event: any) => null,
  get_articles: () => [],
<<<<<<< HEAD
}
}
}
=======
  getArticleById: (id: string) => null;
};

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
