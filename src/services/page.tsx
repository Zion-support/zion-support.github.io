import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car, Target, Globe, Cpu, Smartphone, FileText, Bot, Music, Video, CreditCard, Train, Home, Heart, GraduationCap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { microSaasServices, aiServices, itServices, specializedServices } from '../data/2025-comprehensive-real-services-enhanced';

const ServicesPage: React.FC = () => {
  const aiServicesData = aiServices.map(service => ({
    icon: Brain,
    title: service.name,
    description: service.description,
    features: service.features.slice(0, 4),
    price: `Starting at $${service.pricing.starter.price.toLocaleString()}/month`,
    popular: service.pricing.starter.price < 3000,
    link: service.website.replace('https://ziontechgroup.com', '')
  }));

  const itServicesData = itServices.map(service => ({
    icon: Database,
    title: service.name,
    description: service.description,
    features: service.features.slice(0, 4),
    price: `Starting at $${service.pricing.starter.price.toLocaleString()}/month`,
    popular: service.pricing.starter.price < 2000,
    link: service.website.replace('https://ziontechgroup.com', '')
  }));

  const microSaasServicesData = microSaasServices.map(service => ({
    icon: BarChart3,
    title: service.name,
    description: service.description,
    features: service.features.slice(0, 4),
    price: `$${service.pricing.starter.price}/month`,
    popular: service.pricing.starter.price < 200,
    link: service.website.replace('https://ziontechgroup.com', '')
  }));

  ];

  ];

            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth
            </p>
              </a>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </Link>
          </div>
        </div>
      </section>

              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions to automate, optimize, and transform your business
            </p>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Robust IT infrastructure and support services to keep your business running smoothly
            </p>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

              Micro SAAS Solutions
            </h2>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

              We deliver exceptional results with proven expertise and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

              </a>
              <Link
              </Link>
  );
};

export default ServicesPage;


