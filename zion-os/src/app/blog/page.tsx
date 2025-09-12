export default function BlogIndexPage() {
  const posts = [
    {
      slug: "introducing-zion-os",
      title: "Introducing Zion OS: Launch AI-Powered Digital Economies",
      excerpt:
        "An overview of the Zion OS platform and how it helps you deploy sovereign digital economies with AI at the core.",
      date: "2025-09-12",
      tag: "Announcement",
    },
    {
      slug: "ai-marketplaces-blueprint",
      title: "Blueprint: Building AI-Powered Marketplaces",
      excerpt:
        "Key architecture patterns, services, and deployment strategies for launching resilient AI marketplaces.",
      date: "2025-09-12",
      tag: "Guide",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-white/70 mb-10">
          Insights, announcements, and guides from the Zion OS team.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors bg-zinc-900/40"
            >
              <div className="text-sm text-white/50 mb-2">{post.date} • {post.tag}</div>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-white/70">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

