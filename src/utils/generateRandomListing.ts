








export function generateRandomListing(): MarketplaceItem {
  const randomIndex = Math.floor(Math.random() * sampleTitles.length);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const price = priceRanges[Math.floor(Math.random() * priceRanges.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const sellerName = sellerNames[Math.floor(Math.random() * sellerNames.length)];

  return {
    id: `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: sampleTitles[randomIndex],
    category,
    description: sampleDescriptions[randomIndex],
    price,
    rating: 4.0 + Math.random() * 1.0,
    reviews: Math.floor(Math.random() * 200) + 10,
    views: Math.floor(Math.random() * 5000) + 100,
    likes: Math.floor(Math.random() * 300) + 20,
    image: sampleImages[Math.floor(Math.random() * sampleImages.length)],
    tags: sampleTags[randomIndex],
    featured: Math.random() > 0.7,
    seller: {
      name: sellerName,
      rating: 4.0 + Math.random() * 1.0,
      verified: Math.random() > 0.3
    },
    location,
    availability: Math.random() > 0.8 ? 'limited' : 'available',
    deliveryTime: category === 'talent' ? 'Immediate' : `${Math.floor(Math.random() * 8) + 2}-${Math.floor(Math.random() * 4) + 4} weeks`,
    warranty: category === 'talent' ? 'N/A' : `${Math.floor(Math.random() * 3) + 1} year${Math.floor(Math.random() * 3) + 1 > 1 ? 's' : ''}`
  };
}

export function generateRandomListings(count: number): MarketplaceItem[] {
  const listings: MarketplaceItem[] = [];
  for (let i = 0; i < count; i++) {
    listings.push(generateRandomListing());
  }
  return listings;
}