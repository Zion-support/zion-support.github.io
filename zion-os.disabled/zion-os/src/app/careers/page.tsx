export const metadata = {
  title: 'Careers - Zion Tech Group',
  description: 'Join our team of innovators at Zion Tech Group. Explore exciting career opportunities in AI, quantum computing, and technology solutions.',
};

export default function CareersPage() {
  const openPositions = [
    {
      id: 'ai-research-scientist',
      title: 'Senior AI Research Scientist',
      department: 'Research & Development',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our cutting-edge AI consciousness research team. You\'ll work on developing autonomous AI systems and exploring the frontiers of artificial intelligence.',
      responsibilities: [
        'Lead research initiatives in AI consciousness and autonomous systems',
        'Develop and implement novel machine learning algorithms',
        'Publish research findings in top-tier conferences and journals',
        'Collaborate with cross-functional teams on product development',
        'Mentor junior researchers and engineers'
      ],
      requirements: [
        'Ph.D. in Computer Science, AI, or related field',
        'Strong background in machine learning, neural networks, and AI research',
        'Experience with autonomous systems and consciousness research',
        'Proven track record of research publications',
        'Excellent problem-solving and analytical skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ]
    },
    {
      id: 'quantum-computing-engineer',
      title: 'Quantum Computing Engineer',
      department: 'Quantum Solutions',
      location: 'Palo Alto, CA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help us build the future of quantum computing. You\'ll develop quantum algorithms and solutions for complex optimization problems.',
      responsibilities: [
        'Design and implement quantum algorithms for optimization problems',
        'Develop quantum machine learning solutions',
        'Work with quantum hardware and simulators',
        'Collaborate with research teams on quantum applications',
        'Optimize quantum circuits and algorithms'
      ],
      requirements: [
        'M.S. or Ph.D. in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks (Qiskit, Cirq, etc.)',
        'Knowledge of quantum algorithms and quantum mechanics',
        'Programming experience in Python, C++, or similar',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to cutting-edge quantum computing resources',
        'Conference attendance and training opportunities',
        'Comprehensive health benefits',
        'Flexible work schedule'
      ]
    },
    {
      id: 'full-stack-developer',
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build our next-generation AI platforms and applications. You\'ll work on both frontend and backend systems that power our AI solutions.',
      responsibilities: [
        'Develop and maintain web applications and APIs',
        'Build responsive and accessible user interfaces',
        'Implement AI/ML features and integrations',
        'Optimize application performance and scalability',
        'Collaborate with design and product teams'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with React, Node.js, and modern web technologies',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with databases and API design',
        'Understanding of AI/ML concepts and applications'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote-first work environment',
        'Latest development tools and equipment',
        'Health and wellness benefits',
        'Professional development budget'
      ]
    },
    {
      id: 'data-scientist',
      title: 'Senior Data Scientist',
      department: 'Data & Analytics',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Transform data into actionable insights that drive business decisions. You\'ll work with large datasets and develop predictive models.',
      responsibilities: [
        'Analyze complex datasets to identify patterns and trends',
        'Develop machine learning models for business applications',
        'Create data visualizations and reports',
        'Collaborate with business teams on data-driven solutions',
        'Mentor junior data scientists and analysts'
      ],
      requirements: [
        'M.S. or Ph.D. in Statistics, Data Science, or related field',
        'Experience with Python, R, SQL, and data science tools',
        'Knowledge of machine learning algorithms and statistical methods',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong business acumen and communication skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to cutting-edge data science tools',
        'Conference attendance and training opportunities',
        'Comprehensive health benefits',
        'Flexible work arrangements'
      ]
    },
    {
      id: 'cybersecurity-architect',
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement secure systems that protect our AI platforms and client data. You\'ll be at the forefront of AI-powered security.',
      responsibilities: [
        'Design secure architecture for AI systems and platforms',
        'Implement security controls and monitoring systems',
        'Develop security policies and procedures',
        'Conduct security assessments and penetration testing',
        'Stay current with emerging security threats and technologies'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science, Cybersecurity, or related field',
        'Experience with cloud security and zero-trust architecture',
        'Knowledge of AI/ML security considerations',
        'Experience with security frameworks and compliance',
        'Relevant certifications (CISSP, CISM, etc.) preferred'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Latest security tools and technologies',
        'Professional certification support',
        'Comprehensive health benefits',
        'Flexible work schedule'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive the development of our AI products and solutions. You\'ll work closely with engineering, design, and business teams.',
      responsibilities: [
        'Define product vision and strategy for AI solutions',
        'Gather and prioritize product requirements',
        'Work with engineering teams on product development',
        'Analyze market trends and competitive landscape',
        'Collaborate with sales and marketing teams'
      ],
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        'Experience in product management or related roles',
        'Understanding of AI/ML technologies and applications',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Professional development opportunities',
        'Health and wellness benefits',
        'Flexible work arrangements',
        'Performance-based bonuses'
      ]
    }
  ];

  const departments = [
    {
      name: 'Research & Development',
      description: 'Push the boundaries of AI and quantum computing',
      positions: 8,
      icon: '🔬'
    },
    {
      name: 'Engineering',
      description: 'Build scalable platforms and applications',
      positions: 12,
      icon: '⚙️'
    },
    {
      name: 'Data & Analytics',
      description: 'Transform data into actionable insights',
      positions: 6,
      icon: '📊'
    },
    {
      name: 'Product',
      description: 'Shape the future of AI solutions',
      positions: 5,
      icon: '🎯'
    },
    {
      name: 'Security',
      description: 'Protect our systems and client data',
      positions: 4,
      icon: '🔒'
    },
    {
      name: 'Sales & Marketing',
      description: 'Bring AI solutions to the world',
      positions: 7,
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and counseling services',
        'Fitness and wellness programs',
        'Flexible spending accounts (FSA)',
        'Health savings accounts (HSA)'
      ]
    },
    {
      category: 'Financial',
      items: [
        'Competitive salary with equity options',
        '401(k) with company match',
        'Performance-based bonuses',
        'Professional development budget',
        'Conference attendance support'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible work arrangements',
        'Unlimited paid time off',
        'Parental leave programs',
        'Remote work options',
        'Flexible scheduling'
      ]
    },
    {
      category: 'Growth & Development',
      items: [
        'Professional development opportunities',
        'Mentorship programs',
        'Internal training and workshops',
        'Conference attendance',
        'Advanced degree support'
      ]
    },
    {
      category: 'Culture & Community',
      items: [
        'Inclusive and diverse workplace',
        'Team building activities',
        'Community service opportunities',
        'Employee resource groups',
        'Regular team events and celebrations'
      ]
    },
    {
      category: 'Technology & Tools',
      items: [
        'Latest development tools and equipment',
        'Access to cutting-edge AI and quantum resources',
        'Cloud computing credits',
        'Software licenses and subscriptions',
        'Home office setup support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI, quantum computing, 
            and technology solutions. Help us transform industries and change the world.
          </p>
          <div className="mt-8">
            <Link
              href="#open-positions"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div key={index} className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm opacity-70">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span className="text-blue-400">{position.type}</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
              <p className="opacity-80 mb-4">{position.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm opacity-70">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="opacity-80 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Innovation First</h3>
            <p className="opacity-80 leading-relaxed mb-4">
              We believe in pushing the boundaries of what's possible. Our team is constantly 
              exploring new technologies and approaches to solve complex problems.
            </p>
            <p className="opacity-80 leading-relaxed">
              From AI consciousness research to quantum computing breakthroughs, we're not afraid 
              to tackle the most challenging problems in technology.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Collaboration & Growth</h3>
            <p className="opacity-80 leading-relaxed mb-4">
              We foster a culture of continuous learning and collaboration. Every team member 
              has the opportunity to contribute to our mission and grow their skills.
            </p>
            <p className="opacity-80 leading-relaxed">
              Whether you're a seasoned expert or just starting your career, we provide the 
              support and resources you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          Join our team and help us build the future of autonomous business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Contact Us
          </a>
          <a
            href="mailto:careers@ziontechgroup.com"
            className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Send Resume
          </a>
        </div>
      </section>
    </div>
  );
}