import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Search,;
  Star, ;
  TrendingUp, ;
  Zap,;
  Brain,;
  Globe,;
  Shield,;
  Cpu,;
  Network,;
  Database,;
  Cloud,;
  Lock,;
  Eye,;
  Rocket,;
  Award,;
  CheckCircle,;
  ExternalLink,;
  Phone,;
  Mail,;
  MapPin,;
  ArrowRight,;
  Clock,;
  Target;
} from "lucide-react"
import { SEO } from "@/components/SEO"
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from "../data/advancedMicroSaasServices2025"
import { EMERGING_TECH_SERVICES_2025 } from "../data/emergingTechServices2025"
export default function InnovativeServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all')
  const allServices = [;
    ...ADVANCED_MICRO_SAAS_SERVICES_2025
    ...EMERGING_TECH_SERVICES_2025
  ];
  const innovationLevels = [;
    { value: 'all', label: 'All Innovation Levels', color: 'bg-gray-500' };
    { value: 'Advanced', label: 'Advanced', color: 'bg-blue-500' };
    { value: 'Cutting-edge', label: 'Cutting-edge', color: 'bg-purple-500' };
    { value: 'Revolutionary', label: 'Revolutionary', color: 'bg-red-500' };
  ];
  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    ;
    const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel
    ;
    return matchesSearch && matchesInnovation,;&& matchesInnovation,; matchesInnovation,
  }),;

  const getInnovationColor = (level: string) => {;
    switch (level) {;
      case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'Cutting-edge': return 'bg-purple-500/20 text-purple-300 border-purple-500/30',;
      case 'Revolutionary': return 'bg-red-500/20 text-red-300 border-red-500/30',;
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    };
  };
  const getInnovationIcon = (level: string) => {;
    switch (level) {;
      case 'Advanced': return <[^>]*/>
      case 'Cutting-edge': return <Brain className="w-5 h-5" />,;
      case 'Revolutionary': return <Rocket className="w-5 h-5" />,;
      default: return <[^>]*/>
    };
  };
  const featuredServices = filteredServices.filter(service => ;
    service.innovationLevel === 'Revolutionary' || service.innovationLevel === 'Cutting-edge'
  ),;

  return (
    <>;
      <SEO ;
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our most innovative and revolutionary technology services. From quantum computing to AI-powered platforms, explore cutting-edge solutions that will transform your business."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-red-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="flex items-center justify-center mb-6">;
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full">;
                <[^>]*/>
                <span className="text-sm font-medium">Innovation Leader 2025</[^>]*>
              </[^>]*>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Innovative Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">;
                Showcase 2025;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Experience the future of technology with our most revolutionary and cutting-edge services. ;
              From quantum computing breakthroughs to AI-powered innovations, discover solutions that redefine what's possible.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <div className="flex items-center space-x-2 text-white">;
                <[^>]*/>
                <span>Industry Innovation Award</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2 text-white">;
                <[^>]*/>
                <span>500% Average ROI</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2 text-white">;
                <[^>]*/>
                <span>Patent-Pending Technology</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            {/* Search */};
            <div className="relative">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>

            {/* Innovation Level Filter */};
            <div>;
              <select;
                value={selectedInnovationLevel};
                onChange={(e) => setSelectedInnovationLevel(e.target.value)};
                className="[^"]*"
              >;
                {innovationLevels.map(level => (;
                  <option key={level.value} value={level.value} className="bg-slate-800 text-white">;
                    {level.label};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Revolutionary Services */};
      {featuredServices.length > 0 && (;&& (; (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
          <div className="mb-8">;
            <h2 className="text-3xl font-bold text-white mb-2">;
              Featured Revolutionary Services;
            </[^>]*>
            <p className="text-gray-300">;
              Our most innovative and game-changing solutions;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {featuredServices.slice(0, 4).map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.2 }};
                className="[^"]*"
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getInnovationColor(service.innovationLevel)}`}>;
                    {getInnovationIcon(service.innovationLevel)};
                    <span className="text-sm font-medium">{service.innovationLevel}</[^>]*>
                  </[^>]*>
                  <span className="text-sm text-gray-400">{service.category}</[^>]*>
                </[^>]*>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</[^>]*>
                <p className="text-gray-300 mb-6">{service.description}</[^>]*>

                <div className="grid grid-cols-2 gap-4 mb-6">;
                  <div>;
                    <div className="text-3xl font-bold text-white">;
                      ${service.price.toLocaleString()};
                      <span className="text-sm text-gray-400 font-normal">/month</[^>]*>
                    </[^>]*>
                    <div className="text-xs text-gray-400">Starting Price</[^>]*>
                  </[^>]*>
                  <div className="text-right">;
                    <div className="text-green-400 font-semibold text-xl">{service.roi}</[^>]*>
                    <div className="text-xs text-gray-400">ROI</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-white mb-3">Key Innovations</[^>]*>
                  <div className="space-y-2">;
                    {service.features.slice(0, 3).map((feature, idx) => (;
                      <div key={idx} className="flex items-center text-sm text-gray-300">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                <div className="flex space-x-3">;
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">;
                    Explore Innovation;
                    <[^>]*/>
                  </[^>]*>
                  <button className="px-4 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      )};

      {/* All Services Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="mb-8">;
          <h2 className="text-3xl font-bold text-white mb-2">;
            {filteredServices.length} Innovative Services;
          </[^>]*>
          <p className="text-gray-300">;
            Complete portfolio of cutting-edge technology solutions;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {filteredServices.map((service, index) => (;
            <motion.div
              key={service.id};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: index * 0.1 }};
              className="[^"]*"
            >;
              {/* Service Header */};
              <div className="mb-4">;
                <div className="flex items-start justify-between mb-3">;
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getInnovationColor(service.innovationLevel)}`}>;
                    {getInnovationIcon(service.innovationLevel)};
                    <span className="text-xs font-medium">{service.innovationLevel}</[^>]*>
                  </[^>]*>
                  <span className="text-sm text-gray-400">{service.category}</[^>]*>
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</[^>]*>
                <p className="text-gray-300 text-sm mb-4">{service.description}</[^>]*>
              </[^>]*>

              {/* Price and ROI */};
              <div className="flex items-center justify-between mb-4">;
                <div className="text-2xl font-bold text-white">;
                  ${service.price.toLocaleString()};
                  <span className="text-sm text-gray-400 font-normal">/month</[^>]*>
                </[^>]*>
                <div className="text-right">;
                  <div className="text-green-400 font-semibold">{service.roi}</[^>]*>
                  <div className="text-xs text-gray-400">ROI</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Features */};
              <div className="mb-4">;
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</[^>]*>
                <div className="space-y-1">;
                  {service.features.slice(0, 3).map((feature, idx) => (;
                    <div key={idx} className="flex items-center text-sm text-gray-300">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                  {service.features.length > 3 && (;&& (; (
                    <div className="text-xs text-gray-400 mt-1">;
                      +{service.features.length - 3} more features;
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>

              {/* Tags */};
              <div className="mb-4">;
                <div className="flex flex-wrap gap-2">;
                  {service.tags.slice(0, 4).map((tag, idx) => (;
                    <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Technical Specs */};
              {service.technicalSpecs && (;&& (; (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">;
                  <h4 className="text-sm font-semibold text-white mb-2">Technical Highlights</[^>]*>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">;
                    <div>;
                      <span className="text-gray-400">Uptime: </span> {service.technicalSpecs.uptime};
                    </[^>]*>
                    <div>;
                      <span className="text-gray-400">APIs:</span> {service.technicalSpecs.apiEndpoints};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              )};

              {/* Market Info */};
              {service.marketSize && (;&& (; (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">;
                  <div className="text-xs text-gray-300">;
                    <span className="text-gray-400">Market Size:</span> {service.marketSize};
                  </[^>]*>
                </[^>]*>
              )};

              {/* Contact and CTA */};
              <div className="border-t border-white/20 pt-4">;
                <div className="flex items-center justify-between mb-3">;
                  <div className="text-sm text-gray-400">;
                    <div className="flex items-center">;
                      <[^>]*/>
                      {service.estimatedDelivery};
                    </[^>]*>
                  </[^>]*>
                  <div className="text-sm text-gray-400">;
                    <div className="flex items-center">;
                      <[^>]*/>
                      {service.supportLevel};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                ;
                <div className="flex space-x-2">;
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">;
                    Get Quote;
                  </[^>]*>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {filteredServices.length === 0 && (;&& (; (
          <div className="text-center py-12">;
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</[^>]*>
            <button;
              onClick={() => {;
                setSearchTerm('')
                setSelectedInnovationLevel('all')
              }};
              className="[^"]*"
            >;
              Clear all filters;
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Innovation Stats */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Innovation by the Numbers;
            </[^>]*>
            <p className="text-xl text-gray-300">;
              Our commitment to pushing technological boundaries;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="text-4xl font-bold text-white mb-2">25+</[^>]*>
              <div className="text-gray-300">Revolutionary Services</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-4xl font-bold text-white mb-2">15+</[^>]*>
              <div className="text-gray-300">Patent-Pending Technologies</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-4xl font-bold text-white mb-2">500%</[^>]*>
              <div className="text-gray-300">Average ROI</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-4xl font-bold text-white mb-2">99.9%</[^>]*>
              <div className="text-gray-300">Client Satisfaction</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">;
          <div className="text-center mb-8">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready to Lead the Innovation?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Join the companies that are already transforming their industries with our revolutionary technology solutions.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</[^>]*>
              <p className="text-gray-300">+1 302 464 0950</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</[^>]*>
              <p className="text-gray-300">kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</[^>]*>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>

          <div className="text-center">;
            <a;
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="[^"]*"
            >;
              Visit Our Website;
              <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};