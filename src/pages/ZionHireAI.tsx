<<<<<<< HEAD


=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { useWhitelabel } from '@/context/WhitelabelContext'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
  ArrowRight
  Briefcase
  PenTool
  BarChart3
  Users
  Shield
  Globe
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
<<<<<<< HEAD
=======
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel()
  const { isAuthenticated } = useAuth()
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
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
import {;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======

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
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function ZionHireAI() { const { isWhitelabel, brandName, primaryColor  } = useWhitelabel(),
  const { isAuthenticated  } = useAuth(),

  
=======
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
  
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <>
      <SEO 
        title="Zion Hire AI - White-labeled AI Recruiting Assistant" 
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}


        <section 
          className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24"
          style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}


        >
          <div className = "container mx-auto px-4 md: px-6">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                  {isWhitelabel ? `${brandName} Recruiting Assistant` : "Zion Hire AI"}
                </h1>
                <p className="text-lg text-zion-slate-light max-w-[600px]">
                  Empower your team with AI-driven talent acquisition. Streamline your hiring process,
                  improve candidate matches, and enhance the applicant experience.
                </p>
                <div className = "flex flex-col sm: flex-row gap-3 pt-4">
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


                />
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}

=======


        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md: px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Powerful AI Hiring Tools</h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                Our comprehensive suite of AI-powered hiring tools help you streamline your recruiting process;
                find better candidates, and make data-driven decisions.
              </p>
            </div>
            
            <div className = "grid gap-6 md: grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card border border-border">
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Optimized for inclusivity</span>
                    </li>


                    <li className="flex items-center">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Template</span>
                      <span>Industry-specific templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              
              <Card className="bg-card border border-border">
<<<<<<< HEAD
=======

              
              <Card className="bg-card border border-border">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                <CardHeader>
                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>
                    Automatically evaluate and score candidate resumes against job requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Identify skill matches</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Experience verification</span>
                    </li>
<<<<<<< HEAD

              
              <Card className="bg-card border border-border">
                <CardHeader>
=======
<<<<<<< HEAD
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>                      <span>Customizable scoring criteria</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <Users className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>
                    Find the best candidates for each position with AI-powered
                    matching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Relevancy scoring</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Culture fit prediction</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <Globe className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Embeddable Widget</CardTitle>
                  <CardDescription>
                    Add an AI assistant to your careers page to answer applicant
                    questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Instant FAQ responses</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>
                      <span>Customizable branding</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Code
                      </span>                      <span>Simple JavaScript snippet</span>                <CardHeader>
                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>
                    Automatically evaluate and score candidate resumes against job requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Identify skill matches</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Experience verification</span>
                    </li>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable scoring criteria</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
<<<<<<< HEAD
              <Card className='bg-card border border-border'>                <CardHeader>
=======
              
              <Card className="bg-card border border-border">
                <CardHeader>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  <Users className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>
                    Find the best candidates for each position with AI-powered matching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Relevancy scoring</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Culture fit prediction</span>
                    </li>
                    <li className="flex items-center">
<<<<<<< HEAD
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>

                    </li>
                  </ul>
                </CardContent>
              </Card>




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable scoring criteria</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>


              
              <Card className="bg-card border border-border">
                <CardHeader>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <Users className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>
                    Find the best candidates for each position with AI-powered matching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Relevancy scoring</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Culture fit prediction</span>
                    </li>


                    <li className="flex items-center">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              
              <Card className="bg-card border border-border">
                <CardHeader>
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

              
              <Card className="bg-card border border-border">
                <CardHeader>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  <Globe className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Embeddable Widget</CardTitle>
                  <CardDescription>
                    Add an AI assistant to your careers page to answer applicant questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Instant FAQ responses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable branding</span>
                    </li>


                    <li className="flex items-center">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Code</span>
                      <span>Simple JavaScript snippet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              
              <Card className="bg-card border border-border">
<<<<<<< HEAD
=======

              
              <Card className="bg-card border border-border">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Track recruiting metrics and optimize your hiring process with data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Time-to-hire tracking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Candidate funnel metrics</span>
                    </li>


                    <li className="flex items-center">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      <span>Cost per hire analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>


              
              <Card className="bg-card border border-border">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                <CardHeader>
                  <Shield className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>
                    Customize the platform with your company's branding and
                    identity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>
                      <span>Custom logo and colors</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>
                      <span>Co-branded or white-labeled</span>
                    </li>

              
              <Card className="bg-card border border-border">
                <CardHeader>

                  <Shield className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>
                    Customize the platform with your company's branding and identity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Custom logo and colors</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Co-branded or white-labeled</span>
                    </li>
=======
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Access</span>
                      <span>Team roles & permissions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
<<<<<<< HEAD




            </p>
            <Button
              size='lg'
              className='bg-zion-purple hover:bg-zion-purple-light text-white'
              asChild
            >

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <section className='bg-zion-blue-dark py-16'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to transform your hiring process?
            </h2>
            <p className='text-zion-slate-light max-w-2xl mx-auto mb-8'>
              Join leading companies using Zion Hire AI to find better talent
              faster, reduce time-to-hire, and improve candidate experience.
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <section className="bg-zion-blue-dark py-16">
          <div className="container mx-auto px-4 md: px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">

              Join leading companies using Zion Hire AI to find better talent faster;

              reduce time-to-hire, and improve candidate experience.
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            </p>
            <Button 
              size="lg" 

              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild
            >
=======
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <Link href="/enterprise/demo">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </section>



      </main>
    </>
<<<<<<< HEAD

                  loading='lazy'                />                  src="https://placehold && placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI";
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { useWhitelabel } from "@/context/WhitelabelContext",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth",;
import Link from "next/link",;
export default function ZionHireAI() {;
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel(),;
  const { isAuthenticated } = useAuth(),;
  return (;
    <>;
      <SEO;
        title="Zion Hire AI - White-labeled AI Recruiting Assistant";
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.";
      />;
      <Header />;
      <main className="flex-1">;
        {/* Hero Section */}
        <section;
          className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24";
          style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}
        >;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="grid gap-6 md:grid-cols-2 items-center">;
              <div className="space-y-4">;
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">;
                  {isWhitelabel ? `${brandName} Recruiting Assistant` : "Zion Hire AI"}
                </h1>;
                <p className="text-lg text-zion-slate-light max-w-[600px]">;
                  Empower your team with AI-driven talent acquisition. Streamline your hiring process,;
                  improve candidate matches, and enhance the applicant experience.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-3 pt-4">;
                  <Button;
                    size="lg";
                    className="bg-zion-purple hover:bg-zion-purple-light text-white";
                    asChild;
                  >;
                    <Link href={isAuthenticated ? "/enterprise/admin" : "/login"}>;
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </Button>;
                  <Button;
                    variant="outline";
                    size="lg";
                    className="bg-transparent border-white text-white hover:bg-white/10";
                    asChild;
                  >;
                    <Link href="/enterprise/demo">;
                      Request Demo;
                    </Link>;
                  </Button>;
                </div>;
              </div>;
              <div className="relative hidden md:block">;
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>;
                <img;
                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  alt="Zion Hire AI Dashboard";
                  className="relative z-10 rounded-lg shadow-xl";
                  loading="lazy";
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className='py-16 bg-background'>;
          <div className='container mx-auto px-4 md:px-6'>;
            <div className='text-center mb-12'>;
              <h2 className='text-3xl font-bold tracking-tight'>;
                Powerful AI Hiring Tools;
              </h2>;
              <p className='text-muted-foreground mt-4 max-w-3xl mx-auto'>;
                Our comprehensive suite of AI-powered hiring tools help you;
                streamline your recruiting process, find better candidates, and;
                make data-driven decisions.;
            </div>;

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>;
              <Card className='bg-card border border-border'>;
                <CardHeader>;
                  <Briefcase className='h-10 w-10 text-zion-purple mb-2' />;
                  <CardTitle>Job Description Generator</CardTitle>;
                  <CardDescription>;
                    Create compelling job descriptions with AI assistance to;
                    attract top talent.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space-y-2 text-sm'>;
                    <li className='flex items-center'>;
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        AI;
                      </span>;
                      <span>Automated skill requirements</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        AI;
                      </span>;
                      <span>Optimized for inclusivity</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Template;
                      </span>                      <span>Industry-specific templates</span>                    <li className="flex items-center">;
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Template</span>;
                      <span>Industry-specific templates</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className='bg-card border border-border'>;
                <CardHeader>;
                  <PenTool className='h-10 w-10 text-zion-purple mb-2' />;
                  <CardTitle>Resume Screener</CardTitle>;
                  <CardDescription>;
                    Automatically evaluate and score candidate resumes against;
                    job requirements.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space-y-2 text-sm'>;
                    <li className='flex items-center'>;
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        AI;
                      </span>;
                      <span>Identify skill matches</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        AI;
                      </span>;
                      <span>Experience verification</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Custom;
                      </span>                      <span>Customizable scoring criteria</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className='bg-card border border-border'>;
                <CardHeader>;
                  <Users className='h-10 w-10 text-zion-purple mb-2' />;
                  <CardTitle>Candidate Matchmaker</CardTitle>;
                  <CardDescription>;
                    Find the best candidates for each position with AI-powered;
                    matching.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space-y-2 text-sm'>;
                    <li className='flex items-center'>;
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        AI;
                      </span>;
                      <span>Relevancy scoring</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        AI;
                      </span>;
                      <span>Culture fit prediction</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Data;
                      </span>                      <span>Performance tracking</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className='bg-card border border-border'>;
                <CardHeader>;
                  <Globe className='h-10 w-10 text-zion-purple mb-2' />;
                  <CardTitle>Embeddable Widget</CardTitle>;
                  <CardDescription>;
                    Add an AI assistant to your careers page to answer applicant;
                    questions.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space-y-2 text-sm'>;
                    <li className='flex items-center'>;
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        AI;
                      </span>;
                      <span>Instant FAQ responses</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Custom;
                      </span>;
                      <span>Customizable branding</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Code;
                      </span>                      <span>Simple JavaScript snippet</span>                <CardHeader>;
                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Resume Screener</CardTitle>;
                  <CardDescription>;
                    Automatically evaluate and score candidate resumes against job requirements.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">AI</span>;
                      <span>Identify skill matches</span>;
                    </li>;
                    <li className="flex items-center">;
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">AI</span>;
                      <span>Experience verification</span>;
                    </li>;
                    <li className="flex items-center">;
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Custom</span>;
                      <span>Customizable scoring criteria</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className='bg-card border border-border'>                <CardHeader>;
                  <Users className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Candidate Matchmaker</CardTitle>;
                  <CardDescription>;
                    Find the best candidates for each position with AI-powered matching.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">AI</span>;
                      <span>Relevancy scoring</span>;
                    </li>;
                    <li className="flex items-center">;
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">AI</span>;
                      <span>Culture fit prediction</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Data;
                      </span>                    <li className="flex items-center">;
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Data</span>;
                      <span>Performance tracking</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className='bg-card border border-border'>                <CardHeader>;
                  <Globe className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Embeddable Widget</CardTitle>;
                  <CardDescription>;
                    Add an AI assistant to your careers page to answer applicant questions.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">AI</span>;
                      <span>Instant FAQ responses</span>;
                    </li>;
                    <li className="flex items-center">;
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Custom</span>;
                      <span>Customizable branding</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Code;
                      </span>                    <li className="flex items-center">;
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Code</span>;
                      <span>Simple JavaScript snippet</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className='bg-card border border-border'>;
                <CardHeader>;
                  <BarChart3 className='h-10 w-10 text-zion-purple mb-2' />;
                  <CardTitle>Advanced Analytics</CardTitle>;
                  <CardDescription>;
                    Track recruiting metrics and optimize your hiring process;
                    with data.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space-y-2 text-sm'>;
                    <li className='flex items-center'>;
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Data;
                      </span>                      <span>Time-to-hire tracking</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Data;
                      </span>;
                      <span>Candidate funnel metrics</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Data;
                      </span>                      <span>Cost per hire analysis</span>                    <li className="flex items-center">;
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Data</span>;
                      <span>Cost per hire analysis</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className='bg-card border border-border'>;
                <CardHeader>;
                  <Shield className='h-10 w-10 text-zion-purple mb-2' />;
                  <CardTitle>White-Labeled Platform</CardTitle>;
                  <CardDescription>;
                    Customize the platform with your company's branding and;
                    identity.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space-y-2 text-sm'>;
                    <li className='flex items-center'>;
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Custom;
                      </span>;
                      <span>Custom logo and colors</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Custom;
                      </span>;
                      <span>Co-branded or white-labeled</span>;
                    </li>;
                    <li className='flex items-center'>;
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded'>;
                        Access;
                      </span>                      <span>Team roles & permissions</span>                <CardHeader>;
                  <Shield className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>White-Labeled Platform</CardTitle>;
                  <CardDescription>;
                    Customize the platform with your company's branding and identity.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Custom</span>;
                      <span>Custom logo and colors</span>;
                    </li>;
                    <li className="flex items-center">;
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Custom</span>;
                      <span>Co-branded or white-labeled</span>;
                    </li>;
                    <li className="flex items-center">;
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0 && 0.5 rounded">Access</span>;
                      <span>Team roles & permissions</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className='bg-zion-blue-dark py-16'>;
          <div className='container mx-auto px-4 md:px-6 text-center'>;
            <h2 className='text-3xl font-bold text-white mb-4'>;
              Ready to transform your hiring process?;
            </h2>;
            <p className='text-zion-slate-light max-w-2xl mx-auto mb-8'>;
              Join leading companies using Zion Hire AI to find better talent;
              faster, reduce time-to-hire, and improve candidate experience.;
            </p>;
            <Button
              size='lg'
              className='bg-zion-purple hover:bg-zion-purple-light text-white'
              asChild>;
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>;
            <Button
              size="lg" 
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild>;
              <Link href="/enterprise/demo">;
=======
                <div className='absolute -top - 8 -left - 8 w - 72 h - 72 bg - zion - purple / 20 rounded - full filter blur - 3xl'></div>;
                <img;
                  src='https://placehold.co / 600x400 / 192134 / 9b87f5?text = Zion + Hire + AI';
                  alt='Zion Hire AI Dashboard';
                  className='relative z - 10 rounded - lg shadow - xl';
                  loading='lazy'                />                  src="https://placehold.co / 600x400 / 192134 / 9b87f5?text = Zion + Hire + AI";
                  alt="Zion Hire AI Dashboard";
                  className="relative z - 10 rounded - lg shadow - xl";
                  loading="lazy";
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py - 16 bg - background'>;
          <div className='container mx - auto px - 4 md:px - 6'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - 3xl font - bold tracking - tight'>;
                Powerful AI Hiring Tools;
              </h2>;
              <p className='text - muted - foreground mt - 4 max - w-3xl mx - auto'>;
                Our comprehensive suite of AI - powered hiring tools help you;
                streamline your recruiting process, find better candidates, and;
                make data - driven decisions.;
            </div>;
            <div className='grid gap - 6 md:grid - cols - 2 lg:grid - cols - 3'>;
              <Card className='bg - card border border - border'>;
                <CardHeader>;
                  <Briefcase className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Job Description Generator</CardTitle>;
                  <CardDescription>;
                    Create compelling job descriptions with AI assistance to;
                    attract top talent.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space - y-2 text - sm'>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Automated skill requirements</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Optimized for inclusivity</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Template;
                      </span>                      <span > Industry - specific templates</span>                    <li className="flex items - center">;
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Template</span>;
                      <span > Industry - specific templates</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
              <Card className='bg - card border border - border'>;
                <CardHeader>;
                  <PenTool className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Resume Screener</CardTitle>;
                  <CardDescription>;
                    Automatically evaluate and score candidate resumes against;
                    job requirements.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space - y-2 text - sm'>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Identify skill matches</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Experience verification</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Custom;
                      </span>                      <span > Customizable scoring criteria</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
              <Card className='bg - card border border - border'>;
                <CardHeader>;
                  <Users className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Candidate Matchmaker</CardTitle>;
                  <CardDescription>;
                    Find the best candidates for each position with AI - powered;
                    matching.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space - y-2 text - sm'>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Relevancy scoring</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Culture fit prediction</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Data;
                      </span>                      <span > Performance tracking</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
              <Card className='bg - card border border - border'>;
                <CardHeader>;
                  <Globe className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Embeddable Widget</CardTitle>;
                  <CardDescription>;
                    Add an AI assistant to your careers page to answer applicant;
                    questions.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space - y-2 text - sm'>;
                    <li className='flex items - center'>;
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        AI;
                      </span>;
                      <span > Instant FAQ responses</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Custom;
                      </span>;
                      <span > Customizable branding</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Code;
                      </span>                      <span > Simple JavaScript snippet</span>                <CardHeader>;
                  <PenTool className="h - 10 w - 10 text - zion - purple mb - 2" />;
                  <CardTitle > Resume Screener</CardTitle>;
                  <CardDescription>;
                    Automatically evaluate and score candidate resumes against job requirements.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space - y-2 text - sm">;
                    <li className="flex items - center">;
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>;
                      <span > Identify skill matches</span>;
                    </li>;
                    <li className="flex items - center">;
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>;
                      <span > Experience verification</span>;
                    </li>;
                    <li className="flex items - center">;
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>;
                      <span > Customizable scoring criteria</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
              <Card className='bg - card border border - border'>                <CardHeader>;
                  <Users className="h - 10 w - 10 text - zion - purple mb - 2" />;
                  <CardTitle > Candidate Matchmaker</CardTitle>;
                  <CardDescription>;
                    Find the best candidates for each position with AI - powered matching.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space - y-2 text - sm">;
                    <li className="flex items - center">;
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>;
                      <span > Relevancy scoring</span>;
                    </li>;
                    <li className="flex items - center">;
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>;
                      <span > Culture fit prediction</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Data;
                      </span>                    <li className="flex items - center">;
                      <span className="bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Data</span>;
                      <span > Performance tracking</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
              <Card className='bg - card border border - border'>                <CardHeader>;
                  <Globe className="h - 10 w - 10 text - zion - purple mb - 2" />;
                  <CardTitle > Embeddable Widget</CardTitle>;
                  <CardDescription>;
                    Add an AI assistant to your careers page to answer applicant questions.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space - y-2 text - sm">;
                    <li className="flex items - center">;
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>;
                      <span > Instant FAQ responses</span>;
                    </li>;
                    <li className="flex items - center">;
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>;
                      <span > Customizable branding</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Code;
                      </span>                    <li className="flex items - center">;
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Code</span>;
                      <span > Simple JavaScript snippet</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
              <Card className='bg - card border border - border'>;
                <CardHeader>;
                  <BarChart3 className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > Advanced Analytics</CardTitle>;
                  <CardDescription>;
                    Track recruiting metrics and optimize your hiring process;
                    with data.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space - y-2 text - sm'>;
                    <li className='flex items - center'>;
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Data;
                      </span>                      <span > Time - to - hire tracking</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Data;
                      </span>;
                      <span > Candidate funnel metrics</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Data;
                      </span>                      <span > Cost per hire analysis</span>                    <li className="flex items - center">;
                      <span className="bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Data</span>;
                      <span > Cost per hire analysis</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
              <Card className='bg - card border border - border'>;
                <CardHeader>;
                  <Shield className='h - 10 w - 10 text - zion - purple mb - 2' />;
                  <CardTitle > White - Labeled Platform</CardTitle>;
                  <CardDescription>;
                    Customize the platform with your company's branding and;
                    identity.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className='space - y-2 text - sm'>;
                    <li className='flex items - center'>;
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Custom;
                      </span>;
                      <span > Custom logo and colors</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Custom;
                      </span>;
                      <span > Co - branded or white - labeled</span>;
                    </li>;
                    <li className='flex items - center'>;
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
                        Access;
                      </span>                      <span > Team roles & permissions</span>                <CardHeader>;
                  <Shield className="h - 10 w - 10 text - zion - purple mb - 2" />;
                  <CardTitle > White - Labeled Platform</CardTitle>;
                  <CardDescription>;
                    Customize the platform with your company's branding and identity.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space - y-2 text - sm">;
                    <li className="flex items - center">;
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>;
                      <span > Custom logo and colors</span>;
                    </li>;
                    <li className="flex items - center">;
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>;
                      <span > Co - branded or white - labeled</span>;
                    </li>;
                    <li className="flex items - center">;
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Access</span>;
                      <span > Team roles & permissions</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='bg - zion - blue - dark py - 16'>;
          <div className='container mx - auto px - 4 md:px - 6 text - center'>;
            <h2 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to transform your hiring process?;
            </h2>;
            <p className='text - zion - slate - light max - w-2xl mx - auto mb - 8'>;
              Join leading companies using Zion Hire AI to find better talent;
              faster, reduce time - to - hire, and improve candidate experience.;
            </p>;
            <Button;
              size='lg';
              className='bg - zion - purple hover:bg - zion - purple - light text - white';
              as_child;
            >;
              <Link href='/enterprise / demo'>Schedule a Demo</Link>            </Button>            </p>;
            <Button;
              size="lg";
              className="bg - zion - purple hover: bg - zion - purple - light text - white";
              as_child;
            >;
              <Link href="/enterprise / demo">;

                Schedule a Demo;
              </Link>;
            </Button>;
          </div>;
        </section>;
      </main>;

  );
}
<<<<<<< HEAD

=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
