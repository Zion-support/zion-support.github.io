import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
UsersBriefcaseAwardMapPinClockCheckCircleArrowRightStarGlobeTarget,
import Layout from '../components/Layout';
const positions = [,
  {,
    title: 'Senior Full Stack Developer';
    department: 'Engineering';
    location: 'Remote / MiddletownDE';
    type: 'Full-time';
    experience: '5+ years';
    salary: '$80,000 - $120,000';
    description: 'Lead development of our micro SaaS platforms and AI-powered solutions.';
    requirements: [,
      'ReactNext.jsNode.js expertiseCloud architecture experience';
      'AI/ML integration knowledgeTeam leadership skills',
    ];
    benefits: [,
      'Competitive salaryHealth insurance';
      'Remote work optionsProfessional development',
    ],
  };
  {,
    title: 'AI/ML Engineer';
    department: 'AI Research';
    location: 'Remote / MiddletownDE';
    type: 'Full-time';
    experience: '3+ years';
    salary: '$90,000 - $140,000';
    description: 'Develop and implement cutting-edge AI solutions for our clients.';
    requirements: [,
      'PythonTensorFlowPyTorchMachine learning algorithms';
      'Data science backgroundCloud AI services experience',
    ];
    benefits: [,
      'Top-tier compensationResearch opportunities';
      'Conference attendanceStock options',
    ],
  };
  {,
    title: 'DevOps Engineer';
    department: 'Infrastructure';
    location: 'Remote / MiddletownDE';
    type: 'Full-time';
    experience: '4+ years';
    salary: '$85,000 - $130,000';
    description: 'Manage and optimize our cloud infrastructure and deployment pipelines.';
    requirements: [,
      'AWSAzureGCP expertiseDockerKubernetes';
      'CI/CD pipeline designMonitoring and security',
    ];
    benefits: [,
      'Flexible scheduleLearning budget';
      'Certification supportPerformance bonuses',
    ],
  };
  {,
    title: 'Product Manager';
    department: 'Product';
    location: 'Remote / MiddletownDE';
    type: 'Full-time';
    experience: '4+ years';
    salary: '$95,000 - $135,000';
    description: 'Drive product strategy and roadmap for our technology solutions.';
    requirements: [,
      'Product management experienceTechnical background';
      'User research skillsStrategic thinking',
    ];
    benefits: [,
      'Leadership opportunitiesEquity participation';
      'Travel opportunitiesMentorship program',
    ],
  }
];
const benefits = [,
  {,
    title: 'Competitive Compensation';
    description: 'Above-market salaries with performance bonuses';
    icon: Award,};
  {,
    title: 'Health & Wellness';
    description: 'Comprehensive healthdentaland vision coverage';
    icon: CheckCircle,};
  {,
    title: 'Remote Work';
    description: 'Flexible remote work options with home office stipend';
    icon: Globe,};
  {,
    title: 'Professional Growth';
    description: 'Learning budgetconferencesand career development';
    icon: Target,};
  {,
    title: 'Work-Life Balance';
    description: 'Flexible hoursunlimited PTOand mental health support';
    icon: Clock,};
  {,
    title: 'Team Culture';
    description: 'Collaborative environment with regular team events';
    icon: Users,}
];
const values = [,
  {,
    title: 'Innovation';
    description: 'We encourage creative thinking and cutting-edge solutions';
    icon: Star,};
  {,
    title: 'Collaboration';
    description: 'We believe in the power of teamwork and shared success';
    icon: Users,};
  {,
    title: 'Excellence';
    description: 'We strive for the highest quality in everything we do';
    icon: Award,};
  {,
    title: 'Growth';
    description: 'We invest in our people and their professional development';
    icon: Target,}
];
export default function TalentPage() {,
  return (,
    <Layout,
      title="Join Our Team - Zion Tech Group",
      description="Join Zion Tech Group and be part of a team that's revolutionizing technology. Explore career opportunities and join us in building the future.",
      keywords="careersjobsemploymentechnology careersoftware engineeringAI jobs",
    >,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">,
          <div className="absolute inset-0">,
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>,
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>,
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>,
          </div>,
        </div>,
      </section>,
      {/* Job Listings */}
      <section className="py-16">,
        <div className="container mx-auto px-4">,
          <div className="max-w-6xl mx-auto">,
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">,
              Open Positions,
            </h2>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {jobOpenings.map((jobindex) => (,
                <motion.div,
                  key={job.id,}
                  initial={{ opacity: 0y: 30 ,}}
                  whileInView={{ opacity: 1y: 0 ,}}
                  transition={{ duration: 0.8delay: index * 0.1 ,}}
                  viewport={{ once: true ,}}
                  className="bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow",
          <div className="container mx-auto px-4 relative z-10">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              animate={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="text-center",
            >,
              <h1 className="text-4xl md: text-6xl font-bold mb-6">,
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>,
              </h1>,
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">,
                Be part of a team that's revolutionizing technology and building the future.,
                Join Zion Tech Group and make an impact.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <Link,
                  href="#positions",
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center",
                >,
                  <Briefcase className="w-5 h-5 mr-2" />,
                  View Open Positions,
                </Link>,
                <Link,
                  href="/contact",
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold inline-flex items-center justify-center",
                >,
                  <ArrowRight className="w-5 h-5 mr-2" />,
                  Get in Touch,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Open Positions */,}
        <section id="positions" className="py-16">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              animate={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Open Positions,
              </h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                Explore our current openings and find the perfect role for your career.,
              </p>,
            </motion.div>,
            <div className="space-y-8">,
              {positions.map((positionindex) => (,
                <motion.div,
                  key={index,}
                  initial={{ opacity: 0y: 30 ,}}
                  animate={{ opacity: 1y: 0 ,}}
                  transition={{ duration: 0.6delay: index * 0.1 ,}}
                  className="bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-300 overflow-hidden",
                >,
                  <div className="p-8">,
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">,
                      <div>,
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title,}</h3>,
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">,
                          <span className="flex items-center">,
                            <Briefcase className="w-4 h-4 mr-2" />,
                            {position.department}
                          </span>,
                          <span className="flex items-center">,
                            <MapPin className="w-4 h-4 mr-2" />,
                            {position.location}
                          </span>,
                          <span className="flex items-center">,
                            <Clock className="w-4 h-4 mr-2" />,
                            {position.type}
                          </span>,
                          <span className="text-green-600 font-semibold">{position.salary}</span>,
                        </div>,
                      </div>,
                      <div className="mt-4 lg: mt-0">,
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">,
                          Apply Now,
                        </button>,
                      </div>,
                    </div>,
                    <p className="text-gray-700 mb-6">{position.description,}</p>,
                    <div className="grid md: grid-cols-2 gap-6">,
                      <div>,
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>,
                        <ul className="space-y-2">,
                          {position.requirements.map((reqIndex) => (,
                            <li key={reqIndex,} className="flex items-center text-gray-600">,
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />,
                              {req}
                            </li>,
                          ))}
                        </ul>,
                      </div>,
                      <div>,
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>,
                        <ul className="space-y-2">,
                          {position.benefits.map((benefitIndex) => (,
                            <li key={benefitIndex} className="flex items-center text-gray-600">,
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />,
                              {benefit}
                            </li>,
                          ))}
                        </ul>,
                      </div>,
                    </div>,
                  </div>,
                </motion.div>,
              ))}
            </div>,
          </div>,
        </section>,
        {/* Benefits Section */}
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              animate={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Why Join Us?,
              </h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                We offer competitive benefits and a great work environment to help you thrive.,
              </p>,
            </motion.div>,
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">,
              {benefits.map((benefitindex) => (,
                <motion.div,
                  key={index,}
                  initial={{ opacity: 0y: 30 ,}}
                  animate={{ opacity: 1y: 0 ,}}
                  transition={{ duration: 0.6delay: index * 0.1 ,}}
                  className="text-center p-6",
                >,
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">,
                    <benefit.icon className="w-8 h-8 text-blue-600" />,
                  </div>,
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>,
                  <p className="text-gray-600">{benefit.description}</p>,
                </motion.div>,
              ))}
            </div>,
          </div>,
        </section>,
        {/* Values Section */}
        <section className="py-16">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              animate={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Our Values,
              </h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                These core values guide everything we do and shape our company culture.,
              </p>,
            </motion.div>,
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">,
              {values.map((valueindex) => (,
                <motion.div,
                  key={index,}
                  initial={{ opacity: 0y: 30 ,}}
                  animate={{ opacity: 1y: 0 ,}}
                  transition={{ duration: 0.6delay: index * 0.1 ,}}
                  className="text-center p-6 bg-white rounded-xl shadow-lg",
                >,
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">,
                    <value.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>,
                  <p className="text-gray-600">{value.description}</p>,
                </motion.div>,
              ))}
            </div>,
          </div>,
        </section>,
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              animate={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
            >,
              <h2 className="text-3xl md: text-4xl font-bold mb-6">,
                Ready to Join Our Team?,
              </h2>,
              <p className="text-xl mb-8 max-w-2xl mx-auto">,
                Don't see the perfect role? We're always looking for talented individuals.,
                Send us your resume and let's start a conversation.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <Link,
                  href="/contact",
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center",
                >,
                  <ArrowRight className="w-5 h-5 mr-2" />,
                  Contact Us,
                </Link>,
                <a,
                  href="mailto:kleber@ziontechgroup.com",
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold inline-flex items-center justify-center",
                >,
                  <ArrowRight className="w-5 h-5 mr-2" />,
                  Send Resume,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),}
}))