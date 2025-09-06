import {

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
import { useProjects } from '@/hooks/useProjects';
import { SEO } from '@/components/SEO';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, Briefcase } from 'lucide-react';
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'



import { Clock, Briefcase } from 'lucide-react'

          <div className="grid gap-6">
            {projects.map((project) => (

          <div className="grid gap-6">
            {projects.map((project) => (
          <div className="grid gap-6">
            {projects.map((project) => (


                  <p className="text-sm text-muted-foreground line-clamp-2">

                  <p className="text-sm text-muted-foreground line-clamp-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">



export default function Projects() {;
};
}

;
