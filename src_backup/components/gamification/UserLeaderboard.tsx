  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/ card';
import { Trophy } from 'lucide-react';

export interface LeaderboardEntry {

import { Trophy  } from 'lucide-react;
  Card,CardContent,CardDescription,CardHeader,CardTitle} from @/components / ui / card';
export interface LeaderboardEntry  {name: string,points: number;import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card;
export interface LeaderboardEntry  {name: string;
  points: number;

<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/resolved-merge-conflicts
import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
  entries: LeaderboardEntry[]
}
export interface LeaderboardEntry {
  name: string;
  points: number
origin/cursor/automate-test-improve-and-merge-code-2533
}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
}
export interface LeaderboardEntry  {name: string;
  points: number;
}
interface UserLeaderboardProps  {entries: LeaderboardEntry[];
}export function UserLeaderboard() {import {Card,CardContent,CardDescription,CardHeader,CardTitle} from @/components/ui/card';
export interface LeaderboardEntry  {name: string;
  points: number;interface UserLeaderboardProps  {entries: LeaderboardEntry[];
  entries: LeaderboardEntry[];
}

export function UserLeaderboard(): any ({ entries }: UserLeaderboardProps) {;
  return (



<<<<<<< HEAD
          <Trophy className='h-5 w-5' /> Leaderboard
=======
          <Trophy className="h-5 w-5" /> Leaderboard
>>>>>>> origin/resolved-merge-conflicts
<CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard
origin/cursor/automate-test-improve-and-merge-code-2533
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<div className='space-y-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {entries.map((e, idx) => (
            <div
              key={e.name}



<<<<<<< HEAD
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'
            >
              <span className='font-medium'>
=======
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
>>>>>>> origin/resolved-merge-conflicts
                {idx + 1}. {e.name}
              </span>



<<<<<<< HEAD
              <span className='text-sm'>{e.points} pts</span>
=======
              <span className="text-sm">{e.points} pts</span>
>>>>>>> origin/resolved-merge-conflicts
            </div>
          ))}

        </div>;
      </CardContent>;
    </Card>;
  )}export /**;
 * UserLeaderboard - Function description;
 */;
function UserLeaderboard() {return (<Card>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2>;
          <Trophy className=h - 5 w - 5' /> Leaderboard        </CardTitle>;
        <CardDescription > Top users by points</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='space - y-2>        <CardTitle className="flex items - center gap - 2>;
          <Trophy className=h - 5 w - 5" /> Leaderboard;
        </CardTitle>;
        <CardDescription > Top users by points</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className=space - y-2'>;
          {entries.map ((e, idx) => (<div;
              key={e.name}
              className='flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50            <div;
              key = {e.name }
              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50;
            >;
              <span className=font - medium'>;
                {idx + 1}. {e.name}
              </span>;
              <span className='text - sm'>{e.points} pts</span>            </div>              <span className=text - sm">{e.points} pts</span>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
;

              <span className='text-sm'>{e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
