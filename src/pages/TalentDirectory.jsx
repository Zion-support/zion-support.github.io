import React from 'react';
import SEOHead from "@/components/SEOHead";
import { Search, MapPin, Briefcase, Star } from 'lucide-react';
const TalentDirectory = () => {
    const talents = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "Senior AI Engineer",
            experience: "8+ years",
            location: "San Francisco, CA",
            skills: ["Machine Learning", "Python", "TensorFlow", "Computer Vision"],
            rating: 4.9,
            projects: 24,
            avatar: "👩‍💻"
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Cloud Architect",
            experience: "10+ years",
            location: "Austin, TX",
            skills: ["AWS", "Kubernetes", "Terraform", "DevOps"],
            rating: 4.8,
            projects: 31,
            avatar: "👨‍💻"
        },
        {
            id: 3,
            name: "Priya Patel",
            role: "Cybersecurity Specialist",
            experience: "6+ years",
            location: "New York, NY",
            skills: ["Penetration Testing", "SOC", "Compliance", "Incident Response"],
            rating: 4.9,
            projects: 18,
            avatar: "👩‍💻"
        },
        {
            id: 4,
            name: "David Kim",
            role: "Data Scientist",
            experience: "7+ years",
            location: "Seattle, WA",
            skills: ["Data Analytics", "SQL", "R", "Tableau"],
            rating: 4.7,
            projects: 22,
            avatar: "👨‍💻"
        },
        {
            id: 5,
            name: "Emily Watson",
            role: "Full Stack Developer",
            experience: "5+ years",
            location: "Boston, MA",
            skills: ["React", "Node.js", "Python", "MongoDB"],
            rating: 4.8,
            projects: 19,
            avatar: "👩‍💻"
        },
        {
            id: 6,
            name: "Alex Thompson",
            role: "DevOps Engineer",
            experience: "9+ years",
            location: "Denver, CO",
            skills: ["Docker", "Jenkins", "Ansible", "Linux"],
            rating: 4.9,
            projects: 28,
            avatar: "👨‍💻"
        }
    ];
    const categories = [
        "All",
        "AI & Machine Learning",
        "Cloud & DevOps",
        "Cybersecurity",
        "Data Science",
        "Full Stack Development",
        "Mobile Development",
        "UI/UX Design"
    ];
    return (<div className="min-h-screen bg-background">
      <SEOHead title="Talent Directory - Zion Tech Group" description="Connect with top technology professionals and experts in AI, cloud, cybersecurity, and more." keywords="talent directory, technology professionals, AI engineers, cloud architects, cybersecurity specialists" canonical="https://ziontechgroup.com/talent-directory"/>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Top Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              {" "}Talent
            </span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-violet-100 max-w-4xl mx-auto leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Connect with world-class technology professionals and experts in AI, cloud computing, 
            cybersecurity, and more. Find the perfect talent for your next project.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
              <input type="text" placeholder="Search for talent, skills, or expertise..." className="w-full px-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 backdrop-blur-sm"/>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-600 font-medium">Filter by:</span>
            {categories.map((category, index) => (<button key={category} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${index === 0
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category}
              </button>))}
          </div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover top-tier technology professionals ready to contribute to your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talents.map((talent, index) => (<motion.div key={talent.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{talent.avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{talent.name}</h3>
                      <p className="text-sm text-gray-600">{talent.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current"/>
                    <span className="text-sm text-gray-600">{talent.rating}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4"/>
                    <span>{talent.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4"/>
                    <span>{talent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4"/>
                    <span>{talent.projects} projects completed</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, skillIndex) => (<span key={skillIndex} className="px-3 py-1 bg-violet-100 text-violet-700 text-xs rounded-full font-medium">
                        {skill}
                      </span>))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Connect with {talent.name.split(' ')[0]}
                </button>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for Top Talent?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need a single expert or a complete team, we can connect you with the 
            perfect technology professionals for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Post a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors">
              Browse All Talent
            </button>
          </div>
        </div>
      </section>
    </div>);
};
export default TalentDirectory;
