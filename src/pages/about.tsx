import React from 'react';
import { Users, Target, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through exceptional service and results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer support.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We serve clients worldwide, bringing diverse perspectives and localized expertise to every project.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden'>
      <Navigation />
      
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' style={{animationDelay: '2s'}}></div>
        <div className='absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up'>
            <span className='bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent'>
              About Zion Tech Group
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed animate-fade-in'>
            We are pioneers in technology, dedicated to transforming businesses through innovative solutions, 
            cutting-edge AI, and exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl font-bold text-white mb-6'>
              Our Mission
            </h2>
            <p className='text-lg text-zion-slate-light mb-6 leading-relaxed'>
              To empower businesses worldwide with transformative technology solutions that drive growth, 
              innovation, and sustainable success in the digital age.
            </p>
            <p className='text-lg text-zion-slate-light mb-8 leading-relaxed'>
              We believe technology should be accessible, powerful, and purpose-driven. Our team of experts 
              works tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <button className='bg-gradient-to-r from-zion-cyan to-zion-purple-light text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105 flex items-center gap-2'>
              Learn More About Our Services
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            {achievements.map((achievement, index) => (
              <div key={index} className='text-center p-6 bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300'>
                <div className='text-3xl font-bold text-zion-cyan mb-2'>{achievement.number}</div>
                <div className='text-sm text-zion-slate-light'>{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Our Core Values
          </h2>
          <p className='text-xl text-zion-slate-light max-w-2xl mx-auto'>
            The principles that guide everything we do and every solution we create.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value, index) => (
            <div key={index} className='text-center group hover:scale-105 transition-all duration-300'>
              <div className='bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30 shadow-lg'>
                <value.icon className='w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>{value.title}</h3>
              <p className='text-zion-slate-light leading-relaxed'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Meet Our Team
          </h2>
          <p className='text-xl text-zion-slate-light max-w-2xl mx-auto'>
            World-class engineers, designers, and strategists dedicated to your success.
          </p>
        </div>
        
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center group hover:scale-105 transition-all duration-300'>
            <div className='w-32 h-32 bg-gradient-to-r from-zion-cyan to-zion-purple-light rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold'>
              JD
            </div>
            <h3 className='text-xl font-semibold text-white mb-2'>John Doe</h3>
            <p className='text-zion-cyan mb-4'>CEO & Founder</p>
            <p className='text-zion-slate-light text-sm'>
              Visionary leader with 15+ years in technology and business transformation.
            </p>
          </div>
          
          <div className='text-center group hover:scale-105 transition-all duration-300'>
            <div className='w-32 h-32 bg-gradient-to-r from-zion-purple-light to-zion-blue-light rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold'>
              JS
            </div>
            <h3 className='text-xl font-semibold text-white mb-2'>Jane Smith</h3>
            <p className='text-zion-cyan mb-4'>CTO</p>
            <p className='text-zion-slate-light text-sm'>
              Technical architect specializing in AI, cloud infrastructure, and scalable systems.
            </p>
          </div>
          
          <div className='text-center group hover:scale-105 transition-all duration-300'>
            <div className='w-32 h-32 bg-gradient-to-r from-zion-blue-light to-zion-cyan rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold'>
              MJ
            </div>
            <h3 className='text-xl font-semibold text-white mb-2'>Mike Johnson</h3>
            <p className='text-zion-cyan mb-4'>Head of Design</p>
            <p className='text-zion-slate-light text-sm'>
              Creative director focused on user experience and innovative design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Work With Us?
          </h2>
          <p className='text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto'>
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group'>
              <Target className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
              Start Your Project
            </button>
            <button className='border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;