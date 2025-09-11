import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Award,
  Users,
  Lightbulb,
  Target,
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with 15+ years in AI and technology innovation. Former Google AI researcher and Stanford PhD in Computer Science.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      github: 'https://github.com/sarahchen',
    },
    expertise: ['AI/ML', 'Leadership', 'Strategy'],
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect and technology evangelist. Expert in cloud computing, microservices, and scalable system design.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrod',
      github: 'https://github.com/michaelrod',
    },
    expertise: ['Cloud Computing', 'Architecture', 'DevOps'],
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Head of AI Research',
    bio: 'Leading AI researcher specializing in natural language processing and computer vision. Published author and conference speaker.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/aishapatel',
      twitter: 'https://twitter.com/aishapatel',
      github: 'https://github.com/aishapatel',
    },
    expertise: ['NLP', 'Computer Vision', 'Research'],
  },
  {
    name: 'David Kim',
    role: 'Head of Engineering',
    bio: 'Software engineering leader with expertise in building high-performance applications and managing distributed teams.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
      github: 'https://github.com/davidkim',
    },
    expertise: ['Software Engineering', 'Team Leadership', 'Performance'],
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Design',
    bio: 'User experience designer passionate about creating intuitive and accessible digital experiences. Former Apple design team member.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/lisathompson',
      twitter: 'https://twitter.com/lisathompson',
      github: 'https://github.com/lisathompson',
    },
    expertise: ['UX/UI Design', 'Accessibility', 'Design Systems'],
  },
  {
    name: 'James Wilson',
    role: 'Head of Operations',
    bio: 'Operations expert with a focus on scaling businesses and optimizing processes. Former McKinsey consultant with MBA from Wharton.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      twitter: 'https://twitter.com/jameswilson',
      github: 'https://github.com/jameswilson',
    },
    expertise: ['Operations', 'Strategy', 'Business Development'],
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      "We constantly push the boundaries of what's possible with technology.",
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe in the power of diverse teams working together towards common goals.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We strive for the highest quality in everything we do, from code to customer service.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description:
      'We conduct business with honesty, transparency, and ethical principles.',
  },
];

export default function Team() {
  return (
    <Layout
      title='Our Team - Zion Tech Group'
      description='Meet the talented individuals behind our innovative technology solutions'
    >
      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
          <div className='container mx-auto px-4'>
            <div className='text-center'>
              <h1 className='text-5xl font-bold mb-6'>Our Team</h1>
              <p className='text-xl max-w-3xl mx-auto'>
                Meet the brilliant minds behind Zion Tech Group. Our diverse
                team of experts is united by a shared passion for innovation and
                excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Leadership Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our leadership team brings together decades of experience from top
              technology companies and academic institutions.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='aspect-w-1 aspect-h-1'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-64 object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-blue-600 font-medium mb-3'>
                    {member.role}
                  </p>
                  <p className='text-gray-600 mb-4'>{member.bio}</p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className='flex space-x-4'>
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-blue-600 transition-colors'
                      >
                        <Linkedin className='w-5 h-5' />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-blue-400 transition-colors'
                      >
                        <Twitter className='w-5 h-5' />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-gray-600 transition-colors'
                      >
                        <Github className='w-5 h-5' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className='bg-white py-16'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Our Values
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                These core values guide everything we do and shape our company
                culture.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className='text-center'>
                    <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <IconComponent className='w-8 h-8 text-blue-600' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      {value.title}
                    </h3>
                    <p className='text-gray-600'>{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-4xl font-bold mb-6'>Join Our Team</h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto'>
              We're always looking for talented individuals who share our
              passion for innovation and excellence. Explore our open positions
              and join us in building the future.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/careers'
                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'
              >
                View Open Positions
              </Link>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors'
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
