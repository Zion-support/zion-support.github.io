import { FileText, Link } from 'lucide-react';
  return (
    <div className="min-h-screen bg-gray-900 text-white"></div>"
      <div className="container mx-auto px-4 py-8"></div>"
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
          <div></div>
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">Main Pages</h2>"
            <ul className="space-y-2">"
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>"
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>"
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>"
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>"
            </ul>
          </div>
          <div></div>
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">AI Services</h2>"
            <ul className="space-y-2">"
              <li><a href="/ai-services" className="text-gray-300 hover:text-white">AI Services</a></li>"
              <li><a href="/ai-automation" className="text-gray-300 hover:text-white">AI Automation</a></li>"
              <li><a href="/ai-analytics-dashboard" className="text-gray-300 hover:text-white">AI Analytics</a></li>"
            </ul>
          </div>
          <div></div>
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">IT Services</h2>"
            <ul className="space-y-2">"
              <li><a href="/it-services" className="text-gray-300 hover:text-white">IT Services</a></li>"
              <li><a href="/it-infrastructure" className="text-gray-300 hover:text-white">IT Infrastructure</a></li>"
              <li><a href="/devops" className="text-gray-300 hover:text-white">DevOps</a></li>"
            </ul>
          </div>
        </div>
      </div>
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main landing page' },
    { name: 'About Us', path: '/about', description: 'Learn about our company' },
    { name: 'Services', path: '/services', description: 'Our comprehensive service offerings' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
    { name: 'Team', path: '/team', description: 'Meet our expert team' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and projects' },
    { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
    { name: 'Enterprise', path: '/enterprise', description: 'Enterprise solutions' }];

  const aiServices = [
    { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Healthcare AI solutions' },
    { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial technology AI' },
    { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation tools' },
    { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data analytics' },
    { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI project management tools' },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Sales process automation' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' }];

  const itServices = [
    { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Infrastructure management' },
    { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud computing solutions' },
    { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and protection' },
    { name: 'Database Management', path: '/database-management', description: 'Database solutions' },
    { name: 'DevOps', path: '/devops', description: 'Development and operations' }];

  const specializedServices = [
    { name: 'Micro SAAS', path: '/micro-saas', description: 'Small business software solutions' },
    { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-operating systems' },
    { name: 'Blockchain', path: '/blockchain', description: 'Blockchain technology' },
    { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'IoT Edge', path: '/iot-edge', description: 'Internet of Things solutions' },
    { name: 'Robotics', path: '/robotics', description: 'Robotic automation' }];

  const additionalPages = [
    { name: 'Consultation', path: '/consultation', description: 'Expert consultation services' },
    { name: 'Careers', path: '/careers', description: 'Join our team' },
    { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance' },
    { name: 'Privacy Policy', path: '/privacy', description: 'Privacy and data protection' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
    { name: 'GDPR Compliance', path: '/gdpr', description: 'GDPR compliance information' },
    { name: 'Cookies', path: '/cookies', description: 'Cookie policy' }];

  const contactInfo = [
    { icon: Phone, text: '(302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: Globe, text: 'ziontechgroup.com', href: 'https://ziontechgroup.com' }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24"></main>"
        {/* Header */}
        <div className="text-center mb-16"></div>"
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1>"
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
            Navigate through all our pages and discover the comprehensive range of AI and IT solutions we offer.
          </p>
        </div>

        {/* Main Pages */}
        <section className="mb-16"></section>"
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center"></h2>"
            <Home className="w-6 h-6 mr-3 text-cyan-400" />"
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
            {mainPages.map((page) => (
              <Link,
key={page.path}
                to={page.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group""
              ></Link>
                <div className="flex items-center justify-between mb-3"></div>"
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"></h3>"
                    {page.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />"
                </div>
                <p className="text-gray-300 text-sm">{page.description}</p>"
              </Link>
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-16"></section>"
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center"></h2>"
            <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />"
            AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
            {aiServices.map((service) => (
              <Link,
key={service.path}
                to={service.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group""
              ></Link>
                <div className="flex items-center justify-between mb-3"></div>"
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"></h3>"
                    {service.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />"
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>"
              </Link>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16"></section>"
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center"></h2>"
            <FileText className="w-6 h-6 mr-3 text-cyan-400" />"
            IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
            {itServices.map((service) => (
              <Link,
key={service.path}
                to={service.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group""
              ></Link>
                <div className="flex items-center justify-between mb-3"></div>"
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"></h3>"
                    {service.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />"
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>"
              </Link>
            ))}
          </div>
        </section>

        {/* Specialized Services */}
        <section className="mb-16"></section>"
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center"></h2>"
            <Users className="w-6 h-6 mr-3 text-cyan-400" />"
            Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
            {specializedServices.map((service) => (
              <Link,
key={service.path}
                to={service.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group""
              ></Link>
                <div className="flex items-center justify-between mb-3"></div>"
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"></h3>"
                    {service.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />"
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>"
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Pages */}
        <section className="mb-16"></section>"
          <h2 className="text-2xl font-bold text-white mb-8">Additional Pages</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
            {additionalPages.map((page) => (
              <Link,
key={page.path}
                to={page.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group""
              ></Link>
                <div className="flex items-center justify-between mb-3"></div>"
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"></h3>"
                    {page.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />"
                </div>
                <p className="text-gray-300 text-sm">{page.description}</p>"
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16"></section>"
          <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>"
            {contactInfo.map((contact, index) => (
              <a,
key={index}
                href={contact.href}
                className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group""
              ></a>
                <contact.icon className="w-6 h-6 text-cyan-400 mr-4" />"
                <span className="text-white group-hover:text-cyan-400 transition-colors"></span>"
                  {contact.text}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Back to Top */}
        <div className="text-center"></div>"
          <Link,
to="/""
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium""
          ></Link>
            <Home className="w-5 h-5 mr-2" />"
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;
