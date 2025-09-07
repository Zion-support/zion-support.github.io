import { Trophy } from 'lucide-react''
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,'
} from '@/components/ui/ card';''
import { Trophy } from 'lucide-react';'
export interface LeaderboardEntry {
  // TODO: Implement
}
  name: string,
  points: number;

}
interface UserLeaderboardProps {
  // TODO: Implement
}
  entries: LeaderboardEntry[];
}

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';''
import { Trophy } from 'lucide-react';'
export interface LeaderboardEntry {;
  name: string;,
  points: number;

interface UserLeaderboardProps {;
  entries: LeaderboardEntry[];,
  entries: LeaderboardEntry[];

}

export interface LeaderboardEntry  {name: string;}
  points: number;}
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[];}
}
}

export function UserLeaderboard() {import {Card,CardContent,CardDescription,CardHeader,CardTitle} from '@/components/ui/card';

export interface LeaderboardEntry {
  name: string;
  points: number;

interface UserLeaderboardProps  {entries: LeaderboardEntry[];
  entries: LeaderboardEntry[];}
}
}

export interface LeaderboardEntry  {name: string,points: number;}
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[];}
}
}

'
          <Trophy className="h-5 w-5" /> Leaderboard;"
</Trophy>
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>

"
        <div className="space-y-2">"
</div>
            <div;
              key={e.name}

"
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50""
            >
</div>"
              <span className="font-medium">"
</span>
              </span>

"
              <span className="text-sm">{e.points} pts</span>"
            </div>
        </div>;
      </CardContent>;
    </Card>;
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className='flex items - center gap - 2'>;'
</CardTitle>'
          <Trophy className='h - 5 w - 5' /> Leaderboard        </CardTitle>;'
</Trophy>
        <CardDescription > Top users by points</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>'
        <div className='space - y-2'>        <CardTitle className="flex items - center gap - 2">;"
</div>"
          <Trophy className="h - 5 w - 5" /> Leaderboard;"
</Trophy>

        </CardTitle>;
        <CardDescription  /> Top users by points</CardDescription>;
      </CardHeader>;

      <CardContent>;
</CardContent>"
        <div className='space - y-2'>;'
</div>
            <div;
              key={e.name}'
              className='flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50'            <div;'
              key = {e.name, }'
              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50";"
            >;
</div>"
              <span className='font - medium'>;'
</span>
              </span>;'
              <span className='text - sm'>{e.points} pts</span>            </div>              <span className="text - sm">{e.points} pts</span>;")
            </div>))}
        </div>;
      </CardContent>;
    </Card>);"
