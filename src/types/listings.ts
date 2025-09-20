import React from "react";

export interface Listing {id: string; title: string; description: string; price: number; currency: string; category: string; tags: string[];
}
returns?: {allowed: boolean; days: number; cost: number};
}

export interface ListingFilter {category?: string;
}
priceRange?: {}
min: number; max: number};
