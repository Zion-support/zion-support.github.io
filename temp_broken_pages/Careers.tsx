<<<<<<< HEAD:temp_broken_pages/Careers.tsx
<<<<<<< HEAD:temp_broken_pages/Careers.tsx
<<<<<<< HEAD:src/pages/Careers.tsx
import { SEO } from "@/components/SEO";,
import { GradientHeading } from "@/components/GradientHeading";,
import { Button } from "@/components/ui/button";,
import { Card, CardContent } from "@/components/ui/card";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Careers.tsx
import Link from "next/link";
import { CAREER_JOBS } from "@/data/careersJobs";

export default function Careers() {
<<<<<<< HEAD:temp_broken_pages/Careers.tsx
  return (
  return (
  return (
    <>
      <SEO
title='Careers at Zion - Join Our Team'
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CAREER_JOBS } from "@/data/careersJobs";

export default function Careers() {
  return (
    <>
      <SEO
        title='Careers at Zion - Join Our Team'
>>>>>>> 9ed9c11c4cc6835af67936874b7aa0ffe8bbcb03:temp_broken_pages/Careers.tsx
=======
  const featuredJobs = CAREER_JOBS.filter(job => job.featured);
  const allJobs = CAREER_JOBS;

  return (
    <>
      <SEO
        title='Careers at Zion - Join Our Team'
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Careers.tsx
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords='Zion careers AI jobs tech careers remote work startup jobs'
        canonical='https://app.ziontechgroup.com/careers'
      />
      <main className='min-h-screen bg-zion-blue pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <GradientHeading>Join Our Team</GradientHeading>
            <p className='text-zion-slate-light text-lg max-w-3xl mx-auto mt-6'>
              Be part of the future of AI and technology. We're looking for passionate individuals who want to make a difference in the world.
            </p>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="featured">Featured Positions</TabsTrigger>
              <TabsTrigger value="all">All Positions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured" className="space-y-6">
              <div className="grid gap-6">
                {featuredJobs.map((job) => (
                  <Card key={job.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-300">
                            <span>{job.department}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Apply Now
                        </Button>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6">
                {allJobs.map((job) => (
                  <Card key={job.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-300">
                            <span>{job.department}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Apply Now
                        </Button>
                      </div>
                      <p className="text-gray-300">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
<<<<<<< HEAD:temp_broken_pages/Careers.tsx
</>
  )
import React from 'react';
import { SEO } from "../components/SEO";
const Careers: React.FC = () => {
  return(<>
      <SEO title="Careers - Zion Tech Group" />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
      </div>
</>
  )
}
export default Careers
import React from 'react';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers</h1>
        <p className="text-lg text-gray-600">Join our team...</p>
      </div>
    </div>
  );
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Careers.tsx
=======
    </>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Careers.tsx
}