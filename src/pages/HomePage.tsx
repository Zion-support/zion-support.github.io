import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                Zion Tech Group
              </span>
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Revolutionary AI solutions for enterprise. Transform your business
              with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous
              Operations.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Get Started Today
              </Link>
              <Link
                to='/services'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Enterprise-Grade AI Solutions
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Cutting-edge technology that drives innovation and delivers
              measurable results
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
              <Award className='w-12 h-12 text-blue-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-3'>
                AI Excellence
              </h3>
              <p className='text-gray-300'>
                Award-winning AI solutions trusted by Fortune 500 companies
                worldwide.
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
              <Users className='w-12 h-12 text-purple-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-3'>
                Expert Team
              </h3>
              <p className='text-gray-300'>
                World-class AI engineers and researchers with decades of
                combined experience.
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
              <Globe className='w-12 h-12 text-green-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-3'>
                Global Impact
              </h3>
              <p className='text-gray-300'>
                Transforming businesses across industries with scalable AI
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Join the AI revolution and unlock the full potential of your
            enterprise with our cutting-edge solutions.
          </p>
          <Link
            to='/contact'
            className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center'
          >
            Start Your Journey
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React from "react"; impo, r, t { Helm, e, t; } fr, o, m "rea, c, t-helm, e, t-asy, n, c"; import, ContentShowcase, from "../componen, t, s/ContentShowca, s, e"; import, FeaturedServiceCard, from "../componen, t, s/FeaturedServiceCa, r, d"; import, SuccessStoriesShowcase, from "../componen, t, s/SuccessStoriesShowca, s, e"; import, LatestInsights, from "../componen, t, s/LatestInsigh, t, s"; const, HomePag, e: Rea, c, t.FC = () => { return ( <> <Helmet> <title>Zion, Tech, Group - Advanced, AI, and IT, Solution, s</title> <meta name="descripti, o, n" content="Leading, provider, of AI-powered, IT, solutions, digital, transformatio, n, and, enterprise, automation servic, e, s." /> <meta name="keywor, d, s" content="AI, solution, s, IT, service, s, digital, transformatio, n, enterprise, automatio, n, cloud, computin, g" /> </Helmet> <div, className="container mx-auto px-4 py-8" > {/* Hero, Sectio, n */} <section, className="text-center mb-12" > <h1, className="te, x, t-4xl, m, d:te, x, t-6xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6" > Advanced, A, I & IT, Solution, s; </h1> <p, className="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-auto, m, b-8" > Transform, your, business with, cuttin, g-edge, AI, technologies, cloud, solution, s and, digital, innovation strategi, e, s. </p> <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r" > <button, className="bg-bl, u, e-600, tex, t-white, p, x-8, p, y-3, rounde, d-lg, hove, r:bg-bl, u, e-700, transitio, n-colo, r, s" > Get, Starte, d; </butt, o, n> <button, className="border, borde, r-bl, u, e-600, tex, t-bl, u, e-600, p, x-8, p, y-3, rounde, d-lg, hov, e r:bg-bl, u, e-50, transitio, n-colo, r, s" > Learn, Mor, e; </butt, o, n> </d, i, v> </secti, o, n> {/* Featured, Service, s */} <section, className="mb-12" > <h2, className="te, x, t-3xl, fon, t-bold, tex, t-center, m, b-8" >Our, Service, s</h2> <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2 l g:gr, i, d-co, l, s-3, ga, p-6" > <FeaturedServiceCa, r, d tit, l, e="AI, Solution, s" descripti, o, n="Advanced, artificial, intelligence implementations, for, enterprise nee, d, s" ic, o, n="🤖" /> <FeaturedServiceCa, r, d tit, l, e="Cloud, Computin, g" descripti, o, n="Scalable, cloud, infrastructure and, migration, services" ic, o, n="☁️" /> <FeaturedServiceCa, r, d tit, l, e="Digital, Transformatio, n" descripti, o, n="Complete, digital, modernization strategi, e, s" ic, o, n="🚀" /> </d, i, v> </secti, o, n> {/* Content, Showcas, e */} <ContentShowca, s, e /> {/* Success, Storie, s */} <SuccessStoriesShowca, s, e /> {/* Latest, Insight, s */} <LatestInsigh, t, s /> </d, i, v> < /> ); }; export default HomePage;
