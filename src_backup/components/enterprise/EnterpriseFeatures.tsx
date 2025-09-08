import React from 'react';
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              className='bg-card rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md'
            >
              <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5'>
                <feature.icon className='h-6 w-6 text-primary' />
              </div>
              <h3 className='font-bold text-xl mb-3'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
import React from 'react',;
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react';
const features = [;
  {;
    title: 'Private Hiring Portal',;
    description: 'Create a secure, private hiring portal accessible only to your team members.',;
    icon: Shield},;
  {;
    title: 'Dedicated Talent Pool',;
    description: 'Access to a curated pool of pre-vetted talent matched to your industry and needs.',;
    icon: Users},;
  {;
    title: 'Custom SLA',;
    description: 'Get guaranteed response times and dedicated support with our custom SLAs.',;
    icon: Award},;
  {;
    title: 'Branded Onboarding',;
    description: 'Customize the onboarding experience with your company branding and messaging.',;
    icon: Briefcase},;
  {;
    title: 'Admin Dashboards',;
    description: 'Powerful analytics and management tools for team leaders and administrators.',;
    icon: Settings},;
  {;
    title: 'Global Access',;
    description: 'Connect with talent across multiple regions with localized interfaces.',;
              <h3 className='font - bold text - xl mb - 3'>{feature.title}</h3>;
              <p className='text - muted - foreground'>{feature.description}</p>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
