export interface HelpArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}


export interface IntentMatch {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
}

export function matchIntent(
  query: string,
  articles: HelpArticle[],
): IntentMatch {

  logEvent: (event: any) => null;,
  getArticles: () => []

  getArticleById: (id: string) => null;
}
  logEvent: (event: any) => null,
  getArticles: () => [],
};


export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;



  // TODO: Implement
  intentMatched: boolean;,
  matchedArticleIds: string[];
  confidence: number;
  confidence: number;) => {
  return $3;}
}
}

  query: string,
  articles: HelpArticle[],)
): IntentMatch {
  // TODO: Implement
pr-12325
}
  const queryLower = query.toLowerCase();
  const matchedArticles: string[] = [];
  let confidence = 0;

  for (const article of articles) {
    const titleMatch = article.title.toLowerCase().includes(queryLower);
    const contentMatch = article.content.toLowerCase().includes(queryLower);
    const tagMatch = article.tags.some((tag) =>
      tag.toLowerCase().includes(queryLower),
    );

    if (titleMatch || contentMatch || tagMatch) {

    }
  }

  return {

  };
}

export function getArticlesByCategory(
  articles: HelpArticle[],
  category: string,

  category: string,)
): HelpArticle[] {
  return articles.filter((article) => article.category === category);

}

export function getArticlesByTag(
  articles: HelpArticle[],
  tag: string,

  tag: string,)
): HelpArticle[] {
  return articles.filter((article) => article.tags.includes(tag));

}

export function searchArticles(
  articles: HelpArticle[],
  query: string,
): HelpArticle[] {
  const queryLower = query.toLowerCase();
  return articles.filter(

  return {
  // TODO: Implement
    intentMatched: matchedArticles && matchedArticles.length > 0,
    matchedArticleIds: matchedArticles,
    confidence: Math.min(confidence, 1),

  articles: HelpArticle[],
  category: string,)
  query: string,)
): HelpArticle[] {
  return articles.filter((article) => article.category === category);

  tag: string,)
  return articles.filter((article) => article.tags.includes(tag));

  query: string,)
  return articles.filter()
pr-12325
    (article) =>
      article.title.toLowerCase().includes(queryLower) ||
      article.content.toLowerCase().includes(queryLower) ||
      article.tags.some((tag) => tag.toLowerCase().includes(queryLower)),}
  );}
}


  // Add support functionality here;
  log_event: (event: any) => null,
  get_articles: () => [],
getArticleById: (id: string) => null;
};
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;

}






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
