:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
import { Bell, Users, Settings } from 'lucide-react';
:src/components/enterprise/workspace/WorkspaceHeader.tsx
interface WorkspaceHeaderProps {;
  company: Company;


:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
import React from "react","
import { Button } from "@/components/ui/button","
import { type Company } from "./CompanyDashboard",'
import { Bell, Users, Settings } from 'lucide-react'

interface WorkspaceHeaderProps {};
  company: Company;
}

:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img

              src={company.logoUrl || '/placeholder.svg'}

              alt={company.name}
              className='max-h-10 max-w-10'
              loading='lazy'            />
          </div>
          <div>'
            <h1 className='text-3xl font-bold tracking-tight'>
:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
              {company.name} Workspace
            </h1>
            <p className='text-muted-foreground'>              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>"
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>"
            <p className="text-muted-foreground">
:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx

import React from "react";
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react'
';
import React from 'react';'
import { Button } from '@/components / ui / button';'
import { type Company } from './CompanyDashboard';'
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {}
  company: Company;
export /**;
 * WorkspaceHeader - Function description;
 */
function WorkspaceHeader() {}
  return ('
    <div className='space - y-6'>;'
      <div className='flex items - center justify - between'>;'
        <div className='flex items - center gap - 4'>;'
          <div className='h - 12 w - 12 rounded - lg bg - card flex items - center justify - center border border - border'>;
            <img;'
              src={company.logo_url || '/placeholder.svg'}
              alt={company.name}'
              className='max - h-10 max - w-10';'
              loading='lazy'            />;
          </div>;
          <div>;'
            <h1 className='text - 3xl font - bold tracking - tight'>;
              {company.name} Workspace;
            </h1>;'
            <p className='text - muted - foreground'>              {company.plan} Plan · {company.team_size} team members;
            </p>;
          </div>;
:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
        </div>;
            <h1 className="text - 3xl font - bold tracking-tight">{company.name} Workspace</h1>;
            <p className="text - muted-foreground">;
interface WorkspaceHeaderProps {
  company: Company;
}
'
              src={company && company.logoUrl || '/placeholder && placeholder.svg'}
              alt={company && company.name}'
              className='max-h-10 max-w-10''
              loading='lazy'            />;
          </div>;
          <div>;'
            <h1 className='text-3xl font-bold tracking-tight'>;
              {company && company.name} Workspace;
            </h1>;'
            <p className='text-muted-foreground'>              {company && company.plan} Plan · {company && company.teamSize} team members;
            </p>;
          </div>;
        </div>;"
            <h1 className="text-3xl font-bold tracking-tight">{company && company.name} Workspace</h1>;"
            <p className="text-muted-foreground">;

interface WorkspaceHeaderProps {;
  company: Company;
}

export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;

  return ("
    <div className="space-y-6">;"
      <div className="flex items-center justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
            <img

            <img;
"
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}"
              className="max-h-10 max-w-10""
              loading="lazy"
            />
          </div>
          <div>
"
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}"
              className="max-h-10 max-w-10""
              loading="lazy"
            />
          </div>
          <div>

            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
            <p className='text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
              {company.plan} Plan · {company.teamSize} team members
"
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>"
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members;
            </p>
          </div>
        </div>
:src/components/enterprise/workspace/WorkspaceHeader.tsx

:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Notifications">

        "
        <div className="flex items-center gap-2">"
          <Button variant="outline" size="icon" aria-label="Notifications">"
            <Bell className="h-4 w-4" />
<div className='flex items-center gap-2'>
          <Button variant='outline' size='icon' aria-label='Notifications'>
            <Bell className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
          </Button>

          <Button variant="outline" size="icon" aria-label="Team members">

"
          <Button variant="outline" size="icon" aria-label="Team members">"
            <Users className="h-4 w-4" />
          </Button>"
          <Button variant="outline" size="icon" aria-label="Workspace settings">"
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>


      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
"
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>"
          <div className="text-2xl font-medium">8</div>
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Candidate Applications</div>"
          <div className="text-2xl font-medium">47</div>
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>"
          <div className="text-2xl font-medium">12</div>
        </div>
:src/components/enterprise/workspace/WorkspaceHeader.tsx
</div>
    </div>
  )
import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {;
  company: Company;
}
;
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
            <img;
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10";
              loading="lazy";
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company.plan} Plan · {company.teamSize} team members;
            </p>;
          </div>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="icon" aria-label="Notifications">;
            <Bell className="h-4 w-4" />;
          </Button>;

}          </Button>"
          <Button variant="outline" size="icon" aria-label="Team members">"
            <Users className="h-4 w-4" />
          </Button>"
          <Button variant="outline" size="icon" aria-label="Workspace settings">"
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>"
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>"
          <div className="text-2xl font-medium">8</div>
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Candidate Applications</div>"
          <div className="text-2xl font-medium">47</div>
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>"
          <div className="text-2xl font-medium">12</div>
        </div>
      </div>
    </div>;
  )
};

:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
}
              src={company && company.logoUrl || "/placeholder && placeholder.svg"}
              alt={company && company.name}"
              className="max-h-10 max-w-10""
              loading="lazy"
            />;
          </div>;
          <div>;"
            <h1 className="text-3xl font-bold tracking-tight">{company && company.name} Workspace</h1>;"
            <p className="text-muted-foreground">;
              {company && company.plan} Plan · {company && company.teamSize} team members;
            </p>;
          </div>;
        </div>;
'
        <div className='flex items-center gap-2'>;'
          <Button variant='outline' size='icon' aria-label='Notifications'>;'
            <Bell className='h-4 w-4' />;
          </Button>;'
          <Button variant='outline' size='icon' aria-label='Team members'>;'
            <Users className='h-4 w-4' />;
          </Button>;'
          <Button variant='outline' size='icon' aria-label='Workspace settings'>;'
            <Settings className='h-4 w-4' />;
          </Button>;
        </div>;
      </div>;
'
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>;'
        <div className='bg-card rounded-lg p-4 border border-border'>;'
          <div className='text-sm text-muted-foreground'>;
            Active Job Listings;
          </div>;'
          <div className='text-2xl font-medium'>8</div>;
        </div>;'
        <div className='bg-card rounded-lg p-4 border border-border'>;'
          <div className='text-sm text-muted-foreground'>;
            Candidate Applications;
          </div>;'
          <div className='text-2xl font-medium'>47</div>;
        </div>;'
        <div className='bg-card rounded-lg p-4 border border-border'>;'
          <div className='text-sm text-muted-foreground'>;
            Interviews Scheduled;
          </div>;'
          <div className='text-2xl font-medium'>12</div>        </div>;
      </div>;
    </div>;
  );
:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
}          </Button>;
          <Button variant="outline" size="icon" aria-label="Team members">;
            <Users className="h-4 w-4" />;
          </Button>;"
          <Button variant="outline" size="icon" aria-label="Workspace settings">;"
            <Settings className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;
          <div className="text-2xl font-medium">8</div>;
        </div>;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Candidate Applications</div>;"
          <div className="text-2xl font-medium">47</div>;
        </div>;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>;"
          <div className="text-2xl font-medium">12</div>;
        </div>;
      </div>;
    </div>;
  );
}

  );
}

export /**;
 * WorkspaceHeader - Function description;
 */
function WorkspaceHeader() {}
  return ("
    <div className="space - y-6">;"
      <div className="flex items - center justify - between">;"
        <div className="flex items - center gap - 4">;"
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center border border - border">;
            <img;"
              src={company.logo_url || "/placeholder.svg"}
              alt={company.name}"
              className="max - h-10 max - w-10";"
              loading="lazy";
            />;
          </div>;
          <div>;"
            <h1 className="text - 3xl font - bold tracking - tight">{company.name} Workspace</h1>;"
            <p className="text - muted - foreground">;
              {company.plan} Plan · {company.team_size} team members;
            </p>;
          </div>;
        </div>;'
        <div className='flex items - center gap - 2'>;'
          <Button variant='outline' size='icon' aria - label='Notifications'>;'
            <Bell className='h - 4 w - 4' />;
          </Button>;'
          <Button variant='outline' size='icon' aria - label='Team members'>;'
            <Users className='h - 4 w - 4' />;
          </Button>;'
          <Button variant='outline' size='icon' aria - label='Workspace settings'>;'
            <Settings className='h - 4 w - 4' />;
          </Button>;
        </div>;
      </div>;'
      <div className='grid grid - cols - 1 sm:grid - cols - 3 gap - 4'>;'
        <div className='bg - card rounded - lg p - 4 border border - border'>;'
          <div className='text - sm text - muted - foreground'>;
            Active Job Listings;
          </div>;'
          <div className='text - 2xl font - medium'>8</div>;
        </div>;'
        <div className='bg - card rounded - lg p - 4 border border - border'>;'
          <div className='text - sm text - muted - foreground'>;
            Candidate Applications;
          </div>;'
          <div className='text - 2xl font - medium'>47</div>;
        </div>;'
        <div className='bg - card rounded - lg p - 4 border border - border'>;'
          <div className='text - sm text - muted - foreground'>;
            Interviews Scheduled;
          </div>;'
          <div className='text - 2xl font - medium'>12</div>        </div>;
      </div>;
    </div>);
}          </Button>;"
          <Button variant="outline" size="icon" aria - label="Team members">;"
            <Users className="h - 4 w - 4" />;
          </Button>;"
          <Button variant="outline" size="icon" aria - label="Workspace settings">;"
            <Settings className="h - 4 w - 4" />;
          </Button>;
        </div>;
      </div>;"
      <div className="grid grid - cols - 1 sm: grid - cols - 3 gap - 4">;"
        <div className="bg - card rounded - lg p - 4 border border - border">;"
          <div className="text - sm text - muted - foreground">Active Job Listings</div>;"
          <div className="text - 2xl font - medium">8</div>;
        </div>;"
        <div className="bg - card rounded - lg p - 4 border border - border">;"
          <div className="text - sm text - muted - foreground">Candidate Applications</div>;"
          <div className="text - 2xl font - medium">47</div>;
        </div>;"
        <div className="bg - card rounded - lg p - 4 border border - border">;"
          <div className="text - sm text - muted - foreground">Interviews Scheduled</div>;"
          <div className="text - 2xl font - medium">12</div>;
        </div>;
      </div>;
    </div>);
}
:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
;

        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Interviews Scheduled
          </div>
          <div className='text-2xl font-medium'>12</div>
        </div>
      </div>
    </div>
  );
}
:src/components/enterprise/workspace/WorkspaceHeader.tsx
;'"
