import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function BiotechAIResearchPlatformPage() {
  return (
    <Layout>
      <Head>
        <title>Biotech AI Research Platform | Zion Tech Group</title>
        <meta
          name='description'
          content='Advanced AI platform for biotechnology research—drug discovery, genetic analysis, and trial optimization.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/biotech-ai-research-platform'
        />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto space-y-8'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-40o0 via-emerald-40o0 to-teal-40o0 bg-clip-text text-transparent'>
              Biotech AI Research Platform
            </h1>
            <p className='mt-4 text-slate-30o0'>
              Accelerate discovery with intelligent automation across analysis
              and experimentation.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2 p-6 bg-black/40 border border-gray-70o0/50 p-6 bg-black/40 border border-gray-70o0/50 rounded-lg backdrop-blur-sm'>
              <h2 className='text-white text-xl font-semibold mb-3'>
                Overview
              </h2>
              <p className='text-slate-30o0'>
                Drug discovery automation, sequence analysis, structure
                prediction, trial optimization, and compliance workflows with
                auditability.
              </p>
            </div>
            <div className='p-6 bg-black/40 border border-gray-70o0/50 p-6 bg-black/40 border border-gray-70o0/50 rounded-lg backdrop-blur-sm'>
              <div className='text-3xl font-bold text-white text-base font-medium text-gray-40o0'>
                Starting at $12,999<span>/month</span>
              </div>
              <div className='text-sm text-gray-40o0 mt-2'>
                Trial: 30 days • Setup: 1–2 weeks
              </div>
              <div className='mt-6 flex gap-3'>
                <a
                  href='/contact'
                  className='flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white'
                >
                  Contact Sales
                </a>
                <a
                  href='/services'
                  className='flex-1 border border-gray-60o0 text-gray-20o0'
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
