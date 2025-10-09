import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone ,  Users,  TrendingUp,  Shield from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const testPagetsx: React.FC = () => {
  const _features = [
    {
 icon: Users,
      title: 'Advanced Features',
      description: 'Cutting-edge solutions powered by artificial intelligence and machine learning',
      benefits: ['Improved efficiency', 'Better results', 'Cost savings'];
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimized performance and scalability for enterprise-grade applications',
      benefits: ['Faster processing', 'Better scalability', 'Enhanced reliability']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection',
      benefits: ['Data protection', 'Compliance', 'Secure operations']
    }
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white"></div>
      <Helmet>
        <title>testtsx - Zion Tech Group</title>
        <meta name="description" content="Advanced testtsx solutions powered by AI and cutting-edge technology" />
      </Helmet>
      <Navigation />
      <main className="pt-20"></main>
        {/* Hero Section */}
        <section className="py-20 px-4"></section>
          </section></div>
            </div>
              testtsx
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced testtsx solutions powered by AI and cutting-edge technology
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              </div>
                Get Started
              </a>
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                View Demo
              </a>
            </div>
          </div>
        </div>
        {/* Features Section */ }
        <section className="py-16 px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-center mb-12"></h2>Key Features</h2>
            </h2></div>
              {_features.map((feature;;, index) => (
                </div></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        </section></section>
          </section></div>
            </div></h2>Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">Contact us today for a free consultation and customized solution</p>
            <a href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover: bg-cyan-600 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
 };
export default testPagetsx;