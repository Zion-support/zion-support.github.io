import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { latestInsights } from '../content/insights';

export default function Insights(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      <Header />
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Insights</h1>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Research, product updates, and practical guides from the Zion Tech Group team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestInsights.map((item) => (
            <article key={item.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-zion-cyan mb-2">{item.category}</div>
                <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
                <p className="text-zion-slate-light mb-4">{item.summary}</p>
                <div className="flex items-center justify-between text-sm text-zion-slate">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <span>{item.readMinutes} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">Talk to our team</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

