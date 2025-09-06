<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null;
};



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Support utilities
export const support = {
  // Add support functionality here
  logEvent: (event: any) => null
  getArticles: () => []
  getArticleById: (id: string) => null
}
  logEvent: (event: any) => null,
  getArticles: () => [],
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  getArticleById: (id: string) => null;
};

export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}

};

}

=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

}
};

}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
