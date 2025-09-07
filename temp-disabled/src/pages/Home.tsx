
import React from 'react';'''
import { Link } from 'react-router-dom';'''
import Button from '../components/Button';'''
import Card from '../components/Card';'''

import ServiceCard from '../components/ServiceCard';'
const Home: React.FC = () => {
  const services = ['
    {''
      title: 'AI Solutions','''
      description: 'Cutting-edge artificial intelligence solutions for your business needs.','''
      icon: '🤖',']''
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']'
    },'
    {''
      title: 'IT Services','''
      description: 'Comprehensive IT services and infrastructure management.','''
      icon: '💻','''
      features: ['Cloud Migration', 'System Administration', 'Network Security']'
    },'
    {''
      title: 'Cloud Solutions','''
      description: 'Scalable cloud infrastructure and migration services.','''
      icon: '☁️','''
      features: ['AWS', 'Azure', 'Google Cloud']'
    }
  ];
'
  return ('
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">""
</div>""
      <section className="pt-20 pb-16 px-4">""
</section>""
        <div className="container mx-auto text-center">""
</div>""
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">"
</h1>"
          </h1>""
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">"
</p>"
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">""
</div>""
            <Button variant="primary" size="large">"
</Button>"
            </Button>""
            <Button variant="outline" size="large">"
</Button>
            </Button>
          </div>
        </div>"
      </section>""
      <section className="py-16 px-4">""
</section>""
        <div className="container mx-auto">""
</div>""
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>"""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
              <ServiceCard;
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
</ServiceCard>
          </div>
        </div>"
      </section>""
      <section className="py-16 px-4 bg-slate-800">""
</section>""
        <div className="container mx-auto text-center">""
</div>""
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>"""
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">"
</p>"
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">""
</div>""
            <Link to="/contact">""
</Link>""
              <Button variant="primary" size="large">"
</Button>
              </Button>"
            </Link>""
            <Link to="/services">""
</Link>""
              <Button variant="outline" size="large">"
</Button>
              </Button>
            </Link>
          </div>
        </div>

      </section>"
    </div>)"'"

