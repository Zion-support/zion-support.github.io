"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  Award;
  ArrowRight;
  Play;
  Download;
  Share2;
  Star;
  CheckCircle;
  ExternalLink;
  BarChart3;
  Zap,
} from 'lucide-react';
const RevolutionaryCaseStudiesShowcase2027 = () => {,
  const [activeCasetActiveCase] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);
  useEffect(() => {,
    setIsVisible(true);
  }[]);
  const caseStudies = [,
    {,
      id: 'techcorp-transformation';
      company: 'TechCorp Global';
      industry: 'Technology';
      challenge: 'Legacy system modernization and AI integration';
      solution: 'Complete digital transformation with AI-powered automation';
      results: {,
        revenue: '+340%';
        efficiency: '+280%';
        costReduction: '-65%';
        timeToMarket: '-75%',};
      duration: '18 months';
      teamSize: '150+ experts';
      technologies: ['AI/'MLCloud 'Migration', 'Microservices'DevOps'];
      description: 'Transformed a traditional enterprise into an AI-first organizationresulting in unprecedented growth and efficiency gains.';
      highlights: [,
        'Implemented 50+ AI models across all business functionsMigrated 200+ legacy applications to cloud-native architecture';
        'Achieved 99.9% system uptime with automated monitoringReduced manual processes by 85% through intelligent automation',
      ];
      testimonial: {,
        quote: "This transformation exceeded our wildest expectations. 'Weve become a completely different company.";
        author: "Sarah Chen";
        position: "CTOTechCorp Global";
        avatar: "/api/placeholder/60/60",};
      metrics: [,
        { label: 'Revenue 'Growthvalue: '+340%'icon: TrendingUpcolor: 'text-green-500' ,};
        { label: 'Efficiency 'Gainvalue: '+280%'icon: Zapcolor: 'text-blue-500' ,};
        { label: 'Cost 'Reductionvalue: '-65%'icon: DollarSigncolor: 'text-red-500' ,};
        { label: 'Time to 'Marketvalue: '-75%'icon: Clockcolor: 'text-purple-500' ,}
      ],
    };
    {,
      id: 'healthcare-ai';
      company: 'MediTech Solutions';
      industry: 'Healthcare';
      challenge: 'Patient diagnosis accuracy and treatment optimization';
      solution: 'AI-powered diagnostic system with predictive analytics';
      results: {,
        accuracy: '+95%';
        diagnosisTime: '-80%';
        patientOutcomes: '+60%';
        costSavings: '-45%',};
      duration: '12 months';
      teamSize: '80+ experts';
      technologies: ['Computer 'VisionNLP'Predictive 'AnalyticsIoT'];
      description: 'Revolutionized healthcare delivery through AI-powered diagnostics and personalized treatment recommendations.';
      highlights: [,
        'Achieved 95% accuracy in early disease detectionReduced diagnosis time from weeks to hours';
        'Improved patient outcomes by 60%Saved $50M+ in healthcare costs annually',
      ];
      testimonial: {,
        quote: "The AI system has transformed how we approach patient care. 'Its like having a superhuman diagnostician on every team.";
        author: "Dr. Michael Rodriguez";
        position: "Chief Medical OfficerMediTech Solutions";
        avatar: "/api/placeholder/60/60",};
      metrics: [,
        { label: 'Diagnosis 'Accuracyvalue: '+95%'icon: Targetcolor: 'text-green-500' ,};
        { label: 'Diagnosis 'Timevalue: '-80%'icon: Clockcolor: 'text-blue-500' ,};
        { label: 'Patient 'Outcomesvalue: '+60%'icon: Userscolor: 'text-purple-500' ,};
        { label: 'Cost 'Savingsvalue: '-45%'icon: DollarSigncolor: 'text-red-500' ,}
      ],
    };
    {,
      id: 'fintech-innovation';
      company: 'FinanceFlow Inc.';
      industry: 'Financial Services';
      challenge: 'Fraud detection and risk management at scale';
      solution: 'Real-time AI fraud detection with quantum-enhanced security';
      results: {,
        fraudDetection: '+99.7%';
        falsePositives: '-90%';
        processingSpeed: '+500%';
        customerSatisfaction: '+85%',};
      duration: '15 months';
      teamSize: '120+ experts';
      technologies: ['Quantum 'ComputingMachine 'Learning', 'Blockchain'Real-time Analytics'];
      description: 'Built the world\'s most advanced fraud detection system using quantum computing and AI.';
      highlights: [,
        'Detected 99.7% of fraudulent transactions in real-timeReduced false positives by 90%';
        'Processed 10M+ transactions per secondAchieved 99.99% system reliability',
      ];
      testimonial: {,
        quote: "'Weve set a new standard for financial security. Our customers trust us with their most sensitive data.";
        author: "Jennifer Liu";
        position: "CEOFinanceFlow Inc.";
        avatar: "/api/placeholder/60/60",};
      metrics: [,
        { label: 'Fraud 'Detectionvalue: '+99.7%'icon: Shieldcolor: 'text-green-500' ,};
        { label: 'False 'Positivesvalue: '-90%'icon: Targetcolor: 'text-blue-500' ,};
        { label: 'Processing 'Speedvalue: '+500%'icon: Zapcolor: 'text-purple-500' ,};
        { label: 'Customer 'Satisfactionvalue: '+85%'icon: Userscolor: 'text-orange-500' ,}
      ],
    };
    {,
      id: 'manufacturing-ai';
      company: 'AutoManufacturing Co.';
      industry: 'Manufacturing';
      challenge: 'Production optimization and predictive maintenance';
      solution: 'AI-driven smart manufacturing with IoT integration';
      results: {,
        productivity: '+200%';
        downtime: '-85%';
        quality: '+95%';
        energyEfficiency: '+40%',};
      duration: '24 months';
      teamSize: '200+ experts';
      technologies: [IoT', 'Computer 'VisionPredictive 'Maintenance', 'Robotics'];
      description: 'Transformed traditional manufacturing into a smartAI-powered production facility.';
      highlights: [,
        'Increased productivity by 200% through intelligent automationReduced unplanned downtime by 85%';
        'Achieved 95% quality improvementReduced energy consumption by 40%',
      ];
      testimonial: {,
        quote: "'Weve created the factory of the future. Every process is optimizedevery decision is data-driven.";
        author: "Robert Kim";
        position: "VP of OperationsAutoManufacturing Co.";
        avatar: "/api/placeholder/60/60",};
      metrics: [,
        { label: ''Productivityvalue: '+200%'icon: TrendingUpcolor: 'text-green-500' ,};
        { label: 'Downtime 'Reductionvalue: '-85%'icon: Clockcolor: 'text-blue-500' ,};
        { label: 'Quality 'Improvementvalue: '+95%'icon: Awardcolor: 'text-purple-500' ,};
        { label: 'Energy 'Efficiencyvalue: '+40%'icon: Zapcolor: 'text-orange-500' ,}
      ],
    }
  ];
  const overallStats = [,
    { label: 'Projects 'Completedvalue: '500+'icon: CheckCircle ,};
    { label: 'Client 'Satisfactionvalue: '99.2%'icon: Star ,};
    { label: 'Average 'ROIvalue: '340%'icon: TrendingUp ,};
    { label: 'Years 'Experiencevalue: '15+'icon: Award ,}
  ];
  if (!isVisible) return null;
  return (,
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */,}
        <div,
          className="text-center mb-16",
        >,
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6">,
            <Award className="w-4 h-4" />,
            Revolutionary Case Studies 2027,
          </div>,
          <h2 className="text-4xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">,
            Proven Success Stories,
          </h2>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Discover how leading organizations achieved extraordinary results through our AI-powered solutions.,
            Real projectsreal resultsreal transformation.,
          </p>,
        </div>,
        {/* Overall Stats */,}
        <div,
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16",
        >,
          {overallStats.map((statindex) => (,
            <div key={index,} className="text-center">,
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">,
                <stat.icon className="w-8 h-8 text-gray-900" />,
              </div>,
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>,
              <div className="text-gray-300 text-sm">{stat.label}</div>,
            </div>,
          ))}
        </div>,
        {/* Case Study Navigation */}
        <div,
          className="mb-12",
        >,
          <div className="flex flex-wrap justify-center gap-4">,
            {caseStudies.map((caseStudyindex) => (,
              <button,
                key={caseStudy.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${,
                  activeCase === index,
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg',
                    : 'bg-white/10 text-gray-300 hover: bg-white/20',}`}
              >,
                {caseStudy.company}
              </button>,
            ))}
          </div>,
        </div>,
        {/* Case Study Content */}
          <div,
            key={activeCase}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20",
          >,
            <div className="grid lg: grid-cols-2 gap-12">,
              {/* Left Column - Details */,}
              <div>,
                <div className="flex items-center gap-4 mb-6">,
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">,
                    <Award className="w-8 h-8 text-gray-900" />,
                  </div>,
                  <div>,
                    <h3 className="text-3xl font-bold text-white">{caseStudies[activeCase].company}</h3>,
                    <p className="text-gray-300">{caseStudies[activeCase].industry} • {caseStudies[activeCase].duration}</p>,
                  </div>,
                </div>,
                <div className="space-y-6">,
                  <div>,
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>,
                    <p className="text-gray-300">{caseStudies[activeCase].challenge}</p>,
                  </div>,
                  <div>,
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>,
                    <p className="text-gray-300">{caseStudies[activeCase].solution}</p>,
                  </div>,
                  <div>,
                    <h4 className="text-lg font-semibold text-white mb-2">Key Highlights</h4>,
                    <ul className="space-y-2">,
                      {caseStudies[activeCase].highlights.map((highlightindex) => (,
                        <li key={index} className="flex items-start gap-2 text-gray-300">,
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />,
                          {highlight}
                        </li>,
                      ))}
                    </ul>,
                  </div>,
                  <div>,
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>,
                    <div className="flex flex-wrap gap-2">,
                      {caseStudies[activeCase].technologies.map((techindex) => (,
                        <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">,
                          {tech}
                        </span>,
                      ))}
                    </div>,
                  </div>,
                </div>,
              </div>,
              {/* Right Column - Results & Testimonial */}
              <div>,
                {/* Results Metrics */}
                <div className="mb-8">,
                  <h4 className="text-2xl font-bold text-white mb-6">Results</h4>,
                  <div className="grid grid-cols-2 gap-4">,
                    {caseStudies[activeCase].metrics.map((metricindex) => (,
                      <div key={index} className="bg-white/10 rounded-lg p-4 text-center">,
                        <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />,
                        <div className="text-2xl font-bold text-white">{metric.value}</div>,
                        <div className="text-gray-300 text-sm">{metric.label}</div>,
                      </div>,
                    ))}
                  </div>,
                </div>,
                {/* Testimonial */}
                <div className="bg-white/10 rounded-lg p-6">,
                  <div className="flex items-start gap-4 mb-4">,
                    <img,
                      src={caseStudies[activeCase].testimonial.avatar}
                      alt={caseStudies[activeCase].testimonial.author}
                      className="w-12 h-12 rounded-full",
                    />,
                    <div>,
                      <div className="font-semibold text-white">{caseStudies[activeCase].testimonial.author}</div>,
                      <div className="text-gray-300 text-sm">{caseStudies[activeCase].testimonial.position}</div>,
                    </div>,
                  </div>,
                  <blockquote className="text-gray-300 italic">,
                    "{caseStudies[activeCase].testimonial.quote}",
                  </blockquote>,
                </div>,
                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">,
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover: from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center gap-2">,
                    <Play className="w-4 h-4" />,
                    View Case Study,
                  </button>,
                  <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">,
                    <Download className="w-4 h-4" />,
                    Download PDF,
                  </button>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Call to Action */,}
        <div,
          className="text-center mt-16",
        >,
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-gray-900">,
            <h3 className="text-3xl font-bold mb-4">,
              Ready to Write Your Success Story?,
            </h3>,
            <p className="text-xl mb-8 max-w-2xl mx-auto">,
              Join hundreds of companies that have transformed their business with our AI solutions.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-gray-900 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">,
                <ArrowRight className="w-5 h-5" />,
                Start Your Project,
              </button>,
              <button className="bg-white/20 text-gray-900 py-4 px-8 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">,
                <ExternalLink className="w-5 h-5" />,
                View All Case Studies,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>,
  ),};
export default RevolutionaryCaseStudiesShowcase2027;