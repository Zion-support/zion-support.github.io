"use client";
'use client';
import React, { useState, useEffect } from 'react';
// import Link from 'next/link', // Replaced with regular anchor tags for React compatibility,
import {,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Brain,
  Globe;
  CheckCircle;
  Play;
  Download;
  ExternalLink;
  Sparkles;
  Target;
  Award;
  Rocket;
  DollarSign;
  BarChart3;
  Clock;
  Building;
  Quote;
  ThumbsUp;
  Eye;
  Share2;
  Heart,
} from 'lucide-react';
const BusinessSuccessStoriesShowcase2026 = () => {,
  const [activeStorysetActiveStory] = useState(0);
  const [hoveredCardsetHoveredCard] = useState(null);
  const successStories = [,
    {,
      id: 1;
      company: 'TechCorp Global';
      industry: 'Technology';
      size: 'Fortune 500';
      logo: '/api/placeholder/80/80';
      challenge: 'Manual processes causing 40% efficiency loss and high operational costs';
      solution: 'Implemented AI-powered automation system with neural consensus technology';
      results: {,
        efficiency: '+300%';
        costReduction: '-65%';
        timeSaved: '2,500 hours/month';
        roi: '450%',};
      testimonial: {,
        text: 'The AI automation system transformed our entire operation. We achieved 300% efficiency improvement and saved millions in operational costs.';
        author: 'Sarah Johnson';
        position: 'CEOTechCorp Global';
        avatar: '/api/placeholder/60/60',};
      technologies: ['Neural Consensus 'AIWorkflow 'Automation', 'Predictive Analytics'];
      duration: '6 months';
      featured: true;
      rating: 5.0;
      views: 15600;
      likes: 892,};
    {,
      id: 2;
      company: 'FinanceFirst Bank';
      industry: 'Financial Services';
      size: 'Enterprise';
      logo: '/api/placeholder/80/80';
      challenge: 'Cybersecurity threats and compliance issues affecting customer trust';
      solution: 'Deployed quantum-safe encryption and AI-powered threat detection system';
      results: {,
        security: 'Zero breaches';
        compliance: '100%';
        customerTrust: '+85%';
        roi: '320%',};
      testimonial: {,
        text: 'Our security posture improved dramatically. Zero breaches since implementation and 100% compliance achievement.';
        author: 'Michael Chen';
        position: 'CISOFinanceFirst Bank';
        avatar: '/api/placeholder/60/60',};
      technologies: ['Quantum-Safe 'EncryptionAI Threat 'Detection', 'Zero-Trust Security'];
      duration: '4 months';
      featured: false;
      rating: 4.9;
      views: 12300;
      likes: 654,};
    {,
      id: 3;
      company: 'ManufacturingPro Inc';
      industry: 'Manufacturing';
      size: 'Mid-Market';
      logo: '/api/placeholder/80/80';
      challenge: 'Equipment downtime causing $2M monthly losses and production delays';
      solution: 'Implemented predictive maintenance AI and automated quality control systems';
      results: {,
        downtime: '-80%';
        quality: '+95%';
        savings: '$1.8M/month';
        roi: '280%',};
      testimonial: {,
        text: 'Predictive maintenance AI reduced our downtime by 80% and saved us $1.8M monthly. Game-changing technology.';
        author: 'David Rodriguez';
        position: 'Operations DirectorManufacturingPro';
        avatar: '/api/placeholder/60/60',};
      technologies: ['Predictive Maintenance 'AIQuality Control 'Automation', 'IoT Integration'];
      duration: '5 months';
      featured: true;
      rating: 4.8;
      views: 9800;
      likes: 456,};
    {,
      id: 4;
      company: 'RetailMax Chain';
      industry: 'Retail';
      size: 'Large Enterprise';
      logo: '/api/placeholder/80/80';
      challenge: 'Inventory management inefficiencies and poor customer experience';
      solution: 'Deployed AI-powered inventory optimization and customer analytics platform';
      results: {,
        inventory: '+40% accuracy';
        sales: '+25%';
        customerSatisfaction: '+90%';
        roi: '380%',};
      testimonial: {,
        text: 'AI-driven inventory management increased our sales by 25% and customer satisfaction by 90%. Incredible results.';
        author: 'Lisa Anderson';
        position: 'VP OperationsRetailMax';
        avatar: '/api/placeholder/60/60',};
      technologies: ['Inventory 'AICustomer 'Analytics', 'Demand Forecasting'];
      duration: '3 months';
      featured: false;
      rating: 4.9;
      views: 11200;
      likes: 723,};
    {,
      id: 5;
      company: 'HealthTech Solutions';
      industry: 'Healthcare';
      size: 'Enterprise';
      logo: '/api/placeholder/80/80';
      challenge: 'Patient data analysis taking weeks and diagnostic accuracy issues';
      solution: 'Implemented AI diagnostic platform with real-time patient data analysis';
      results: {,
        diagnosis: '+95% accuracy';
        timeReduction: '-75%';
        patientOutcomes: '+60%';
        roi: '520%',};
      testimonial: {,
        text: 'AI diagnostic platform improved our diagnostic accuracy to 95% and reduced analysis time by 75%. Life-saving technology.';
        author: 'Dr. Emily Watson';
        position: 'Chief Medical OfficerHealthTech';
        avatar: '/api/placeholder/60/60',};
      technologies: ['AI 'DiagnosticsReal-time 'Analytics', 'Medical AI'];
      duration: '7 months';
      featured: true;
      rating: 5.0;
      views: 18900;
      likes: 1203,};
    {,
      id: 6;
      company: 'LogisticsPro Ltd';
      industry: 'Logistics';
      size: 'Mid-Market';
      logo: '/api/placeholder/80/80';
      challenge: 'Route optimization and fuel costs consuming 30% of revenue';
      solution: 'Deployed AI route optimization and fuel efficiency management system';
      results: {,
        fuelCosts: '-35%';
        deliveryTime: '-50%';
        customerSatisfaction: '+70%';
        roi: '290%',};
      testimonial: {,
        text: 'AI route optimization reduced our fuel costs by 35% and delivery time by 50%. Massive operational improvement.';
        author: 'James Wilson';
        position: 'Logistics DirectorLogisticsPro';
        avatar: '/api/placeholder/60/60',};
      technologies: ['Route Optimization 'AIFuel 'Efficiency', 'Supply Chain AI'];
      duration: '4 months';
      featured: false;
      rating: 4.7;
      views: 8700;
      likes: 389,}
  ];
  const featuredStories = successStories.filter(story => story.featured);
  const allStories = successStories;
  const getIndustryIcon = (industry) => {,
    switch (industry) {,
      case 'Technology': return Brain;
      case 'Financial Services': return Shield;
      case 'Manufacturing': return Zap;
      case 'Retail': return Globe;
      case 'Healthcare': return Target;
      case 'Logistics': return Truck;
      default: return Building,}
  };
  const getIndustryColor = (industry) => {,
    switch (industry) {,
      case 'Technology': return 'from-purple-500 to-blue-500';
      case 'Financial Services': return 'from-green-500 to-teal-500';
      case 'Manufacturing': return 'from-orange-500 to-red-500';
      case 'Retail': return 'from-pink-500 to-rose-500';
      case 'Healthcare': return 'from-blue-500 to-indigo-500';
      case 'Logistics': return 'from-yellow-500 to-orange-500';
      default: return 'from-slate-500 to-slate-600',}
  };
  return (,
    <div className="bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */,}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="text-center mb-16",
        >,
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">,
            <Sparkles className="w-4 h-4" />,
            Business Success Stories Showcase 2026,
          </div>,
          <h2 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-6">,
            Real Results from Real Businesses,
          </h2>,
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">,
            Discover how leading companies across industries achieved unprecedented success,
            with our AI solutions. See the measurable impact on their bottom line.,
          </p>,
        </div>,
        {/* Featured Stories */,}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="mb-16",
        >,
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Featured Success Stories</h3>,
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,
            {featuredStories.map((storyindex) => {,
              const IndustryIcon = getIndustryIcon(story.industry);
              const industryColor = getIndustryColor(story.industry);
              return (,
                <div,
                  key={story.id}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  className="bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer",
                  onClick={() => setActiveStory(story.id - 1),}
                >,
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${industryColor} p-6 text-white`}>,
                    <div className="flex items-center justify-between mb-4">,
                      <div className="flex items-center gap-3">,
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">,
                          <IndustryIcon className="w-6 h-6" />,
                        </div>,
                        <div>,
                          <h4 className="font-bold text-lg">{story.company}</h4>,
                          <p className="text-sm opacity-90">{story.industry} • {story.size}</p>,
                        </div>,
                      </div>,
                      <div className="flex items-center gap-1">,
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />,
                        <span className="font-bold">{story.rating}</span>,
                      </div>,
                    </div>,
                    <div className="text-sm opacity-90">,
                      <span className="bg-white/20 px-2 py-1 rounded-full">Featured</span>,
                    </div>,
                  </div>,
                  {/* Content */}
                  <div className="p-6">,
                    {/* Challenge */}
                    <div className="mb-4">,
                      <h5 className="font-semibold text-slate-900 mb-2">Challenge</h5>,
                      <p className="text-sm text-slate-600 line-clamp-2">{story.challenge}</p>,
                    </div>,
                    {/* Solution */}
                    <div className="mb-4">,
                      <h5 className="font-semibold text-slate-900 mb-2">Solution</h5>,
                      <p className="text-sm text-slate-600 line-clamp-2">{story.solution}</p>,
                    </div>,
                    {/* Key Results */}
                    <div className="mb-6">,
                      <h5 className="font-semibold text-slate-900 mb-3">Key Results</h5>,
                      <div className="grid grid-cols-2 gap-3">,
                        {Object.entries(story.results).slice(04).map(([keyvalue]resultIndex) => (,
                          <div key={resultIndex} className="text-center">,
                            <div className="text-lg font-bold text-purple-600">{value}</div>,
                            <div className="text-xs text-slate-600 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>,
                          </div>,
                        ))}
                      </div>,
                    </div>,
                    {/* Technologies */}
                    <div className="mb-4">,
                      <h5 className="font-semibold text-slate-900 mb-2">Technologies Used</h5>,
                      <div className="flex flex-wrap gap-1">,
                        {story.technologies.map((techIndex) => (,
                          <span,
                            key={techIndex}
                            className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs",
                          >,
                            {tech}
                          </span>,
                        ))}
                      </div>,
                    </div>,
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">,
                      <div className="flex items-center gap-4">,
                        <div className="flex items-center gap-1">,
                          <Eye className="w-4 h-4" />,
                          <span>{story.views.toLocaleString()}</span>,
                        </div>,
                        <div className="flex items-center gap-1">,
                          <Heart className="w-4 h-4" />,
                          <span>{story.likes}</span>,
                        </div>,
                      </div>,
                      <div className="flex items-center gap-1">,
                        <Clock className="w-4 h-4" />,
                        <span>{story.duration}</span>,
                      </div>,
                    </div>,
                    {/* Actions */}
                    <div className="flex gap-2">,
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">,
                        <Play className="w-4 h-4" />,
                        Read Full Story,
                      </button>,
                      <button className="p-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">,
                        <Share2 className="w-4 h-4" />,
                      </button>,
                    </div>,
                  </div>,
                </div>,
              ),})}
          </div>,
        </div>,
        {/* All Stories Grid */}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="mb-16",
        >,
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">All Success Stories</h3>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
            {allStories.map((storyindex) => {,
              const IndustryIcon = getIndustryIcon(story.industry);
              const industryColor = getIndustryColor(story.industry);
              return (,
                <div,
                  key={story.id}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  className="bg-white rounded-xl shadow-md hover: shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer",
                  onClick={() => setActiveStory(story.id - 1),}
                >,
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${industryColor} p-4 text-white`}>,
                    <div className="flex items-center justify-between">,
                      <div className="flex items-center gap-2">,
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">,
                          <IndustryIcon className="w-4 h-4" />,
                        </div>,
                        <div>,
                          <h4 className="font-bold">{story.company}</h4>,
                          <p className="text-xs opacity-90">{story.industry}</p>,
                        </div>,
                      </div>,
                      <div className="flex items-center gap-1">,
                        <Star className="w-3 h-3 text-yellow-300 fill-current" />,
                        <span className="text-sm font-bold">{story.rating}</span>,
                      </div>,
                    </div>,
                  </div>,
                  {/* Content */}
                  <div className="p-4">,
                    <h5 className="font-semibold text-slate-900 mb-2 line-clamp-1">{story.challenge}</h5>,
                    {/* Key Results */}
                    <div className="grid grid-cols-2 gap-2 mb-3">,
                      {Object.entries(story.results).slice(02).map(([keyvalue]resultIndex) => (,
                        <div key={resultIndex} className="text-center">,
                          <div className="text-sm font-bold text-purple-600">{value}</div>,
                          <div className="text-xs text-slate-600 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>,
                        </div>,
                      ))}
                    </div>,
                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">,
                      <div className="flex items-center gap-1">,
                        <Eye className="w-3 h-3" />,
                        <span>{story.views.toLocaleString()}</span>,
                      </div>,
                      <div className="flex items-center gap-1">,
                        <Heart className="w-3 h-3" />,
                        <span>{story.likes}</span>,
                      </div>,
                      <div className="flex items-center gap-1">,
                        <Clock className="w-3 h-3" />,
                        <span>{story.duration}</span>,
                      </div>,
                    </div>,
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-1">,
                      <Play className="w-3 h-3" />,
                      Read Story,
                    </button>,
                  </div>,
                </div>,
              ),})}
          </div>,
        </div>,
        {/* CTA Section */}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="text-center",
        >,
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">,
            <h3 className="text-3xl font-bold mb-4">,
              Ready to Write Your Success Story?,
            </h3>,
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">,
              Join thousands of businesses already achieving remarkable results with our AI solutions.,
              'Let', 's create your success story together.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors flex items-center gap-2">,
                <Rocket className="w-5 h-5" />,
                Start Your Journey,
              </button>,
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center gap-2">,
                <Award className="w-5 h-5" />,
                View All Stories,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>,
  );
export default BusinessSuccessStoriesShowcase2026;
}