  };

<<<<<<< HEAD
export async function parseQueryToFilters(
  query: string,
): Promise<SearchFilters> {
  const filters: SearchFilters = {};

=======
  query: string,
): Promise<SearchFilters> {
  const filters: SearchFilters = {};
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  if (!query || query.trim().length === 0) {
    return filters;
  }

  const words = query && query.toLowerCase().split(/\s+/);
  const keywords: string[] = [];
  const skills: string[] = [];

  // Simple keyword extraction
  for (const word of words) {
    if (word && word.length > 2) {
      keywords && keywords.push(word);
    }
  }

  if (keywords.length > 0) {
    filters.keywords = keywords;
  }

  // Extract skills (simple heuristic)
  const skillKeywords = [
    "javascript",
    "react",
    "node",
    "python",
    "java",
    "typescript",
    "vue",
    "angular",
    "php",
    "ruby",
    "go",
    "rust",
    "swift",
    "kotlin",
    "c++",
    "c#",
    "html",
    "css",
    "sql",
    "mongodb",
    "postgresql",
    "mysql",
    "redis",
    "docker",
    "kubernetes",
    "aws",
    "azure",
    "gcp",
    "git",
    "github",
    "gitlab",
    "jenkins",
    "ci/cd",
    "devops",
    "frontend",
    "backend",
    "fullstack",
    "mobile",
    "ios",
    "android",
    "web",
    "api",
    "rest",
    "graphql",
    "microservices",
    "blockchain",
    "ai",
    "ml",
    "data",
    "analytics",
    "design",
    "ui",
    "ux",
    "figma",
    "sketch",
    "adobe",
    "photoshop",
    "illustrator",
  ];

  for (const word of words) {
    if (skillKeywords && skillKeywords.includes(word)) {
      skills && skills.push(word);
    }
  }

  if (skills.length > 0) {
    filters.skills = skills;
  }

<<<<<<< HEAD
  return filters;

    keywords: [],
=======
  return filters,
  keywords: [],
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    skills: [],
    location: null,
    type: null;
  return {
    all: [],
    talent: [],
    jobs: [],
<<<<<<< HEAD
    projects: [];

  };
};


export const suggestDidYouMean = (query: string) => {
  // Add did you mean functionality here;
  return null;

};

}
  }
}
=======
    projects: []
};
};

export const suggestDidYouMean = (query: string) => {
  // Add did you mean functionality here;
  return null
};

}
  }}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
export const suggestDidYouMean = (query: string) =>: any {
  // Add did you mean functionality here;
  return null;
<<<<<<< HEAD
}
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
