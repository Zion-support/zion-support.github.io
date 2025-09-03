import React from 'react';
import { 
  Handshake, 
  Users, 
  Star, 
  Award, 
  TrendingUp, 
  Globe,
  Building2,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Shield
} from 'lucide-react';

export default function PartnersPage() {
  const strategicPartners = [
    {
      name: "Microsoft Azure",
      logo: "/images/partners/microsoft-azure.png",
      description: "Strategic cloud partnership for enterprise solutions and AI-powered services.",
      partnership: "Cloud Infrastructure & AI Services",
      benefits: ["Joint go-to-market", "Technical integration", "Co-selling opportunities"],
      tier: "Platinum Partner"
    },
    {
      name: "Amazon Web Services",
      logo: "/images/partners/aws.png",
      description: "Premier AWS partner delivering cloud-native solutions and managed services.",
      partnership: "Cloud Solutions & Managed Services",
      benefits: ["Advanced consulting", "Migration expertise", "Cost optimization"],
      tier: "Advanced Consulting Partner"
    },
    {
      name: "Google Cloud",
      logo: "/images/partners/google-cloud.png",
      description: "Google Cloud partner specializing in AI/ML and data analytics solutions.",
      partnership: "AI/ML & Data Analytics",
      benefits: ["AI expertise", "Data solutions", "Innovation labs"],
      tier: "Specialization Partner"
    }
  ];

  const technologyPartners = [
    {
      name: "NVIDIA",
      category: "AI & GPU Computing",
      description: "Partnership for AI acceleration and GPU-optimized solutions.",
      benefits: ["GPU optimization", "AI acceleration", "Joint R&D"]
    },
    {
      name: "Intel",
      category: "Hardware & Optimization",
      description: "Strategic partnership for hardware optimization and performance tuning.",
      benefits: ["Performance tuning", "Hardware optimization", "Technical support"]
    },
    {
      name: "Cisco",
      category: "Networking & Security",
      description: "Partnership for enterprise networking and cybersecurity solutions.",
      benefits: ["Network solutions", "Security integration", "Enterprise support"]
    }
  ];

  const partnerPrograms = [
    {
      name: "Technology Partner Program",
      description: "Integrate your technology with our platform and reach new customers.",
      requirements: ["API integration", "Technical documentation", "Support agreement"],
      benefits: ["Market access", "Technical support", "Co-marketing"],
      icon: Zap
    },
    {
      name: "Solution Partner Program",
      description: "Build and sell joint solutions that address customer challenges.",
      requirements: ["Solution development", "Go-to-market plan", "Revenue commitment"],
      benefits: ["Revenue sharing", "Sales support", "Marketing resources"],
      icon: Building2
    },
    {
      name: "Referral Partner Program",
      description: "Refer customers and earn commissions for successful deals.",
      requirements: ["Business relationship", "Lead qualification", "Agreement signing"],
      benefits: ["Commission structure", "Sales training", "Marketing materials"],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Partnerships
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join our ecosystem of technology partners, solution providers, and strategic allies to deliver innovative solutions and drive mutual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">
                View Partner Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strategic Partners
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our premier partnerships with leading technology companies enable us to deliver comprehensive solutions and exceptional value to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                    {partner.tier}
                  </span>
                </div>
                
                <p className="text-zion-slate-light text-center mb-4">{partner.description}</p>
                <p className="text-zion-purple font-semibold text-center mb-4">{partner.partnership}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Partnership Benefits:</h4>
                  <ul className="space-y-1">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Partners
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our technology partnerships enable us to deliver cutting-edge solutions and optimize performance across all our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyPartners.map((partner, index) => (
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                    {partner.category}
                  </span>
                </div>
                
                <p className="text-zion-slate-light text-sm text-center mb-4">{partner.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Programs
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Choose the partnership model that best fits your business goals and join our growing ecosystem of successful partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-zion-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{program.name}</h3>
                    <p className="text-zion-slate-light text-sm">{program.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1 mb-4">
                      {program.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="text-zion-slate-light text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-zion-slate-light text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Partner With Zion Tech Group?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Market Access</h3>
                    <p className="text-zion-slate-light">
                      Reach our extensive customer base and tap into new markets with our established presence and reputation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technical Expertise</h3>
                    <p className="text-zion-slate-light">
                      Leverage our deep technical knowledge and experience to enhance your solutions and accelerate development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Revenue Growth</h3>
                    <p className="text-zion-slate-light">
                      Increase your revenue through joint go-to-market initiatives, co-selling opportunities, and revenue sharing programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Innovation Collaboration</h3>
                    <p className="text-zion-slate-light">
                      Collaborate on cutting-edge technology solutions and stay ahead of industry trends through joint innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-purple/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Partnership Success</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-zion-slate-light">Active Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$50M+</div>
                  <div className="text-zion-slate-light">Joint Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">95%</div>
                  <div className="text-zion-slate-light">Partner Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-slate-light">Partner Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join our ecosystem of successful partners and start growing your business with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">
              Apply for Partnership
            </button>
            <button className="px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">
              Contact Partner Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}