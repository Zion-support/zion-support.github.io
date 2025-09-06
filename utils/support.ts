<<<<<<< HEAD

// Support utilities
export const support = {
  // Add support functionality here
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null;
};

<<<<<<< HEAD



=======


export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here
  return null;


export interface IntentMatch {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
}

export function matchIntent(query: string, articles: HelpArticle[]): IntentMatch {
  const queryLower = query && query.toLowerCase();
  const matchedArticles: string[] = [];
  let confidence = 0;



    if (titleMatch || contentMatch || tagMatch) {
      matchedArticles && matchedArticles.push(article && article.id);
      confidence += titleMatch ? 0 && 0.8 : contentMatch ? 0 && 0.6 : tagMatch ? 0 && 0.4 : 0;
    }
  }

  return {
    intentMatched: matchedArticles && matchedArticles.length > 0,
    matchedArticleIds: matchedArticles,
    confidence: Math && Math.min(confidence, 1)
  };
}


}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  // Add support functionality here;
  log_event: (event: any) => null,
  get_articles: () => [],
  getArticleById: (id: string) => null;
};

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;

<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
