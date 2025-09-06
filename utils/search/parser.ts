// Search parser utilities;
export const parseSearchQuery = (query: string) =>: any {
  // Add search query parsing functionality here;
  return {
    keywords: [],
    skills: [],
    location: null,
    type: null;
  }
}
;
export const search_all = (parsed: any, access: any) =>: any {
  // Add search functionality here;
  return {
    all: [],
    talent: [],
    jobs: [],
    projects: [];
  }
}
;
export const suggestDidYouMean = (query: string) =>: any {
  // Add did you mean functionality here;
  return null;
}