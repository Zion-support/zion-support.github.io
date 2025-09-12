import React from 'react';
import { SEO } from '@/components/SEO';

const TalentDirectory: React.FC = () => {
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

  return (
    <>
      <SEO 
        title="Talent Directory - Zion Tech Group" 
        description="Discover top AI experts, developers, and tech specialists in our comprehensive talent directory."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Talent Directory
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Connect with verified AI experts, developers, and tech specialists from around the world.
              Find the perfect talent for your next project.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our comprehensive talent directory is currently under development. 
                We're building a platform to connect you with the best tech talent worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors">
                  Get Notified
                </button>
                <button className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDirectory;
