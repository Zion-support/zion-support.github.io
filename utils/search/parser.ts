// Search parser utilities
export const parseSearchQuery = (query: string) => {
  // Add search query parsing functionality here
  return {

    keywords: []
    skills: []
    location: null
    type: null

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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

    keywords: [],
    skills: [],
    location: null,
    type: null;
  };
};

export const searchAll = (parsed: any, access: any) => {
  // Add search functionality here
  return {
    all: [],
    talent: [],
    jobs: [],
    projects: [];

  };
};



export const suggestDidYouMean = (query: string) => {
  // Add did you mean functionality here;
  return null;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


export const suggestDidYouMean = (query: string) => {
  // Add did you mean functionality here;
  return null;

}


};

}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
