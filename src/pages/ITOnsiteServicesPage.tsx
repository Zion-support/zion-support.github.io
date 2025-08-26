import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Award, 
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Building,
  Server,
  Network,
  Lock,
  Zap
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Network Setup & Configuration',
      'Server Installation & Management',
      'Cloud Infrastructure Setup',
      'Data Center Management',
      'Backup & Disaster Recovery'
    ]
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    services: [
      'Security Audits & Assessments',
      'Firewall Configuration',
      'Intrusion Detection Systems',
      'Security Monitoring',
      'Incident Response'
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    icon: Cloud,
    color: 'from-indigo-500 to-purple-500',
    services: [
      'Cloud Migration',
      'Multi-Cloud Management',
      'Cloud Security',
      'Performance Optimization',
      'Cost Management'
    ]
  },
  {
    id: 'data',
    name: 'Data Management',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    services: [
      'Database Administration',
      'Data Backup & Recovery',
      'Data Migration',
      'Performance Tuning',
      'Data Security'
    ]
  },
  {
    id: 'development',
    name: 'Development Support',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    services: [
      'DevOps Implementation',
      'CI/CD Pipeline Setup',
      'Code Review & Optimization',
      'Testing & Quality Assurance',
      'Deployment Support'
    ]
  },
  {
    id: 'consulting',
    name: 'IT Consulting',
    icon: Users,
    color: 'from-yellow-500 to-orange-500',
    services: [
      'Technology Strategy',
      'Digital Transformation',
      'Vendor Selection',
      'Project Management',
      'Training & Support'
    ]
  }
];

const globalLocations = [
  {
    region: 'North America',
    countries: [
      { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'] },
      { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton'] },
      { name: 'Mexico', cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana'] }
    ]
  },
  {
    region: 'Europe',
    countries: [
      { name: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool'] },
      { name: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt'] },
      { name: 'France', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'] },
      { name: 'Netherlands', cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'] }
    ]
  },
  {
    region: 'Asia Pacific',
    countries: [
      { name: 'Japan', cities: ['Tokyo', 'Osaka', 'Nagoya', 'Yokohama', 'Kyoto'] },
      { name: 'South Korea', cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'] },
      { name: 'Singapore', cities: ['Singapore'] },
      { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'] }
    ]
  },
  {
    region: 'Latin America',
    countries: [
      { name: 'Brazil', cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'] },
      { name: 'Argentina', cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata'] },
      { name: 'Colombia', cities: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena'] }
    ]
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Solutions',
    location: 'New York, USA',
    rating: 5,
    comment: 'Zion Tech Group transformed our IT infrastructure with their onsite expertise. The team was professional, knowledgeable, and delivered beyond our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    company: 'Global Innovations Ltd',
    location: 'London, UK',
    rating: 5,
    comment: 'Outstanding cybersecurity implementation. Their onsite team identified vulnerabilities we never knew existed and implemented robust security measures.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Elena Rodriguez',
    company: 'Digital Dynamics',
    location: 'Madrid, Spain',
    rating: 5,
    comment: 'The cloud migration project was executed flawlessly. Their onsite consultants ensured minimal downtime and excellent knowledge transfer to our team.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

export default function ITOnsiteServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Global IT
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Onsite Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional IT services delivered directly to your location worldwide. From infrastructure setup to cybersecurity implementation, we bring expertise to you.
            </p>
          </div>

          {/* Location Selector */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="">Select your location</option>
                {globalLocations.map((region) => (
                  <optgroup key={region.region} label={region.region}>
                    {region.countries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/request-quote" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get Onsite Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Local Team
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <Globe className="w-5 h-5" />
              <span>All Services</span>
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {category.name}
                  </h3>
                </div>

                {/* Services List */}
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={`/onsite-services/${category.id}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:text-cyan-300"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Global Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert teams are available in major cities across 6 continents, providing local expertise with global standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {globalLocations.map((region, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">{region.region}</h3>
                <div className="space-y-4">
                  {region.countries.map((country, countryIndex) => (
                    <div key={countryIndex} className="border-l-2 border-cyan-500 pl-4">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">{country.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {country.cities.map((city, cityIndex) => (
                          <span key={cityIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Onsite */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Onsite Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of having our experts work directly in your environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local Presence</h3>
              <p className="text-gray-400">Expert teams available in your city with local knowledge and quick response times</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Access</h3>
              <p className="text-gray-400">Direct access to your systems for faster problem resolution and implementation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Training</h3>
              <p className="text-gray-400">Hands-on training for your staff during implementation and deployment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock support with local emergency response capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses worldwide who have experienced our onsite services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Onsite IT Services?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how our global team can help you with your IT needs, delivered directly to your location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Onsite Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Local Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
