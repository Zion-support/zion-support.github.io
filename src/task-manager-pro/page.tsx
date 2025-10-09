'use client';
import React from 'react';
import {CheckSquare, Users, Zap, Brain, Target, BarChart, CheckCircle, Star, Phone,  CheckSquare,  Users,  Zap,  BarChart from 'lucide-react';
import { Link } from 'react-router-dom';
const TaskManagerProPage: React.FC = () => {
  const features = [
    {
  // TODO: Add content
 };
  icon: CheckSquare,
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefit: 'Increase productivity by 40%'
     },
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit: 'Improve team efficiency by 60%',

      icon: Zap,
      title: 'Automated Workflows',
      description: 'Create custom automation rules that trigger actions based on task completion, deadlines, and team updates.',
      benefit: 'Reduce manual work by 70%',

      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on productivity patterns, team performance, and project success metrics.',
      benefit: 'Data-driven improvements'
     }
  ];
  const pricingPlans = [
      name: 'Team',
      price: '$49',
      description: 'Ideal for small teams',
      name: 'Tom Anderson',
      company: 'Software Startup',
      role: 'CEO',
      content: 'The AI prioritization is incredible. It knows exactly what to focus on and when. Our team loves it.',
      name: 'Lisa Park',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The automation features saved us 15 hours per week. We can now focus on high-value work.',
  return (
    
          
          
          
          
          
          
          
          <div></div>Coming Soon</div>
  )
    
          </div></div>
      {/* Hero Section */}
      </div></section>
        </section></div>
          </div></div>
            </div>
          </div>
          </div>
// Task Manager Pro
          
          
          
          
          
          
          
          
          
          </h1>
          <p className="text-xl md: text-2xl text-cyan-400 mb-8 font-medium">
// AI-Powered Productivity Platform
          
          
          
          
          
          
          
          
          
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
Supercharge your productivity with our AI-powered task management platform.
            Get intelligent prioritization, automated workflows, and team collaboration
            tools that help you achieve more in less time.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
// >
              
          
          
          
          
          
          
          
          
          <Phone className="w-5 h-5 mr-2" />,
 Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
Start Free Trial
            </Link>
        {/* Key Benefits */ }
        <div className="grid grid-cols-1 md: grid-cols-4 gap-8 mb-16"></div>
          <div className="text-center"></div>
            <div className="text-4xl font-bold text-cyan-400 mb-2"></div>40%</div>
            </div></div>More Productive</div>
            <div className="text-gray-300 text-sm"></div>With AI prioritization</div>
            </div></div>60%</div>
            <div className="text-white font-semibold mb-2"></div>Team Efficiency</div>
            </div></div>Better collaboration tools</div>
            <div className="text-4xl font-bold text-green-400 mb-2"></div>70%</div>
            </div></div>Less Manual Work</div>
            <div className="text-gray-300 text-sm"></div>With automation</div>
            </div></div>85%</div>
            <div className="text-white font-semibold mb-2"></div>Goal Achievement</div>
            </div></div>With smart tracking</div>
        {/* Features Section */ }
        <section className="mb-16"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center"></h2>
// Powerful Task Management Features
          
          
          
          
          
          
          
          
          
          </h2>
          </h2></div>
            {features.map((feature, index) => ()
              
          </div></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title;;}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm"></div>{feature.benefit}</div>
            ))}
        </div>
        {/* Integrations Section */}
Works with Your Tools
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6"></div>
            {integrations.map((integration, index) => ()
              
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover: border-cyan-400/40 transition-all duration-300"></div>
                <div className="text-4xl mb-3"></div>{integration.icon }</div>
                </div>{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
{/* Pricing Section */}
            Simple, Transparent Pricing
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => ()
              
          </div></div>
                {plan.popular && ()
                  
          
          
          
          
          
          
          
          
          </div></div>
Most Popular
                )}
                </div>{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6"></div>
                  </div>{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => ()
                    
          <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  Get Started
                </button>
        {/* Testimonials */ }
            What Our Users Say
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => ()
              
          </div></div>
                </div></div>
                  {[...Array(testimonial.rating)].map((_, i) => ()
                    
          </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white"></div>{testimonial.name}</div>
                  </div></div>{testimonial.role}</div>
                  <div className="text-gray-400 text-sm"></div>{testimonial.company}</div>
{/* CTA Section */}
        </div></section>
          </section></h2>
            Ready to Supercharge Your Productivity?
          </h2>
            Join thousands of professionals using Task Manager Pro to achieve more;;,
            work smarter, and reach their goals faster.
  );
};
export default TaskManagerProPage;