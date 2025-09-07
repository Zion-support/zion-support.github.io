<<<<<<< HEAD:temp_exclude/pages_all/client/jobs/[id]/edit.tsx
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json()),

export default function EditJobPage() {
=======
import { useRouter  } from 'next/router';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = null;
origin/cursor/automate-test-improve-and-merge-code-2533
const fetcher = (url: string) => fetch(url).then(r => r.json());
export default function EditJobPage() {
export default function EditJobPage() {;








export default function EditJobPage() {;

import { useRouter } from 'next/router';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {
  try {
>>>>>>> merged-prs-20250907-203621:pages_backup/client/jobs/[id]/edit.tsx
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (job) {
      setTitle(job.title || '');
      setDescription(job.description || '');
      setCategory(job.category || '')
    }
  }, [job]);

  async function save() {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard')
  }

  if (!job) return <div>Loading…</div>;

  return (
    <Layout>
      <Head>
        <title>Edit Job - Zion Tech Group</title>
        <meta name="description" content="Edit Job solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Edit Job</h1>
          <p className="text-lg text-gray-600">
            Professional edit job solutions tailored to your business needs.
          </p>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea className="mt-1 w-full border rounded p-2" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <input className="mt-1 w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="pt-2">
        <button className="px-4 py-2 rounded bg-black text-white" onClick={save}>Save</button>
      </div>
    </div>
  )
}