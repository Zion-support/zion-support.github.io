import React from 'react';
import { SEO } from '../components/SEO';

const Home: React.FC = () => {
  return(<>
      <SEO 
        title="Zion Tech Group - Leading Technology Solutions"
        description="Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services."
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Our Services
              </a>
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                Get Started
            </div>
        </section>
    </>
  )};
import { SEO } from '../components/SEO';''const Home: React.FC = () => {'
  return (
    <>
        title="Zion Tech Group - Leading Technology Solutions""        description="Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.""      />"      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">"        <section className="relative py-20 px-4">"          <div className="max-w-7xl mx-auto text-center">"            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">"              Zion Tech Group"            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">"              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services."            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"              <a "                href="/services" "                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors""              >"                Our Services</a>"
                href="/contact" "                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors""              >"                Get Started</a>"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {SEO } from '@/components/SEO';

export default function Home() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Home - Zion Tech Group" description="Professional Home services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
        <p className="text-gray-300 text-lg">
          Professional Home services to help your business grow.
        </p>
  )}
import React from &apos;
import Link from &apos;next/link';react';
import { motion } from &apos;framer-motion';
import { Link } from &apos;react-router-dom';
import { SEO } from &apos;../components/SEO';
import EnhancedHero from &apos;../components/EnhancedHero';
import { 
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, 
  Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, ;
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle, ;
  Phone, Mail, MapPin} from &apos;lucide-react';&apos;&apos;
import { motion} from 'framer-motion';
import { Link} from 'react-router-dom';
import { SEO} from '../components/SEO';
import EnhancedHero from '../components/EnhancedHero';
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, ;
  Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, ;
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle, ;
  Phone, Mail, MapPin } from 'lucide-react';
;
export default React.memo(function Home() {
  const features = [ {
      icon: Brain, ;
      title: 'AI-Powered Solutions', ;
      description: 'Cutting-edge artificial intelligence that transforms business operations and drives innovation.', ;
      color: 'from-purple-500 to-pink-500' }, {
      icon: Atom, ;
      title: 'Quantum Computing', ;
      description: 'Next-generation quantum solutions that solve complex problems beyond classical computing.', ;
      color: 'from-orange-500 to-red-500' }, {
      icon: Rocket, ;
      title: 'Micro SAAS Platform', ;
      description: 'Innovative software-as-a-service solutions that scale with your business needs.', ;
      color: 'from-blue-500 to-cyan-500' }, {
      icon: Shield, ;
      title: 'Enterprise Security', ;
      description: 'Military-grade cybersecurity and compliance solutions for enterprise protection.', ;
      color: 'from-green-500 to-emerald-500' }
  ]
  const stats = [ { number: '500+', label: 'Projects Completed', icon: CheckCircle }, { number: '50+', label: 'Team Members', icon: Users }, { number: '25+', label: 'Countries Served', icon: Globe }, { number: '99%', label: 'Client Satisfaction', icon: Star }
  const services = [ {
      title: 'AI Services', ;
      description: 'Comprehensive AI solutions for business automation and intelligence', ;
      href: '/ai-services', ;
      title: 'IT Infrastructure', ;
      description: 'Enterprise-grade IT solutions and cloud architecture', ;
      href: '/it-services', ;
      icon: Server, ;
      color: 'from-green-500 to-emerald-500' }, {
      title: 'Quantum Solutions', ;
      description: 'Cutting-edge quantum computing and technology services', ;
      href: '/services/quantum-computing', ;
      title: 'Micro SAAS', ;
      description: 'Innovative software solutions for modern businesses', ;
      href: '/micro-saas', ;
      color: 'from-blue-500 to-cyan-500' }
  return (;
    <>;
      <SEO ;
        title="Zion Tech Group - Leading AI & Quantum Technology Solutions";
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise-grade technology solutions for the future.";
        keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions";
      />;
      <EnhancedHero />;
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {stats.map((stat, index) => (;
              <motion.div;
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, 
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle, Phone, Mail, MapPin} from 'lucide-react';

export default React.memo(function Home() {}
  const features = [
    { icon: Brain, title: 'AI-Powered Solutions' { 
      icon: Brain, 
      title: &apos;AI-Powered Solutions&apos, 
      description: &apos;Cutting-edge artificial intelligence that transforms business operations and drives innovation.&apos, 
      color: &apos;from-purple-500 to-pink-500&apos} { 
      icon: Atom, 
      title: &apos;Quantum Computing&apos, 
      description: &apos;Next-generation quantum solutions that solve complex problems beyond classical computing.&apos, 
      color: &apos;from-orange-500 to-red-500&apos} { 
      icon: Rocket, 
      title: &apos;Micro SAAS Platform&apos, 
      description: &apos;Innovative software-as-a-service solutions that scale with your business needs.&apos, 
      color: &apos;from-blue-500 to-cyan-500&apos} { 
      icon: Shield, 
      title: &apos;Enterprise Security&apos, 
      description: &apos;Military-grade cybersecurity and compliance solutions for enterprise protection.&apos, 
      color: &apos;from-green-500 to-emerald-500&apos; 
      icon: Brain, title: 'AI-Powered Solutions', 
      description: 'Cutting-edge artificial intelligence that transforms business operations and drives innovation.', color: 'from-purple-500 to-pink-500' } { icon: Atom, title: 'Quantum Computing', 
      description: 'Next-generation quantum solutions that solve complex problems beyond classical computing.', color: 'from-orange-500 to-red-500' } { icon: Rocket, title: 'Micro SAAS Platform', 
      description: 'Innovative software-as-a-service solutions that scale with your business needs.', color: 'from-blue-500 to-cyan-500' } { icon: Shield, title: 'Enterprise Security', 
      description: 'Military-grade cybersecurity and compliance solutions for enterprise protection.', color: 'from-green-500 to-emerald-500' }
  ]&apos;

  const stats = [
    { number: &apos;500+&apos, label: &apos;Projects Completed&apos, icon: CheckCircle } { number: &apos;50+&apos, label: &apos;Team Members&apos, icon: Users } { number: &apos;25+&apos, label: &apos;Countries Served&apos, icon: Globe } { number: &apos;99%&apos, label: &apos;Client Satisfaction&apos, icon: Star }

  const services = [
    { 
      title: &apos;AI Services&apos, 
      description: &apos;Comprehensive AI solutions for business automation and intelligence&apos, 
      href: &apos;/ai-services&apos, 
      title: &apos;IT Infrastructure&apos, 
      description: &apos;Enterprise-grade IT solutions and cloud architecture&apos, 
      href: &apos;/it-services&apos, 
      icon: Server, 
      color: &apos;from-green-500 to-emerald-500&apos} { 
      title: &apos;Quantum Solutions&apos, 
      description: &apos;Cutting-edge quantum computing and technology services&apos, 
      href: &apos;/services/quantum-computing&apos, 
      title: &apos;Micro SAAS&apos, 
      description: &apos;Innovative software solutions for modern businesses&apos, 
      href: &apos;/micro-saas&apos, 
      color: &apos;from-blue-500 to-cyan-500&apos { number: '500+', label: 'Projects Completed', icon: CheckCircle } { number: '50+', label: 'Team Members', icon: Users } { number: '25+', label: 'Countries Served', icon: Globe } { number: '99%', label: 'Client Satisfaction', icon: Star }

    { title: 'AI Services', description: 'Comprehensive AI solutions for business automation and intelligence', 
      href: '/ai-services', icon: Brain, 
      color: 'from-purple-500 to-pink-500' } { title: 'IT Infrastructure', 
      description: 'Enterprise-grade IT solutions and cloud architecture', href: '/it-services', 
      icon: Server, color: 'from-green-500 to-emerald-500' } { title: 'Quantum Solutions', description: 'Cutting-edge quantum computing and technology services', 
      href: '/services/quantum-computing', icon: Atom, 
      color: 'from-orange-500 to-red-500' } { title: 'Micro SAAS', 
      description: 'Innovative software solutions for modern businesses', href: '/micro-saas', 
      icon: Rocket, color: 'from-blue-500 to-cyan-500' 

  return (&apos;
        title=&quot;Zion Tech Group - Leading AI & Quantum Technology Solutions&quot;
        description=&quot;Transform your business with Zion Tech Group&apos;s cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise-grade technology solutions for the future.&quot;
        keywords=&quot;AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions&quot;
      />&quot;
      <EnhancedHero />
      
      <section className=&quot;py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
        <div className=&quot;container mx-auto px-4&quot;>&quot;"
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (&quot}
        title="Zion Tech Group - Leading AI & Quantum Technology Solutions"
        description="Transform your business with Zion Tech Group&apos;s cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise-grade technology solutions for the future."
        keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"
      
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center";
              >;
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">;
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />;
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;
                  <div className="text-gray-300">{stat.label}</div>;
                </div>;
              </motion.div>;
                className=&quot;text-center&quot;
              >&quot;
                <div className=&quot;bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20&quot;>&quot;"
                  <stat.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />&quot;
                  <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}&quot;</div>
                  <div className=&quot;text-gray-300&quot;>{stat.label}&quot;</div>
              </motion.div>
            ))}
      </section>;

      <section className="py-20">;
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We combine cutting-edge technology with proven business strategies to deliver ;
              solutions that transform industries and drive success.;
            </p>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {features.map((feature, index) => (;
      <section className=&quot;py-20&quot;>&quot;"
            transition={{ duration: 0.8   }}
            className="text-center mb-16"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            className=&quot;text-center mb-16&quot;
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-4&quot;>
              Why Choose Zion Tech Group?&quot;
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              We combine cutting-edge technology with proven business strategies to deliver 
              solutions that transform industries and drive success.&quot;

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
            {features.map((feature, index) => (&quot}
                key={feature.title}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105`;
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>;
                  <feature.icon className=`w-8 h-8 text-white`} />;
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>;
                <p className={`text-gray-300 leading-relaxed`>{feature.description}</p>;
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105&quot;
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}&quot;</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{feature.description}&quot;</p>

              Our Core Services;
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses;

          <div className=`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}> {services.map((service, index) => (;
              Our Core Services
              Our Core Services&quot;
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses&quot;

            {services.map((service, index) => (&quot}
                key={service.title}
                className="group";
                <Link to={service.href} className="block">;
                  <div className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 h-full`>;
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>;
                      <service.icon className=`w-8 h-8 text-white`} />;
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"> {service.title}
                    </h3>;
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>;
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">;
                      <span className="text-sm font-medium">Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
                </Link>;
                className=&quot;group&quot;
                <Link to={service.href} className=&quot;block&quot;>&quot;"
                  <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hove,r:scale-105 h-full&quot;>&quot;`
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                    <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors&quot;>
                      {service.title}&quot;
                    </h3>
                    <p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}&quot;</p>
                    <div className=&quot;mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors&quot;>&quot;`
                      <span className=&quot;text-sm font-medium&quot;>Learn More&quot;</span>
                      <ArrowRight className=&quot;w-4 h-4 ml-2 group-hove,r:translate-x-1 transition-transform&quot; />&quot;
                </Link>

          <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Join hundreds of companies already leveraging our AI-powered solutions ;
                to drive growth and innovation.;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105";
                  <MessageCircle className="w-5 h-5 mr-2" />;
                  Get Started Today;
                  to="/about";
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200";
                  <Users className="w-5 h-5 mr-2" />;
                  Learn About Us;

          <div className="max-w-4xl mx-auto">;
              className="text-center mb-12";
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Get in Touch;
              <p className="text-lg text-gray-300">;
                Ready to discuss your technology needs? Contact us today.;

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
                transition={{ duration: 0.8, delay: 0.1 }}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <Phone className="w-8 h-8 text-white" />;
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>;
                <p className="text-gray-300">+1 302 464 0950</p>;
                transition={{ duration: 0.8, delay: 0.2 }}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <Mail className="w-8 h-8 text-white" />;
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>;
                <p className="text-gray-300">kleber@ziontechgroup.com</p>;
                transition={{ duration: 0.8, delay: 0.3 }}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <MapPin className="w-8 h-8 text-white" />;
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>;
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>;
    </>;
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>&quot;"
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?&quot;
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Join hundreds of companies already leveraging our AI-powered solutions 
                to drive growth and innovation.&quot;
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <Link
                  to=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105&quot;
                  <MessageCircle className=&quot;w-5 h-5 mr-2&quot; />
                  Get Started Today&quot;
                  to=&quot;/about&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200&quot;
                  <Users className=&quot;w-5 h-5 mr-2&quot; />
                  Learn About Us&quot;

          <div className=&quot;max-w-4xl mx-auto&quot;>&quot;"
              initial={{ opacit,y: 0, y: 20 }}
              className="text-center mb-12"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              className=&quot;text-center mb-12&quot;
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Get in Touch&quot;
              <p className=&quot;text-lg text-gray-300&quot;>
                Ready to discuss your technology needs? Contact us today.&quot;

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>&quot;"
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <Phone className=&quot;w-8 h-8 text-white&quot; />&quot;
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Phone&quot;</h3>
                <p className=&quot;text-gray-300&quot;>+1 302 464 0950&quot;</p>
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <Mail className=&quot;w-8 h-8 text-white&quot; />&quot;
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Email&quot;</h3>
                <p className=&quot;text-gray-300&quot;>kleber@ziontechgroup.com&quot;</p>
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <MapPin className=&quot;w-8 h-8 text-white&quot; />&quot;
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Address&quot;</h3>
                <p className=&quot;text-gray-300&quot;>364 E Main St STE 1008&quot;<br />Middletown DE 19709</p>
  )});
});
 import { motion } from 'framer - motion' import { Link } from 'react - router - dom' import { SEO } from '../components / SEO' import EnhancedHero from '../components / EnhancedHero' import {  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, Database, Network, Smartphone, Building, Heart, Award, MessageCircle, Phone, Mail, MapPin }  from 'lucide - react';export default React.memo(function Home () { const features = [
  { icon: Brain, title: 'AI - Powered Solutions', description: 'Cutting - edge artificial intelligence that transforms business operations and drives innovation.', color: 'from - purple - 500 to - pink - 500' } { icon: Atom, title: 'Quantum Computing', description: 'Next - generation quantum solutions that solve complex problems beyond classical computing.', color: 'from - orange - 500 to - red - 500' } { icon: Rocket, title: 'Micro SAAS Platform', description: 'Innovative software - as - a-service solutions that scale with your business needs.', color: 'from - blue - 500 to - cyan - 500' } { icon: Shield, title: 'Enterprise Security', description: 'Military - grade cybersecurity and compliance solutions for enterprise protection.', color: 'from - green - 500 to - emerald - 500' } ]  const stats = [
  { number: '500+', label: 'Projects Completed', icon: CheckCircle } { number: '50+', label: 'Team Members', icon: Users } { number: '25+', label: 'Countries Served', icon: Globe } { number: '99%', label: 'Client Satisfaction', icon: Star } ]  const services = [
  { title: 'AI Services', description: 'Comprehensive AI solutions for business automation and intelligence', href: '/ai - services', icon: Brain, color: 'from - purple - 500 to - pink - 500' } { title: 'IT Infrastructure', description: 'Enterprise - grade IT solutions and cloud architecture', href: '/it - services', icon: Server, color: 'from - green - 500 to - emerald - 500' } { title: 'Quantum Solutions', description: 'Cutting - edge quantum computing and technology services', href: '/services / quantum - computing', icon: Atom, color: 'from - orange - 500 to - red - 500' } { title: 'Micro SAAS', description: 'Innovative software solutions for modern businesses', href: '/micro - saas', icon: Rocket, color: 'from - blue - 500 to - cyan - 500' } ]  return ( <> <SEO title="Zion Tech Group - Leading AI & Quantum Technology Solutions" description="Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future." keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"" /" >'{}' <EnhancedHero /" > {}"'" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">"'" <div className="container mx - auto px - 4">"'" <div className="grid grid - cols - 2 md: grid - cols - 4 gap - 8"> {stats.map ( (stat, index) => ( <motion .div" key={stat.label}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}" className="text - center"" >"'" <div className="bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20">"'" <stat .icon className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" /" >"'" <div className="text - 3xl font - bold text - white mb - 2">{stat.number}</div>"'" <div className="text - gray - 300">{stat.label}</div> </div> </motion.div>) ) }" </div>' </div>' </section> {}"'" <section className="py - 20">"'" <div className="container mx - auto px - 4">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}" className="text - center mb - 16"" >"'" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">'; Why Choose Zion Tech Group?'" </h2>"'" <p className="text - xl text - gray - 300 max - w-3xl mx - auto"> We combine cutting - edge technology with proven business strategies to deliver" solutions that transform industries and drive success.' </p>' </motion.div>'"" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {features.map ( (feature, index) => ( <motion.div" key={feature.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}" className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105">'` <div className={`w - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6`}` >"'" <feature .icon className="w - 8 h - 8 text - white" /" >'" </div>"'" <h3 className="text - xl font - bold text - white mb - 3">{feature.title}</h3>"'" <p className="text - gray - 300 leading - relaxed">{feature.description}</p> </motion.div>) ) }" </div>' </div>' </section> {}"'" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">"'" <div className="container mx - auto px - 4">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}" className="text - center mb - 16"" >"'" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">'; Our Core Services'" </h2>"'" <p className="text - xl text - gray - 300 max - w-3xl mx - auto">" Comprehensive technology solutions designed to meet the evolving needs of modern businesses' </p>' </motion.div>'"" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {services.map ( (service, index) => ( <motion .div" key={service.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}" className="group"" >"'" <Link to={service.href} className="block">"'" <div className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full">'` <div className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6`}` >"'" <service .icon className="w - 8 h - 8 text - white" /" >'" </div>"'" <h3 className="text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors">'{service.title}'" </h3>"'" <p className="text - gray - 300 leading - relaxed">{service.description}</p>"'" <div className="mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors">"'" <span className="text - sm font - medium">Learn More</span>"'" <ArrowRight className="w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform" /" > </div> </div> </Link> </motion.div>) ) }" </div>' </div>' </section> {}"'" <section className="py - 20">"'" <div className="container mx - auto px - 4">"'" <div className="max - w-4xl mx - auto text - center"> <motion .div" initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }}'; transition={{ duration: 0.8 }}" >"'" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 6">'; Ready to Transform Your Business?'" </h2>"'" <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">'; Join hundreds of companies already leveraging our AI - powered solutions'; to drive growth and innovation.'" </p>"'" <div className="flex flex - col sm: flex - row gap - 4 justify - center">'" <Link " to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105"" >"'" <MessageCircle className="w - 5 h - 5 mr - 2" /" >'; Get Started Today' </Link>'" <Link " to="/about" className="inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200"" >"'" <Users className="w - 5 h - 5 mr - 2" /" > Learn About Us </Link> </div> </motion.div>" </div>' </div>' </section> {}"'" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">"'" <div className="container mx - auto px - 4">"'" <div className="max - w-4xl mx - auto">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}" className="text - center mb - 12"" >"'" <h2 className="text - 3xl md: text - 4xl font - bold text - white mb - 4">'; Get in Touch'" </h2>"'" <p className="text - lg text - gray - 300">" Ready to discuss your technology needs? Contact us today.' </p>' </motion.div>'"" <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}" className="text - center"" >"'" <div className="w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">"'" <Phone className="w - 8 h - 8 text - white" /" >'" </div>"'" <h3 className="text - xl font - bold text - white mb - 2">Phone</h3>"'" <p className="text - gray - 300">+1 302 464 0950</p> </motion.div>" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}" className="text - center"" >"'" <div className="w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">"'" <Mail className="w - 8 h - 8 text - white" /" >'" </div>"'" <h3 className="text - xl font - bold text - white mb - 2">Email</h3>"'" <p className="text - gray - 300">kleber@ziontechgroup.com</p> </motion.div>" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}" className="text - center"" >"'" <div className="w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">"'" <MapPin className="w - 8 h - 8 text - white" /" >'" </div>"'" <h3 className="text - xl font - bold text - white mb - 2">Address</h3>"'" <p className="text - gray - 300">364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>" </section>' </>')  }";''`'"'`
  { title: 'AI Services', description: 'Comprehensive AI solutions for business automation and intelligence', href: '/ai - services', icon: Brain, color: 'from - purple - 500 to - pink - 500' } { title: 'IT Infrastructure', description: 'Enterprise - grade IT solutions and cloud architecture', href: '/it - services', icon: Server, color: 'from - green - 500 to - emerald - 500' } { title: 'Quantum Solutions', description: 'Cutting - edge quantum computing and technology services', href: '/services / quantum - computing', icon: Atom, color: 'from - orange - 500 to - red - 500' } { title: 'Micro SAAS', description: 'Innovative software solutions for modern businesses', href: '/micro - saas', icon: Rocket, color: 'from - blue - 500 to - cyan - 500' } ]  return ( <> <SEO title='Zion Tech Group - Leading AI & Quantum Technology Solutions' description='Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future.' keywords='AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions'' /" >'{}' <EnhancedHero /" > {}''' <section className='py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50'>''' <div className='container mx - auto px - 4'>''' <div className='grid grid - cols - 2 md: grid - cols - 4 gap - 8'> {stats.map ( (stat, index) => ( <motion .div' key={stat.label}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}' className='text - center'" >''' <div className='bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20'>''' <stat .icon className='w - 12 h - 12 text - cyan - 400 mx - auto mb - 4' /" >''' <div className='text - 3xl font - bold text - white mb - 2'>{stat.number}</div>''' <div className='text - gray - 300'>{stat.label}</div> </div> </motion.div>) ) }' </div>' </div>' </section> {}''' <section className='py - 20'>''' <div className='container mx - auto px - 4'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}' className='text - center mb - 16'` >''' <h2 className='text - 4xl md: text - 5xl font - bold text - white mb - 4'>'; Why Choose Zion Tech Group?'' </h2>''' <p className='text - xl text - gray - 300 max - w-3xl mx - auto'> We combine cutting - edge technology with proven business strategies to deliver' solutions that transform industries and drive success.' </p>' </motion.div>''' <div className='grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8'> {features.map ( (feature, index) => ( <motion.div' key={feature.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}' className='bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105''>'' <div className={`w - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6`}` >''' <feature .icon className='w - 8 h - 8 text - white' /" >'' </div>''' <h3 className='text - xl font - bold text - white mb - 3'>{feature.title}</h3>''' <p className='text - gray - 300 leading - relaxed'>{feature.description}</p> </motion.div>) ) }' </div>' </div>' </section> {}''' <section className='py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50'>''' <div className='container mx - auto px - 4'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}' className='text - center mb - 16'" >''' <h2 className='text - 4xl md: text - 5xl font - bold text - white mb - 4'>'; Our Core Services'' </h2>''' <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>' Comprehensive technology solutions designed to meet the evolving needs of modern businesses' </p>' </motion.div>''' <div className='grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8'> {services.map ( (service, index) => ( <motion .div' key={service.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}' className='group'` >''' <Link to={service.href} className='block'>''' <div className='bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full'>'' <div className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6`}` >''' <service .icon className='w - 8 h - 8 text - white' /" >'' </div>''' <h3 className='text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors'>'{service.title}'' </h3>''' <p className='text - gray - 300 leading - relaxed'>{service.description}</p>''' <div className='mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors'>''' <span className='text - sm font - medium'>Learn More</span>''' <ArrowRight className='w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform' /" > </div> </div> </Link> </motion.div>) ) }' </div>' </div>' </section> {}''' <section className='py - 20'>''' <div className='container mx - auto px - 4'>''' <div className='max - w-4xl mx - auto text - center'> <motion .div' initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }}'; transition={{ duration: 0.8 }}" >''' <h2 className='text - 4xl md: text - 5xl font - bold text - white mb - 6'>'; Ready to Transform Your Business?'' </h2>''' <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>'; Join hundreds of companies already leveraging our AI - powered solutions'; to drive growth and innovation.'' </p>''' <div className='flex flex - col sm: flex - row gap - 4 justify - center'>'' <Link ' to='/contact' className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105'" >''' <MessageCircle className='w - 5 h - 5 mr - 2' /" >'; Get Started Today' </Link>'' <Link ' to='/about' className='inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200'" >''' <Users className='w - 5 h - 5 mr - 2' /" > Learn About Us </Link> </div> </motion.div>' </div>' </div>' </section> {}''' <section className='py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50'>''' <div className='container mx - auto px - 4'>''' <div className='max - w-4xl mx - auto'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}' className='text - center mb - 12'" >''' <h2 className='text - 3xl md: text - 4xl font - bold text - white mb - 4'>'; Get in Touch'' </h2>''' <p className='text - lg text - gray - 300'>' Ready to discuss your technology needs? Contact us today.' </p>' </motion.div>''' <div className='grid grid - cols - 1 md: grid - cols - 3 gap - 8'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}' className='text - center'" >''' <div className='w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4'>''' <Phone className='w - 8 h - 8 text - white' /" >'' </div>''' <h3 className='text - xl font - bold text - white mb - 2'>Phone</h3>''' <p className='text - gray - 300'>+1 302 464 0950</p> </motion.div>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}' className='text - center'" >''' <div className='w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4'>''' <Mail className='w - 8 h - 8 text - white' /" >'' </div>''' <h3 className='text - xl font - bold text - white mb - 2'>Email</h3>''' <p className='text - gray - 300'>kleber@ziontechgroup.com</p> </motion.div>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}' className='text - center'" >''' <div className='w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4'>''' <MapPin className='w - 8 h - 8 text - white' /" >'' </div>''' <h3 className='text - xl font - bold text - white mb - 2'>Address</h3>''' <p className='text - gray - 300'>364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>' </section>' </>')  }';''`'''`
  { title: 'AI Services', description: 'Comprehensive AI solutions for business automation and intelligence', href: '/ai - services', icon: Brain, color: 'from - purple - 500 to - pink - 500' } { title: 'IT Infrastructure', description: 'Enterprise - grade IT solutions and cloud architecture', href: '/it - services', icon: Server, color: 'from - green - 500 to - emerald - 500' } { title: 'Quantum Solutions', description: 'Cutting - edge quantum computing and technology services', href: '/services / quantum - computing', icon: Atom, color: 'from - orange - 500 to - red - 500' } { title: 'Micro SAAS', description: 'Innovative software solutions for modern businesses', href: '/micro - saas', icon: Rocket, color: 'from - blue - 500 to - cyan - 500' } ]  return ( <> <SEO title="Zion Tech Group - Leading AI & Quantum Technology Solutions" description="Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future." keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"" /" >' {}'; <EnhancedHero /" > {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <div className="grid grid - cols - 2 md: grid - cols - 4 gap - 8"> {stats.map ( (stat, index) => ( <motion .div" key={stat.label}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}" className="text - center"" >" <div className="bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20">" <stat .icon className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" /" >" <div className="text - 3xl font - bold text - white mb - 2">{stat.number}</div>" <div className="text - gray - 300">{stat.label}</div> </div> </motion.div>) ) }" </div>'; </div>'; </section> {}" <section className="py - 20">" <div className="container mx - auto px - 4">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}" className="text - center mb - 16"" >" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">'; Why Choose Zion Tech Group? </h2>" <p className="text - xl text - gray - 300 max - w-3xl mx - auto"> We combine cutting - edge technology with proven business strategies to deliver" solutions that transform industries and drive success.'; </p>'; </motion.div>';;"" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {features.map ( (feature, index) => ( <motion.div" key={feature.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}" className={`bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105`> <div className={`w - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6`}` >`} <feature .icon className="w - 8 h - 8 text - white" /" > </div>" <h3 className="text - xl font - bold text - white mb - 3">{feature.title}</h3>" <p className="text - gray - 300 leading - relaxed">{feature.description}</p> </motion.div>) ) }" </div>'; </div>'; </section> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}" className="text - center mb - 16"" >" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">'; Our Core Services </h2>" <p className="text - xl text - gray - 300 max - w-3xl mx - auto">" Comprehensive technology solutions designed to meet the evolving needs of modern businesses'; </p>'; </motion.div>';;"" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {services.map ( (service, index) => ( <motion .div" key={service.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}" className="group"" >" <Link to={service.href} className="block">" <div className={`bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full`> <div className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6`}` >`} <service .icon className="w - 8 h - 8 text - white" /" > </div>" <h3 className="text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors">' {service.title} </h3>" <p className="text - gray - 300 leading - relaxed">{service.description}</p>" <div className="mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors">" <span className="text - sm font - medium">Learn More</span>" <ArrowRight className="w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform" /" > </div> </div> </Link> </motion.div>) ) }" </div>'; </div>'; </section> {}" <section className="py - 20">" <div className="container mx - auto px - 4">" <div className="max - w-4xl mx - auto text - center"> <motion .div" initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }}'; transition={{ duration: 0.8 }}" >" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 6">'; Ready to Transform Your Business? </h2>" <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">'; Join hundreds of companies already leveraging our AI - powered solutions'; to drive growth and innovation. </p>" <div className="flex flex - col sm: flex - row gap - 4 justify - center"> <Link " to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105"" >" <MessageCircle className="w - 5 h - 5 mr - 2" /" >'; Get Started Today'; </Link> <Link " to="/about" className="inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200"" >" <Users className="w - 5 h - 5 mr - 2" /" > Learn About Us </Link> </div> </motion.div>" </div>'; </div>'; </section> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <div className="max - w-4xl mx - auto">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}" className="text - center mb - 12"" >" <h2 className="text - 3xl md: text - 4xl font - bold text - white mb - 4">'; Get in Touch </h2>" <p className="text - lg text - gray - 300">" Ready to discuss your technology needs? Contact us today.'; </p>'; </motion.div>';;"" <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8">" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}" className="text - center"" >" <div className="w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <Phone className="w - 8 h - 8 text - white" /" > </div>" <h3 className="text - xl font - bold text - white mb - 2">Phone</h3>" <p className="text - gray - 300">+1 302 464 0950</p> </motion.div>" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}" className="text - center"" >" <div className="w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <Mail className="w - 8 h - 8 text - white" /" > </div>" <h3 className="text - xl font - bold text - white mb - 2">Email</h3>" <p className="text - gray - 300">kleber@ziontechgroup.com</p> </motion.div>" <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}" className="text - center"" >" <div className="w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <MapPin className="w - 8 h - 8 text - white" /" > </div>" <h3 className="text - xl font - bold text - white mb - 2">Address</h3>" <p className="text - gray - 300">364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>" </section>'; </>';)  }";''`'"`
  { title: 'AI Services', description: 'Comprehensive AI solutions for business automation and intelligence', href: '/ai - services', icon: Brain, color: 'from - purple - 500 to - pink - 500' } { title: 'IT Infrastructure', description: 'Enterprise - grade IT solutions and cloud architecture', href: '/it - services', icon: Server, color: 'from - green - 500 to - emerald - 500' } { title: 'Quantum Solutions', description: 'Cutting - edge quantum computing and technology services', href: '/services / quantum - computing', icon: Atom, color: 'from - orange - 500 to - red - 500' } { title: 'Micro SAAS', description: 'Innovative software solutions for modern businesses', href: '/micro - saas', icon: Rocket, color: 'from - blue - 500 to - cyan - 500' } ]  return ( <> <SEO title='Zion Tech Group - Leading AI & Quantum Technology Solutions' description='Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future.' keywords='AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions'' /" >' {}'; <EnhancedHero /" > {}' <section className='py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50'>' <div className='container mx - auto px - 4'>' <div className='grid grid - cols - 2 md: grid - cols - 4 gap - 8'> {stats.map ( (stat, index) => ( <motion .div' key={stat.label}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}' className='text - center'" >' <div className='bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20'>' <stat .icon className='w - 12 h - 12 text - cyan - 400 mx - auto mb - 4' /" >' <div className='text - 3xl font - bold text - white mb - 2'>{stat.number}</div>' <div className='text - gray - 300'>{stat.label}</div> </div> </motion.div>) ) }' </div>'; </div>'; </section> {}' <section className='py - 20'>' <div className='container mx - auto px - 4'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}' className='text - center mb - 16'` >' <h2 className='text - 4xl md: text - 5xl font - bold text - white mb - 4'>'; Why Choose Zion Tech Group? </h2>' <p className='text - xl text - gray - 300 max - w-3xl mx - auto'> We combine cutting - edge technology with proven business strategies to deliver' solutions that transform industries and drive success.'; </p>'; </motion.div>';;'' <div className='grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8'> {features.map ( (feature, index) => ( <motion.div' key={feature.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}' className='bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105''> <div className={`w - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6`}` >' <feature .icon className='w - 8 h - 8 text - white' /" > </div>' <h3 className='text - xl font - bold text - white mb - 3'>{feature.title}</h3>' <p className='text - gray - 300 leading - relaxed'>{feature.description}</p> </motion.div>) ) }' </div>'; </div>'; </section> {}' <section className='py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50'>' <div className='container mx - auto px - 4'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}' className='text - center mb - 16'" >' <h2 className='text - 4xl md: text - 5xl font - bold text - white mb - 4'>'; Our Core Services </h2>' <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>' Comprehensive technology solutions designed to meet the evolving needs of modern businesses'; </p>'; </motion.div>';;'' <div className='grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8'> {services.map ( (service, index) => ( <motion .div' key={service.title}'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}' className='group'` >' <Link to={service.href} className='block'>' <div className='bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full'> <div className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6`}` >' <service .icon className='w - 8 h - 8 text - white' /" > </div>' <h3 className='text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors'>' {service.title} </h3>' <p className='text - gray - 300 leading - relaxed'>{service.description}</p>' <div className='mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors'>' <span className='text - sm font - medium'>Learn More</span>' <ArrowRight className='w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform' /" > </div> </div> </Link> </motion.div>) ) }' </div>'; </div>'; </section> {}' <section className='py - 20'>' <div className='container mx - auto px - 4'>' <div className='max - w-4xl mx - auto text - center'> <motion .div' initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }}'; transition={{ duration: 0.8 }}" >' <h2 className='text - 4xl md: text - 5xl font - bold text - white mb - 6'>'; Ready to Transform Your Business? </h2>' <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>'; Join hundreds of companies already leveraging our AI - powered solutions'; to drive growth and innovation. </p>' <div className='flex flex - col sm: flex - row gap - 4 justify - center'> <Link ' to='/contact' className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105'" >' <MessageCircle className='w - 5 h - 5 mr - 2' /" >'; Get Started Today'; </Link> <Link ' to='/about' className='inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200'" >' <Users className='w - 5 h - 5 mr - 2' /" > Learn About Us </Link> </div> </motion.div>' </div>'; </div>'; </section> {}' <section className='py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50'>' <div className='container mx - auto px - 4'>' <div className='max - w-4xl mx - auto'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}' className='text - center mb - 12'" >' <h2 className='text - 3xl md: text - 4xl font - bold text - white mb - 4'>'; Get in Touch </h2>' <p className='text - lg text - gray - 300'>' Ready to discuss your technology needs? Contact us today.'; </p>'; </motion.div>';;'' <div className='grid grid - cols - 1 md: grid - cols - 3 gap - 8'>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}' className='text - center'" >' <div className='w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4'>' <Phone className='w - 8 h - 8 text - white' /" > </div>' <h3 className='text - xl font - bold text - white mb - 2'>Phone</h3>' <p className='text - gray - 300'>+1 302 464 0950</p> </motion.div>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}' className='text - center'" >' <div className='w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4'>' <Mail className='w - 8 h - 8 text - white' /" > </div>' <h3 className='text - xl font - bold text - white mb - 2'>Email</h3>' <p className='text - gray - 300'>kleber@ziontechgroup.com</p> </motion.div>' <motion .div'; initial={{ opacity: 0, y: 20 }}'; whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}' className='text - center'" >' <div className='w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4'>' <MapPin className='w - 8 h - 8 text - white' /" > </div>' <h3 className='text - xl font - bold text - white mb - 2'>Address</h3>' <p className='text - gray - 300'>364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>' </section>'; </>';)  }';''`''

"`
