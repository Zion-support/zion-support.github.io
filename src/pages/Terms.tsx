import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Scale,
  Gavel,
  BookOpen
} from 'lucide-react';

export default function Terms() {
  const keyTerms = [
    {
      icon: Users,
      title: "Service Users",
      description: "Individuals and businesses using our marketplace and services."
    },
    {
      icon: Globe,
      title: "Platform",
      description: "Our website, applications, and related services."
    },
    {
      icon: Shield,
      title: "Content",
      description: "Information, data, and materials shared on our platform."
    },
    {
      icon: Scale,
      title: "Services",
      description: "AI solutions, consulting, and technology services offered."
    }
  ];

  const userObligations = [
    {
      title: "Account Security",
      description: "Maintain secure account credentials and notify us of unauthorized access."
    },
    {
      title: "Accurate Information",
      description: "Provide truthful and up-to-date information in your profile and communications."
    },
    {
      title: "Compliance",
      description: "Follow all applicable laws and regulations when using our services."
    },
    {
      title: "Respectful Conduct",
      description: "Treat other users with respect and avoid harassment or discrimination."
    },
    {
      title: "Intellectual Property",
      description: "Respect copyrights and intellectual property rights of others."
    },
    {
      title: "Service Usage",
      description: "Use our services for their intended purpose and avoid abuse or misuse."
    }
  ];

  const prohibitedActivities = [
    "Illegal activities or violations of applicable laws",
    "Harassment, discrimination, or hate speech",
    "Spam, phishing, or fraudulent activities",
    "Distribution of malware or harmful code",
    "Attempts to gain unauthorized access to systems",
    "Violation of intellectual property rights",
    "Interference with service operation",
    "Sharing of confidential or sensitive information"
  ];

  const serviceTerms = [
    {
      category: "AI Solutions",
      terms: [
        "AI services are provided 'as is' with no warranty of accuracy",
        "Users are responsible for reviewing and validating AI outputs",
        "We reserve the right to improve and update AI models",
        "Usage limits may apply based on service tier"
      ]
    },
    {
      category: "Consulting Services",
      terms: [
        "Services are provided by qualified professionals",
        "Project timelines and deliverables are specified in agreements",
        "Changes to scope may affect pricing and timelines",
        "Intellectual property rights are defined in service contracts"
      ]
    },
    {
      category: "Marketplace",
      terms: [
        "We facilitate connections but don't guarantee outcomes",
        "Users are responsible for their own transactions",
        "Dispute resolution procedures are available",
        "Quality standards and verification processes apply"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              These terms govern your use of Zion Tech Group's services. Please read them carefully 
              to understand your rights and responsibilities.
            </p>
            <div className="flex items-center justify-center gap-2 text-zion-slate-light">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-sm">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Terms & Definitions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding these terms helps clarify our agreement and your rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <term.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{term.title}</h3>
                <p className="text-zion-slate-light">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance & Changes */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Acceptance & Changes</h2>
              <div className="space-y-6">
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    Acceptance
                  </h3>
                  <p className="text-zion-slate-light">
                    By using our services, you agree to these terms. If you don't agree, 
                    please don't use our platform.
                  </p>
                </div>
                
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                    Changes
                  </h3>
                  <p className="text-zion-slate-light">
                    We may update these terms periodically. We'll notify you of significant 
                    changes via email or platform notifications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
              <h3 className="text-2xl font-bold text-white mb-6">Important Notice</h3>
              <p className="text-zion-slate-light mb-6">
                These terms form a legally binding agreement between you and Zion Tech Group. 
                Please review them carefully and contact us if you have questions.
              </p>
              <div className="flex items-center text-zion-cyan">
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="text-sm">Legal document - seek counsel if needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Your Obligations</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities to maintain 
              a safe and productive environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userObligations.map((obligation, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <h3 className="text-lg font-semibold text-white mb-3">{obligation.title}</h3>
                <p className="text-zion-slate-light text-sm">{obligation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Prohibited Activities</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              To maintain a safe and professional environment, certain activities are not allowed 
              on our platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-zion-slate-light">{activity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm text-center">
                  <strong>Violation of these terms may result in account suspension or termination.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service-Specific Terms</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Different services may have additional terms and conditions that apply.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTerms.map((service, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <h3 className="text-xl font-semibold text-white mb-4">{service.category}</h3>
                <ul className="space-y-3">
                  {service.terms.map((term, termIndex) => (
                    <li key={termIndex} className="flex items-start text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Intellectual Property</h2>
              <div className="space-y-6">
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Rights</h3>
                  <p className="text-zion-slate-light">
                    Zion Tech Group retains ownership of our platform, technology, and proprietary content. 
                    Our trademarks and branding are protected intellectual property.
                  </p>
                </div>
                
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Your Content</h3>
                  <p className="text-zion-slate-light">
                    You retain ownership of content you create and share. By using our services, 
                    you grant us a license to use your content to provide our services.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
              <h3 className="text-2xl font-bold text-white mb-6">Copyright Protection</h3>
              <p className="text-zion-slate-light mb-6">
                We respect intellectual property rights and expect our users to do the same. 
                Report copyright violations through our support channels.
              </p>
              <div className="flex items-center text-zion-cyan">
                <Gavel className="w-5 h-5 mr-2" />
                <span className="text-sm">DMCA compliant procedures available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Limitation of Liability</h2>
          <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20 mb-8">
            <p className="text-zion-slate-light text-lg leading-relaxed">
              Zion Tech Group provides services "as is" and "as available." We're not liable for 
              indirect, incidental, or consequential damages. Our total liability is limited to 
              the amount you paid for our services in the 12 months preceding the claim.
            </p>
          </div>
          
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Legal Disclaimer</h3>
            <p className="text-zion-slate-light text-sm">
              This summary doesn't replace the full terms. For complete legal information, 
              please read the full document. These terms don't affect your statutory rights.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Questions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            If you have questions about these terms of service or need clarification on any 
            specific provisions, our legal team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center"
            >
              Contact Legal Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              legal@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20">
            <h3 className="text-lg font-semibold text-white mb-3">Legal Updates</h3>
            <p className="text-zion-slate-light text-sm">
              These terms may be updated to reflect changes in our services, legal requirements, 
              or business practices. We'll provide reasonable notice of material changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
import { SEO } from "@/components/SEO";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import TermsOfService from "@/legal/TermsOfService";

const Terms = () => {
    return (
        <>
            <SEO 
                title="Terms of Service" 
                description="The terms and conditions for using the Zion platform." 
                canonical="https://ziontechgroup.com/terms"
            />
            <Header />
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <TermsOfService />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Terms;
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
