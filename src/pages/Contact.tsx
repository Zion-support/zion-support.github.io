import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Award,
  Globe,
  Zap,
  Sparkles
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Fallback form in environments without the enhanced component
const ContactFormComponent: React.FC = () => null;

export default function Contact(): React.JSX.Element React.JSX.Element React.JSX.Element React.JSX.Element {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@ziontechgroup.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Tech Street, San Francisco, CA 94105",
      description: "Come say hello at our office",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond to all inquiries quickly",
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Happy Clients
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "99.9%",
      label: "Satisfaction Rate
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "50+",
      label: "Countries Served
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: "24/7",
      label: "Support Available
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Contact Zion Tech Group - Get in Touch | AI & Technology Solutions
        </title>
        <meta
          name="description
          content="Contact Zion Tech Group for AI solutions, cloud services, and technology consulting. Get expert advice and start your digital transformation journey.
        />
        <meta
          name="keywords
          content="contact, AI consulting, technology solutions, cloud services, digital transformation
        />
        <meta
          property="og:title
          content="Contact Zion Tech Group - Get in Touch
        />
        <meta
          property="og:description
          content="Contact us for AI solutions, cloud services, and technology consulting
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Let&apos;s Start a Conversation
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology?
              Let&apos;s discuss your project and explore the possibilities.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose the communication method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Form */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Start Your Project Today
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and our team will get back to you within
                24 hours with a personalized proposal for your project.
              </p>
            </div>

            <ContactFormComponent />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-white/90">
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300
                >
                  <div className="inline-flex p-4 rounded-xl bg-white/20 text-white mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Quick answers to common questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How quickly can you start my project?",
                  answer: "We typically begin new projects within 1-2 weeks of contract signing. Rush projects can be accommodated with additional planning.
                },
                {
                  question: "What&apos;s your typical project timeline?",
                  answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex AI implementations can take 3-6 months.
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes! We offer comprehensive support packages including maintenance, updates, and 24/7 monitoring for all our solutions.
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "We specialize in AI/ML, cloud computing, cybersecurity, quantum computing, and modern web technologies like React, Node.js, and Python.
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Get Started?
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing Together
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies that trust Zion Tech Group for their
                technology needs. Your digital transformation starts with a
                single conversation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  title="Internal link
                  href="#contact-form
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a
                  title="Internal link
                  href="tel:+15551234567
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}