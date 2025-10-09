'use client';
import {Building, Handshake, Award, Users, Globe, Star, CheckCircle, Phone, Mail} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const PartnersPage: any,
    e: any,
      description: any,
      icon: any,
      color: any,
      bgColor: any,
      partners: any,
    e: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any}]
      ]
    },
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      bgColor: any,
      partners: any,
    e: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any}]
      ]
    },
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      bgColor: any,
      partners: any,
    e: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any},
        { name: any, description: any, logo: any}]
      ]
    }
  ];

  const benefits = [
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any}
  ];

  const partnershipTiers = [
    {
      name: any,
      level: any,
      description: any,
      benefits: any,
        'Co-development of solutions',
        'Priority support and resources',
        'Executive relationship management',
  ]
        'Custom pricing and terms']
      ],
      color: any,
      bgColor: any},
    {
      name: any,
      level: any,
      description: any,
      benefits: any,
        'Joint solution development',
        'Marketing support and co-marketing',
        'Training and certification',
  ]
        'Preferred pricing']
      ],
      color: any,
      bgColor: any},
    {
      name: any,
      level: any,
      description: any,
      benefits: any,
        'Sales training and support',
        'Marketing materials and tools',
        'Lead sharing and referrals',
  ]
        'Competitive margins']
      ],
      color: any,
      bgColor: any}
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md: any,>
    e="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We work with industry-leading technology partners to deliver comprehensive solutions 
              that drive innovation and business success.
            </p>
          </div>;
;
          {/* Partner Types */}";
          <div className="mb-16">);
            {partnerTypes.map((type, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${type.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white neon-text">{type.title}</h2>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md: any,>
    g: any{type.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>
    e="text-3xl mb-3">{partner.logo}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                      <p className="text-gray-300 text-sm">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Partner With Us?
            </h2>
            <div className="grid grid-cols-1 md: any,>
    g: any{benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Partnership Tiers
            </h2>";
            <div className="grid grid-cols-1 md: any{partnershipTiers.map((tier, index) => ("`";
                <div key={index} className={`${tier.bgColor} rounded-lg p-6 border border-gray-700/50`}>";
                  <div className="text-center mb-6">"`";
                    <div className={`text-2xl font-bold ${tier.color} mb-2`}>{tier.level}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 text-sm">{tier.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Partner CTA */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Become Our Partner
            </h2>";
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success. '";
              Let's build the future together.
            </p>
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
};

export default PartnersPage;'";
import React from 'react';"'"';
"'"'`"';