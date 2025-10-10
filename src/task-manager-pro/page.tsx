'use client';
import React from 'react';
import { CheckSquare Users Zap Brain Target BarChart CheckCircle Star Phone } from "lucide-react";
import { Lin k } from "reac, t-route, r-do, m";
const TaskManagerProPage: React.FC = () => {
  const features = [
      icon: CheckSquare,
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefit:     ,
$4},
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit:       ,
iconicon: Brain,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers your work patterns, energy levels, and optimal focus times.',
      benefit:       ,
iconicon: Zap,
      title: 'Automated Workflows',
      description: 'Create custom automation rules that trigger actions based on task completion, deadlines, and team updates.',
      benefit:       ,
iconicon: Target,
      title: 'Goal Tracking',
      description: 'Set and track SMART goals with AI insights on progress, roadblocks, and optimization opportunities.',
      benefit:       ,
iconicon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on productivity patterns, team performance, and project success metrics.',
      benefit:     ,
$4}
  ];
  const pricingPlans = [
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for personal use',
      features: [
        'Unlimited personal tasks',
        'Basic AI prioritization',
        'Mobile app access',
        'Basic reporting',
        'Email support',
        '1 year data retention'
      ],
      popular: false,
    name: 'Team',
      price: '$49',
      description: 'Ideal for small teams',
        'Up to 10 team members',
        'Advanced AI features',
        'Team collaboration',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        '2 years data retention'
      popular: true,
    name: 'Enterprise',
      price: '$149',
      description: 'For large organizations',
        'Unlimited team members',
        'Premium AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Unlimited data retention',
        'Custom compliance'
  const integrations = [
  const testimonials = [
      name: 'Rachel Green',
      company: 'Marketing Agency',
      role: 'Project Manager',
      content: 'Task Manager Pro transformed our team productivity. We complete projects 40% faster with better quality.',
      rating: 5,
    name: 'Tom Anderson',
      company: 'Software Startup',
      role: 'CEO',
      content: 'The AI prioritization is incredible. It knows exactly what to focus on and when. Our team loves it.',
      name: 'Lisa Park',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The automation features saved us 15 hours per week. We can now focus on high-value work.',
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <section className="container mx-auto px-4 py-16 pt-24"></section>
        <div className="text-center mb-16"></div>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>
            <CheckSquare className="w-10 h-10 text-white" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
            Task Manager Pro;</h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium"></p>
            AI-Powered Productivity Platform;
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            Supercharge your productivity with our AI-powered task management platform. 
            Get intelligent prioritization, automated workflows, and team collaboration;
            tools that help you achieve more in less time.
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <a;
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            <Link;
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              Start Free Trial;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"></div>
          <div className="text-center"></div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
            <div className="text-white font-semibold mb-2">More Productive</div>
            <div className="text-gray-300 text-sm">With AI prioritization</div>
            <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-white font-semibold mb-2">Team Efficiency</div>
            <div className="text-gray-300 text-sm">Better collaboration tools</div>
            <div className="text-4xl font-bold text-green-400 mb-2">70%</div>
            <div className="text-white font-semibold mb-2">Less Manual Work</div>
            <div className="text-gray-300 text-sm">With automation</div>
            <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>
            <div className="text-white font-semibold mb-2">Goal Achievement</div>
            <div className="text-gray-300 text-sm">With smart tracking</div>
        <section className="mb-16"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"></h2>
            Powerful Task Management Features;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, backdrop-blu, r-sm, rounded-lg, p-6, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-40, 0/40, transition-all, duration-30, 0"></di, v>
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3, className="tex, t-xl, font-bold, text-white, mb-3">{featur, e.titl, e}</h, 3>
                <p, className="tex, t-gra, y-300, mb-4, leading-relaxe, d">{featur, e.descriptio, n}</p>
                <div, className="tex, t-cya, n-400, font-semibold, text-s, m">{featur, e.benefi, t}</di, v>
            ))}
            Works with Your Tools;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, backdrop-blu, r-sm, rounded-lg, p-6, border borde, r-cya, n-50, 0/20, text-center, hover:borde, r-cya, n-40, 0/40, transition-all, duration-30, 0"></di, v>
                <div, className="tex, t-4xl, mb-3">{integratio, n.ico, n}</di, v>
                <h3, className="tex, t-lg, font-bold, text-white, mb-2">{integratio, n.nam, e}</h, 3>
                <p, className="tex, t-gra, y-300, text-s, m">{integratio, n.descriptio, n}</p>
            Simple, Transparent Pricing;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
              <div, key={inde, x} classNam, e={`b, g-slat, e-80, 0/50, backdrop-blu, r-sm, rounded-lg, p-8, border-2, transition-all, duration-30, 0 ${
                plan.popular;
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"></div>
                    Most Popular;
                )}
                <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{pla, n.nam, e}</h, 3>
                <p, className="tex, t-gra, y-300, mb-6">{pla, n.descriptio, n}</p>
                <div className="mb-6"></div>
                  <span, className="tex, t-4xl, font-bold, text-whit, e">{pla, n.pric, e}</spa, n>
                  <span, className="tex, t-gra, y-30, 0">{pla, n.perio, d}</spa, n>
                <ul className="space-y-3 mb-8"></ul>
                    <li, key={featureInde, x} classNam, e="flex, items-center, text-gra, y-30, 0"></l, i>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  Get Started;
            What Our Users Say;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, backdrop-blu, r-sm, rounded-lg, p-6, border borde, r-cya, n-50, 0/2, 0"></di, v>
                <div className="flex items-center mb-4"></div>
                    <Star, key={i} classNam, e="w-5, h-5, text-yello, w-400, fill-curren, t" />
                <p, className="tex, t-gra, y-300, mb-4, italic">"{testimonia, l.conten, t}"</p>
                <div></div>
                  <div, className="fon, t-semibold, text-whit, e">{testimonia, l.nam, e}</di, v>
                  <div, className="tex, t-cya, n-400, text-s, m">{testimonia, l.rol, e}</di, v>
                  <div, className="tex, t-gra, y-400, text-s, m">{testimonia, l.compan, y}</di, v>
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Supercharge Your Productivity?
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            Join thousands of professionals using Task Manager Pro to achieve more, 
import { Lin k } from "reac, t-route, r-do, m";
const TaskManagerProPage: React.FC = () => {
  const features = [];
  return (
  ico,
  n: CheckSquare,
      titl,
  e: 'AI Task Prioritization',
      descriptio,
  n: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefi,
  t: 'Increase productivity by 40%'
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit: 'Improve team efficiency by 60%',
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
          <div>Coming Soon</div>
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <section className="container mx-auto px-4 py-16 pt-24"></section>"
        <div className="text-center mb-16"></div>"
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>"
            <CheckSquare className="w-10 h-10 text-white" /></CheckSquare>
          <h1 className="text-4xl,"
  md:text-6xl font-bold text-white mb-6"></h1>
// Task Manager Pro;
          <p className="text-xl,"
  md:text-2xl text-cyan-400 mb-8 font-medium"></p>
// AI-Powered Productivity Platform;
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
Supercharge your productivity with our AI-powered task management platform.
            Get intelligent prioritization, automated workflows, and team collaboration;
            tools that help you achieve more in less time.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
            <a;
              href="tel:+13024640950" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
// >
          "</a>
          <Phone className="w-5 h-5 mr-2" />,
 Cal,
  l: (302) 464-0950;
            <Link;
              href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
Start Free Trial;
        <div className="grid grid-cols-1,"
  md:grid-cols-4 gap-8 mb-16"></div>"
          <div className="text-center"></div>"
            <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>"
            <div className="text-white font-semibold mb-2">More Productive</div>"
            <div className="text-gray-300 text-sm">With AI prioritization</div>"
            <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>"
            <div className="text-white font-semibold mb-2">Team Efficiency</div>"
            <div className="text-gray-300 text-sm">Better collaboration tools</div>"
            <div className="text-4xl font-bold text-green-400 mb-2">70%</div>"
            <div className="text-white font-semibold mb-2">Less Manual Work</div>"
            <div className="text-gray-300 text-sm">With automation</div>"
            <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>"
            <div className="text-white font-semibold mb-2">Goal Achievement</div>"
            <div className="text-gray-300 text-sm">With smart tracking</div>
        <section className="mb-16"></section>"
          <h2 className="text-3xl,"
  md:text-4xl font-bold text-white mb-12 text-center"></h2>
// Powerful Task Management Features;
          <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-8"></div>
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20,"
  hover:border-cyan-400/40 transition-all duration-300"></div>"
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" /></feature>"
                <h3, className="tex, t-xl, font-bold, text-white, mb-3">{featur, e.titl, e}</h, 3>"
                <p, className="tex, t-gra, y-300, mb-4, leading-relaxe, d">{featur, e.descriptio, n}</p>"
                <div, className="tex, t-cya, n-400, font-semibold, text-s, m">{featur, e.benefi, t}</di, v>
            ))}
Works with Your Tools;"
          <div className="grid grid-cols-2,"
  md:grid-cols-4 gap-6"></div>
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center,"
  hover:border-cyan-400/40 transition-all duration-300"></div>"
                <div, className="tex, t-4xl, mb-3">{integratio, n.ico, n}</di, v>"
                <h3, className="tex, t-lg, font-bold, text-white, mb-2">{integratio, n.nam, e}</h, 3>"
                <p, className="tex, t-gra, y-300, text-s, m">{integratio, n.descriptio, n}</p>
            Simple, Transparent Pricing;"
          <div className="grid grid-cols-1,"
  md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
          <div, key={inde, x} classNam, e={`b, g-slat, e-80, 0/50, backdrop-blu, r-sm, rounded-lg, p-8, border-2, transition-all, duration-30, 0 ${}
  // TOD,
  O: Add content;
//                 plan.popular;
//                   ? 'border-cyan-400 scale-105'
                  : 'border-slate-700,
  hover:border-cyan-500/50'`
          <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"></div>
Most Popular;
                )}"
                <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{pla, n.nam, e}</h, 3>"
                <p, className="tex, t-gra, y-300, mb-6">{pla, n.descriptio, n}</p>"
                <div className="mb-6"></div>"
                  <span, className="tex, t-4xl, font-bold, text-whit, e">{pla, n.pric, e}</spa, n>"
                  <span, className="tex, t-gra, y-30, 0">{pla, n.perio, d}</spa, n>"
                <ul className="space-y-3 mb-8"></ul>
          <li, key={featureInde, x} classNam, e="flex, items-center, text-gra, y-30, 0"></l, i>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                <button, className={`w-full, py-3, px-6, rounded-lg, font-semibold, transition-all, duration-30, 0 ${}
? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white,
  hover:from-cyan-500,
  hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400,
  hover:bg-cyan-400,
  hover:text-white'
                  Get Started;
            What Our Users Say;"
          <div className="grid grid-cols-1,"
  md:grid-cols-3 gap-8"></div>
          <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, backdrop-blu, r-sm, rounded-lg, p-6, border borde, r-cya, n-50, 0/2, 0"></di, v>"
                <div className="flex items-center mb-4"></div>
          <Star, key={i} classNam, e="w-5, h-5, text-yello, w-400, fill-curren, t" /></Sta, r>"
                <p, className="tex, t-gra, y-300, mb-4, italic">"{testimonia, l.conten, t}"</p>
                <div></div>"
                  <div, className="fon, t-semibold, text-whit, e">{testimonia, l.nam, e}</di, v>"
                  <div, className="tex, t-cya, n-400, text-s, m">{testimonia, l.rol, e}</di, v>"
                  <div, className="tex, t-gra, y-400, text-s, m">{testimonia, l.compan, y}</di, v>
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20"></section>"
          <h2 className="text-3xl,"
  md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Supercharge Your Productivity?"
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            Join thousands of professionals using Task Manager Pro to achieve more,
            work smarter, and reach their goals faster.
  );
export default TaskManagerProPage;