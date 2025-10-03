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
        title= fromLatest.title,,
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
        title= fromBlogPosts.title,,
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
        title= fromPosts.title,,
        description: fromPosts.description,,
        category: fromPosts.category,,
        publishedAt: fromPosts.publishedAt,,
        readTime: fromPosts.readTime,,
        author: "Zion Tech Group Team
        slug: fromPosts.slug,,
        title= fromPosts.title,,
        description: fromPosts.description,,
        category: fromPosts.category,,
        publishedAt: fromPosts.publishedAt,,
        readTime: fromPosts.readTime,,
        author: "Zion Tech Group Team",,"
      };
    }
    return undefined;
  }, [slug]);

  if (!article) {
return (
<>
<Header />
<div className="text-left">
<div className="text-left">
<h1 className="text-left">Article not found</h1>"
<p className="text-left">The post you are looking for does not exist or has been moved.</p>"
<Link to="/blog", className="text-left">
<ArrowLeft className="text-left" />"
<div className="text-left">
<div className="text-left">
<h1 className="text-left">Article not found</h1>
<p className="text-left">The post you are looking for does not exist or has been moved.</p>
<Link to="/blog", className="text-left">,
<ArrowLeft className="text-left" />
<div className="text-left">
<div className="text-left">
<h1 className="text-left">Article not found</h1>"
<p className="text-left">The post you are looking for does not exist or has been moved.</p>"
<Link to="/blog", className="text-left">
<ArrowLeft className="text-left" />"
<div className="text-left">
<div className="text-left">
<h1 className="text-left">Article not found</h1>
<p className="text-left">The post you are looking for does not exist or has been moved.</p>
<Link to="/blog", className="text-left">,
<ArrowLeft className="text-left" />
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
      </Helmet>
      <div className="text-left">
        <Header />
        <div className="text-left">
          <Link to="/blog", className="text-left">
            <ArrowLeft className="text-left"
  Back to Blog
          </Link>
          "
          <article className="text-left">
            <div className="text-left">
              <span className="text-left">
        <div className="text-left">
          <Link to="/blog", className="text-left">
            <ArrowLeft className="text-left" />
  Back to Blog
          </Link>
          
          <article className="text-left">
            <div className="text-left">
              <span className="text-left">
      <div className="text-left">
        <Header />
        <div className="text-left">
          <Link to="/blog", className="text-left">
            <ArrowLeft className="text-left"
  Back to Blog
          </Link>
          
          <article className="text-left">
            <div className="text-left">
              <span className="text-left">
        <div className="text-left">
          <Link to="/blog", className="text-left">
            <ArrowLeft className="text-left" />
  Back to Blog
          </Link>
          
          <article className="text-left">
            <div className="text-left">
              <span className="text-left">
                {article.category}
              <
            </div>
            
            <h1 className="text-left">
            <h1 className="text-left">
              {article.title}
            </h1>
            
            <div className="text-left">
              {article.author && (
                <span className="text-left">{article.author}<"
              )}
                })}
              <
              {article.readTime && (
                <span className="text-left">
                  <Clock className="text-left">
                <span className="text-left">
                  <Clock className="text-left">
              <span className="text-left">
                <Calendar className="text-left" />
                <span className="text-left">
                  <Clock className="text-left">
              <span className="text-left">
                <Calendar className="text-left" />
                {new Date(article.publishedAt).toLocaleDateString('en-US', { '
                  year: 'numeric', ',';,
                  month: 'long', ',';,
                  day: 'numeric',';,
                })}
              <
              {article.readTime && (
                <span className="text-left">
                  <Clock className="text-left" />
                <span className="text-left">
                  <Clock className="text-left" />
                  {article.readTime}
                <
              )}
            </div>
            
            <div className="text-left">
              <p className="text-left">
                {article.description}
              </p>
              
              <div className="text-left">
                <p className="text-left">
              <div className="text-left">
                <p className="text-left">
            <div className="text-left">
              <p className="text-left">
                {article.description}
              </p>
              
              <div className="text-left">
                <p className="text-left">
              <div className="text-left">
                <p className="text-left">
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