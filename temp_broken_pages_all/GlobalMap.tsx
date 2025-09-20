<<<<<<< HEAD:temp_broken_pages_all/GlobalMap.tsx
import React { useEffect useState } from 'react';
import { Header } from "@/components/Header";
import { NextSeo } from "@/components/NextSeo";
import { Globe, MapPin } from "lucide-react";
interface Instance {
  
  id: number;
name: string;
  lat: number;
lng: number;
  talent: number;
governance: 'admin' | 'hybrid' | 'vote';
  votesPassed: number;
votesPending: number;
  region: string,
const INSTANCES: Instance[] = [
  {
interface FeedItem {
  
  id: number;
text: string
}
export default function GlobalMapPage() {}
                <TooltipProvider key={i.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
className={`absolute ${color} rounded-full p-1`}
                        style={{ left: x top: y }}
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
            })}
          </div>
          <div className='flex-1 space-y-6'>
            <section>
              <h2 className='text-xl font-semibold mb-2'>
                Top Regions by Talent
              </h2>
              <ul className='space-y-1'>
                {topRegions.map(r => (
                  <li key={r.id} className='flex justify-between border-b pb-1'>                    <span>{r.region}</span>
                    <span>{r.talent}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className='text-xl font-semibold mb-2'>Live Feed</h2>
              <ul className='space-y-1'>
                {feed.map(f => (
                  <li key={f.id} className='text-sm'>
                    {f.text}
                  </li>                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
import React from 'react';

export default function GlobalMap() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Global Map</h1>
        <p className="text-lg text-gray-600">View our global presence...</p>
      </div>
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/GlobalMap.tsx
    </div>
  );
}