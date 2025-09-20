import React from "react";

<<<<<<< HEAD
export interface Listing {
id: string; title: string; description: string; price: number; currency: string; category: string; tags: string[];,
=======
export interface Listing {id: string; title: string; description: string; price: number; currency: string; category: string; tags: string[];
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
avatar: string; rating: number; reviews: number};
location: {,
city: string; country: string;
coordinates?: [number; number]};
status: "active" | "sold" | "expired" | "draft", createdAt: Date; updatedAt: Date; views: number; favorites: number; condition: "new" | "like-new" | "good" | "fair" | "poor";
specifications?: Record<string; any>;
shipping?: {,
available: boolean; cost: number; method: string; estimatedDays: number};
<<<<<<< HEAD
returns?: {
allowed: boolean; days: number; cost: number};
}

export interface ListingFilter {
category?: string;
priceRange?: {
min: number; max: number};
author?: {
name: string; id: string;
=======
returns?: {allowed: boolean; days: number; cost: number};
}

export interface ListingFilter {category?: string;
}
priceRange?: {}
min: number; max: number};
author?: {name: string; id: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
avatarUrl?: string};
location?: string;
availability?: string;
aiScore?: number;
pricingTier?: string;
}