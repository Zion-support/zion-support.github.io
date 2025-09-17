    </div>
  );
};

        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <a key={post.slug} href={`/news/${post.slug}`} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <p className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
                <h3 className="mt-1 text-white font-semibold group-hover:text-blue-400">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-3">{post.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-blue-400 group-hover:text-blue-300">Read more →</span>
              </a>
