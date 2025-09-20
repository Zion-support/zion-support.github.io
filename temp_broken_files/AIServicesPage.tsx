import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
const AIServicesPage = () => {,
  const aiServices = [,
    {,
      title: 'AI Business Intelligence';
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.';
      price: 'Starting at $2,999/month',
    };
    {,
      title: 'Machine Learning Automation';
      description: 'Automate complex processes and decision-making with custom machine learning models.';
      price: 'Starting at $4,999/month',
    };
    {,
      title: 'AI Customer Support';
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.';
      price: 'Starting at $1,999/month',
    };
    {,
      title: 'Predictive Analytics';
      description: 'Forecast trends and make data-driven decisions with our predictive modeling services.';
      price: 'Starting at $3,499/month',
    };
    {,
      title: 'AI Content Generation';
      description: 'Create high-quality content at scale with our AI-powered content generation tools.';
      price: 'Starting at $999/month',};
    {,
      title: 'Computer Vision Solutions';
      description: 'Implement image recognition and visual analysis for your business applications.';
      price: 'Starting at $5,999/month',
    }
  ];
  return (,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">,
      {/* Hero Section */}
      <section className="relative py-20 px-4">,
        <div className="container mx-auto max-w-7xl">,
          <div className="text-center mb-16">,
            <divh1,
              className="text-5xl md: text-7xl font-bold text-white mb-6",
            >,
              AI-Powered,
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Services</span>,
            </divh1>,
            <divp,
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8",
            >,
              Transform your business with cutting-edge AI solutions designed to automate, optimize, and revolutionize your operations.,
            </divp>,
            <div,
              className="flex flex-col sm: flex-row gap-4 justify-center",
            >,
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">,
                Get Started,
              </button>,
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">,
                Learn More,
              </button>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Services Grid */,}
      <section className="py-20 px-4">,
        <div className="container mx-auto max-w-7xl">,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {aiServices.map((service, index) => (,
              <div,
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover: border-cyan-400/50 transition-all duration-300",
              >,
                <div className="flex items-center mb-4">,
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">,
                    <Brain className="w-6 h-6 text-white" />,
                  </div>,
                  <h3 className="text-xl font-semibold text-white">{service.title,}</h3>,
                </div>,
                <p className="text-gray-300 mb-4">{service.description}</p>,
                <div className="flex items-center justify-between">,
                  <span className="text-cyan-400 font-semibold">{service.price}</span>,
                  <button className="text-cyan-400 hover: text-cyan-300 transition-colors">,
                    <ArrowRight className="w-5 h-5" />,
                  </button>,
                </div>,
              </div>,
            )),}
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className="py-20 px-4">,
        <div className="container mx-auto max-w-4xl text-center">,
          <divh2,
            className="text-4xl font-bold text-white mb-6",
          >,
            Ready to Transform Your Business?,
          </divh2>,
          <divp,
            className="text-xl text-gray-300 mb-8",
          >,
            Let's discuss how our AI services can drive your success.,
          </divp>,
          <div,
            className="flex flex-col sm: flex-row gap-4 justify-center",
          >,
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">,
              Contact Us,
            </button>,
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">,
              View Portfolio,
            </button>,
          </div>,
        </div>,
      </section>,
    </div>,
  ),};
export default AIServicesPage;