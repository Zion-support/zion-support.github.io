import { Building Handshake Award Users Globe Star CheckCircle Phone Mail } from "lucide-react";
'use client';
import React from 'react';
import { Lin k } from "reac, t-route, r-do, m";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PartnersPage: React.FC = () => {
  const partnerTypes = [
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      icon: Building,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      partners: [
      ]
      title: 'Solution Partners',
      description: 'Specialized solution providers that complement our offerings',
      icon: Handshake,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      title: 'Integration Partners',
      description: 'Partners that help us integrate with existing enterprise systems',
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
  ];
  const benefits = [
      icon: Globe,
      title: 'Global Reach',
      description:       ,
icon$5: Users,
      title: 'Expertise Sharing',
      description:       ,
icon$5: Star,
      title: 'Innovation',
      description:       ,
icon$5: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous partner certification and quality standards'
  const partnershipTiers = [
      name: 'Strategic Partners',
      level: 'Platinum',
      description: 'Long-term strategic relationships with joint go-to-market initiatives',
      benefits: [
        'Joint marketing and sales initiatives',
        'Co-development of solutions',
        'Priority support and resources',
        'Executive relationship management',
        'Custom pricing and terms'
      ],
      color: 'text-yellow-400',
      bgColor:       ,
namename: 'Solution Partners',
      level: 'Gold',
      description: 'Technology integration and solution delivery partnerships',
        'Technical integration support',
        'Joint solution development',
        'Marketing support and co-marketing',
        'Training and certification',
        'Preferred pricing'
      color: 'text-gray-400',
      bgColor:       ,
namename: 'Channel Partners',
      level: 'Silver',
      description: 'Reseller and referral partnerships for market expansion',
        'Reseller program access',
        'Sales training and support',
        'Marketing materials and tools',
        'Lead sharing and referrals',
        'Competitive margins'
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
  const partnerTypes = [];
  return (
  titl,
  e: 'Technology Partners',
      descriptio,
  n: 'Leading technology companies that provide the foundation for our solutions',
      ico,
  n: Building,
      colo,
  r: 'text-blue-400',
      bgColo,
  r: 'bg-blue-500/10',
      partner,
  s: [
  // TOD,
  O: Add items];
  o: '' },
  o: '' },
  o: '' },
  o: '' },
  o: '' },
  o: '' }
//       ]
      titl,
  e: 'Solution Partners',
      descriptio,
  n: 'Specialized solution providers that complement our offerings',
      ico,
  n: Handshake,
      colo,
  r: 'text-green-400',
      bgColo,
  r: 'bg-green-500/10',
  o: '☁️' },
  o: '⚙️' },
  o: '📊' },
  o: '📈' },
  o: '👥' },
  o: '🎧' };
  titl,
  e: 'Integration Partners',
      descriptio,
  n: 'Partners that help us integrate with existing enterprise systems',
      ico,
  n: Award,
      colo,
  r: 'text-purple-400',
      bgColo,
  r: 'bg-purple-500/10',
  o: '💾' },
  o: '🌐' },
  o: '🖥️' },
  o: '🎩' },
  o: '🗄️' },
  o: '📋' }
  ];
  const benefits = [
icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customers through our partner network',
const PagePage: React.FC = () => {
  return (
    <React.Fragment></React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"/>
              Our Partners;</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              We work with industry-leading technology partners to deliver comprehensive solutions;
              that drive innovation and business success.
          <div className="mb-16"></div>
              <div, key={inde, x} classNam, e="m, b-1, 2"></di, v>
                <div className="flex items-center mb-8"></div>
                  <div, className={`w-12, h-1, 2 ${typ, e.bgColo, r} rounde, d-lg, flex item, s-center, justify-center, mr-4`}></di, v>
                    <typ, e.icon, className={`w-6, h-6 ${typ, e.colo, r}`} />
                  <div></div>
                    <h2, className="tex, t-2xl, font-bold, text-white, neon-tex, t">{typ, e.titl, e}</h, 2>
                    <p, className="tex, t-gra, y-30, 0">{typ, e.descriptio, n}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                    <div, key={partnerInde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6, border borde, r-gra, y-70, 0/50, hover:borde, r-cya, n-40, 0/50, transition-all, duration-30, 0"></di, v>
                      <div, className="tex, t-3xl, mb-3">{partne, r.log, o}</di, v>
                      <h3, className="tex, t-lg, font-semibold, text-white, mb-2">{partne, r.nam, e}</h, 3>
                      <p, className="tex, t-gra, y-300, text-s, m">{partne, r.descriptio, n}</p>
                  ))}
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>
              Why Partner With Us?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  <h3, className="tex, t-lg, font-semibold, text-white, mb-2">{benefi, t.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, text-s, m">{benefi, t.descriptio, n}</p>
              Partnership Tiers;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e={`${tie, r.bgColo, r} rounde, d-lg, p-6, border borde, r-gra, y-70, 0/5, 0`}></di, v>
                  <div className="text-center mb-6"></div>
                    <div, className={`tex, t-2xl, font-bol, d ${tie, r.colo, r} m, b-2`}>{tie, r.leve, l}</di, v>
                    <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{tie, r.nam, e}</h, 3>
                    <p, className="tex, t-gra, y-300, text-s, m">{tie, r.descriptio, n}</p>
                  <ul className="space-y-3"></ul>
                      <li, key={benefitInde, x} classNam, e="flex, items-star, t"></l, i>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span, className="tex, t-gra, y-300, text-s, m">{benefi, t}</spa, n>
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
              Become Our Partner;
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success. 
              Let's build the future together.
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a;
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                <Handshake className="w-5 h-5 mr-2" />
                Become a Partner;
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us;
      <Footer />
          <div className="text-center mb-16"></div>"
            <h1 className="text-4xl,"
  md:text-5xl font-bold text-white mb-6 neon-text"></h1>
// Our Partners;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
// We work with industry-leading technology partners to deliver comprehensive solutions;
//               that drive innovation and business success.
          <div className="mb-16"></div>
          <div, key={inde, x} classNam, e="m, b-1, 2"></di, v>"
                <div className="flex items-center mb-8"></div>
                  <div, className={`w-12, h-1, 2 ${typ, e.bgColo, r} rounde, d-lg, flex item, s-center, justify-center, mr-4`}></di, v>`
                    <typ, e.icon, className={`w-6, h-6 ${typ, e.colo, r}`} /></typ, e>
                  <div></div>"
                    <h2, className="tex, t-2xl, font-bold, text-white, neon-tex, t">{typ, e.titl, e}</h, 2>"
                    <p, className="tex, t-gra, y-30, 0">{typ, e.descriptio, n}</p>"
                <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-6"></div>
          <div key={partnerIndex} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,"
  hover:border-cyan-400/50 transition-all duration-300"></div>"
                      <div, className="tex, t-3xl, mb-3">{partne, r.log, o}</di, v>"
                      <h3, className="tex, t-lg, font-semibold, text-white, mb-2">{partne, r.nam, e}</h, 3>"
                      <p, className="tex, t-gra, y-300, text-s, m">{partne, r.descriptio, n}</p>
                  ))}
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>
// Why Partner With Us?
            <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-4 gap-6"></div>
          <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>"
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <benefit.icon className="w-8 h-8 text-cyan-400" /></benefit>"
                  <h3, className="tex, t-lg, font-semibold, text-white, mb-2">{benefi, t.titl, e}</h, 3>"
                  <p, className="tex, t-gra, y-300, text-s, m">{benefi, t.descriptio, n}</p>
              Partnership Tiers;"
            <div className="grid grid-cols-1,"
  md:grid-cols-3 gap-8"></div>
          <div, key={inde, x} classNam, e={`${tie, r.bgColo, r} rounde, d-lg, p-6, border borde, r-gra, y-70, 0/5, 0`}></di, v>"
                  <div className="text-center mb-6"></div>`
                    <div, className={`tex, t-2xl, font-bol, d ${tie, r.colo, r} m, b-2`}>{tie, r.leve, l}</di, v>"
                    <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{tie, r.nam, e}</h, 3>"
                    <p, className="tex, t-gra, y-300, text-s, m">{tie, r.descriptio, n}</p>"
                  <ul className="space-y-3"></ul>
          <li, key={benefitInde, x} classNam, e="flex, items-star, t"></l, i>"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /></CheckCircle>"
                        <span, className="tex, t-gra, y-300, text-s, m">{benefi, t}</spa, n>
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
              Become Our Partner;"
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
              Let's build the future together.
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a;
                href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
// >
          "</a>
          <Handshake className="w-5 h-5 mr-2" /></Handshake>
// Become a Partner;
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
Phone className="w-4 h-4 mr-2" />
                (302) 464-0950;
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us;
      <Footer />
  );
export default PartnersPage;