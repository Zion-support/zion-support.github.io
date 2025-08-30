import React from 'react.ts';
import { SEO  } from '@/components/SEO';

const MicroSAASServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Powerful, affordable software solutions designed for modern businesses. From CRM to project management, 
            our micro SAAS services help you grow without breaking the bank.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Explore SAAS Solutions
            </Button>
            <Button className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/80 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

export default MicroSAASServicesPage;