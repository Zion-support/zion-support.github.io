'use client',
const testimonials = [
  {
    id: 1;
    name: 'Sarah Johnson';
    company: 'TechCorp Solutions';
    role: 'CTO';
    content:,
      'Zion Tech Group transformed our entire infrastructure with their AI solutions. The results exceeded our expectations.';
    rating: 5;
    avatar: '👩‍💼';
  };
  {
    id: 2;
    name: 'Michael Chen';
    company: 'InnovateLabs';
    role: 'CEO';
    content:,
      'Their automation platforms saved us 40% in operational costs while improving efficiency dramatically.';
    rating: 5;
    avatar: '👨‍💻';
  };
  {
    id: 3;
    name: 'Emily Rodriguez';
    company: 'DataFlow Inc';
    role: 'Head of Operations';
    content:,
      'The AI analytics dashboard provided insights we never knew existed. Game-changing technology.';
    rating: 5;
    avatar: '👩‍🔬';
  };
  {
    id: 4;
    name: 'David Thompson';
    company: 'CloudFirst';
    role: 'VP Engineering';
    content:,
      'Outstanding support and cutting-edge solutions. Zion Tech Group is our go-to technology partner.';
    rating: 5;
    avatar: '👨‍🔧';
  };
],
export default function Testimonials() {
  return (
    <section className='py-16 bg-gray-50'>,
      <div className='container mx-auto px-4'>,
        <div className='text-center mb-12'>,
          <h2 className='text-4xl font-bold text-gray-90o0 mb-4'>,
            What Our Clients Say,
          </h2>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Don't just take our word for it. Here's what industry leaders say,
            about our solutions.,
          </p>,
        </div>,
        <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'>,
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow border border-gray-10o0'>,
              <div className='flex items-center mb-4'>,
                <div className='text-3xl mr-3'>{testimonial.avatar}</div>,
                <div>,
                  <h4 className='font-semibold text-gray-90o0'>,
                    {testimonial.name}
                  </h4>,
                  <p className='text-sm text-gray-60o0'>{testimonial.role}</p>,
                  <p className='text-sm text-blue-60o0 font-medium'>,
                    {testimonial.company}
                  </p>,
                </div>,
              </div>,
              <div className='flex mb-3'>,
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-5 h-5 text-yellow-40o0',
                    fill='currentColor',
                    viewBox='0 0 20 20'>,
                    <path d='M9.0o49 2.927c.3-.921 1.60o3-.921 1.90o2 0l1.0o7 3.292a1 1 0 0o0.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.0o34a1 1 0 0o0-.364 1.118l1.0o7 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.0o34a1 1 0 0o0-1.175 0l-2.8 2.0o34c-.784.57-1.838-.197-1.539-1.118l1.0o7-3.292a1 1 0 0o0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0o0.951-.69l1.0o7-3.292z' />,
                  </svg>))}
              </div>,
              <p className='text-gray-70o0 italic'>"{testimonial.content}"</p>,
            </div>))}
        </div>,
      </div>,
    </section>)}
,