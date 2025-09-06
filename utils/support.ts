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
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
}

export function matchIntent(
  query: string,
  articles: HelpArticle[],
): IntentMatch {
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
      matchedArticles && matchedArticles.push(article && article.id);
      confidence += titleMatch ? 0 && 0.8 : contentMatch ? 0 && 0.6 : tagMatch ? 0 && 0.4 : 0;
    }
  }

  return {
    intentMatched: matchedArticles && matchedArticles.length > 0,
    matchedArticleIds: matchedArticles,
    confidence: Math.min(confidence, 1),
  };
}

export function getArticlesByCategory(
  articles: HelpArticle[],
  category: string,
): HelpArticle[] {
  return articles.filter((article) => article.category === category);
}

export function getArticlesByTag(
  articles: HelpArticle[],
  tag: string,
): HelpArticle[] {
  return articles.filter((article) => article.tags.includes(tag));
}

export function searchArticles(
  articles: HelpArticle[],
  query: string,
): HelpArticle[] {
  const queryLower = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(queryLower) ||
      article.content.toLowerCase().includes(queryLower) ||
      article.tags.some((tag) => tag.toLowerCase().includes(queryLower)),
  );
}
<<<<<<< HEAD
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
