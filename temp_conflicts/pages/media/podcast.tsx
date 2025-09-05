import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type EpisodeListItem = {
  id: string;
  title: string;
  inviteeName: string;
  createdAt: string;
  summary: string;
  audio?: {
    mp3Url?: string;
    wavUrl?: string;
    mp4Url?: string;
  };
};

export default function PodcastIndexPage() {
  const [episodes, setEpisodes] = useState<EpisodeListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/podcast/list');
        const data = await res.json();
        setEpisodes(data.episodes || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div>Loading episodes…</div>;

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Zion Podcast</h1>
        <Link href=&quot;/studio/host&quot; className=&quot;text-blue-600 underline&quot;>Create Episode</Link>
      </div>
      {episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className=&quot;space-y-4&quot;>
        {episodes.map((ep) => (
          <li key={ep.id} className=&quot;border rounded p-4&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <div>
                <h2 className=&quot;text-xl font-semibold&quot;>{ep.title}</h2>
                <p className=&quot;text-sm text-gray-500&quot;>Guest: {ep.inviteeName} · {new Date(ep.createdAt).toLocaleString()}</p>
                {ep.summary && <p className=&quot;mt-2 text-gray-700&quot;>{ep.summary}</p>}
              </div>
              <div className=&quot;flex gap-3&quot;>
                {ep.audio?.mp3Url && (
                  <a href={ep.audio.mp3Url} className=&quot;px-3 py-2 bg-blue-600 text-white rounded&quot; download>
                    MP3
                  </Link>
                )}
                {ep.audio?.wavUrl && (
                  <a href={ep.audio.wavUrl} className=&quot;px-3 py-2 bg-gray-700 text-white rounded&quot; download>
                    WAV
                  </Link>
                )}
                {ep.audio?.mp4Url && (
                  <a href={ep.audio.mp4Url} className=&quot;px-3 py-2 bg-purple-700 text-white rounded&quot; download>
                    MP4
                  </Link>
                )}
              </div>
            </div>
            <div className=&quot;mt-3 flex gap-4&quot;>
              <Link href={`/media/podcast/${ep.id}`} className=&quot;text-blue-600 underline&quot;>View Transcript</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
