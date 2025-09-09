import React from 'react';
import { SEO } from "@/components/SEO";
import { Search, MapPin, Briefcase, Star } from 'lucide-react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { GradientHeading } from '@/components/GradientHeading';

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

    return (
        <>
            <SEO 
                title="Talent Directory - Zion Tech Group" 
                description="Connect with top technology professionals and experts in AI, cloud, cybersecurity, and more." 
                keywords="talent directory, technology professionals, AI engineers, cloud architects, cybersecurity specialists" 
                canonical="https://ziontechgroup.com/talent-directory"
            />
            <Header />
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <GradientHeading>Tech Talent Directory</GradientHeading>
                        <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
                            Discover exceptional developers, designers, and tech professionals ready to bring your projects to life.
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="mb-12">
                        <div className="bg-zion-blue-light rounded-lg p-6 border border-zion-blue-lighter">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="Search for skills, roles, or names..."
                                        className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-lighter rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                                    />
                                </div>
                                <select className="px-4 py-3 bg-zion-blue-dark border border-zion-blue-lighter rounded-lg text-white focus:border-zion-cyan focus:outline-none">
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Talent Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {talents.map((talent) => (
                            <div key={talent.id} className="bg-zion-blue-light border border-zion-blue-lighter rounded-lg p-6 hover:border-zion-cyan transition-colors">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className="text-3xl mr-3">{talent.avatar}</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{talent.name}</h3>
                                            <p className="text-zion-cyan text-sm">{talent.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                        <span className="text-white text-sm">{talent.rating}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center text-zion-slate-light text-sm">
                                        <Briefcase className="h-4 w-4 mr-2" />
                                        {talent.experience} experience
                                    </div>
                                    <div className="flex items-center text-zion-slate-light text-sm">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        {talent.location}
                                    </div>
                                    <div className="text-zion-slate-light text-sm">
                                        {talent.projects} projects completed
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-white font-medium mb-2">Skills:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {talent.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-zion-blue-dark text-zion-cyan text-xs rounded border border-zion-blue-lighter"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-zion-blue-dark border border-zion-blue-lighter rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Looking for Talent?
                            </h2>
                            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                                Our talent directory connects you with verified professionals across all technology domains. 
                                Find the perfect match for your project needs.
                            </p>
                            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                Post a Job
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TalentDirectory;
