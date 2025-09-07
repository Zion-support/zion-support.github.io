import React from 'react';''
import ServiceCard from '../components/ServiceCard';''
import Card from '../components/Card';'
const Services: React.FC = () => {
  const services = [
    {'
      title: 'AI Solutions',''
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',''
      icon: '🤖',']'
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']'
    },
    {'
      title: 'Cybersecurity',''
      description: 'Comprehensive security solutions to protect your digital assets.',''
      icon: '🔒',''
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']'
    },
    {'
      title: 'Cloud Infrastructure',''
      description: 'Scalable cloud solutions for modern businesses.',''
      icon: '☁️',''
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Automation', 'Cost Optimization']'
    },
    {'
      title: 'Digital Transformation',''
      description: 'Transform your business processes with digital solutions.',''
      icon: '🔄',''
      features: ['Process Automation', 'Data Analytics', 'Workflow Optimization', 'Change Management']'
    },
    {'
      title: 'IT Consulting',''
      description: 'Expert guidance for your technology strategy.',''
      icon: '💼',''
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Implementation Support']'
    },
    {'
      title: 'Support & Maintenance',''
      description: 'Ongoing support to keep your systems running smoothly.',''
      icon: '🛠️',''
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Technical Support']'
    }
  ];

  return ('
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">"
</div>"
      <div className="container mx-auto px-4 py-16">"
</div>"
        <div className="text-center mb-16">"
</div>"
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>""
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>
          </p>
        </div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
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
"
        <Card className="text-center">"
</Card>"
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>""
          <p className="text-lg text-gray-300 mb-8">"
</p>
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
            <a href="/contact" className="inline-block">"
</a>"
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">"
</button>
              </button>
            </a>"
            <a href="/pricing" className="inline-block">"
</a>"
              <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">"
</button>
              </button>
            </a>
          </div>
        </Card>
      </div>
    </div>)"