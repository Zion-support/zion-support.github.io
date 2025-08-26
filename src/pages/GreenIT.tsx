import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Zap, 
  Recycle, 
  Globe, 
  TrendingUp, 
  Shield, 
  Lightbulb, 
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Clock
} from 'lucide-react';

export default function GreenIT() {
  const greenSolutions = [
    {
      icon: Leaf,
      title: "Sustainable Data Centers",
      description: "Energy-efficient data centers powered by renewable energy sources with advanced cooling systems and waste heat recovery.",
      benefits: ["Reduced carbon footprint", "Lower energy costs", "Improved efficiency"]
    },
    {
      icon: Zap,
      title: "Renewable Energy Integration",
      description: "Seamless integration of solar, wind, and hydroelectric power into IT infrastructure.",
      benefits: ["100% renewable energy", "Grid independence", "Cost savings over time"]
    },
    {
      icon: Recycle,
      title: "Circular IT Economy",
      description: "Hardware recycling, refurbishment, and responsible disposal programs to minimize e-waste.",
      benefits: ["Reduced e-waste", "Extended hardware lifecycle", "Environmental compliance"]
    },
    {
      icon: Globe,
      title: "Carbon-Neutral Operations",
      description: "Comprehensive carbon offset programs and sustainable business practices across all operations.",
      benefits: ["Carbon neutrality", "ESG compliance", "Brand reputation"]
    }
  ];
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Leaf, Server, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

export default function GreenIT() {
    const greenITSolutions = [
        {
            title: "Energy-Efficient Hardware",
            description: "Modern processors, storage solutions, and networking equipment delivering significant performance improvements while consuming less power.",
            icon: Server,
        },
        {
            title: "Optimized Cooling Systems",
            description: "Advanced cooling technologies that reduce energy consumption while maintaining optimal operating temperatures.",
            icon: Cloud,
        },
        {
            title: "Renewable Energy Integration",
            description: "Solutions for leveraging on-site renewable generation or virtual power purchase agreements to offset carbon footprint.",
            icon: Leaf,
        }
    ];

    return (
        <>
            <SEO 
                title="Green IT Solutions - Sustainable Technology" 
                description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance." 
                keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware" 
                canonical="https://ziontechgroup.com/green-it" 
            />
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <GradientHeading>Green IT Solutions</GradientHeading>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            Sustainable technology solutions that reduce environmental impact without compromising performance
                        </p>
                    </div>
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a

                    {/* Hero Section */}
                    <div className="mb-16">
                        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-6">
                                        Sustainable IT for a Better Future
                                    </h2>
                                    <p className="text-zion-slate-light text-lg mb-6">
                                        As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers. Our Green IT solutions help organizations implement sustainable practices in their IT infrastructure while maintaining performance and reliability.
                                    </p>
                                    <p className="text-zion-slate-light text-lg mb-6">
                                        From energy-efficient hardware to renewable energy integration, we offer comprehensive solutions for reducing your carbon footprint.
                                    </p>
                                    <div className="mt-8">
                                        <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                                            Explore Green IT Solutions
                                        </Button>
                                    </div>
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=800&h=600" 
                                        alt="Green IT sustainability" 
                                        className="object-cover w-full h-full" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Grid */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-8">Our Green IT Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {greenITSolutions.map((solution, index) => (
                                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors">
                                    <div className="flex justify-center mb-4">
                                        <solution.icon className="h-12 w-12 text-zion-cyan" />
                                    </div>
                                    <h3 className="text-white font-medium text-xl text-center mb-3">
                                        {solution.title}
                                    </h3>
                                    <p className="text-zion-slate-light text-center">
                                        {solution.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Green <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">IT Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Sustainable technology solutions that reduce environmental impact while maintaining 
              performance and driving business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium"
              >
                Get Green IT Assessment
              </Link>
              <button className="border border-green-400 text-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-medium">
                Download Sustainability Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Green Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sustainable Technology Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive green IT solutions help organizations reduce their environmental 
              footprint while improving operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {greenSolutions.map((solution, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Green IT Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive services to help your organization implement sustainable 
              technology practices and achieve environmental goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <span className="text-green-400 font-medium">{service.price}</span>
                </div>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how organizations have successfully implemented green IT solutions 
              and achieved significant environmental and business benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-zion-cyan mb-1">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zion-cyan mb-1">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Environmental Impact</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our green IT solutions have helped organizations make significant 
              progress toward sustainability goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
              <p className="text-zion-slate-light">Average energy cost reduction</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">60%</h3>
              <p className="text-zion-slate-light">Carbon emissions decrease</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">80%</h3>
              <p className="text-zion-slate-light">E-waste reduction</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">25%</h3>
              <p className="text-zion-slate-light">Operational efficiency improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Start your journey toward sustainable technology today. Our experts will 
            help you implement green IT solutions that benefit both your business and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border border-green-400 text-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
                    {/* Benefits Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6">Why Choose Green IT?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                                <h3 className="text-white font-medium text-xl mb-4">Environmental Benefits</h3>
                                <ul className="text-zion-slate-light space-y-2">
                                    <li>• Reduced carbon footprint and greenhouse gas emissions</li>
                                    <li>• Lower energy consumption and resource utilization</li>
                                    <li>• Decreased electronic waste through better lifecycle management</li>
                                    <li>• Support for renewable energy initiatives</li>
                                </ul>
                            </div>
                            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                                <h3 className="text-white font-medium text-xl mb-4">Business Benefits</h3>
                                <ul className="text-zion-slate-light space-y-2">
                                    <li>• Significant cost savings on energy and cooling</li>
                                    <li>• Enhanced brand reputation and stakeholder relations</li>
                                    <li>• Compliance with emerging environmental regulations</li>
                                    <li>• Improved operational efficiency and performance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to implement Green IT solutions?
                        </h2>
                        <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                            Connect with our experts to discuss how we can help you build a more sustainable IT infrastructure.
                        </p>
                        <Button 
                            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" 
                            asChild
                        >
                            <Link to="/contact">Contact Our Team</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
}
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
