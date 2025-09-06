<<<<<<< HEAD
  };

export async function parseQueryToFilters(
  query: string,
): Promise<SearchFilters> {
  const filters: SearchFilters = {};

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

  return filters;
}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
