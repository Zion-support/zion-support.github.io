
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

import { 
  Linkedin, Twitter, Github, Mail, Award, Users, 
  Brain, Atom, Shield, Rocket, Globe, Code, 
  Star, CheckCircle, TrendingUp, Target 

    }, {
      id: 2,

      name: "Prof. Michael Rodriguez", role: "Chief Technology Officer",
      department: "Technology", bio: "Quantum computing expert and former IBM Research scientist. Leading our quantum technology initiatives." }, {
      id: 3,

      name: "Alex Thompson", role: "Head of AI Research",
      department: "AI & Machine Learning", bio: "AI researcher and entrepreneur. Former DeepMind engineer with expertise in neural networks and deep learning." }, {
      id: 4,

      name: "Lisa Park", role: "Chief Security Officer",
      department: "Cybersecurity", bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Former NSA security analyst." }
  ];
  const stats = [

    { number: "200+", label: "Years Combined Experience", icon: Award }, { number: "95%", label: "Employee Satisfaction", icon: Star }
  ];

  return (

    <>
      <SEO 
        title=&quot;Our Team - Zion Tech Group | World-Class Technology Experts&quot;
        description=&quot;Meet the exceptional team of AI researchers, quantum computing experts, cybersecurity specialists, and technology leaders driving innovation at Zion Tech Group.&quot;
        keywords=&quot;team, experts, AI researchers, quantum computing, cybersecurity, technology leaders, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              </h1>

                  <motion.div

                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}

                ))}
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Team Members Section */}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {teamMembers.map((member, index) => (&quot}
                <motion.div

                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                        ))}
                      </div>;
                    </div>;


                        ))}
                      </div>;
                    </div>;


                        className="text-gray-400 hover: text-green-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />

                      </a>
                    </div>
                  </div>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Join Our Team Section */}

              </h2>


                and solving complex challenges. Explore opportunities to work with the best minds in tech.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">

                <a
                  href=&quot;/careers&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Users className=&quot;w-5 h-5 mr-2&quot; />
                  View Open Positions&quot;
                </a>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <Mail className=&quot;w-5 h-5 mr-2&quot; />
                  Get in Touch&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>


  )}


