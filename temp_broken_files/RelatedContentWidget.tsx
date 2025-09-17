<<<<<<< HEAD:temp_broken_files/RelatedContentWidget.tsx
import React from 'react';
const RelatedContentWidget: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((postindex) => (
            <a
              key={index}
              href={post.slug}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-blue-500">
                <div className="flex items-center justify-center text-white text-4xl">
                  📄
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
          ))}
  );
};


export default RelatedContentWidget;
=======
import React from "react";

const function RelatedContentWidget({ titleposts }: RelatedContentWidgetProps) { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function RelatedContentWidget({ titleposts }: RelatedContentWidgetProps) {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function RelatedContentWidget({ titleposts }: RelatedContentWidgetProps) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/RelatedContentWidget.tsx
