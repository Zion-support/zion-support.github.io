
<<<<<<< HEAD
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
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Header  } from '@/components/Header';
import { NextSeo  } from '@/components/NextSeo';
import { Globe, MapPin } from 'lucide-react'

import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'

interface Instance {
=======
import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { Globe, MapPin } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;
} from '@/components/ui/tooltip';
interface Instance {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: number;
  name: string;
  lat: number;
  lng: number;
  talent: number;
  governance: 'admin' | 'hybrid' | 'vote';
  votesPassed: number;
  votesPending: number;
<<<<<<< HEAD
  region: string
const INSTANCES: Instance[] = [
  {

    id: 1
    name: 'Zion LATAM'
    lat: -15
    lng: -70
    talent: 120
    governance: 'hybrid'
    votesPassed: 5
    votesPending: 1
    region: 'Latin America'
  }
  {
    id: 2
    name: 'Zion Health'
    lat: 37
    lng: -95
    talent: 200
    governance: 'admin'
    votesPassed: 8
    votesPending: 2
    region: 'North America'
  }
  {
    id: 3
    name: 'Zion Law'
    lat: 51
    lng: 10
    talent: 150
    governance: 'vote'
    votesPassed: 12
    votesPending: 3
    region: 'Europe'
  }
]
=======
  region: string;

const INSTANCES: Instance[] = [;
  {;
    id: 1,;
    name: 'Zion LATAM',;
    lat: -15,;
    lng: -70,;
    talent: 120,;
    governance: 'hybrid',;
    votesPassed: 5,;
    votesPending: 1,;
    region: 'Latin America',;
  },;
  {;
    id: 2,;
    name: 'Zion Health',;
    lat: 37,;
    lng: -95,;
    talent: 200,;
    governance: 'admin',;
    votesPassed: 8,;
    votesPending: 2,;
    region: 'North America',;
  },;
  {;
    id: 3,;
    name: 'Zion Law',;
    lat: 51,;
    lng: 10,;
    talent: 150,;
    governance: 'vote',;
    votesPassed: 12,;
    votesPending: 3,;
    region: 'Europe',;
  },;
];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

interface FeedItem {;
  id: number;
<<<<<<< HEAD
  text: string
export default function GlobalMapPage() {

  const [feed, setFeed] = useState<FeedItem[]>([])
  useEffect((,) => {
    const interval = setInterval((,) => {
      const messages = [
        'ZionGPT upgraded to v1.7 in Egypt'
        'Proposal #121 passed in Zion DevOps'
        'New franchise deployed: Zion Indonesia'
      ]
      const id = Date.now()
      const text =
        messages[Math.floor(Math.random() * messages.length)] |
        'System update in progress'
      setFeed(f => [{ id, text }, ...f].slice(0, 5))
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  const width = 800
  const height = 400
  function project(lat: number, lng: number) {
    const x = ((lng + 180) / 360) * width
    const y = ((90 - lat) / 180) * height
    return { x, y }
  }
  const topRegions = INSTANCES.sort((a, b) => b.talent - a.talent).slice(0, 5)
=======
  text: string;

export default function GlobalMapPage() {;
  const [feed, setFeed] = useState<FeedItem[]>([]);

  useEffect((,) => {;
    const interval = setInterval((,) => {;
      const messages = [;
        'ZionGPT upgraded to v1 && v1.7 in Egypt',;
        'Proposal #121 passed in Zion DevOps',;
        'New franchise deployed: Zion Indonesia',;
      ];
      const id = Date && Date.now();
      const text =;
        messages[Math && Math.floor(Math && Math.random() * messages && messages.length)] ||;
        'System update in progress';
      setFeed(f => [{ id, text }, ...f].slice(0, 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const width = 800;
  const height = 400;
  function project(): any (lat: number, lng: number) {;
    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  }

  const topRegions = INSTANCES && INSTANCES.sort((a, b) => b && b.talent - a && a.talent).slice(0, 5);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='min-h-screen bg-background'>;
      <NextSeo
        title='Global Zion Map'
        description='Overview of Zion deployments'
<<<<<<< HEAD
      />
      <Header />
      <main className='py-10 container mx-auto space-y-8'>
        <h1 className='text-3xl font-bold'>Global Instances</h1>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='relative' style={{ width, height }}>
            <Globe className='w-full h-full text-secondary' />
            {INSTANCES.map(i => {
              const { x, y } = project(i.lat, i.lng)
              const color =
                i.governance === 'admin'
                  ? 'bg-red-500'
                  : i.governance === 'hybrid'
                    ? 'bg-yellow-500'
                    : 'bg-green-500'; return (

                <TooltipProvider key={i.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`absolute ${color} rounded-full p-1`}
                        style={{ left: x, top: y }}
                      >
                        <MapPin className='w-4 h-4 text-white' />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className='text-sm space-y-1'>
                        <div className='font-semibold'>{i.name}</div>
                        <div>Talent: {i.talent}</div>
                        <div>Governance: {i.governance}</div>
                        <div>Passed Votes: {i.votesPassed}</div>
                        <div>Pending Votes: {i.votesPending}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
=======
      />;
      <Header />;
      <main className='py-10 container mx-auto space-y-8'>;
        <h1 className='text-3xl font-bold'>Global Instances</h1>;
        <div className='flex flex-col lg:flex-row gap-8'>;
          <div className='relative' style={{ width, height }}>;
            <Globe className='w-full h-full text-secondary' />;
            {INSTANCES && INSTANCES.map(i => {;
              const { x, y } = project(i && i.lat, i && i.lng);
              const color =;
                i && i.governance === 'admin';
                  ? 'bg-red-500';
                  : i && i.governance === 'hybrid';
                    ? 'bg-yellow-500';
                    : 'bg-green-500';              return (
                <TooltipProvider key={i && i.id}>;
                  <Tooltip>;
                    <TooltipTrigger asChild>;
                      <div
                        className={`absolute ${color} rounded-full p-1`}
                        style={{ left: x, top: y }}>;
                        <MapPin className='w-4 h-4 text-white' />;
                      </div>;
                    </TooltipTrigger>;
                    <TooltipContent>;
                      <div className='text-sm space-y-1'>;
                        <div className='font-semibold'>{i && i.name}</div>;
                        <div>Talent: {i && i.talent}</div>;
                        <div>Governance: {i && i.governance}</div>;
                        <div>Passed Votes: {i && i.votesPassed}</div>;
                        <div>Pending Votes: {i && i.votesPending}</div>;
                      </div>;
                    </TooltipContent>;
                  </Tooltip>;
                </TooltipProvider>;
              );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            })}
          </div>;
          <div className='flex-1 space-y-6'>;
            <section>;
              <h2 className='text-xl font-semibold mb-2'>;
                Top Regions by Talent;
              </h2>;
              <ul className='space-y-1'>;
                {topRegions && topRegions.map(r => (;
                  <li key={r && r.id} className='flex justify-between border-b pb-1'>                    <span>{r && r.region}</span>;
                    <span>{r && r.talent}</span>;
                  </li>;
                ))}
              </ul>;
            </section>;
            <section>;
              <h2 className='text-xl font-semibold mb-2'>Live Feed</h2>;
              <ul className='space-y-1'>;
                {feed && feed.map(f => (;
                  <li key={f && f.id} className='text-sm'>;
                    {f && f.text}
                  </li>                ))}
<<<<<<< HEAD
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
}
=======
              </ul>;
            </section>;
          </div>;
        </div>;
      </main>;
    </div>;
  );
}

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
