<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available
  const { company } = useCompanyWorkspace(),
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';

<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
import React from "react",
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available
  const { company } = useCompanyWorkspace();
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
  return (
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";

export function AdminHeader() { // const { user  } = useAuth(), // Unused but available
  const { company  } = useCompanyWorkspace(),

<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======





>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your company's account, team members, and subscription
          </p>
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
        <div className="flex items-center gap-2">
=======

        </div>
<<<<<<< HEAD
        <div className="flex items-center gap-2">

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
=======
=======

        </div>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' className='gap-2'>
            <Settings className='h-4 w-4' />
            Settings
          </Button>
          <Button variant='outline' size='sm' className='gap-2'>
            <Download className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
            Export Data
          </Button>
        </div>
      </div>
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>

<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
        </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>
        </div>
      </div>

<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img

<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
=======
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
              className="max-h-10 max-w-10"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              loading="lazy"
            />
          </div>
          <div>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>
        </div>
      </div>
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======
      


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
=======

<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
              className="max-h-10 max-w-10"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              loading="lazy"
            />
          </div>
          <div>
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || "loading..."}
<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Subscription Plan</div>
          <div className='text-xl font-medium'>
            {company?.plan |'Enterprise'}
          </div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Team Members</div>
          <div className='text-xl font-medium'>
            {company?.teamSize |'Loading...'} / {company?.teamLimit |'∞'}
          </div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Billing Cycle</div>
          <div className='text-xl font-medium'>
            {company?.billingCycle |'Annual'}
          </div>
        </div>
      </div>
      <div className='bg-muted/50 rounded-lg p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center'>
            <img
              src={company?.logoUrl |'/placeholder.svg'}
              alt={company?.name |'Company'}
              className='max-h-10 max-w-10'
              loading='lazy'            />
          </div>
          <div>
            <h2 className='font-medium'>{company?.name |'Company Name'}</h2>
            <p className='text-sm text-muted-foreground'>
              Workspace URL: {company?.workspaceUrl || 'loading...'}
origin/cursor/automate-test-improve-and-merge-code-2533
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx


<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",;
export function AdminHeader() {;
  // const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace();
  return (;
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className="flex items-center gap-2">;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
<<<<<<< HEAD
        <div className='flex items-center gap-2'>;
          <Button variant='outline' size='sm' className='gap-2'>;
            <Settings className='h-4 w-4' />;
            Settings;
          </Button>;
          <Button variant='outline' size='sm' className='gap-2'>;
            <Download className='h-4 w-4' />            Export Data;
          </Button>;
        </div>;
      </div>        <div className="flex items-center gap-2">;
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
          <Button variant="outline" size="sm" className="gap-2">;
=======
        <div className="flex items-center gap-2">;          <Button variant="outline" size="sm" className="gap-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Settings className="h-4 w-4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
<<<<<<< HEAD
            <Download className="h-4 w-4" />;
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
import React from 'react';
import { Button } from '@/components / ui / button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';
export /**
 * AdminHeader - Function description
 */
function AdminHeader() {
  // const { user } = use_auth (); // Unused but available;
  const { company } = useCompanyWorkspace ();
  return (
    <div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
        <div>;
          <h1 className='text - 3xl font - bold tracking - tight'>;
            Enterprise Admin Dashboard;
          </h1>;
          <p className='text - muted - foreground mt - 1'>;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className='flex items - center gap - 2'>;
          <Button variant='outline' size='sm' className='gap - 2'>;
            <Settings className='h - 4 w - 4' />;
            Settings;
          </Button>;
          <Button variant='outline' size='sm' className='gap - 2'>;
            <Download className='h - 4 w - 4' />            Export Data;
          </Button>;
        </div>;
      </div>        <div className="flex items - center gap - 2">;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Settings className="h - 4 w - 4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Download className="h - 4 w - 4" />;
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
            Export Data;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <Download className="h-4 w-4" />;            Export Data;
          </Button>;
        </div>;
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Subscription Plan</div>;
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>;
<<<<<<< HEAD
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Team Members</div>;
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>;
        </div>;
      </div>;
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
              className="max-h-10 max-w-10";
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx

  );
}

      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Subscription Plan</div>;
          <div className='text - xl font - medium'>;
            {company?.plan || 'Enterprise'}
          </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Team Members</div>;
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>;
        </div>;
      </div>;
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
<<<<<<< HEAD
              className="max - h-10 max - w-10";
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
              loading="lazy";
            />;
          </div>;
          <div>;
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace URL: {company?.workspaceUrl || "loading..."}
            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    </div>;
  );
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;
            <p className="text - sm text - muted - foreground">;
              Workspace URL: {company?.workspace_url || "loading..."}
=======
              className="max-h-10 max-w-10";              loading="lazy";
            />;
          </div>;
          <div>;
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace URL: {company?.workspaceUrl || "loading..."}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
<<<<<<< HEAD
    </div>);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </div>;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
;
<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/AdminHeader.tsx
