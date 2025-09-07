// Search filter utilities
export interface SearchFilter {
  query?: string;
  category?: string;
  tags?: string[];
}

export const createSearchFilter = (params: any): SearchFilter => {
  return {
    query: params.q || params.query,
    category: params.category,
    tags: params.tags ? params.tags.split(',') : []
  };
};