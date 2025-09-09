export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'content' | 'product' | 'page' | 'service' | 'recent';
  category?: string;
  url?: string;
}

export interface FilterOptions {
  types: Array<{
    value: string;
    label: string;
    count: number;
  }>;
  locations: Array<{
    value: string;
    label: string;
    count: number;
  }>;
  availability: Array<{
    value: string;
    label: string;
    count: number;
  }>;
}

export interface SearchFilters {
  types: string[];
  locations: string[];
  availability: string[];
  query?: string;
}