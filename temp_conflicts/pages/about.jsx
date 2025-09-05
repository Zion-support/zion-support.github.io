
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const About = () => {
  const values = [
    {
      title: &quot;Innovation&quot;,
      description: &quot;We constantly push the boundaries of technology to deliver cutting-edge solutions.&quot;,
      icon: &quot;🚀&quot;
    },
    {
      title: &quot;Excellence&quot;,
      description: &quot;We maintain the highest standards of quality in everything we do.&quot;,
      icon: &quot;⭐&quot;
    },
    {
      title: &quot;Collaboration&quot;,
      description: &quot;We work closely with our clients to ensure their success is our success.&quot;,
      icon: &quot;🤝&quot;
    },
    {
      title: &quot;Integrity&quot;,
      description: &quot;We operate with transparency, honesty, and ethical business practices.&quot;,
      icon: &quot;🔒&quot;
    }
  ];

  const team = [
    {
      name: &quot;Sarah Johnson&quot;,
      role: &quot;Chief Technology Officer&quot;,
      expertise: &quot;AI/ML, Cloud Architecture&quot;,
      experience: &quot;15+ years&quot;
    },
    {
      name: &quot;Michael Chen&quot;,
      role: &quot;Head of Engineering&quot;,
      expertise: &quot;Full-Stack Development, DevOps&quot;,
      experience: &quot;12+ years&quot;
    },
    {
      name: &quot;Emily Rodriguez&quot;,
      role: &quot;Lead Data Scientist&quot;,
      expertise: &quot;Data Analytics, Machine Learning&quot;,
      experience: &quot;10+ years&quot;
    },
    {
      name: &quot;David Kim&quot;,
      role: &quot;Solutions Architect&quot;,
      expertise: &quot;Cloud Solutions, Blockchain&quot;,
      experience: &quot;14+ years&quot;
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Learn about Zion Tech Group - a leading technology company specializing in AI, cloud solutions, and digital transformation. Discover our mission, values, and team.&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>
            About Zion Tech Group
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-4xl mx-auto&quot;>
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative digital solutions. Since our founding, we've been at the 
            forefront of technological advancement, helping organizations navigate the 
            complexities of the digital age.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className=&quot;grid md:grid-cols-2 gap-12 mb-16&quot;>
          <div className=&quot;bg-white rounded-lg shadow-lg p-8&quot;>
            <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Our Mission</h2>
            <p className=&quot;text-gray-600&quot;>
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, efficiency, and growth. We believe that every organization 
              deserves access to world-class technology expertise.
            </p>
          </div>
          <div className=&quot;bg-white rounded-lg shadow-lg p-8&quot;>
            <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Our Vision</h2>
            <p className=&quot;text-gray-600&quot;>
              To be the leading technology partner for businesses worldwide, known for 
              delivering transformative solutions that shape the future of industries 
              and create lasting value for our clients.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className=&quot;bg-white rounded-lg shadow-lg p-8 mb-16&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-6&quot;>Our Story</h2>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🏗️</div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Founded in 2018</h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                Started with a vision to democratize access to advanced technology solutions
              </p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📈</div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Rapid Growth</h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                Expanded to serve 100+ clients across various industries
              </p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🌍</div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Global Reach</h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                Now operating in multiple countries with a diverse team
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className=&quot;mb-16&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 text-center mb-12&quot;>Our Core Values</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {values.map((value, index) => (
              <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 text-center&quot;>
                <div className=&quot;text-4xl mb-4&quot;>{value.icon}</div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{value.title}</h3>
                <p className=&quot;text-gray-600&quot;>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className=&quot;mb-16&quot; id=&quot;team&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 text-center mb-12&quot;>Our Leadership Team</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {team.map((member, index) => (
              <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 text-center&quot;>
                <div className=&quot;w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-blue-600&quot;>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{member.name}</h3>
                <p className=&quot;text-blue-600 font-medium mb-2&quot;>{member.role}</p>
                <p className=&quot;text-gray-600 text-sm mb-2&quot;>{member.expertise}</p>
                <p className=&quot;text-gray-500 text-xs&quot;>{member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className=&quot;bg-blue-900 text-white rounded-lg p-8 text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-8&quot;>By the Numbers</h2>
          <div className=&quot;grid md:grid-cols-4 gap-8&quot;>
            <div>
              <div className=&quot;text-3xl font-bold mb-2&quot;>100+</div>
              <div className=&quot;text-blue-100&quot;>Happy Clients</div>
            </div>
            <div>
              <div className=&quot;text-3xl font-bold mb-2&quot;>500+</div>
              <div className=&quot;text-blue-100&quot;>Projects Completed</div>
            </div>
            <div>
              <div className=&quot;text-3xl font-bold mb-2&quot;>50+</div>
              <div className=&quot;text-blue-100&quot;>Team Members</div>
            </div>
            <div>
              <div className=&quot;text-3xl font-bold mb-2&quot;>5+</div>
              <div className=&quot;text-blue-100&quot;>Years of Excellence</div>
            </div>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default About;