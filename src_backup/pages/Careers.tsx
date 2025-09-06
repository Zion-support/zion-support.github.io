import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { CAREER_JOBS } from '@/data/careersJobs';

export default function Careers() {
  const applyEmail = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <SEO
        title='Careers at Zion - Join Our Team'
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."


            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
              <p className="text-zion-slate-light text-lg whitespace-pre-line">
                {whyWork}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden relative w-full h-full">
              <img
                <div
                  key={index}
                  className='bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light'>;
                  <div className='bg-zion-blue inline-flex p-4 rounded-full mb-4'>                    {benefit && benefit.icon}
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-3'>;
                    {benefit && benefit.title}
                  </h3>;
                  <p className='text-zion-slate-light'>{benefit && benefit.description}</p>;
                </div>;

                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              ))}
                <TabsTrigger
                  value='engineering'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
                  Engineering;
                </TabsTrigger>;
                <TabsTrigger
                  value='product'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
                  Product;
                </TabsTrigger>;
                <TabsTrigger
                  value='marketing'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
                  Marketing;
                </TabsTrigger>;
                <TabsTrigger
                  value='operations'
                <TabsContent
                  key={department}
                  value={department}
                  className='space-y-6'>;
                  {jobList && jobList.map((job, index) => (;
                    <Card
                      key={index}
          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
            
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">
                <TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger>
                <TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger>
                <TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger>
                <TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger>
              </TabsList>
              
              {Object.entries(jobs).map(([department, jobList]) => (
                <TabsContent key={department} value={department} className="space-y-6">
                  {jobList.map((job, index) => (
                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>

                            </div>
                            <p className="text-zion-slate-light mb-4">{job.description}</p>
                          </div>
                          <Button
                            asChild
                            className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                          >
                            <Link href={`/careers/${job.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import Link from "next/link",;
import { CAREER_JOBS } from "@/data/careersJobs",;
export default function Careers() {;
  const applyEmail = "careers@ziontechgroup.com",;
  const jobs = CAREER_JOBS,;
  const whyWork =;
    "At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.",;
  // Benefits list;
  const benefits = [;
                          >;
                            <Link href={`/careers/${job.id}`}>;
                              View Details;
                            </Link>;
                          </Button>;
                        </div>;
                      </CardContent>;


                  ))}
                </TabsContent>
              ))}

            </Tabs>;
          </div>;

          <div className='bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center'>;
            <h2 className='text-3xl font-bold text-white mb-6'>;
              Don't see the right position?;
            </h2>;
            <p className='text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto'>;
              We're always looking for talented individuals who are passionate;
              about AI and technology. Send us your resume and let's start a;
              conversation. You can also apply directly by emailing us at;


          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and technology.
              Send us your resume and let's start a conversation. You can also
              apply directly by emailing us at

            </Tabs>
          </div>
              <a
                href={`mailto:${applyEmail}`}
                className='text-zion-cyan hover:text-zion-purple transition-colors'>;
                {applyEmail}
              </a>;
              .;
            </p>;
            <Button
              asChild
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              <a href={`mailto:${applyEmail}`}>Send General Application</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
import React from 'react';
import Card from '../components/Card';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="AI Engineer" description="Lead the development of cutting-edge AI solutions." />
          <Card title="Cybersecurity Specialist" description="Protect our clients' digital assets." />
          <Card title="Cloud Architect" description="Design scalable cloud infrastructure solutions." />
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </a>
  return (<>""
      <SEO title='Careers - Zion Tech Group' /" >"
      <div className='min-h-screen bg-white py-20'>""
        <div className='max-w-4xl mx-auto px-4'>""
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Careers</h1>""
          <p className='text-lg text-gray-600'>Content coming soon...</p>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
        </div>
      </div>
    </div>
  );
};

export default Careers;

  );
origin/cursor/automate-test-improve-and-merge-code-2533
