import React, { Suspense } from 'react';
import { NextSeo } from "@/components/NextSeo";
import Header from "@/components/Header";
import Link from "next/link";
import { GradientHeading } from "@/components/GradientHeading";
import { ProductListingCard } from "@/components/ProductListingCard";
import { ListingGridSkeleton } from "@/components/ListingGridSkeleton";
import { CATEGORIES } from "@/data/categories";
import { useRouter } from "next/router";

export default function CategoryDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  const category = CATEGORIES.find(cat => cat.slug === slug);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-xl mb-8">The category you're looking for doesn't exist.</p>
          <Link href="/categories">
            <button className="bg-zion-cyan text-zion-blue px-6 py-3 rounded-lg hover:bg-zion-cyan-light transition-colors">
              Back to Categories
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const seoTitle = `${category.title} - Zion AI Marketplace`;
  const seoDescription = category.description;
  
  // Mock data for listings - in a real app, this would come from an API
  const listings = [
    {
      id: 1,
      title: "AI-Powered Analytics Service",
      description: "Advanced analytics powered by machine learning",
      price: "$99/month",
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Machine Learning Consulting",
      description: "Expert consultation for ML implementation",
      price: "$150/hour",
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/300/200"
    }
  ];

  const handleRequestQuote = (listingId: number) => {
    // Handle quote request
    console.log('Requesting quote for listing:', listingId);
  };

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Header />
      <Suspense fallback={<ListingGridSkeleton />}>
        <div className="min-h-screen bg-zion-blue">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-4">
              <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
                ← Back to Categories
              </Link>
            </div>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                  {category.icon}
                </div>
              </div>
              <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
                {category.title}
              </GradientHeading>
              <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<<<<<<< HEAD:temp_broken_pages/CategoryDetail.tsx
              {listings.map((listing,) => (
                <ProductListingCard
key = {listing.id,}
                  listing = {listing,}
                  onRequestQuote = {handleRequestQuote,}
=======
              {listings.map((listing) => (
                <ProductListingCard
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee:src/pages/CategoryDetail.tsx
                  detailBasePath="/marketplace/listing"
                />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}