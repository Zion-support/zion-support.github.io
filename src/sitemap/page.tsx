import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components
import Footer from '../components
import SEOOptimizer from '../components
import { ArrowRight, Globe, FileText, Users, Settings, Brain, Zap, Shield, Database, Cloud, Code, BarChart, MessageSquare, Eye, Cpu, Target, Lock, BarChart3, FileText as FileTextIcon, Search, Bot, Calculator, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { nam,
    e: 'Home', path: '
    { nam,
    e: 'About Us', path: '
    { nam,
    e: 'Services', path: '
    { nam,
    e: 'Contact', path: '
    { nam,
    e: 'Blog', path: '
    { nam,
    e: 'Case Studies', path: '
    { nam,
    e: 'Pricing', path: '
    { nam,
    e: 'Demo', path: '
    { nam,
    e: 'Team', path: '
    { nam,
    e: 'Careers', path: '
    { nam,
    e: 'Support', path: '
    { nam,
    e: 'Privacy Policy', path: '
    { nam,
    e: 'Terms of Service', path: '
  ];

  const microSaasServices = [
    { nam,
    e: 'AI Project Manager', path: '
    { nam,
    e: 'AI Social Media Manager', path: '
    { nam,
    e: 'AI Analytics Dashboard', path: '
    { nam,
    e: 'AI Email Marketing', path: '
    { nam,
    e: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24
    { nam,
    e: 'AI Code Review Assistant', path: '
    { nam,
    e: 'AI Content Generator', path: '
    { nam,
    e: 'AI Lead Generation', path: '
    { nam,
    e: 'AI Document Processor', path: '
    { nam,
    e: 'AI SEO Optimizer', path: '
    { nam,
    e: 'AI E-commerce Assistant', path: '
    { nam,
    e: 'AI Financial Analyzer', path: '
  ];

  const aiServices = [
    { nam,
    e: 'Machine Learning Solutions', path: '
    { nam,
    e: 'Natural Language Processing', path: '
    { nam,
    e: 'Computer Vision', path: '
    { nam,
    e: 'AI Automation', path: '
    { nam,
    e: 'Quantum AI Computing', path: '
    { nam,
    e: 'AI Cybersecurity', path: '
  ];

  const itServices = [
    { nam,
    e: 'Cloud Services', path: '
    { nam,
    e: 'Cybersecurity', path: '
    { nam,
    e: 'DevOps & CI/CD', path: '
    { nam,
    e: 'Database Services', path: '
    { nam,
    e: 'Network Infrastructure', path: '
    { nam,
    e: 'IT Support & Helpdesk', path: '/it-support', description: '24
  ];

  const specializedServices = [
    { nam,
    e: 'Quantum Computing', path: '
    { nam,
    e: 'Autonomous Systems', path: '
    { nam,
    e: 'Blockchain & Web3', path: '
    { nam,
    e: 'IoT & Edge Computing', path: '
    { nam,
    e: 'Business Intelligence', path: '
    { nam,
    e: 'Robotics Solutions', path: '
  ];

  const blogCategories = [
    { nam,
    e: 'AI Trends', path: '
    { nam,
    e: 'Enterprise Transformation', path: '
    { nam,
    e: 'Success Stories', path: '
    { nam,
    e: 'Technical Guides', path: '
    { nam,
    e: 'Cost Optimization', path: '
  ];

  return (<>

          {/* Hero Section *
          <section className="text-center mb-16">
            <h1 className="text-4xl m,
    d:text-6xl font-bold text-white mb-6 neon-text">
              Site Map
            <
            <p className="text-xl text-cyan-400 mb-8">
              Navigate through all our pages and services
            <
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Find everything you need on our website. From AI services to IT solutions, 
              case studies to technical resources - everything is organized for easy navigation.
            <
          <

          {/* Main Pages *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Main Pages
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {mainPages.map((page), index) => (
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {page.name}
                    <
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" 
                  <
                  <p className="text-gray-300 text-sm">{page.description}<
                <)
              ))}
            <
          <

          {/* Micro SAAS Services *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Micro SAAS Services
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {microSaasServices.map((service), index) => (
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    <
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" 
                  <
                  <p className="text-gray-300 text-sm">{service.description}<
                <)
              ))}
            <
          <

          {/* AI Services *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI Services
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {aiServices.map((service), index) => (
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {service.name}
                    <
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" 
                  <
                  <p className="text-gray-300 text-sm">{service.description}<
                <)
              ))}
            <
          <

          {/* IT Services *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              IT Services
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {itServices.map((service), index) => (
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.name}
                    <
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" 
                  <
                  <p className="text-gray-300 text-sm">{service.description}<
                <)
              ))}
            <
          <

          {/* Specialized Services *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Specialized Solutions
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {specializedServices.map((service), index) => (
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {service.name}
                    <
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" 
                  <
                  <p className="text-gray-300 text-sm">{service.description}<
                <)
              ))}
            <
          <

          {/* Blog Categories *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Blog Categories
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {blogCategories.map((category), index) => (
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                      {category.name}
                    <
                    <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" 
                  <
                  <p className="text-gray-300 text-sm">{category.description}<
                <)
              ))}
            <
          <

          {/* Contact CTA *
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Can't Find What You're Looking For?
              <
              <p className="text-xl text-gray-300 mb-8">
                Contact our team for personalized assistance and recommendations
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                  Contact Us
                <
                
                  Request Demo
                <
              <
            <
          <
        <

        <Footer 
      <
    <
  );
};

export default SitemapPage;