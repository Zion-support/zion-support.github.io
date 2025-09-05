
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Talent = () => {
  const openPositions = [
    {
      title: &quot;Senior AI Engineer&quot;,
      department: &quot;Artificial Intelligence&quot;,
      location: &quot;San Francisco, CA&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;5+ years&quot;,
      description: &quot;Join our AI team to build cutting-edge machine learning models and AI solutions.&quot;,
      skills: [&quot;Python&quot;, &quot;TensorFlow&quot;, &quot;PyTorch&quot;, &quot;MLOps&quot;, &quot;Cloud Platforms&quot;],
      href: &quot;/talent/senior-ai-engineer&quot;
    },
    {
      title: &quot;Cloud Solutions Architect&quot;,
      department: &quot;Cloud Engineering&quot;,
      location: &quot;Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;7+ years&quot;,
      description: &quot;Design and implement scalable cloud architectures for enterprise clients.&quot;,
      skills: [&quot;AWS&quot;, &quot;Azure&quot;, &quot;GCP&quot;, &quot;Terraform&quot;, &quot;Kubernetes&quot;],
      href: &quot;/talent/cloud-solutions-architect&quot;
    },
    {
      title: &quot;Full-Stack Developer&quot;,
      department: &quot;Engineering&quot;,
      location: &quot;New York, NY&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;3+ years&quot;,
      description: &quot;Build modern web applications using React, Node.js, and cloud technologies.&quot;,
      skills: [&quot;React&quot;, &quot;Node.js&quot;, &quot;TypeScript&quot;, &quot;PostgreSQL&quot;, &quot;Docker&quot;],
      href: &quot;/talent/full-stack-developer&quot;
    },
    {
      title: &quot;Data Scientist&quot;,
      department: &quot;Data Analytics&quot;,
      location: &quot;London, UK&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;4+ years&quot;,
      description: &quot;Transform data into actionable insights using advanced analytics and ML.&quot;,
      skills: [&quot;Python&quot;, &quot;SQL&quot;, &quot;Pandas&quot;, &quot;Scikit-learn&quot;, &quot;Data Visualization&quot;],
      href: &quot;/talent/data-scientist&quot;
    },
    {
      title: &quot;DevOps Engineer&quot;,
      department: &quot;Operations&quot;,
      location: &quot;Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;4+ years&quot;,
      description: &quot;Automate and optimize our development and deployment processes.&quot;,
      skills: [&quot;CI/CD&quot;, &quot;Docker&quot;, &quot;Kubernetes&quot;, &quot;AWS&quot;, &quot;Monitoring&quot;],
      href: &quot;/talent/devops-engineer&quot;
    },
    {
      title: &quot;Product Manager&quot;,
      department: &quot;Product&quot;,
      location: &quot;San Francisco, CA&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;6+ years&quot;,
      description: &quot;Lead product strategy and development for our technology platforms.&quot;,
      skills: [&quot;Product Strategy&quot;, &quot;Agile&quot;, &quot;User Research&quot;, &quot;Data Analysis&quot;, &quot;Stakeholder Management&quot;],
      href: &quot;/talent/product-manager&quot;
    }
  ];

  const benefits = [
    {
      title: &quot;Health & Wellness&quot;,
      description: &quot;Comprehensive health insurance, dental, vision, and mental health support&quot;,
      icon: &quot;🏥&quot;
    },
    {
      title: &quot;Flexible Work&quot;,
      description: &quot;Remote work options, flexible hours, and unlimited PTO&quot;,
      icon: &quot;🏠&quot;
    },
    {
      title: &quot;Learning & Growth&quot;,
      description: &quot;Professional development budget, conference attendance, and training programs&quot;,
      icon: &quot;📚&quot;
    },
    {
      title: &quot;Team Building&quot;,
      description: &quot;Regular team events, hackathons, and company retreats&quot;,
      icon: &quot;🎉&quot;
    },
    {
      title: &quot;Equity & Rewards&quot;,
      description: &quot;Competitive salary, equity options, and performance bonuses&quot;,
      icon: &quot;💰&quot;
    },
    {
      title: &quot;Work-Life Balance&quot;,
      description: &quot;Generous parental leave, sabbaticals, and wellness programs&quot;,
      icon: &quot;⚖️&quot;
    }
  ];

  const values = [
    {
      title: &quot;Innovation First&quot;,
      description: &quot;We encourage creative thinking and experimentation&quot;
    },
    {
      title: &quot;Continuous Learning&quot;,
      description: &quot;Growth mindset is core to our culture&quot;
    },
    {
      title: &quot;Collaboration&quot;,
      description: &quot;We believe great things happen when we work together&quot;
    },
    {
      title: &quot;Impact Driven&quot;,
      description: &quot;We focus on solutions that make a real difference&quot;
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Join Zion Tech Group's talented team. Explore career opportunities in AI, cloud computing, blockchain, and more. Build the future of technology with us.&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>
            Join Our Team
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
            Help us build the future of technology. We're looking for passionate, 
            innovative minds to join our mission of transforming businesses through 
            cutting-edge solutions.
          </p>
        </div>

        {/* Why Join Us */}
        <div className=&quot;bg-white rounded-lg shadow-lg p-8 mb-16&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 text-center mb-12&quot;>Why Join Zion Tech Group?</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {values.map((value, index) => (
              <div key={index} className=&quot;text-center&quot;>
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>{value.title}</h3>
                <p className=&quot;text-gray-600&quot;>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className=&quot;mb-16&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 text-center mb-12&quot;>Benefits & Perks</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 text-center&quot;>
                <div className=&quot;text-4xl mb-4&quot;>{benefit.icon}</div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{benefit.title}</h3>
                <p className=&quot;text-gray-600&quot;>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className=&quot;mb-16&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 text-center mb-12&quot;>Open Positions</h2>
          <div className=&quot;space-y-6&quot;>
            {openPositions.map((position, index) => (
              <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow&quot;>
                <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between&quot;>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex flex-wrap items-center gap-3 mb-3&quot;>
                      <span className=&quot;inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full&quot;>
                        {position.department}
                      </span>
                      <span className=&quot;inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full&quot;>
                        {position.type}
                      </span>
                      <span className=&quot;inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full&quot;>
                        {position.experience}
                      </span>
                    </div>
                    <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>{position.title}</h3>
                    <p className=&quot;text-gray-600 mb-3&quot;>{position.description}</p>
                    <div className=&quot;flex items-center text-sm text-gray-500 mb-4&quot;>
                      <span className=&quot;mr-4&quot;>📍 {position.location}</span>
                    </div>
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;font-medium text-gray-900 mb-2&quot;>Required Skills:</h4>
                      <div className=&quot;flex flex-wrap gap-2&quot;>
                        {position.skills.map((skill, idx) => (
                          <span key={idx} className=&quot;bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded&quot;>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=&quot;lg:ml-6 mt-4 lg:mt-0&quot;>
                    <Link href={position.href} className=&quot;inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors&quot;>
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className=&quot;bg-white rounded-lg shadow-lg p-8 mb-16&quot;>
          <div className=&quot;text-center mb-8&quot;>
            <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>Our Culture</h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              We foster an environment where innovation thrives and every voice matters
            </p>
          </div>
          
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            <div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Diversity & Inclusion</h3>
              <p className=&quot;text-gray-600&quot;>
                We believe diverse teams create better solutions. We're committed to building 
                an inclusive workplace where everyone feels valued and empowered to contribute.
              </p>
            </div>
            <div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Innovation & Experimentation</h3>
              <p className=&quot;text-gray-600&quot;>
                We encourage our team to think outside the box, experiment with new ideas, 
                and push the boundaries of what's possible in technology.
              </p>
            </div>
            <div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Work-Life Balance</h3>
              <p className=&quot;text-gray-600&quot;>
                We understand that great work comes from happy, well-rested people. 
                We support flexible schedules and prioritize mental health and wellness.
              </p>
            </div>
            <div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Continuous Growth</h3>
              <p className=&quot;text-gray-600&quot;>
                Learning never stops at Zion Tech Group. We invest in our team's growth 
                through training, mentorship, and opportunities to work on cutting-edge projects.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className=&quot;bg-blue-900 text-white rounded-lg p-8 text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Don't See the Right Role?</h2>
          <p className=&quot;text-blue-100 mb-6&quot;>
            We're always looking for talented individuals. Send us your resume and let's discuss 
            how you can contribute to our mission.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors&quot;>
              Send Resume
            </Link>
            <Link href=&quot;/contact&quot; className=&quot;bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors&quot;>
              Contact HR
            </Link>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Talent;