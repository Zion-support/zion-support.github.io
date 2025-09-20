export default function BlogPostPage({ params }: Params) {
  const post = getPostById(params.id);
