
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ;
  GraduationCap, Video, BookOpen, Users, Clock, ;
  Star, Award, Play, Download, ArrowRight} from 'lucide-react';
;
export default function Training() {;
  const courses = [
    {;
      id: 1,;
      title: "AI Fundamentals",;
      description: "Learn the basics of artificial intelligence and machine learning",;
      duration: "8 hours",;
      level: "Beginner",;
      rating: 4.8,;
      students: 1250,;
      price: "$199",;
      featured: true},;
    {;
      id: 2,;
      title: "Quantum Computing Masterclass",;
      description: "Advanced quantum computing concepts and applications",;
      duration: "12 hours",;
      level: "Advanced",;
      rating: 4.9,;
      students: 456,;
      price: "$399",;
      featured: true},;
    {;
      id: 3,;
      title: "Micro SaaS Development",;
      description: "Build and launch successful micro SaaS applications",;
      duration: "10 hours",;
      level: "Intermediate",;
      rating: 4.7,;
      students: 892,;
      price: "$299",;
      featured: false},;
    {;
      id: 4,;
      title: "Cybersecurity Essentials",;
      description: "Essential cybersecurity practices for modern applications",;
      duration: "6 hours",;
      level: "Beginner",;
      rating: 4.6,;
      students: 678,;
      price: "$149",;
      featured: false}
  ];
;
  const trainingTypes = [
    {;
      title: "Online Courses",;
      description: "Self-paced learning with video content and exercises",;
      icon: Video,;
      count: 25,;
      color: "from-blue-500 to-cyan-500"},;
    {;
      title: "Live Workshops",;
      description: "Interactive sessions with expert instructors",;
      icon: Users,;
      count: 12,;
      color: "from-green-500 to-emerald-500"},;
    {;
      title: "Certification Programs",;
      description: "Comprehensive programs with industry-recognized certificates",;
      icon: Award,;
      count: 8,;
      color: "from-purple-500 to-pink-500"},;
    {;
      title: "Corporate Training",;
      description: "Customized training solutions for enterprise teams",;
      icon: GraduationCap,;
      count: 15,;
      color: "from-orange-500 to-red-500";

      description: "Learn the basics of artificial intelligence and machine learning", duration: "8 hours",
      level: "Beginner", rating: 4.8,
      students: 1250, price: "$199",

      featured: true

      title: "Quantum Computing Masterclass", description: "Advanced quantum computing concepts and applications",
      duration: "12 hours", level: "Advanced",
      rating: 4.9, students: 456,
      price: "$399", featured: true
    }, { id: 3, title: "Micro SaaS Development",
      description: "Build and launch successful micro SaaS applications", duration: "10 hours",
      level: "Intermediate", rating: 4.7,
      students: 892, price: "$299",

      featured: false

      title: "Cybersecurity Essentials", description: "Essential cybersecurity practices for modern applications",
      duration: "6 hours", level: "Beginner",
      rating: 4.6, students: 678,
      price: "$149", featured: false

  ];

  const trainingTypes = [

      title: "Online Courses", description: "Self-paced learning with video content and exercises",

      icon: Video, count: 25,
      color: "from-blue-500 to-cyan-500"
    }, { title: "Live Workshops",
      description: "Interactive sessions with expert instructors", icon: Users,
      count: 12, color: "from-green-500 to-emerald-500"
    }, { title: "Certification Programs", description: "Comprehensive programs with industry-recognized certificates",
      icon: Award, count: 8,
      color: "from-purple-500 to-pink-500"
    }, { title: "Corporate Training",
      description: "Customized training solutions for enterprise teams", icon: GraduationCap,
      count: 15, color: "from-orange-500 to-red-500"

  ];

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

              className="text-center max-w-4xl mx-auto"
            ></motion>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Technology Training

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

              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Training Programs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from various training formats to suit your learning style and schedule

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {trainingTypes.map((type, index) => (&quot}
                <motion.div

                  key={type.title}

                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                    <type.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>

                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Featured Courses */}

              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Featured Courses</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and highly-rated training programs

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {courses.map((course, index) => (&quot}
                <motion.div

                  key={course.id}

                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === &apos;Beginner&apos; ? &apos;bg-green-600/20 text-green-300 border border-green-400/30&apos; :
                        course.level === &apos;Intermediate&apos; ? &apos;bg-yellow-600/20 text-yellow-300 border border-yellow-400/30&apos; :
                        &apos;bg-red-600/20 text-red-300 border border-red-400/30&apos}`}>
                        {course.level}&apos;
                      </span>
                      {course.featured && (}
                        <span className=&quot;px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs&quot;>
                          Featured&quot;
                        </span>
                      )}
                    </div>


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


                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                      Enroll Now

                    </button>
                  </div>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}

              className="text-center max-w-4xl mx-auto"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Advance Your Career?

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


  )}


