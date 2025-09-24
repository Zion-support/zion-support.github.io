import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AIVoiceAgentPlatform() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>AI Voice Agent Platform | Zion Tech Group</title>
        <meta
          name='description'
          content='Natural phone agents with IVR, call routing, CRM actions, and analytics.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ai-voice-agent-platform'
        />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-20o0'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>
            AI Voice Agent Platform
          </h1>
          <p className='mt-4 text-lg text-slate-30o0'>
            Autonomous voice agents for support and sales: speech-to-speech with
            tools and guardrails.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='p-6 rounded-2xl bg-black/50 border border-gray-80o0'>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Capabilities
              </h3>
              <ul className='list-disc list-inside text-slate-30o0 space-y-1'>
                <li>STT/TTS with interruptibility</li>
                <li>CRM/Helpdesk integration</li>
                <li>Tool calls: scheduling, lookups, updates</li>
                <li>Compliance and redaction</li>
              </ul>
            </div>
            <div className='p-6 rounded-2xl bg-black/50 border border-gray-80o0'>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Pricing (market)
              </h3>
              <ul className='list-disc list-inside text-slate-30o0 space-y-1'>
                <li>$0.0o2–$0.15/minute usage</li>
                <li>
                  References:{' '}
                  <a
                    className='text-cyan-40o0 underline'
                    href='https://platform.openai.com/pricing'
                    target='_blank'
                    rel='noreferrer'
                  >
                    OpenAI Pricing
                  </a>
                  ,{' '}
                  <a
                    className='text-cyan-40o0 underline'
                    href='https://www.twilio.com/voice/pricing'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Twilio Voice
                  </a>
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-2xl bg-black/50 border border-gray-80o0'>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Use cases
              </h3>
              <p className='text-slate-30o0'>
                Tier-1 support, appointment booking, lead qualification, and
                collections.
              </p>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap gap-3'>
            <a
              href='/pricing'
              className='px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium'
            >
              View Pricing
            </a>
            <a
              href='/market-pricing'
              className='px-4 py-2 rounded-lg border border-cyan-50o0/40 text-cyan-30o0'
            >
              Market Pricing
            </a>
            <a
              href='/contact'
              className='px-4 py-2 rounded-lg border border-gray-70o0 text-gray-20o0'
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
