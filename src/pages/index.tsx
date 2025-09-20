import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Zion Tech Group - AI & Technology Solutions" description="Leading provider of AI and technology solutions" />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Leading provider of AI and technology solutions, empowering businesses with cutting-edge technology to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors"
              >
                Our Services
              </a>
              <a 
                href="/contact" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}