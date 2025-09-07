class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;

    return this.props.children;
import React from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { useWhitelabel } from '@/context/WhitelabelContext';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
  ArrowRight,;
  Briefcase,;
  PenTool,;
  BarChart3,;
  Users,;
  Shield,;
  Globe,;
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
export default function ZionHireAI() {;
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();
  return (

    <>;

      <SEO
        title='Zion Hire AI - White-labeled AI Recruiting Assistant'
        description='Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.'
      />;
      <Header />;
      <main className='flex-1'>;

                  background_image: `linear - gradient (to bottom right, ${primary_color}, rgba (25, 33, 52, 1))`,
              : {}
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
                    <Link;
                      href={is_authenticated ? '/enterprise / admin' : '/login'}
                      Get Started <ArrowRight className='ml - 2 h - 4 w - 4' />;
                    </Link>;
                  </Button>;
                    variant='outline';
                    className='bg - transparent border - white text - white hover:bg - white / 10';
                    <Link href='/enterprise / demo'>Request Demo</Link>;

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

    <>
        title="Zion Hire AI - White-labeled AI Recruiting Assistant" 
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className='relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24'
          style={
            primaryColor
              ? {
                  backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))`
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
                    <Link href={isAuthenticated ? "/enterprise/admin" : "/login"}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    <Link href="/enterprise/demo">
                      Request Demo
                </div>
              <div className="relative hidden md:block">
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>
                <img
                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI"
                  alt="Zion Hire AI Dashboard"
                  className="relative z-10 rounded-lg shadow-xl"
                  loading="lazy"

        </section>
        {/* Features Section */}

        <section className="py-16 bg-background">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Powerful AI Hiring Tools</h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                Our comprehensive suite of AI-powered hiring tools help you streamline your recruiting process,
                find better candidates, and make data-driven decisions.

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card border border-border">

                <CardHeader>
                  <Briefcase className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Job Description Generator</CardTitle>
                  <CardDescription>
                    Create compelling job descriptions with AI assistance to attract top talent.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Automated skill requirements</span>
                    </li>
                      <span>Optimized for inclusivity</span>
                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Template
                      </span>                      <span>Industry-specific templates</span>                    <li className="flex items-center">

                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Template</span>
                      <span>Industry-specific templates</span>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>

                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Resume Screener</CardTitle>
                    Automatically evaluate and score candidate resumes against job requirements.
                      <span>Identify skill matches</span>
                      <span>Experience verification</span>

                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>

                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable scoring criteria</span>
              <Card className='bg-card border border-border'>                <CardHeader>

                  <Users className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Candidate Matchmaker</CardTitle>
                    Find the best candidates for each position with AI-powered matching.
                      <span>Relevancy scoring</span>
                      <span>Culture fit prediction</span>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>                    <li className="flex items-center">

                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Code</span>
                      <span>Simple JavaScript snippet</span>

                  <BarChart3 className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Advanced Analytics</CardTitle>
                    Track recruiting metrics and optimize your hiring process with data.
                      <span>Time-to-hire tracking</span>
                      <span>Candidate funnel metrics</span>
                      </span>                      <span>Cost per hire analysis</span>                    <li className="flex items-center">

                      <span>Cost per hire analysis</span>

                  <Shield className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>White-Labeled Platform</CardTitle>
                    Customize the platform with your company's branding and
                    identity.
                      <span>Custom logo and colors</span>
                      <span>Co-branded or white-labeled</span>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>

                  <Shield className="h-10 w-10 text-zion-purple mb-2" />
                    Customize the platform with your company's branding and identity.

                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Access</span>
                      <span>Team roles & permissions</span>
        {/* CTA Section */}

        <section className="bg-zion-blue-dark py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
              Join leading companies using Zion Hire AI to find better talent faster, 
              reduce time-to-hire, and improve candidate experience.

              className="bg-zion-purple hover: bg-zion-purple-light text-white"

                Schedule a Demo
      </main>;
    </>;
  );
};
      </main>
    </>

                  alt="Zion Hire AI Dashboard";
                  className="relative z-10 rounded-lg shadow-xl";
                  loading="lazy";
        </section>;
        <section className="py-16 bg-background">;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold tracking-tight">Powerful AI Hiring Tools</h2>;
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">;
                Our comprehensive suite of AI-powered hiring tools help you streamline your recruiting process;
                find better candidates, and make data-driven decisions.;
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">;
              <Card className="bg-card border border-border">;
                <CardHeader>;
                  <Briefcase className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Job Description Generator</CardTitle>;
                  <CardDescription>;
                    Create compelling job descriptions with AI assistance to attract top talent.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>;
                      <span>Automated skill requirements</span>;
                    </li>;
                      <span>Optimized for inclusivity</span>;
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Template</span>;
                      <span>Industry-specific templates</span>;
                  </ul>;
                </CardContent>;
              </Card>;
                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Resume Screener</CardTitle>;
                    Automatically evaluate and score candidate resumes against job requirements.;
                      <span>Identify skill matches</span>;
                      <span>Experience verification</span>;
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>;
                      <span>Customizable scoring criteria</span>;
                  <Users className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Candidate Matchmaker</CardTitle>;
                    Find the best candidates for each position with AI-powered matching.;
                      <span>Relevancy scoring</span>;
                      <span>Culture fit prediction</span>;
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>;
                      <span>Performance tracking</span>;
                  <Globe className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Embeddable Widget</CardTitle>;
                    Add an AI assistant to your careers page to answer applicant questions.;
                      <span>Instant FAQ responses</span>;
                      <span>Customizable branding</span>;
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Code</span>;
                      <span>Simple JavaScript snippet</span>;
                  <BarChart3 className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Advanced Analytics</CardTitle>;
                    Track recruiting metrics and optimize your hiring process with data.;
                      <span>Time-to-hire tracking</span>;
                      <span>Candidate funnel metrics</span>;
                      <span>Cost per hire analysis</span>;
                  <Shield className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>White-Labeled Platform</CardTitle>;
                    Customize the platform with your company's branding and identity.;
                      <span>Custom logo and colors</span>;
                      <span>Co-branded or white-labeled</span>;
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Access</span>;
                      <span>Team roles & permissions</span>;
        <section className="bg-zion-blue-dark py-16">;
          <div className="container mx-auto px-4 md:px-6 text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">;
              Join leading companies using Zion Hire AI to find better talent faster;
              reduce time-to-hire, and improve candidate experience.;
              size='lg'
              className='bg-zion-purple hover:bg-zion-purple-light text-white'
              asChild>;
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>;
              <Link href="/enterprise/demo">;
                <div className='absolute -top - 8 -left - 8 w - 72 h - 72 bg - zion - purple / 20 rounded - full filter blur - 3xl'></div>;
                <img;
                  src='https://placehold.co / 600x400 / 192134 / 9b87f5?text = Zion + Hire + AI';
                  alt='Zion Hire AI Dashboard';
                  className='relative z - 10 rounded - lg shadow - xl';
                  loading='lazy'                />                  src="https://placehold.co / 600x400 / 192134 / 9b87f5?text = Zion + Hire + AI";
                  className="relative z - 10 rounded - lg shadow - xl";
        <section className='py - 16 bg - background'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - 3xl font - bold tracking - tight'>;
                Powerful AI Hiring Tools;
              </h2>;
              <p className='text - muted - foreground mt - 4 max - w-3xl mx - auto'>;
                Our comprehensive suite of AI - powered hiring tools help you;
                streamline your recruiting process, find better candidates, and;
                make data - driven decisions.;
            <div className='grid gap - 6 md:grid - cols - 2 lg:grid - cols - 3'>;
              <Card className='bg - card border border - border'>;
                  <Briefcase className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Job Description Generator</CardTitle>;
                    Create compelling job descriptions with AI assistance to;
                    attract top talent.;
                  <ul className='space - y-2 text - sm'>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Automated skill requirements</span>;
                      <span > Optimized for inclusivity</span>;
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Template;
                      </span>                      <span > Industry - specific templates</span>                    <li className="flex items - center">;
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Template</span>;
                      <span > Industry - specific templates</span>;
                  <PenTool className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Resume Screener</CardTitle>;
                    Automatically evaluate and score candidate resumes against;
                    job requirements.;
                      <span > Identify skill matches</span>;
                      <span > Experience verification</span>;
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Custom;
                      </span>                      <span > Customizable scoring criteria</span>;
                  <Users className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Candidate Matchmaker</CardTitle>;
                    Find the best candidates for each position with AI - powered;
                    matching.;
                      <span > Relevancy scoring</span>;
                      <span > Culture fit prediction</span>;
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Data;
                      </span>                      <span > Performance tracking</span>;
                  <Globe className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Embeddable Widget</CardTitle>;
                    Add an AI assistant to your careers page to answer applicant;
                    questions.;
                      <span > Instant FAQ responses</span>;
                      <span > Customizable branding</span>;
                        Code;
                      </span>                      <span > Simple JavaScript snippet</span>                <CardHeader>;
                  <PenTool className="h - 10 w - 10 text - zion - purple mb - 2" />;
                  <ul className="space - y-2 text - sm">;
                    <li className="flex items - center">;
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>;
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>;
                      <span > Customizable scoring criteria</span>;
              <Card className='bg - card border border - border'>                <CardHeader>;
                  <Users className="h - 10 w - 10 text - zion - purple mb - 2" />;
                    Find the best candidates for each position with AI - powered matching.;
                      </span>                    <li className="flex items - center">;
                      <span className="bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Data</span>;
                      <span > Performance tracking</span>;
                  <Globe className="h - 10 w - 10 text - zion - purple mb - 2" />;
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Code</span>;
                      <span > Simple JavaScript snippet</span>;
                  <BarChart3 className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Advanced Analytics</CardTitle>;
                    Track recruiting metrics and optimize your hiring process;
                    with data.;
                      </span>                      <span > Time - to - hire tracking</span>;
                      <span > Candidate funnel metrics</span>;
                      </span>                      <span > Cost per hire analysis</span>                    <li className="flex items - center">;
                      <span > Cost per hire analysis</span>;
                  <Shield className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > White - Labeled Platform</CardTitle>;
                    Customize the platform with your company's branding and;
                    identity.;
                      <span > Custom logo and colors</span>;
                      <span > Co - branded or white - labeled</span>;
                        Access;
                      </span>                      <span > Team roles & permissions</span>                <CardHeader>;
                  <Shield className="h - 10 w - 10 text - zion - purple mb - 2" />;
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Access</span>;
                      <span > Team roles & permissions</span>;
        <section className='bg - zion - blue - dark py - 16'>;
          <div className='container mx - auto px - 4 md:px - 6 text - center'>;
            <h2 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to transform your hiring process?;
            <p className='text - zion - slate - light max - w-2xl mx - auto mb - 8'>;
              Join leading companies using Zion Hire AI to find better talent;
              faster, reduce time - to - hire, and improve candidate experience.;
              <Link href='/enterprise / demo'>Schedule a Demo</Link>            </Button>            </p>;
              size="lg";
              className="bg-zion-purple hover: bg-zion-purple-light text-white";
              asChild;
              <Link href="/enterprise / demo">;

                Schedule a Demo;

    </>);