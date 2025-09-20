import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface CategoryDetailProps {
  params: {
    slug: string;
  };
}

export default function CategoryDetail({ params }: CategoryDetailProps) {
  const category = {
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions and machine learning services to transform your business.',
    icon: '🧠'
  };

  return (
    <>
      <SEO
        title={`${category.title} | Zion AI`}
        description={category.description}
      />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
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
          
          <div className="text-center">
            <p className="text-gray-300">Category details and services coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}