import React from 'react';
import { SEO } from '@/components/SEO';

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useWhitelabel } from "@/context/WhitelabelContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();
  
  return (
    <>
      <SEO 
        title="Zion Hire AI - Zion Tech Group" 
        description="AI-powered hiring platform to find the perfect tech talent for your projects."
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24"
          style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                  {isWhitelabel ? `${brandName} Recruiting Assistant` : "Zion Hire AI"}
                </h1>
                <p className="text-lg text-zion-slate-light max-w-[600px]">
                  Empower your team with AI-driven talent acquisition. Streamline your hiring process, 
                  improve candidate matches, and enhance the applicant experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-zion-purple hover:bg-zion-purple-light text-white"
                    asChild
                  >
                    <Link href={isAuthenticated ? "/enterprise/admin" : "/login"}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/enterprise/demo">
                      Request Demo
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>
                <img
                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI"
                  alt="Zion Hire AI Dashboard"
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our Zion Hire AI platform is currently under development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-zion-blue-dark py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
              Join leading companies using Zion Hire AI to find better talent faster, 
              reduce time-to-hire, and improve candidate experience.
            </p>
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light text-white"
              asChild
            >
              <Link href="/enterprise/demo">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ZionHireAI;