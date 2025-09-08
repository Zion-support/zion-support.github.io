import React from 'react',
import { useProjects } from '@/hooks/useProjects',
import { SEO } from '@/components/SEO',
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
                  <CardTitle className='flex items-center gap-2'>
                    <Briefcase className='h-5 w-5 text-primary' />
                    <span>{project.job?.title || 'Project'}</span>
