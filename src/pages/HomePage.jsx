
} from 'lucide-react';

export function HomePage() {const features = [{
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services',
      color: 'from-purple-500 to-pink-500'
    }, {icon: Cloud,
      title: 'Cloud Excellence',
      description: 'Scalable cloud infrastructure and migration services',
      color: 'from-blue-500 to-cyan-500'
    }, {icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security and compliance solutions',
      color: 'from-green-500 to-emerald-500'
    }, {icon: Rocket,
      title: 'Digital Transformation',
      description: 'End-to-end business transformation services',
      color: 'from-orange-500 to-red-500'
    }
  ];


      title: 'CTO at TechCorp',
      content: 'Zion Tech Group transformed our infrastructure completely. Their expertise is unmatched.',
      rating: 5
    },

      title: 'VP Engineering',
      content: 'The AI solutions they implemented increased our efficiency by 300%. Incredible results!',
      rating: 5
    },

      title: 'Operations Director' }
  ];

  return (""
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}""
      <section className="relative overflow-hidden">

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions, AI-driven insights, 
              and transformative digital strategies for the future.
            </p>""
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link ""
                to="/services"

              </Link>
              <Link ""
                to="/contact"



                Get Started
              </Link>
            </div>
          </div>
        </div>


        <div className="absolute top-20 left-10 w-2 h-2 bg-zion-cyan/30 rounded-full animate-pulse" /" >"
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-zion-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} /" >"
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-zion-cyan/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} /" >"
      </section>

      {/* Features Section */}""
      <section className="py-20">""
        <div className="container mx-auto px-4">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>""

            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We combine innovation with reliability to deliver solutions that drive real business value
            </p>
          </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>""

                <p className="text-zion-slate-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>""

                <div className="text-zion-slate-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>

                <Brain className="h-6 w-6 text-white" />
              </div>"
              <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>"
              <p className="text-zion-slate-light mb-4">
                Intelligent solutions that learn, adapt, and optimize your business processes

                Learn More <ArrowRight className="ml-1 h-4 w-4" />

              </Link>
            </div>

              <ArrowRight className="ml-2 h-5 w-5" />

            </Link>
          </div>
        </div>
      </section>


                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (""
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" /" >"
                  ))}

                </p>

                  <div className="text-zion-cyan text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


              </Link>
              <Link ""
                to="/case-studies"



                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>


