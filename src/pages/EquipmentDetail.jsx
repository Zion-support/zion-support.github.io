import React from 'react';

export const SAMPLE_EQUIPMENT = {
  id: 'sample-1',
  name: 'Sample Equipment',
  description: 'This is a sample equipment item for testing purposes.',
  price: 999.99,
  category: 'Sample Category',
  condition: 'New',
  location: 'Sample Location'
};

export default function EquipmentDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>
          <p className="text-zion-slate-light mb-8">
            The equipment you're looking for doesn't exist or has been removed.
          </p>
          <a 
            href="/" 
            className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
