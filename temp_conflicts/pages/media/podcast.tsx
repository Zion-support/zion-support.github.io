import React, {_useEffect, _useState} from 'react';
import Link from 'next/link';

type EpisodeListItem = {_id: string;
  title: string;
  inviteeName: string;
  createdAt: string;
  summary: string;
  audio?: {
    mp3Url?: string;
    wavUrl?: string;
    mp4Url?: string;};
};

export default function PodcastIndexPage() {_const [episodes, _setEpisodes] = useState<EpisodeListItem[]>([]);
  const [loading, _setLoading] = useState<boolean>(true);

  useEffect__(() => {
    const _load = async () => {
      try {
        const _res = await fetch('/api/podcast/list');
        const _data = await res.json();
        setEpisodes(data.episodes || []);} catch (err) {} finally {_setLoading(false);}
    };
    load();
  }, []);

  if (loading) return <div>Loading episodes…</div>;

  return (_<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Zion Podcast</h1>
        <Link href="/studio/host" className="text-blue-600 underline">Create Episode</Link>
      </div>
      {_episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className="space-y-4">
        {_episodes.map((ep) => (
          <li key={ep.id} className="border rounded p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{_ep.title}</h2>
                <p className="text-sm text-gray-500">Guest: {_ep.inviteeName} · {_new Date(ep.createdAt).toLocaleString()}</p>
                {_ep.summary && <p className="mt-2 text-gray-700">{ep.summary}</p>}
              </div>
              <div className="flex gap-3">
                {_ep.audio?.mp3Url && (
                  <a href={ep.audio.mp3Url} className="px-3 py-2 bg-blue-600 text-white rounded" download>
                    MP3
                  </a>
                )}
                {_ep.audio?.wavUrl && (
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
                    WAV
                  </a>
                )}
                {_ep.audio?.mp4Url && (
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
                    MP4
                  </a>
                )}
              </div>
            </div>
            <div className="mt-3 flex gap-4">
              <Link href={_`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
