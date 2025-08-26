import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  Zap,
  ArrowRight,
  Building,
  Star,
  CheckCircle
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate with leading technology providers to deliver comprehensive solutions.",
      icon: Building,
      benefits: [
        "Access to cutting-edge technologies",
        "Joint go-to-market strategies",
        "Technical support and training",
        "Revenue sharing opportunities"
      ]
    },
    {
      title: "Channel Partners",
      description: "Expand your business by reselling our solutions to your customers.",
      icon: Users,
      benefits: [
        "Competitive pricing and margins",
        "Marketing and sales support",
        "Technical training and certification",
        "Dedicated partner success manager"
      ]
    },
    {
      title: "Strategic Partners",
      description: "Deep collaboration on joint ventures and strategic initiatives.",
      icon: Handshake,
      benefits: [
        "Joint product development",
        "Shared intellectual property",
        "Market expansion support",
        "Long-term strategic planning"
      ]
    },
    {
      title: "Academic Partners",
      description: "Partner with universities and research institutions for innovation.",
      icon: Award,
      benefits: [
        "Research collaboration opportunities",
        "Student internship programs",
        "Joint publications and patents",
        "Access to academic resources"
      ]
    }
  ];

  const existingPartners = [
    {
      name: "Microsoft",
      category: "Technology Partner",
      logo: "/partners/microsoft.svg",
      description: "Strategic partnership for Azure cloud solutions and AI services.",
      partnership: "Since 2020"
    },
    {
      name: "Amazon Web Services",
      category: "Technology Partner",
      logo: "/partners/aws.svg",
      description: "Premier consulting partner for AWS cloud infrastructure and AI solutions.",
      partnership: "Since 2019"
    },
    {
      name: "Google Cloud",
      category: "Technology Partner",
      logo: "/partners/google-cloud.svg",
      description: "Partner for Google Cloud AI and machine learning services.",
      partnership: "Since 2021"
    },
    {
      name: "Stanford University",
      category: "Academic Partner",
      logo: "/partners/stanford.svg",
      description: "Research collaboration in AI and quantum computing.",
      partnership: "Since 2022"
    },
    {
      name: "MIT",
      category: "Academic Partner",
      logo: "/partners/mit.svg",
      description: "Joint research initiatives in autonomous systems and robotics.",
      partnership: "Since 2021"
    },
    {
      name: "IBM",
      category: "Technology Partner",
      logo: "/partners/ibm.svg",
      description: "Strategic partnership for enterprise AI and quantum computing solutions.",
      partnership: "Since 2020"
    }
  ];

  const partnerBenefits = [
    {
      title: "Revenue Growth",
      description: "Access new markets and customers through our extensive network.",
      icon: Zap
    },
    {
      title: "Technical Expertise",
      description: "Leverage our deep technical knowledge and innovative solutions.",
      icon: Star
    },
    {
      title: "Market Access",
      description: "Reach new customer segments and geographic markets.",
      icon: Globe
    },
    {
      title: "Innovation",
      description: "Collaborate on cutting-edge research and development projects.",
      icon: Award
    }
  ];

  const partnershipProcess = [
    {
      step: "1",
      title: "Initial Discussion",
      description: "We'll discuss your business goals and explore partnership opportunities."
    },
    {
      step: "2",
      title: "Partnership Assessment",
      description: "Evaluate mutual fit and define partnership scope and objectives."
    },
    {
      step: "3",
      title: "Agreement & Launch",
      description: "Finalize partnership terms and launch collaborative initiatives."
    },
    {
      step: "4",
      title: "Growth & Optimization",
      description: "Continuously optimize and expand our partnership for mutual success."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner With Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Join our ecosystem of innovative partners and together we can transform 
            industries and create lasting value for our customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Become a Partner
            </Link>
            <Link
              to="/partners#existing-partners"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Our Partners
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer various partnership models to suit different business needs 
              and collaboration goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to become a partner and start 
              collaborating with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section id="existing-partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative organizations 
              across technology, academia, and business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    {partner.category}
                  </p>
                  <p className="text-xs text-slate-500">
                    {partner.partnership}
                  </p>
                </div>
                
                <p className="text-slate-600 text-sm text-center mb-4">
                  {partner.description}
                </p>
                
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    <Star className="w-3 h-3 mr-1" />
                    Partner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can work together to create value for our customers 
            and grow our businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Partnership Discussion
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;