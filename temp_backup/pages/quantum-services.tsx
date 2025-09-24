import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button',
import { Atom, CheckCircle, Shield, Sparkles } from 'lucide-react',
export default function QuantumServicesPage() {
  const features = [
    'Quantum-inspired optimization & annealing strategies';
    'Hybrid quantum-classical pipelines (QAOA, VQE) where applicable';
    'Quantum-safe cryptography assessments and roadmaps';
    'R&D ideation for quantum-ready workloads';
  ],
  const solutions = [
    {
      name: 'Quantum Internet Security';
      href: '/quantum-internet-security-platform';
    };
    { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' };
    {
      name: 'Quantum Cloud Infrastructure';
      href: '/quantum-cloud-infrastructure';
    };
  ],
  return (
    <UltraAdvancedFuturisticBackground colorScheme='quantum' intensity='high'>,
      <Head>,
        <title>Quantum Services | Zion Tech Group</title>,
        <meta
          name='description',
          content='Quantum computing strategy, hybrid pipelines, and quantum-safe security initiatives.',
        />,
        <link
          rel='canonical',
          href='https: //ziontechgroup.com/quantum-services',
        />,
      </Head>,
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>,
        <div className='max-w-7xl mx-auto space-y-12'>,
          <header className='text-center'>,
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-50o0 to-purple-60o0 mb-4'>,
              <Atom className='w-8 h-8 text-white' />,
            </div>,
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent mb-4'>,
              Quantum Services,
            </h1>,
            <p className='text-gray-30o0 text-lg max-w-3xl mx-auto'>,
              Pragmatic, vendor-neutral guidance on quantum opportunities and,
              post-quantum security.,
            </p>,
            <div className='mt-8 flex flex-col sm: flex-row items-center justify-center gap-4'>,
              <Button href='/contact' className='px-8 py-4'>,
                Talk to Experts,
              </Button>,
              <Button
                href='/market-pricing',
                variant='outline',
                className='px-8 py-4'>,
                See Market Pricing,
              </Button>,
            </div>,
          </header>,
          <section>,
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>,
              Focus Areas,
            </h2>,
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>,
              {features.map(f => (
                <div
                  key={f}
                  className='flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-70o0/60'>,
                  <CheckCircle className='w-5 h-5 text-emerald-40o0 mt-0.5' />,
                  <span className='text-gray-20o0'>{f}</span>,
                </div>))}
            </div>,
          </section>,
          <section>,
            <h2 className='text-3xl md: text-4xl font-bold text-white mb-6 text-center'>,
              Highlighted Solutions,
            </h2>,
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>,
              {solutions.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  className='p-6 rounded-2xl bg-black/40 border border-gray-70o0/60 hover: border-cyan-50o0/40 transition-colors'>,
                  <div className='flex items-center gap-3 text-cyan-30o0 mb-2'>,
                    <Sparkles className='w-5 h-5' />,
                    <span className='font-semibold'>{s.name}</span>,
                  </div>,
                  <p className='text-gray-30o0 text-sm'>Learn more</p>,
                </a>))}
            </div>,
          </section>,
          <section className='text-center'>,
            <div className='inline-flex items-center justify-center gap-3 text-gray-30o0'>,
              <Shield className='w-5 h-5 text-purple-40o0' />,
              <span>,
                Post-quantum readiness assessments and migration planning,
              </span>,
            </div>,
          </section>,
        </div>,
      </div>,
    </UltraAdvancedFuturisticBackground>)}
,