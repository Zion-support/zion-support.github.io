
  Brain,
  Cloud,
  Cpu,
  Database,
  Lock,
  Zap,
  Target,
  Award,
  Clock,
  DollarSign,
  Search,
  Filter''
} from 'lucide-react';

'
      'Legacy Modernization',;'
      'Digital Strategy',;'
      'Change Management',;'
      'Technology Consulting';
    ]};'
      'Process Automation',''
      'Customer Experience',;''
      'Legacy Modernization',;''
      'Digital Strategy',;''
      'Change Management',;'      'Technology Consulting';
    ]};
];
;
'
      'Citizen Engagement',;'
      'Regulatory Compliance',;'
      'Infrastructure Management';
    ],;'
    color: 'from-gray-500 to-slate-600'};
];
;

    ],;'
    price: 'Starting at $1,800/month',;'
    implementation: '8-16 weeks',;
    icon: Cloud,;'
    color: 'from-blue-500 to-cyan-600'};
];

  
    // Retail & E-commerce Solutions
    {
'
      title: 'AI & Machine Learning',
      icon: Brain,'
      description: 'Cutting-edge AI solutions for business transformation','
      color: 'from-purple-500 to-pink-600','
      solutions: [''
        'AI Business Intelligence',Machine Learning Platforms',Natural Language Processing',Computer Vision Systems',Predictive Analytics',AI Automation'
      ]
    },
    {
'
      title: 'Cloud & Infrastructure',
      icon: Cloud,'
      description: 'Scalable cloud solutions and infrastructure management','
      color: 'from-blue-500 to-cyan-600','
      solutions: [''
        'Cloud Migration',DevOps Automation',Container Orchestration',Serverless Computing',Multi-cloud Management',Edge Computing'
      ]
    },

    // Education Solutions
    {
'
      title: 'Cybersecurity',
      icon: Shield,'
      description: 'Advanced security solutions for modern threats','
      color: 'from-red-500 to-orange-600','
      solutions: [''
        'Zero Trust Security',AI Threat Detection',Compliance Management',Identity & Access Management',Security Automation',Incident Response'
      ]
    },

    // Government Solutions
    {
'
      title: 'Quantum Computing',
      icon: Atom,'
      description: 'Next-generation quantum computing solutions','
      color: 'from-indigo-500 to-purple-600','
      solutions: [''
        'Quantum Algorithms',Quantum Machine Learning',Quantum Cryptography',Quantum Simulation',Hybrid Quantum-Classical',Quantum Optimization'
      ]
    }
  ];

  
  return (""
    <div className = "min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">"
      {/* Hero Section */}""
      <section className="pt-24 pb-16">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            animate = {

  { opacity: 1,
  y: 0 

}}"
            transition={{ duration: 0.6 }}""
            className="text-center""
          >""
            <div className="flex items-center justify-center space-x-3 mb-6">""
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">""
                <Target className="w-8 h-8 text-white"  />              </div>
              <div>
      </section>
"
        {/* Industry Filter */}""
        <section className="py-16 px-4">""
          <div className="max-w-6xl mx-auto">""
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
'
                    selectedIndustry === industry.id''
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'''`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'``
                  }`}"
                >""
                  <industry.icon className="w-5 h-5 mr-2" />
                  {industry.name}
                </button>) ) }
                <select
                  value={selectedCategory}"
                  onChange={(e) => setSelectedCategory(e.target.value)}""
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {categories.map (category => (<option key={category} value={category}>{category}</option>) ) }
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}"
                  onChange={(e) => setSelectedIndustry(e.target.value)}""
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {industries.map (industry => (<option key={industry} value={industry}>{industry}</option>) ) }
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
"
      {/* Solution Categories */}""
      <section className="py-16">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="mb-12 text-center""
          >""
            <h2 className="text-3xl font-bold text-white mb-4">Solution Categories</h2>""
            <p className="text-zion-slate-light text-lg">Explore our comprehensive range of technology solutions</p>
          </motion.div>"
""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => {

              return()                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  viewport={{ once: true }}""
                  className="group cursor-pointer"`
                >`"`
                  <Link to={`/solutions#${category.id}`}>""`
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300 h-full">`"`
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>""
                        <IconComponent className="w-8 h-8 text-white"  />"
                      </div>""
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>""
                      <p className="text-zion-slate-light mb-4">{category.description}</p>""
                      <div className="space-y-2">"
                        {category.solutions.slice(0, 4).map((solution, idx) => (""
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">""
                            <CheckCircle className="w-3 h-3 text-green-400"  />
                            <span>{solution}</span>
                          </div>
                        ))}"
                      </div>""
                      <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">""
                        <span className="text-sm font-medium">Learn More</span>""
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"  />
                      </div>
                    </div>
                  </Link>
                </motion.div>) }) }          </div>
        </div>
      </section>
"
      {/* Industry Solutions */}""
      <section className="py-16">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="mb-12 text-center""
          >"'"
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>'"'"
            <p className="text-zion-slate-light text-lg">Tailored solutions designed for your industry's unique challenges</p>
          </motion.div>"
""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => {

              return()                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  viewport={{ once: true }}""
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"`
                >`"`
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>""
                    <IconComponent className="w-8 h-8 text-white"  />"
                  </div>""
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>""
                  <div className="space-y-2">"
                    {industry.solutions.slice(0, 4).map((solution, idx) => (""
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">""
                        <CheckCircle className="w-3 h-3 text-green-400"  />                        <span>{solution}</span>
                      </div>
                    ))}"
                  </div>""
                  <div className="mt-4">`
                    <Link`"`
                      to={`/solutions/${industry.industry.toLowerCase()}`}""
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >"
                      View {industry.industry} Solutions""
                      <ArrowRight className="ml-2 h-4 w-4"  />
                    </Link>
                  </div>
                </motion.div>) }) }          </div>
        </div>
      </section>
"
      {/* Featured Solutions */}""
      <section className="py-16">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="mb-12 text-center""
          >""
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>""
            <p className="text-zion-slate-light text-lg">Our most popular and impactful technology solutions</p>
          </motion.div>"
""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => {

              return()                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  viewport={{ once: true }}""
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >"
                  {/* Header */}""
                  <div className="flex items-start justify-between mb-4">""`
                    <div className="flex items-center gap-3">`"`
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center`}>""
                        <IconComponent className="w-8 h-8 text-white"  />                      </div>"
                      <div>""
                        <h3 className="text-xl font-bold text-white mb-1">{solution.name}</h3>""
                        <span className="text-sm text-zion-cyan">{solution.category}</span>
                      </div>"
                    </div>""
                    <div className="text-right">""
                      <div className="text-2xl font-bold text-zion-cyan">{solution.price}</div>""
                      <div className="text-sm text-zion-slate-light">Starting Price</div>
                    </div>
                  </div>
"
                  {/* Description */}""
                  <p className="text-zion-slate-light mb-4">{solution.description}</p>
"
                  {/* Features */}""
                  <div className="mb-4">""
                    <h4 className="font-semibold text-white mb-2">Key Features</h4>""
                    <div className="grid grid-cols-1 gap-1">"
                      {solution.features.slice(0, 4).map((feature, idx) => (""
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">""
                          <CheckCircle className="w-3 h-3 text-green-400"  />                          <span>{feature}</span>
                        </div>) ) }
                    </div>
                  </div>
"
                  {/* Benefits */}""
                  <div className="mb-4">""
                    <h4 className="font-semibold text-white mb-2">Business Benefits</h4>""
                    <div className="grid grid-cols-1 gap-1">"
                      {solution.benefits.map((benefit, idx) => (""
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">""
                          <Star className="w-3 h-3 text-yellow-400"  />                          <span>{benefit}</span>
                        </div>) ) }
                    </div>
                  </div>
"
                  {/* Implementation & CTA */}""
                  <div className="flex items-center justify-between">""
                    <div className="text-sm text-zion-slate-light">""
                      <span className="flex items-center gap-1">""
                        <Clock className="w-4 h-4"  />                        Implementation: {solution.implementation}
                      </span>
                    </div>`
                    <Link`"`
                      to={`/solutions/${solution.id}`}""
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >"
                      Learn More""
                      <ArrowRight className="ml-2 h-4 w-4"  />
                    </Link>
                  </div>
                </motion.div>) }) }          </div>
        </div>
      </section>
"
      {/* CTA Section */}""
      <section className="py-16">""
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8""
          >""
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?"
            </h2>""
            <p className="text-zion-slate-light text-lg mb-8">'
              Let's discuss how our technology solutions can address your specific challenges 
              and drive measurable results for your organization."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link""
                to="/contact""
                className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-slate-light transition-all duration-300 font-medium text-lg"
              >"
                Get Started Today""
                <ArrowRight className="ml-2 h-5 w-5"  />              </Link>"
              <Link""
                to="/case-studies""
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-zion-cyan transition-all duration-300 font-medium text-lg"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
"
      {/* Solution Categories */}""
      <section className="py-16">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="mb-12 text-center""
          >;""
            <h2 className="text-3xl font-bold text-white mb-4">Solution Categories</h2>;""
            <p className="text-zion-slate-light text-lg">Explore our comprehensive range of technology solutions</p>;
          </motion.div>;"
;""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {solutionCategories.map((category, index) => {;
              
              return()                <motion.div
                  key = {category.id}
                  initial = {

  { opacity: 0,
  y: 20 

}}
                  whileInView = {

  { opacity: 1,
  y: 0 

}}
                  transition = {

  { duration: 0.6,
  delay: index * 0.1 

}}"
                  viewport={{ once: true }}""
                  className="group cursor-pointer"`
                >`"`
                  <Link to={`/solutions#${category.id}`}>""`
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300 h-full">`"`
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>""
                        <IconComponent className="w-8 h-8 text-white"  />"
                      </div>""
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>""
                      <p className="text-zion-slate-light mb-4">{category.description}</p>""
                      <div className="space-y-2">"
                        {category.solutions.slice(0, 4).map((solution, idx) => (""
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">""
                            <CheckCircle className="w-3 h-3 text-green-400"  />
                            <span>{solution}</span>
                          </div>
                        ))}"
                      </div>""
                      <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">;""
                        <span className="text-sm font-medium">Learn More</span>;""
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"  />;
                      </div>;
                    </div>;
                  </Link>;
                </motion.div>;) }) }          </div>
        </div>
      </section>
"
      {/* Industry Solutions */}""
      <section className = "py-16">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="mb-12 text-center""
          >;"'"
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>;'"'"
            <p className="text-zion-slate-light text-lg">Tailored solutions designed for your industry's unique challenges</p>;
          </motion.div>;"
;""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {industrySolutions.map((industry, index) => {;
              
              return()                <motion.div
                  key = {industry.industry}
                  initial = {

  { opacity: 0,
  y: 20 

}}
                  whileInView = {

  { opacity: 1,
  y: 0 

}}
                  transition = {

  { duration: 0.6,
  delay: index * 0.1 

}}"
                  viewport={{ once: true }}""
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"`
                >`"`
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>""
                    <IconComponent className="w-8 h-8 text-white"  />"
                  </div>""
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>""
                  <div className="space-y-2">"
                    {industry.solutions.slice(0, 4).map((solution, idx) => (""
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">""
                        <CheckCircle className="w-3 h-3 text-green-400"  />                        <span>{solution}</span>
                      </div>
                    ))}"
                  </div>""
                  <div className="mt-4">`
                    <Link`"`
                      to={`/solutions/${industry.industry.toLowerCase()}`}""
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300";
                    >;"
                      View {industry.industry} Solutions;""
                      <ArrowRight className="ml-2 h-4 w-4"  />;
                    </Link>;
                  </div>;
                </motion.div>;) }) }          </div>
        </div>
      </section>;
"
      {/* Featured Solutions */}""
      <section className = "py-16">;""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="mb-12 text-center""
          >;""
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>;""
            <p className="text-zion-slate-light text-lg">Our most popular and impactful technology solutions</p>;
          </motion.div>;"
;""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {filteredSolutions.map((solution, index) => {;
              
              return()                <motion.div
                  key = {solution.id}
                  initial = {

  { opacity: 0,
  y: 20 

}}
                  whileInView = {

  { opacity: 1,
  y: 0 

}}
                  transition = {

  { duration: 0.6,
  delay: index * 0.1 

}}"
                  viewport={{ once: true }}""
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300""
                >""
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">""
                    <solution.icon className="w-8 h-8 text-blue-400" />
                  </div>"
                  ""
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>""
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  "
                  {/* Features */}""
                  <div className="mb-6">""
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>""
                    <div className="grid grid-cols-2 gap-2">"
                      {solution.features.slice(0, 4).map((feature, idx) => (""
                        <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">""
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0"  />                          <span>{feature}</span>
                        </div>) ) }
                    </div>
                  </div>
"
                  {/* Benefits */}""
                  <div className="mb-6">""
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>""
                    <ul className="space-y-2">"
                      {solution.benefits.map((benefit, idx) => (""
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">""
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>) ) }
                    </ul>
                  </div>
"
                  {/* Actions */}""
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">""
                    <div className="flex space-x-2">"
                      {solution.demo && (""
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300">""
                          <Play className="w-4 h-4 mr-1 inline"  />                          Demo
                        </button>
                      )}"
                      {solution.trial && (""
                        <button className="px-4 py-2 border border-blue-600 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                          Start Trial
                        </button>) }
                    </div>`
                    <Link`"`
                      to={`/solutions/${solution.id}`}""
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >"
                      Learn More;""
                      <ArrowRight className="ml-2 h-4 w-4"  />;
                    </Link>;
                  </div>;
                </motion.div>;) }) }          </div>
        </motion.div>
"
      {/* CTA Section */}""
      <section className = "py-16">""
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}"
            viewport={{ once: true }}""
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8""
          >""
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?"
            </h3>""
            <p className="text-gray-300 mb-6">
              Let our experts help you find the perfect solution for your industry and business needs."
            </p>""
            <div className="flex flex-wrap justify-center gap-4">"
              <Link""
                to="/contact""
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>"
              <Link""
                to="/request-quote""
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Request Quote
              </Link>"
              <Link""
                to="/case-studies""
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                View Case Studies;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;) }
      </div>
    </div>
  )}'"`
'"`'"`