import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Smartphone, 
  Globe,
  Zap,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: [
        'Web Applications',
        'Mobile Apps (iOS/Android)',
        'Desktop Applications',
        'API Development',
        'Microservices Architecture',
        'Legacy System Modernization'
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Cloud className="h-12 w-12 text-green-500" />,
      title: 'Cloud Solutions & Migration',
      description: 'Seamless cloud migration and infrastructure management for optimal performance.',
      features: [
        'AWS/Azure/GCP Migration',
        'Cloud Architecture Design',
        'DevOps & CI/CD',
        'Containerization (Docker/Kubernetes)',
        'Serverless Solutions',
        'Cloud Security & Compliance'
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Database className="h-12 w-12 text-purple-500" />,
      title: 'Data Analytics & AI',
      description: 'Transform your data into actionable insights with advanced analytics and AI.',
      features: [
        'Business Intelligence',
        'Machine Learning Models',
        'Predictive Analytics',
        'Data Visualization',
        'Real-time Dashboards',
        'Data Pipeline Development'
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Security Architecture',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <Smartphone className="h-12 w-12 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS/Android Apps',
        'React Native Development',
        'Flutter Applications',
        'Progressive Web Apps',
        'App Store Optimization',
        'Mobile UI/UX Design'
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Globe className="h-12 w-12 text-cyan-500" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies.',
      features: [
        'React/Vue/Angular Development',
        'Node.js Backend',
        'E-commerce Solutions',
        'CMS Development',
        'SEO Optimization',
        'Performance Optimization'
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
      icon: <Users className="h-8 w-8 text-blue-500" />,
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the solution architecture and user experience.',
      icon: <Code className="h-8 w-8 text-green-500" />,
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using agile methodologies.',
      icon: <Zap className="h-8 w-8 text-purple-500" />,
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.',
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
    },
  ];

  const technologies = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', 'C#', 'PHP',
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
    'Redis', 'Elasticsearch', 'TensorFlow', 'PyTorch', 'Machine Learning', 'AI'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onMenuClick={() => {}} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <GradientHeading text="Our Services" />
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward. 
              From custom software development to cloud migration, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      {step.step}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-600">
                We work with the latest and most reliable technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your requirements and create a solution that exceeds your expectations.
            </p>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;