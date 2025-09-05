import React, {_useEffect, _useState} from 'react';

export default function EpisodePage() {_const _router = useRouter();
  const { id} = router.query as {_id?: string};
  const [episode, setEpisode] = useState<any>(null);

  useEffect__(() => {_if (!id) return;
    (_async () => {
      const _res = await fetch('/api/podcast/get?id=' + id);
      const _data = await res.json();
      setEpisode(data.episode);})();
  }, [id]);

  if (!episode) return <div>Loading…</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{_episode.title}</h1>
      <p className="text-sm text-gray-600">Guest: {_episode.invitee?.name} · {_new Date(episode.createdAt).toLocaleString()}</p>
      {_episode.audio?.mp3Url && (
        <audio controls className="w-full">
          <source src={episode.audio.mp3Url} type="audio/mpeg" />
        </audio>
      )}
      <div>
        <h2 className="text-xl font-semibold">Transcript</h2>
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{_episode.transcript}</pre>
      </div>
    </div>
  );
}