
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const _About = () => {_const _values = [
    {
      title: "Innovation", _description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.", _icon: "🚀"},
    {_title: "Excellence", _description: "We maintain the highest standards of quality in everything we do.", _icon: "⭐"},
    {_title: "Collaboration", _description: "We work closely with our clients to ensure their success is our success.", _icon: "🤝"},
    {_title: "Integrity", _description: "We operate with transparency, _honesty, _and ethical business practices.", _icon: "🔒"}
  ];

  const _team = [
    {_name: "Sarah Johnson", _role: "Chief Technology Officer", _expertise: "AI/ML, _Cloud Architecture", _experience: "15+ years"},
    {_name: "Michael Chen", _role: "Head of Engineering", _expertise: "Full-Stack Development, _DevOps", _experience: "12+ years"},
    {_name: "Emily Rodriguez", _role: "Lead Data Scientist", _expertise: "Data Analytics, _Machine Learning", _experience: "10+ years"},
    {_name: "David Kim", _role: "Solutions Architect", _expertise: "Cloud Solutions, _Blockchain", _experience: "14+ years"}
  ];

  return (_<EnhancedLayout>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology company specializing in AI, _cloud solutions, _and digital transformation. Discover our mission, _values, _and team." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {_/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative digital solutions. Since our founding, _we've been at the 
            forefront of technological advancement, _helping organizations navigate the 
            complexities of the digital age.
          </p>
        </div>

        {_/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, _efficiency, _and growth. We believe that every organization 
              deserves access to world-class technology expertise.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading technology partner for businesses worldwide, _known for 
              delivering transformative solutions that shape the future of industries 
              and create lasting value for our clients.
            </p>
          </div>
        </div>

        {_/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold mb-2">Founded in 2018</h3>
              <p className="text-gray-600 text-sm">
                Started with a vision to democratize access to advanced technology solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold mb-2">Rapid Growth</h3>
              <p className="text-gray-600 text-sm">
                Expanded to serve 100+ clients across various industries
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Now operating in multiple countries with a diverse team
              </p>
            </div>
          </div>
        </div>

        {_/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_values.map((value, _index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{_value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{_value.title}</h3>
                <p className="text-gray-600">{_value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {_/* Team Section */}
        <div className="mb-16" id="team">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_team.map(_(member, _index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-blue-600">
                  {_member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{_member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{_member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{_member.expertise}</p>
                <p className="text-gray-500 text-xs">{_member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {_/* Stats Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-8">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default About;