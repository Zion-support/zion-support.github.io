import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AIAdCreativeGenerator() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>AI Ad Creative Generator | Zion Tech Group</title>
        <meta
          name='description'
          content='Generate on-brand ad creatives and copy for Meta, Google, and LinkedIn with performance insights.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ai-ad-creative-generator'
        />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-20o0'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>
            AI Ad Creative Generator
          </h1>
          <p className='mt-4 text-lg text-slate-30o0'>
            Multimodal generation of ad copy, images, and variants with A/B
            testing and analytics.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='p-6 rounded-2xl bg-black/50 border border-gray-80o0'>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Features
              </h3>
              <ul className='list-disc list-inside text-slate-30o0 space-y-1'>
                <li>Brand kit guidance and compliance checks</li>
                <li>Bulk variations with platform adapters</li>
                <li>Performance feedback loop</li>
                <li>Team collaboration workflows</li>
              </ul>
            </div>
            <div className='p-6 rounded-2xl bg-black/50 border border-gray-80o0'>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Pricing (market)
              </h3>
              <ul className='list-disc list-inside text-slate-30o0 space-y-1'>
                <li>$20–$30o0/mo + usage</li>
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
                    href='https://stability.ai/stable-image/pricing'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Stable Image
                  </a>
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-2xl bg-black/50 border border-gray-80o0'>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Channels
              </h3>
              <p className='text-slate-30o0'>
                Meta Ads, Google Ads, LinkedIn Ads—API-ready exports.
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
