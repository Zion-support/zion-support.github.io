import { SearchSuggestion } from "@/types/search, ";

export interface SearchResult {
  
id: string;
title: string;
description: string;
type: "product" | "talent" | "blog" | "service" | "doc";
category?: string;
url?: string;
image?: string;
price?: number;
currency?: string;
rating?: number;
tags?: string[];
}
date?: string;}
}

export interface SearchFilters {
  
types: string[];
category: string;
minPrice: number;
maxPrice: number;
minRating: number;
sort: string;
}
}
}
averagePrice: number;
averageRating: number;
}
minRating: 0;