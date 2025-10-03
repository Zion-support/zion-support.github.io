import React from "react";
import Header from "../../components/Header";

export default function PostBySlug(): React.JSX.Element {
  const { slug } = useParams();

  const article: React.useMemo(()  => {,,
  if (!slug) return undefined;
    const fromLatest: latestArticles.find((a) => a.slug: = = slug);,,
  if (fromLatest) {
      return {
        slug: fromLatest.slug,,
        title: fromLatest.title,,
        description: fromLatest.description || fromLatest.excerpt,,
        category: fromLatest.category,,
        publishedAt: fromLatest.date,,
        readTime: fromLatest.readTime,,
        author: fromLatest.author};
    }
    const fromBlogPosts: blogPosts.find((p) => p.slug: = = slug);,,
  if (fromBlogPosts) {
      return {
        slug: fromBlogPosts.slug,,
        title: fromBlogPosts.title,,
        description: fromBlogPosts.description,,
        category: fromBlogPosts.category,,
        publishedAt: fromBlogPosts.date,,
        readTime: fromBlogPosts.readTime,,
        author: fromBlogPosts.author};
    }
    const fromPosts: staticPosts.find((p) => p.slug: = = slug);,,
  if (fromPosts) {
      return {
        slug: fromPosts.slug,,
        title: fromPosts.title,,
        description: fromPosts.description,,
        category: fromPosts.category,,
        publishedAt: fromPosts.publishedAt,,
        readTime: fromPosts.readTime,,
        author: "Zion Tech Group Team",
        slug: fromPosts.slug,,
        title: fromPosts.title,,
        description: fromPosts.description,,
        category: fromPosts.category,,
        publishedAt: fromPosts.publishedAt,,
        readTime: fromPosts.readTime,,
        author: "Zion Tech Group Team",,
      };
    }
    return undefined;
  }, [slug]);

  if (!article) {
return (
<>
<Header />
<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Article not found</h3>
<p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">The post you are looking for does not exist or has been moved.</h3>
<Link to="/blog", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Article not found</h1>",
<p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">The post you are looking for does not exist or has been moved.</p>",
<Link to="/blog", className ="text-zion-cyan hover: underline inline-flex items-center gap-2">,",
<ArrowLeft className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Article not found</h3>
<p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">The post you are looking for does not exist or has been moved.</h3>
<Link to="/blog", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<ArrowLeft className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
<h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Article not found</h1>",
<p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">The post you are looking for does not exist or has been moved.</p>",
<Link to="/blog", className ="text-zion-cyan hover: underline inline-flex items-center gap-2">,",
<ArrowLeft className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Back to Blog
</Link>
</div>
</div>
</>
);
}

  return (
    <>
      <Helmet >
        <title >{article.title} | Zion Tech Group</title>
        <meta name="description" content="{article.description} /">";
        <meta property: "og:title", content="{article.title} /">";
        <meta property: "og:description", content="{article.description} /">";
        <meta property: "og:type", content="article" />
        <meta name="description", content="{article.description} /">
        <meta property: "og:type", content="article" />
        <meta name="description" content="{article.description} /">
        <meta property: "og:title", content="{article.title} /">
        <meta property: "og:description", content="{article.description} /">
        <meta property: "og: type", content="article" />",
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <Link to="/blog", className ="text-zion-cyan hover: text-zion-blue-light mb-8 inline-flex items-center gap-2 transition-colors>
            <ArrowLeft className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <ArrowLeft className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Back to Blog
          </Link>
          
          <article className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <Link to="/blog", className ="text-zion-cyan hover: text-zion-blue-light mb-8 inline-flex items-center gap-2 transition-colors>
            <ArrowLeft className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <ArrowLeft className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Back to Blog
          </Link>
          
          <article className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{article.author}</h3>
              )}
              <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {article.title}
            </h1>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{article.author}</h3>
              )}
              <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Calendar className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                {new Date(article.publishedAt).toLocaleDateString('en-US', { ';';
                  year: 'numeric',';,';,
                  month: 'long',';,';,
                  day: 'numeric' ,';,
                })}
              </span>
              {article.readTime && (
                <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Calendar className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', ',';,
                  month: 'long', ',';,
                  day: 'numeric',';,
                })}
              </span>
              {article.readTime && (
                <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                  {article.readTime}
                </span>
              )}
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  💡 <strong >Coming Soon: </strong> Full article content will be available shortly. ,,
                  This preview shows the key insights and value proposition of this groundbreaking topic.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
;