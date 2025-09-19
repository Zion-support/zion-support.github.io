"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Award,
  Star;
  ArrowRight;
  Quote;
  CheckCircle;
  BarChart3;
  Target;
  Zap,
} from 'lucide-react';
const RevolutionarySuccessStories2026 = () => {,
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);
  useEffect(() => {,
    setIsVisible(true);
  }[]);
  const successStories = [,
    {,
      id: 'techcorp';
      company: 'TechCorp Global';
      industry: 'Technology';
      logo: '🚀';
      challenge: 'Manual processes causing 40% efficiency loss';
      solution: 'Complete AI automation suite implementation';
      results: {,
        efficiency: '+300%';
        costReduction: '-75%';
        timeSaved: '2,000 hours/month';
        roi: '500%',};
      testimonial: {,
        text: "Zion Tech 'Groups AI solutions transformed our entire operation. We achieved 300% efficiency gains in just 3 months.";
        author: "Sarah Chen";
        position: "CEOTechCorp Global";
        avatar: "👩‍💼",};
      timeline: [,
        { month: 'Month 1'achievement: 'AI system 'deploymentstatus: 'completed' ,};
        { month: 'Month 2'achievement: '300% efficiency 'gainstatus: 'completed' ,};
        { month: 'Month 3'achievement: '500% ROI 'achievedstatus: 'completed' ,};
        { month: 'Month 6'achievement: 'Global 'expansionstatus: 'in-progress' ,}
      ],
    };
    {,
      id: 'healthplus';
      company: 'HealthPlus Medical';
      industry: 'Healthcare';
      logo: '🏥';
      challenge: 'Patient data processing taking 8 hours daily';
      solution: 'AI-powered medical data analysis system';
      results: {,
        efficiency: '+400%';
        costReduction: '-60%';
        timeSaved: '6 hours/day';
        roi: '350%',};
      testimonial: {,
        text: "The AI diagnostic system has revolutionized our patient care. We can now process complex cases in minutes instead of hours.";
        author: "Dr. Michael Rodriguez";
        position: "Chief Medical OfficerHealthPlus";
        avatar: "👨‍⚕️",};
      timeline: [,
        { month: 'Week 1'achievement: 'System 'integrationstatus: 'completed' ,};
        { month: 'Week 2'achievement: 'Staff 'trainingstatus: 'completed' ,};
        { month: 'Month 1'achievement: '400% efficiency 'gainstatus: 'completed' ,};
        { month: 'Month 2'achievement: 'FDA 'approvalstatus: 'completed' ,}
      ],
    };
    {,
      id: 'financepro';
      company: 'FinancePro Solutions';
      industry: 'Financial Services';
      logo: '💰';
      challenge: 'Manual risk assessment causing delays';
      solution: 'AI-powered risk analysis and fraud detection';
      results: {,
        efficiency: '+250%';
        costReduction: '-80%';
        timeSaved: '1,500 hours/month';
        roi: '600%',};
      testimonial: {,
        text: "Our fraud detection accuracy increased to 99.9% while reducing processing time by 80%. Incredible results!";
        author: "Jennifer Walsh";
        position: "CTOFinancePro Solutions";
        avatar: "👩‍💻",};
      timeline: [,
        { month: 'Week 1'achievement: 'AI model 'trainingstatus: 'completed' ,};
        { month: 'Week 3'achievement: 'System 'deploymentstatus: 'completed' ,};
        { month: 'Month 1'achievement: '99.9% 'accuracystatus: 'completed' ,};
        { month: 'Month 3'achievement: '600% 'ROIstatus: 'completed' ,}
      ],
    };
    {,
      id: 'retailmax';
      company: 'RetailMax Chain';
      industry: 'Retail';
      logo: '🛍️';
      challenge: 'Inventory management inefficiencies';
      solution: 'AI-powered demand forecasting and automation';
      results: {,
        efficiency: '+200%';
        costReduction: '-65%';
        timeSaved: '3,000 hours/month';
        roi: '450%',};
      testimonial: {,
        text: "Our inventory accuracy improved to 99.5% and we reduced waste by 65%. The AI predictions are incredibly accurate.";
        author: "David Kim";
        position: "Operations DirectorRetailMax";
        avatar: "👨‍💼",};
      timeline: [,
        { month: 'Week 1'achievement: 'Data 'integrationstatus: 'completed' ,};
        { month: 'Week 2'achievement: 'AI model 'trainingstatus: 'completed' ,};
        { month: 'Month 1'achievement: '99.5% 'accuracystatus: 'completed' ,};
        { month: 'Month 2'achievement: '450% 'ROIstatus: 'completed' ,}
      ],
    }
  ];
  const overallStats = [,
    { label: 'Companies 'Transformedvalue: '500+'icon: Users ,};
    { label: 'Average 'ROIvalue: '475%'icon: TrendingUp ,};
    { label: 'Time 'Savedvalue: '50K+ 'hoursicon: Clock ,};
    { label: 'Cost 'Reductionvalue: '70%'icon: DollarSign ,}
  ];
  return (,
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">,
      {/* Background Pattern */}
      <div className="absolute inset-0">,
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%25234F46E5%22%20fill-opacity%3D%220.05%22%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>,
      </div>,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20">,
        {/* Header */,}
        <div,
          className="text-center mb-16",
        >,
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">,
            <Award className="w-5 h-5 text-blue-400 mr-2" />,
            <span className="text-blue-200 font-medium">Revolutionary Success Stories 2026</span>,
          </div>,
          <h1 className="text-5xl md: text-7xl font-bold mb-6">,
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">,
              Real Results;
            </span>,
            <br />,
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">,
              Real Impact,
            </span>,
          </h1>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">,
            See how industry leaders are achieving unprecedented success with our AI and automation solutions.,
            These 'arent just promises—'they', 're proven results.,
          </p>,
        </div>,
        {/* Overall Stats */}
        <div,
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16",
        >,
          {overallStats.map((statindex) => (,
            <div key={index,} className="text-center">,
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">,
                <stat.icon className="w-8 h-8 text-blue-400" />,
              </div>,
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>,
              <div className="text-gray-400">{stat.label}</div>,
            </div>,
          ))}
        </div>,
        {/* Success Stories Navigation */}
        <div,
          className="mb-12",
        >,
          <div className="flex flex-wrap justify-center gap-4 mb-8">,
            {successStories.map((storyindex) => (,
              <button,
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${,
                  activeStory === index,
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25',
                    : 'bg-white/10 text-gray-300 hover: bg-white/20 hover:text-white',}`}
              >,
                <div className="flex items-center space-x-2">,
                  <span className="text-xl">{story.logo}</span>,
                  <span>{story.company}</span>,
                </div>,
              </button>,
            ))}
          </div>,
          {/* Story Content */}
            <div,
              key={activeStory}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10",
            >,
              <div className="grid lg: grid-cols-2 gap-8">,
                {/* Left Column - Story Details */,}
                <div>,
                  <div className="flex items-center space-x-4 mb-6">,
                    <div className="text-4xl">{successStories[activeStory].logo}</div>,
                    <div>,
                      <h3 className="text-2xl font-bold text-white">{successStories[activeStory].company}</h3>,
                      <p className="text-blue-300">{successStories[activeStory].industry}</p>,
                    </div>,
                  </div>,
                  <div className="space-y-6">,
                    <div>,
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">,
                        <Target className="w-5 h-5 mr-2 text-red-400" />,
                        Challenge,
                      </h4>,
                      <p className="text-gray-300">{successStories[activeStory].challenge}</p>,
                    </div>,
                    <div>,
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">,
                        <Zap className="w-5 h-5 mr-2 text-yellow-400" />,
                        Solution,
                      </h4>,
                      <p className="text-gray-300">{successStories[activeStory].solution}</p>,
                    </div>,
                    {/* Results Grid */}
                    <div>,
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">,
                        <BarChart3 className="w-5 h-5 mr-2 text-green-400" />,
                        Results,
                      </h4>,
                      <div className="grid grid-cols-2 gap-4">,
                        {Object.entries(successStories[activeStory].results).map(([keyvalue]) => (,
                          <div key={key} className="bg-white/5 rounded-lg p-4 text-center">,
                            <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>,
                            <div className="text-sm text-gray-400 capitalize">,
                              {key.replace(/([A-Z])/g' $1').trim()}
                            </div>,
                          </div>,
                        ))}
                      </div>,
                    </div>,
                  </div>,
                </div>,
                {/* Right Column - Testimonial & Timeline */}
                <div className="space-y-6">,
                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">,
                    <Quote className="w-8 h-8 text-blue-400 mb-4" />,
                    <p className="text-gray-200 italic mb-4 text-lg leading-relaxed">,
                      "{successStories[activeStory].testimonial.text}",
                    </p>,
                    <div className="flex items-center space-x-3">,
                      <div className="text-2xl">{successStories[activeStory].testimonial.avatar}</div>,
                      <div>,
                        <div className="font-semibold text-white">{successStories[activeStory].testimonial.author}</div>,
                        <div className="text-blue-300 text-sm">{successStories[activeStory].testimonial.position}</div>,
                      </div>,
                    </div>,
                  </div>,
                  {/* Timeline */}
                  <div>,
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">,
                      <Clock className="w-5 h-5 mr-2 text-purple-400" />,
                      Implementation Timeline,
                    </h4>,
                    <div className="space-y-3">,
                      {successStories[activeStory].timeline.map((itemindex) => (,
                        <div key={index} className="flex items-center space-x-3">,
                          <div className={`w-3 h-3 rounded-full ${,
                            item.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400',
                          }`}></div>,
                          <div className="flex-1">,
                            <div className="text-white font-medium">{item.achievement}</div>,
                            <div className="text-gray-400 text-sm">{item.month}</div>,
                          </div>,
                          {item.status === 'completed' && (,
                            <CheckCircle className="w-5 h-5 text-green-400" />,
                          )}
                        </div>,
                      ))}
                    </div>,
                  </div>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Call to Action */}
        <div,
          className="text-center",
        >,
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">,
            <h2 className="text-3xl font-bold text-white mb-4">,
              Ready to Write Your Success Story?,
            </h2>,
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">,
              Join hundreds of companies already achieving extraordinary results.,
              'Let', 's create your success story together.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">,
                <div className="flex items-center">,
                  <span>Start Your Success Story</span>,
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />,
                </div>,
              </button>,
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">,
                <div className="flex items-center">,
                  <Star className="w-5 h-5 mr-2" />,
                  <span>View All Case Studies</span>,
                </div>,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>,
  ),};
export default RevolutionarySuccessStories2026;