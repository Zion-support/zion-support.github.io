import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Search, MapPin, Briefcase, Star, GraduationCap } from 'lucide-react';

export default function TalentDirectory() {
  const talents = [
    { id: 1, name: 'Sarah Chen', role: 'Senior AI Engineer', experience: '8+ years', location: 'San Francisco, CA', skills: ['Machine Learning', 'Python', 'TensorFlow', 'Computer Vision'], rating: 4.9, projects: 24, avatar: '👩‍💻' },
    { id: 2, name: 'Marcus Rodriguez', role: 'Cloud Architect', experience: '10+ years', location: 'Austin, TX', skills: ['AWS', 'Kubernetes', 'Terraform', 'DevOps'], rating: 4.8, projects: 31, avatar: '👨‍💻' },
  ];

  return (
    <>
      <SEO title="Tech Talent Directory - Zion Tech Group" description="Browse our curated directory of top tech talent and professionals." canonical="https://ziontechgroup.com/talent" />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Tech Talent Directory</h1>
            <p className="text-xl text-zion-slate-light mt-4 max-w-3xl mx-auto">
              Discover exceptional developers, designers, and tech professionals ready to bring your projects to life.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-6 border border-zion-blue-lighter mb-8">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for talent, skills, or expertise..."
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {talents.map((t) => (
                <div key={t.id} className="bg-white/5 border border-white/10 rounded-xl p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{t.avatar}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{t.name}</h3>
                        <p className="text-sm text-zion-slate-light">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm text-zion-slate-light">{t.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-zion-slate-light text-sm">
                    <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /><span>{t.experience} experience</span></div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>{t.location}</span></div>
                    <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /><span>{t.projects} projects completed</span></div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.skills.map((s) => (
                      <span key={s} className="px-2 py-1 bg-zion-blue/40 text-zion-slate-light rounded text-xs">{s}</span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium">
                    Connect with {t.name.split(' ')[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
