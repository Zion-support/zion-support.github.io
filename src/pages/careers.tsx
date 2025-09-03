import React from 'react';
import { SEO } from '../components/SEO';
import { Briefcase, Users, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Lead development of AI-powered solutions and machine learning platforms.",
      requirements: ["5+ years AI/ML experience", "Python, TensorFlow, PyTorch", "Cloud platforms (AWS, Azure, GCP)"]
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Middletown, DE", 
      type: "Full-time",
      description: "Manage cloud infrastructure and deployment pipelines for our technology solutions.",
      requirements: ["3+ years DevOps experience", "Docker, Kubernetes", "CI/CD pipelines"]
    },
    {
      title: "Frontend Developer",
      location: "Remote / Middletown, DE",
      type: "Full-time", 
      description: "Build modern, responsive user interfaces for our web applications.",
      requirements: ["3+ years React/Next.js experience", "TypeScript", "Tailwind CSS"]
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible remote work options",
    "Professional development budget",
    "Cutting-edge technology stack",
    "Collaborative team environment"
  ];

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join Zion Tech Group's innovative team. Explore career opportunities in AI, cloud computing, and technology solutions."
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Be part of the future of technology. We're building cutting-edge AI solutions, 
                quantum computing platforms, and innovative micro SAAS services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#openings" 
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  View Openings
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're at the forefront of technological innovation, working on projects that shape the future.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovative Team</h3>
                <p className="text-gray-600">
                  Work alongside talented engineers, researchers, and innovators who are passionate about technology.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cutting-Edge Projects</h3>
                <p className="text-gray-600">
                  Contribute to revolutionary AI platforms, quantum computing solutions, and next-generation software.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Work</h3>
                <p className="text-gray-600">
                  Enjoy remote work options, flexible hours, and a healthy work-life balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Send us your resume and let us know what role interests you most. 
                  We're always looking for talented individuals to join our team.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
              <p className="text-xl text-gray-600">
                Explore our current job opportunities and find your perfect role.
              </p>
            </div>
            
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <a 
                      href="/contact" 
                      className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;