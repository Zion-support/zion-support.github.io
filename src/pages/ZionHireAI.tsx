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
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel()
  const { isAuthenticated } = useAuth()

export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();

  return (
    <>

      <SEO
        title='Zion Hire AI - White-labeled AI Recruiting Assistant'
        description='Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.'

      <SEO
        title='Zion Hire AI - White-labeled AI Recruiting Assistant'
        description='Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.'
      />;
      <Header />;
      <main className='flex-1'>;
import React from 'react';
import { Header } from '@/components / Header';
import { SEO } from '@/components / SEO';
import { use_whitelabel } from '@/context / WhitelabelContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
  ArrowRight,
  Briefcase,
  PenTool,
  BarChart3,
  Users,
  Shield,
  Globe,
} from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import Link from 'next / link';
export default /**
 * ZionHireAI - Function description
 */
function ZionHireAI() {
  const { is_whitelabel, brand_name, primary_color } = use_whitelabel ();
  const { is_authenticated } = use_auth ();
  return (
    <>;
      <SEO;
        title='Zion Hire AI - White - labeled AI Recruiting Assistant';
        description='Empower your company with AI - powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.';
      />;
      <Header />;
      <main className='flex - 1'>;
        {/* Hero Section */}
        <section;
          className='relative bg - gradient - to - br from - zion - blue to - zion - blue - dark py - 16 md:py - 24';
          style={
            primary_color;
              ? {
                  backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))`
                }
              : {}
          }>;
          <div className='container mx-auto px-4 md:px-6'>;
            <div className='grid gap-6 md:grid-cols-2 items-center'>;
              <div className='space-y-4'>;
                <h1 className='text-3xl md:text-5xl font-bold tracking-tighter text-white'>;
                  {isWhitelabel;
                    ? `${brandName} Recruiting Assistant`;
                    : 'Zion Hire AI'}
                </h1>;
                <p className='text-lg text-zion-slate-light max-w-[600px]'>;
                  Empower your team with AI-driven talent acquisition.;
                  Streamline your hiring process, improve candidate matches, and;
                  enhance the applicant experience.;
                </p>;
                <div className='flex flex-col sm:flex-row gap-3 pt-4'>;
                  <Button
                    size='lg'
                    className='bg-zion-purple hover:bg-zion-purple-light text-white'
                    asChild>;
                    <Link
                      href={isAuthenticated ? '/enterprise/admin' : '/login'}>;
                      Get Started <ArrowRight className='ml-2 h-4 w-4' />;
                    </Link>;
                  </Button>;
                  <Button
                    variant='outline'
                    size='lg'
                    className='bg-transparent border-white text-white hover:bg-white/10'
                    asChild>;
                    <Link href='/enterprise/demo'>Request Demo</Link>;
                  </Button>;
                </div>;
              </div>;
              <div className='relative hidden md:block'>;
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
  
  return (
      <SEO 
        title="Zion Hire AI - White-labeled AI Recruiting Assistant" 
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
      />
      <Header />
      <main className='flex-1'>
        {/* Hero Section */}
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                  {isWhitelabel ? `${brandName} Recruiting Assistant` : "Zion Hire AI"}
                </h1>
                <p className="text-lg text-zion-slate-light max-w-[600px]">
                  <Button 
                    size="lg" 
                    className="bg-zion-purple hover:bg-zion-purple-light text-white"
                    asChild
                  >
                    <Link
                      href={isAuthenticated ? '/enterprise/admin' : '/login'}
                    >
                      Get Started <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='bg-transparent border-white text-white hover:bg-white/10'
                    asChild
                  >
                    <Link href='/enterprise/demo'>Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className='relative hidden md:block'>
                <div className='absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl'></div>
                <img
                  alt='Zion Hire AI Dashboard'
                  className='relative z-10 rounded-lg shadow-xl'
                  loading='lazy'                />                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI"
                  alt="Zion Hire AI Dashboard"
                  className="relative z-10 rounded-lg shadow-xl"
                  loading="lazy"
              </div>
          </div>
        </section>

        {/* Features Section */}
                <CardHeader>
                  <Briefcase className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Job Description Generator</CardTitle>
                  <CardDescription>
                    Create compelling job descriptions with AI assistance to
                    attract top talent.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Template</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
                <CardHeader>
                  <PenTool className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>
                    Automatically evaluate and score candidate resumes against
                    job requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Identify skill matches</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Experience verification</span>
                    </li>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable scoring criteria</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              
              <Card className="bg-card border border-border">
                <CardHeader>

                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Code</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
                <CardHeader>
                  <BarChart3 className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Track recruiting metrics and optimize your hiring process
                    with data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Cost per hire analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
                <CardHeader>
                  <Shield className='h-10 w-10 text-zion-purple mb-2' />
                  <CardDescription>
                    Customize the platform with your company's branding and
                    identity.
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
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Access</span>
                    <li className="flex items-center">
                      <span>Team roles & permissions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
            </p>
            <Button 
              size="lg" 
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild
            >
              <Link href="/enterprise/demo">
              </Link>
            </Button>
          </div>
        </section>
                  alt="Zion Hire AI Dashboard";
                  className="relative z-10 rounded-lg shadow-xl";
                  loading="lazy";
              </div>;
            </div>;
          </div>;
        </section>;
                      <span>Industry-specific templates</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Resume Screener</CardTitle>;
                  <CardDescription>;
                    Automatically evaluate and score candidate resumes against job requirements.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span>Customizable scoring criteria</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
                  <Users className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Candidate Matchmaker</CardTitle>;
                  <CardDescription>;
                    Find the best candidates for each position with AI-powered matching.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span>Performance tracking</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
                  <Globe className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Embeddable Widget</CardTitle>;
                  <CardDescription>;
                    Add an AI assistant to your careers page to answer applicant questions.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span>Simple JavaScript snippet</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
                      <span>Cost per hire analysis</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
                  <Shield className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>White-Labeled Platform</CardTitle>;
                  <CardDescription>;
                    Customize the platform with your company's branding and identity.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;
                      <span>Team roles & permissions</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </section>;
              size="lg";
              className="bg-zion-purple hover: bg-zion-purple-light text-white";
              asChild;
            >;
                Schedule a Demo;
              </Link>;
            </Button>;
          </div>;
        </section>;
      </main>;
