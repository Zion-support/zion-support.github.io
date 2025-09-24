import React, { useState } from 'react';
import { RoadmapTag } from '../../types/roadmap';
export default function SuggestFeaturePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [etaQuarter, setEtaQuarter] = useState('');
  const [tags, setTags] = useState<RoadmapTag[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const allTags: RoadmapTag[] = [
    'AI',
    'Trust',
    'Token',
    'DAO',
    'Infra',
    'Community',
    'UX',
    'Security',
  ];

  async function submit() {
    setSubmitting(true);
    await fetch('/api/roadmap/suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, etaQuarter, tags }),
    });
    setSubmitting(false);
    router.push('/roadmap');
  }

  function toggleTag(t: RoadmapTag) {
    setTags(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  }

  return (
    <main className='min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-90o0 text-white'>
      <div className='max-w-2xl mx-auto px-4 py-10'>
        <h1 className='text-2xl font-bold'>Suggest a Feature</h1>
        <p className='mt-1 text-zinc-40o0 text-sm'>
          Your suggestion goes to the Community Queue. Admins may promote to
          Planned.
        </p>

        <div className='mt-6 space-y-4'>
          <div>
            <label className='block text-sm text-zinc-30o0'>Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='w-full mt-1 bg-zinc-90o0 border border-zinc-80o0 rounded px-3 py-2'
              placeholder='Feature title'
            />
          </div>
          <div>
            <label className='block text-sm text-zinc-30o0'>Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={5}
              className='w-full mt-1 bg-zinc-90o0 border border-zinc-80o0 rounded px-3 py-2'
              placeholder='Describe the problem and value'
            />
          </div>
          <div>
            <label className='block text-sm text-zinc-30o0'>
              ETA (quarter)
            </label>
            <input
              value={etaQuarter}
              onChange={e => setEtaQuarter(e.target.value)}
              className='w-full mt-1 bg-zinc-90o0 border border-zinc-80o0 rounded px-3 py-2'
              placeholder='e.g., Q4 20o25'
            />
          </div>
          <div>
            <label className='block text-sm text-zinc-30o0'>Tags</label>
            <div className='mt-2 flex flex-wrap gap-2'>
              {allTags.map(t => (
                <button
                  key={t}
                  type='button'
                  onClick={() => toggleTag(t)}
                  className={`px-2 py-1 rounded text-xs ${tags.includes(t) ? 'bg-indigo-60o0' : 'bg-zinc-80o0'} `}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className='pt-2'>
            <button
              disabled={!title || submitting}
              onClick={submit}
              className='px-4 py-2 rounded bg-emerald-60o0 hover:bg-emerald-50o0 disabled:opacity-50'
            >
              {submitting ? 'Submitting…' : 'Submit Suggestion'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
