import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Star,
  CheckCircle
} from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120K - $180K",
      description: "Join our AI team to develop cutting-edge machine learning solutions for enterprise clients.",
      requirements: [
        "Strong Python, TensorFlow, PyTorch experience",
        "Experience with large language models",
        "Knowledge of MLOps and deployment",
        "PhD in Computer Science or related field preferred"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Professional development budget",
        "Health, dental, and vision coverage"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90K - $140K",
      description: "Build scalable web applications and microservices for our enterprise platform.",
      requirements: [
        "React, Node.js, TypeScript experience",
        "Database design and optimization",
        "API development and integration",
        "Cloud deployment experience (AWS/Azure)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Professional development budget",
        "Health, dental, and vision coverage"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100K - $150K",
      description: "Design and maintain our cloud infrastructure and CI/CD pipelines.",
      requirements: [
        "AWS/Azure cloud experience",
        "Docker, Kubernetes, Terraform",
        "CI/CD pipeline development",
        "Monitoring and logging tools"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Professional development budget",
        "Health, dental, and vision coverage"
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$95K - $145K",
      description: "Transform data into actionable insights for our enterprise clients.",
      requirements: [
        "Python, R, SQL experience",
        "Statistical analysis and modeling",
        "Data visualization skills",
        "Machine learning fundamentals"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Professional development budget",
        "Health, dental, and vision coverage"
      ]
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Passion for Innovation",
      description: "We're driven by the desire to solve complex problems and push technological boundaries."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Collaborative Culture",
      description: "Success comes from working together, sharing knowledge, and supporting each other's growth."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Continuous Learning",
      description: "We invest in your growth with ongoing training, conferences, and skill development."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Global Impact",
      description: "Your work will help organizations worldwide transform their digital capabilities."
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Flexible remote work options",
    "Comprehensive health, dental, and vision coverage",
    "Professional development and conference budgets",
    "Flexible PTO and paid holidays",
    "401(k) with company matching",
    "Home office setup allowance",
    "Team building and social events"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Mission
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us shape the future of technology and transform businesses 
              across the globe with innovative AI and digital solutions.
            </p>
            <Link
              to="#open-positions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and make Zion Tech Group 
              an exceptional place to work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We believe in taking care of our team so you can focus on doing 
              your best work and growing your career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Comprehensive Benefits
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Growth & Development
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to join our team? Explore our current openings and find 
              the perfect role for your skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Position Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-gray-400 text-sm mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {position.salary}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      {position.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Apply Section */}
                  <div className="lg:col-span-1">
                    <div className="bg-slate-700/30 rounded-lg p-6 h-fit">
                      <h4 className="text-white font-semibold mb-4">Benefits</h4>
                      <ul className="space-y-2 mb-6">
                        {position.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mb-3">
                        Apply Now
                      </button>
                      
                      <button className="w-full border border-gray-600 text-white font-medium py-3 px-6 rounded-lg hover:border-gray-500 transition-colors">
                        Save Position
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Fit?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
              <GraduationCap className="mr-2 w-5 h-5" />
              Submit Resume
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors"
            >
              <Users className="mr-2 w-5 h-5" />
              Contact Recruiting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;