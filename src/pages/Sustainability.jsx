import React, { useState } from 'react';'export default Sustainability;'import {;
import { motion } from 'framer - motion';''  Leaf, Zap,
  Shield, CheckCircle,
  ArrowRight, Star,
  Users, Award,
  Globe, Lock,
  Activity, Clock,
  Eye, Database,
  Code, FileText,
  Truck, Wrench,
  Cpu, Brain,
  Target, Rocket,
  Lightbulb, Gauge,
  Network, Server,
  Building, Car,
  Plane, Factory,
  Cog, BarChart3,
  TrendingUp, MapPin,
  Layers, RefreshCw,
  AlertTriangle, Sun,
  Wind, Droplets,
  Recycle, Cloud,
  Battery, Thermometer,
} from 'lucide - react';''const Sustainability = () => {;
  const sustainabilitySolutions = [;
    {
      id: 1, title: 'Renewable Energy Systems','      description: 'Solar, wind, and hydroelectric power solutions for sustainable energy generation.', icon: Sun,'      features: ['        'Solar panel installation', 'Wind turbine systems','        'Energy storage solutions', 'Grid integration','      ], price: 'From $200,000', timeline: '32 - 48 weeks','      category: 'Energy', technologies: ['Solar PV', 'Wind Power', 'Battery Storage', 'Smart Grid'], },'    {'      id: 2, title: 'Green Building Solutions','      description: 'Sustainable building design and construction for energy efficiency and environmental impact reduction.', icon: Building,'      features: ['        'LEED certification', 'Energy - efficient design','        'Green materials', 'Smart building systems','      ], price: 'From $150,000', timeline: '24 - 40 weeks','      category: 'Buildings', technologies: ['        'LEED Standards','        'BIM Modeling', 'IoT Sensors','        'Energy Management',  ], },'    {'      id: 3, title: 'Waste Management Systems','      description: 'Advanced waste reduction, recycling, and circular economy solutions.', icon: Recycle,'      features: ['        'Waste sorting automation', 'Recycling optimization','        'Circular economy design', 'Waste - to - energy','      ], price: 'From $100,000', timeline: '20 - 32 weeks','      category: 'Waste Management', technologies: ['AI Sorting', 'IoT Monitoring', 'Biogas', 'Composting'], },'    {'      id: 4, title: 'Sustainable Transportation','      description: 'Electric vehicles, public transit optimization, and green logistics solutions.', icon: Car,'      features: ['        'EV infrastructure', 'Public transit optimization','        'Green logistics', 'Carbon footprint tracking','      ], price: 'From $120,000', timeline: '24 - 36 weeks','      category: 'Transportation', technologies: ['        'EV Charging','        'Smart Routing', 'Fleet Management','        'Carbon Analytics',  ], },'    {'      id: 5, title: 'Water Conservation','      description: 'Smart water management and conservation systems for sustainable resource use.', icon: Droplets,'      features: ['        'Smart irrigation', 'Water quality monitoring','        'Leak detection', 'Conservation analytics','      ], price: 'From $80,000', timeline: '16 - 24 weeks','      category: 'Water Management', technologies: ['        'IoT Sensors','        'AI Analytics', 'Smart Valves','        'Water Quality',  ], },'    {'      id: 6, title: 'Carbon Management','      description: 'Comprehensive carbon footprint tracking and reduction strategies.', icon: Globe,'      features: ['        'Carbon footprint analysis', 'Emissions tracking','        'Offset strategies', 'Sustainability reporting','      ], price: 'From $60,000', timeline: '12 - 20 weeks','      category: 'Environmental', technologies: ['        'Carbon Analytics','        'IoT Monitoring', 'AI Reporting','        'Blockchain',  ], },'  ];'
  const successStories = [;
    {
      logo: '🏭', comp: 'EcoManufacturing Inc.','      industry: 'Manufacturing', challenge: 'High energy costs and carbon emissions from traditional manufacturing processes.','      solution: 'Implemented solar power systems, energy - efficient equipment, and smart monitoring.', results: '40% reduction in energy costs, 60% decrease in carbon footprint, LEED Gold certification.','    }, {'      logo: '🏢','      comp: 'GreenTech Office Complex', industry: 'Commercial Real Estate','      challenge: 'Outdated building systems causing excessive energy waste and poor tenant satisfaction.', solution: 'Complete building retrofit with smart HVAC, LED lighting, and renewable energy integration.','      results: '35% energy savings, 25% increase in tenant satisfaction, 50% reduction in maintenance costs.', },'    {'      logo: '🚛', comp: 'Sustainable Logistics Co.','      industry: 'Transportation & Logistics', challenge: 'High fuel costs and carbon emissions from traditional fleet operations.','      solution: 'Transitioned to electric vehicles, implemented route optimization, and carbon tracking.', results: '30% reduction in fuel costs, 45% decrease in carbon emissions, improved delivery efficiency.','    },  ];'
  return (<div className="min - h-screen bg - gradient - to - br from - slate - 900 via - green - 900 to - slate - 900 text - white">"      {/* Hero Section */}"      <section className="py - 20 px - 4 sm: px - 6 lg:px - 8">"        <div className="max - w-7xl mx - auto text - center">"          <motion.div"            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">"              Sustainable < span className="text - transparent bg - clip - text bg - gradient - to - r from - green - 400 to - emerald - 400">"                {' '}'                Technology'              </span>
            </h1>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto mb - 8">"              Transform your business with cutting - edge sustainable technology"              solutions that protect the planet while driving growth and
              innovation
            </p>
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">"              <a"                href="/contact""                className="px - 8 py - 4 bg - gradient - to - r from - green - 600 to - emerald - 600 text - white font - semibold rounded - xl hover:shadow - lg hover:shadow - green - 500 / 25 transition - all duration - 300 transform hover:scale - 105""              >"                Start Sustainability Project
              </a>
              <a
                href="/contact""                className="px - 8 py - 4 border border - green - 500 text - green - 400 font - semibold rounded - xl hover:bg - green - 500 hover:text - white transition - all duration - 300""              >"                Sustainability Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">"        <div className="max - w-7xl mx - auto">"          <div className="text - center mb - 16">"            <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">"              Comprehensive Sustainability Solutions"            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">"              From renewable energy to waste management, we provide end - to - end"              sustainable technology solutions for every industry
            </p>
          </div>

          <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 8">"            {sustainabilitySolutions.map ( (solution, index) => (<motion.div"                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20 hover:border - green - 400 / 40 transition - all duration - 300""              >"                <div className="flex items - center gap - 4 mb - 4">"                  <div className="w - 12 h - 12 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center text - white">"                    <solution.icon className="w - 6 h - 6" />"                  </div>"                  <div>
                    <h3 className="text - xl font - semibold text - white">"                      {solution.title}"                    </h3>
                    <p className="text - sm text - green - 400">"                      {solution.category}"                    </p>
                  </div>
                </div>

                <p className="text - gray - 300 mb - 4">{solution.description}</p>""                <div className="space - y-3 mb - 4">"                  <h4 className="font - semibold text - green - 400">"                    Key Features:"                  </h4>
                  <ul className="space - y-1">"                    {solution.features.map ( (feature, idx) => (<li"                        key={idx}
                        className="text - sm text - gray - 300 flex items - center""                      >"                        <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2" />"                        {feature}"                      </li>) ) }
                  </ul>
                </div>

                <div className="flex items - center justify - between text - sm">"                  <span className="text - green - 400 font - semibold">"                    {solution.price}"                  </span>
                  <span className="text - gray - 400">{solution.timeline}</span>"                </div>"              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py - 20 px - 4 sm: px - 6 lg:px - 8">"        <div className="max - w-7xl mx - auto">"          <div className="text - center mb - 16">"            <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">"              Success Stories"            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">"              See how our sustainable technology solutions have transformed"              businesses across different industries
            </p>
          </div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">"            {successStories.map ( (story, index) => (<motion.div"                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20 hover:border - green - 400 / 40 transition - all duration - 300""              >"                <div className="flex items - center gap - 4 mb - 6">"                  <div className="w - 12 h - 12 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center text - white font - bold text - lg">"                    {story.logo}"                  </div>
                  <div>
                    <h3 className="text - xl font - bold text - white">"                      {story.comp}"                    </h3>
                    <p className="text - gray - 300 text - sm">{story.industry}</p>"                  </div>"                </div>

                <div className="space - y-4 mb - 6">"                  <div>"                    <h4 className="text - green - 400 font - semibold mb - 2">"                      Challenge"                    </h4>
                    <p className="text - gray - 300 text - sm">{story.challenge}</p>"                  </div>"                  <div>
                    <h4 className="text - green - 400 font - semibold mb - 2">"                      Solution"                    </h4>
                    <p className="text - gray - 300 text - sm">{story.solution}</p>"                  </div>"                  <div>
                    <h4 className="text - green - 400 font - semibold mb - 2">"                      Results"                    </h4>
                    <p className="text - gray - 300 text - sm">{story.results}</p>"                  </div>"                </div>

                <div className="flex items - center gap - 2">"                  {[...Array (5) ].map ( (_, i) => (<Star"                      key={i}
                      className="w - 4 h - 4 text - yellow - 400 fill - current""                    />) ) }"                  <span className="text - gray - 300 text - sm ml - 2">5.0 Rating</span>"                </div>"              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py - 20 bg - gradient - to - r from - green - 500 / 10 via - emerald - 500 / 10 to - green - 500 / 10">"        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8">"          <motion.div"            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text - center max - w-4xl mx - auto""          >"            <h2 className="text - 4xl font - bold text - white mb - 6">"              Ready for Sustainable Transformation?"            </h2>
            <p className="text - xl text - gray - 300 mb - 8 leading - relaxed">"              Let&apos;s discuss how sustainable technology can transform your''              business, reduce environmental impact, and create new'              opportunities for growth.
            </p>

            <div className="flex flex - col sm: flex - row gap - 4 justify - center">"              <a"                href="/contact""                className="px - 8 py - 4 bg - gradient - to - r from - green - 600 to - emerald - 600 text - white font - semibold rounded - xl hover:shadow - lg hover:shadow - green - 500 / 25 transition - all duration - 300 transform hover:scale - 105""              >"                Start Sustainability Project
              </a>
              <a
                href="/contact""                className="px - 8 py - 4 border border - green - 500 text - green - 400 font - semibold rounded - xl hover:bg - green - 500 hover:text - white transition - all duration - 300""              >"                Sustainability Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) ;
};

