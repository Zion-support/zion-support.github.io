import React from 'react'

import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { ContactSection } from "@/components/ContactSection";
import Link from "next/link";
export default function About() {
  const team = null;
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            We are a leading technology company specializing in AI, cybersecurity, 
            and cloud infrastructure solutions that transform businesses and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              enhance security, and unlock new possibilities in the digital age.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe in the transformative power of technology and are committed to 
              delivering solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To be the world's most trusted technology partner, known for innovation, 
              reliability, and exceptional service delivery.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a future where technology seamlessly integrates with business 
              operations to create unprecedented value and opportunities.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              title="Expert Team" 
              description="Our team consists of industry-leading experts with decades of combined experience in cutting-edge technologies." 
            />
            <Card 
              title="Proven Track Record" 
              description="We have successfully delivered hundreds of projects for clients across various industries and sectors." 
            />
            <Card 
              title="24/7 Support" 
              description="Our dedicated support team is available around the clock to ensure your systems run smoothly." 
            />
            <Card 
              title="Innovation Focus" 
              description="We stay at the forefront of technology trends to deliver the most advanced solutions." 
            />
            <Card 
              title="Security First" 
              description="Security is embedded in everything we do, ensuring your data and systems are always protected." 
            />
            <Card 
              title="Scalable Solutions" 
              description="Our solutions are designed to grow with your business, adapting to your changing needs." 
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-300">We strive for excellence in everything we do</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-300">We work closely with our clients as partners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-300">We embrace new ideas and technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-300">We maintain the highest ethical standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
