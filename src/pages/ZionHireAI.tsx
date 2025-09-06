

export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();
  return (

    <>;

      <SEO
        title='Zion Hire AI - White-labeled AI Recruiting Assistant'
        description='Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.'
=======
      />;
      <Header />;
      <main className='flex-1'>;

                  background_image: `linear - gradient (to bottom right, ${primary_color}, rgba (25, 33, 52, 1))`,
                }
              : {}
          }
        >;
          <div className='container mx - auto px - 4 md:px - 6'>;
            <div className='grid gap - 6 md:grid - cols - 2 items - center'>;
              <div className='space - y-4'>;
                <h1 className='text - 3xl md:text - 5xl font - bold tracking - tighter text - white'>;
                  {is_whitelabel;
                    ? `${brand_name} Recruiting Assistant`;
                    : 'Zion Hire AI'}
                </h1>;
                <p className='text - lg text - zion - slate - light max - w-[600px]'>;
                  Empower your team with AI - driven talent acquisition.;
                  Streamline your hiring process, improve candidate matches, and;
                  enhance the applicant experience.;
                </p>;
                <div className='flex flex - col sm:flex - row gap - 3 pt - 4'>;
                  <Button;
                    size='lg';
                    className='bg - zion - purple hover:bg - zion - purple - light text - white';
                    as_child;
                  >;
                    <Link;
                      href={is_authenticated ? '/enterprise / admin' : '/login'}
                    >;
                      Get Started <ArrowRight className='ml - 2 h - 4 w - 4' />;
                    </Link>;
                  </Button>;
                  <Button;
                    variant='outline';
                    size='lg';
                    className='bg - transparent border - white text - white hover:bg - white / 10';
                    as_child;
                  >;
                    <Link href='/enterprise / demo'>Request Demo</Link>;

                  </Button>;
                </div>;
              </div>;
              <div className='relative hidden md:block'>;

import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { useWhitelabel } from "@/context/WhitelabelContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth",
import Link from "next/link",
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel(),
  const { isAuthenticated } = useAuth(),
  
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { useWhitelabel } from "@/context/WhitelabelContext",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth",
import Link from "next/link",
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel(),
  const { isAuthenticated } = useAuth(),
  


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return (
    <>
      <SEO
        title="Zion Hire AI - White-labeled AI Recruiting Assistant"
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."

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
                  loading="lazy"

              </div>
            </div>

        <section className="bg-zion-blue-dark py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
              Join leading companies using Zion Hire AI to find better talent faster,
              reduce time-to-hire, and improve candidate experience.

            </p>
            <Button
              size="lg"
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild
            >
