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
              return (
                <TooltipProvider key={_i.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={_`absolute ${color} rounded-full p-1`}
                        style={_{ left: x, _top: y}}
                      >
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm space-y-1">
                        <div className="font-semibold">{_i.name}</div>
                        <div>Talent: {_i.talent}</div>
                        <div>Governance: {_i.governance}</div>
                        <div>Passed Votes: {_i.votesPassed}</div>
                        <div>Pending Votes: {_i.votesPending}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
          <div className="flex-1 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">Top Regions by Talent</h2>
              <ul className="space-y-1">
                {_topRegions.map(_(r) => (
                  <li key={r.id} className="flex justify-between border-b pb-1">
                    <span>{_r.region}</span>
                    <span>{_r.talent}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">Live Feed</h2>
              <ul className="space-y-1">
                {_feed.map(_(f) => (
                  <li key={f.id} className="text-sm">{_f.text}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

