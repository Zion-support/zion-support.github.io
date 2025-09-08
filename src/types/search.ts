export interface SearchSuggestion {
  id: string;
  title: string;
  category?: string;
  url?: string;
  type: 'page' | 'product' | 'service' | 'content';
}

export interface SearchFilters {
  category?: string;
  type?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: string;
  relevance: number;
  lastModified?: Date;
}