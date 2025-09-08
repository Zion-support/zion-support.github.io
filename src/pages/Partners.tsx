
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Handshake, Globe, Award, Users, Building, Star, CheckCircle, ArrowRight, ExternalLink 
} from 'lucide-react';
export default function Partners() {
  const partners = [

    }, {
      id: 2,

      name: "Google Cloud", category: "Cloud Partner",
      description: "Advanced cloud infrastructure and machine learning platforms", logo: "/api/placeholder/200/100" }, {
      id: 3,

      name: "IBM", category: "Quantum Computing Partner",
      description: "Quantum computing research and development collaboration", logo: "/api/placeholder/200/100" }, {
      id: 4,

      name: "Amazon Web Services", category: "Cloud Infrastructure Partner",
      description: "Comprehensive cloud services and infrastructure solutions", logo: "/api/placeholder/200/100" }, {
      id: 5,

      name: "NVIDIA", category: "AI Hardware Partner",
      description: "Advanced GPU solutions for AI and machine learning workloads", logo: "/api/placeholder/200/100" }, {
      id: 6,

      name: "Intel", category: "Technology Partner",
      description: "Advanced processor technologies and AI optimization", logo: "/api/placeholder/200/100" }
  ];

  const partnershipTypes = [

      title: "Technology Partners", description: "Leading technology companies providing cutting-edge solutions",

      icon: Building, count: 12,
      color: "from-blue-500 to-cyan-500"
    }, { title: "Cloud Partners",
      description: "Global cloud providers enabling scalable infrastructure", icon: Globe,
      count: 8, color: "from-green-500 to-emerald-500"
    }, { title: "Research Partners", description: "Academic institutions and research organizations",
      icon: Award, count: 15,
      color: "from-purple-500 to-pink-500"
    }, { title: "Channel Partners",
      description: "Distribution and implementation partners worldwide", icon: Handshake,
      count: 25, color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [

  ];

  return (

    <>
      <SEO 
        title=&quot;Partners - Zion Tech Group | Strategic Technology Partnerships&quot;
        description=&quot;Discover our strategic partnerships with leading technology companies, cloud providers, and research institutions that enable us to deliver world-class solutions.&quot;
        keywords=&quot;partners, partnerships, technology partners, cloud partners, strategic alliances, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Strategic partnerships with industry leaders enable us to deliver 
                comprehensive technology solutions and drive innovation across all sectors.&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Handshake className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              </p>
            </motion.div>


                <motion.div

                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

              ))}
            </div>;
          </div>;
        </section>;

        {/* Partners Grid */}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-8&quot;>
              {partners.map((partner, index) => (&quot}
                <motion.div

                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                      ))}
                    </div>;
                  </div>;

                  <a;
                    href={partner.website}

                  </a>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Partnership Benefits */}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-6&quot;>
              {benefits.map((benefit, index) => (&quot}
                <motion.div

                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

              ))}
            </div>;
          </div>;
        </section>;

        {/* Become a Partner */}

              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join our network of strategic partners and help shape the future of technology. 


              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">

                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Handshake className=&quot;w-5 h-5 mr-2&quot; />
                  Partner with Us&quot;
                </a>
                <a
                  href=&quot;/about&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  Learn More&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href='/signup?type=partner&source=partner-program'>
              {t('partner.apply')}
            </Link>
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='text-zion-cyan border-zion-cyan'            disabled={!authServiceAvailable}          <Button
            size="lg"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            asChild><Link href="/signup?type=partner&source=partner-program">{t('partner.apply')}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-zion-cyan border-zion-cyan"
            disabled={!authServiceAvailable}
            onClick={() => router.push('/login')}
            disabled = {!authServiceAvailable,}
            onClick = {() => router.push('/login'),}
          >
            {t('partner.login')}
          </Button>
          {!authServiceAvailable && (
            <p className='text-red-500 text-sm mt-2'>
              {t('partner.login_unavailable')}
            </p>          )}            <p className="text-red-500 text-sm mt-2">{t('partner.login_unavailable')}</p>
          )}
        </div>
      </div>
</>


  )}


