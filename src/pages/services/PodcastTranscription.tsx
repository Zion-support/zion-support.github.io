import React from 'react';
import { SEO } from '@/components/SEO';

function PodcastTranscription() {
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <SEO
        title="Podcast Transcription & Repurposing"
        description="Accurate AI transcriptions, speaker diarization, show notes, and blog/social repurposing."
      />
      <section className="container-responsive section-padding">
        <h1 className="heading-responsive text-gradient">Podcast Transcription</h1>
        <p className="mt-4 max-w-3xl text-zion-slate-light text-responsive">
          Make your episodes searchable and accessible with high‑accuracy transcription,
          timestamps, speakers, and instant assets for SEO and social distribution.
        </p>
        <div className="grid-futuristic mt-10">
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Transcripts with speaker labels and chapter timestamps</li>
              <li>AI show notes, summaries, quotes, and title variants</li>
              <li>Export to SRT/VTT for captions</li>
              <li>Bulk processing and RSS ingestion</li>
            </ul>
          </div>
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Pay‑as‑you‑go: $0.15 per audio minute</li>
              <li>Pro: $49/mo includes 400 minutes</li>
              <li>Studio: $199/mo includes 2,000 minutes</li>
            </ul>
            <a href="/request-quote" className="btn-futuristic mt-4 inline-block">Upload sample</a>
          </div>
        </div>
        <p className="mt-10 text-sm text-zion-slate-light">
          Explore more at <a className="text-cyan-400 underline" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">ziontechgroup.com/services</a>
        </p>
      </section>
    </div>
  );
}

export default PodcastTranscription;

