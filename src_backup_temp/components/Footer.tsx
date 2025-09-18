import React from 'react';
import {;
  Mail;
  Phone;
  MapPin;
  Linkedin;
  Twitter;
  Github;
  ArrowUp;
  Shield;
  Zap;
  Brain;
  Cloud;
  Building;
  Users;
  FileText;
  TrendingUp;
  Briefcase;
  Newspaper;
  Target;
  Heart;
  DollarSign;
  ExternalLink;
} from 'lucide-react';
;
export function Footer() {;
  const currentYear = new Date().getFullYear();
;
  const scrollToTop = () => {;
    window.scrollTo({ "top": "0", "behavior": 'smooth' });
  };
;
  return (;
    <footer className="bg-gray-900 text-white relative overflow-hidden">;
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">;
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>;
      </div>;
      ;
      <div className="relative z-10">;
        <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 py-16">;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-5 gap-8 "lg":gap-12">;
            ;
            {/* Company Info */"}
            <div className=""lg": "col-span-2">;
              <Link to="/" className="flex items-center space-x-3 mb-6 group">;
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-"hover":scale-110 transition-transform duration-300">;
                  <Zap className="w-7 h-7 text-white" />;
                </div>;
                <h2 className="text-2xl font-bold text-white group-"hover":text-blue-400 transition-colors">;
                  Zion Tech Group;
                </h2>;
              </Link>;
              ;
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">;
                Pioneering the future of technology with innovative AI", IT infrastructure, and cutting-edge Micro SaaS solutions that transform businesses worldwide.;
              </p>;
              ;
              {/* Contact Information */}
              <div className="space-y-4">;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Phone className="w-5 h-5 text-cyan-400" />;
                  <a href=""tel": "+13024640950" className=""hover":text-cyan-400 transition-colors">;
                    +1 302 464 0950;
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Mail className="w-5 h-5 text-cyan-400" />;
                  <a href=""mailto":kleber@ziontechgroup.com" className=""hover":text-cyan-400 transition-colors">;
                    kleber@ziontechgroup.com;
                  </a>;
                </div>;
                <div className="flex items-start space-x-3 text-gray-300">;
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />;
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;
                </div>;
              </div>;
            </div>;
            {/* Services */"}
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;
                <Cloud className="w-5 h-5 mr-2 text-cyan-400" />;
                Services;
              </h3>;
              <ul className="space-y-3">;
                <li>;
                  <Link to="/services" className="text-gray-300 "hover": "text-cyan-400 transition-colors flex items-center group">;
                    <span>All Services</span>;
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-"hover":opacity-100 transition-opacity" />;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/new-services-2025" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <span>New Services 2025</span>;
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-"hover":opacity-100 transition-opacity" />;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/ai-services" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Brain className="w-4 h-4 mr-2" />;
                    <span>AI Services</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/it-services" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Building className="w-4 h-4 mr-2" />;
                    <span>IT Services</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/micro-saas" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Zap className="w-4 h-4 mr-2" />;
                    <span>Micro SaaS</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/solutions" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Target className="w-4 h-4 mr-2" />;
                    <span>Solutions</span>;
                  </Link>;
                </li>;
              </ul>;
            </div>;
            {/* Company */"}
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;
                <Users className="w-5 h-5 mr-2 text-cyan-400" />;
                Company;
              </h3>;
              <ul className="space-y-3">;
                <li>;
                  <Link to="/about" className="text-gray-300 "hover": "text-cyan-400 transition-colors">;
                    About Us;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/careers" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Briefcase className="w-4 h-4 mr-2" />;
                    <span>Careers</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/news" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <Newspaper className="w-4 h-4 mr-2" />;
                    <span>News</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/contact" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    Contact;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/help" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    Help Center;
                  </Link>;
                </li>;
              </ul>;
            </div>;
            {/* Resources */"}
            <div>;
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">;
                <FileText className="w-5 h-5 mr-2 text-cyan-400" />;
                Resources;
              </h3>;
              <ul className="space-y-3">;
                <li>;
                  <Link to="/pricing" className="text-gray-300 "hover": "text-cyan-400 transition-colors flex items-center group">;
                    <DollarSign className="w-4 h-4 mr-2" />;
                    <span>Pricing</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/comprehensive-pricing-guide-2025" className="text-gray-300 "hover":text-cyan-400 transition-colors flex items-center group">;
                    <TrendingUp className="w-4 h-4 mr-2" />;
                    <span>Pricing Guide 2025</span>;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/white-papers" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    White Papers;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/faq" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    FAQ;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/request-quote" className="text-gray-300 "hover":text-cyan-400 transition-colors">;
                    Request Quote;
                  </Link>;
                </li>;
              </ul>;
            </div>;
          </div>;
          {/* Social Media & Additional Links */"}
          <div className="border-t border-gray-800 mt-12 pt-8">;
            <div className="flex flex-col "lg": "flex-row justify-between items-center space-y-6 "lg":space-y-0">;
              ;
              {/* Social Media */"}
              <div className="flex items-center space-x-6">;
                <span className="text-gray-400 text-sm">Follow "us": "</span>;
                <div className="flex space-x-4">;
                  <a;
                    href="#";
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                    aria-label="LinkedIn";
                  >;
                    <Linkedin className="w-5 h-5" />;
                  </a>;
                  <a;
                    href="#";
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                    aria-label="Twitter";
                  >;
                    <Twitter className="w-5 h-5" />;
                  </a>;
                  <a;
                    href="#";
                    className="text-gray-400 "hover":text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                    aria-label="GitHub";
                  >;
                    <Github className="w-5 h-5" />;
                  </a>;
                </div>;
              </div>;
              {/* Legal Links */"}
              <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">;
                <Link to="/privacy" className="text-gray-400 "hover": "text-cyan-400 transition-colors flex items-center">;
                  <Shield className="w-4 h-4 mr-1" />;
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-gray-400 "hover":text-cyan-400 transition-colors">;
                  Terms of Service;
                </Link>;
                <Link to="/cookies" className="text-gray-400 "hover":text-cyan-400 transition-colors">;
                  Cookie Policy;
                </Link>;
              </div>;
              {/* Back to Top */"}
              <button;
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 "hover": "text-cyan-400 transition-colors p-2 "hover":bg-gray-800 rounded-lg";
                aria-label="Back to top";
              >;
                <ArrowUp className="w-4 h-4" />;
                <span className="text-sm">Back to Top</span>;
              </button>;
            </div>;
          </div>;
          {/* Copyright */"}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">;
            <div className="flex flex-col "md": "flex-row justify-between items-center space-y-4 "md":space-y-0">;
              <p className="text-gray-400 text-sm flex items-center">;
                © {currentYear"} Zion Tech Group. All rights reserved.;
                <Heart className="w-4 h-4 mx-2 text-red-500" />;
                Made with passion for innovation.;
              </p>;
              <div className="flex items-center space-x-4 text-sm text-gray-400">;
                <span>Powered by cutting-edge technology</span>;
                <div className="flex space-x-2">;
                  <Brain className="w-4 h-4 text-cyan-400" />;
                  <Cloud className="w-4 h-4 text-blue-400" />;
                  <Shield className="w-4 h-4 text-green-400" />;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
import React, { useState } from 'react';
import Link from 'next/link';
  TrendingUp,
  Briefcase,
  Newspaper,
  Target,
  Heart,
import { Zap, Phone, Mail, MapPin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Footer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Footer;
