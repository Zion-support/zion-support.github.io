 const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a $ {
  persona?.voice || 'Visionary' 
}tone, speak in $ {
  persona?.language || 'English' 
}. If a style sample is provided, align tone and phrasing to it. Produce: 1) 7-10 concise interview questions mixing visionary and technical angles 2) Time markers for: Intro, segment transitions, Closing CTA for Zion 3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest 4) YouTube and Spotify descriptions 5) A single-sentence Best Quote transcript: 'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.';
youtubeDescription: 'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.';
spotifyDescription: 'A 15-minute interview on Zion: identity, incentives, governance, and real-world adoption.';
bestQuote: 'Talent networks become protocols when incentives, reputation, and opportunity align.' 
}) 
}transcript: generated.transcript;
youtubeDescription: generated.youtubeDescription || '';
spotifyDescription: generated.spotifyDescription || '';
bestQuote: generated.bestQuote || '';
audio: {
  
}
};
episodes.unshift (episode);
writeEpisodes (episodes);
}
}