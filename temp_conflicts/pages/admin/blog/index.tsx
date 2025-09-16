
const emptyPost: Partial<BlogPost> = {
  title: '',
  slug: '',
  author: '',
  publishDate: new Date().toISOString().slice(0, 10),
  tags: [],
  topics: [],
  seo: { metaTitle: '', metaDescription: '', ogImageUrl: '' },
  body: '',

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">Blog Admin</h1>

      <div className="mb-6 flex gap-2 items-center">
        <input value={token} onChange={(e) => setToken(e.target.value)} placeholder="Admin token" className="border rounded px-3 py-2 w-72" />
        <button onClick={saveToken} className="px-3 py-2 border rounded">Save token</button>
        <button onClick={() => startEdit()} className="ml-auto px-3 py-2 bg-indigo-600 text-white rounded">New Post</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border rounded p-3 h-[70vh] overflow-auto">
          <h2 className="font-semibold mb-2">All Posts</h2>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.id} className="flex items-center justify-between">
                <button onClick={() => startEdit(p)} className="text-left underline">{p.title}</button>
                <span className={`text-xs px-2 py-1 rounded ${p.status === 'published' ? 'bg-green-100' : 'bg-yellow-100'}`}>{p.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 border rounded p-4">
          <h2 className="font-semibold mb-3">Editor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" placeholder="Title" value={editing.title || ''} onChange={(e) => setEditing((s) => ({ ...s, title: e.target.value, seo: { ...(s.seo || { metaTitle: '', metaDescription: '' }), metaTitle: e.target.value } }))} />
            <input className="border rounded px-3 py-2" placeholder="Slug (permalink)" value={editing.slug || ''} onChange={(e) => setEditing((s) => ({ ...s, slug: e.target.value }))} />
            <input className="border rounded px-3 py-2" placeholder="Cover Image URL" value={editing.coverImageUrl || ''} onChange={(e) => setEditing((s) => ({ ...s, coverImageUrl: e.target.value }))} />
            <input className="border rounded px-3 py-2" placeholder="Author" value={editing.author || ''} onChange={(e) => setEditing((s) => ({ ...s, author: e.target.value }))} />
            <input type="date" className="border rounded px-3 py-2" value={(editing.publishDate || '').slice(0, 10)} onChange={(e) => setEditing((s) => ({ ...s, publishDate: new Date(e.target.value).toISOString() }))} />
            <input className="border rounded px-3 py-2" placeholder="SEO Meta Title" value={editing.seo?.metaTitle || ''} onChange={(e) => setEditing((s) => ({ ...s, seo: { ...(s.seo || {} as any), metaTitle: e.target.value } }))} />
            <input className="border rounded px-3 py-2" placeholder="SEO Meta Description" value={editing.seo?.metaDescription || ''} onChange={(e) => setEditing((s) => ({ ...s, seo: { ...(s.seo || {} as any), metaDescription: e.target.value } }))} />
          </div>
          <textarea className="border rounded px-3 py-2 mt-3 w-full h-64" placeholder="Body (Markdown or HTML)" value={editing.body || ''} onChange={(e) => setEditing((s) => ({ ...s, body: e.target.value }))} />

          <div className="mt-3 flex gap-2">
            <button onClick={() => save(false)} className="px-4 py-2 border rounded">Save Draft</button>
            <button onClick={() => save(true)} className="px-4 py-2 bg-green-600 text-white rounded">Publish</button>
          </div>
        </div>
      </div>
    </div>
}