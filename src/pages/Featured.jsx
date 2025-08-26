<<<<<<< HEAD
import React from 'react';

export default function Featured() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Featured <span className="text-zion-cyan">Listings</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our handpicked selection of premium AI products and services. 
            These featured listings represent the best that the Zion Marketplace has to offer.
          </p>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light text-lg">
                We're working on bringing you the best featured listings. 
                Check back soon for updates!
              </p>
            </div>
            
            {/* Placeholder Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-zion-slate-light/10 p-6 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-zion-cyan rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Featured Service {item}
                  </h3>
                  <p className="text-zion-slate-light mb-4">
                    This is a placeholder for upcoming featured services and products.
                  </p>
                  <div className="text-zion-cyan font-medium">
                    Coming Soon
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Be the first to know when our featured listings are available.
          </p>
          <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
            Get Notified
          </button>
        </div>
      </section>
    </div>
  );
=======
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { GradientHeading } from "@/components/GradientHeading";
export default function Featured() {
    return (<>
      
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover our handpicked selection of premium AI products and services. 
              These featured listings represent the best that the Zion Marketplace has to offer.
            </p>
          </div>
          
          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection showTitle={false}/>
        </div>
      </div>
      
    </>);
>>>>>>> origin/main
}
