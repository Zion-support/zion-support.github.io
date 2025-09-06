<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { type Company } from './CompanyDashboard';
=======
import React from 'react';'
import { Button } from '@/components/ui/button';'
import { type Company } from './CompanyDashboard';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
import { Bell, Users, Settings } from 'lucide-react';
<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD
interface WorkspaceHeaderProps {;
  company: Company;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx

<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
=======
import React from "react","
import { Button } from "@/components/ui/button","
import { type Company } from "./CompanyDashboard",'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
import { Bell, Users, Settings } from 'lucide-react'

interface WorkspaceHeaderProps {};
  company: Company;
}

<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

              src={company.logoUrl || '/placeholder.svg'}

              alt={company.name}
              className='max-h-10 max-w-10'
=======



export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {}
  return (';
    <div className='space-y-6'>;'
      <div className='flex items-center justify-between'>;'
        <div className='flex items-center gap-4'>;'
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border'>;
            <img;
'
              src={company.logoUrl || '/placeholder.svg'}


              alt={company.name}'
              className='max-h-10 max-w-10''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
              loading='lazy'            />
          </div>
          <div>'
            <h1 className='text-3xl font-bold tracking-tight'>
<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
              {company.name} Workspace
            </h1>
<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD
            <p className='text-muted-foreground'>              {company.plan} Plan · {company.teamSize} team members
=======
              {company.name} Workspace;
            </h1>'
            <p className='text-muted-foreground'>              {company.plan} Plan · {company.teamSize} team members;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
            </p>
          </div>
        </div>"
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>"
            <p className="text-muted-foreground">
<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx

<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
=======
"
import React from "react";"
import { Button } from "@/components/ui/button";"
import { type Company } from "./CompanyDashboard";'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
        </div>;
            <h1 className="text - 3xl font - bold tracking-tight">{company.name} Workspace</h1>;
            <p className="text - muted-foreground">;
interface WorkspaceHeaderProps {
=======
        </div>;"
            <h1 className="text - 3xl font - bold tracking - tight">{company.name} Workspace</h1>;"
            <p className="text - muted - foreground">;
interface WorkspaceHeaderProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
            <img

<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
=======
            <img;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
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
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
            <p className='text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
              {company.plan} Plan · {company.teamSize} team members
=======
"
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>"
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
            </p>
          </div>
        </div>
<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Notifications">
=======


        "
        <div className="flex items-center gap-2">"
          <Button variant="outline" size="icon" aria-label="Notifications">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
            <Bell className="h-4 w-4" />
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
<div className='flex items-center gap-2'>
          <Button variant='outline' size='icon' aria-label='Notifications'>
            <Bell className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
          </Button>
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD


<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <Button variant="outline" size="icon" aria-label="Team members">
=======

"
          <Button variant="outline" size="icon" aria-label="Team members">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
            <Users className="h-4 w-4" />
          </Button>"
          <Button variant="outline" size="icon" aria-label="Workspace settings">"
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      
=======

      

<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
=======
"
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
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
<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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

<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
}
=======

}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
}          </Button>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button variant="outline" size="icon" aria-label="Team members">;
=======
}          </Button>;"
          <Button variant="outline" size="icon" aria-label="Team members">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
            <Users className="h-4 w-4" />;
          </Button>;"
          <Button variant="outline" size="icon" aria-label="Workspace settings">;"
            <Settings className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;
=======
"
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx

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
<<<<<<< HEAD:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
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
<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/WorkspaceHeader.tsx
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/WorkspaceHeader.tsx
