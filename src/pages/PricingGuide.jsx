import React, { useMemo, useState } from 'react';
import { Brain, Cloud, Zap, Shield, Database, TrendingUp, Globe } from 'lucide-react';

const EXPANDED_SERVICES = [];

export default function PricingGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return EXPANDED_SERVICES;
    return EXPANDED_SERVICES.filter(
      (service) => service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
    );
  }, [selectedCategory]);

  const getCategoryIcon = (category) => {
    const icons = {
      'AI Development': <Brain className="w-6 h-6" />,
      'Cloud Services': <Cloud className="w-6 h-6" />,
      DevOps: <Zap className="w-6 h-6" />,
      Cybersecurity: <Shield className="w-6 h-6" />,
      'Data & Analytics': <Database className="w-6 h-6" />,
      'Digital Transformation': <TrendingUp className="w-6 h-6" />,
      'Emerging Tech': <Globe className="w-6 h-6" />,
    };
    return icons[category] || <Globe className="w-6 h-6" />;
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Pricing Guide</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.map((svc) => (
          <div key={svc.title} className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              {getCategoryIcon(svc.category)}
              <h3 className="font-semibold">{svc.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{svc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}