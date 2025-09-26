import { ArrowRight, Shield, Zap, Users, Globe, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark'>
      {/* Hero Section */}
      <section className='container mx-auto px-6 py-20'>
        <div className='text-center max-w-5xl mx-auto'>
          {/* Badge */}
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30'>
            <Star className='w-4 h-4 mr-2' />
            Trusted by 500+ companies worldwide
          </div>
          
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up'>
            <span className='bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent'>
              Zion Tech Group
            </span>
          </h1>
          
          <p className='text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in'>
            Leading the future of technology with innovative solutions, 
            cutting-edge AI, and transformative digital experiences that drive real business results.
          </p>
          
          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-zion-cyan'>500+</div>
              <div className='text-sm text-zion-slate-light'>Projects Delivered</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-zion-cyan'>99.9%</div>
              <div className='text-sm text-zion-slate-light'>Uptime SLA</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-zion-cyan'>24/7</div>
              <div className='text-sm text-zion-slate-light'>Support</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-zion-cyan'>5★</div>
              <div className='text-sm text-zion-slate-light'>Client Rating</div>
            </div>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='btn-primary flex items-center justify-center gap-2 group'>
              Explore Services
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
            <button className='btn-secondary'>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='container mx-auto px-6 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Why Choose Zion Tech Group?
          </h2>
          <p className='text-xl text-zion-slate-light max-w-2xl mx-auto'>
            We deliver exceptional technology solutions that drive business growth and innovation.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='card group hover:scale-105 transition-all duration-300'>
            <div className='bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30'>
              <Shield className='w-8 h-8 text-zion-blue-light' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>Enterprise Security</h3>
            <p className='text-zion-slate-light mb-4'>
              Advanced cybersecurity solutions protecting your business from evolving threats.
            </p>
            <ul className='space-y-2 text-sm text-zion-slate'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />SOC 2 Compliance</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />Penetration Testing</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />24/7 Monitoring</li>
            </ul>
          </div>
          
          <div className='card group hover:scale-105 transition-all duration-300'>
            <div className='bg-zion-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-purple/30 transition-colors border border-zion-purple/30'>
              <Zap className='w-8 h-8 text-zion-purple-light' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>AI Innovation</h3>
            <p className='text-zion-slate-light mb-4'>
              Cutting-edge artificial intelligence solutions that transform your operations.
            </p>
            <ul className='space-y-2 text-sm text-zion-slate'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />Machine Learning</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />Natural Language Processing</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />Computer Vision</li>
            </ul>
          </div>
          
          <div className='card group hover:scale-105 transition-all duration-300'>
            <div className='bg-zion-cyan/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-cyan/30 transition-colors border border-zion-cyan/30'>
              <Users className='w-8 h-8 text-zion-cyan' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>Expert Team</h3>
            <p className='text-zion-slate-light mb-4'>
              World-class engineers and consultants dedicated to your success.
            </p>
            <ul className='space-y-2 text-sm text-zion-slate'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />10+ Years Experience</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />Certified Professionals</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />Dedicated Support</li>
            </ul>
          </div>
          
          <div className='card group hover:scale-105 transition-all duration-300'>
            <div className='bg-zion-blue-light/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue-light/30 transition-colors border border-zion-blue-light/30'>
              <Globe className='w-8 h-8 text-zion-blue-light' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>Global Reach</h3>
            <p className='text-zion-slate-light mb-4'>
              Serving clients worldwide with localized expertise and support.
            </p>
            <ul className='space-y-2 text-sm text-zion-slate'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />50+ Countries</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />Local Support</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-zion-cyan' />24/7 Availability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-zion-slate-dark py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              What Our Clients Say
            </h2>
            <p className='text-xl text-zion-slate-light max-w-2xl mx-auto'>
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='card text-center'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                ))}
              </div>
              <p className='text-zion-slate-light mb-6 italic'>
                "Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%."
              </p>
              <div>
                <div className='font-semibold text-white'>Sarah Johnson</div>
                <div className='text-sm text-zion-slate'>CEO, TechCorp</div>
              </div>
            </div>
            
            <div className='card text-center'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                ))}
              </div>
              <p className='text-zion-slate-light mb-6 italic'>
                "Outstanding team and exceptional results. They delivered our mobile app ahead of schedule and under budget."
              </p>
              <div>
                <div className='font-semibold text-white'>Michael Chen</div>
                <div className='text-sm text-zion-slate'>CTO, InnovateLab</div>
              </div>
            </div>
            
            <div className='card text-center'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                ))}
              </div>
              <p className='text-zion-slate-light mb-6 italic'>
                "The security solutions they implemented gave us complete peace of mind. Highly recommended!"
              </p>
              <div>
                <div className='font-semibold text-white'>Emily Rodriguez</div>
                <div className='text-sm text-zion-slate'>Security Director, FinanceFirst</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-zion-blue to-zion-purple'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto'>
            Join thousands of companies that trust Zion Tech Group for their technology needs. 
            Let's build something amazing together.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105'>
              Start Your Journey Today
            </button>
            <button className='border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200'>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
