<<<<<<< HEAD
 export default Sitemap const Sitemap = () => { const sitemapSections = [ { title: 'Main Pages', links: [ { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' }, { name: 'About', path: '/about', description: 'Learn about our company'}, { name: 'Contact', path: '/contact', description: 'Get in touch with us'}, { name: 'Partners', path: '/partners', description: 'Our business partners'}, { name: 'Careers', path: '/careers', description: 'Job opportunities' }]}, { title: 'Services', links: [ { name: 'All Services', path: '/services', description: 'Complete service catalog'}, { name: 'AI Solutions', path: '/services / ai', description: 'Artificial intelligence services'}, { name: 'Cybersecurity', path: '/services / cybersecurity', description: 'Security and compliance'}, { name: 'Cloud & DevOps', path: '/services / cloud - devops', description: 'Cloud infrastructure'}, { name: 'Digital Transformation', path: '/services / digital - transformation', description: 'Business transformation'}]}, { title: 'Marketplace', links: [ { name: 'Marketplace', path: '/marketplace', description: 'Browse our marketplace'}, { name: 'Products', path: '/marketplace / products', description: 'Available products'}, { name: 'Services', path: '/marketplace / services', description: 'Marketplace services'}, { name: 'Talent', path: '/marketplace / talent', description: 'Find talent'}]}, { title: 'Support & Resources', links: [ { name: 'Blog', path: '/blog', description: 'Latest insights and news'}, { name: 'FAQ', path: '/faq', description: 'Frequently asked questions'}, { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation'}, { name: 'Help Center', path: '/help', description: 'Self - service support'}, { name: 'System Status', path: '/status', description: 'Service status and uptime'}, { name: 'Security', path: '/security', description: 'Security and compliance information'}]}, { title: 'Legal & Compliance', links: [ { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy'}, { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions'}, { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information'}, { name: 'Accessibility', path: '/accessibility', description: 'Accessibility information'}]}, { title: 'User Account', links: [ { name: 'Login', path: '/login', description: 'User authentication' }, { name: 'Sign Up', path: '/signup', description: 'Create new account' }, { name: 'Dashboard', path: '/dashboard', description: 'User dashboard'}, { name: 'Forgot Password', path: '/forgot - password', description: 'Password recovery'}]}] return (<div className='min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 text - white pt - 24'> <div className='container mx - auto px - 4 py - 16'> {} <div className='text - center mb - 16'> <h1 className='text - 4xl md: text - 6xl font - bold mb - 6'> Site{'} <span className='text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - cyan - 400'> {'} Map </span> </h1> <p className='text - xl text - gray - 300 max - w-3xl mx - auto'> Complete navigation guide to all pages and services on Zion Tech Group </p> </div> {} <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'> {sitemapSections.map ( (section, sectionIndex) => (<div key={sectionIndex} className='bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20' > <h2 className='text - xl font - bold text - white mb - 4 border - b border - zion - cyan / 30 pb - 2'> {section.title} </h2> <ul className='space - y-3'> {section.links.map ( (link, linkIndex) => (<li key={linkIndex}> <Link to={link.path} className='block text - zion - slate - light hover: text - zion - cyan transition - colors duration - 300 group' > <div className='font - medium text - white group - hover:text - zion - cyan transition - colors'> {link.name} </div> <div className='text - sm text - gray - 400 group - hover:text - zion - cyan / 70 transition - colors'> {link.description} </div> </Link> </li>) ) } </ul> </div>) ) } </div> {} <div className='mt - 16 text - center'> <h2 className='text - 2xl font - bold text - white mb - 8'> Quick Links </h2> <div className='flex flex - wrap justify - center gap - 4'> <Link to='/contact' className='px - 6 py - 3 bg - gradient - to - r from - zion - cyan to - zion - blue text - white rounded - lg font - medium hover: scale - 105 transition - transform' > Get Started </Link> <Link to='/services' className='px - 6 py - 3 border - 2 border - zion - cyan text - zion - cyan rounded - lg font - medium hover:bg - zion - cyan hover:text - white transition - colors' > View Services </Link> <Link to='/help' className='px - 6 py - 3 border - 2 border - zion - purple text - zion - purple rounded - lg font - medium hover:bg - zion - purple hover:text - white transition - colors' > Get Help </Link> </div> </div> </div> </div>)  }';'";
=======
<<<<<<< HEAD
import React from 'react';
import {Link } from 'react-router-dom';
import {Home, 
  Briefcase, 
  Target, 
  Building, 
  FileText, 
  Video, 
  Mail, 
  HelpCircle, 
  Users, 
<<<<<<< HEAD
  Globe,
  ArrowRight,
  ExternalLink'
} from 'lucide-react';

export default function Sitemap() {
  const sitemapStructure = [
    {'
      title: 'Main Pages',
      icon: Home,
      pages: ['
        { nam,
    e: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership programs' }
      ]
    },
    {'
      title: 'Services',
      icon: Briefcase,
      pages: ['
        { nam,
    e: 'AI Services', path: '/services/ai', description: 'Artificial intelligence solutions' },
        { name: 'Cloud Solutions', path: '/services/cloud', description: 'Cloud infrastructure and migration' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and compliance' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Hardware and network solutions' },
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation consulting' },
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology consulting' }
      ]
    },
    {'
      title: 'Solutions',
      icon: Target,
      pages: ['
        { nam,
    e: 'Industry Solutions', path: '/solutions/industry', description: 'Sector-specific solutions' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Smart factory solutions' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'FinTech and banking solutions' },
        { name: 'Healthcare', path: '/solutions/healthcare', description: 'Digital health solutions' },
        { name: 'Retail', path: '/solutions/retail', description: 'E-commerce and retail solutions' },
        { name: 'Education', path: '/solutions/education', description: 'EdTech solutions' }
      ]
    },
    {'
      title: 'Resources',
      icon: FileText,
      pages: ['
        { nam,
    e: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation and research' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry research papers' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' }
      ]
    },
    {'
      title: 'Events & News',
      icon: Video,
      pages: ['
        { nam,
    e: 'Events', path: '/events', description: 'Upcoming and past events' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Press Releases', path: '/press', description: 'Official press releases' },
        { name: 'Media Kit', path: '/media-kit', description: 'Brand assets and resources' }
      ]
    },
    {'
      title: 'Support & Help',
      icon: HelpCircle,
      pages: ['
        { nam,
    e: 'Help Center', path: '/support', description: 'Self-service support' },
        { name: 'Training', path: '/training', description: 'Training and certification' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Status Page', path: '/status', description: 'System status and uptime' }
      ]
    },
    {'
      title: 'Legal & Policies',
      icon: Users,
      pages: ['
        { nam,
    e: 'Privacy Policy', path: '/privacy-policy', description: 'Data privacy information' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Cookie usage information' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'Security', path: '/security', description: 'Security practices and policies' }
      ]
    },
    {'
      title: 'Developer Resources',
      icon: Globe,
      pages: ['
        { nam,
    e: 'API Documentation', path: '/api', description: 'Developer API reference' },
        { name: 'SDKs & Libraries', path: '/developers/sdks', description: 'Software development kits' },
        { name: 'Code Examples', path: '/developers/examples', description: 'Sample code and tutorials' },
        { name: 'Developer Blog', path: '/developers/blog', description: 'Technical articles' },
        { name: 'Community Forum', path: '/community', description: 'Developer community' }
=======
  Globe,;
  ArrowRight,;
  ExternalLink;
} from 'lucide-react';

export default function Sitemap()   {const sitemapStructure = [{
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        {name: 'About Us', path: '/about', description: 'Company information and team' },
        {name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        {name: 'Careers', path: '/careers', description: 'Job opportunities' },
        {name: 'Partners', path: '/partners', description: 'Partnership programs' }
      ]
    },
    {title: 'Services',
      icon: Briefcase,
      pages: [{ name: 'AI Services', path: '/services/ai', description: 'Artificial intelligence solutions' },
        {name: 'Cloud Solutions', path: '/services/cloud', description: 'Cloud infrastructure and migration' },
        {name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and compliance' },
        {name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Hardware and network solutions' },
        {name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation consulting' },
        {name: 'Consulting', path: '/services/consulting', description: 'Strategic technology consulting' }
      ]
    },
    {title: 'Solutions',
      icon: Target,
      pages: [{ name: 'Industry Solutions', path: '/solutions/industry', description: 'Sector-specific solutions' },
        {name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Smart factory solutions' },
        {name: 'Financial Services', path: '/solutions/financial', description: 'FinTech and banking solutions' },
        {name: 'Healthcare', path: '/solutions/healthcare', description: 'Digital health solutions' },
        {name: 'Retail', path: '/solutions/retail', description: 'E-commerce and retail solutions' },
        {name: 'Education', path: '/solutions/education', description: 'EdTech solutions' }
      ]
    },
    {title: 'Resources',
      icon: FileText,
      pages: [{ name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        {name: 'Research & Development', path: '/research-development', description: 'Innovation and research' },
        {name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        {name: 'White Papers', path: '/white-papers', description: 'Industry research papers' },
        {name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        {name: 'Documentation', path: '/docs', description: 'Technical documentation' }
      ]
    },
    {title: 'Events & News',
      icon: Video,
      pages: [{ name: 'Events', path: '/events', description: 'Upcoming and past events' },
        {name: 'News', path: '/news', description: 'Company news and updates' },
        {name: 'Press Releases', path: '/press', description: 'Official press releases' },
        {name: 'Media Kit', path: '/media-kit', description: 'Brand assets and resources' }
      ]
    },
    {title: 'Support & Help',
      icon: HelpCircle,
      pages: [{ name: 'Help Center', path: '/support', description: 'Self-service support' },
        {name: 'Training', path: '/training', description: 'Training and certification' },
        {name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        {name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        {name: 'Status Page', path: '/status', description: 'System status and uptime' }
      ]
    },
    {title: 'Legal & Policies',
      icon: Users,
      pages: [{ name: 'Privacy Policy', path: '/privacy-policy', description: 'Data privacy information' },
        {name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions' },
        {name: 'Cookie Policy', path: '/cookie-policy', description: 'Cookie usage information' },
        {name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        {name: 'Security', path: '/security', description: 'Security practices and policies' }
      ]
    },
    {title: 'Developer Resources',
      icon: Globe,
      pages: [{ name: 'API Documentation', path: '/api', description: 'Developer API reference' },
        {name: 'SDKs & Libraries', path: '/developers/sdks', description: 'Software development kits' },
        {name: 'Code Examples', path: '/developers/examples', description: 'Sample code and tutorials' },
        {name: 'Developer Blog', path: '/developers/blog', description: 'Technical articles' },
        {name: 'Community Forum', path: '/community', description: 'Developer community' }
>>>>>>> main
      ]
    }
  ];

<<<<<<< HEAD
  const externalLinks = ['
    { name: 'LinkedIn', url: 'http,
    s://linkedin.com/company/ziontechgroup', description: 'Follow us on LinkedIn' },
    { name: 'Twitter', url: 'http,
    s://twitter.com/ziontechgroup', description: 'Follow us on Twitter' },
    { name: 'GitHub', url: 'http,
    s://github.com/ziontechgroup', description: 'Open source projects' },
    { name: 'YouTube', url: 'http,
    s://youtube.com/@ziontechgroup', description: 'Video content and tutorials' },
    { name: 'Discord', url: 'http,
    s://discord.gg/ziontechgroup', description: 'Join our community' }
  ];

  return ('
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Header */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">"
          <div className="text-center max-w-4xl mx-auto">"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site Map
            </h1>"
            <p className="text-xl m,
    d:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Navigate through all the pages and resources available on the Zion Tech Group website
            </p>"
=======
  const externalLinks = [{name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', description: 'Follow us on LinkedIn' },
    {name: 'Twitter', url: 'https://twitter.com/ziontechgroup', description: 'Follow us on Twitter' },
    {name: 'GitHub', url: 'https://github.com/ziontechgroup', description: 'Open source projects' },
    {name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', description: 'Video content and tutorials' },
    {name: 'Discord', url: 'https://discord.gg/ziontechgroup', description: 'Join our community' }
=======
<<<<<<< HEAD
 export default Sitemap const Sitemap = () => {} const;const sitemapSections = [ { title: &apos;Main Pages&apos;, links: [ { nam,e: &apos;Home&apos;, path: &apos;/&apos;, description: &apos;Welcome to Zion Tech Group&apos; }, { name: &apos;About&apos;, path: &apos;/about&apos;, description: &apos;Learn about our company&apos;}, { name: &apos;Contact&apos;, path: &apos;/contact&apos;, description: &apos;Get in touch with us&apos;}, { name: &apos;Partners&apos;, path: &apos;/partners&apos;, description: &apos;Our business partners&apos;}, { name: &apos;Careers&apos;, path: &apos;/careers&apos;, description: &apos;Job opportunities&apos; }]}, { title: &apos;Services&apos;, links: [ { nam,e: &apos;All Services&apos;, path: &apos;/services&apos;, description: &apos;Complete service catalog&apos;}, { name: &apos;AI Solutions&apos;, path: &apos;/services / ai&apos;, description: &apos;Artificial intelligence services&apos;}, { name: &apos;Cybersecurity&apos;, path: &apos;/services / cybersecurity&apos;, description: &apos;Security and compliance&apos;}, { name: &apos;Cloud & DevOps&apos;, path: &apos;/services / cloud - devops&apos;, description: &apos;Cloud infrastructure&apos;}, { name: &apos;Digital Transformation&apos;, path: &apos;/services / digital - transformation&apos;, description: &apos;Business transformation&apos;}]}, { title: &apos;Marketplace&apos;, links: [ { nam,e: &apos;Marketplace&apos;, path: &apos;/marketplace&apos;, description: &apos;Browse our marketplace&apos;}, { name: &apos;Products&apos;, path: &apos;/marketplace / products&apos;, description: &apos;Available products&apos;}, { name: &apos;Services&apos;, path: &apos;/marketplace / services&apos;, description: &apos;Marketplace services&apos;}, { name: &apos;Talent&apos;, path: &apos;/marketplace / talent&apos;, description: &apos;Find talent&apos;}]}, { title: &apos;Support & Resources&apos;, links: [ { nam,e: &apos;Blog&apos;, path: &apos;/blog&apos;, description: &apos;Latest insights and news&apos;}, { name: &apos;FAQ&apos;, path: &apos;/faq&apos;, description: &apos;Frequently asked questions&apos;}, { name: &apos;Sitemap&apos;, path: &apos;/sitemap&apos;, description: &apos;Complete site navigation&apos;}, { name: &apos;Help Center&apos;, path: &apos;/help&apos;, description: &apos;Self - service support&apos;}, { name: &apos;System Status&apos;, path: &apos;/status&apos;, description: &apos;Service status and uptime&apos;}, { name: &apos;Security&apos;, path: &apos;/security&apos;, description: &apos;Security and compliance information&apos;}]}, { title: &apos;Legal & Compliance&apos;, links: [ { nam,e: &apos;Privacy Policy&apos;, path: &apos;/privacy&apos;, description: &apos;Data protection and privacy&apos;}, { name: &apos;Terms of Service&apos;, path: &apos;/terms&apos;, description: &apos;Terms and conditions&apos;}, { name: &apos;Cookie Policy&apos;, path: &apos;/cookies&apos;, description: &apos;Cookie usage information&apos;}, { name: &apos;Accessibility&apos;, path: &apos;/accessibility&apos;, description: &apos;Accessibility information&apos;}]}, { title: &apos;User Account&apos;, links: [ { nam,e: &apos;Login&apos;, path: &apos;/login&apos;, description: &apos;User authentication&apos; }, { name: &apos;Sign Up&apos;, path: &apos;/signup&apos;, description: &apos;Create new account&apos; }, { name: &apos;Dashboard&apos;, path: &apos;/dashboard&apos;, description: &apos;User dashboard&apos;}, { name: &apos;Forgot Password&apos;, path: &apos;/forgot - password&apos;, description: &apos;Password recovery&apos;}]}] return (&apos;&apos;<div className=&apos;min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 text - white pt - 24&apos;>&apos;' <div className=&apos;container mx - auto px - 4 py - 16&apos;> {}&apos; <div className=&apos;text - center mb - 16&apos;>&apos;' <h1 className=&apos;text - 4xl md: text - 6xl font - bold mb - 6&apos;> Site{&apos;}&apos;' <span className=&apos;text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - cyan - 400&apos;> {&apos;} Map&apos; </span> </h1> <p className=&apos;text - xl text - gray - 300 max - w-3xl mx - auto&apos;> Complete navigation guide to all pages and services on Zion Tech Group&apos; </p> </div> {} <div className=&apos;grid grid - cols - 1 md:grid - cols - 2 l,g:grid - cols - 3 gap - 8&apos;> {sitemapSections.map ( (section, sectionIndex) => (&apos;}<div key={sectionIndex} className=&apos;bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20&apos; >&apos; <h2 className=&apos;text - xl font - bold text - white mb - 4 border - b border - zion - cyan / 30 pb - 2&apos;> {section.title}&apos; </h2> <ul className=&apos;space - y-3&apos;> {section.links.map ( (link, linkIndex) => (&apos;}<li key={linkIndex}> <Link to={link.path} className=&apos;block text - zion - slate - light hover: text - zion - cyan transition - colors duration - 300 group&apos; >&apos; <div className=&apos;font - medium text - white group - hove,r:text - zion - cyan transition - colors&apos;> {link.name}&apos; </div> <div className=&apos;text - sm text - gray - 400 group - hover:text - zion - cyan / 70 transition - colors&apos;> {link.description}&apos; </div> </Link> </li>) ) } </ul> </div>) ) } </div> {} <div className=&apos;mt - 16 text - center&apos;>&apos;' <h2 className=&apos;text - 2xl font - bold text - white mb - 8&apos;> Quick Links&apos; </h2> <div className=&apos;flex flex - wrap justify - center gap - 4&apos;>&apos;' <Link to=&apos;/contact&apos; className=&apos;px - 6 py - 3 bg - gradient - to - r from - zion - cyan to - zion - blue text - white rounded - lg font - medium hover: scale - 105 transition - transform&apos; > Get Started&apos; </Link> <Link to=&apos;/services&apos; className=&apos;px - 6 py - 3 border - 2 border - zion - cyan text - zion - cyan rounded - lg font - medium hover:bg - zion - cyan hover:text - white transition - colors&apos; > View Services&apos; </Link> <Link to=&apos;/help&apos; className=&apos;px - 6 py - 3 border - 2 border - zion - purple text - zion - purple rounded - lg font - medium hover:bg - zion - purple hove,r:text - white transition - colors&apos; > Get Help&apos; </Link> </div> </div> </div> <;</div>)  }';&apos;'&quot;
&quot;"
=======
<<<<<<< HEAD
import React from 'react';""
=======
<<<<<<< HEAD
 export default Sitemap const Sitemap = () => { const sitemapSections = [ { title: 'Main Pages', links: [ { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' }, { name: 'About', path: '/about', description: 'Learn about our company'}, { name: 'Contact', path: '/contact', description: 'Get in touch with us'}, { name: 'Partners', path: '/partners', description: 'Our business partners'}, { name: 'Careers', path: '/careers', description: 'Job opportunities' }]}, { title: 'Services', links: [ { name: 'All Services', path: '/services', description: 'Complete service catalog'}, { name: 'AI Solutions', path: '/services / ai', description: 'Artificial intelligence services'}, { name: 'Cybersecurity', path: '/services / cybersecurity', description: 'Security and compliance'}, { name: 'Cloud & DevOps', path: '/services / cloud - devops', description: 'Cloud infrastructure'}, { name: 'Digital Transformation', path: '/services / digital - transformation', description: 'Business transformation'}]}, { title: 'Marketplace', links: [ { name: 'Marketplace', path: '/marketplace', description: 'Browse our marketplace'}, { name: 'Products', path: '/marketplace / products', description: 'Available products'}, { name: 'Services', path: '/marketplace / services', description: 'Marketplace services'}, { name: 'Talent', path: '/marketplace / talent', description: 'Find talent'}]}, { title: 'Support & Resources', links: [ { name: 'Blog', path: '/blog', description: 'Latest insights and news'}, { name: 'FAQ', path: '/faq', description: 'Frequently asked questions'}, { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation'}, { name: 'Help Center', path: '/help', description: 'Self - service support'}, { name: 'System Status', path: '/status', description: 'Service status and uptime'}, { name: 'Security', path: '/security', description: 'Security and compliance information'}]}, { title: 'Legal & Compliance', links: [ { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy'}, { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions'}, { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information'}, { name: 'Accessibility', path: '/accessibility', description: 'Accessibility information'}]}, { title: 'User Account', links: [ { name: 'Login', path: '/login', description: 'User authentication' }, { name: 'Sign Up', path: '/signup', description: 'Create new account' }, { name: 'Dashboard', path: '/dashboard', description: 'User dashboard'}, { name: 'Forgot Password', path: '/forgot - password', description: 'Password recovery'}]}] return (<div className='min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 text - white pt - 24'> <div className='container mx - auto px - 4 py - 16'> {} <div className='text - center mb - 16'> <h1 className='text - 4xl md: text - 6xl font - bold mb - 6'> Site{'} <span className='text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - cyan - 400'> {'} Map </span> </h1> <p className='text - xl text - gray - 300 max - w-3xl mx - auto'> Complete navigation guide to all pages and services on Zion Tech Group </p> </div> {} <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'> {sitemapSections.map ( (section, sectionIndex) => (<div key={sectionIndex} className='bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20' > <h2 className='text - xl font - bold text - white mb - 4 border - b border - zion - cyan / 30 pb - 2'> {section.title} </h2> <ul className='space - y-3'> {section.links.map ( (link, linkIndex) => (<li key={linkIndex}> <Link to={link.path} className='block text - zion - slate - light hover: text - zion - cyan transition - colors duration - 300 group' > <div className='font - medium text - white group - hover:text - zion - cyan transition - colors'> {link.name} </div> <div className='text - sm text - gray - 400 group - hover:text - zion - cyan / 70 transition - colors'> {link.description} </div> </Link> </li>) ) } </ul> </div>) ) } </div> {} <div className='mt - 16 text - center'> <h2 className='text - 2xl font - bold text - white mb - 8'> Quick Links </h2> <div className='flex flex - wrap justify - center gap - 4'> <Link to='/contact' className='px - 6 py - 3 bg - gradient - to - r from - zion - cyan to - zion - blue text - white rounded - lg font - medium hover: scale - 105 transition - transform' > Get Started </Link> <Link to='/services' className='px - 6 py - 3 border - 2 border - zion - cyan text - zion - cyan rounded - lg font - medium hover:bg - zion - cyan hover:text - white transition - colors' > View Services </Link> <Link to='/help' className='px - 6 py - 3 border - 2 border - zion - purple text - zion - purple rounded - lg font - medium hover:bg - zion - purple hover:text - white transition - colors' > Get Help </Link> </div> </div> </div> </div>)  }';''"'"
=======
import React from 'react
>>>>>>> main
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { 
  Home, Briefcase, 
  Target, Building, 
  FileText, Video, 
  Mail, HelpCircle, 
  Users, Globe,
  ArrowRight, ExternalLink;", "
} from 'lucide-react';

>>>>>>> main
export default function Sitemap() {
  const sitemapStructure = [
<<<<<<< HEAD
    {""
      title: 'Main Pages', icon: Home,
      pages: [""
        { name: 'Home', path: '/', description: 'Main landing page' }, ""
        { name: 'About Us', path: '/about', description: 'Company information and team' },""
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' }, ""
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },""
=======
  {"
      title: 'Main Pages',
      icon: Home,
      pages: ["
        { name: 'Home', path: '/', description: 'Main landing page' },"
        { name: 'About Us', path: '/about', description: 'Company information and team' },"
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },"
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },"
>>>>>>> main
        { name: 'Partners', path: '/partners', description: 'Partnership programs' }
      ], },
    {""
      title: 'Services', icon: Briefcase,
      pages: [""
        { name: 'AI Services', path: '/services/ai', description: 'Artificial intelligence solutions' }, ""
        { name: 'Cloud Solutions', path: '/services/cloud', description: 'Cloud infrastructure and migration' },""
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and compliance' }, ""
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Hardware and network solutions' },""
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation consulting' }, ""
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology consulting' }
      ], },
    {""
      title: 'Solutions', icon: Target,
      pages: [""
        { name: 'Industry Solutions', path: '/solutions/industry', description: 'Sector-specific solutions' }, ""
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Smart factory solutions' },""
        { name: 'Financial Services', path: '/solutions/financial', description: 'FinTech and banking solutions' }, ""
        { name: 'Healthcare', path: '/solutions/healthcare', description: 'Digital health solutions' },""
        { name: 'Retail', path: '/solutions/retail', description: 'E-commerce and retail solutions' }, ""
        { name: 'Education', path: '/solutions/education', description: 'EdTech solutions' }
      ], },
    {""
      title: 'Resources', icon: FileText,
      pages: [""
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' }, ""
        { name: 'Research & Development', path: '/research-development', description: 'Innovation and research' },""
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' }, ""
        { name: 'White Papers', path: '/white-papers', description: 'Industry research papers' },""
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' }, ""
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' }
      ], },
    {""
      title: 'Events & News', icon: Video,
      pages: [""
        { name: 'Events', path: '/events', description: 'Upcoming and past events' }, ""
        { name: 'News', path: '/news', description: 'Company news and updates' },""
        { name: 'Press Releases', path: '/press', description: 'Official press releases' }, ""
        { name: 'Media Kit', path: '/media-kit', description: 'Brand assets and resources' }
      ], },
    {""
      title: 'Support & Help', icon: HelpCircle,
      pages: [""
        { name: 'Help Center', path: '/support', description: 'Self-service support' }, ""
        { name: 'Training', path: '/training', description: 'Training and certification' },""
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }, ""
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },""
        { name: 'Status Page', path: '/status', description: 'System status and uptime' }
      ], },
    {""
      title: 'Legal & Policies', icon: Users,
      pages: [""
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'Data privacy information' }, ""
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions' },""
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Cookie usage information' }, ""
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },""
        { name: 'Security', path: '/security', description: 'Security practices and policies' }
      ], },
    {""
      title: 'Developer Resources', icon: Globe,
      pages: [""
        { name: 'API Documentation', path: '/api', description: 'Developer API reference' }, ""
        { name: 'SDKs & Libraries', path: '/developers/sdks', description: 'Software development kits' },""
        { name: 'Code Examples', path: '/developers/examples', description: 'Sample code and tutorials' }, ""
        { name: 'Developer Blog', path: '/developers/blog', description: 'Technical articles' },""
        { name: 'Community Forum', path: '/community', description: 'Developer community' }
      ], }
  ];

  const externalLinks = [""
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', description: 'Follow us on LinkedIn' }, ""
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', description: 'Follow us on Twitter' },""
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', description: 'Open source projects' }, ""
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', description: 'Video content and tutorials' },""
    { name: 'Discord', url: 'https://discord.gg/ziontechgroup', description: 'Join our community' }
>>>>>>> main
  ];

  return (""
    <div className="min-h-screen bg-zion-blue-dark">
<<<<<<< HEAD
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
=======
      {/* Header */}""
      <section className="py-20">""
        <div className="container mx-auto px-4">""
          <div className="text-center max-w-4xl mx-auto">""
>>>>>>> main
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
              Site Map
            </h1>""
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Navigate through all the pages and resources available on the Zion Tech Group website
            </p>""
>>>>>>> main
            <p className="text-lg text-zion-slate-light">
              Find everything you need to explore our services, solutions, and resources
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Sitemap Structure */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sitemapStructure.map((section, sectionIndex) => ("
              <div key={sectionIndex} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-8">"
                <div className="flex items-center mb-6">"
                  <div className="w-12 h-12 rounded-lg bg-zion-purple/20 flex items-center justify-center mr-4">"
                    <section.icon className="h-6 w-6 text-zion-cyan" />
                  </div>"
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                "
                <div className="space-y-4">
                  {section.pages.map((page, pageIndex) => ("
                    <div key={pageIndex} className="group">
                      <Link
                        to={page.path}"
                        className="flex items-start space-x-3 p-3 rounded-lg hover: bg-zion-purple/10 transition-all duration-300"
                      >"
                        <ArrowRight className="h-4 w-4 text-zion-cyan mt-1 flex-shrink-0 group-hove,
    r:translate-x-1 transition-transform" />"
                        <div className="flex-1">"
                          <div className="text-white font-medium group-hove,
    r:text-zion-cyan transition-colors">
                            {page.name}
                          </div>"
=======
<<<<<<< HEAD
      {/* Sitemap Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">
            {sitemapStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-zion-purple/20 flex items-center justify-center mr-4">
                    <section.icon className="h-6 w-6 text-zion-cyan" />
                  </div>
=======
      {/* Sitemap Structure */}""
      <section className="py-20">""
        <div className="container mx-auto px-4">""
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">
            {sitemapStructure.map((section, sectionIndex) => (""
              <div key={sectionIndex} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-8">""
                <div className="flex items-center mb-6">""
                  <div className="w-12 h-12 rounded-lg bg-zion-purple/20 flex items-center justify-center mr-4">""
                    <section .icon className="h-6 w-6 text-zion-cyan" /" >"
                  </div>""
>>>>>>> main
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                ""
                <div className="space-y-4">
                  {section.pages.map((page, pageIndex) => (""
                    <div key={pageIndex} className="group">
<<<<<<< HEAD
                      <Link to={page.path} className="flex items-start space-x-3 p-3 rounded-lg hover: bg-zion-purple/10 transition-all duration-300" >
                        <ArrowRight className="h-4 w-4 text-zion-cyan mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <div className="flex-1">
=======
                      <Link to={page.path}""
                        className="flex items-start space-x-3 p-3 rounded-lg hover: bg-zion-purple/10 transition-all duration-300"" >"
                        <ArrowRight className="h-4 w-4 text-zion-cyan mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" /" >"
                        <div className="flex-1">""
>>>>>>> main
                          <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                            {page.name}
                          </div>""
>>>>>>> main
                          <div className="text-zion-slate-light text-sm">
                            {page.description}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* External Links */}"
      <section className="py-20 bg-zion-blue-dark/50">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-4">
              External Resources
            </h2>"
=======
      {/* External Links */}""
      <section className="py-20 bg-zion-blue-dark/50">""
        <div className="container mx-auto px-4">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl font-bold text-white mb-4">
              External Resources
            </h2>""
>>>>>>> main
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Connect with us on social media and explore additional resources
            </p>
          </div>
<<<<<<< HEAD
"
          <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}"
                target="_blank""
                rel="noopener noreferrer""
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover: border-zion-purple/40 transition-all duration-300 group"
              >"
                <div className="flex items-center justify-between mb-4">"
                  <div className="w-10 h-10 rounded-lg bg-zion-purple/20 flex items-center justify-center">"
                    <ExternalLink className="h-5 w-5 text-zion-cyan" />
                  </div>"
                  <ExternalLink className="h-4 w-4 text-zion-slate-light group-hove,
    r:text-zion-cyan transition-colors" />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2 group-hove,
    r:text-zion-cyan transition-colors">
                  {link.name}
                </h3>"
=======
<<<<<<< HEAD

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {externalLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover: border-zion-purple/40 transition-all duration-300 group" >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zion-purple/20 flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                </div>
=======
""
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {externalLinks.map((link, index) => (
              <a key={index}
                href={link.url}""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover: border-zion-purple/40 transition-all duration-300 group"" >"
                <div className="flex items-center justify-between mb-4">""
                  <div className="w-10 h-10 rounded-lg bg-zion-purple/20 flex items-center justify-center">""
                    <ExternalLink className="h-5 w-5 text-zion-cyan" /" >"
                  </div>""
                  <ExternalLink className="h-4 w-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" /" >"
                </div>""
>>>>>>> main
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {link.name}
                </h3>""
>>>>>>> main
                <p className="text-zion-slate-light text-sm">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Quick Navigation */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">"
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12 text-center">"
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>"
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">"
              Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
            </p>'
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link"
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25"
              >
                Contact Support"
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link"
                to="/search""
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hove,
    r:bg-zion-purple/10 hove,
    r:border-zion-purple/50 transition-all duration-300"
              >
=======
      {/* Quick Navigation */}""
      <section className="py-20">""
        <div className="container mx-auto px-4">""
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12 text-center">""
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
<<<<<<< HEAD
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25" >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/search" className="inline-flex items-center px-8 py-4 border-2 border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300" >
=======
            </h2>""
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">""
              Can&apos;t find what you&apos;re looking for? Our team is here to help you navigate our website and find the information you need.
            </p>""
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link ""
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25"" >"
                Contact Support""
                <ArrowRight className="ml-2 h-5 w-5" /" >"
              </Link>
              <Link ""
                to="/search"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300"" >"
>>>>>>> main
>>>>>>> main
                Search Website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
}"
=======
  );,
<<<<<<< HEAD
}""

""
=======
}"
 export default Sitemap const Sitemap = () => { const sitemapSections = [
  { title: 'Main Pages', links: [ { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' }, { name: 'About', path: '/about', description: 'Learn about our company'}, { name: 'Contact', path: '/contact', description: 'Get in touch with us'}, { name: 'Partners', path: '/partners', description: 'Our business partners'}, { name: 'Careers', path: '/careers', description: 'Job opportunities' }]}, { title: 'Services', links: [ { name: 'All Services', path: '/services', description: 'Complete service catalog'}, { name: 'AI Solutions', path: '/services / ai', description: 'Artificial intelligence services'}, { name: 'Cybersecurity', path: '/services / cybersecurity', description: 'Security and compliance'}, { name: 'Cloud & DevOps', path: '/services / cloud - devops', description: 'Cloud infrastructure'}, { name: 'Digital Transformation', path: '/services / digital - transformation', description: 'Business transformation'}]}, { title: 'Marketplace', links: [ { name: 'Marketplace', path: '/marketplace', description: 'Browse our marketplace'}, { name: 'Products', path: '/marketplace / products', description: 'Available products'}, { name: 'Services', path: '/marketplace / services', description: 'Marketplace services'}, { name: 'Talent', path: '/marketplace / talent', description: 'Find talent'}]}, { title: 'Support & Resources', links: [ { name: 'Blog', path: '/blog', description: 'Latest insights and news'}, { name: 'FAQ', path: '/faq', description: 'Frequently asked questions'}, { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation'}, { name: 'Help Center', path: '/help', description: 'Self - service support'}, { name: 'System Status', path: '/status', description: 'Service status and uptime'}, { name: 'Security', path: '/security', description: 'Security and compliance information'}]}, { title: 'Legal & Compliance', links: [ { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy'}, { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions'}, { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information'}, { name: 'Accessibility', path: '/accessibility', description: 'Accessibility information'}]}, { title: 'User Account', links: [ { name: 'Login', path: '/login', description: 'User authentication' }, { name: 'Sign Up', path: '/signup', description: 'Create new account' }, { name: 'Dashboard', path: '/dashboard', description: 'User dashboard'}, { name: 'Forgot Password', path: '/forgot - password', description: 'Password recovery'}]}] return (<div className='min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 text - white pt - 24'> <div className='container mx - auto px - 4 py - 16'> {} <div className='text - center mb - 16'> <h1 className='text - 4xl md: text - 6xl font - bold mb - 6'> Site{'} <span className='text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - cyan - 400'> {'} Map </span> </h1> <p className='text - xl text - gray - 300 max - w-3xl mx - auto'> Complete navigation guide to all pages and services on Zion Tech Group </p> </div> {} <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'> {sitemapSections.map ( (section, sectionIndex) => (<div key={sectionIndex} className='bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20'" > <h2 className='text - xl font - bold text - white mb - 4 border - b border - zion - cyan / 30 pb - 2'> {section.title} </h2> <ul className='space - y-3'> {section.links.map ( (link, linkIndex) => (<li key={linkIndex}" > <Link to={link.path} className='block text - zion - slate - light hover: text - zion - cyan transition - colors duration - 300 group'" > <div className='font - medium text - white group - hover:text - zion - cyan transition - colors'> {link.name} </div> <div className='text - sm text - gray - 400 group - hover:text - zion - cyan / 70 transition - colors'> {link.description} </div> </Link> </li>) ) } </ul> </div>) ) } </div> {} <div className='mt - 16 text - center'> <h2 className='text - 2xl font - bold text - white mb - 8'> Quick Links </h2> <div className='flex flex - wrap justify - center gap - 4'> <Link to='/contact' className='px - 6 py - 3 bg - gradient - to - r from - zion - cyan to - zion - blue text - white rounded - lg font - medium hover: scale - 105 transition - transform'" > Get Started </Link> <Link to='/services' className='px - 6 py - 3 border - 2 border - zion - cyan text - zion - cyan rounded - lg font - medium hover:bg - zion - cyan hover:text - white transition - colors'" > View Services </Link> <Link to='/help' className='px - 6 py - 3 border - 2 border - zion - purple text - zion - purple rounded - lg font - medium hover:bg - zion - purple hover:text - white transition - colors'" > Get Help </Link> </div> </div> </div> </div>)  }';;''"

"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
