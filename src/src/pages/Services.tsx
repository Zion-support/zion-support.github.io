import { Code, Database, Shield, Cloud, Smartphone, Brain } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className='w-8 h-8' />,
      title: 'Custom Software Development',
      description: 'Tailored applications built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      icon: <Database className='w-8 h-8' />,
      title: 'Data Solutions & Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      features: ['Data Warehousing', 'Business Intelligence', 'Machine Learning', 'Predictive Analytics']
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      icon: <Cloud className='w-8 h-8' />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed for performance, reliability, and cost efficiency.',
      features: ['Cloud Migration', 'DevOps & CI/CD', 'Containerization', 'Monitoring']
    },
    {
      icon: <Smartphone className='w-8 h-8' />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: <Brain className='w-8 h-8' />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge artificial intelligence technologies.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Modeling', 'Automation']
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <section className='bg-white py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Our Services
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Comprehensive technology solutions designed to accelerate your business growth 
            and drive digital transformation across all industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div key={index} className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='text-blue-600 mb-6'>
                  {service.icon}
                </div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-6'>
                  {service.description}
                </p>
                <ul className='space-y-2'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center text-gray-600'>
                      <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='bg-blue-600 py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Our Process
            </h2>
            <p className='text-xl text-blue-100 max-w-2xl mx-auto'>
              We follow a proven methodology to deliver exceptional results.
            </p>
          </div>
          
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold text-white'>1</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>Discovery</h3>
              <p className='text-blue-100'>
                Understanding your business needs and technical requirements.
              </p>
            </div>
            
            <div className='text-center'>
              <div className='bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold text-white'>2</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>Planning</h3>
              <p className='text-blue-100'>
                Creating a detailed roadmap and architecture for your solution.
              </p>
            </div>
            
            <div className='text-center'>
              <div className='bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold text-white'>3</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>Development</h3>
              <p className='text-blue-100'>
                Building your solution with agile methodologies and best practices.
              </p>
            </div>
            
            <div className='text-center'>
              <div className='bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold text-white'>4</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>Deployment</h3>
              <p className='text-blue-100'>
                Launching your solution with ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Let's discuss how our services can help transform your business.
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200'>
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
