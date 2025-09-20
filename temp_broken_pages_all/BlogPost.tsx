import React from 'react';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from '@/utils/productionLogger';
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';

export default function BlogPost() {
  // Sample blog post data
  const post = {
    title: 'The Future of AI: 2025 Predictions and Beyond',
    excerpt: 'Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond.',
    content: '# The Future of AI\n\nThis is a sample blog post content...',
    author: 'Dr. Sarah Chen',
    publishDate: '2025-01-15',
    readTime: '5 min read',
    tags: ['AI', 'Technology', 'Future'],
    featuredImage: '/api/placeholder/800/400'
  };

  return (
    <>
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto'>
          {/* Back to blog button */}
          <div className='mb-8'>
            <button className='flex items-center text-zion-cyan hover:text-white transition-colors'>
              <ArrowLeft className='h-4 w-4 mr-2' />
              Back to Blog
            </button>
          </div>

          {/* Article Header */}
          <article className='max-w-4xl mx-auto'>
            <header className='mb-12'>
              <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                {post.title}
              </h1>
              
              <div className='flex flex-wrap items-center gap-6 text-zion-slate-light mb-8'>
                <div className='flex items-center gap-2'>
                  <Calendar className='h-4 w-4' />
                  <span>{post.publishDate}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='h-4 w-4' />
                  <span>{post.readTime}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span>By {post.author}</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-8'>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-zion-blue-dark text-zion-cyan rounded-full text-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <button className='p-2 rounded-full bg-zion-blue-dark hover:bg-zion-blue-light transition-colors'>
                    <Share2 className='h-5 w-5 text-zion-cyan' />
                  </button>
                  <button className='p-2 rounded-full bg-zion-blue-dark hover:bg-zion-blue-light transition-colors'>
                    <Facebook className='h-5 w-5 text-zion-cyan' />
                  </button>
                  <button className='p-2 rounded-full bg-zion-blue-dark hover:bg-zion-blue-light transition-colors'>
                    <Twitter className='h-5 w-5 text-zion-cyan' />
                  </button>
                  <button className='p-2 rounded-full bg-zion-blue-dark hover:bg-zion-blue-light transition-colors'>
                    <Linkedin className='h-5 w-5 text-zion-cyan' />
                  </button>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className='prose prose-invert max-w-none'>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <Separator className='my-12 bg-zion-slate' />

            {/* Author Bio */}
            <div className='bg-zion-blue-dark rounded-lg p-6 mb-12'>
              <div className='flex items-start gap-4'>
                <div className='w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center'>
                  <span className='text-2xl font-bold text-white'>SC</span>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-white mb-2'>{post.author}</h3>
                  <p className='text-zion-slate-light'>
                    Chief Technology Officer at Zion Tech Group with over 10 years of experience in AI and machine learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className='flex justify-between items-center'>
              <button className='flex items-center gap-2 text-zion-cyan hover:text-white transition-colors'>
                <ChevronLeft className='h-4 w-4' />
                Previous Article
              </button>
              <button className='flex items-center gap-2 text-zion-cyan hover:text-white transition-colors'>
                Next Article
                <ChevronRight className='h-4 w-4' />
              </button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}