import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../content/posts';

const Post: React.FC = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
        <Link to="/blog" className="text-indigo-600 font-medium hover:text-indigo-700">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} – Zion Insights</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-indigo-600 font-medium mb-2">{post.category}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
          <div className="text-gray-500 mb-8">Published {new Date(post.publishedAt).toLocaleDateString()}</div>

          <p className="text-gray-700 leading-relaxed mb-4">{post.description}</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is a preview post. The full article content can be expanded here with sections, images,
            and code examples. For now, we highlight key takeaways and link back to the blog.
          </p>

          <div className="mt-10">
            <Link to="/blog" className="text-indigo-600 font-medium hover:text-indigo-700">← Back to all articles</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;

