export default function SolutionsPage() {
  const solutions = [
    {
      category: 'AI-Powered Solutions',
      title: 'Intelligent Business Automation',
      description: 'Transform your business processes with AI-driven automation that learns and adapts to your specific needs.',
      benefits: ['Increased Efficiency', 'Reduced Costs', 'Improved Accuracy', '24/7 Operations']
    },
    {
      category: 'Quantum Computing',
      title: 'Advanced Problem Solving',
      description: 'Leverage quantum computing power to solve complex optimization problems and accelerate research.',
      benefits: ['Exponential Speed', 'Complex Optimization', 'Advanced Research', 'Future-Ready Technology']
    },
    {
      category: 'Autonomous Systems',
      title: 'Self-Managing Infrastructure',
      description: 'Deploy autonomous systems that monitor, maintain, and optimize themselves without human intervention.',
      benefits: ['Reduced Maintenance', 'Predictive Analytics', 'Self-Healing Systems', 'Continuous Optimization']
    },
    {
      category: 'Enterprise Integration',
      title: 'Seamless Digital Transformation',
      description: 'Complete digital transformation solutions that integrate all your systems and processes seamlessly.',
      benefits: ['Unified Systems', 'Data Integration', 'Process Optimization', 'Scalable Architecture']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Technology Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive solutions designed to address your specific business challenges and drive growth.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {solution.category}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}