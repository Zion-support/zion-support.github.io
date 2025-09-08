import React from 'react';

const HelpCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Help Center
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Find answers to your questions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
            <p className="text-gray-300">Quick start guides and tutorials</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">FAQs</h3>
            <p className="text-gray-300">Frequently asked questions</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
            <p className="text-gray-300">Get help from our team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

=======
          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={category.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/api-docs">View API Documentation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/blog">Browse Tutorials</Link>
              </Button>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-zion-cyan">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-zion-slate-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-8 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Still Need Help?</h3>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="space-x-4">
                <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/community">Ask Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
=======
};

export default HelpCenter;
=======
// CreditCard icon component since it's not in lucide-react
function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
=======
  const quickLinks = [
    { title: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get in touch with our support team' },
    { title: 'API Documentation', href: '/api-docs', icon: FileText, description: 'Developer resources and API guides' },
    { title: 'Community Forum', href: '/community', icon: Users, description: 'Connect with other users' },
    { title: 'Blog & Updates', href: '/blog', icon: FileText, description: 'Latest news and platform updates' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center | Zion Tech Group" 
        description="Get help and support for using the Zion Tech Group platform. Find answers to frequently asked questions and contact our support team."
        keywords="help, support, FAQ, customer service, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Find answers to common questions and get the support you need to make the most of our platform.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.title} to={link.href}>
                <Card className="h-full hover:bg-zion-blue-dark/50 transition-colors cursor-pointer border-zion-blue-light">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-zion-cyan" />
                      <CardTitle className="text-white text-lg">{link.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-6 w-6 text-zion-cyan" />
                    <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-white">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <Card className="border-zion-blue-light bg-zion-blue-dark/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Still Need Help?</CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Can't find what you're looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </div>
              <p className="text-zion-slate-light">
                Response time: Usually within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
