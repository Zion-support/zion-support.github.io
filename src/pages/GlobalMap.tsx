
import { Globe, MapPin } from 'lucide-react'

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components / ui / tooltip';
interface Instance {
  id: number;
  name: string;
  lat: number;
  lng: number;
  talent: number;
  governance: 'admin' | 'hybrid' | 'vote';

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


interface FeedItem {;
  id: number;

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [feed, setFeed] = useState<FeedItem[]>([])
  useEffect((,) => {
    const interval = setInterval((,) => {
      const messages = [
        'ZionGPT upgraded to v1.7 in Egypt'
        'Proposal #121 passed in Zion DevOps'
        'New franchise deployed: Zion Indonesia'
      ]
      const id = Date.now()

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <div className="min-h-screen bg-background">
      <NextSeo title="Global Zion Map" description="Overview of Zion deployments" />
      <Header />
      <main className='py-10 container mx-auto space-y-8'>
        <h1 className='text-3xl font-bold'>Global Instances</h1>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='relative' style={{ width, height }}>
            <Globe className='w-full h-full text-secondary' />
            {INSTANCES.map(i => {
              const { x, y } = project(i.lat, i.lng)
              const color = null;
                i.governance === 'admin';
                  ? 'bg-red-500';
                  : i.governance === 'hybrid';
                    ? 'bg-yellow-500';
                    : 'bg-green-500'; return (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


      <main className="py-10 container mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Global Instances</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative" style={{ width, height }}>
            <Globe className="w-full h-full text-secondary" />
            {INSTANCES.map((i) => {
              const { x, y } = project(i.lat, i.lng),
              const color = i.governance === 'admin' ? 'bg-red-500' : i.governance === 'hybrid' ? 'bg-yellow-500' : 'bg-green-500',
              return (
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                <TooltipProvider key={i.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`absolute ${color} rounded-full p-1`}
                        style={{ left: x, top: y }}
                      >
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm space-y-1">
                        <div className="font-semibold">{i.name}</div>
                        <div>Talent: {i.talent}</div>
                        <div>Governance: {i.governance}</div>
                        <div>Passed Votes: {i.votesPassed}</div>
                        <div>Pending Votes: {i.votesPending}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
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
            })}

          </div>
          <div className="flex-1 space-y-6">
            <section>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    <span>{r.talent}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
