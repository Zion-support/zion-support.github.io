<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
import React from 'react';
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
import React from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import React from 'react';
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
import {
=======
export function RoleManagement() {};
  // Mock team members data;
  const teamMembers = []
import React from 'react';
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Switch } from "@/components/ui/switch",
import { toast } from "@/hooks/use-toast",
import { InfoIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from "@/components/ui/tooltip",

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  TableRow,
} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
=======
  TableRow,';
} from '@/components / ui / table';'
import { Badge } from '@/components / ui / badge';'
import { Switch } from '@/components / ui / switch';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
import { toast } from '@/hooks / use - toast'; import { InfoIcon } from 'lucide-react';
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,'
} from '@/components / ui / tooltip';
export /**;
 * RoleManagement - Function description;
 */
function RoleManagement() {}
  // Mock team members data;
  const team_members = [;
    {}
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true,
      },
    },

<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
    {
      id: 2
      name: 'Jamie Smith'
      email: 'jamie@example.com'
=======
    {}
      id: 2'
      name: 'Jamie Smith''
      email: 'jamie@example.com''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
      role: 'Recruiter'
      permissions: {}
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },

    {}
      id: 3'
      name: 'Sam Williams''
      email: 'sam@example.com''
      role: 'Manager'
      permissions: {}
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false,
      },
    },

    {}
      id: 4'
      name: 'Taylor Brown''
      email: 'taylor@example.com''
      role: 'Viewer'
      permissions: {}
        view_candidates: true,
        edit_candidates: false,
        create_jobs: false,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },
  ];
  const handlePermissionChange = (
    _memberId: number,
    permission: string,
    value: boolean) =>: any {    // In a real app, this would make an API call to update permissions;
    toast ({'
      title: 'Permission updated','
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,
    });
  }
  const role_descriptions: Record < string, string> = {'
    Admin: 'Full access to all features and settings','
    Recruiter: 'Can manage candidates and job postings','
    Manager: 'Can view candidates and create jobs','
    Viewer: 'Read - only access to candidates',

  }'
import React from 'react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { InfoIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,;
} from '@/components/ui/tooltip';

import React from "react";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { InfoIcon } from 'lucide-react'
import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from "@/components/ui/tooltip",
=======
  TableRow,;'
} from '@/components/ui/table';'
import { Badge } from '@/components/ui/badge';'
import { Switch } from '@/components/ui/switch';'
import { toast } from '@/hooks/use-toast';import { InfoIcon } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;'
} from '@/components/ui/tooltip';

export function RoleManagement() { return null; }
      },;
    },;
    {;
      id: 2,;'
      name: 'Jamie Smith',;'
      email: 'jamie@example && example.com',;'
      role: 'Recruiter',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false,;
      },;
    },;
    {;
      id: 3,;'
      name: 'Sam Williams',;'
      email: 'sam@example && example.com',;'
      role: 'Manager',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false,;
      },;
    },;
    {;
      id: 4,;'
      name: 'Taylor Brown',;'
      email: 'taylor@example && example.com',;'
      role: 'Viewer',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false,;
      },;
    },;
  ];

  const handlePermissionChange = (;
    _memberId: number,;
    permission: string,;
    value: boolean;
  ) => {    // In a real app, this would make an API call to update permissions;
    toast({;'
      title: 'Permission updated',;'`
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,;
    });
  };

  const roleDescriptions: Record<string, string> = {;'
    Admin: 'Full access to all features and settings',;'
    Recruiter: 'Can manage candidates and job postings',;'
    Manager: 'Can view candidates and create jobs',;'
    Viewer: 'Read-only access to candidates',;
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx

export function RoleManagement() {
  // Mock team members data
  const teamMembers = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      id: 1,
      name: "Alex Johnson","
      email: "alex@example.com","
      role: "Admin",
      permissions: {}
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: true,
        viewBilling: true,
        manageBilling: true}},
    {}
      id: 2,"
      name: "Jamie Smith","
      email: "jamie@example.com","
      role: "Recruiter",
      permissions: {}
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}},
    {}
      id: 3,"
      name: "Sam Williams","
      email: "sam@example.com","
      role: "Manager",
      permissions: {}
        viewCandidates: true,
        editCandidates: false,
        createJobs: true,
        manageTeam: false,
        viewBilling: true,
        manageBilling: false}},
    {}
      id: 4,"
      name: "Taylor Brown","
      email: "taylor@example.com","
      role: "Viewer",
      permissions: {}
        viewCandidates: true,
        editCandidates: false,
        createJobs: false,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}}],

  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
  },

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},
<<<<<<< HEAD
=======


<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx

  return ("
    <div className="space-y-6">
      <div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
=======
        <h3 className='text-xl font-medium mb-4'>Role Permissions</h3>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
          {Object.entries(roleDescriptions).map(([role, description]) => (
            <div
              key={role}
              className='bg-card rounded-lg p-4 border border-border'
            >
              <div className='flex items-center gap-2 mb-2'>
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>
                  {role}
                </Badge>              </div>
              <p className='text-sm text-muted-foreground'>{description}</p>        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (
    <div className="space-y-6">
      <div>

=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
"
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(roleDescriptions).map(([role, description]) => ("
            <div key={role} className="bg-card rounded-lg p-4 border border-border">"
              <div className="flex items-center gap-2 mb-2">"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>
              </div>"
              <p className="text-sm text-muted-foreground">{description}</p>
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
          ))}
<<<<<<< HEAD
        </div>
      </div>
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      <div className="rounded-md border">
=======

import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Switch } from "@/components/ui/switch",
import { toast } from "@/hooks/use-toast",
import { InfoIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from "@/components/ui/tooltip",

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
        manageBilling: false}}],

  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
  },

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},

  return (
    <div className="space-y-6">
      <div>
            </div>
          ))}
        </div>
      </div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======

            </div>
          ))}


"
      <div className="rounded-md border">


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead>Role</TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
              <TableHead>Role</TableHead>'
              <TableHead className='text-center'>'
                <div className='flex items-center justify-center gap-1'>
                  View Candidates;
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>'
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
              </TableHead>'
              <TableHead className='text-center'>'
                <div className='flex items-center justify-center gap-1'>
                  Edit Candidates;
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>'
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
              </TableHead>'
              <TableHead className='text-center'>'
                <div className='flex items-center justify-center gap-1'>
                  Create Jobs;
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>'
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
              </TableHead>'
              <TableHead className='text-center'>'
                <div className='flex items-center justify-center gap-1'>
                  Manage Team;
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>'
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
              </TableHead>'
              <TableHead className='text-center'>'
                <div className='flex items-center justify-center gap-1'>
                  Billing Access;
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>'
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view and manage billing information;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD
<<<<<<< HEAD
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
=======

<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
            {teamMembers.map((member) => (
              <TableRow key={member.id}>

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                <TableCell>
                  <div className='font-medium'>{member.name}</div>
=======
                <TableCell>'
                  <div className='font-medium'>{member.name}</div>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                  <div className='text-sm text-muted-foreground'>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>

<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                  <select 
=======
                  <select "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={member.role}
                  >"
                    <option value="Admin">Admin</option>"
                    <option value="Recruiter">Recruiter</option>"
                    <option value="Manager">Manager</option>"
                    <option value="Viewer">Viewer</option>

<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                  </select>
                </TableCell>"
                <TableCell className="text-center">
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                  <Switch
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
=======
                  <Switch;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                    aria-label="View candidates"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="Edit candidates"
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="Create jobs"
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="Manage team"
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="View billing"
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "viewBilling", checked)"
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { Switch } from "@/components/ui/switch",;"
import { toast } from "@/hooks/use-toast",;'
import { InfoIcon } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;"
  TooltipTrigger} from "@/components/ui/tooltip",;
export function RoleManagement() { return null; }
        manageBilling: true}},;
    {;
      id: 2,;"
      name: "Jamie Smith",;"
      email: "jamie@example.com",;"
      role: "Recruiter",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}},;
    {;
      id: 3,;"
      name: "Sam Williams",;"
      email: "sam@example.com",;"
      role: "Manager",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false}},;
    {;
      id: 4,;"
      name: "Taylor Brown",;"
      email: "taylor@example.com",;"
      role: "Viewer",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}}],;
  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
    toast({;
      title: "Permission updated",,
  description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
=======
    toast({;"
      title: "Permission updated",;"`
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
  },;
  const roleDescriptions: Record<string string> = {;"
    "Admin": "Full access to all features and settings",;"
    "Recruiter": "Can manage candidates and job postings",;"
    "Manager": "Can view candidates and create jobs";"
    "Viewer": "Read-only access to candidates"};
  return (;"
    <div className="space-y-6">;
      <div>;"
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object.entries(roleDescriptions).map(([role, description]) => (;"
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;"
              <div className="flex items-center gap-2 mb-2">;"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;"
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
        </div>;
      </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
      <div className="rounded-md border">;
=======
'
      <div className='rounded-md border'>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead>Role</TableHead>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              <TableHead className='text-center'>;
=======
              <TableHead>Role</TableHead>;'
              <TableHead className='text-center'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                <div className='flex items-center justify-center gap-1'>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
                      <TooltipTrigger>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              <TableHead className='text-center'>;
=======
              </TableHead>;'
              <TableHead className='text-center'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                <div className='flex items-center justify-center gap-1'>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
                      <TooltipTrigger>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              <TableHead className='text-center'>;
=======
              </TableHead>;'
              <TableHead className='text-center'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                <div className='flex items-center justify-center gap-1'>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
                      <TooltipTrigger>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              <TableHead className='text-center'>;
=======
              </TableHead>;'
              <TableHead className='text-center'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                <div className='flex items-center justify-center gap-1'>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
                      <TooltipTrigger>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              <TableHead className='text-center'>;
=======
              </TableHead>;'
              <TableHead className='text-center'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                <div className='flex items-center justify-center gap-1'>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
                      <TooltipTrigger>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <TooltipContent>;
                        Can view and manage billing information;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font-medium">{member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
=======
            {teamMembers && teamMembers.map(member => (              <TableRow key={member && member.id}>;
                <TableCell>;'
                  <div className='font-medium'>{member && member.name}</div>;'
                  <div className='text-sm text-muted-foreground'>;
                    {member && member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select'
                    className='w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                    defaultValue={member && member.role}>;'
    <div className='space - y-6'>;
      <div>;'
        <h3 className='text - xl font - medium mb - 4'>Role Permissions</h3>;'
        <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6'>;
          {Object.entries (role_descriptions).map (([role, description]) => (
            <div;
              key={role}'
              className='bg - card rounded - lg p - 4 border border - border';
            >;'
              <div className='flex items - center gap - 2 mb - 2'>;'
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>;
                  {role}
                </Badge>              </div>;'
              <p className='text - sm text - muted - foreground'>{description}</p>;
            </div>))}
        </div>;
      </div>;'
      <div className='rounded - md border'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Team Member</TableHead>;
              <TableHead > Role</TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view and manage billing information;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {team_members.map (member => (              <TableRow key={member.id}>;
                <TableCell>;'
                  <div className='font - medium'>{member.name}</div>;'
                  <div className='text - sm text - muted - foreground'>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                  <select;
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
                    defaultValue={member.role}
                  >;
                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;
=======
                  <select;'
                    className='w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring';
                    default_value={member.role}                  >;'
                    <option value='Admin'>Admin</option>;'
                    <option value='Recruiter'>Recruiter</option>;'
                    <option value='Manager'>Manager</option>;'
                    <option value='Viewer'>Viewer</option>;
                  </select>;
                </TableCell>;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                <TableCell className="text-center">;
                  <Switch;"
                    aria-label="View candidates";
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewCandidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Edit candidates";
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "editCandidates", checked);
                    }
                  />;
                </TableCell>;
<<<<<<< HEAD
                <TableCell className="text-center">;
=======
                <TableCell className='text-center'>;
                  <Switch
                    aria-label='Edit candidates'
                    checked={member && member.permissions.editCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(;
                        member && member.id,;
                        'editCandidates',;
                        checked;
                      );
                    }                  />;
                </TableCell>;
                <TableCell className='text-center'>;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id'
                        'viewCandidates'
                        checked;
                      )
                    }                  />
                </TableCell>'
                <TableCell className='text-center'>
                  <Switch'
                    aria-label='Edit candidates'
                    checked={member.permissions.editCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id'
                        'editCandidates'
                        checked;
                      )
                    }                  />
                </TableCell>'
                <TableCell className='text-center'>
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <Switch
                    aria-label='Create jobs'
                    checked={member.permissions.createJobs}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'createJobs', checked)
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
                    aria-label='Manage team'
                    checked={member.permissions.manageTeam}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'manageTeam', checked)
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
                    aria-label='View billing'      </div>;
=======

=======
                    checked={member && member.permissions.viewCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(;
                        member && member.id,;'
                        'viewCandidates',;
                        checked;
                      );
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
                  <Switch'
                    aria-label='Edit candidates'
                    checked={member && member.permissions.editCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(;
                        member && member.id,;'
                        'editCandidates',;
                        checked;
                      );
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
                  <Switch'
                    aria-label='Create jobs'
                    checked={member && member.permissions.createJobs}
                    onCheckedChange={checked =>;'
                      handlePermissionChange(member && member.id, 'createJobs', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
                  <Switch'
                    aria-label='Manage team'
                    checked={member && member.permissions.manageTeam}
                    onCheckedChange={checked =>;'
                      handlePermissionChange(member && member.id, 'manageTeam', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
                  <Switch'
                    aria-label='View billing'

                    checked={member.permissions.viewBilling}


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
      </div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </div>;
  )
};

<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
                    onCheckedChange={(checked) =>;
=======
                    onCheckedChange={(checked) =>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx

<<<<<<< HEAD
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );

}



'
                <TableCell className='text - center'>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Switch;
                    aria-label="Create jobs";
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "createJobs", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Manage team";
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "manageTeam", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
<<<<<<< HEAD
                    aria-label="View billing";
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
=======
=======
                  <Switch;'
                    aria - label='View candidates';
                    checked={member.permissions.view_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (
                        member.id,'
                        'view_candidates',
                        checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='Edit candidates';
                    checked={member.permissions.edit_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (
                        member.id,'
                        'edit_candidates',
                        checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
                    aria - label='Create jobs';
                    checked={member.permissions.create_jobs}
                    onCheckedChange={checked =>;'
                      handlePermissionChange (member.id, 'create_jobs', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='Manage team';
                    checked={member.permissions.manage_team}
                    onCheckedChange={checked =>;'
                      handlePermissionChange (member.id, 'manage_team', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='View billing';
                    checked={member.permissions.view_billing}
                    onCheckedChange={checked =>;'
                      handlePermissionChange (member.id, 'view_billing', checked);
                    }                  />;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
;
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
=======
                    checked={member.permissions.viewBilling}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
          </TableBody>
        </Table>
      </div>
    </div>
  );
<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/RoleManagement.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/RoleManagement.tsx
