import { Globe, MapPin } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
origin/cursor/automate-test-improve-and-merge-code-2533
interface Instance {
  id: number;
  name: string;
  lat: number;
  lng: number;
  talent: number;
  governance: 'admin' | 'hybrid' | 'vote';
  votesPassed: number;
  votesPending: number;
  region: string
const INSTANCES: Instance[] = [
  {
    id: 1;
    name: 'Zion LATAM';
    lat: -15;
    lng: -70;
    talent: 120;
    governance: 'hybrid';
    votesPassed: 5;
    votesPending: 1;
    region: 'Latin America'},
  {
    id: 2;
    name: 'Zion Health';
    lat: 37;
    lng: -95;
    talent: 200;
    governance: 'admin';
    votesPassed: 8;
    votesPending: 2;
    region: 'North America'},
  {
    id: 3;
    name: 'Zion Law';
    lat: 51;
    lng: 10;
    talent: 150;
    governance: 'vote';
    votesPassed: 12;
    votesPending: 3;
    region: 'Europe'}],

interface FeedItem {
  id: number;
  text: string
export default function GlobalMapPage() {
  const [feed, setFeed] = useState<FeedItem[]>([]),

  useEffect(() => {
    const interval = null;
origin/cursor/automate-test-improve-and-merge-code-2533
              return (
                <TooltipProvider key={i.id}>
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
            })}
          </div>
          <div className="flex-1 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">Top Regions by Talent</h2>
              <ul className="space-y-1">
                {topRegions.map((r) => (
                  <li key={r.id} className="flex justify-between border-b pb-1">
                    <span>{r.region}</span>
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
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
