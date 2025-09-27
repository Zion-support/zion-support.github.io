import { ArrowRight, Shield, Zap, Users, Globe, Star, CheckCircle, Sparkles, Rocket, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className='min-h-screen hero-gradient relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' style={{animationDelay: '2s'}}></div>
        <div className='absolute top-40 left-1/2 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' style={{animationDelay: '4s'}}></div>
      </div>
      {/* Hero Section */}
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='text-center max-w-5xl mx-auto'>
          {/* Badge */}
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in border border-cyan-500/30 shadow-lg hover:shadow-xl transition-all duration-300'>
            <Sparkles className='w-4 h-4 mr-2 animate-pulse' />
            Trusted by 500+ companies worldwide
            <Rocket className='w-4 h-4 ml-2 animate-bounce' />
          </div>
          
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up'>
            <span className='gradient-text animate-gradient bg-300%'>
              Zion Tech Group
            </span>
          </h1>
          
          <p className='text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in'>
            Leading the future of technology with innovative solutions, 
            cutting-edge AI, and transformative digital experiences that drive real business results.
          </p>
          
          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto'>
            <div className='text-center group hover:scale-105 transition-all duration-300'>
              <div className='text-3xl font-bold text-cyan-500 group-hover:text-blue-400 transition-colors'>500+</div>
              <div className='text-sm text-slate-300'>Projects Delivered</div>
            </div>
            <div className='text-center group hover:scale-105 transition-all duration-300'>
              <div className='text-3xl font-bold text-cyan-500 group-hover:text-blue-400 transition-colors'>99.9%</div>
              <div className='text-sm text-slate-300'>Uptime SLA</div>
            </div>
            <div className='text-center group hover:scale-105 transition-all duration-300'>
              <div className='text-3xl font-bold text-cyan-500 group-hover:text-blue-400 transition-colors'>24/7</div>
              <div className='text-sm text-slate-300'>Support</div>
            </div>
            <div className='text-center group hover:scale-105 transition-all duration-300'>
              <div className='text-3xl font-bold text-cyan-500 group-hover:text-blue-400 transition-colors'>5★</div>
              <div className='text-sm text-slate-300'>Client Rating</div>
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
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4 animate-slide-up'>
            Why Choose Zion Tech Group?
          </h2>
          <p className='text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in'>
            We deliver exceptional technology solutions that drive business growth and innovation.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='card group hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
            <div className='bg-blue-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors border border-blue-600/30 shadow-lg'>
              <Shield className='w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>Enterprise Security</h3>
            <p className='text-slate-300 mb-4'>
              Advanced cybersecurity solutions protecting your business from evolving threats.
            </p>
            <ul className='space-y-2 text-sm text-slate-500'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />SOC 2 Compliance</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />Penetration Testing</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />24/7 Monitoring</li>
            </ul>
          </div>
          
          <div className='card group hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
            <div className='bg-purple-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors border border-purple-600/30 shadow-lg'>
              <Zap className='w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>AI Innovation</h3>
            <p className='text-slate-300 mb-4'>
              Cutting-edge artificial intelligence solutions that transform your operations.
            </p>
            <ul className='space-y-2 text-sm text-slate-500'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />Machine Learning</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />Natural Language Processing</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />Computer Vision</li>
            </ul>
          </div>
          
          <div className='card group hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
            <div className='bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors border border-cyan-500/30 shadow-lg'>
              <Users className='w-8 h-8 text-cyan-500 group-hover:scale-110 transition-transform duration-300' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>Expert Team</h3>
            <p className='text-slate-300 mb-4'>
              World-class engineers and consultants dedicated to your success.
            </p>
            <ul className='space-y-2 text-sm text-slate-500'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />10+ Years Experience</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />Certified Professionals</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />Dedicated Support</li>
            </ul>
          </div>
          
          <div className='card group hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
            <div className='bg-blue-400/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-400/30 transition-colors border border-blue-400/30 shadow-lg'>
              <Globe className='w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-4'>Global Reach</h3>
            <p className='text-slate-300 mb-4'>
              Serving clients worldwide with localized expertise and support.
            </p>
            <ul className='space-y-2 text-sm text-slate-500'>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />50+ Countries</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />Local Support</li>
              <li className='flex items-center'><CheckCircle className='w-4 h-4 mr-2 text-cyan-500' />24/7 Availability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-slate-500-dark py-20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50'></div>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4 animate-slide-up'>
              What Our Clients Say
            </h2>
            <p className='text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in'>
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current animate-pulse' style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <p className='text-slate-300 mb-6 italic'>
                &ldquo;Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%.&rdquo;
              </p>
              <div>
                <div className='font-semibold text-white'>Sarah Johnson</div>
                <div className='text-sm text-slate-500'>CEO, TechCorp</div>
              </div>
            </div>
            
            <div className='card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current animate-pulse' style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <p className='text-slate-300 mb-6 italic'>
                &ldquo;Outstanding team and exceptional results. They delivered our mobile app ahead of schedule and under budget.&rdquo;
              </p>
              <div>
                <div className='font-semibold text-white'>Michael Chen</div>
                <div className='text-sm text-slate-500'>CTO, InnovateLab</div>
              </div>
            </div>
            
            <div className='card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current animate-pulse' style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <p className='text-slate-300 mb-6 italic'>
                &ldquo;The security solutions they implemented gave us complete peace of mind. Highly recommended!&rdquo;
              </p>
              <div>
                <div className='font-semibold text-white'>Emily Rodriguez</div>
                <div className='text-sm text-slate-500'>Security Director, FinanceFirst</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='container mx-auto px-6 text-center relative z-10'>
          <h2 className='text-4xl font-bold text-white mb-6 animate-slide-up'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in'>
            Join thousands of companies that trust Zion Tech Group for their technology needs. 
            Let&apos;s build something amazing together.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-blue-600 hover:bg-slate-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group'>
              <Target className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
              Start Your Journey Today
            </button>
            <button className='border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
