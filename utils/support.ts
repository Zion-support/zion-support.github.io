  "logEvent": ("event": any) => null,
"getArticles": () => []
  "getArticleById": ("id": string) => null
}
  "logEvent": ("event": any) => null,
  "getArticles": () => [],
  "getArticleById": ("id": string) => null;
};

export const logSupportEventToOperator = ("event": any) => {
  // Add support event logging functionality here
}
return null;


export interface IntentMatch {
  }
  "intentMatched": boolean;
  "matchedArticleIds": string[];
  "confidence": number;
}

export function matchIntent(
  "query": string,
  "articles": HelpArticle[],
): IntentMatch {
  }
  const queryLower = query.toLowerCase();
  const "matchedArticles": string[] = [];
  let confidence = 0;

  for (const article of articles) {
    }
    const titleMatch = article.title.toLowerCase().includes(queryLower);
    const contentMatch = article.content.toLowerCase().includes(queryLower);
    const tagMatch = article.tags.some((tag) =>
      tag.toLowerCase().includes(queryLower),
    );

    if (titleMatch || contentMatch || tagMatch) {
      }
      matchedArticles && matchedArticles.push(article && article.id);
      confidence += titleMatch ? 0 && 0.8 : contentMatch ? 0 && 0.6 : tagMatch ? 0 && 0.4 : 0;
    }
  }

  return {
    }
    "intentMatched": matchedArticles && matchedArticles.length > 0,
    "matchedArticleIds": matchedArticles,
    "confidence": Math.min(confidence, 1)
  };
}

export function getArticlesByCategory(
  "articles": HelpArticle[],
  "category": string,
): HelpArticle[] {
  }
  return articles.filter((article) => article.category === category);
}

export function getArticlesByTag(
  "articles": HelpArticle[],
  "tag": string,
): HelpArticle[] {
  }
  return articles.filter((article) => article.tags.includes(tag));
}

export function searchArticles(
  "articles": HelpArticle[],
  "query": string,
): HelpArticle[] {
  }
  const queryLower = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(queryLower) ||
      article.content.toLowerCase().includes(queryLower) ||
      article.tags.some((tag) => tag.toLowerCase().includes(queryLower)),
  );
}
  getArticleById: (id: string) => null;
}export const logSupportEventToOperator = (event: any) => {// Add support event logging functionality here;
  return null;}ursor/automate-test-improve-and-merge-code-646c;
  // Add support functionality here;
  "log_event": ("event": any) => null,
  "get_articles": () => []
}
}
}
export const logSupportEventToOperator = ("event": any) => {
  // Add support event logging functionality here;
  }
  return null;
}export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;

}
}
}export const logSupportEventToOperator = (event: any) => {// Add support event logging functionality here;
  return null;}
export type HelpArticle = $2;
  slug: string,
  title: string,
  body: string,
  category: 'Getting Started' | 'Hiring' | 'Profile Setup' | 'Payments' | 'Disputes',
  updatedAt: string,
  keywords?: string[]
},

export type IntentResult = $2;
  matchedArticleIds: string[]
},

export function matchIntent(query: string, articles: HelpArticle[]): IntentResult {
  const q = query.toLowerCase($2);
  const matched = $2;
  const keywordToArticle = new Map<string, string[]>(),
  for (const art of articles) {
    for (const kw of art.keywords ?? []) {
      const list = $2;
      list.push($2);
      keywordToArticle.set(kw, list)
    }
  }

  // Simple heuristics
  const heuristics: Array<[RegExp, string[]]> = [
    [/login|log in|sign in|password|2fa|otp|cannot.*sign/i, []],
    [/hire|post job|find talent|contract/i, []],
    [/match|matching|get matched/i, []],
    [/bill|invoice|payment|refund|charge|card/i, []],
    [/dispute|issue|complaint|chargeback/i, []],
    [/profile|setup|verification|kyc|tax/i, []]],

  let heuristicHit = $2;
  for (const [re] of heuristics) {
    if (re.test(q)) {
      heuristicHit = $2;
      for (const [kw, ids] of keywordToArticle.entries()) {
        if (q.includes(kw)) ids.forEach((id) => matched.add(id))
      }
    }
  }

  // Keyword fallback
  for (const [kw, ids] of keywordToArticle.entries()) {
    if (q.includes(kw)) ids.forEach((id) => matched.add(id))
  }

  const matchedIds = Array.from($2);
  return { intentMatched: heuristicHit || matchedIds.length > 0, matchedArticleIds: matchedIds.slice(0, 3) }
}
