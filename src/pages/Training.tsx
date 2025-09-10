import React from 'react';
import SEO from '../components/SEO';

const Training: React.FC = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      price: "$299",
      description: "Learn the basics of artificial intelligence and machine learning concepts.",
      topics: ["Introduction to AI", "Machine Learning Basics", "Neural Networks", "Data Preprocessing"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Advanced Cybersecurity",
      level: "Intermediate",
      duration: "6 weeks",
      price: "$499",
      description: "Master advanced cybersecurity techniques and threat detection methods.",
      topics: ["Penetration Testing", "Incident Response", "Security Architecture", "Threat Intelligence"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Computing Mastery",
      level: "Advanced",
      duration: "8 weeks",
      price: "$799",
      description: "Comprehensive cloud computing course covering AWS, Azure, and GCP.",
      topics: ["Cloud Architecture", "Containerization", "Serverless Computing", "DevOps Practices"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      level: "Intermediate",
      duration: "5 weeks",
      price: "$399",
      description: "Learn data analysis, visualization, and statistical modeling techniques.",
      topics: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Big Data Processing"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Blockchain Development",
      level: "Advanced",
      duration: "7 weeks",
      price: "$699",
      description: "Build decentralized applications and smart contracts on various blockchain platforms.",
      topics: ["Smart Contracts", "DeFi Development", "NFT Creation", "Blockchain Security"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "IoT & Edge Computing",
      level: "Intermediate",
      duration: "6 weeks",
      price: "$549",
      description: "Design and implement Internet of Things solutions and edge computing systems.",
      topics: ["IoT Architecture", "Sensor Networks", "Edge Computing", "Real-time Processing"],
      image: "/api/placeholder/400/250"
    }
  ];

  const certifications = [
    {
      name: "Certified AI Professional",
      description: "Validate your AI and machine learning expertise",
      requirements: "Complete AI Fundamentals course + exam",
      validity: "2 years"
    },
    {
      name: "Certified Cybersecurity Expert",
      description: "Demonstrate advanced cybersecurity skills",
      requirements: "Complete Advanced Cybersecurity course + exam",
      validity: "3 years"
    },
    {
      name: "Certified Cloud Architect",
      description: "Prove your cloud computing mastery",
      requirements: "Complete Cloud Computing Mastery course + exam",
      validity: "2 years"
    }
  ];

  return (
    <>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Enhance your skills with our comprehensive training programs and industry-recognized certifications."
        keywords="training, certification, courses, ai training, cybersecurity training, cloud computing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Training & Certification
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advance your career with our comprehensive training programs and industry-recognized certifications 
                in AI, cybersecurity, cloud computing, and more.
              </p>
            </div>

            {/* Training Programs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Training Programs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingPrograms.map((program) => (
                  <div key={program.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Course {program.id}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                        {program.level}
                      </span>
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {program.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-gray-300 mb-4">{program.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Topics Covered:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {program.topics.map((topic, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-white">{program.price}</span>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-3">{cert.name}</h3>
                    <p className="text-gray-300 mb-4">{cert.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div>
                        <span className="text-sm font-semibold text-purple-400">Requirements:</span>
                        <p className="text-sm text-gray-300">{cert.requirements}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-purple-400">Validity:</span>
                        <p className="text-sm text-gray-300">{cert.validity}</p>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Paths */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Learning Paths</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</span>
                      <span className="text-gray-300">AI Fundamentals</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</span>
                      <span className="text-gray-300">Data Science & Analytics</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</span>
                      <span className="text-gray-300">Advanced AI Applications</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">✓</span>
                      <span className="text-gray-300">Certified AI Professional</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Cybersecurity Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</span>
                      <span className="text-gray-300">Cybersecurity Basics</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</span>
                      <span className="text-gray-300">Advanced Cybersecurity</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</span>
                      <span className="text-gray-300">Incident Response</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">✓</span>
                      <span className="text-gray-300">Certified Cybersecurity Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have advanced their careers with our training programs. 
                Start your learning journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Browse All Courses
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-white/20">
                  Contact Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;