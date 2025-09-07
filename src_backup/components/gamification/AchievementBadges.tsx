<<<<<<< HEAD:src_backup/components/gamification/AchievementBadges.tsx
<<<<<<< HEAD
<<<<<<< HEAD
export interface Achievement {
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/gamification/AchievementBadges.tsx

export interface Achievement  {id: string;
  title: string;
  description: string;
  achieved: boolean;
<<<<<<< HEAD:src_backup/components/gamification/AchievementBadges.tsx
interface AchievementBadgesProps {
  achievements: Achievement[];
  achievements: Achievement[];



}
export interface Achievement {
  id: string
  title: string
  description: string
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface Achievement {
  achieved: boolean;

interface AchievementBadgesProps {
  achievements: Achievement[];
origin/cursor/automate-test-improve-and-merge-code-2533

  achieved: boolean
}
interface AchievementBadgesProps {
  achievements: Achievement[]
}
export function AchievementBadges({ achievements }: AchievementBadgesProps) {
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export interface Achievement {;
  id: string;
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",export interface Achievement  {id: string,title: string,description: string,achieved: boolean;
import { BadgeCheck  } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
export interface Achievement  {id: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/gamification/AchievementBadges.tsx
  title: string;
  description: string;
  achieved: boolean;
interface AchievementBadgesProps  {achievements: Achievement[];
  achievements: Achievement[];}
export interface Achievement  {id: string;
  title: string;
  description: string;
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
export interface Achievement  {achieved: boolean;interface AchievementBadgesProps  {achievements: Achievement[];achieved: boolean;
}
interface AchievementBadgesProps  {achievements: Achievement[];
}
<<<<<<< HEAD:src_backup/components/gamification/AchievementBadges.tsx

interface AchievementBadgesProps {;
  achievements: Achievement[];
}

export function AchievementBadges(): any ({ achievements }: AchievementBadgesProps) {;
  return (



      </CardContent>;
=======
export function AchievementBadges() {export interface Achievement  {id: string;
  title: string;
  description: string;
  achieved: boolean;interface AchievementBadgesProps  {achievements: Achievement[];
  achievements: Achievement[];export interface Achievement  {id: string,title: string,description: string}export interface Achievement  {id: string,title: string,description: string,achieved: boolean;
}interface AchievementBadgesProps  {achievements: Achievement[];
}export function AchievementBadges(): any ({ achievements }: AchievementBadgesProps) {return (<p className="font-medium">{a.title}</p>;
              <p className="text-sm text-muted-foreground">{a.description}</p>;
            </div>;
          </div>;
        ))}</CardContent>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/gamification/AchievementBadges.tsx
    </Card>;
  )})}achieved: boolean;
}
interface AchievementBadgesProps  {achievements: Achievement[];
}
export /**;
 * AchievementBadges - Function description;
 */;
function AchievementBadges() {return (<Card>;
      <CardHeader>;
        <CardTitle > Achievements</CardTitle>;
      </CardHeader>;
      <CardContent className='space - y-3'>;
        {achievements.map (array => (<div key={a.id} className='flex items - start gap - 3'>;
              className={`h - 5 w - 5 mt - 1 ${a.achieved ? 'text - green - 600' : 'text - muted - foreground'}`}
            />;
            <div>;
              <p className='font - medium'>{a.title}</p>;
              <p className='text - sm text - muted - foreground'>{a.description}</p>            </div>;
              <p className="font - medium">{a.title}</p>;
              <p className="text - sm text - muted - foreground">{a.description}</p>;
            <BadgeCheck;
              className={`h - 5 w - 5 mt - 1 ${a.achieved ? "text - green - 600" : "text - muted - foreground"}`}
            />;
            <div>;
              <p className="font - medium">{a.title}</p>;
              <p className="text - sm text - muted - foreground">{a.description}</p>;
            </div>;
          </div>))}
      </CardContent>;
<<<<<<< HEAD:src_backup/components/gamification/AchievementBadges.tsx
    </Card>);
}
;

    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
<CardContent className='space-y-3'>
        {achievements.map(a => (
          <div key={a.id} className='flex items-start gap-3'>
=======
    </Card>)}<Card>;
      <CardHeader>;
        <CardTitle>Achievements</CardTitle>;
      </CardHeader>;
<CardContent className='space-y-3'>;
        {achievements.map(a => (<div key={a.id} className='flex items-start gap-3'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/gamification/AchievementBadges.tsx
              className={`h-5 w-5 mt-1 ${a.achieved ? 'text-green-600' : 'text-muted-foreground'}`}
            />;
            <div>;
              <p className='font-medium'>{a.title}</p>;
              <p className='text-sm text-muted-foreground'>{a.description}</p>;
            </div>;
          </div>;
        ))}
<<<<<<< HEAD:src_backup/components/gamification/AchievementBadges.tsx
      </CardContent>
    </Card>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      </CardContent>;
    </Card>;
  )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/gamification/AchievementBadges.tsx
