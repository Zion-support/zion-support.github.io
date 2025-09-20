import React from 'react';
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';

const categories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions and machine learning services',
    icon: Briefcase,
    count: 25
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Advanced data processing and analytics tools',
    icon: HardDrive,
    count: 18
  },
  {
    id: 'automation',
    name: 'Automation',
    description: 'Intelligent automation and workflow optimization',
    icon: Lightbulb,
    count: 32
  },
  {
    id: 'consulting',
    name: 'Consulting',
    description: 'Expert technology consulting services',
    icon: Users,
    count: 15
  }
];

export default function AllCategoriesPage() {
  return (
    <ErrorBoundary>
      <div className='min-h-screen bg-zion-blue'>
        <div className='container mx-auto px-4 py-12'>
          <div className='text-center mb-12'>
            <GradientHeading
              level='h1'
              className='text-4xl md:text-5xl font-bold mb-4'
            >
              All Categories
            </GradientHeading>
            <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
              Explore our extensive range of AI services and products. Find exactly what you're looking for to enhance your business or personal projects.
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                href={`/services?category=${category.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}