"use client";
import { useState } from 'react';

export default function OSDeployPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate deployment
    setTimeout(() => {
      setLoading(false);
      window.alert('Deployment initiated! Check your instances page for updates.');
    }, 3000);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🚀 Deploy Zion OS Instance</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Create a new digital economy with AI-powered automation and blockchain integration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Basic Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Instance Name</label>
                <input 
                  name="name" 
                  className="input-field" 
                  placeholder="My Digital Economy"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Description</label>
                <textarea 
                  name="description" 
                  className="input-field" 
                  rows={3}
                  placeholder="Describe your digital economy's purpose and goals"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Vertical</label>
                  <select name="vertical" className="select-field">
                    <option value="GENERAL">General</option>
                    <option value="HEALTH">Healthcare</option>
                    <option value="EDUCATION">Education</option>
                    <option value="LAW">Legal</option>
                    <option value="GOV">Government</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Region</label>
                  <input 
                    name="region" 
                    className="input-field" 
                    placeholder="North America"
                  />
                </div>
              </div>
            </div>
          </div>

<div className="text-center">
            <button 
              type="submit"
              disabled={loading}
              className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Deploying..." : "🚀 Deploy Instance"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
