<<<<<<< HEAD
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions can drive innovation and growth for your organization.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">Delaware, United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-300">24/7 Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 2.5v5.607h-3.188v-11.177h3.168v1.561c.76-1.773 2.366-3.17 4.657-3.17 4.964 0 5.881 3.25 5.881 7.465v6.286z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/ziontechgroup" className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.055 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://github.com/ziontechgroup" className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">About Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                We are a leading provider of AI-powered enterprise solutions, specializing in autonomous systems, 
                quantum computing, and next-generation technology services.
              </p>
              <p className="text-gray-300">
                Our mission is to democratize AI technology and enable businesses to operate autonomously, 
                driving innovation and sustainable growth across industries.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-autonomous-systems">AI Autonomous Systems</option>
                  <option value="quantum-computing">Quantum Computing</option>
                  <option value="enterprise-ai">Enterprise AI</option>
                  <option value="ai-consulting">AI Consulting</option>
                  <option value="autonomous-business">Autonomous Business</option>
                  <option value="research-development">Research & Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation to discuss how our AI solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Explore Our Services
            </Link>
            <Link href="/solutions" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
=======
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Get in touch with our team for general questions about our services and solutions.",
      email: "info@ziontechgroup.com",
      phone: "+1 (302) 464-0950"
    },
    {
      title: "Sales & Business Development",
      description: "Discuss how our AI solutions can transform your business operations.",
      email: "sales@ziontechgroup.com",
      phone: "+1 (302) 464-0951"
    },
    {
      title: "Research Collaboration",
      description: "Explore research partnerships and academic collaborations.",
      email: "research@ziontechgroup.com",
      phone: "+1 (302) 464-0952"
    },
    {
      title: "Technical Support",
      description: "Get technical assistance for our AI platforms and solutions.",
      email: "support@ziontechgroup.com",
      phone: "+1 (302) 464-0953"
    }
  ];

  const officeLocations = [
    {
      city: "Delaware, USA",
      address: "Main Headquarters",
      description: "Our primary research and development facility"
    },
    {
      city: "San Francisco, CA",
      address: "AI Innovation Center",
      description: "West Coast research and client services"
    },
    {
      city: "London, UK",
      address: "European Operations",
      description: "European market expansion and research"
    }
  ];
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}

import Link from 'next/link';
export default function ContactPage() {
  return (;
    <div className=&quot;min-h-screen bg-white&quot;>
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className=&quot;bg - gradient - to - r from - indigo - 600 to - purple - 700 text - white py - 20 & quot;>;
        <div className=&quot;max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center & quot;>;
          <h1 className=&quot;text - 4xl md:text - 6xl font - bold mb - 6&quot;>;
            Get in Touch;
          </h1>;
          <p className=&quot;text - xl md:text - 2xl text - indigo - 100 max - w-3xl mx - auto & quot;>;
            Ready to transform your business? Let's discuss how our AI - powered solutions can drive your success.;
          </p>;
        </div>;
      </section>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <div className=&quot;bg - gray - 50 p - 8 rounded - xl & quot;>;
              <h2 className=&quot;text - 2xl font - bold text - gray - 900 mb - 6&quot;>Send us a Message</h2>;
              <form className=&quot;space - y-6 & quot;>;
                <div className=&quot;grid grid - cols - 1 md:grid - cols - 2 gap - 6&quot;>;
                  <div>;
                    <label html_for=&quot;first_name & quot; className=&quot;block text - sm font - medium text - gray - 700 mb - 2&quot;>;
                      First Name *;
                    </label>;
                    <input;
                      type=&quot;text & quot;
                      id=&quot;first_name & quot;
                      name=&quot;first_name & quot;
                      required;
                      className=&quot;w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent & quot;
                      placeholder=&quot;Enter your first name & quot;
                    />;
                  </div>;
                  <div>;
                    <label html_for=&quot;last_name & quot; className=&quot;block text - sm font - medium text - gray - 700 mb - 2&quot;>;
                      Last Name *;
                    </label>;
                    <input;
                      type=&quot;text & quot;
                      id=&quot;last_name & quot;
                      name=&quot;last_name & quot;
                      required;
                      className=&quot;w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent & quot;
                      placeholder=&quot;Enter your last name & quot;
                    />;
                  </div>;
                </div>;
                <div>;
                  <label html_for=&quot;email & quot; className=&quot;block text - sm font - medium text - gray - 700 mb - 2&quot;>;
                    Email Address *;
                  </label>;
                  <input;
                    type=&quot;email & quot;
                    id=&quot;email & quot;
                    name=&quot;email & quot;
                    required;
                    className=&quot;w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent & quot;
                    placeholder=&quot;Enter your email address & quot;
                  />;
                </div>;
                <div>;
                  <label html_for=&quot;company & quot; className=&quot;block text - sm font - medium text - gray - 700 mb - 2&quot;>;
                    Company;
                  </label>;
                  <input;
                    type=&quot;text & quot;
                    id=&quot;company & quot;
                    name=&quot;company & quot;
                    className=&quot;w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent & quot;
                    placeholder=&quot;Enter your company name & quot;
                  />;
                </div>;
                <div>;
                  <label html_for=&quot;phone & quot; className=&quot;block text - sm font - medium text - gray - 700 mb - 2&quot;>;
                    Phone Number;
                  </label>;
                  <input;
                    type=&quot;tel & quot;
                    id=&quot;phone & quot;
                    name=&quot;phone & quot;
                    className=&quot;w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent & quot;
                    placeholder=&quot;Enter your phone number & quot;
                  />;
                </div>;
                <div>;
                  <label html_for=&quot;service & quot; className=&quot;block text - sm font - medium text - gray - 700 mb - 2&quot;>;
                    Service of Interest;
                  </label>;
                  <select;
                    id=&quot;service & quot;
                    name=&quot;service & quot;
                    className=&quot;w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent & quot;
                  >;
                    <option value="&quot;>Select a service</option>;
                    <option value=&quot;ai - automation & quot;>AI & Automation</option>;
                    <option value=&quot;cybersecurity & quot;>Cybersecurity</option>;
                    <option value=&quot;it - infrastructure & quot;>IT Infrastructure</option>;
                    <option value=&quot;research - development & quot;>Research & Development</option>;
                    <option value=&quot;quantum - computing & quot;>Quantum Computing</option>;
                    <option value=&quot;other & quot;>Other</option>;
                  </select>;
                </div>;
                <div>;
                  <label html_for=&quot;message" className="block text - sm font - medium text - gray - 700 mb - 2&quot;>;
                    Message *;
                  </label>;
                  <textarea;
                    id=&quot;message & quot;
                    name=&quot;message";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    rows={5}
                    required;
                    className="w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent & quot;
                    placeholder=&quot;Tell us about your project or inquiry...&quot;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  ></textarea>;
                </div>;
                <button;
                  type=&quot;submit";
                  className="w - full bg - blue - 600 text - white py - 3 px - 6 rounded - lg font - semibold hover:bg - blue - 700 transition - colors";
                >;
                  Send Message;
                </button>;
              </form>;
            </div>;
            {/* Contact Information */}
            <div className="space - y-8">;
              <div>;
                <h2 className="text - 2xl font - bold text - gray - 900 mb - 6">Contact Information</h2>;
                <p className="text - lg text - gray - 600 mb - 8">;
                  We're here to help you succeed. Reach out to us through any of the channels below.;
                </p>;
              </div>;
              <div className="space - y-6">;
                <div className="flex items - start space - x-4">;
                  <div className="w - 12 h - 12 bg - blue - 100 rounded - lg flex items - center justify - center flex - shrink - 0">;
                    <svg className="w - 6 h - 6 text - blue - 600 & quot; fill=&quot;none & quot; stroke=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                      <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M3 5a2 2 0 012 - 2h3.28a1 1 0 01.554.89l - 1.363 12a1 1 0 01-.554.89H5a2 2 0 01 - 2-2V5zM16 12V5a2 2 0 00 - 2-2H6a2 2 0 00 - 2 2v7m16 0a2 2 0 012 2v3a2 2 0 01 - 2 2H4a2 2 0 01 - 2-2v - 3a2 2 0 012 - 2h16z" />;
                    </svg>;
                  </div>;
                  <div>;
                    <h3 className="font - semibold text - gray - 900 mb - 1">Office Address</h3>;
                    <p className="text - gray - 600">;
                      Zion Tech Group < br />;
                      123 Innovation Drive < br />;
                      Tech Valley, CA 94000 < br />;
                      United States;
                    </p>;
                  </div>;
                </div>;
                <div className="flex items - start space - x-4">;
                  <div className="w - 12 h - 12 bg - green - 100 rounded - lg flex items - center justify - center flex - shrink - 0">;
                    <svg className="w - 6 h - 6 text - green - 600 & quot; fill=&quot;none & quot; stroke=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                      <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M3 5a2 2 0 012 - 2h3.28a1 1 0 01.554.89l - 1.363 12a1 1 0 01-.554.89H5a2 2 0 01 - 2-2V5zM16 12V5a2 2 0 00 - 2-2H6a2 2 0 00 - 2 2v7m16 0a2 2 0 012 2v3a2 2 0 01 - 2 2H4a2 2 0 01 - 2-2v - 3a2 2 0 012 - 2h16z" />;
                    </svg>;
                  </div>;
                  <div>;
                    <h3 className="font - semibold text - gray - 900 mb - 1">Contact Details</h3>;
                    <p className="text - gray - 600">;
                      <a href="tel:+13024640950" className="hover:text - blue - 600">+1 (302) 464 - 0950</Link><br />;
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text - blue - 600">kleber@ziontechgroup.com</Link><br />;
                      <a href="mailto:info@ziontechgroup.com" className="hover:text - blue - 600">info@ziontechgroup.com</Link>;
                    </p>;
                  </div>;
                </div>;
                <div className="flex items - start space - x-4">;
                  <div className="w - 12 h - 12 bg - purple - 100 rounded - lg flex items - center justify - center flex - shrink - 0">;
                    <svg className="w - 6 h - 6 text - purple - 600 & quot; fill=&quot;none & quot; stroke=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                      <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M12 8v4l3 3m6 - 3a9 9 0 11 - 18 0 9 9 0 0118 0z" />;
                    </svg>;
                  </div>;
                  <div>;
                    <h3 className="font - semibold text - gray - 900 mb - 1">Business Hours</h3>;
                    <p className="text - gray - 600">;
                      Monday - Friday: 9:00 AM - 6:00 PM PST < br />;
                      Saturday: 10:00 AM - 2:00 PM PST < br />;
                      Sunday: Closed < br />;
                      <span className="text - sm text - gray - 500">24 / 7 Emergency Support Available</span>;
                    </p>;
                  </div>;
                </div>;
              </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {/* Social Media Links */}
              <div>;
                <h3 className="font - semibold text - gray - 900 mb - 4">Follow Us</h3>;
                <div className="flex space - x-4">;
                  <a href="https://linkedin.com / company / ziontechgroup" className="w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center hover:bg - blue - 700 transition - colors">;
                    <svg className="w - 5 h - 5 text - white & quot; fill=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                      <path d=&quot;M20.447 20.452h - 3.554v - 5.569c0 - 1.328-.027 - 3.037 - 1.852 - 3.037 - 1.853 0 - 2.136 1.445 - 2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637 - 1.85 3.37 - 1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c - 1.144 0 - 2.063-.926 - 2.063 - 2.065 0 - 1.138.92 - 2.063 2.063 - 2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065 - 2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>;
                    </svg>;
                  </Link>;
                  <a href="https://twitter.com / ziontechgroup" className="w - 10 h - 10 bg - blue - 400 rounded - lg flex items - center justify - center hover:bg - blue - 500 transition - colors">;
                    <svg className="w - 5 h - 5 text - white & quot; fill=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                      <path d=&quot;M23.953 4.57a10 10 0 01 - 2.825.775 4.958 4.958 0 002.163 - 2.723c-.951.555 - 2.005.959 - 3.127 1.184a4.92 4.92 0 00 - 8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01 - 2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01 - 2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01 - 6.102 2.105c-.39 0-.779-.023 - 1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998 - 7.496 13.998 - 13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>;
                    </svg>;
                  </Link>;
                  <a href="https://github.com / ziontechgroup" className="w - 10 h - 10 bg - gray - 800 rounded - lg flex items - center justify - center hover:bg - gray - 900 transition - colors">;
                    <svg className="w - 5 h - 5 text - white & quot; fill=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                      <path d=&quot;M12 0c - 6.626 0 - 12 5.373 - 12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v - 2.234c - 3.338.726 - 4.033 - 1.416 - 4.033 - 1.416-.546 - 1.387 - 1.333 - 1.756 - 1.333 - 1.756 - 1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418 - 1.305.762 - 1.604 - 2.665-.305 - 5.467 - 1.334 - 5.467 - 5.931 0 - 1.311.469 - 2.381 1.236 - 3.221-.124-.303-.535 - 1.524.117 - 3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291 - 1.552 3.297 - 1.23 3.297 - 1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609 - 2.807 5.624 - 5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765 - 1.589 8.199 - 6.086 8.199 - 11.386 0 - 6.627 - 5.373 - 12 - 12 - 12z"/>;
                    </svg>;
                  </Link>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
            {/* Office Locations */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Office Locations
              </h2>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-1">{office.city}</h3>
                    <p className="text-blue-400 text-sm mb-1">{office.address}</p>
                    <p className="text-gray-300 text-sm">{office.description}</p>
                  </div>
                ))}
              </div>
            </div>
=======          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py - 20 bg - gray - 50">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Frequently Asked Questions;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-2xl mx - auto">;
              Get quick answers to common questions about our services and processes;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            <div className="bg - white p - 6 rounded - lg shadow - sm">;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 3">;
                How quickly can you start a project?;
              </h3>;
              <p className="text - gray - 600">;
                Most projects can begin within 1 - 2 weeks of initial consultation. We'll work with your timeline to ensure smooth project initiation.;
              </p>;
            </div>;
            <div className="bg - white p - 6 rounded - lg shadow - sm">;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 3">;
                Do you offer ongoing support?;
              </h3>;
              <p className="text - gray - 600">;
                Yes, we provide comprehensive ongoing support, monitoring, and optimization services to ensure your solutions continue to deliver value.;
              </p>;
            </div>;
            <div className="bg - white p - 6 rounded - lg shadow - sm">;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 3">;
                What industries do you serve?;
              </h3>;
              <p className="text - gray - 600">;
                We serve clients across all industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are industry - agnostic.;
              </p>;
            </div>;
            <div className="bg - white p - 6 rounded - lg shadow - sm">;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 3">;
                Can you work with existing systems?;
              </h3>;
              <p className="text - gray - 600">;
                Absolutely! We specialize in integrating with existing infrastructure and can work with your current systems to enhance and optimize them.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
<section className="py - 20 bg - blue - 600 text - white">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
            Ready to Get Started?;
          </h2>;
          <p className="text - xl text - blue - 100 mb - 8 max - w-2xl mx - auto">;
            Don't wait to transform your business. Contact us today to schedule a consultation and discover how we can help you achieve your goals.;
          </p>;
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
            <a href="#contact - form" className="bg - white text - blue - 600 px - 8 py - 3 rounded - lg text - lg font - semibold hover:bg - gray - 100 transition - colors">;
              Schedule a Call;
            </Link>;
            <Link href="/solutions" className="border - 2 border - white text - white px - 8 py - 3 rounded - lg text - lg font - semibold hover:bg - white hover:text - blue - 600 transition - colors">;
              Explore Solutions;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>);
>>>>>>> main
}