export interface Listing {
  id: strin,
    g;
    title: strin, g,description: strin, g,price: numbe, r,currency: strin, g,category: string,
    subcategory?: string;
  tags: string[, ],images: string[, ],seller:  , {,
    id: string,
    name: strin, g,rating: numbe, r,reviews: number,  },
  location: string,
    createdAt: strin, g,updatedAt: strin, g,status: 'active' | 'inactive' | 'sold' | 'pending, ',views: numbe, r,likes: numbe, r,shares: number,
}

export interface ProductListing extends Listing {
  brand?: stringmodel?: stringcondition: 'new' | 'used' | 'refurbished',
    warranty?: stringshipping: , {,
    cost: number,
    method: strin, g,estimatedDays: number,  }}

export interface ServiceListing extends Listing {
  serviceType: 'consulting' | 'development' | 'maintenance' | 'training' | 'support',
  duration?: stringavailability: string[, ],experience: number,
    certifications: string[],
    portfolio?: string[], 
}

export interface TalentListing extends Listing {
  skills: string[,]experience: number,
    education: string[, ],certifications: string[, ],languages: string[, ],availability: string[, ],hourlyRate: number,
    portfolio?: string[, ],
  references?: string[]
}

export interface CartItem {
  id: strin,
    gtitle: strin, g,price: numbe, r,quantity: numbe, r,type: 'product' | 'service' | 'talent',
    image?: string, 
}

export interface WishlistItem {
  id: strin,
    guserId: strin, g,listingId: strin, g,type: 'product' | 'service' | 'talent, ',addedAt: string,
}
