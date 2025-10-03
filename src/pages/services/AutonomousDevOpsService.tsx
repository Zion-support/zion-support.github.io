import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import { 
  Rocket, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap 
} from "lucide-react";

const AutonomousDevOpsService: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">New Service Launch - October 2025</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Autonomous DevOps Service
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Revolutionary AI-powered DevOps automation that transforms your infrastructure management, 
                deployment pipelines, and operational excellence with zero human intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Rocket className="w-5 h-5" />
                  Get Started Today
                </Link>
                <Link 
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-300 hover:bg-blue-500/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <TrendingUp className="w-5 h-5" />
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Revolutionary DevOps Automation
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our autonomous DevOps service eliminates manual operations while delivering 
                unprecedented reliability, security, and performance optimization.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  Autonomous Infrastructure
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <span>Complete autonomous DevOps platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <span>90-day implementation & migration</span>
                      </li>
                      <li className="flex items-start gap-2">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                        <span>$10M+ annual cost savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-blue-400 mt-1" />
                        <span>80% reduction in deployment time</span>
                      </li>
                      <li className="flex items-start gap-2">
                      </li>
                    </ul>
                  </div>
                </div>
