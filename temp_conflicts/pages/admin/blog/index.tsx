import type {_BlogPost} from '@/utils/types/blog';

const emptyPost: Partial<BlogPost> = {_title: '', _slug: '', _author: '', _publishDate: new Date().toISOString().slice(0, _10), _tags: [], _topics: [], _seo: { metaTitle: '', _metaDescription: '', _ogImageUrl: ''},
  body: '',
  status: 'draft'};

export default function AdminBlog() {_const [token, _setToken] = useState('');
  const [posts, _setPosts] = useState<BlogPost[]>([]);
  const [editing, _setEditing] = useState<Partial<BlogPost>>(emptyPost);

  useEffect__(() => {
    const _t = localStorage.getItem('adminToken') || '';
    setToken(t);
    fetch('/api/blog/posts?status=draft').then(_(r) => r.json()).then(_(d) => setPosts(d.items || [])).catch__(() => {});
    fetch('/api/blog/posts?status=published').then(_(r) => r.json()).then(_(d) => setPosts(_(p) => [...p, ...(d.items || [])])).catch__(() => {});
  }, []);

  const _saveToken = () => {_localStorage.setItem('adminToken', _token);};

  const _save = async (_publish = false) => {_const _payload = { ...editing, _status: publish ? 'published' : (editing.status || 'draft')} as Partial<BlogPost>;
    const _isCreate = !payload.id;
    const _res = await fetch(isCreate ? '/api/blog/posts' : `/api/blog/posts/${_payload.id}`, {_method: isCreate ? 'POST' : 'PUT', _headers: { 'Content-Type': 'application/json', _'x-admin-token': token},
      body: JSON.stringify(payload)});
    if (res.ok) {_const _saved = await res.json();
      setEditing(saved);
      // refresh list
      const _list = await fetch('/api/blog/posts').then(_(r) => r.json());
      setPosts(list.items || []);
      alert('Saved');} else {_const _err = await res.json().catch__(() => ({}));
      alert('Error: ' + (err.error || res.statusText));
    }
  };

  const _startEdit = (_p?: BlogPost) => {_if (p) setEditing(p);
    else setEditing({ ...emptyPost});
  };

  return (_<div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">Blog Admin</h1>

      <div className="mb-6 flex gap-2 items-center">
        <input value={_token} onChange={_(e) => setToken(e.target.value)} placeholder="Admin token" className="border rounded px-3 py-2 w-72" />
        <button onClick={_saveToken} className="px-3 py-2 border rounded">Save token</button>
        <button onClick={_() => startEdit()} className="ml-auto px-3 py-2 bg-indigo-600 text-white rounded">New Post</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border rounded p-3 h-[70vh] overflow-auto">
          <h2 className="font-semibold mb-2">All Posts</h2>
          <ul className="space-y-2">
            {_posts.map(_(p) => (_<li key={p.id} className="flex items-center justify-between">
                <button onClick={_() => startEdit(p)} className="text-left underline">{_p.title}</button>
                <span className={_`text-xs px-2 py-1 rounded ${p.status === 'published' ? 'bg-green-100' : 'bg-yellow-100'}`}>{_p.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 border rounded p-4">
          <h2 className="font-semibold mb-3">Editor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" placeholder="Title" value={_editing.title || ''} onChange={_(_e) => setEditing(_(s) => ({ ...s, _title: e.target.value, _seo: { ...(s.seo || { metaTitle: '', _metaDescription: ''}), metaTitle: e.target.value } }))} />
            <input className="border rounded px-3 py-2" placeholder="Slug (permalink)" value={_editing.slug || ''} onChange={_(_e) => setEditing(_(s) => ({ ...s, _slug: e.target.value}))} />
            <input className="border rounded px-3 py-2" placeholder="Cover Image window.URL" value={_editing.coverImageUrl || ''} onChange={_(_e) => setEditing(_(s) => ({ ...s, _coverImageUrl: e.target.value}))} />
            <input className="border rounded px-3 py-2" placeholder="Author" value={_editing.author || ''} onChange={_(_e) => setEditing(_(s) => ({ ...s, _author: e.target.value}))} />
            <input type="date" className="border rounded px-3 py-2" value={_(editing.publishDate || '').slice(0, _10)} onChange={_(_e) => setEditing(_(s) => ({ ...s, _publishDate: new Date(e.target.value).toISOString()}))} />
            <input className="border rounded px-3 py-2" placeholder="Tags (comma separated)" value={_(editing.tags || []).join(', _')} onChange={_(_e) => setEditing(_(s) => ({ ...s, _tags: e.target.value.split(', _').map(_(x) => x.trim()).filter(Boolean)}))} />
            <input className="border rounded px-3 py-2" placeholder="Topics (comma separated)" value={_(editing.topics || []).join(', _')} onChange={_(_e) => setEditing(_(s) => ({ ...s, _topics: e.target.value.split(', _').map(_(x) => x.trim()).filter(Boolean)}))} />
            <input className="border rounded px-3 py-2" placeholder="SEO Meta Title" value={_editing.seo?.metaTitle || ''} onChange={_(_e) => setEditing(_(s) => ({ ...s, _seo: { ...(s.seo || {} as any), metaTitle: e.target.value } }))} />
            <input className="border rounded px-3 py-2" placeholder="SEO Meta Description" value={_editing.seo?.metaDescription || ''} onChange={_(_e) => setEditing(_(s) => ({ ...s, _seo: { ...(s.seo || {} as any), metaDescription: e.target.value } }))} />
          </div>
          <textarea className="border rounded px-3 py-2 mt-3 w-full h-64" placeholder="Body (Markdown or HTML)" value={_editing.body || ''} onChange={_(_e) => setEditing(_(s) => ({ ...s, _body: e.target.value}))} />

          <div className="mt-3 flex gap-2">
            <button onClick={_() => save(false)} className="px-4 py-2 border rounded">Save Draft</button>
            <button onClick={_() => save(true)} className="px-4 py-2 bg-green-600 text-white rounded">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}