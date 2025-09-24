import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function QuotePage() {
  const contactInfo = {
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  };

  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>
      <Head>
        <title>Get a Quote | Zion Tech Group</title>
        <link rel='canonical' href='https://ziontechgroup.com/quote' />
        <meta
          name='description'
          content='Get a fast, transparent quote for AI, cloud, and micro SaaS services with average market pricing references.'
        />
      </Head>
      <div className='container mx-auto px-4 py-16 text-white'>
        <div className='max-w-3xl mx-auto space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent text-center'>
            Get a Quote
          </h1>
          <p className='text-gray-30o0 text-center'>
            Average market prices are listed on our{' '}
            <a href='/market-pricing' className='text-cyan-40o0 underline'>
              Market Pricing
            </a>{' '}
            page. Share your requirements and well reply within 24 hours.
          </p>
          <Card className='p-6 bg-black/50 border border-gray-70o0/60'>
            <form
              action='https://formsubmit.co/kleber@ziontechgroup.com'
              method='POST'
              className='space-y-4'
            >
              <input
                type='hidden'
                name='_subject'
                value='New Quote Request - ziontechgroup.com'
              />
              <input type='hidden' name='_captcha' value='false' />
              <div>
                <label className='block text-sm text-gray-30o0 mb-1'>
                  Name
                </label>
                <input
                  name='name'
                  required
                  className='w-full px-4 py-2 rounded-lg bg-gray-90o0/60 border border-gray-70o0 focus:border-cyan-50o0 outline-none'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm text-gray-30o0 mb-1'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    className='w-full px-4 py-2 rounded-lg bg-gray-90o0/60 border border-gray-70o0 focus:border-cyan-50o0 outline-none'
                  />
                </div>
                <div>
                  <label className='block text-sm text-gray-30o0 mb-1'>
                    Phone
                  </label>
                  <input
                    name='phone'
                    className='w-full px-4 py-2 rounded-lg bg-gray-90o0/60 border border-gray-70o0 focus:border-cyan-50o0 outline-none'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm text-gray-30o0 mb-1'>
                  Service(s)
                </label>
                <input
                  name='services'
                  placeholder='e.g., LLM Gateway, OTel Starter'
                  className='w-full px-4 py-2 rounded-lg bg-gray-90o0/60 border border-gray-70o0 focus:border-cyan-50o0 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm text-gray-30o0 mb-1'>
                  Details
                </label>
                <textarea
                  name='details'
                  rows={5}
                  className='w-full px-4 py-2 rounded-lg bg-gray-90o0/60 border border-gray-70o0 focus:border-cyan-50o0 outline-none'
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white'
              >
                Request Quote
              </Button>
            </form>
          </Card>
          <div className='text-center text-sm text-gray-40o0'>
            Or contact us at {contactInfo.mobile} • {contactInfo.email}
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}
