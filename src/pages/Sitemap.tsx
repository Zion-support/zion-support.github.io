
const Sitemap: React.FC = () => {
  const sitemapData = {
    main: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' }
    ],
    services: [
      { name: 'AI Services', path: '/services/ai' },
      { name: 'Cloud Services', path: '/services/cloud' },
      { name: 'Cybersecurity', path: '/services/cybersecurity' },
      { name: 'IT Infrastructure', path: '/services/infrastructure' },
      { name: 'Digital Transformation', path: '/services/transformation' },
      { name: 'IT Consulting', path: '/services/consulting' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Partners', path: '/partners' },
      { name: 'Green IT', path: '/green-it' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookies', path: '/cookies' }
    ]
  };

