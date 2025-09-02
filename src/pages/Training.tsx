import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
import { 
  GraduationCap, Video, BookOpen, Users, Clock, 
  Star, Award, Play, Download, ArrowRight
} from &apos;lucide-react';&apos;&apos;

export default function Training() {}
  const courses = [
    ;{
      id: 1,
      title: &quot;AI Fundamentals&quot;,
      description: &quot;Learn the basics of artificial intelligence and machine learning&quot;,
      duration: &quot;8 hours&quot;,
      level: &quot;Beginner&quot;,
      rating: 4.8,
      students: 1250,
      price: &quot;$199&quot;,
      featured: true
    },
    {
      id: 2,
      title: &quot;Quantum Computing Masterclass&quot;,
      description: &quot;Advanced quantum computing concepts and applications&quot;,
      duration: &quot;12 hours&quot;,
      level: &quot;Advanced&quot;,
      rating: 4.9,
      students: 456,
      price: &quot;$399&quot;,
      featured: true
    },
    {
      id: 3,
      title: &quot;Micro SaaS Development&quot;,
      description: &quot;Build and launch successful micro SaaS applications&quot;,
      duration: &quot;10 hours&quot;,
      level: &quot;Intermediate&quot;,
      rating: 4.7,
      students: 892,
      price: &quot;$299&quot;,
      featured: false
    },
    {
      id: 4,
      title: &quot;Cybersecurity Essentials&quot;,
      description: &quot;Essential cybersecurity practices for modern applications&quot;,
      duration: &quot;6 hours&quot;,
      level: &quot;Beginner&quot;,
      rating: 4.6,
      students: 678,
      price: &quot;$149&quot;,
      featured: false
    }
  ];&quot;

  const trainingTypes = [
    {
      title: &quot;Online Courses&quot;,
      description: &quot;Self-paced learning with video content and exercises&quot;,
      icon: Video,
      count: 25,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Live Workshops&quot;,
      description: &quot;Interactive sessions with expert instructors&quot;,
      icon: Users,
      count: 12,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      title: &quot;Certification Programs&quot;,
      description: &quot;Comprehensive programs with industry-recognized certificates&quot;,
      icon: Award,
      count: 8,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Corporate Training&quot;,
      description: &quot;Customized training solutions for enterprise teams&quot;,
      icon: GraduationCap,
      count: 15,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ];

  return (&quot;
    <>
      <SEO 
        title=&quot;Training - Zion Tech Group | Technology Education & Certification&quot;
        description=&quot;Enhance your skills with our comprehensive training programs in AI, quantum computing, cybersecurity, and emerging technologies. Expert-led courses and certifications.&quot;
        keywords=&quot;training, courses, certification, AI training, quantum computing, cybersecurity, education, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Technology Training&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Master cutting-edge technologies with our comprehensive training programs. 
                Learn from industry experts and earn recognized certifications.&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <GraduationCap className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Types */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Training Programs&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose from various training formats to suit your learning style and schedule&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {trainingTypes.map((type, index) => (&quot;}
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105&quot;
                >&quot;
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                    <type.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{type.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-3&quot;>{type.description}&quot;</p>
                  <div className=&quot;text-2xl font-bold text-blue-400&quot;>{type.count}+&quot;</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Featured Courses&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our most popular and highly-rated training programs&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {courses.map((course, index) => (&quot;}
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300&quot;
                >&quot;
                  <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                    <div className=&quot;flex items-center gap-2&quot;>&quot;"
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === &apos;Beginner&apos; ? &apos;bg-green-600/20 text-green-300 border border-green-400/30&apos; :
                        course.level === &apos;Intermediate&apos; ? &apos;bg-yellow-600/20 text-yellow-300 border border-yellow-400/30&apos; :
                        &apos;bg-red-600/20 text-red-300 border border-red-400/30&apos;
                      }`}>
                        {course.level}&apos;
                      </span>
                      {course.featured && (}
                        <span className=&quot;px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs&quot;>
                          Featured&quot;
                        </span>
                      )}
                    </div>
                    <div className=&quot;flex items-center text-yellow-400&quot;>&quot;"
                      <Star className=&quot;w-4 h-4 fill-current&quot; />&quot;
                      <span className=&quot;ml-1 text-sm&quot;>{course.rating}&quot;</span>
                    </div>
                  </div>

                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{course.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{course.description}&quot;</p>

                  <div className=&quot;flex items-center justify-between mb-4&quot;>&quot;"
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Clock className=&quot;w-4 h-4 mr-1&quot; />
                      {course.duration}&quot;
                    </div>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Users className=&quot;w-4 h-4 mr-1&quot; />
                      {course.students} students&quot;
                    </div>
                  </div>

                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <span className=&quot;text-2xl font-bold text-white&quot;>{course.price}&quot;</span>
                    <button className=&quot;px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hove,r:to-purple-700 transition-all duration-200&quot;>
                      Enroll Now&quot;
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Ready to Advance Your Career?&quot;
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of professionals who have enhanced their skills 
                with our industry-leading training programs.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <GraduationCap className=&quot;w-5 h-5 mr-2&quot; />
                  Start Learning Today&quot;
                </a>
                <a
                  href=&quot;/about&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  Learn More&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}