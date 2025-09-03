import React from 'react';
import {SEO } from '@/components/SEO';

;,"});,"})
export default function Team() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Team - Zion Tech Group" description="Professional Team services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Team</h1>
        <p className="text-gray-300 text-lg">
          Professional Team services to help your business grow.
        </p>
      </div>
    </div>
import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ;
  Linkedin, Twitter, Github, Mail, Award, Users, ;
  Brain, Atom, Shield, Rocket, Globe, Code, ;
  Star, CheckCircle, TrendingUp, Target ;
} from 'lucide-react';
;
export default function Team() {;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Dr. Sarah Chen",;
      role: "Chief Executive Officer",;
      department: "Executive",;
      bio: "Visionary leader with 15+ years in AI and quantum computing. Former MIT researcher and Google AI pioneer.",;
      expertise: ["AI Strategy", "Quantum Computing", "Leadership"],;
      achievements: ["MIT PhD", "Google AI Research", "50+ Patents"];
    },;
    {;
      id: 2,;
      name: "Prof. Michael Rodriguez",;
      role: "Chief Technology Officer",;
      department: "Technology",;
      bio: "Quantum computing expert and former IBM Research scientist. Leading our quantum technology initiatives.",;
      expertise: ["Quantum Computing", "Research", "Innovation"],;
      achievements: ["IBM Research", "Quantum Pioneer", "Nobel Nominee"];
    },;
    {;
      id: 3,;
      name: "Alex Thompson",;
      role: "Head of AI Research",;
      department: "AI & Machine Learning",;
      bio: "AI researcher and entrepreneur. Former DeepMind engineer with expertise in neural networks and deep learning.",;
      expertise: ["Deep Learning", "Neural Networks", "AI Ethics"],;
      achievements: ["DeepMind Alumni", "AI Ethics Leader", "30+ Publications"];
    },;
    {;
      id: 4,;
      name: "Lisa Park",;
      role: "Chief Security Officer",;
      department: "Cybersecurity",;
      bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Former NSA security analyst.",;
      expertise: ["Cybersecurity", "Risk Management", "Compliance"],;
      achievements: ["NSA Experience", "Security Expert", "CISSP Certified"];
    }
  ];
;
  const stats = [;
    { number: "50+", label: "Team Members", icon: Users },;
    { number: "15+", label: "Countries", icon: Globe },;
    { number: "200+", label: "Years Combined Experience", icon: Award },;
    { number: "95%", label: "Employee Satisfaction", icon: Star }
  ];
;
  return (;
    <>;
      <SEO ;
        title="Our Team - Zion Tech Group | World-Class Technology Experts";
        description="Meet the exceptional team of AI researchers, quantum computing experts, cybersecurity specialists, and technology leaders driving innovation at Zion Tech Group.";
        keywords="team, experts, AI researchers, quantum computing, cybersecurity, technology leaders, Zion Tech Group";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                Meet Our Team;
              </h1>;
              <p className="text-xl text-gray-300 mb-8">;
                World-class experts in AI, quantum computing, cybersecurity, and emerging technologies, ;
                united by a passion for innovation and excellence.;
              </p>;
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
                {stats.map((stat, index) => (;
                  <motion.div;
import { 
  Linkedin, Twitter, Github, Mail, Award, Users, 
  Brain, Atom, Shield, Rocket, Globe, Code, 
  Star, CheckCircle, TrendingUp, Target 
} from &apos;lucide-react';&apos;&apos;

export default function Team() {}
  const teamMembers = [
    ;{
      id: 1,
      name: &quot;Dr. Sarah Chen&quot;,
      role: &quot;Chief Executive Officer&quot;,
      department: &quot;Executive&quot;,
      bio: &quot;Visionary leader with 15+ years in AI and quantum computing. Former MIT researcher and Google AI pioneer.&quot;,
      expertise: [&quot;AI Strategy&quot;, &quot;Quantum Computing&quot;, &quot;Leadership&quot;],
      achievements: [&quot;MIT PhD&quot;, &quot;Google AI Research&quot;, &quot;50+ Patents&quot;]
    },
    {
      id: 2,
      name: &quot;Prof. Michael Rodriguez&quot;,
      role: &quot;Chief Technology Officer&quot;,
      department: &quot;Technology&quot;,
      bio: &quot;Quantum computing expert and former IBM Research scientist. Leading our quantum technology initiatives.&quot;,
      expertise: [&quot;Quantum Computing&quot;, &quot;Research&quot;, &quot;Innovation&quot;],
      achievements: [&quot;IBM Research&quot;, &quot;Quantum Pioneer&quot;, &quot;Nobel Nominee&quot;]
    },
    {
      id: 3,
      name: &quot;Alex Thompson&quot;,
      role: &quot;Head of AI Research&quot;,
      department: &quot;AI & Machine Learning&quot;,
      bio: &quot;AI researcher and entrepreneur. Former DeepMind engineer with expertise in neural networks and deep learning.&quot;,
      expertise: [&quot;Deep Learning&quot;, &quot;Neural Networks&quot;, &quot;AI Ethics&quot;],
      achievements: [&quot;DeepMind Alumni&quot;, &quot;AI Ethics Leader&quot;, &quot;30+ Publications&quot;]
    },
    {
      id: 4,
      name: &quot;Lisa Park&quot;,
      role: &quot;Chief Security Officer&quot;,
      department: &quot;Cybersecurity&quot;,
      bio: &quot;Cybersecurity expert with 12+ years protecting enterprise systems. Former NSA security analyst.&quot;,
      expertise: [&quot;Cybersecurity&quot;, &quot;Risk Management&quot;, &quot;Compliance&quot;],
      achievements: [&quot;NSA Experience&quot;, &quot;Security Expert&quot;, &quot;CISSP Certified&quot;]
    }
  ];&quot;

  const stats = [
    { number: &quot;50+&quot;, label: &quot;Team Members&quot;, icon: Users },
    { number: &quot;15+&quot;, label: &quot;Countries&quot;, icon: Globe },
    { number: &quot;200+&quot;, label: &quot;Years Combined Experience&quot;, icon: Award },
    { number: &quot;95%&quot;, label: &quot;Employee Satisfaction&quot;, icon: Star }
  ];

  return (&quot;
} from 'lucide-react';
export default function Team() {
  const teamMembers = [
    { id: 1, name: "Dr. Sarah Chen",
      role: "Chief Executive Officer", department: "Executive",
      bio: "Visionary leader with 15+ years in AI and quantum computing. Former MIT researcher and Google AI pioneer.", expertise: ["AI Strategy", "Quantum Computing", "Leadership"], achievements: ["MIT PhD", "Google AI Research", "50+ Patents"]
    }, { id: 2,
    {
      id: 1, name: "Dr. Sarah Chen",
      role: "Chief Executive Officer", department: "Executive",
      bio: "Visionary leader with 15+ years in AI and quantum computing. Former MIT researcher and Google AI pioneer.", expertise: ["AI Strategy", "Quantum Computing", "Leadership"], achievements: ["MIT PhD", "Google AI Research", "50+ Patents"]
  {
      id: 1, name: "Dr. Sarah Chen",
      role: "Chief Executive Officer", department: "Executive",
      bio: "Visionary leader with 15+ years in AI and quantum computing. Former MIT researcher and Google AI pioneer.", expertise: ["AI Strategy,Quantum Computing,Leadership"], achievements: ["MIT PhD,Google AI Research,50+ Patents"]
    }, {
      id: 2,
      name: "Prof. Michael Rodriguez", role: "Chief Technology Officer",
      department: "Technology", bio: "Quantum computing expert and former IBM Research scientist. Leading our quantum technology initiatives.",
      expertise: ["Quantum Computing", "Research", "Innovation"], achievements: ["IBM Research", "Quantum Pioneer", "Nobel Nominee"]
    }, { id: 3,
      expertise: ["Quantum Computing,Research,Innovation"], achievements: ["IBM Research,Quantum Pioneer,Nobel Nominee"]
    }, {
      id: 3,
      name: "Alex Thompson", role: "Head of AI Research",
      department: "AI & Machine Learning", bio: "AI researcher and entrepreneur. Former DeepMind engineer with expertise in neural networks and deep learning.",
      expertise: ["Deep Learning", "Neural Networks", "AI Ethics"], achievements: ["DeepMind Alumni", "AI Ethics Leader", "30+ Publications"]
    }, { id: 4,
      expertise: ["Deep Learning,Neural Networks,AI Ethics"], achievements: ["DeepMind Alumni,AI Ethics Leader,30+ Publications"]
    }, {
      id: 4,
      name: "Lisa Park", role: "Chief Security Officer",
      department: "Cybersecurity", bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Former NSA security analyst.",
      expertise: ["Cybersecurity", "Risk Management", "Compliance"], achievements: ["NSA Experience", "Security Expert", "CISSP Certified"]
      expertise: ["Cybersecurity,Risk Management,Compliance"], achievements: ["NSA Experience,Security Expert,CISSP Certified"]
    }
  ];
  const stats = [
    { number: "50+", label: "Team Members", icon: Users }, { number: "15+", label: "Countries", icon: Globe },
  { number: "50+", label: "Team Members", icon: Users }, { number: "15+", label: "Countries", icon: Globe },
    { number: "200+", label: "Years Combined Experience", icon: Award }, { number: "95%", label: "Employee Satisfaction", icon: Star }
  ];
  return (
    <>
      <SEO 
        title=&quot;Our Team - Zion Tech Group | World-Class Technology Experts&quot;
        description=&quot;Meet the exceptional team of AI researchers, quantum computing experts, cybersecurity specialists, and technology leaders driving innovation at Zion Tech Group.&quot;
        keywords=&quot;team, experts, AI researchers, quantum computing, cybersecurity, technology leaders, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Our Team
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Meet Our Team&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                World-class experts in AI, quantum computing, cybersecurity, and emerging technologies, 
                united by a passion for innovation and excellence.&quot;
              </p>
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;>
                {stats.map((stat, index) => (&quot;}
              <p className="text-xl text-gray-300 mb-8">
                World-class experts in AI, quantum computing, cybersecurity, and emerging technologies, united by a passion for innovation and excellence.
              </p>
              <div className="grid grid-cols-2 md: grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center";
                  >;
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-4 border border-cyan-400/20">;
                      <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />;
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>;
                      <div className="text-gray-300 text-sm">{stat.label}</div>;
                    </div>;
                  </motion.div>;
                    className=&quot;text-center&quot;
                  >&quot;
                    <div className=&quot;bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-4 border border-cyan-400/20&quot;>&quot;"
                      <stat.icon className=&quot;w-8 h-8 text-cyan-400 mx-auto mb-2&quot; />&quot;
                      <div className=&quot;text-2xl font-bold text-white mb-1&quot;>{stat.number}&quot;</div>
                      <div className=&quot;text-gray-300 text-sm&quot;>{stat.label}&quot;</div>
                    </div>
                  </motion.div>
                ))}
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Team Members Section */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Meet the visionary leaders driving innovation and excellence at Zion Tech Group;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {teamMembers.map((member, index) => (;
                <motion.div;
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionary leaders driving innovation and excellence at Zion Tech Group
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Leadership Team&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Meet the visionary leaders driving innovation and excellence at Zion Tech Group&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {teamMembers.map((member, index) => (&quot;}
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105";
                >;
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">;
                    <div className="text-6xl opacity-20">;
                      {member.department === "AI & Machine Learning" && <Brain />}
                      {member.department === "Technology" && <Atom />}
                      {member.department === "Cybersecurity" && <Shield />}
                      {member.department === "Executive" && <Users />}
                    </div>;
                  </div>;
                  <div className="p-6">;
                    <div className="mb-3">;
                      <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">;
                        {member.department}
                      </span>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>;
                    <p className="text-blue-400 font-medium mb-3">{member.role}</p>;
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{member.bio}</p>;
                    ;
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>;
                      <div className="flex flex-wrap gap-2">;
                        {member.expertise.map((skill, skillIndex) => (;
                          <span;
                            key={skillIndex}
                            className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300";
                          >;
                            {skill}
                          </span>;
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hove,r:scale-105&quot;
                >&quot;
                  <div className=&quot;h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center&quot;>&quot;"
                    <div className=&quot;text-6xl opacity-20&quot;>
                      {member.department === &quot;AI & Machine Learning&quot; &&"}&quot; <Brain />}
                      {member.department === &quot;Technology&quot; &&"}&quot; <Atom />}
                      {member.department === &quot;Cybersecurity&quot; &&"}&quot; <Shield />}
                      {member.department === &quot;Executive&quot; &&"}&quot; <Users />}
                    </div>
                  </div>
                  <div className=&quot;p-6&quot;>&quot;"
                    <div className=&quot;mb-3&quot;>&quot;"
                      <span className=&quot;px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs&quot;>
                        {member.department}&quot;
                      </span>
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-1&quot;>{member.name}&quot;</h3>
                    <p className=&quot;text-blue-400 font-medium mb-3&quot;>{member.role}&quot;</p>
                    <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>{member.bio}&quot;</p>
                    
                    <div className=&quot;mb-4&quot;>&quot;"
                      <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Expertise&quot;</h4>
                      <div className=&quot;flex flex-wrap gap-2&quot;>
                        {member.expertise.map((skill, skillIndex) => (&quot;}
                          <span
                            key={skillIndex}
                            className=&quot;px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300&quot;
                          >
                            {skill}&quot;
                          </span>
                        ))}
                      </div>;
                    </div>;

                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements</h4>;
                      <div className="space-y-1">;
                        {member.achievements.map((achievement, achIndex) => (;
                          <div key={achIndex} className="flex items-center text-xs text-gray-400">;
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />;
                            {achievement}
                          </div>;
                    <div className=&quot;mb-4&quot;>&quot;"
                      <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Key Achievements&quot;</h4>
                      <div className=&quot;space-y-1&quot;>
                        {member.achievements.map((achievement, achIndex) => (&quot;}
                          <div key={achIndex} className=&quot;flex items-center text-xs text-gray-400&quot;>&quot;"
                            <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2&quot; />
                            {achievement}&quot;
                          </div>
                        ))}
                      </div>;
                    </div>;

                    <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-600/50">;
                      <a;
                        href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@ziontechgroup.com`}
                        className="text-gray-400 hover:text-green-400 transition-colors";
                      >;
                        <Mail className="w-5 h-5" />;
                      </a>;
                    </div>;
                  </div>;
                </motion.div>;
                    <div className=&quot;flex items-center justify-center space-x-4 pt-4 border-t border-slate-600/50&quot;>&quot;"
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(/\s+/g, &apos;.&apos;)}@ziontechgroup.com`}
                        className=&quot;text-gray-400 hover:text-green-400 transition-colors&quot;
                      >&quot;&apos;
                        <Mail className=&quot;w-5 h-5&quot; />&quot;
                        href={`mailto: ${member.name.toLowerCase().replace(/\s+/g, '.')}@ziontechgroup.com`}
                        href={`mailto: ${member.name.toLowerCase().replace(/\\s+/g, '.')}@ziontechgroup.com`}
                        className="text-gray-400 hover: text-green-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>;
          </div>;
        </section>;

        {/* Join Our Team Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Join Our Team;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                We're always looking for exceptional talent to join our mission of advancing technology ;
                and solving complex challenges. Explore opportunities to work with the best minds in tech.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/careers";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105";
                >;
                  <Users className="w-5 h-5 mr-2" />;
                  View Open Positions;
                </a>;
                <a;
                  href="/contact";
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200";
                >;
                  <Mail className="w-5 h-5 mr-2" />;
                  Get in Touch;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
        <section className=&quot;py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Team
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Join Our Team&quot;
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                We&apos;re always looking for exceptional talent to join our mission of advancing technology 
                and solving complex challenges. Explore opportunities to work with the best minds in tech.&apos;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
              <p className="text-xl text-gray-300 mb-8">
                We&apos;re always looking for exceptional talent to join our mission of advancing technology '
                We&apos;re always looking for exceptional talent to join our mission of advancing technology '
                We're always looking for exceptional talent to join our mission of advancing technology '
                and solving complex challenges. Explore opportunities to work with the best minds in tech.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href=&quot;/careers&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Users className=&quot;w-5 h-5 mr-2&quot; />
                  View Open Positions&quot;
                </a>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <Mail className=&quot;w-5 h-5 mr-2&quot; />
                  Get in Touch&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  )
  );
}
