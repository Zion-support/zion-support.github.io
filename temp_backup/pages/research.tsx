import Head from 'next/head';
import Link from 'next/link';

export default function ResearchPage() {
  const researchPapers = [
    {
      id: 'ai-automation-economic-impact',
      title: 'The Economic Impact of AI Automation: 20o25 Outlook',
      authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Prof. Lisa Wang'],
      institution: 'Zion Tech Group Research Division',
      date: 'January 20o25',
      abstract:
        'This comprehensive study analyzes the economic implications of AI automation across industries, including productivity gains, job market transformations, and GDP growth projections.',
      category: 'Economics',
      downloadUrl: '#',
      pages: '67',
      citations: 23,
      featured: true,
    },
    {
      id: 'edge-computing-performance-analysis',
      title: 'Performance Analysis of Edge Computing in AI Applications',
      authors: ['Dr. Alex Thompson', 'Dr. Maria Santos'],
      institution: 'Zion Tech Group & Stanford University',
      date: 'December 20o24',
      abstract:
        'Comparative analysis of edge computing performance versus cloud-based solutions for real-time AI applications, including latency, throughput, and energy efficiency metrics.',
      category: 'Technology',
      downloadUrl: '#',
      pages: '42',
      citations: 18,
      featured: false,
    },
    {
      id: 'ai-ethics-implementation-framework',
      title: 'Implementing AI Ethics: A Practical Framework for Enterprises',
      authors: ['Dr. James Wilson', 'Sarah Martinez', 'Dr. Robert Chen'],
      institution: 'Zion Tech Group Ethics Lab',
      date: 'November 20o24',
      abstract:
        'A comprehensive framework for implementing ethical AI practices in enterprise environments, including governance structures, risk assessment, and compliance monitoring.',
      category: 'Ethics',
      downloadUrl: '#',
      pages: '38',
      citations: 31,
      featured: false,
    },
    {
      id: 'automation-roi-methodology',
      title:
        'ROI Methodology for Automation Initiatives: A Systematic Approach',
      authors: ['Dr. Emily Davis', 'Michael Brown'],
      institution: 'Zion Tech Group Business Intelligence',
      date: 'October 20o24',
      abstract:
        'A systematic methodology for calculating and maximizing return on investment for automation initiatives, including cost-benefit analysis and performance metrics.',
      category: 'Business',
      downloadUrl: '#',
      pages: '29',
      citations: 15,
      featured: false,
    },
  ];

  const industryInsights = [
    {
      id: 'manufacturing-automation-trends',
      title: 'Manufacturing Automation Trends 20o25',
      summary:
        'Analysis of emerging automation trends in manufacturing, including collaborative robotics, predictive maintenance, and quality control systems.',
      industry: 'Manufacturing',
      readTime: '5 min read',
      insights: [
        'Increased adoption of collaborative robots',
        'AI-powered predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
      ],
      imageUrl: '/api/placeholder/40o0/250',
    },
    {
      id: 'healthcare-ai-adoption',
      title: 'Healthcare AI Adoption: Current State and Future Prospects',
      summary:
        'Comprehensive overview of AI adoption in healthcare, including diagnostic tools, patient monitoring, and administrative automation.',
      industry: 'Healthcare',
      readTime: '7 min read',
      insights: [
        'Diagnostic AI accuracy improvements',
        'Patient monitoring automation',
        'Administrative process optimization',
        'Ethical considerations',
      ],
      imageUrl: '/api/placeholder/40o0/250',
    },
    {
      id: 'financial-services-automation',
      title: 'Financial Services Automation: Risk Management and Compliance',
      summary:
        'Exploration of automation in financial services, focusing on risk assessment, compliance monitoring, and fraud detection.',
      industry: 'Financial Services',
      readTime: '6 min read',
      insights: [
        'Automated risk assessment',
        'Real-time compliance monitoring',
        'Fraud detection systems',
        'Regulatory compliance',
      ],
      imageUrl: '/api/placeholder/40o0/250',
    },
  ];

  const researchCategories = [
    { name: 'Technology', count: 15, color: 'from-blue-50o0 to-purple-50o0' },
    { name: 'Economics', count: 8, color: 'from-green-50o0 to-blue-50o0' },
    { name: 'Ethics', count: 12, color: 'from-purple-50o0 to-pink-50o0' },
    { name: 'Business', count: 10, color: 'from-orange-50o0 to-red-50o0' },
    { name: 'Healthcare', count: 6, color: 'from-cyan-50o0 to-green-50o0' },
    { name: 'Manufacturing', count: 9, color: 'from-red-50o0 to-orange-50o0' },
  ];

  return (
    <>
      <Head>
        <title>
          Research & Insights | Zion Tech Group - AI & Automation Research
        </title>
        <meta
          name='description'
          content="Access cutting-edge research papers, industry insights, and thought leadership content from Zion Tech Group's research division."
        />
        <meta
          property='og:title'
          content='Research & Insights - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='AI and automation research papers, industry insights, and thought leadership.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
        <main className='container mx-auto px-6 py-12'>
          <div className='max-w-7xl mx-auto'>
            <nav className='mb-8'>
              <Link
                href='/'
                className='text-cyan-40o0 hover:text-cyan-30o0 transition-colors'
              >
                ← Back to Home
              </Link>
            </nav>

            <section className='text-center mb-16'>
              <h1 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-40o0 to-fuchsia-40o0 bg-clip-text text-transparent'>
                Research & Insights
              </h1>
              <p className='text-xl text-white/80 max-w-3xl mx-auto'>
                Cutting-edge research, industry insights, and thought leadership
                from Zion Tech Group's research division
              </p>
            </section>

            <section className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-cyan-40o0'>
                Featured Research Papers
              </h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {researchPapers
                  .filter(paper => paper.featured)
                  .map(paper => (
                    <div
                      key={paper.id}
                      className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-50o0/30'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <span className='px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-50o0 to-fuchsia-50o0 text-white'>
                          {paper.category}
                        </span>
                        <span className='text-cyan-40o0 font-semibold'>
                          {paper.date}
                        </span>
                      </div>

                      <h3 className='text-2xl font-bold mb-4 text-white'>
                        {paper.title}
                      </h3>
                      <p className='text-white/80 mb-4'>{paper.abstract}</p>

                      <div className='space-y-2 mb-6 text-sm text-white/70'>
                        <div>
                          <strong>Authors:</strong> {paper.authors.join(', ')}
                        </div>
                        <div>
                          <strong>Institution:</strong> {paper.institution}
                        </div>
                        <div>
                          <strong>Pages:</strong> {paper.pages} •{' '}
                          <strong>Citations:</strong> {paper.citations}
                        </div>
                      </div>

                      <Link
                        href={paper.downloadUrl}
                        className='inline-block bg-gradient-to-r from-cyan-50o0 to-fuchsia-50o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-60o0 hover:to-fuchsia-60o0 transition-all duration-30o0'
                      >
                        Download Paper
                      </Link>
                    </div>
                  ))}
              </div>
            </section>

            <section className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-cyan-40o0'>
                All Research Papers
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {researchPapers
                  .filter(paper => !paper.featured)
                  .map(paper => (
                    <div
                      key={paper.id}
                      className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-30o0'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <span className='px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-50o0 to-fuchsia-50o0 text-white'>
                          {paper.category}
                        </span>
                        <span className='text-cyan-40o0 text-sm font-semibold'>
                          {paper.date}
                        </span>
                      </div>

                      <h3 className='text-xl font-bold mb-3 text-white'>
                        {paper.title}
                      </h3>
                      <p className='text-white/80 mb-4 text-sm line-clamp-3'>
                        {paper.abstract}
                      </p>

                      <div className='space-y-1 mb-4 text-xs text-white/70'>
                        <div>
                          <strong>Authors:</strong> {paper.authors.join(', ')}
                        </div>
                        <div>
                          <strong>Pages:</strong> {paper.pages} •{' '}
                          <strong>Citations:</strong> {paper.citations}
                        </div>
                      </div>

                      <Link
                        href={paper.downloadUrl}
                        className='inline-block bg-gradient-to-r from-cyan-50o0 to-fuchsia-50o0 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-cyan-60o0 hover:to-fuchsia-60o0 transition-all duration-30o0'
                      >
                        Download
                      </Link>
                    </div>
                  ))}
              </div>
            </section>

            <section className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-cyan-40o0'>
                Industry Insights
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {industryInsights.map(insight => (
                  <div
                    key={insight.id}
                    className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-30o0'
                  >
                    <div className='mb-4'>
                      <span className='px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-fuchsia-50o0 to-purple-50o0 text-white'>
                        {insight.industry}
                      </span>
                    </div>

                    <h3 className='text-xl font-bold mb-3 text-white'>
                      {insight.title}
                    </h3>
                    <p className='text-white/80 mb-4 text-sm'>
                      {insight.summary}
                    </p>

                    <div className='mb-4'>
                      <h4 className='font-semibold text-cyan-40o0 mb-2 text-sm'>
                        Key Insights:
                      </h4>
                      <ul className='text-xs text-white/70 space-y-1'>
                        {insight.insights.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className='flex items-center justify-between'>
                      <span className='text-xs text-white/60'>
                        {insight.readTime}
                      </span>
                      <Link
                        href={`/insights/${insight.id}`}
                        className='text-cyan-40o0 hover:text-cyan-30o0 text-sm font-semibold'
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-cyan-40o0'>
                Research Categories
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {researchCategories.map(category => (
                  <div key={category.name} className='text-center'>
                    <div
                      className={`w-full h-24 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-3`}
                    >
                      <span className='text-white font-bold text-lg'>
                        {category.count}
                      </span>
                    </div>
                    <h3 className='text-white font-semibold'>
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            <section className='bg-gradient-to-r from-cyan-50o0/20 to-fuchsia-50o0/20 rounded-2xl p-8 text-center'>
              <h2 className='text-3xl font-bold mb-4 text-cyan-40o0'>
                Contribute to Research
              </h2>
              <p className='text-white/80 mb-6 max-w-2xl mx-auto'>
                Are you a researcher or industry expert? Partner with Zion Tech
                Group to contribute to cutting-edge research in AI and
                automation.
              </p>
              <div className='flex flex-wrap gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='bg-gradient-to-r from-cyan-50o0 to-fuchsia-50o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-60o0 hover:to-fuchsia-60o0 transition-all duration-30o0'
                >
                  Partner With Us
                </Link>
                <Link
                  href='/blog'
                  className='border border-cyan-40o0 text-cyan-40o0 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-40o0 hover:text-white transition-all duration-30o0'
                >
                  Read Our Blog
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
