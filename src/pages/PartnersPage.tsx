import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Award, 
  Building2,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnersPage() {
  const partners = [
    {
      name: "TechCorp Solutions",
      logo: "TC",
      description: "Leading technology consulting firm specializing in digital transformation",
      category: "Technology Consulting",
      rating: 5,
      partnership: "Strategic Alliance",
      benefits: [
        "Joint product development",
        "Shared technology resources",
        "Cross-selling opportunities",
        "Innovation collaboration"
      ]
    },
    {
      name: "InnovateLab",
      logo: "IL",
      description: "Innovation hub focused on emerging technologies and startup incubation",
      category: "Innovation & R&D",
      rating: 5,
      partnership: "Research Partnership",
      benefits: [
        "Joint research projects",
        "Technology transfer",
        "Startup ecosystem",
        "Patent collaboration"
      ]
    },
    {
      name: "DataFlow Systems",
      logo: "DF",
      description: "Advanced data analytics and business intelligence solutions",
      category: "Data & Analytics",
      rating: 5,
      partnership: "Technology Integration",
      benefits: [
        "Platform integration",
        "Data sharing protocols",
        "Joint customer solutions",
        "Technical expertise exchange"
      ]
    }
  ];

  const featuredPartners = [;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const partnerBenefits = [;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const partnershipPrograms = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const testimonials = [;
    {};
},;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Partner with Us;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Join our global partner ecosystem and unlock new opportunities for growth, ;
              innovation, and market expansion. Together, we can deliver exceptional value to customers worldwide.;
            </p>;

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
                Become a Partner;
              </Link>;
              <div>Broken JSX</div>
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">;
                Partner Portal;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Partnership Benefits */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-zion-slate-light">
            Discover the advantages of strategic partnerships with Zion Tech Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-zion-slate-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Partners */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-lg text-zion-slate-light">
            Industry leaders who trust us to deliver innovative solutions
          </p>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center space-x-4 mb-4">;
                  <div className="text-4xl">{partner.logo}</div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white">{partner.name}</h3>;
                    <p className="text-sm text-zion-cyan">{partner.type}</p>;
                    <p className="text-xs text-zion-slate-light">{partner.partnership}</p>;
                  </div>;
                </div>;

                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">;
                  {partner.description}
                </p>;

              <div className="flex items-center justify-center mb-4">
                {[...Array(partner.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-semibold">
                  {partner.partnership}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {partner.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="mb-4">;
                  <div className="flex items-center justify-between mb-2">;
                    <h3 className="text-xl font-semibold text-white">{program.name}</h3>;
                    <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                      {program.level}
                    </span>;
                  </div>;
                  <p className="text-zion-slate-light text-sm leading-relaxed">;
                    {program.description}
                  </p>;
                </div>;

                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>;
                  <ul className="space-y-1">;
                    {};
                      <li key={benefitIndex} className="flex items-center space-x-2 text-xs text-zion-slate-light">;
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />;
                        <span>{benefit}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;

                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Requirements:</h4>;
                  <ul className="space-y-1">;
                    {};
                      <li key={reqIndex} className="flex items-center space-x-2 text-xs text-zion-slate-light">;
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />;
                        <span>{requirement}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;

                <div>Broken JSX</div>
                  className="w-full bg-zion-cyan text-white py-2 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors text-center block">;
                  Apply Now;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Partner Benefits */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Why Partner with Us?;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Discover the benefits of joining our partner ecosystem;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="text-center">;
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>;
                <p className="text-zion-slate-light leading-relaxed">;
                  {benefit.description}
                </p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Testimonials */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              What Our Partners Say;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Hear from our partners about their experience working with Zion Tech Group;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6">;
                <div className="flex items-center space-x-1 mb-4">;
                  {};
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>;
                  ))}
                </div>;

                <p className="text-zion-slate-light mb-4 leading-relaxed">;
                  "{testimonial.content}";
                </p>;

                <div>;
                  <div className="font-semibold text-white">{testimonial.name}</div>;
                  <div className="text-sm text-zion-cyan">{testimonial.title}</div>;
                  <div className="text-xs text-zion-slate-light">{testimonial.company}</div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Contact Information */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Ready to Partner with Us?;
              </h2>;
              <p className="text-zion-slate-light mb-6 leading-relaxed">;
                Join our partner ecosystem and unlock new opportunities for growth and innovation. ;
                Our partnership team is ready to help you get started.;
              </p>;

              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Mail className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">partners@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Phone className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">+1 (302) 464-0950</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <MapPin className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
              </div>;
            </div>;

            <div className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-8">;
              <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>;
              <p className="text-zion-slate-light mb-6">;
                Fill out our partnership inquiry form and we'll get back to you within 24 hours.;
              </p>;

              <div className="space-y-4">;
                <div>Broken JSX</div>
                />;
                <div>Broken JSX</div>
                />;
                <select className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent">;
                  <option>Select Partnership Type</option>;
                  <option>Technology Partner</option>;
                  <option>Solution Partner</option>;
                  <option>Channel Partner</option>;
                  <option>Strategic Partner</option>;
                </select>;
                <div>Broken JSX</div>
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"></textarea>;
                <button className="w-full bg-zion-cyan text-white py-3 rounded-lg hover:bg-zion-cyan-light transition-colors">;
                  Submit Partnership Inquiry;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Join Our Partner Ecosystem;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Ready to unlock new opportunities and grow your business? ;
            Let's explore how we can work together to deliver exceptional value to customers.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Become a Partner;
            </Link>;
            <div>Broken JSX</div>
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Access Partner Portal;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}

export default PartnersPage;