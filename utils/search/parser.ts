// Search Parser - Parse search queries and extract keywords, skills, etc.
export interface ParsedQuery {
  keywords: string[];
  skills: string[];
  location?: string;
  budget?: {
    min?: number;
    max?: number;
  };
  experience?: {
    min?: number;
    max?: number;
  };
  type?: 'talent' | 'job' | 'project';
}

export function parseSearchQuery(query: string): ParsedQuery {
  const words = query.toLowerCase().split(/\s+/);
  const keywords: string[] = [];
  const skills: string[] = [];
  let location: string | undefined;
  let budget: { min?: number; max?: number } | undefined;
  let experience: { min?: number; max?: number } | undefined;
  let type: 'talent' | 'job' | 'project' | undefined;

  // Common skill keywords
  const skillKeywords = [
    'javascript', 'typescript', 'react', 'vue', 'angular', 'node', 'python', 'java', 'c++', 'c#',
    'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'dart', 'flutter', 'react-native',
    'html', 'css', 'sass', 'scss', 'tailwind', 'bootstrap', 'material-ui',
    'mongodb', 'mysql', 'postgresql', 'redis', 'elasticsearch', 'firebase',
    'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'jenkins',
    'git', 'github', 'gitlab', 'bitbucket', 'jira', 'confluence', 'slack',
    'figma', 'sketch', 'adobe', 'photoshop', 'illustrator', 'xd',
    'blockchain', 'web3', 'ethereum', 'solidity', 'defi', 'nft',
    'ai', 'ml', 'machine-learning', 'tensorflow', 'pytorch', 'opencv',
    'devops', 'ci-cd', 'testing', 'jest', 'cypress', 'selenium'
  ];

  // Common location keywords
  const locationKeywords = [
    'remote', 'onsite', 'hybrid', 'usa', 'canada', 'europe', 'asia', 'australia',
    'new york', 'san francisco', 'london', 'berlin', 'tokyo', 'singapore',
    'toronto', 'vancouver', 'mumbai', 'bangalore', 'sydney', 'melbourne'
  ];

  // Budget keywords
  const budgetKeywords = ['budget', 'price', 'cost', 'rate', 'hourly', 'salary'];

  // Experience keywords
  const experienceKeywords = ['junior', 'senior', 'lead', 'principal', 'years', 'experience'];

  // Type keywords
  const typeKeywords = {
    'talent': ['developer', 'designer', 'freelancer', 'contractor', 'consultant'],
    'job': ['job', 'position', 'role', 'career', 'employment'],
    'project': ['project', 'gig', 'task', 'assignment', 'work']
  };

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const nextWord = words[i + 1];

    // Check for skills
    if (skillKeywords.includes(word)) {
      skills.push(word);
    }

    // Check for location
    if (locationKeywords.includes(word)) {
      location = word;
    }

    // Check for budget
    if (budgetKeywords.includes(word)) {
      const budgetMatch = query.match(/(\d+)\s*-\s*(\d+)/);
      if (budgetMatch) {
        budget = {
          min: parseInt(budgetMatch[1]),
          max: parseInt(budgetMatch[2])
        };
      } else if (nextWord && !isNaN(parseInt(nextWord))) {
        budget = {
          min: parseInt(nextWord)
        };
      }
    }

    // Check for experience
    if (experienceKeywords.includes(word)) {
      const expMatch = query.match(/(\d+)\s*-\s*(\d+)\s*years?/);
      if (expMatch) {
        experience = {
          min: parseInt(expMatch[1]),
          max: parseInt(expMatch[2])
        };
      } else if (word === 'junior') {
        experience = { max: 2 };
      } else if (word === 'senior') {
        experience = { min: 5 };
      } else if (word === 'lead' || word === 'principal') {
        experience = { min: 8 };
      }
    }

    // Check for type
    for (const [typeKey, typeWords] of Object.entries(typeKeywords)) {
      if (typeWords.some(tw => word.includes(tw))) {
        type = typeKey as 'talent' | 'job' | 'project';
        break;
      }
    }

    // Add as keyword if not categorized
    if (!skillKeywords.includes(word) && 
        !locationKeywords.includes(word) && 
        !budgetKeywords.includes(word) && 
        !experienceKeywords.includes(word) &&
        !Object.values(typeKeywords).flat().some(tw => word.includes(tw))) {
      keywords.push(word);
    }
  }

  return {
    keywords,
    skills,
    location,
    budget,
    experience,
    type
  };
}

export function suggestDidYouMean(query: string): string[] {
  const suggestions: string[] = [];
  const words = query.toLowerCase().split(/\s+/);
  
  // Common typos and corrections
  const corrections: Record<string, string[]> = {
    'javascrip': ['javascript'],
    'typescrip': ['typescript'],
    'reac': ['react'],
    'nod': ['node'],
    'pytho': ['python'],
    'htm': ['html'],
    'cs': ['css'],
    'mong': ['mongodb'],
    'postgres': ['postgresql'],
    'aw': ['aws'],
    'gcp': ['google cloud'],
    'kubernete': ['kubernetes'],
    'githu': ['github'],
    'gitla': ['gitlab'],
    'figm': ['figma'],
    'adob': ['adobe'],
    'blockchai': ['blockchain'],
    'ethereu': ['ethereum'],
    'solidit': ['solidity'],
    'machin': ['machine learning'],
    'tensorflo': ['tensorflow'],
    'pytor': ['pytorch'],
    'devop': ['devops'],
    'testin': ['testing'],
    'juni': ['junior'],
    'senio': ['senior'],
    'principa': ['principal'],
    'develope': ['developer'],
    'designe': ['designer'],
    'freelanc': ['freelancer'],
    'contracto': ['contractor'],
    'consultan': ['consultant'],
    'positio': ['position'],
    'caree': ['career'],
    'employmen': ['employment'],
    'projec': ['project'],
    'tas': ['task'],
    'assignmen': ['assignment']
  };

  for (const word of words) {
    if (corrections[word]) {
      suggestions.push(...corrections[word]);
    }
  }

  return [...new Set(suggestions)].slice(0, 5);
}