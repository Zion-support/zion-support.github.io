
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const _Talent = () => {_const _openPositions = [
    {
      title: "Senior AI Engineer", _department: "Artificial Intelligence", _location: "San Francisco, _CA", _type: "Full-time", _experience: "5+ years", _description: "Join our AI team to build cutting-edge machine learning models and AI solutions.", _skills: ["Python", _"TensorFlow", _"PyTorch", _"MLOps", _"Cloud Platforms"], _href: "/talent/senior-ai-engineer"},
    {_title: "Cloud Solutions Architect", _department: "Cloud Engineering", _location: "Remote", _type: "Full-time", _experience: "7+ years", _description: "Design and implement scalable cloud architectures for enterprise clients.", _skills: ["AWS", _"Azure", _"GCP", _"Terraform", _"Kubernetes"], _href: "/talent/cloud-solutions-architect"},
    {_title: "Full-Stack Developer", _department: "Engineering", _location: "New York, _NY", _type: "Full-time", _experience: "3+ years", _description: "Build modern web applications using React, _Node.js, _and cloud technologies.", _skills: ["React", _"Node.js", _"TypeScript", _"PostgreSQL", _"Docker"], _href: "/talent/full-stack-developer"},
    {_title: "Data Scientist", _department: "Data Analytics", _location: "London, _UK", _type: "Full-time", _experience: "4+ years", _description: "Transform data into actionable insights using advanced analytics and ML.", _skills: ["Python", _"SQL", _"Pandas", _"Scikit-learn", _"Data Visualization"], _href: "/talent/data-scientist"},
    {_title: "DevOps Engineer", _department: "Operations", _location: "Remote", _type: "Full-time", _experience: "4+ years", _description: "Automate and optimize our development and deployment processes.", _skills: ["CI/CD", _"Docker", _"Kubernetes", _"AWS", _"Monitoring"], _href: "/talent/devops-engineer"},
    {_title: "Product Manager", _department: "Product", _location: "San Francisco, _CA", _type: "Full-time", _experience: "6+ years", _description: "Lead product strategy and development for our technology platforms.", _skills: ["Product Strategy", _"Agile", _"User Research", _"Data Analysis", _"Stakeholder Management"], _href: "/talent/product-manager"}
  ];

  const _benefits = [
    {_title: "Health & Wellness", _description: "Comprehensive health insurance, _dental, _vision, _and mental health support", _icon: "🏥"},
    {_title: "Flexible Work", _description: "Remote work options, _flexible hours, _and unlimited PTO", _icon: "🏠"},
    {_title: "Learning & Growth", _description: "Professional development budget, _conference attendance, _and training programs", _icon: "📚"},
    {_title: "Team Building", _description: "Regular team events, _hackathons, _and company retreats", _icon: "🎉"},
    {_title: "Equity & Rewards", _description: "Competitive salary, _equity options, _and performance bonuses", _icon: "💰"},
    {_title: "Work-Life Balance", _description: "Generous parental leave, _sabbaticals, _and wellness programs", _icon: "⚖️"}
  ];

  const _values = [
    {_title: "Innovation First", _description: "We encourage creative thinking and experimentation"},
    {_title: "Continuous Learning", _description: "Growth mindset is core to our culture"},
    {_title: "Collaboration", _description: "We believe great things happen when we work together"},
    {_title: "Impact Driven", _description: "We focus on solutions that make a real difference"}
  ];

  return (_<EnhancedLayout>
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's talented team. Explore career opportunities in AI, _cloud computing, _blockchain, _and more. Build the future of technology with us." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {_/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of technology. We're looking for passionate, _innovative minds to join our mission of transforming businesses through 
            cutting-edge solutions.
          </p>
        </div>

        {_/* Why Join Us */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Join Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_values.map((value, _index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{_value.title}</h3>
                <p className="text-gray-600">{_value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {_/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_benefits.map(_(benefit, _index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{_benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{_benefit.title}</h3>
                <p className="text-gray-600">{_benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {_/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {_openPositions.map(_(position, _index) => (_<div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {_position.department}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {_position.type}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {_position.experience}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{_position.title}</h3>
                    <p className="text-gray-600 mb-3">{_position.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">📍 {_position.location}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {_position.skills.map((skill, _idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {_skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Link href={_position.href} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {_/* Culture Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600">
              We foster an environment where innovation thrives and every voice matters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Diversity & Inclusion</h3>
              <p className="text-gray-600">
                We believe diverse teams create better solutions. We're committed to building 
                an inclusive workplace where everyone feels valued and empowered to contribute.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation & Experimentation</h3>
              <p className="text-gray-600">
                We encourage our team to think outside the box, experiment with new ideas, 
                and push the boundaries of what's possible in technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                We understand that great work comes from happy, well-rested people. 
                We support flexible schedules and prioritize mental health and wellness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Continuous Growth</h3>
              <p className="text-gray-600">
                Learning never stops at Zion Tech Group. We invest in our team's growth 
                through training, mentorship, and opportunities to work on cutting-edge projects.
              </p>
            </div>
          </div>
        </div>

        {_/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-blue-100 mb-6">
            We're always looking for talented individuals. Send us your resume and let's discuss 
            how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send Resume
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Contact HR
            </Link>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Talent;