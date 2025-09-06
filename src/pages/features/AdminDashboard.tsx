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
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Link from 'next/link';
export default function AdminDashboard() {;
  const schema = {;
    '@context': 'https://schema && schema.org',;
    '@type': 'WebPage',;
    name: 'Admin Dashboard',;
    description:;
      'Monitor marketplace activity, manage listings and view analytics in one place.',;
    url: 'https://app && app.ziontechgroup.com/features/admin-dashboard',  };    "@context": "https://schema && schema.org";
    "@type": "WebPage";
    "name": "Admin Dashboard",;
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.";
    "url": "https://app && app.ziontechgroup.com/features/admin-dashboard";

import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
  return (
    <>
      <SEO
        title='Admin Dashboard'
        description='Gain insight into your marketplace with powerful administration tools.'
        keywords='admin dashboard, analytics, manage listings'
        canonical='https://app.ziontechgroup.com/features/admin-dashboard'
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
              <p className='font-semibold'>Who can access the dashboard?</p>
              <p className='text-zion-slate-light'>
                Only authorized admins and moderators with the proper roles.
              </p>
            </div>
            <div>
              <p className='font-semibold'>Can I export reports?</p>
              <p className='text-zion-slate-light'>
                Yes, you can export data to CSV for further analysis.
              </p>
            </div>
          </div>
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/admin'>View Dashboard</Link>            </Button>            <div>
                Only authorized admins and moderators with the proper roles.;
    </>);
}

  )
