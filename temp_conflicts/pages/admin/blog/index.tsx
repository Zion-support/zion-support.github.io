import { useEffect, useMemo, useState } from 'react';
import type { BlogPost } from '@/utils/types/blog';

const emptyPost: Partial<BlogPost> = {
  title: '',
  slug: '',
  author: '',
  publishDate: new Date().toISOString().slice(0, 10),
  tags: [],
  topics: [],
  seo: { metaTitle: '', metaDescription: '', ogImageUrl: '' },
  body: '',
  status: 'draft'};

export default function AdminBlog() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost>>(emptyPost);

  useEffect(() => {
    const t = localStorage.getItem('adminToken') || '';
    setToken(t);
    fetch('/api/blog/posts?status=draft').then((r) => r.json()).then((d) => setPosts(d.items || [])).catch(() => {});
    fetch('/api/blog/posts?status=published').then((r) => r.json()).then((d) => setPosts((p) => [...p, ...(d.items || [])])).catch(() => {});
  }, []);

  const saveToken = () => {
    localStorage.setItem('adminToken', token);
  };

  const save = async (publish = false) => {
    const payload = { ...editing, status: publish ? 'published' : (editing.status || 'draft') } as Partial<BlogPost>;
    const isCreate = !payload.id;
    const res = await fetch(isCreate ? '/api/blog/posts' : `/api/blog/posts/${payload.id}`, {
      method: isCreate ? 'POST' : 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
      body: JSON.stringify(payload)});
    if (res.ok) {
      const saved = await res.json();
      setEditing(saved);
      // refresh list
      const list = await fetch('/api/blog/posts').then((r) => r.json());
      setPosts(list.items || []);
      alert('Saved');
    } else {
      const err = await res.json().catch(() => ({}));
      alert('Error: ' + (err.error || res.statusText));
    }
  };

  const startEdit = (p?: BlogPost) => {
    if (p) setEditing(p);
    else setEditing({ ...emptyPost });
  };

  return (
    <div className=&quot;mx-auto max-w-5xl&quot;>
      <h1 className=&quot;text-3xl font-bold mb-4&quot;>Blog Admin</h1>

      <div className=&quot;mb-6 flex gap-2 items-center&quot;>
        <input value={token} onChange={(e) => setToken(e.target.value)} placeholder=&quot;Admin token&quot; className=&quot;border rounded px-3 py-2 w-72&quot; />
        <button onClick={saveToken} className=&quot;px-3 py-2 border rounded&quot;>Save token</button>
        <button onClick={() => startEdit()} className=&quot;ml-auto px-3 py-2 bg-indigo-600 text-white rounded&quot;>New Post</button>
      </div>

      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
        <div className=&quot;md:col-span-1 border rounded p-3 h-[70vh] overflow-auto&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>All Posts</h2>
          <ul className=&quot;space-y-2&quot;>
            {posts.map((p) => (
              <li key={p.id} className=&quot;flex items-center justify-between&quot;>
                <button onClick={() => startEdit(p)} className=&quot;text-left underline&quot;>{p.title}</button>
                <span className={`text-xs px-2 py-1 rounded ${p.status === 'published' ? 'bg-green-100' : 'bg-yellow-100'}`}>{p.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className=&quot;md:col-span-2 border rounded p-4&quot;>
          <h2 className=&quot;font-semibold mb-3&quot;>Editor</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Title&quot; value={editing.title || ''} onChange={(e) => setEditing((s) => ({ ...s, title: e.target.value, seo: { ...(s.seo || { metaTitle: '', metaDescription: '' }), metaTitle: e.target.value } }))} />
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Slug (permalink)&quot; value={editing.slug || ''} onChange={(e) => setEditing((s) => ({ ...s, slug: e.target.value }))} />
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Cover Image URL&quot; value={editing.coverImageUrl || ''} onChange={(e) => setEditing((s) => ({ ...s, coverImageUrl: e.target.value }))} />
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Author&quot; value={editing.author || ''} onChange={(e) => setEditing((s) => ({ ...s, author: e.target.value }))} />
            <input type=&quot;date&quot; className=&quot;border rounded px-3 py-2&quot; value={(editing.publishDate || '').slice(0, 10)} onChange={(e) => setEditing((s) => ({ ...s, publishDate: new Date(e.target.value).toISOString() }))} />
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Tags (comma separated)&quot; value={(editing.tags || []).join(', ')} onChange={(e) => setEditing((s) => ({ ...s, tags: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) }))} />
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Topics (comma separated)&quot; value={(editing.topics || []).join(', ')} onChange={(e) => setEditing((s) => ({ ...s, topics: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) }))} />
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;SEO Meta Title&quot; value={editing.seo?.metaTitle || ''} onChange={(e) => setEditing((s) => ({ ...s, seo: { ...(s.seo || {} as any), metaTitle: e.target.value } }))} />
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;SEO Meta Description&quot; value={editing.seo?.metaDescription || ''} onChange={(e) => setEditing((s) => ({ ...s, seo: { ...(s.seo || {} as any), metaDescription: e.target.value } }))} />
          </div>
          <textarea className=&quot;border rounded px-3 py-2 mt-3 w-full h-64&quot; placeholder=&quot;Body (Markdown or HTML)&quot; value={editing.body || ''} onChange={(e) => setEditing((s) => ({ ...s, body: e.target.value }))} />

          <div className=&quot;mt-3 flex gap-2&quot;>
            <button onClick={() => save(false)} className=&quot;px-4 py-2 border rounded&quot;>Save Draft</button>
            <button onClick={() => save(true)} className=&quot;px-4 py-2 bg-green-600 text-white rounded&quot;>Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}