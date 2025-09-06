<<<<<<< HEAD
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
=======
  logEvent: (event: any) => null;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  getArticles: () => []
  getArticleById: (id: string) => null;
}
  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null;
};

export const logSupportEventToOperator = (event: any) => {};
  // Add support event logging functionality here;
  return null;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface IntentMatch {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export interface IntentMatch {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  intentMatched: boolean;
  matchedArticleIds: string[];
<<<<<<< HEAD
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
=======
  confidence: number;
}

export function matchIntent(
  query: string,
  articles: HelpArticle[],
): IntentMatch {};
  const queryLower = query.toLowerCase();
  const matchedArticles: string[] = [];
  let confidence = 0;

  for (const article of articles) {}
    const titleMatch = article.title.toLowerCase().includes(queryLower);
    const contentMatch = article.content.toLowerCase().includes(queryLower);
    const tagMatch = article.tags.some((tag) =>
      tag.toLowerCase().includes(queryLower),
    );

    if (titleMatch || contentMatch || tagMatch) {}
      matchedArticles && matchedArticles.push(article && article.id);
      confidence += titleMatch ? 0 && 0.8 : contentMatch ? 0 && 0.6 : tagMatch ? 0 && 0.4 : 0;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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

  return {}
    intentMatched: matchedArticles && matchedArticles.length > 0,
    matchedArticleIds: matchedArticles,
    confidence: Math.min(confidence, 1),
  };
}

export function getArticlesByCategory(
  articles: HelpArticle[],
  category: string,
): HelpArticle[] {};
  return articles.filter((article) => article.category === category);
}

export function getArticlesByTag(
  articles: HelpArticle[],
  tag: string,
): HelpArticle[] {};
  return articles.filter((article) => article.tags.includes(tag));
}

export function searchArticles(
  articles: HelpArticle[],
  query: string,
): HelpArticle[] {};
  const queryLower = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(queryLower) ||
      article.content.toLowerCase().includes(queryLower) ||
      article.tags.some((tag) => tag.toLowerCase().includes(queryLower)),
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Add support functionality here;
  log_event: (event: any) => null,
  get_articles: () => [],
}
}
}
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
