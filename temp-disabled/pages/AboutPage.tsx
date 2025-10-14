<<<<<<< HEAD
import React from 'react'''';
import { Helmet } from 'react-helmet-async';import {'}''
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'''';
export default function AboutPage()    {}
return (    <>
      <Helmet></Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and team" />"""
      </Helmet>
    }
  ];
const stats = [
    { number: '50+', label: 'Projects Completed' },'''
    { number: '25+', label: 'Happy Clients' },'''
    { number: '99%', label: 'Success Rate' },'''
    { number: '4+', label: 'Years Experience' }'''
  ]
  return (
    <>
      <Helmet></Helmet>
        <title>About Us - Zion Tech Group</title>"
        <meta name="description" content="Learn about Zion Tech Group's mission and team" />"""
      </Helmet>"
      <div className="min-h-screen bg-white"></div>"""
        {/* Hero Section */}"
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">""""
          <div className="max-w-6xl mx-auto text-center"></div>""""
            <h1 className="text-5xl font-bold text-gray-900 mb-6">"""
              About Zion Tech Group
            </h1>"
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">"""
Empowering businesses through innovative technology solutions
            </p>"
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">"""
              Founded in 2020, we've been at the forefront of digital transformation,'''
              helping companies leverage the power of artificial intelligence, cybersecurity,
              and cloud technologies to achieve unprecedented growth.            </p>
          </div>
        </section>
        {/* Stats Section */}"
        <section className="py-16 px-4">""""
          <div className="max-w-6xl mx-auto"></div>""""
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>""")
              {stats.map((stat, index) => (}"
                <div key={index} className="text-center"></div>""""
                  <div className="text-4xl font-bold text-blue-600 mb-2"></div>"""
                    {stat.number}
                  </div>"
                  <div className="text-gray-600"></div>{stat.label}</div>"""
                </div>)
              ))}
            </div>
          </div>
        </section>
        {/* Values Section */}"
        <section className="py-20 px-4 bg-gray-50">""""
          <div className="max-w-6xl mx-auto"></div>""""
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">"""
              Our Values
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"""
              {values.map((value, index) => (}"
                <div key={index} className="text-center"></div>""""
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4"></div>""""
                    <value.icon className="w-8 h-8 text-blue-600" />"""
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">"""
                    {value.title}
                  </h3>"
                  <p className="text-gray-600">{value.description}</p>"""
                </div>)
              ))}
            </div>
          </div>
        </div>
      </section>"
      <div className="min-h-screen bg-slate-900 text-white p-8"></div>""""
        <div className="max-w-4xl mx-auto"></div>""""
          <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>""""
          <p className="text-lg text-gray-300">"""
            We are a leading technology company specializing in AI solutions, cybersecurity, and digital transformation.
          </p>
        </div>
      </div>
    </>
  )
}
export default AboutPage"
=======
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
