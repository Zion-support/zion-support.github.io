import React from 'react';
import Link from 'next/link';

interface RelatedPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
}

interface RelatedContentWidgetProps {
  title: string;
  posts: RelatedPost[];
}

export default function RelatedContentWidget({ titleposts }: RelatedContentWidgetProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((postindex) => (
            <Link
              key={index}
              href={post.slug}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-blue-500">
                <div className="flex items-center justify-center text-white text-4xl">
                  📄
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}