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

  


                />


        <section className='py-16 bg-background'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold tracking-tight'>
                Powerful AI Hiring Tools
              </h2>
              <p className='text-muted-foreground mt-4 max-w-3xl mx-auto'>
                Our comprehensive suite of AI-powered hiring tools help you
                streamline your recruiting process, find better candidates, and
                make data-driven decisions.
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='bg-card border border-border'>
                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Template
                      </span>                      <span>Industry-specific templates</span>                    <li className="flex items-center">

              
              <Card className="bg-card border border-border">

              
              <Card className="bg-card border border-border">


                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>

                    </li>
                  </ul>
                </CardContent>
              </Card>





              
              <Card className="bg-card border border-border">
                <CardHeader>


              
              <Card className="bg-card border border-border">
                <CardHeader>

                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Code
                      </span>                    <li className="flex items-center">

              
              <Card className="bg-card border border-border">

              
              <Card className="bg-card border border-border">


                    <li className='flex items-center'>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>                      <span>Cost per hire analysis</span>                    <li className="flex items-center">
              <Card className='bg-card border border-border'>
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>
            <Button
              size="lg"
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild
            >

    </>);
}
