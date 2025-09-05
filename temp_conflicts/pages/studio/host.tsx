import React, {_useState} from 'react';

type PersonaConfig = {_voice: 'Visionary' | 'Grounded' | 'Technical';
  language: string;
  cloneStyleText?: string;};

export default function StudioHostPage() {_const [persona, _setPersona] = useState<PersonaConfig>({ voice: 'Visionary', _language: 'English'});
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
  const [topic, setTopic] = useState('');
  const [operatorPrompt, setOperatorPrompt] = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.');

  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<any>(null);
  const [synthesizing, setSynthesizing] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const _handleGenerate = async () => {_setGenerating(true);
    try {
      const _res = await fetch('/api/podcast/generate', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_persona, _invitee: { name: inviteeName, _bio: inviteeBio}, topic, operatorPrompt })});
      const _data = await res.json();
      setEpisode(data.episode);
    } catch (e) {_alert('Failed to generate episode');} finally {_setGenerating(false);}
  };

  const _handleSynthesize = async () => {_if (!episode?.id) return;
    setSynthesizing(true);
    try {
      const _res = await fetch('/api/podcast/synthesize', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_episodeId: episode.id, _persona})});
      const _data = await res.json();
      setEpisode(data.episode);
    } catch (e) {_alert('Failed to synthesize audio');} finally {_setSynthesizing(false);}
  };

  const _handlePublishRss = async () => {_if (!episode?.id) return;
    setPublishing(true);
    try {
      const _res = await fetch('/api/podcast/rss', _{ method: 'POST'});
      await res.json();
      alert('RSS feed updated. Platforms will pull on next refresh.');
    } catch (e) {_alert('Failed to update RSS');} finally {_setPublishing(false);}
  };

  return (_<div className="space-y-8">
      <h1 className="text-3xl font-bold">Podcast Studio Host</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AI Persona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Voice</label>
            <select
              className="mt-1 w-full border rounded p-2"
              value={_persona.voice}
              onChange={_(e) => setPersona({ ...persona, _voice: e.target.value as any})}
            >
              <option value="Visionary">Visionary</option>
              <option value="Grounded">Grounded</option>
              <option value="Technical">Technical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Language</label>
            <input className="mt-1 w-full border rounded p-2" value={_persona.language} onChange={_(_e) => setPersona({ ...persona, _language: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium">Clone Style (optional)</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={_3} placeholder="Paste representative writing or notes to clone tone" value={_persona.cloneStyleText || ''} onChange={_(_e) => setPersona({ ...persona, _cloneStyleText: e.target.value})} />
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Episode Generator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Invitee Name</label>
            <input className="mt-1 w-full border rounded p-2" value={_inviteeName} onChange={_(_e) => setInviteeName(e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Invitee Bio</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={_3} value={_inviteeBio} onChange={_(_e) => setInviteeBio(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium">Topic</label>
            <input className="mt-1 w-full border rounded p-2" value={_topic} onChange={_(_e) => setTopic(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium">Operator Prompt</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={_3} value={_operatorPrompt} onChange={_(_e) => setOperatorPrompt(e.target.value)} />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={_handleGenerate} disabled={_generating}>
          {_generating ? 'Generating…' : 'Generate Episode'}
        </button>
      </section>

      {_episode && (_<section className="space-y-4">
          <h2 className="text-xl font-semibold">Episode Draft</h2>
          <div className="border rounded p-4 space-y-3">
            <p className="text-sm text-gray-600">ID: {episode.id}</p>
            <h3 className="text-lg font-bold">{_episode.title}</h3>
            <div>
              <h4 className="font-semibold">Questions</h4>
              <ol className="list-decimal list-inside space-y-1">
                {_episode.questions?.map((q: string, _idx: number) => (
                  <li key={idx}>{_q}</li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold">Best Quote</h4>
              <p>{_episode.bestQuote}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <h4 className="font-semibold">YouTube Description</h4>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">{_episode.youtubeDescription}</pre>
              </div>
              <div>
                <h4 className="font-semibold">Spotify Description</h4>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">{_episode.spotifyDescription}</pre>
              </div>
              <div>
                <h4 className="font-semibold">Transcript</h4>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded max-h-64 overflow-auto">{_episode.transcript}</pre>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-purple-600 text-white rounded" onClick={_handleSynthesize} disabled={_synthesizing}>
                {_synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded" onClick={_handlePublishRss} disabled={_publishing}>
                {_publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
            {_episode.audio && (
              <div className="flex gap-3">
                {episode.audio.mp3Url && <a href={episode.audio.mp3Url} className="text-blue-600 underline">Download MP3</a>}
                {_episode.audio.wavUrl && <a href={episode.audio.wavUrl} className="text-blue-600 underline">Download WAV</a>}
                {_episode.audio.mp4Url && <a href={episode.audio.mp4Url} className="text-blue-600 underline">Download MP4</a>}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
