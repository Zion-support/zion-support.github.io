<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import { Header } from '@/components/Header',
import { NextSeo } from '@/components/NextSeo',
import { Globe, MapPin } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',

interface Instance {
  id: number,
  name: string,
  lat: number,
  lng: number,
  talent: number,
  governance: 'admin' | 'hybrid' | 'vote',
  votesPassed: number,
  votesPending: number,
  region: string
}

const INSTANCES: Instance[] = [
  {
    id: 1,
    name: 'Zion LATAM',
    lat: -15,
    lng: -70,
    talent: 120,
    governance: 'hybrid',
    votesPassed: 5,
    votesPending: 1,
    region: 'Latin America'},
  {
    id: 2,
    name: 'Zion Health',
    lat: 37,
    lng: -95,
    talent: 200,
    governance: 'admin',
    votesPassed: 8,
    votesPending: 2,
    region: 'North America'},
  {
    id: 3,
    name: 'Zion Law',
    lat: 51,
    lng: 10,
    talent: 150,
    governance: 'vote',
    votesPassed: 12,
    votesPending: 3,
    region: 'Europe'}],

interface FeedItem {
  id: number,
  text: string
}

export default function GlobalMapPage() {
  const [feed, setFeed] = useState<FeedItem[]>([]),

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        'ZionGPT upgraded to v1.7 in EgyptProposal #121 passed in Zion DevOpsNew franchise deployed: Zion Indonesia'],
      const id = Date.now(),
      const text = messages[Math.floor(Math.random() * messages.length)] || 'System update in progress',
      setFeed((f) => [{ id, text }, ...f].slice(0, 5))
    }, 5000),
    return () => clearInterval(interval)
  }, []),

  const width = 800,
  const height = 400,
  function project(lat: number, lng: number) {
    const x = ((lng + 180) / 360) * width,
    const y = ((90 - lat) / 180) * height,
    return { x, y }
  }

  const topRegions = INSTANCES.sort((a, b) => b.talent - a.talent).slice(0, 5),

  return (
    <div className=&quot;min-h-screen bg-background&quot;>
      <NextSeo title=&quot;Global Zion Map&quot; description=&quot;Overview of Zion deployments&quot; />
      <Header />
      <main className=&quot;py-10 container mx-auto space-y-8&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Global Instances</h1>
        <div className=&quot;flex flex-col lg:flex-row gap-8&quot;>
          <div className=&quot;relative&quot; style={{ width, height }}>
            <Globe className=&quot;w-full h-full text-secondary&quot; />
            {INSTANCES.map((i) => {
              const { x, y } = project(i.lat, i.lng),
              const color = i.governance === 'admin' ? 'bg-red-500' : i.governance === 'hybrid' ? 'bg-yellow-500' : 'bg-green-500',
=======
import React, {_useEffect, _useState} from 'react';

interface Instance {_id: number;
  name: string;
  lat: number;
  lng: number;
  talent: number;
  governance: 'admin' | 'hybrid' | 'vote';
  votesPassed: number;
  votesPending: number;
  region: string;}

const INSTANCES: Instance[] = [
  {_id: 1, _name: 'Zion LATAM', _lat: -15, _lng: -70, _talent: 120, _governance: 'hybrid', _votesPassed: 5, _votesPending: 1, _region: 'Latin America'},
  {_id: 2, _name: 'Zion Health', _lat: 37, _lng: -95, _talent: 200, _governance: 'admin', _votesPassed: 8, _votesPending: 2, _region: 'North America'},
  {_id: 3, _name: 'Zion Law', _lat: 51, _lng: 10, _talent: 150, _governance: 'vote', _votesPassed: 12, _votesPending: 3, _region: 'Europe'}];

interface FeedItem {_id: number;
  text: string;}

export default function GlobalMapPage() {_const [feed, _setFeed] = useState<FeedItem[]>([]);

  useEffect__(() => {
    const _interval = setInterval__(() => {
      const _messages = [
        'ZionGPT upgraded to v1.7 in Egypt', _'Proposal #121 passed in Zion DevOps', _'New franchise deployed: Zion Indonesia'];
      const _id = Date.now();
      const _text = messages[Math.floor(Math.random() * messages.length)] || 'System update in progress';
      setFeed(_(f) => [{ id, _text}, ...f].slice(0, 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const _width = 800;
  const _height = 400;
  function project(_lat: number, _lng: number) {_const _x = ((lng + 180) / 360) * width;
    const _y = ((90 - lat) / 180) * height;
    return { x, _y};
  }

  const _topRegions = INSTANCES.sort(_(a, _b) => b.talent - a.talent).slice(0, 5);

  return (_<div className="min-h-screen bg-background">
      <NextSeo title="Global Zion Map" description="Overview of Zion deployments" />
      <Header />
      <main className="py-10 container mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Global Instances</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative" style={_{ width, _height}}>
            <Globe className="w-full h-full text-secondary" />
            {_INSTANCES.map((i) => {
              const { x, _y} = project(i.lat, i.lng);
              const _color = i.governance === 'admin' ? 'bg-red-500' : i.governance === 'hybrid' ? 'bg-yellow-500' : 'bg-green-500';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              return (
                <TooltipProvider key={_i.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={_`absolute ${color} rounded-full p-1`}
                        style={_{ left: x, _top: y}}
                      >
                        <MapPin className=&quot;w-4 h-4 text-white&quot; />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
<<<<<<< HEAD
                      <div className=&quot;text-sm space-y-1&quot;>
                        <div className=&quot;font-semibold&quot;>{i.name}</div>
                        <div>Talent: {i.talent}</div>
                        <div>Governance: {i.governance}</div>
                        <div>Passed Votes: {i.votesPassed}</div>
                        <div>Pending Votes: {i.votesPending}</div>
=======
                      <div className="text-sm space-y-1">
                        <div className="font-semibold">{_i.name}</div>
                        <div>Talent: {_i.talent}</div>
                        <div>Governance: {_i.governance}</div>
                        <div>Passed Votes: {_i.votesPassed}</div>
                        <div>Pending Votes: {_i.votesPending}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>
          <div className=&quot;flex-1 space-y-6&quot;>
            <section>
<<<<<<< HEAD
              <h2 className=&quot;text-xl font-semibold mb-2&quot;>Top Regions by Talent</h2>
              <ul className=&quot;space-y-1&quot;>
                {topRegions.map((r) => (
                  <li key={r.id} className=&quot;flex justify-between border-b pb-1&quot;>
                    <span>{r.region}</span>
                    <span>{r.talent}</span>
=======
              <h2 className="text-xl font-semibold mb-2">Top Regions by Talent</h2>
              <ul className="space-y-1">
                {_topRegions.map(_(r) => (
                  <li key={r.id} className="flex justify-between border-b pb-1">
                    <span>{_r.region}</span>
                    <span>{_r.talent}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </li>
                ))}
              </ul>
            </section>
            <section>
<<<<<<< HEAD
              <h2 className=&quot;text-xl font-semibold mb-2&quot;>Live Feed</h2>
              <ul className=&quot;space-y-1&quot;>
                {feed.map((f) => (
                  <li key={f.id} className=&quot;text-sm&quot;>{f.text}</li>
=======
              <h2 className="text-xl font-semibold mb-2">Live Feed</h2>
              <ul className="space-y-1">
                {_feed.map(_(f) => (
                  <li key={f.id} className="text-sm">{_f.text}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

