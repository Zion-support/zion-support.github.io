class ErrorBoundary extends React.Component {;
constructor(props) {;
super(props);
this.state={hasError: false}
  }
;
static getDerivedStateFromError(error) {;
return { hasError: true}
  }
;
componentDidCatch(error, errorInfo) {;
console.error('Error caught by boundary:', error, errorInfo)
  }
;
render() {;
if (this.state.hasError) {;
return <div>Something went wrong.</div>;
    }
;
return this.props.children;
  }
}
import React from 'react';;
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { useWhitelabel } from '@/context/WhitelabelContext';
import {;;
Card,;
CardContent,;
CardDescription,;
CardHeader,;
CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {;;
ArrowRight,;
Briefcase,;
PenTool,;
BarChart3,;
Users,;
Shield,;
Globe,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';;
export default function ZionHireAI() {}
const { isWhitelabel}, brandName, primaryColor } = useWhitelabel();
const { isAuthenticated } = useAuth();
return (;

    <>
title='Zion Hire AI - White-labeled AI Recruiting Assistant';
description='Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.'
      />
      <main className='flex-1'>;
import React from 'react';;
import { Header } from '@/components / Header';
import { SEO } from '@/components / SEO';
import { use_whitelabel } from '@/context / WhitelabelContext';
import {;;
Card,;
CardContent,;
CardDescription,;
CardHeader,;
CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
ArrowRight,;
Briefcase,;
PenTool,;
BarChart3,;
Users,;
Shield,;
Globe,
} from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import Link from 'next / link';;
export default /**
 * ZionHireAI - Function description
 */;
function ZionHireAI() {}
const { is_whitelabel}, brand_name, primary_color } = use_whitelabel ();
const { is_authenticated } = use_auth ();
return (;
    <>
title='Zion Hire AI - White - labeled AI Recruiting Assistant';
description='Empower your company with AI - powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.'
      />
        {/* Hero Section */}
        <;$2 />;
className='relative bg - gradient - to - br from - zion - blue to - zion - blue - dark py - 16 md: py - 24';
style={;
primary_color
              ? {,
backgroundImage: `linear-gradient(to bottom right}, ${primaryColor}, rgba(25, 33, 52, 1))`
                }
              : {}
          }>
                  {isWhitelabel
                    ? `${brandName} Recruiting Assistant`
                    : 'Zion Hire AI'}
                <p className='text-lg text-zion-slate-light max-w-[600px]'>;
Empower your team with AI-driven talent acquisition.;
Streamline your hiring process, improve candidate matches, and;
enhance the applicant experience.</$1>
size='lg';
className='bg-zion-purple hover:bg-zion-purple-light text-white';
asChild>
                    <$2 />;
href={isAuthenticated ? '/enterprise/admin' : '/login'}>;
Get Started <ArrowRight className='ml-2 h-4 w-4' /></$1></$1>
variant='outline';
size='lg';
className='bg-transparent border-white text-white hover: bg-white/10';
asChild>
                    <Link href='/enterprise/demo'>Request Demo</Link></$1></$1></$1>
              <div className='relative hidden md:block'>;
import React from "react";;
import { Header} from "@/components/Header";
import { SEO } from '@/components/SEO';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { Card;, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight;, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth',;
import Link from "next/link";,;
export default function ZionHireAI() {}
const { isWhitelabel}, brandName, primaryColor } = useWhitelabel(),;
const { isAuthenticated } = useAuth(),;
import React from "react";,;
import { Header } from '@/components/Header',;
import { SEO } from '@/components/SEO',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { Card;, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from '@/components/ui/button',;
import { ArrowRight;, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth',;
import Link from "next/link";,;
export default function ZionHireAI() {}
const { isWhitelabel}, brandName, primaryColor } = useWhitelabel(),;
const { isAuthenticated } = useAuth(),;
return (;
    <>
title="Zion Hire AI - White-labeled AI Recruiting Assistant";
description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
      />
        {/* Hero Section */}

        <$2 />;
className='relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md: py-24';
style={;
primaryColor
              ? {,
backgroundImage: `linear-gradient(to bottom right}, ${primaryColor}, rgba(25, 33, 52, 1))`
                }
              : {}
          }
        <$2 />;
className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24";
style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right}}, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}
        >
                  {isWhitelabel
                    ? `${brandName} Recruiting Assistant`
                    : 'Zion Hire AI'}
                <p className='text-lg text-zion-slate-light max-w-[600px]'>;
Empower your team with AI-driven talent acquisition.;
Streamline your hiring process, improve candidate matches, and;
enhance the applicant experience.
size='lg';
className='bg-zion-purple hover:bg-zion-purple-light text-white';
asChild
                  >
                    <$2 />;
href={isAuthenticated ? '/enterprise/admin' : '/login'}
                    >;
Get Started <ArrowRight className='ml-2 h-4 w-4' />
variant='outline';
size='lg';
className='bg-transparent border-white text-white hover:bg-white/10';
asChild
                  >
                    <Link href='/enterprise/demo'>Request Demo</Link>
                <div className='absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl'></div>
src='https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI';
alt='Zion Hire AI Dashboard';
className='relative z-10 rounded-lg shadow-xl';
loading='lazy'                />                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI";
alt="Zion Hire AI Dashboard";
className="relative z-10 rounded-lg shadow-xl";
loading="lazy"
                />




        {/* Features Section */}




              <h2 className="text-3xl font-bold tracking-tight">Powerful AI Hiring Tools</h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">;
Our comprehensive suite of AI-powered hiring tools help you streamline your recruiting process,;
find better candidates, and make data-driven decisions.
            




                  <CardTitle>Job Description Generator</CardTitle>
                  <CardDescription>;
Create compelling job descriptions with AI assistance to;
attract top talent.
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      <span>Automated skill requirements</span>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      <span>Optimized for inclusivity</span>

                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      </span>                      <span>Industry-specific templates</span>                    <li className="flex items-center">



                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Template</span>
                      <span>Industry-specific templates</span>
              

              


                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>;
Automatically evaluate and score candidate resumes against job requirements.
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Identify skill matches</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Experience verification</span>

                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Relevancy scoring</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Culture fit prediction</span>

                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>





                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable scoring criteria</span>



              <Card className='bg-card border border-border'>                <CardHeader>
              




              


                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>;
Find the best candidates for each position with AI-powered matching.
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Relevancy scoring</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Culture fit prediction</span>

                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      </span>                    <li className="flex items-center">

                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>



              



              

                  <CardTitle>Embeddable Widget</CardTitle>
                  <CardDescription>;
Add an AI assistant to your careers page to answer applicant questions.
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Instant FAQ responses</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable branding</span>



                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Code</span>
                      <span>Simple JavaScript snippet</span>
              

              



                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>;
Track recruiting metrics and optimize your hiring process;
with data.
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      </span>                      <span>Time-to-hire tracking</span>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      <span>Candidate funnel metrics</span>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      </span>                      <span>Cost per hire analysis</span>                    <li className="flex items-center">



                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Cost per hire analysis</span>
              



                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>;
Customize the platform with your company's branding and;
identity.
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Custom logo and colors</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Co-branded or white-labeled</span>

                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      <span>Custom logo and colors</span>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>;
                      <span>Co-branded or white-labeled</span>

              

                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>;
Customize the platform with your company's branding and identity.
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Custom logo and colors</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Co-branded or white-labeled</span>



                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Access</span>
                      <span>Team roles & permissions</span>

        {/* CTA Section */}

            <h2 className='text-3xl font-bold text-white mb-4'>;
Ready to transform your hiring process?
            <p className='text-zion-slate-light max-w-2xl mx-auto mb-8'>;
Join leading companies using Zion Hire AI to find better talent;
faster, reduce time-to-hire, and improve candidate experience.

            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">;
Join leading companies using Zion Hire AI to find better talent faster,;
reduce time-to-hire, and improve candidate experience.







size='lg';
className='bg-zion-purple hover:bg-zion-purple-light text-white';
asChild
            >
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>
size="lg";
className="bg-zion-purple hover: bg-zion-purple-light text-white";
asChild
            >




              <Link href="/enterprise/demo">;
Schedule a Demo
    </>
  )
}</$1>
    </>

  )
}
import React from "react";,;
import { Header } from '@/components/Header',;
import { SEO } from '@/components/SEO',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { Card;, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from '@/components/ui/button',;
import { ArrowRight;, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth',;
import Link from "next/link";,;
export default function ZionHireAI() {}
const { isWhitelabel}, brandName, primaryColor } = useWhitelabel(),;
const { isAuthenticated } = useAuth(),;
return (;
    <>
title="Zion Hire AI - White-labeled AI Recruiting Assistant";
description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
      />
        {/* Hero Section */}
        <;$2 />;
className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24";
style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right}}, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}
        >
                  {isWhitelabel ? `${brandName}} Recruiting Assistant` : "Zion Hire AI"}
                <p className="text-lg text-zion-slate-light max-w-[600px]">;
Empower your team with AI-driven talent acquisition. Streamline your hiring process,;
improve candidate matches, and enhance the applicant experience.</$1>
size="lg";
className="bg-zion-purple hover:bg-zion-purple-light text-white";
asChild
                  >
                    <Link href={isAuthenticated ? "/enterprise/admin" : "/login"}>;
Get Started <ArrowRight className="ml-2 h-4 w-4" /></$1></$1>
variant="outline";
size="lg";
className="bg-transparent border-white text-white hover:bg-white/10";
asChild
                  >
                    <Link href="/enterprise/demo">;
Request Demo</$1></$1></$1></$1>
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>
src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI";
alt="Zion Hire AI Dashboard";
className="relative z-10 rounded-lg shadow-xl";
loading="lazy"
                /></$1></$1></$1></$1>
        {/* Features Section */}
              <h2 className="text-3xl font-bold tracking-tight">Powerful AI Hiring Tools</h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">;
Our comprehensive suite of AI-powered hiring tools help you streamline your recruiting process;
find better candidates, and make data-driven decisions.</$1></$1>
                  <CardTitle>Job Description Generator</CardTitle>
                  <CardDescription>;
Create compelling job descriptions with AI assistance to attract top talent.</$1></$1>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Automated skill requirements</span></$1>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Optimized for inclusivity</span></$1>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Template</span>
                      <span>Industry-specific templates</span></$1></$1></$1></$1>
                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>;
Automatically evaluate and score candidate resumes against job requirements.</$1></$1>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Identify skill matches</span></$1>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Experience verification</span></$1>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable scoring criteria</span></$1></$1></$1></$1>
                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>;
Find the best candidates for each position with AI-powered matching.</$1></$1>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Relevancy scoring</span></$1>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Culture fit prediction</span></$1>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span></$1></$1></$1></$1>
                  <CardTitle>Embeddable Widget</CardTitle>
                  <CardDescription>;
Add an AI assistant to your careers page to answer applicant questions.</$1></$1>
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Instant FAQ responses</span></$1>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable branding</span></$1>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Code</span>
                      <span>Simple JavaScript snippet</span></$1></$1></$1></$1>
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>;
Track recruiting metrics and optimize your hiring process with data.</$1></$1>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Time-to-hire tracking</span></$1>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Candidate funnel metrics</span></$1>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Cost per hire analysis</span></$1></$1></$1></$1>
                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>;
Customize the platform with your company's branding and identity.</$1></$1>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Custom logo and colors</span></$1>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Co-branded or white-labeled</span></$1>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Access</span>
                      <span>Team roles & permissions</span></$1></$1></$1></$1></$1></$1></$1>
        {/* CTA Section */}
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">;
Join leading companies using Zion Hire AI to find better talent faster;
reduce time-to-hire, and improve candidate experience.</$1>
size='lg';
className='bg-zion-purple hover:bg-zion-purple-light text-white';
asChild>
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>
size="lg";
className="bg-zion-purple hover: bg-zion-purple-light text-white";
asChild>
                <div className='absolute -top - 8 -left - 8 w - 72 h - 72 bg - zion - purple / 20 rounded - full filter blur - 3xl'></div>
src='https://placehold.co / 600x400 / 192134 / 9b87f5?text = Zion + Hire + AI';
alt='Zion Hire AI Dashboard';
className='relative z - 10 rounded - lg shadow - xl';
loading='lazy'                />                  src="https://placehold.co / 600x400 / 192134 / 9b87f5?text = Zion + Hire + AI";
alt="Zion Hire AI Dashboard";
className="relative z - 10 rounded - lg shadow - xl";
loading="lazy"</$1></$1></$1></$1>
        {/* Features Section */}
  </h2>;
Powerful AI Hiring Tools</$1>
              <p className='text - muted - foreground mt - 4 max - w-3xl mx - auto'>;
Our comprehensive suite of AI - powered hiring tools help you;
streamline your recruiting process, find better candidates, and;
make data - driven decisions.</$1>
                  <CardTitle > Job Description Generator</CardTitle>
                  <CardDescription>;
Create compelling job descriptions with AI assistance to;
attract top talent.</$1></$1>
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
AI</$1>
                      <span > Automated skill requirements</span></$1>
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
AI</$1>
                      <span > Optimized for inclusivity</span></$1>
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Template</$1>                      <span > Industry - specific templates</span>                    <li className="flex items - center">
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Template</span>
                      <span > Industry - specific templates</span></$1></$1></$1></$1>
                  <CardTitle > Resume Screener</CardTitle>
                  <CardDescription>;
Automatically evaluate and score candidate resumes against;
job requirements.</$1></$1>
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
AI</$1>
                      <span > Identify skill matches</span></$1>
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
AI</$1>
                      <span > Experience verification</span></$1>
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Custom</$1>                      <span > Customizable scoring criteria</span></$1></$1></$1></$1>
                  <CardTitle > Candidate Matchmaker</CardTitle>
                  <CardDescription>;
Find the best candidates for each position with AI - powered;
matching.</$1></$1>
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
AI</$1>
                      <span > Relevancy scoring</span></$1>
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
AI</$1>
                      <span > Culture fit prediction</span></$1>
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Data</$1>                      <span > Performance tracking</span></$1></$1></$1></$1>
                  <CardTitle > Embeddable Widget</CardTitle>
                  <CardDescription>;
Add an AI assistant to your careers page to answer applicant;
questions.</$1></$1>
                      <span className='bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
AI</$1>
                      <span > Instant FAQ responses</span></$1>
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Custom</$1>
                      <span > Customizable branding</span></$1>
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Code</$1>                      <span > Simple JavaScript snippet</span>                <CardHeader>
                  <CardTitle > Resume Screener</CardTitle>
                  <CardDescription>;
Automatically evaluate and score candidate resumes against job requirements.</$1></$1>
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>
                      <span > Identify skill matches</span></$1>
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>
                      <span > Experience verification</span></$1>
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>
                      <span > Customizable scoring criteria</span></$1></$1></$1></$1>
              <Card className='bg - card border border - border'>                <CardHeader>
                  <CardTitle > Candidate Matchmaker</CardTitle>
                  <CardDescription>;
Find the best candidates for each position with AI - powered matching.</$1></$1>
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>
                      <span > Relevancy scoring</span></$1>
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>
                      <span > Culture fit prediction</span></$1>
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Data</$1>                    <li className="flex items - center">
                      <span className="bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Data</span>
                      <span > Performance tracking</span></$1></$1></$1></$1>
              <Card className='bg - card border border - border'>                <CardHeader>
                  <CardTitle > Embeddable Widget</CardTitle>
                  <CardDescription>;
Add an AI assistant to your careers page to answer applicant questions.</$1></$1>
                      <span className="bg - green - 100 text - green - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">AI</span>
                      <span > Instant FAQ responses</span></$1>
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>
                      <span > Customizable branding</span></$1>
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Code</$1>                    <li className="flex items - center">
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Code</span>
                      <span > Simple JavaScript snippet</span></$1></$1></$1></$1>
                  <CardTitle > Advanced Analytics</CardTitle>
                  <CardDescription>;
Track recruiting metrics and optimize your hiring process;
with data.</$1></$1>
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Data</$1>                      <span > Time - to - hire tracking</span></$1>
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Data</$1>
                      <span > Candidate funnel metrics</span></$1>
                      <span className='bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Data</$1>                      <span > Cost per hire analysis</span>                    <li className="flex items - center">
                      <span className="bg - amber - 100 text - amber - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Data</span>
                      <span > Cost per hire analysis</span></$1></$1></$1></$1>
                  <CardTitle > White - Labeled Platform</CardTitle>
                  <CardDescription>;
Customize the platform with your company's branding and;
identity.</$1></$1>
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Custom</$1>
                      <span > Custom logo and colors</span></$1>
                      <span className='bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Custom</$1>
                      <span > Co - branded or white - labeled</span></$1>
                      <span className='bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded'>;
Access</$1>                      <span > Team roles & permissions</span>                <CardHeader>
                  <CardTitle > White - Labeled Platform</CardTitle>
                  <CardDescription>;
Customize the platform with your company's branding and identity.</$1></$1>
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>
                      <span > Custom logo and colors</span></$1>
                      <span className="bg - purple - 100 text - purple - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Custom</span>
                      <span > Co - branded or white - labeled</span></$1>
                      <span className="bg - blue - 100 text - blue - 800 text - xs font - medium mr - 2 px - 2 py - 0.5 rounded">Access</span>
                      <span > Team roles & permissions</span></$1></$1></$1></$1></$1></$1></$1>
        {/* CTA Section */}
  </h2>;
Ready to transform your hiring process?</$1>
            <p className='text - zion - slate - light max - w-2xl mx - auto mb - 8'>;
Join leading companies using Zion Hire AI to find better talent;
faster, reduce time - to - hire, and improve candidate experience.</$1>
size='lg';
className='bg - zion - purple hover:bg - zion - purple - light text - white';
as_child
            >
              <Link href='/enterprise / demo'>Schedule a Demo</Link>            </Button>            </p>
size="lg";
className="bg-zion-purple hover: bg-zion-purple-light text-white";
asChild
            >
              <Link href="/enterprise / demo">;
Schedule a Demo</$1></$1></$1></$1></$1>
  )
}




    </>)
}

</div></div></ul></ul></ul></li></li></li></li></li></li></li></li></li></li></li></li></main>