import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions,
            micro SaaS development, and comprehensive enterprise IT services.
          </p>
        </div>

<<<<<<< HEAD
        <div className="max-w-6xl mx-auto">
          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth,
                efficiency, and innovation. We believe in the transformative power of AI and
                modern software development to solve complex business challenges.
              </p>
              <p className="text-lg text-gray-600">
                Since our founding, we have delivered over 1000 successful projects across
                various industries, helping companies of all sizes achieve their digital
                transformation goals.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Constantly pushing the boundaries of what's possible with technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality</h4>
                    <p className="text-gray-600">Delivering exceptional solutions that exceed expectations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrity</h4>
                    <p className="text-gray-600">Building trust through transparency and honest communication</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>
                    <p className="text-gray-600">Working closely with clients as partners in their success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600">Advanced AI solutions and custom ML models</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Micro SaaS</h3>
                <p className="text-gray-600">Scalable software-as-a-service solutions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600">Enterprise cloud solutions and DevOps</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600">Comprehensive security solutions</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help transform your business
              with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get In Touch
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              To empower businesses with cutting-edge technology solutions that
              drive growth, enhance security, and streamline operations. We
              believe in the transformative power of technology to solve complex
              business challenges.
            </p>
            <p className="text-lg text-gray-300">
              Our team of expert developers, designers, and consultants work
              tirelessly to deliver solutions that not only meet but exceed our
              clients&apos; expectations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-gray-300 mb-6">
              To be the global leader in AI-powered business solutions, setting
              the standard for innovation, reliability, and customer success in
              the technology industry.
            </p>
            <p className="text-lg text-gray-300">
              We envision a future where every business, regardless of size, has
              access to enterprise-grade technology solutions that enable them to
              compete and thrive in the digital economy.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Innovation First
              </h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest technologies and
                methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Security Focused
              </h3>
              <p className="text-gray-300">
                Enterprise-grade security is built into every solution we
                deliver.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-300">
                Agile development processes ensure rapid time-to-market for your
                projects.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Results Driven
              </h3>
              <p className="text-gray-300">
                We measure success by the tangible business value we create for
                our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Partnership
              </h3>
              <p className="text-gray-300">
                We work as an extension of your team, not just a vendor.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Scalable Solutions
              </h3>
              <p className="text-gray-300">
                Our solutions grow with your business, from startup to enterprise.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve
            your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-gray-300 italic mb-4">
                &quot;Zion Tech Group transformed our business with their AI
                solutions. The results exceeded our expectations.&quot;
              </p>
              <p className="text-white font-semibold">- CEO, Tech Startup</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 italic mb-4">
                &quot;Their cybersecurity expertise gave us peace of mind and
                protected our valuable data.&quot;
              </p>
              <p className="text-white font-semibold">- CTO, Enterprise</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Our Commitment to Excellence
          </h3>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-left">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Cutting-edge technology solutions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                24/7 technical support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Enterprise-grade security
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Custom solutions for every need
              </li>
            </ul>
          </div>
        </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
      </div>
    </div>
  );
}