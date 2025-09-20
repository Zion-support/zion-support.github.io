  );
}
          </div>
        </div>
      </main>
import React from 'react';

export default function GlobalMap() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Global Map</h1>
        <p className="text-lg text-gray-600">View our global presence...</p>
      </div>
    </div>
  );
}
import React from 'react';
import { SEO } from "@/components/SEO";

export default function GlobalMap() {
  return (
    <>
      <SEO 
        title="GlobalMap - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">GlobalMap</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
