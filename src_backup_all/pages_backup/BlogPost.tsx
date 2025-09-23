import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import type { BlogPost as BlogPostType } from "@/types/blog",
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';






import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
export default function BlogPost() {;


import { BLOG_POSTS } from "@/data/blog-posts"





export default function BlogPost() {


import { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import Link from 'next / link';
import { SEO } from '@/components / SEO';
import JsonLd from '@/components / JsonLd';
import { Button } from '@/components / ui / button';
import ImageWithRetry from '@/components / ui / ImageWithRetry';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import type { BlogPost as BlogPostType } from '@/types / blog';
import { Separator } from '@/components / ui / separator';
import ReactMarkdown from 'react - markdown';
import { logErrorToProduction } from '@/utils / production_logger';
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import { BLOG_POSTS } from '@/data / blog - posts';
import { useSkeletonTimeout } from '@/hooks / useSkeletonTimeout';
import { fetchWithRetry } from '@/utils / fetchWithRetry';
export default /**
 * BlogPost - Function description
 */
function BlogPost() {
  const router = use_router ();
  const { slug } = router.query as { slug: string }
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([])
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const timedOut = useSkeletonTimeout(20000)
  useEffect((,) => {
    const fetchPost = async () => {

      setIsLoading(true)
      setError(null)
      try {
        const data = await fetchWithRetry (`/api / blog/${slug}`);
        set_post (data);
        const related = BLOG_POSTS.filter (
          p =>;
            p.id !== data.id &&;
            (p.category === data.category ||;
              p.tags.some (tag => data.tags.includes (tag)))).slice (0, 3);
        setRelatedPosts (related);
        setIsLoading (false);

        return } catch (err) {



        logErrorToProduction('Failed to fetch blog post', { data: err });
        setError('Failed to load article');
      };



      const currentPost = BLOG_POSTS.find(p => p.slug === slug);      if (currentPost) {
        setPost(currentPost)
        const related = BLOG_POSTS.filter(
          p =>
            p.id !== currentPost.id &&
            (p.category === currentPost.category |
              p.tags.some(tag => currentPost.tags.includes(tag)))
        ).slice(0, 3)
        setRelatedPosts(related) } else {
        router.replace('/blog')
      const current_post = BLOG_POSTS.find (p => p.slug === slug);      // Check condition
if ( {) {
  $2
}
        set_post (current_post);
        const related = BLOG_POSTS.filter (
          p =>;
            p.id !== current_post.id &&;
            (p.category === current_post.category ||;
              p.tags.some (tag => current_post.tags.includes (tag)))).slice (0, 3);
        setRelatedPosts (related) } else {
        router.replace ('/blog');
      }
      setIsLoading (false);
    }

    fetchPost()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, router])
      setIsLoading(true),
      setError(null),
      try {
        const data = await fetchWithRetry(`/api/blog/${slug}`),
        setPost(data),
        const related = BLOG_POSTS.filter(
          (p) =>
            p.id !== data.id &&
            (p.category === data.category ||
              p.tags.some((tag) => data.tags.includes(tag)))
        ).slice(0, 3),
        setRelatedPosts(related),
        setIsLoading(false),
        return
      } catch (err) {
        logErrorToProduction('Failed to fetch blog post', { data: err }),
        setError('Failed to load article')
import { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import Link from 'next/link',;
import { SEO } from "@/components/SEO",;
import JsonLd from "@/components/JsonLd",;
import { Button } from "@/components/ui/button",;
import ImageWithRetry from '@/components/ui/ImageWithRetry',;
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost as BlogPostType } from "@/types/blog",;
import { Separator } from "@/components/ui/separator",;
import ReactMarkdown from 'react-markdown',;
import {logErrorToProduction} from '@/utils/productionLogger',;
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import { BLOG_POSTS } from "@/data/blog-posts",;
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout',;
import { fetchWithRetry } from '@/utils/fetchWithRetry',;
export default function BlogPost() {;
  const router = useRouter(),;
  const { slug } = router.query as { slug: string },;
  const [post, setPost] = useState<BlogPostType | null>(null),;
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),;
  const [showShareMenu, setShowShareMenu] = useState(false),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const timedOut = useSkeletonTimeout(20000),;
  useEffect(() => {;
    const fetchPost = async () => {;
      setIsLoading(true),;
      setError(null),;
      try {;
        const data = await fetchWithRetry(`/api/blog/${slug}`),;
        setPost(data),;
        const related = BLOG_POSTS.filter(;
          (p) =>;
            p.id !== data.id &&;
            (p.category === data.category ||;
              p.tags.some((tag) => data.tags.includes(tag)));
        ).slice(0, 3),;
        setRelatedPosts(related),;
        setIsLoading(false),;
        return;
      } catch (err) {;
        logErrorToProduction('Failed to fetch blog post', { data: err }),;
        setError('Failed to load article');
      }
;
      const currentPost = BLOG_POSTS.find((p) => p.slug === slug),;
      if (currentPost) {;
        setPost(currentPost),;
        const related = BLOG_POSTS.filter(;
          (p) =>;
            p.id !== currentPost.id &&;
            (p.category === currentPost.category ||;
              p.tags.some((tag) => currentPost.tags.includes(tag)));
        ).slice(0, 3),;
        setRelatedPosts(related);
      } else {;
        router.replace('/blog');
      }
      setIsLoading(false)
    },

    fetchPost(),
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, router]),
  







  if (isLoading && !timedOut) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    )
  }
  if (!post && (error |timedOut)) {
  if () {) {
  $2
}
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Failed to load article.</p>
        <Button onClick={() => router.reload()}>Retry</Button>
      </div>
    )
  }



  // If post is still null after loading, show not found
  if (!post) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Article not found.</p>
        <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
      </div>
    )
  }







  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    if (!post) return ''
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(post.title)
  // Helper function to get share URL;
  const getShareUrl = (platform: string) =>: any {
    // Check condition
if (return '') {
  $2
}
    const url = encodeURIComponent (window.location.href);
    const title = encodeURIComponent (post.title);
    switch (platform) {
      case 'facebook':        return `https://www.facebook.com / sharer / sharer.php?u=${url}`;
    switch (platform) {

      case 'facebook':;
        return `https://www.facebook.com / sharer / sharer.php?u=${url}`;
      case 'twitter':;
        return `https://twitter.com / intent / tweet?url=${url}&text=${title}`;
      case 'linkedin':;
        return `https://www.linkedin.com / share_article?mini = true & url=${url}&title=${title}`;
      default:;
        return '#';
  }





    author: {
      '@type': 'Person'
      name: post.author.name
    }
  }
  const router = useRouter(),;
  const { slug } = router && router.query as { slug: string },;
  const [post, setPost] = useState<BlogPostType | null>(null),;
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),;
  const [showShareMenu, setShowShareMenu] = useState(false),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const timedOut = useSkeletonTimeout(20000),;

  useEffect((,) => {;
    const fetchPost = async () => {;
      setIsLoading(true);
      setError(null);
      try {;
        const data = await fetchWithRetry(`/api/blog/${slug}`);
        setPost(data);
        const related = BLOG_POSTS && BLOG_POSTS.filter(;
          p =>;
            p && p.id !== data && data.id &&;
            (p && p.category === data && data.category ||;
              p && p.tags.some(tag => data && data.tags.includes(tag)));
        ).slice(0, 3);
        setRelatedPosts(related);
        setIsLoading(false);
        return;      } catch (err) {;
        logErrorToProduction('Failed to fetch blog post', { data: err });
        setError('Failed to load article');
      }

      const currentPost = BLOG_POSTS && BLOG_POSTS.find(p => p && p.slug === slug);      if (currentPost) {;
        setPost(currentPost);
        const related = BLOG_POSTS && BLOG_POSTS.filter(;
          p =>;
            p && p.id !== currentPost && currentPost.id &&;
            (p && p.category === currentPost && currentPost.category ||;
              p && p.tags.some(tag => currentPost && currentPost.tags.includes(tag)));
        ).slice(0, 3);
        setRelatedPosts(related);      } else {;
        router && router.replace('/blog');
      }
      setIsLoading(false);
    };

    fetchPost();
    window && window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, router]);

  if (isLoading && !timedOut) {;
    return (
      <div className='min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center'>;
        <div className='animate-pulse'>Loading article...</div>;
      </div>;
    );
  }

  if (!post && (error || timedOut)) {;
    return (
      <div className='min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4'>;
        <p>Failed to load article.</p>;
        <Button onClick={(,) => router && router.reload()}>Retry</Button>;
      </div>;
    );
  }

  // If post is still null after loading, show not found;
  if (!post) {;
    return (
      <div className='min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4'>;
        <p>Article not found.</p>;
        <Button onClick={(,) => router && router.push('/blog')}>Back to Blog</Button>;
      </div>;
    );
  }



;
  // Helper function to get share URL;
  const getShareUrl = (platform: string) => {;
    if (!post) return '';

    const url = encodeURIComponent(window && window.location.href);
    const title = encodeURIComponent(post && post.title);
    switch (platform) {;
      case 'facebook':        return `https://www && www.facebook.com/sharer/sharer && sharer.php?u=${url}`;

    switch (platform) {;
      case 'facebook':;







  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {






      />
      <JsonLd data={articleLd} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back to blog button */}
          <div className='mb-8'>;
            <Button
              variant='outline'
              className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'

      <SEO;
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join (', ')}
        og_image={post.featured_image}        canonical={`https://app.ziontechgroup.com / blog/${post.slug}`}
      />;
      <JsonLd data={article_ld} />;
      <div className='min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4'>;
        <div className='container mx - auto'>;
          {/* Back to blog button */}
          <div className='mb - 8'>;
            <Button;
              variant='outline';
              className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
              as_child;
            >;
              <Link href='/blog'>;
                <ArrowLeft className='mr - 2 h - 4 w - 4' />;
                Back to all articles;
              </Link>;
            </Button>;

          </div>;


          





                Ready to put these ideas into action? Explore our{' '}
                <Link href="/services" className="text-zion-cyan underline">AI services</Link>{' '}
                or browse expert{' '}
                <Link href='/talent' className='text-zion-cyan underline'>
                  talent
                </Link>{' '}
                to accelerate your projects.
                <Link href="/talent" className="text-zion-cyan underline">talent</Link> to accelerate your projects.





