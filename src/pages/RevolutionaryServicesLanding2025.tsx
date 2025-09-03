,"});,"})
import { Link } from 'react-router-dom';,"});,"})',';';
    ';';';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025';,"});,"})',';';
    ';';';
import { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, CheckCircle, Clock, DollarSign, Target, Rocket } from 'lucide-react';,"});,"})
;,"});,"})
const RevolutionaryServicesLanding2025: React.FC = () => {,"});,"})
  const featuredServices = [,"});,"})
    revolutionaryMicroSaasServices2025[0], // AI Business Intelligence,"});,"})
    revolutionaryITServices2025[0], // AI Cybersecurity,"});,"})';
    revolutionaryAIServices2025[0] // AI Enterprise Automation,"});,"})';';
  ],"});,"})';';';
  const stats = [,"});,"})',';';
    ';';';
    { label: 'Total Services', value: '16', icon: <Users className="w-6 h-6" /> },;,"});,"})',';';
    ';';';
    { label: 'Micro SAAS', value: '10', icon: <Zap className="w-6 h-6" /> },;,"});,"})',';';
    ';';';
    { label: 'IT Services', value: '3', icon: <Shield className="w-6 h-6" /> },;,"});,"})',';';
    ';';';
    { label: 'AI Services', value: '3', icon: <Brain className="w-6 h-6" /> }"});,"})';
  const benefits = [,"});,"})';';
    {,"});,"})';';';
      icon: <Rocket className="w-8 h-8" />,"});,"})',';';
    ';';';
      title: 'Cutting-Edge Innovation',"});,"})',';';
    ';';';
      description: 'Stay ahead with the latest AI and technology advancements',"});,"});';';
},;,"});,"})';';';
      icon: <Target className="w-8 h-8" />,"});,"})',';';
    ';';';
      title: 'Proven ROI',"});,"})',';';
    ';';';
      description: 'Average 300%+ return on investment within 6 months',"});,"})';';';
      icon: <Clock className="w-8 h-8" />,"});,"})',';';
    ';';';
      title: 'Rapid Implementation',"});,"})',';';
    ';';';
      description: 'Get up and running in as little as 1-2 weeks',"});,"})';';';
      icon: <DollarSign className="w-8 h-8" />,"});,"})',';';
    ';';';
      title: 'Competitive Pricing',"});,"})',';';
    ';';';
      description: 'Affordable solutions that fit any business budget',"});,"});
}"});,"})
  return (
    ,"});,"})
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">;,"});,"})
      {/* Hero Section */}"});,"})
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">;,"});,"})
        <div className="container mx-auto px-4 py-20">;,"});,"})
          <div className="text-center max-w-5xl mx-auto">;,"});,"})
            <h1 className="text-6xl font-bold mb-6 leading-tight">;,"});,"})
              Revolutionary Services 2025,"});,"})
            </h1>;,"});,"})
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">;,"});,"})
              Transform your business with our cutting-edge AI-powered micro SAAS, IT, and AI services.;,"});,"})
              Experience the future of technology with intelligent automation, advanced analytics, and innovative solutions.;,"});,"})
            </p>;,"});,"})
            {/* CTA Buttons */}"});,"})
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-12">,"});,"})
              <Link,"});,"})
                to="/revolutionary-services-showcase-2025";,"});,"})
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg group","});,"})
              >;,"});,"})
                Explore All Services,"});,"})
                <ArrowRight className="w-5 h-5 group-hover: translate-x-1 transition-transform" />,"});,"})
              </Link>;,"});,"})
                to="/revolutionary-pricing-guide-2025";,"});,"})
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg","});,"})
                <DollarSign className="w-5 h-5" />;,"});,"})
                View Pricing,"});,"})
            </div>;,"});,"})
            {/* Stats */}"});,"})
            <div className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto">,"});,"})
              {stats.map((stat, index) => (;,"});,"})
                <div key={index} className="text-center">;,"});,"})
                  <div className="flex items-center justify-center mb-2">;,"});,"})
                    <div className="p-2 bg-white/20 rounded-lg">;,"});,"})
                      {stat.icon}"});,"})
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>;,"});,"})
                  <div className="text-sm text-blue-100">{stat.label}</div>;,"});,"})
              ))}"});,"})
      {/* Contact Banner */}"});,"})
      <div className="bg-white shadow-lg">;,"});,"})
        <div className="container mx-auto px-4 py-6">;,"});,"})
          <div className="flex flex-col md: flex-row items-center justify-between gap-4">,"});,"})
            <div className="text-center md: text-left">,"});,"})
              <h3 className="text-xl font-semibold text-gray-900 mb-2">;,"});,"})
                Ready to Get Started?;,"});,"})
              </h3>;,"});,"})
              <p className="text-gray-600">;,"});,"})
                Contact our experts to discuss your needs and discover the perfect solution,"});,"})
            <div className="flex flex-col sm: flex-row gap-3">,"});,"})
              <a,"});,"})
                href="tel: +13024640950","});,"})
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors","});,"})
                <Phone className="w-4 h-4" />;,"});,"})
                Call +1 302 464 0950,"});,"})
              </a>;,"});,"})
                href="mailto: kleber@ziontechgroup.com","});,"})
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover: bg-gray-200 transition-colors","});,"})
                <Mail className="w-4 h-4" />;,"});,"})
                Email Us,"});,"})
      {/* Service Categories */}"});,"})
      <div className="py-20">;,"});,"})
        <div className="container mx-auto px-4">;,"});,"})
          <div className="text-center mb-16">;,"});,"})
            <h2 className="text-4xl font-bold text-gray-900 mb-6">;,"});,"})
              Service Categories,"});,"})
            </h2>;,"});,"})
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;,"});,"})
              Choose from our comprehensive range of revolutionary services designed to,"});,"})
              transform your business operations and drive growth.;,"});,"})
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,"});,"})
            {/* Micro SAAS */}"});,"})
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover: shadow-xl transition-all duration-300">,"});,"})
              <div className="text-center mb-6">;,"});,"})
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;,"});,"})
                  <Zap className="w-10 h-10 text-blue-600" />;,"});,"})
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Micro SAAS Solutions</h3>;,"});,"})
                <p className="text-gray-600 mb-4">;,"});,"})
                  AI-powered business applications that streamline operations and boost productivity,"});,"})
                <div className="text-3xl font-bold text-blue-600 mb-2">;,"});,"})
                  {revolutionaryMicroSaasServices2025.length} Services,"});,"})
                <div className="text-sm text-gray-500">;,"});,`})
                  Starting from ${Math.min(...revolutionaryMicroSaasServices2025.map(s => s.price))}/month,`});,"})
              <div className="space-y-3 mb-6">;,"});,"})
                <div className="flex items-center gap-3 text-sm text-gray-700">;,"});,"})
                  <CheckCircle className="w-4 h-4 text-green-500" />;,"});,"})
                  <span>AI Business Intelligence</span>;,"});,"})
                  <span>Customer Support Automation</span>;,"});,"})
                  <span>Content Creation Platform</span>;,"});,"})
                  <span>Project Management</span>;,"});,"})
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover: bg-blue-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2","});,"})
                Explore Micro SAAS,"});,"})
                <ArrowRight className="w-4 h-4" />;,"});,"})
            {/* IT Services */}"});,"})
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;,"});,"})
                  <Shield className="w-10 h-10 text-purple-600" />;,"});,"})
                <h3 className="text-2xl font-bold text-gray-900 mb-2">IT Infrastructure</h3>;,"});,"})
                  Advanced cybersecurity, cloud optimization, and DevOps automation solutions,"});,"})
                <div className="text-3xl font-bold text-purple-600 mb-2">;,"});,"})
                  {revolutionaryITServices2025.length} Services,"});,`})
                  Starting from ${Math.min(...revolutionaryITServices2025.map(s => s.price))}/month,`});,"})
                  <span>AI Cybersecurity Suite</span>;,"});,"})
                  <span>Cloud Infrastructure Optimization</span>;,"});,"})
                  <span>DevOps Automation Platform</span>;,"});,"})
                  <span>24/7 Monitoring & Support</span>;,"});,"})
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover: bg-purple-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2","});,"})
                Explore IT Services,"});,"})
            {/* AI Services */}"});,"})
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;,"});,"})
                  <Brain className="w-10 h-10 text-green-600" />;,"});,"})
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3>;,"});,"})
                  Enterprise automation, predictive analytics, and natural language processing,"});,"})
                <div className="text-3xl font-bold text-green-600 mb-2">;,"});,"})
                  {revolutionaryAIServices2025.length} Services,"});,`})
                  Starting from ${Math.min(...revolutionaryAIServices2025.map(s => s.price))}/month,`});,"})
                  <span>Enterprise Automation Platform</span>;,"});,"})
                  <span>Predictive Analytics</span>;,"});,"})
                  <span>Natural Language Processing</span>;,"});,"})
                  <span>Custom AI Models</span>;,"});,"})
                className="w-full bg-green-600 text-white py-3 rounded-lg hover: bg-green-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2","});,"})
                Explore AI Services,"});,"})
      {/* Featured Services */}"});,"})
      <div className="py-20 bg-white">;,"});,"})
              Featured Services,"});,"})
              Discover our most popular and innovative solutions that are transforming,"});,"})
              businesses across industries.;,"});,"})
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,"});,"})
            {featuredServices.map((service, index) => (;,"});,"})
              <div key={service.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover: shadow-xl transition-all duration-300">,"});,"})
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;,"});,"})
                    {index === 0 && <Brain className="w-8 h-8 text-blue-600" />}"});,"})
                    {index === 1 && <Shield className="w-8 h-8 text-purple-600" />}"});,"})
                    {index === 2 && <Rocket className="w-8 h-8 text-green-600" />}"});,"})
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>;,"});,"})
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>;,"});,`})
                    ${service.price}`});,"})
                  <div className="text-sm text-gray-500">per {service.pricingModel}</div>;,"});,"})
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (;,"});,"})
                    <div key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-700">;,"});,"})
                      <Star className="w-4 h-4 text-yellow-500" />;,"});,"})
                      <span>{benefit}</span>;,"});,"})
                <div className="space-y-3">;,"});,"})
                    Learn More,"});,`})
                    href={`tel:${service.contactInfo.phone}`}`});,"})
                    className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover: bg-blue-50 transition-colors text-center font-medium inline-flex items-center justify-center gap-2","});,"})
                    Call Now,"});,"})
      {/* Why Choose Us */}"});,"})
              Why Choose Zion Tech Group?;,"});,"})
              We combine cutting-edge technology with proven business expertise to deliver,"});,"})
              solutions that drive real results.;,"});,"})
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,"});,"})
            {benefits.map((benefit, index) => (;,"});,"})
                  <div className="text-blue-600">;,"});,"})
                    {benefit.icon}"});,"})
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>;,"});,"})
                <p className="text-gray-600">{benefit.description}</p>;,"});,"})
      {/* Call to Action */}"});,"})
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">;,"});,"})
        <div className="container mx-auto px-4 text-center">;,"});,"})
          <h2 className="text-4xl font-bold text-white mb-6">;,"});,"})
            Ready to Transform Your Business?;,"});,"})
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;,"});,"})
            Join hundreds of businesses that have already transformed their operations,"});,"})
            with our revolutionary AI-powered services. Get started today!;,"});,"})
          <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">,"});,"})
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg","});,"})
              <ArrowRight className="w-5 h-5" />;,"});,"})
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg","});,"})
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">,"});,"})
            <div className="text-center">;,"});,"})
              <div className="text-3xl font-bold text-white mb-2">+1 302 464 0950</div>;,"});,"})
              <div className="text-blue-100">Call us anytime</div>;,"});,"})
              <div className="text-lg font-semibold text-white mb-2">kleber@ziontechgroup.com</div>;,"});,"})
              <div className="text-blue-100">Email our experts</div>;,"});,"})
              <div className="text-lg font-semibold text-white mb-2">https: //ziontechgroup.com</div>,"});,"})
              <div className="text-blue-100">Visit our website</div>;,"});,"})
      {/* Footer */}"});,"})
      <footer className="bg-gray-900 text-white py-16">;,"});,"})
            <div className="lg: col-span-2">,"});,"})
              <div className="flex items-center space-x-3 mb-4">;,"});,"})
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;,"});,"})
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;,"});,"})
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;,"});,"})
                  </svg>;,"});,"})
                <div>;,"});,"})
                  <h3 className="text-xl font-bold">Zion Tech Group</h3>;,"});,"})
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>;,"});,"})
              <p className="text-gray-400 text-sm leading-relaxed mb-6">;,"});,"})
                Pioneering the future of technology with AI-powered solutions that transform businesses,"});,"})
                and empower innovation. We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.;,"});,"})
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>;,"});,"})
              <ul className="space-y-3 text-sm text-gray-400">;,"});,"})
                <li><Link to="/revolutionary-services-showcase-2025" className="hover: text-white transition-colors">Services Showcase</Link></li>,"});,"})
                <li><Link to="/revolutionary-pricing-guide-2025" className="hover: text-white transition-colors">Pricing Guide</Link></li>,"});,"})
                <li><a href="/about" className="hover: text-white transition-colors">About Us</a></li>,"});,"})
                <li><a href="/contact" className="hover: text-white transition-colors">Contact</a></li>,"});,"})
              </ul>;,"});,"})
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>;,"});,"})
              <div className="space-y-3 text-sm text-gray-400">;,"});,"})
                <div className="flex items-center gap-2">;,"});,"})
                  <Phone className="w-4 h-4 text-blue-400" />;,"});,"})
                  <span>+1 302 464 0950</span>;,"});,"})
                  <Mail className="w-4 h-4 text-blue-400" />;,"});,"})
                  <span>kleber@ziontechgroup.com</span>;,"});,"})
                  <Globe className="w-4 h-4 text-blue-400" />;,"});,"})
                  <span>ziontechgroup.com</span>;,"});,"})
                <div className="flex items-start gap-2">;,"});,"})
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />;,"});,"})
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;,"});,"})
          <div className="border-t border-gray-800 mt-12 pt-8">;,"});,"})
            <div className="flex flex-col md: flex-row justify-between items-center space-y-4 md:space-y-0">,"});,"})
              <div className="text-sm text-gray-400">;,"});,"})
                <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>;,"});,"})
              <div className="flex space-x-6 text-sm text-gray-400">;,"});,"})
                <a href="/privacy" className="hover: text-white transition-colors">Privacy Policy</a>,"});,"})
                <a href="/terms" className="hover: text-white transition-colors">Terms of Service</a>,"});,"})
                <a href="/sitemap" className="hover: text-white transition-colors">Sitemap</a>,"});,"})
      </footer>;,"});,"})';
  );,"});,"});';';
};,"});,"})';';';
export default RevolutionaryServicesLanding2025,"});,"})',';';
    ';';';
import { Link } from 'react-router-dom',;',';';
    ';';';';';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025',;',';';
    ';';';';';
import { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, CheckCircle, Clock, DollarSign, Target, Rocket } from 'lucide-react',;',';';
    ';
const RevolutionaryServicesLanding2025: React.FC: = () => {,
  const featuredServices = [';
    revolutionaryMicroSaasServices2025[0], // AI: Business Intelligence;';';
    revolutionaryITServices2025[0], // AI: Cybersecurity;';';';
    revolutionaryAIServices2025[0] // AI: Enterprise Automation]';';';';
  const stats = [ { label: 'Total: Services,', value: '16,', icon: <Users: className="w-6 h-6" />},',',';';
    ' { label: 'Micro: SAAS,', value: '10,', icon: <Zap: className="w-6 h-6" />},',',';';
    ' { label: 'IT: Services,', value: '3,', icon: <Shield: className="w-6 h-6" />},',',';';
    ' { label: 'AI: Services,', value: '3,', icon: <Brain: className="w-6 h-6" />}',',';';
    ';';';';
  const benefits = [ {';';';';
      icon: <Rocket: className="w-8 h-8" /,>,',';';
    ',';';';
    ';';';';
      title: 'Cutting-Edge: Innovation,',',',';';
    ';';';';';
      description: 'Stay: ahead with the latest AI and technology advancements,'},',',';';
    ' {';';';';
      icon: <Target: className="w-8 h-8" /,>,',';';
    ',';';';
    ';';';';
      title: 'Proven: ROI,',',',';';
    ';';';';';
      description: 'Average: 300%+ return on investment within 6 months,'},',',';';
    ' {';';';';
      icon: <Clock: className="w-8 h-8" /,>,',';';
    ',';';';
    ';';';';
      title: 'Rapid: Implementation,',',',';';
    ';';';';';
      description: 'Get: up and running in as little as 1-2 weeks,'},',',';';
    ' {';';';';
      icon: <DollarSign: className="w-8 h-8" /,>,',';';
    ',';';';
    ';';';';
      title: 'Competitive: Pricing,',',',';';
    ';';';';';
      description: 'Affordable: solutions that fit any business budget,'}',',';';
    ';';';';
  return (';';';';
    <div: className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">',';';
    ' {/* Hero: Section */}';';';';
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">',',';';
    ';';';';';
        <div: className="container mx-auto px-4 py-20">',';';
    ',';';';
    ';';';';
          <div: className="text-center max-w-5xl mx-auto">',';';
    ';';';';';
            <h1: className="text-6xl font-bold mb-6 leading-tight">',',';';
    ';';';
              Revolutionary: Services 2025';';';
            </h1>';';';';
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">',';';
    ';
              Transform: your business with our cutting-edge AI-powered micro SAAS, IT, and AI services.;';
              Experience: the future of technology with intelligent automation, advanced analytics, and innovative solutions.';';
            </p>';';';
            {/* CTA Buttons */}';';';';
            <div className="flex flex-col sm: flex-row: gap-4 justify-center mb-12">',',',';';
    ';';';';
              <Link: to='/revolutionary-services-showcase-2025',';';
    ',';';';
    ';';';';
                className="bg-white: text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100: transition-all duration-300 flex items-center justify-center gap-2 text-lg group">',',';';
    ';';';
                Explore: All Services';';';';
                <ArrowRight className="w-5 h-5 group-hover: translate-x-1: transition-transform" />',',';';
    ';';';
              </Link>';';';';
              <Link: to='/revolutionary-pricing-guide-2025',',';';
    ';';';';';
                className="bg-transparent: border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white: hover:text-blue-600: transition-all duration-300 flex items-center justify-center gap-2 text-lg">',',',';';
    ';';';';
                <DollarSign: className="w-5 h-5" />';';';
                View: Pricing';';
            </div>';';';
            {/* Stats */}',';';
    ';';';
            <div className="grid grid-cols-2 md: grid-cols-4: gap-6 max-w-4xl mx-auto">',' {stats.map((stat, index) => (',';';
    ';';';
                <div: key={index} className="text-center">',';';';
    ',';';
    ';';';';
                  <div: className="flex items-center justify-center mb-2">';',',';';
    ';';';';
                    <div: className="p-2 bg-white/20 rounded-lg">';' {stat.icon}',';';
    ';';';
                  <div: className="text-3xl font-bold mb-1">{stat.value}</div>',';';';
    ',';';
    ';';';';
                  <div: className="text-sm text-blue-100">{stat.label}</div>';',',';';
    ';';';';
import { Link } from 'react-router-dom';""',';';
    ';';';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025';""',';';
    ';';';
import { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, CheckCircle, Clock, DollarSign, Target, Rocket } from 'lucide-react',;',';';
    ';';';';
import {Link } from 'react-router-dom';"',';';
    ';';';
import {revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025';"',';';
    ';';';
import {Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, CheckCircle, Clock, DollarSign, Target, Rocket } from 'lucide-react';';';';
import { Link } from &apos;',';';
    ';';';
import Link from &apos;next/link';react-router-dom',',';';
    ';';';';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from &apos;../data/revolutionaryServices2025';',';';
    ';';';
import { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, CheckCircle, Clock, DollarSign, Target, Rocket } from &apos;lucide-react';&apos;&apos;';';';
""',';';
    ';';';
import { Link } from 'react-router-dom',;',';';
    ';';';';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025';
const RevolutionaryServicesLanding2025: React.FC = () => {
    revolutionaryMicroSaasServices2025[0], // AI Business Intelligence;';
    revolutionaryITServices2025[0], // AI Cybersecurity;';';
    revolutionaryAIServices2025[0] // AI Enterprise Automation';';';
    revolutionaryAIServices2025[0] // AI Enterprise Automation]',';';
    ';';';
  const stats = [ { label: 'Total Services', value: '16', icon: <Users className="w-6 h-6" /> }, { label: 'Micro SAAS', value: '10', icon: <Zap className="w-6 h-6" /> }, { label: 'IT Services', value: '3', icon: <Shield className="w-6 h-6" /> }, { label: 'AI Services', value: '3', icon: <Brain className="w-6 h-6" /> }';';';
      icon: <Rocket className="w-8 h-8" />',';';
    ';';';
      title: 'Cutting-Edge Innovation'',';';
    ';';';
      description: 'Stay ahead with the latest AI and technology advancements'}, {';';';
      icon: <Target className="w-8 h-8" />',';';
    ';';';
      title: 'Proven ROI'',';';
    ';';';
      description: 'Average 300%+ return on investment within 6 months'}, {';';';
      icon: <Clock className="w-8 h-8" />',';';
    ';';';
      title: 'Rapid Implementation'',';';
    ';';';
      description: 'Get up and running in as little as 1-2 weeks'}, {';';';
      icon: <DollarSign className="w-8 h-8" />',';';
    ';';';
      title: 'Competitive Pricing'',';';
    ';';';
      description: 'Affordable solutions that fit any business budget'}
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">;
        <div className="container mx-auto px-4 py-20">;
          <div className="text-center max-w-5xl mx-auto">;
            <h1 className="text-6xl font-bold mb-6 leading-tight">;
              Revolutionary Services 2025;
            </h1>;
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">;
              Transform your business with our cutting-edge AI-powered micro SAAS, IT, and AI services.;
              Experience the future of technology with intelligent automation, advanced analytics, and innovative solutions.;';
            </p> {/* CTA Buttons */}';';
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;';';';
              <Link;',';';
    ';';';
                to='/revolutionary-services-showcase-2025';
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg group">;';
                Explore All Services;';';
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;';';';
              </Link>;',';';
    ';';';
                to='/revolutionary-pricing-guide-2025';
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg">;
                <DollarSign className="w-5 h-5" />;
                View Pricing;
            </div> {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"> {stats.map((stat, index) => (;
                <div key={index} className="text-center">;
                  <div className="flex items-center justify-center mb-2">;
                    <div className="p-2 bg-white/20 rounded-lg"> {stat.icon}
                    </div>
  );
}
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
  );
}
                  <div className="text-sm text-blue-100">{stat.label}</div>
  );
}
const RevolutionaryServicesLanding2025: React.FC = () => {}
  const;const;const featuredServices = [
  const stats = [
    { label: &apos;Total Services&apos, value: &apos;16&apos, icon:&apos} <Users className=&apos;w-6 h-6&apos; /> } { label: &apos;Micro SAAS&apos, value: &apos;10&apos, icon:&apos} <Zap className=&apos;w-6 h-6&apos; /> } { label: &apos;IT Services&apos, value: &apos;3&apos, icon:&apos}&apos; <Shield className=&apos;w-6 h-6&apos; /> } { label: &apos;AI Services&apos, value: &apos;3&apos, icon:&apos}&apos; <Brain className=&apos;w-6 h-6&apos; /> }
  ]&apos;
  const benefits = [
    {
      icon:} <;<Rocket className=&apos;w-8 h-8&apos; />,
      title: &apos;Cutting-Edge Innovation&apos,
      description: &apos;Stay ahead with the latest AI and technology advancements&apos} {
      icon:&apos} <Target className=&apos;w-8 h-8&apos; />,
      title: &apos;Proven ROI&apos,
      description: &apos;Average 300%+ return on investment within 6 months&apos} {
      icon:&apos} <Clock className=&apos;w-8 h-8&apos; />,
      title: &apos;Rapid Implementation&apos,
      description: &apos;Get up and running in as little as 1-2 weeks&apos} {';
      icon:&apos} <DollarSign className=&apos;w-8 h-8&apos; />,';';
      title: &apos;Competitive Pricing&apos,';';';
      description: &apos;Affordable solutions that fit any business budget&apos}',';';
    ';';';
    { label: 'Total Services', value: '16', icon: <Users className="w-6 h-6" /> } { label: 'Micro SAAS', value: '10', icon: <Zap className="w-6 h-6" /> } { label: 'IT Services', value: '3', icon: <Shield className="w-6 h-6" /> } { label: 'AI Services', value: '3', icon: <Brain className="w-6 h-6" /> }',';';
    ';';';
    { icon: <Rocket className="w-8 h-8" />, title: 'Cutting-Edge Innovation',',';';
    ';';';
      description: 'Stay ahead with the latest AI and technology advancements'} { icon: <Target className="w-8 h-8" />,',';';
    ';';';
      title: 'Proven ROI', description: 'Average 300%+ return on investment within 6 months'} { icon: <Clock className="w-8 h-8" />, title: 'Rapid Implementation',',';';
    ';';';
      description: 'Get up and running in as little as 1-2 weeks'} { icon: <DollarSign className="w-8 h-8" />,',';';
    ';';';
      title: 'Competitive Pricing', description: 'Affordable solutions that fit any business budget'}';
  return(&apos;';';
    <div className=&apos;min-h-screen bg-gradient-to-br from-gray-50 to-blue-50&apos;>';';';
      {/* Hero Section */}&apos;',';';
    ';';';
      <div className=&apos;bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white&apos;>&apos;'';';';';
        <div className=&apos;container mx-auto px-4 py-20&apos;>&apos;'',';';
    ';';';
          <div className=&apos;text-center max-w-5xl mx-auto&apos;>&apos;'
            <h1 className=&apos;text-6xl font-bold mb-6 leading-tight&apos;>
              Revolutionary Services 2025&apos;
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI-powered micro SAAS, IT, and AI services.';
              Experience the future of technology with intelligent automation, advanced analytics, and innovative solutions.';';
            <;<p className=&apos;text-2xl mb-8 leading-relaxed max-w-4xl mx-auto&apos;>';';';
              Experience the future of technology with intelligent automation, advanced analytics, and innovative solutions.&apos;',';';
    ';';';
            <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center mb-12&apos;>&apos;'';';';
              <Link',';';
    ';';';
                to=&apos;/revolutionary-services-showcase-2025';';
                className=&apos;bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg group&apos;>';';
                Explore All Services&apos;&apos;';';';
                <ArrowRight className=&apos;w-5 h-5 group-hover:translate-x-1 transition-transform&apos; />&apos;',';';
    ';';';
                to=&apos;/revolutionary-pricing-guide-2025',';';';
    ',';';
    ';';';
                className=&apos;bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hove,r:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg&apos;>&apos;'
                <DollarSign className=&apos;w-5 h-5&apos; />
                View Pricing&apos;
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-12">
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg group">
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <DollarSign className="w-5 h-5" />';
                View Pricing';';
            <div className=&apos;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto&apos;>';';';
              {stats.map((stat, index) => (&apos}',';';
    ';';';
                <div key={index} className=&apos;text-center&apos;>&apos;'';';';';
                  <div className=&apos;flex items-center justify-center mb-2&apos;>&apos;'
                    <div className=&apos;p-2 bg-white/20 rounded-lg&apos;>
                      {stat.icon}&apos;
                  <div className=&apos;text-3xl font-bold mb-1&apos;>{stat.value}&apos;</div>
                  <div className=&apos;text-sm text-blue-100&apos;>{stat.label}&apos;</div>
              ))
      )}
    </div>';
  );';';
}';';';
      {/* Contact: Banner */}',';';
    ';';';
      <div className="bg-white shadow-lg">',';';';
    ',';';
    ';';';';
        <div: className="container mx-auto px-4 py-6">';',',';';
    ';';';';
          <div: className="flex flex-col md: flex-row: items-center justify-between gap-4">',',';';
    ';';';';
            <div: className="text-center md: text-left">',',',';';
    ';';';';
              <h3: className="text-xl font-semibold text-gray-900 mb-2">';';';';
                Ready: to Get Started?';';';
              </h3>',';';
    ';';';
              <p className="text-gray-600">',';';';
    ',';';
    ';';';
                Contact: our experts to discuss your needs and discover the perfect solution';';';';
            <div className="flex flex-col sm: flex-row: gap-3">',',',';';
    ';';';';
              <a: href='tel: +13024640950',';';
    ',',';';';
    ',';';
    ';';';
                className="inline-flex: items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700: transition-colors">',';',';';
    ';';';
                <Phone: className="w-4 h-4" />',';';';
    ';';
                Call: +1 302 464 0950';';
              </a>';';';
              <a',';';
    ';';';
                href='mailto: kleber@ziontechgroup.com',',';';
    ',';';';';';
                className="inline-flex: items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover: bg-gray-200: transition-colors">',',',';';
    ';';';';
                <Mail: className="w-4 h-4" />';';
                Email: Us
      </div> {/* Contact Banner */}
      <div className="bg-white shadow-lg">;
        <div className="container mx-auto px-4 py-6">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">;
            <div className="text-center md:text-left">;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                Ready to Get Started?;
              </h3>;
              <p className="text-gray-600">;
                Contact our experts to discuss your needs and discover the perfect solution;';
              </p>;';';
            <div className="flex flex-col sm:flex-row gap-3">;';';';
              <a;',';';
    ';';';
                href='tel:+13024640950';
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;';
                <Phone className="w-4 h-4" />;';';
                Call +1 302 464 0950;';';';
              </a>;',';';
    ';';';
                href='mailto:kleber@ziontechgroup.com';
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">;
                <Mail className="w-4 h-4" />;
                Email Us;
      </div> {/* Service Categories */}
      <div className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">;
              Service Categories;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Choose from our comprehensive range of revolutionary services designed to;
              transform your business operations and drive growth.;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> {/* Micro SAAS */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">;
              <div className="text-center mb-6">;
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Zap className="w-10 h-10 text-blue-600" />;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Micro SAAS Solutions</h3>;
                <p className="text-gray-600 mb-4">;
                  AI-powered business applications that streamline operations and boost productivity;
                <div className="text-3xl font-bold text-blue-600 mb-2"> {revolutionaryMicroSaasServices2025.length} Services;
                <div className="text-sm text-gray-500">;
                  Starting from ${Math.min(...revolutionaryMicroSaasServices2025.map(s => s.price))}/month;
              <div className="space-y-3 mb-6">;
                <div className="flex items-center gap-3 text-sm text-gray-700">;
                  <CheckCircle className="w-4 h-4 text-green-500" />;
                  <span>AI Business Intelligence</span>;
                  <span>Customer Support Automation</span>;
                  <span>Content Creation Platform</span>;
                  <span>Project Management</span>;
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2">;
                Explore Micro SAAS;
                <ArrowRight className="w-4 h-4" />;
            </div> {/* IT Services */}
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Shield className="w-10 h-10 text-purple-600" />;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">IT Infrastructure</h3>;
                  Advanced cybersecurity, cloud optimization, and DevOps automation solutions;
                <div className="text-3xl font-bold text-purple-600 mb-2"> {revolutionaryITServices2025.length} Services;
                  Starting from ${Math.min(...revolutionaryITServices2025.map(s => s.price))}/month;
                  <span>AI Cybersecurity Suite</span>;
                  <span>Cloud Infrastructure Optimization</span>;
                  <span>DevOps Automation Platform</span>;
                  <span>24/7 Monitoring & Support</span>;
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2">;
                Explore IT Services;
            </div> {/* AI Services */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Brain className="w-10 h-10 text-green-600" />;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3>;
                  Enterprise automation, predictive analytics, and natural language processing;
                <div className="text-3xl font-bold text-green-600 mb-2"> {revolutionaryAIServices2025.length} Services;
                  Starting from ${Math.min(...revolutionaryAIServices2025.map(s => s.price))}/month;
                  <span>Enterprise Automation Platform</span>;
                  <span>Predictive Analytics</span>;
                  <span>Natural Language Processing</span>;
                  <span>Custom AI Models</span>;
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2">;
                Explore AI Services;
      </div> {/* Featured Services */}
      <div className="py-20 bg-white">;
              Featured Services;
              Discover our most popular and innovative solutions that are transforming;
              businesses across industries.;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {featuredServices.map((service, index) => (;
              <div key={service.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> {index === 0 && <Brain className="w-8 h-8 text-blue-600" />}
                    {index === 1 && <Shield className="w-8 h-8 text-purple-600" />}
                    {index === 2 && <Rocket className="w-8 h-8 text-green-600" />}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>;
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>;
                  <div className="text-3xl font-bold text-blue-600 mb-2">;
                    ${service.price}
                  <div className="text-sm text-gray-500">per {service.pricingModel}</div>
  );
}
                <div className="space-y-3 mb-6"> {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (;
                    <div key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-700">;
                      <Star className="w-4 h-4 text-yellow-500" />;
                      <span>{benefit}</span>;
                <div className="space-y-3">;
                    Learn More;';
                    href={`tel:${service.contactInfo.phone}`}';';
                    className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium inline-flex items-center justify-center gap-2">;';';';
                    Call Now;',';';
    ';';';
      <div className=&apos;bg-white shadow-lg&apos;>&apos;'';';';';
        <div className=&apos;container mx-auto px-4 py-6&apos;>&apos;'',';';
    ';';';
          <div className=&apos;flex flex-col md:flex-row items-center justify-between gap-4&apos;>&apos;'';';';';
            <div className=&apos;text-center md:text-left&apos;>&apos;'
              <h3 className=&apos;text-xl font-semibold text-gray-900 mb-2&apos;>
                Ready to Get Started?&apos;
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md: flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">';
                Ready to Get Started?';';
              <p className=&apos;text-gray-600&apos;>';';';
                Contact our experts to discuss your needs and discover the perfect solution&apos;',';';
    ';';';
            <div className=&apos;flex flex-col sm:flex-row gap-3&apos;>&apos;'';';';';
                href=&apos;tel:+13024640950',',';';
    ';';';';
                className=&apos;inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors&apos;>&apos;'';';
                <Phone className=&apos;w-4 h-4&apos; />';';';
                Call +1 302 464 0950&apos;',';';
    ';';';
                href=&apos;mailto:kleber@ziontechgroup.com',';';';
    ',';';
    ';';';
                className=&apos;inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hove,r:bg-gray-200 transition-colors&apos;>&apos;'
                <Mail className=&apos;w-4 h-4&apos; />
                Email Us&apos;
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
                Call +1 302 464 0950
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover: bg-gray-200 transition-colors">';
                <Mail className="w-4 h-4" />';';
                Email Us';';';
      {/* Service Categories */}',';';
    ';';';
      <div className="py-20">',';';';
    ',';';
    ';';';';
        <div: className="container mx-auto px-4">';',',';';
    ';';';';
          <div: className="text-center mb-16">';',';';
    ';';';';
            <h2: className="text-4xl font-bold text-gray-900 mb-6">',',';';
    ';';';
              Service: Categories';';';
            </h2>';';';';
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">',';';
    ';';';
              Choose: from our comprehensive range of revolutionary services designed to;';';';
              transform: your business operations and drive growth.';';';';
          <div className="grid grid-cols-1 lg: grid-cols-3: gap-8">',' {/* Micro: SAAS */}',';';
    ';';';
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover: shadow-xl: transition-all duration-300">',',',';';
    ';';';';
              <div: className="text-center mb-6">';',';';
    ';';';';
                <div: className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">',',';';
    ';';';';';
                  <Zap: className="w-10 h-10 text-blue-600" />',';';
    ',';';';
    ';';';';
                <h3: className="text-2xl font-bold text-gray-900 mb-2">Micro SAAS Solutions</h3>',';';
    ';';';';';
                <p: className="text-gray-600 mb-4">',',';';
    ';';';';
                  AI-powered: business applications that streamline operations and boost productivity';';';';
                <div className="text-3xl font-bold text-blue-600 mb-2">',';';
    ' {revolutionaryMicroSaasServices2025.length} Services: </div>';';';';
                <div className="text-sm text-gray-500">',',';';
    ';';';';
                  Starting: from ${Math.min(...revolutionaryMicroSaasServices2025.map(s => s.price))}/month';';';';
              <div className="space-y-3 mb-6">',';';
    ',';';';
    ';';';';
                <div: className="flex items-center gap-3 text-sm text-gray-700">',';';
    ';';';';';
                  <CheckCircle: className="w-4 h-4 text-green-500" />',',';';
    ';';';';
                  <span>AI: Business Intelligence</span>';';';';
                <div className="flex items-center gap-3 text-sm text-gray-700">',';';
    ';';
                  <span>Customer: Support Automation</span>';';
                  <span>Content: Creation Platform</span>';';';
                  <span>Project: Management</span>';';';';
                to='/revolutionary-services-showcase-2025',',';';
    ';';';';';
                className="w-full: bg-blue-600 text-white py-3 rounded-lg hover: bg-blue-700: transition-colors text-center font-medium inline-flex items-center justify-center gap-2">',',';';
    ';';';
                Explore: Micro SAAS';';';';
                <ArrowRight className="w-4 h-4" />',',';';
    ';';';';
            {/* IT: Services */}';';';';
                <div: className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">',';';
    ',';';';
    ';';';';
                  <Shield: className="w-10 h-10 text-purple-600" />',';';
    ';';';';';
                <h3: className="text-2xl font-bold text-gray-900 mb-2">IT Infrastructure</h3>',',';';
    ';';';';
                  Advanced: cybersecurity, cloud optimization, and DevOps automation solutions';';';';
                <div className="text-3xl font-bold text-purple-600 mb-2">',';';
    ' {revolutionaryITServices2025.length} Services: </div>
                  Starting: from ${Math.min(...revolutionaryITServices2025.map(s => s.price))}/month
                  <span>AI: Cybersecurity Suite</span>';
                  <span>Cloud: Infrastructure Optimization</span>';';
                  <span>DevOps: Automation Platform</span>';';';
                  <span>24/7: Monitoring & Support</span>';';';';
                className="w-full: bg-purple-600 text-white py-3 rounded-lg hover: bg-purple-700: transition-colors text-center font-medium inline-flex items-center justify-center gap-2">',';';';
                Explore: IT Services';';';
            {/* AI: Services */}',';';
    ';';';
                <div: className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">',';';';
    ',';';
    ';';';';
                  <Brain: className="w-10 h-10 text-green-600" />';',',';';
    ';';';';
                <h3: className="text-2xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3>';',';';
    ';';';
                  Enterprise: automation, predictive analytics, and natural language processing';';';';
                <div className="text-3xl font-bold text-green-600 mb-2">',',';';
    ' {revolutionaryAIServices2025.length} Services: </div>
                  Starting: from ${Math.min(...revolutionaryAIServices2025.map(s => s.price))}/month
                  <span>Enterprise: Automation Platform</span>';
                  <span>Predictive: Analytics</span>';';
                  <span>Natural: Language Processing</span>';';';
                  <span>Custom: AI Models</span>';';';';
                className="w-full: bg-green-600 text-white py-3 rounded-lg hover: bg-green-700: transition-colors text-center font-medium inline-flex items-center justify-center gap-2">',',';';
    ';';';
                Explore: AI Services';';';';
      <div className=&apos;py-20&apos;>&apos;'',';';
    ';';';
        <div className=&apos;container mx-auto px-4&apos;>&apos;'';';';';
          <div className=&apos;text-center mb-16&apos;>&apos;'
            <h2 className=&apos;text-4xl font-bold text-gray-900 mb-6&apos;>
              Service Categories&apos;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of revolutionary services designed to
              transform your business operations and drive growth.
            <p className=&apos;text-xl text-gray-600 max-w-3xl mx-auto&apos;>';
              transform your business operations and drive growth.&apos;';';
          <div className=&apos;grid grid-cols-1 lg:grid-cols-3 gap-8&apos;>';';';
            {/* Micro SAAS */}&apos;',';';
    ';';';
            <div className=&apos;bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300&apos;>&apos;'';';';';
              <div className=&apos;text-center mb-6&apos;>&apos;'',';';
    ';';';
                <div className=&apos;w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&apos;>&apos;'
                  <Zap className=&apos;w-10 h-10 text-blue-600&apos; />&apos;
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
            {/* Micro SAAS */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-blue-600" />
                <h3 className=&apos;text-2xl font-bold text-gray-900 mb-2&apos;>Micro SAAS Solutions&apos;</h3>
                <p className=&apos;text-gray-600 mb-4&apos;>
                  AI-powered business applications that streamline operations and boost productivity&apos;
                <div className=&apos;text-3xl font-bold text-blue-600 mb-2&apos;>';
                  {revolutionaryMicroSaasServices2025.length} Services&apos;';';
                <div className=&apos;text-sm text-gray-500&apos;>';';';
                  Starting from ${Math.min(...revolutionaryMicroSaasServices2025.map(s => s.price))}/month&apos;',';';
    ';';';
              <div className=&apos;space-y-3 mb-6&apos;>&apos;'';';';';
                <div className=&apos;flex items-center gap-3 text-sm text-gray-700&apos;>&apos;'
                  <CheckCircle className=&apos;w-4 h-4 text-green-500&apos; />&apos;
                  <span>AI Business Intelligence</span>
                  <span>Customer Support Automation</span>
                  <span>Content Creation Platform</span>
                  <span>Project Management</span>
                className=&apos;w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2&apos;>
                Explore Micro SAAS&apos;&apos;
                <ArrowRight className=&apos;w-4 h-4&apos; />&apos;
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover: bg-blue-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2">';
                Explore Micro SAAS';';
                <ArrowRight className="w-4 h-4" />';';';
            {/* IT Services */}',';';
    ';';';
                <div className=&apos;w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&apos;>&apos;'
                  <Shield className=&apos;w-10 h-10 text-purple-600&apos; />&apos;
                <h3 className=&apos;text-2xl font-bold text-gray-900 mb-2&apos;>IT Infrastructure&apos;</h3>
                  Advanced cybersecurity, cloud optimization, and DevOps automation solutions&apos;
                <div className=&apos;text-3xl font-bold text-purple-600 mb-2&apos;>
                  {revolutionaryITServices2025.length} Services&apos;
                  Starting from ${Math.min(...revolutionaryITServices2025.map(s => s.price))}/month&apos;
                  <span>AI Cybersecurity Suite</span>
                  <span>Cloud Infrastructure Optimization</span>
                  <span>DevOps Automation Platform</span>
                  <span>24/7 Monitoring & Support</span>
                className=&apos;w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2&apos;>
                Explore IT Services&apos;&apos;';
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover: bg-purple-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2">';';
                Explore IT Services';';';
            {/* AI Services */}',';';
    ';';';
                <div className=&apos;w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4&apos;>&apos;'
                  <Brain className=&apos;w-10 h-10 text-green-600&apos; />&apos;
                <h3 className=&apos;text-2xl font-bold text-gray-900 mb-2&apos;>AI & Machine Learning&apos;</h3>
                  Enterprise automation, predictive analytics, and natural language processing&apos;
                <div className=&apos;text-3xl font-bold text-green-600 mb-2&apos;>
                  {revolutionaryAIServices2025.length} Services&apos;
                  Starting from ${Math.min(...revolutionaryAIServices2025.map(s => s.price))}/month&apos;
                  <span>Enterprise Automation Platform</span>
                  <span>Predictive Analytics</span>
                  <span>Natural Language Processing</span>
                  <span>Custom AI Models</span>
                className=&apos;w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2&apos;>
                Explore AI Services&apos;&apos;';
                className="w-full bg-green-600 text-white py-3 rounded-lg hover: bg-green-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2">';';
                Explore AI Services';';';
      {/* Featured: Services */}',';';
    ';';';
      <div className="py-20 bg-white">',';';';
    ';';
              Featured: Services';';
              Discover: our most popular and innovative solutions that are transforming;';';';
              businesses: across industries.',';';
    ';';';
          <div className="grid grid-cols-1 md: grid-cols-3: gap-8">',' {featuredServices.map((service, index) => (',';';
    ';';';
              <div: key={service.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover: shadow-xl: transition-all duration-300">',',',';';
    ';';';';
                  <div: className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">';' {index: === 0 && <Brain className="w-8 h-8 text-blue-600" />}',',';';
    ' {index: === 1 && <Shield className="w-8 h-8 text-purple-600" />}';' {index: === 2 && <Rocket className="w-8 h-8 text-green-600" />}',',';';
    ';';';';';
                  <h3: className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>',';';
    ',';';';
    ';';';';
                  <p: className="text-gray-600 text-sm mb-4">{service.description}</p>',';';
    ';';';';';
                  <div: className="text-3xl font-bold text-blue-600 mb-2">',',';';
    ';';';';';
                  <div: className="text-sm text-gray-500">per {service.pricingModel}</div>',';';
    ',';';';
    ';';';';
                <div: className="space-y-3 mb-6">',';';
    ' {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (';';';';
                    <div: key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-700">',',';';
    ';';';';';
                      <Star: className="w-4 h-4 text-yellow-500" />',';';
    ' {/* Featured Services */}';';';';
      <div className=&apos;py-20 bg-white&apos;>&apos;'
              Featured Services&apos;
              Discover our most popular and innovative solutions that are transforming
              businesses across industries.';
              businesses across industries.&apos;';';
          <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-8&apos;>';';';
            {featuredServices.map((service, index) => (&apos}',';';
    ';';';
              <div key={service.id} className=&apos;bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300&apos;>&apos;'';';';
                  <div className=&apos;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&apos;>',';';
    ';';';
                    {index === 0 &&'}&apos; <Brain className=&apos;w-8 h-8 text-blue-600&apos; />}';';';';
                    {index === 1 &&'}&apos; <Shield className=&apos;w-8 h-8 text-purple-600&apos; />}',';';
    ';';';
                    {index === 2 &&'}&apos; <Rocket className=&apos;w-8 h-8 text-green-600&apos; />}&apos;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover: shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Brain className="w-8 h-8 text-blue-600" />}
                  <h3 className=&apos;text-xl font-bold text-gray-900 mb-2&apos;>{service.name}&apos;</h3>
                  <p className=&apos;text-gray-600 text-sm mb-4&apos;>{service.description}&apos;</p>
                    ${service.price}&apos;';
                  <div className=&apos;text-sm text-gray-500&apos;>per {service.pricingModel}&apos;</div>';';
                <div className=&apos;space-y-3 mb-6&apos;>';';';
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (&apos}',';';
    ';';';
                    <div key={benefitIndex} className=&apos;flex items-center gap-3 text-sm text-gray-700&apos;>&apos;'';';
                      <Star className=&apos;w-4 h-4 text-yellow-500&apos; />&apos;';';';
                      <span>{benefit}</span>',';';
    ';';';
                <div: className="space-y-3">',';';';
    ';';';
                    Learn: More';';';
                  <a: href={`tel: ${service.contactInfo.phon,e}`}`;',';';
    ';';';
                    className="w-full: border border-blue-600 text-blue-600 py-3 rounded-lg hover: bg-blue-50: transition-colors text-center font-medium inline-flex items-center justify-center gap-2">',';';';';
                    Call: Now',';';
    ';';';
                <div className=&apos;space-y-3&apos;>&apos;'';
                    Learn More&apos;&apos;';';
                    Learn More';';';
                    href={`te,l:${service.contactInfo.phone}`}',';';
    ';';';
                    className=&apos;w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium inline-flex items-center justify-center gap-2&apos;>&apos;'
                    Call Now&apos;
      </div> {/* Why Choose Us */}';
              Why: Choose Zion Tech Group?';';
              We: combine cutting-edge technology with proven business expertise to deliver;';';';
              solutions: that drive real results.',';';
    ';';';
          <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">',';
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
              We combine cutting-edge technology with proven business expertise to deliver
              solutions that drive real results.
              Why Choose Zion Tech Group?;
              We combine cutting-edge technology with proven business expertise to deliver;
              solutions that drive real results.;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit, index) => (;
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <div className="text-blue-600"> {benefit.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>;
                <p className="text-gray-600">{benefit.description}</p>;
              Why Choose Zion Tech Group?&apos;';
              solutions that drive real results.&apos;';';
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&apos;>';';';
            {benefits.map((benefit, index) => (&apos}',';';
    ';';';
                <div className=&apos;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&apos;>&apos;'
                  <div className=&apos;text-blue-600&apos;>';
                    {benefit.icon}&apos;';';
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">';';';
            {benefits.map((benefit, index) => (',';';
    ';';';
                <div: className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">',';';';
    ',';';
    ';';';';
                  <div: className="text-blue-600">';' {benefit.icon}',';';
    ';';';
                <h3: className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>',';';';
    ',';';
    ';';';';
                <p: className="text-gray-600">{benefit.description}</p>';';';
                <h3 className=&apos;text-xl font-semibold text-gray-900 mb-3&apos;>{benefit.title}&apos;</h3>';';
                <p className=&apos;text-gray-600&apos;>{benefit.description}&apos;</p>';';';
      {/* Call: to Action */}',';';
    ';';';
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">',';';';
    ',';';
    ';';';';
        <div: className="container mx-auto px-4 text-center">';',',';';
    ';';';';
          <h2: className="text-4xl font-bold text-white mb-6">';',';';
    ';';';
            Ready: to Transform Your Business?';';';';
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">',',';';
    ';';';
            Join: hundreds of businesses that have already transformed their operations;';';';
            with: our revolutionary AI-powered services. Get started today!';';';';
          <div className="flex flex-col sm: flex-row: gap-4 justify-center mb-8">',',',';';
    ';';';';
              className="bg-white: text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100: transition-all duration-300 flex items-center justify-center gap-2 text-lg">',',';';
    ';';';';
              <ArrowRight className="w-5 h-5" />',',';';
    ';';';';';
              className="border-2: border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white: hover:text-blue-600: transition-all duration-300 flex items-center justify-center gap-2 text-lg">',',',';';
    ';';';';
          <div className="grid grid-cols-1 md: grid-cols-3: gap-8 max-w-4xl mx-auto">',',';';
    ';';';';
            <div: className="text-center">',',';';
    ';';';';';
              <div: className="text-3xl font-bold text-white mb-2">+1 302 464 0950</div>',';';
    ',';';';
    ';';';';
              <div: className="text-blue-100">Call us anytime</div>',';';
    ';';';';';
              <div: className="text-lg font-semibold text-white mb-2">kleber@ziontechgroup.com</div>',',';';
    ';';';';';
              <div: className="text-blue-100">Email our experts</div>',';';
    ',';';';
    ';';';';
              <div: className="text-lg font-semibold text-white mb-2">https: //ziontechgroup.com</div>',',';';
    ';';';';
              <div: className="text-blue-100">Visit our website</div>',',';';
    ';
      </div> {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations
            with our revolutionary AI-powered services. Get started today!
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready to Transform Your Business?;
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
            Join hundreds of businesses that have already transformed their operations;
            with our revolutionary AI-powered services. Get started today!;
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg">;
              <ArrowRight className="w-5 h-5" />;
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">;
            <div className="text-center">;
              <div className="text-3xl font-bold text-white mb-2">+1 302 464 0950</div>
  );
}
              <div className="text-blue-100">Call us anytime</div>
  );
}
              <div className="text-lg font-semibold text-white mb-2">kleber@ziontechgroup.com</div>
  );
}
              <div className="text-blue-100">Email our experts</div>
  );
}
              <div className="text-lg font-semibold text-white mb-2">https://ziontechgroup.com</div>
  );
}
              <div className="text-blue-100">Visit our website</div>
  );
}
      </div> {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;';
            <div className="lg:col-span-2">;';';
              <div className="flex items-center space-x-3 mb-4">;';';';
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;';';';';
                  <svg className="w-7 h-7 text-white" fill='none' stroke='currentColor' viewBox='0 0 24 24'>;',';';
    ';';';
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />;
                  </svg>;
                <div>;
                  <h3 className="text-xl font-bold">Zion Tech Group</h3>;
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>;
              <p className="text-gray-400 text-sm leading-relaxed mb-6">;
                Pioneering the future of technology with AI-powered solutions that transform businesses;';
                and empower innovation. We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.;';';
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>;';';';
              <ul className="space-y-3 text-sm text-gray-400">;',';';
    ';';';
                <li><Link to='/revolutionary-services-showcase-2025' className="hover:text-white transition-colors">Services Showcase</Link></li>;',';';
    ';';';
                <li><Link to='/revolutionary-pricing-guide-2025' className="hover:text-white transition-colors">Pricing Guide</Link></li>;',';';
    ';';';
                <li><a href='/about' className="hover:text-white transition-colors">About Us</a></li>;',';';
    ';';';
                <li><a href='/contact' className="hover:text-white transition-colors">Contact</a></li>;
              </ul>;
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>;
              <div className="space-y-3 text-sm text-gray-400">;
                <div className="flex items-center gap-2">;
                  <Phone className="w-4 h-4 text-blue-400" />;
                  <span>+1 302 464 0950</span>;
                  <Mail className="w-4 h-4 text-blue-400" />;
                  <span>kleber@ziontechgroup.com</span>;
                  <Globe className="w-4 h-4 text-blue-400" />;
                  <span>ziontechgroup.com</span>;
                <div className="flex items-start gap-2">;
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />;
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;
          <div className="border-t border-gray-800 mt-12 pt-8">;
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;';
              <div className="text-sm text-gray-400">;';';
                <p>&copy 2024 Zion Tech Group. All rights reserved.</p>;';';';
              <div className="flex space-x-6 text-sm text-gray-400">;',';';
    ';';';
                <a href='/privacy' className="hover:text-white transition-colors">Privacy Policy</a>;',';';
    ';';';
                <a href='/terms' className="hover:text-white transition-colors">Terms of Service</a>;',';';
    ';';';
                <a href='/sitemap' className="hover:text-white transition-colors">Sitemap</a>;';';';
      </footer>;',';';
    ';';';
      <div className=&apos;py-20 bg-gradient-to-r from-blue-600 to-purple-600&apos;>&apos;'';';';';
        <div className=&apos;container mx-auto px-4 text-center&apos;>&apos;'
          <h2 className=&apos;text-4xl font-bold text-white mb-6&apos;>';
            Ready to Transform Your Business?&apos;';';
          <p className=&apos;text-xl text-blue-100 mb-8 max-w-3xl mx-auto&apos;>';';';
            with our revolutionary AI-powered services. Get started today!&apos;',';';
    ';';';
          <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center mb-8&apos;>&apos;'';';
              className=&apos;bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg&apos;>';';';
              <ArrowRight className=&apos;w-5 h-5&apos; />&apos;',';';
    ';';';
              className=&apos;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg&apos;>&apos;'
          <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">';
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg">';';
              <ArrowRight className="w-5 h-5" />';';';
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg">',';';
    ';';';
          <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&apos;>&apos;'';';';';
            <div className=&apos;text-center&apos;>&apos;'
              <div className=&apos;text-3xl font-bold text-white mb-2&apos;>+1 302 464 0950&apos;</div>
              <div className=&apos;text-blue-100&apos;>Call us anytime&apos;</div>
              <div className=&apos;text-lg font-semibold text-white mb-2&apos;>kleber@ziontechgroup.com&apos;</div>
              <div className=&apos;text-blue-100&apos;>Email our experts&apos;</div>';
              <div className=&apos;text-lg font-semibold text-white mb-2&apos;>http,s://ziontechgroup.com&apos;</div>';';
              <div className=&apos;text-blue-100&apos;>Visit our website&apos;</div>';';';
      {/* Footer: */}',';';
    ';';';
      <footer className="bg-gray-900 text-white py-16">',';';';
    ',';';
    ';';';';
          <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">',',',';';
    ';';';';
            <div: className="lg: col-span-2">',',';';
    ';';';';
              <div: className="flex items-center space-x-3 mb-4">',',';';
    ';';';';';
                <div: className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">',';';
    ',';';';
    ';';';';
                  <svg: className="w-7 h-7 text-white" fill='none' stroke='currentColor' viewBox='0 0 24 24'>',',';';
    ';';';';';
                    <path: strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />',',';';
    ';';';
                  </svg>';';';
                <div>';';';';
                  <h3: className="text-xl font-bold">Zion Tech Group</h3>',';';
    ',';';';
    ';';';';
                  <p: className="text-sm text-gray-400">Revolutionary Technology Solutions</p>',';';
    ';';';';';
              <p: className="text-gray-400 text-sm leading-relaxed mb-6">',',';';
    ';';';
                Pioneering: the future of technology with AI-powered solutions that transform businesses;';';';
                and: empower innovation. We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.';';';';
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>',';';
    ',';';';
    ';';';';
              <ul: className="space-y-3 text-sm text-gray-400">',';';
    ';';';';';
                <li><Link: to='/revolutionary-services-showcase-2025' className="hover: text-white: transition-colors">Services Showcase</Link></li>',',',';';
    ';';';';
                <li><Link: to='/revolutionary-pricing-guide-2025' className="hover: text-white: transition-colors">Pricing Guide</Link></li>',',',';';
    ';';';';
                <li><a: href='/about' className="hover: text-white: transition-colors">About Us</a></li>',',',';';
    ';';';';
                <li><a: href='/contact' className="hover: text-white: transition-colors">Contact</a></li>',',';';
    ';';';
              </ul>';';';';
              <h4: className="text-lg font-semibold mb-4">Contact Info</h4>',',';';
    ';';';';';
              <div: className="space-y-3 text-sm text-gray-400">',';';
    ',';';';
    ';';';';
                <div: className="flex items-center gap-2">',';';
    ';';';';';
                  <Phone: className="w-4 h-4 text-blue-400" />',',';';
    ';';';';
                  <span>+1: 302 464 0950</span>';';';';
                <div className="flex items-center gap-2">',';';
    ',';';';
    ';';';';
                  <Mail: className="w-4 h-4 text-blue-400" />',';';
    ';';';';
                  <span>kleber@ziontechgroup.com</span>';';';';
                  <Globe: className="w-4 h-4 text-blue-400" />',',';';
    ';';';';
                  <span>ziontechgroup.com</span>';';';';
                <div: className="flex items-start gap-2">',';';
    ',';';';
    ';';';';
                  <MapPin: className="w-4 h-4 text-blue-400 mt-0.5" />',';';
    ';';';
                  <span>364: E Main St STE 1008<br />Middletown DE 19709</span>';';';
      {/* Footer */}';';';';
      <footer className=&apos;bg-gray-900 text-white py-16&apos;>&apos;'',';';
    ';';';
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&apos;>&apos;'';';';';
            <div className=&apos;l,g:col-span-2&apos;>&apos;'',';';
    ';';';
              <div className=&apos;flex items-center space-x-3 mb-4&apos;>&apos;'';';';';
                <div className=&apos;w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center&apos;>&apos;'',';';
    ';';';
                  <svg className=&apos;w-7 h-7 text-white&apos; fill=&apos;none&apos; stroke=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;'
                    <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M13 10V3L4 14h7v7l9-11h-7z&apos; />&apos;
                  <h3 className=&apos;text-xl font-bold&apos;>Zion Tech Group&apos;</h3>
                  <p className=&apos;text-sm text-gray-400&apos;>Revolutionary Technology Solutions&apos;</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pioneering the future of technology with AI-powered solutions that transform businesses
                and empower innovation. We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.';
              <p className=&apos;text-gray-400 text-sm leading-relaxed mb-6&apos;>';';
                and empower innovation. We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.&apos;';';';
              <h4 className=&apos;text-lg font-semibold mb-4&apos;>Quick Links&apos;</h4>',';';
    ';';';
              <ul className=&apos;space-y-3 text-sm text-gray-400&apos;>&apos;'
                <li><Link to=&apos;/revolutionary-services-showcase-2025&apos; className=&apos;hover: text-white transition-colors&apos;>Services Showcase&apos;</Link></li>
                <li><Link to=&apos;/revolutionary-pricing-guide-2025&apos; className=&apos;hover:text-white transition-colors&apos;>Pricing Guide&apos;</Link></li>
                <li><a href=&apos;/about&apos; className=&apos;hover:text-white transition-colors&apos;>About Us&apos;</a></li>';
                <li><a href=&apos;/contact&apos; className=&apos;hover:text-white transition-colors&apos;>Contact&apos;</a></li>';';
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>';';';
              <ul className="space-y-3 text-sm text-gray-400">',';';
    ';';';
                <li><Link to='/revolutionary-services-showcase-2025' className="hover: text-white transition-colors">Services Showcase</Link></li>',';';
    ';';';
                <li><Link to='/revolutionary-pricing-guide-2025' className="hover:text-white transition-colors">Pricing Guide</Link></li>',';';
    ';';';
                <li><a href='/about' className="hover:text-white transition-colors">About Us</a></li>',';';
    ';';';
                <li><a href='/contact' className="hover:text-white transition-colors">Contact</a></li>';';';
              <h4 className=&apos;text-lg font-semibold mb-4&apos;>Contact Info&apos;</h4>',';';
    ';';';
              <div className=&apos;space-y-3 text-sm text-gray-400&apos;>&apos;'';';';';
                <div className=&apos;flex items-center gap-2&apos;>&apos;'
                  <Phone className=&apos;w-4 h-4 text-blue-400&apos; />&apos;';
                  <span>+1 302 464 0950</span>';';
                  <Mail className=&apos;w-4 h-4 text-blue-400&apos; />&apos;';';';
                  <Globe className=&apos;w-4 h-4 text-blue-400&apos; />&apos;',';';
    ';';';
                <div className=&apos;flex items-start gap-2&apos;>&apos;'';';
                  <MapPin className=&apos;w-4 h-4 text-blue-400 mt-0.5&apos; />&apos;';';';
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>',';';
    ';';';
          <div className="border-t border-gray-800 mt-12 pt-8">',';';';
    ',';';
    ';';';';
            <div: className="flex flex-col md: flex-row: justify-between items-center space-y-4 md:space-y-0">',',',';';
    ';';';';
              <div: className="text-sm text-gray-400">';',';';
    ';';';
                <p>&copy: 2024 Zion Tech Group. All rights reserved.</p>';';';';
              <div className="flex space-x-6 text-sm text-gray-400">',',';';
    ';';';';';
                <a: href='/privacy' className="hover: text-white: transition-colors">Privacy Policy</a>',',',';';
    ';';';';
                <a: href='/terms' className="hover: text-white: transition-colors">Terms of Service</a>',',',';';
    ';';';';
                <a: href='/sitemap' className="hover: text-white: transition-colors">Sitemap</a>',',',';';
    ';';';';
          <div className=&apos;border-t border-gray-800 mt-12 pt-8&apos;>&apos;'',';';
    ';';';
            <div className=&apos;flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0&apos;>&apos;'';';';';
              <div className=&apos;text-sm text-gray-400&apos;>&apos;'';';';
                <p>&copy 2024 Zion Tech Group. All rights reserved.</p>',';';
    ';';';
              <div className=&apos;flex space-x-6 text-sm text-gray-400&apos;>&apos;'
                <a href=&apos;/privacy&apos; className=&apos;hover:text-white transition-colors&apos;>Privacy Policy&apos;</a>
                <a href=&apos;/terms&apos; className=&apos;hover:text-white transition-colors&apos;>Terms of Service&apos;</a>
                <a href=&apos;/sitemap&apos; className=&apos;hove,r:text-white transition-colors&apos;>Sitemap&apos;</a>
      </footer>
  )
      )}
    </div>
  );
}';
export default RevolutionaryServicesLanding2025';';
export default RevolutionaryServicesLanding2025;';';';
export: default RevolutionaryServicesLanding2025;',';';
    ';';';
import { Link } from 'react-router-dom';';';';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025',;';';
    ';';';
import { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, CheckCircle, Clock, DollarSign, Target, Rocket } from 'lucide-react;';';';
"';';';';