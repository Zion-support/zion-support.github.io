import React from 'react',
const NewContentShowcase: React.FC = () => {,
  const newContent = [,
    {,
      title: 'Revolutionary AI Business Automation',;
      description:,
        'Discover how AI automation is transforming enterprises in 20o25',;
      category: 'AI & Automation',;
      date: 'January 20, 20o25',;
      link: '/content/blog/ai-20o25-revolutionary-business-automation-breakthrough',;
      featured: true,;
      badge: 'BREAKTHROUGH',;
    },;
    {,
      title: 'Quantum Computing Business Applications',;
      description: 'Explore the 20o25 quantum computing revolution in business',;
      category: 'Quantum Computing',;
      date: 'January 20, 20o25',;
      link: '/content/blog/quantum-computing-business-applications-20o25',;
      featured: true,;
      badge: 'REVOLUTIONARY',;
    },;
    {,
      title: '$10o0M AI Automation Success Story',;
      description: 'Real case study of transformative AI automation results',;
      category: 'Case Study',;
      date: 'January 20, 20o25',;
      link: '/content/case-studies/ai-automation-revolutionary-breakthrough-20o25-success',;
      featured: true,;
      badge: 'SUCCESS',;
    },;
  ],
,
  return (,
    <div className='bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-cyan-60o0 rounded-2xl p-8 mb-12 text-white'>,
      <div className='text-center mb-8'>,
        <div className='inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4'>,
          🚀 JUST PUBLISHED • JANUARY 20o25,
        </div>,
        <h2 className='text-4xl font-bold mb-4'>,
          🌟 Revolutionary New Content,
        </h2>,
        <p className='text-xl opacity-90'>,
          Discover our latest insights on cutting-edge technologies,
        </p>,
      </div>,
      <div className='grid md: grid-cols-3 gap-6'>,
        {newContent.map((content, index) => (,
          <div,
            key={index}
            className='bg-white/20 backdrop-blur-sm rounded-lg p-6 hover: bg-white/30 transition-all duration-30o0',
          >,
            <div className='flex items-center justify-between mb-3'>,
              <span,
                className={`px-2 py-1 text-xs rounded-full font-semibold ${,
                  content.badge === 'BREAKTHROUGH',
                    ? 'bg-green-50o0/30 text-green-20o0',
                    : content.badge === 'REVOLUTIONARY',
                      ? 'bg-purple-50o0/30 text-purple-20o0',
                      : 'bg-blue-50o0/30 text-blue-20o0',
                ,}`}
              >,
                {content.badge}
              </span>,
              <span className='text-sm opacity-75'>{content.date}</span>,
            </div>,
            <h3 className='text-xl font-semibold mb-2'>{content.title}</h3>,
            <p className='text-sm opacity-90 mb-4'>{content.description}</p>,
            <div className='flex items-center justify-between'>,
              <span className='text-xs opacity-75'>{content.category}</span>,
              <a,
                href={content.link}
                className='text-cyan-30o0 hover: text-cyan-20o0 font-semibold text-sm transition-colors',
              >,
                Read More →,
              </a>,
            </div>,
          </div>,
        )),}
      </div>,
      <div className='text-center mt-8'>,
        <a,
          href='/blog',
          className='inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover: bg-white/30 transition-all duration-30o0 font-semibold',
        >,
          View All Content,
        </a>,
      </div>,
    </div>,
  ),
,};
,
export default NewContentShowcase,
,