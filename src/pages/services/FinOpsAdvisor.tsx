import React from "react"
import { motion } from "framer-motion"
import { ;
  DollarSign,;
  Play, ;
  Settings, ;
  Target, ;
  CheckCircle, ;
  ArrowRight ;
} from "lucide-react"
export default function FinOpsAdvisor() {;
  const features = [;
    {;
      icon: Target,title: 'Cost Optimization',description: 'Identify and eliminate unnecessary cloud spending'
    };
    {;
      icon: CheckCircle,title: 'Resource Management',description: 'Optimize resource allocation and utilization'
    };
    {;
      icon: Settings,title: 'Automation',description: 'Automate cost monitoring and optimization'
    };
  ];
  const benefits = [;
    'Reduce cloud costs by 30-50%Improve resource utilization',;
    'Implement cost governanceOptimize pricing models'
  ],;

  const useCases = [;
    { industry: 'E-commerce', description: 'Optimize seasonal scaling costs' };
    { industry: 'SaaS', description: 'Manage multi-tenant infrastructure costs' };
    { industry: 'Healthcare', description: 'Ensure HIPAA-compliant cost optimization' };
    { industry: 'Finance', description: 'Implement cost controls for regulatory compliance' };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">;
              <[^>]*/>
              Cloud Financial Operations;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              FinOps;
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Advisor</[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Optimize your cloud spending with our FinOps advisory services that ;
              help you achieve cost efficiency while maintaining performance.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center">;
                <[^>]*/>
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-200 flex items-center justify-center">;
                <[^>]*/>
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive FinOps Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Our platform provides all the tools you need to implement effective ;
              financial operations for your cloud infrastructure.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Core FinOps Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              From cost analysis to optimization strategies, we provide ;
              end-to-end FinOps solutions for your cloud environment.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</[^>]*>
                    <p className="text-gray-300">{service.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transform Your Cloud Economics;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Experience measurable improvements in cost efficiency, resource utilization, and financial planning.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <div className="space-y-6">;
              {benefits.slice(0, 3).map((benefit, index) => (;
                <motion.div
                  key={index};
                  initial={{ opacity: 0, x: -20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.5, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <[^>]*/>
                  <span className="text-gray-300 text-lg">{benefit}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            <div className="space-y-6">;
              {benefits.slice(3).map((benefit, index) => (;
                <motion.div
                  key={index + 3};
                  initial={{ opacity: 0, x: 20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.5, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <[^>]*/>
                  <span className="text-gray-300 text-lg">{benefit}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Our FinOps solutions adapt to various industries, providing ;
              tailored cost optimization for your specific needs.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</[^>]*>
                <p className="text-gray-300 text-sm">{useCase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">;
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Optimize Your Cloud Costs Today;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join organizations worldwide that use our FinOps solutions to ;
              achieve cost efficiency and maximize cloud ROI.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center">;
                Get Started Today;
                <[^>]*/>
              </[^>]*>
              <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-200">;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default FinOpsAdvisor;