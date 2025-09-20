import React from 'react',
import ReactMarkdown from 'react-markdown',
import { useRouter } from 'next/router',
import AdvancedSEO from '@/components/seo/AdvancedSEO',
import { BLOG_POSTS } from '@/data/blog-posts',
import { AuthorBio } from '@/components/blog/AuthorBio',
import { SocialShareButtons } from '@/components/blog/SocialShareButtons',
import { CommentsSection } from '@/components/blog/CommentsSection',
import type { BlogPost } from '@/types/blog',
import type { GetStaticPaths, GetStaticProps } from 'next',
import { BLOG_POSTS } from '@/data/blog-posts',
import type { BlogPost } from '@/types/blog',

interface BlogProps {
  post: BlogPost | null
}

const BlogPostPage: React.FC<BlogProps> = ({ post }) => {
  if (!post) {
    return <div>Article not found</div>,
  }
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author.name
    }
  },
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{ title: post.title, description: post.excerpt, images: post.featuredImage }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
      </Head>
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement,
              target.src = '/images/blog-placeholder.svg',
            }}
          />
          <div>
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">
                {post.author.title}
              </p>
            )}
          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement,
                target.src = '/images/blog-placeholder.svg',
              }}
            />
          </div>
        )}
        <ReactMarkdown>{body}</ReactMarkdown>
        <AuthorBio author={post.author} />
        <SocialShareButtons title={post.title} />
        <CommentsSection slug={post.slug} />
      </main>
    </>
  ),
},

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = BLOG_POSTS.map((p) => ({ params: { slug: p.slug } })),
  return { paths, fallback: 'blocking' },
},

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const slug = params?.slug as string,
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http: //localhost:3000',

  try {
    const res = await fetch(`${appUrl}/api/blog/${slug}`),
    if (res.ok) {
      const post: BlogPost = await res.json(),
      return { props: { post }, revalidate: 60 },
    }
  } catch (e) {
    console.error('Failed to fetch blog post', e),
  }

  const post = BLOG_POSTS.find((p) => p.slug === slug) || null,

  if (!post) {
    return { notFound: true },
  }

  return { props: { post } },
},

export default BlogPostPage,

