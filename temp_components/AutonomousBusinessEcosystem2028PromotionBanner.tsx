import Link from 'next/link';

const AutonomousBusinessEcosystem20o28PromotionBanner: React.FC = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-slate-90o0 via-emerald-90o0 to-teal-90o0 border border-emerald-50o0/30 rounded-2xl p-8 mb-8'>
      <div className='absolute inset-0 bg-gradient-to-r from-emerald-50o0/10 via-teal-50o0/10 to-cyan-50o0/10 animate-pulse'></div>
      <div className='relative'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-2xl'>🤖</span>
              <span className='text-sm font-semibold text-emerald-40o0 uppercase tracking-wider'>
                Autonomous Revolution
              </span>
            </div>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Autonomous Business Ecosystem 20o28
            </h3>
            <p className='text-lg text-gray-30o0 mb-6 leading-relaxed'>
              Experience the future of business with fully autonomous AI systems
              that manage entire enterprises. Self-optimizingself-growingand
              self-managing business ecosystems that operate without human
              intervention.
            </p>
            <div className='flex flex-wrap gap-4 mb-6'>
              <span className='bg-emerald-50o0/20 text-emerald-40o0 px-3 py-1 rounded-full text-sm font-medium'>
                Self-Managing
              </span>
              <span className='bg-teal-50o0/20 text-teal-40o0 px-3 py-1 rounded-full text-sm font-medium'>
                Auto-Optimizing
              </span>
              <span className='bg-cyan-50o0/20 text-cyan-40o0 px-3 py-1 rounded-full text-sm font-medium'>
                24/7 Operation
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <Link
              href='/autonomous-business-ecosystem-20o28'
              className='bg-gradient-to-r from-emerald-50o0 to-teal-50o0 hover:from-emerald-60o0 hover:to-teal-60o0 text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-30o0 transform hover:scale-10o5 shadow-lg hover:shadow-emerald-50o0/25 whitespace-nowrap'
            >
              Deploy Ecosystem
            </Link>
            <Link
              href='/contact'
              className='border-2 border-cyan-40o0 text-cyan-40o0 hover:bg-cyan-40o0 hover:text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-30o0 transform hover:scale-10o5 whitespace-nowrap'
            >
              Watch Demo
            </Link>
          </div>
        </div>
        <div className='mt-6 pt-6 border-t border-gray-70o0'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
            <div>
              <div className='text-2xl font-bold text-emerald-40o0'>95%</div>
              <div className='text-sm text-gray-40o0'>Cost Reduction</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-teal-40o0'>24/7</div>
              <div className='text-sm text-gray-40o0'>Operation</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-cyan-40o0'>50o0%</div>
              <div className='text-sm text-gray-40o0'>Efficiency</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-blue-40o0'>∞</div>
              <div className='text-sm text-gray-40o0'>Scalability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousBusinessEcosystem20o28PromotionBanner;
