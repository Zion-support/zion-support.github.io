import React from 'react';"''
import React from 'react';'
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket,
  CheckCircle,
  TrendingUp,;"
  Globe,;"'"
  Clock;",''
} from 'lucide-react';

export function HomePage() {
  const features = ["
    {"'"
      icon: Brain,"'"'"
      title: 'AI-Powered Solutions',"'"'"
      description: 'Cutting-edge artificial intelligence and machine learning services',"''
      color: 'from-purple-500 to-pink-500',
},"
    {"'"
      icon: Cloud,"'"'"
      title: 'Cloud Excellence',"'"'"
      description: 'Scalable cloud infrastructure and migration services',"''
      color: 'from-blue-500 to-cyan-500',
},"
    {"'"
      icon: Shield,"'"'"
      title: 'Cybersecurity',"'"'"
      description: 'Advanced security and compliance solutions',"''
      color: 'from-green-500 to-emerald-500',
},"
    {"'"
      icon: Rocket,"'"'"
      title: 'Digital Transformation',"'"'"
      description: 'End-to-end business transformation services',"''
      color: 'from-orange-500 to-red-500',
};
  ];"
"'"
  const stats = ["'"'"
    { number: '500+', label: 'Happy Clients', icon: Users },"'"'"
    { number: '99.9%', label: 'Uptime', icon: Award },"'"'"
    { number: '24/7', label: 'Support', icon: Clock },"''
    { number: '50+', label: 'Countries', icon: Globe };
  ];
"
  const testimonials = ["'"
    {"'"'"
      name: 'Sarah Johnson',"'"'"
      title: 'CTO at TechCorp',"''
      content: 'Zion Tech Group transformed our infrastructure completely. Their expertise is unmatched.',
      rating: 5,"
},"'"
    {"'"'"
      name: 'Michael Chen',"'"'"
      title: 'VP Engineering',"''
      content: 'The AI solutions they implemented increased our efficiency by 300%. Incredible results!',
      rating: 5,"
},"'"
    {"'"'"
      name: 'Emily Rodriguez',"'"'"
      title: 'Operations Director',"''
      content: 'Professional, reliable, and innovative. They delivered beyond our expectations.',
      rating: 5,
};
  ];"
""
  return ("""
    <div className="min-h-screen bg-zion-blue-dark"></div>""
      {/* Hero Section */}"""
      <section className="relative overflow-hidden"></section>"'"
        {/* Background Pattern */}"'"'"
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" /" ></div>""
        """
        <div className="container mx-auto px-4 py-20 relative z-10"></div>"""
          <div className="text-center max-w-4xl mx-auto"></div>"""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>""
              Innovating""'"
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"></span>"''
                {' '}Tomorrow"
              </span>""
            </h1>"""
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed"></p>
              Empowering businesses with cutting-edge technology solutions, AI-driven insights, "
              and transformative digital strategies for the future.""
            </p>"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>""
              <Link """
                to="/services"""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 hover:-translate-y-1"" ></Link>""
                Explore Services"""
                <ArrowRight className="ml-2 h-5 w-5" /" ></ArrowRight>"
              </Link>""
              <Link """
                to="/contact"""
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300"" ></Link>
                Get Started
              </Link>
            </div>
          </div>
        </div>"
""
        {/* Floating Elements */}""'"
        <div className="absolute top-20 left-10 w-2 h-2 bg-zion-cyan/30 rounded-full animate-pulse" /" ></div>"'"'"
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-zion-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} /" ></div>"'"'"
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-zion-cyan/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} /" ></div>
      </section>"
""
      {/* Features Section */}"""
      <section className="py-20"></section>"""
        <div className="container mx-auto px-4"></div>"""
          <div className="text-center mb-16"></div>"""
            <h2 className="text-4xl font-bold text-white mb-4"></h2>"
              Why Choose Zion Tech Group?""
            </h2>"""
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto"></p>
              We combine innovation with reliability to deliver solutions that drive real business value
            </p>"
          </div>""
"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>""
            {features.map((feature, index) => ("""
              <div key={index} className="text-center group"></div>""
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}" ></div>"""
                  <feature .icon className="h-8 w-8 text-white" /" ></feature>""
                </div>"""
                <h3 className="text-xl font-semibold text-white mb-3"></h3>"
                  {feature.title}""
                </h3>"""
                <p className="text-zion-slate-light leading-relaxed"></p>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Stats Section */}"""
      <section className="py-20 bg-zion-blue-dark/50"></section>"""
        <div className="container mx-auto px-4"></div>"""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>""
            {stats.map((stat, index) => ("""
              <div key={index} className="text-center"></div>"""
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-zion-purple/20 flex items-center justify-center"></div>"""
                  <stat .icon className="h-6 w-6 text-zion-cyan" /" ></stat>""
                </div>"""
                <div className="text-3xl font-bold text-white mb-2"></div>"
                  {stat.number}""
                </div>"""
                <div className="text-zion-slate-light"></div>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Services Preview */}"""
      <section className="py-20"></section>"""
        <div className="container mx-auto px-4"></div>"""
          <div className="text-center mb-16"></div>"""
            <h2 className="text-4xl font-bold text-white mb-4"></h2>"
              Our Core Services""
            </h2>"""
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto"></p>
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>"
          </div>""
"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"""
            <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"></div>"""
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"></div>"""
                <Brain className="h-6 w-6 text-white" /" ></Brain>""
              </div>"""
              <h3 className="text-xl font-semibold text-white mb-3"></h>AI & Machine Learning</h3>"""
              <p className="text-zion-slate-light mb-4"></p>"
                Intelligent solutions that learn, adapt, and optimize your business processes""
              </p>"""
              <Link to="/services/ai" className="inline-flex items-center text-zion-cyan hover:text-white transition-colors"></Link>"""
                Learn More <ArrowRight className="ml-1 h-4 w-4" /" ></ArrowRight>
              </Link>"
            </div>""
"""
            <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"></div>"""
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"></div>"""
                <Cloud className="h-6 w-6 text-white" /" ></Cloud>""
              </div>"""
              <h3 className="text-xl font-semibold text-white mb-3"></h>Cloud Solutions</h3>"""
              <p className="text-zion-slate-light mb-4"></p>"
                Scalable cloud infrastructure and migration services for modern businesses""
              </p>"""
              <Link to="/services/cloud" className="inline-flex items-center text-zion-cyan hover:text-white transition-colors"></Link>"""
                Learn More <ArrowRight className="ml-1 h-4 w-4" /" ></ArrowRight>
              </Link>"
            </div>""
"""
            <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"></div>"""
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"></div>"""
                <Shield className="h-6 w-6 text-white" /" ></Shield>""
              </div>"""
              <h3 className="text-xl font-semibold text-white mb-3"></h>Cybersecurity</h3>"""
              <p className="text-zion-slate-light mb-4"></p>"
                Advanced security solutions to protect your digital assets and ensure compliance""
              </p>"""
              <Link to="/services/cybersecurity" className="inline-flex items-center text-zion-cyan hover:text-white transition-colors"></Link>"""
                Learn More <ArrowRight className="ml-1 h-4 w-4" /" ></ArrowRight>
              </Link>
            </div>"
          </div>""
"""
          <div className="text-center mt-12"></div>""
            <Link """
              to="/services"""
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25"" ></Link>""
              View All Services"""
              <ArrowRight className="ml-2 h-5 w-5" /" ></ArrowRight>
            </Link>
          </div>
        </div>
      </section>"
""
      {/* Testimonials */}"""
      <section className="py-20 bg-zion-blue-dark/50"></section>"""
        <div className="container mx-auto px-4"></div>"""
          <div className="text-center mb-16"></div>"""
            <h2 className="text-4xl font-bold text-white mb-4"></h2>"
              What Our Clients Say""
            </h2>""'"
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto"></p>"''
              Don't just take our word for it - hear from the businesses we've transformed
            </p>"
          </div>""
"""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>""
            {testimonials.map((testimonial, index) => ("""
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6"></div>"""
                <div className="flex items-center mb-4"></div>""
                  {[...Array(testimonial.rating)].map((_, i) => ("""
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" /" ></Star>"
                  ))}""
                </div>"""
                <p className="text-zion-slate-light mb-4 italic"></p>"""
                  "{testimonial.content}""
                </p>""
                <div></div>"""
                  <div className="font-semibold text-white"></di>{testimonial.name}</div>"""
                  <div className="text-zion-cyan text-sm"></di>{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* CTA Section */}"""
      <section className="py-20"></section>"""
        <div className="container mx-auto px-4"></div>"""
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12 text-center"></div>"""
            <h2 className="text-4xl font-bold text-white mb-4"></h2>"
              Ready to Transform Your Business?""
            </h2>""'"
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto"></p>"''"
              Let's discuss how our technology solutions can drive innovation and growth for your organization""
            </p>"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>""
              <Link """
                to="/contact"""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25"" ></Link>""
                Get Free Consultation"""
                <ArrowRight className="ml-2 h-5 w-5" /" ></ArrowRight>"
              </Link>""
              <Link """
                to="/case-studies"""
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300"" ></Link>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>"
  );,"'"
}"`'"'"