<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
import React from 'react';

import React from 'react';
origin/cursor/automate-test-improve-and-merge-code-2533
=======

import React from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
  TableRow,
} from '@/components/ui/ table';
import { Badge } from '@/components/ui/ badge';
import { Switch } from '@/components/ui/ switch';
import { toast } from '@/hooks/ use - toast'; import { InfoIcon } from 'lucide-react';
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/ tooltip';
export /**
 * RoleManagement - Function description
 */
function RoleManagement() {
  // Mock team members data;
  const team_members = [;
    {

        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true,
      },
    },



  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    {
      id: 2
      name: 'Jamie Smith'
      email: 'jamie@example.com'
      role: 'Recruiter'
      permissions: {

        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },

    {
      id: 3
      name: 'Sam Williams'
      email: 'sam@example.com'
      role: 'Manager'
      permissions: {

        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false,
      },
    },

    {
      id: 4
      name: 'Taylor Brown'
      email: 'taylor@example.com'
      role: 'Viewer'
      permissions: {

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
    toast ({
      title: 'Permission updated',
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,
    });
  }
  const role_descriptions: Record < string, string> = {
    Admin: 'Full access to all features and settings',
    Recruiter: 'Can manage candidates and job postings',
    Manager: 'Can view candidates and create jobs',
    Viewer: 'Read - only access to candidates',

  }
import React from 'react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
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
=======

;
export function RoleManagement() {// Mock team members data;
  const teamMembers = [;
import React from 'react';
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from '@/components / ui / table';
import { Badge  } from '@/components / ui / badge';
import { Switch  } from '@/components / ui / switch';
import { toast } from '@/hooks / use - toast'; import { InfoIcon  } from 'lucide-react';
  Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components / ui / tooltip';
export /**;
 * RoleManagement - Function description;
 */;
function RoleManagement() {// Mock team members data;
  const team_members = [;
    {view_candidates: true,edit_candidates: true,create_jobs: true,manage_team: true,view_billing: true,manage_billing: true}},const roleDescriptions: Record<string string> = {"Admin": "Full access to all features and settings","Recruiter": "Can manage candidates and job postings","Manager": "Can view candidates and create jobs","Viewer": "Read-only access to candidates"},{id: 2;
      name: 'Jamie Smith';
      email: 'jamie@example.com';
      role: 'Recruiter';
      permissions: {view_candidates: true,edit_candidates: true,create_jobs: true,manage_team: false,view_billing: false,manage_billing: false}},{id: 3;
      name: 'Sam Williams';
      email: 'sam@example.com';
      role: 'Manager';
      permissions: {view_candidates: true,edit_candidates: false,create_jobs: true,manage_team: false,view_billing: true,manage_billing: false}},{id: 4;
      name: 'Taylor Brown';
      email: 'taylor@example.com';
      role: 'Viewer';
      permissions: {view_candidates: true,edit_candidates: false,create_jobs: false,manage_team: false,view_billing: false,manage_billing: false}}];
  const handlePermissionChange = (_memberId: number,permission: string,value: boolean) =>: any {    // In a real app, this would make an API call to update permissions;
    toast ({title: 'Permission updated',description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`})}
  const role_descriptions: Record < string, string> = {Admin: 'Full access to all features and settings',Recruiter: 'Can manage candidates and job postings',Manager: 'Can view candidates and create jobs',Viewer: 'Read - only access to candidates'}
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from '@/components/ui/table';
import { Badge  } from '@/components/ui/badge';
import { Switch  } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';import { InfoIcon  } from 'lucide-react';
  Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip';
export function RoleManagement() {// Mock team members data;
  const teamMembers = [;
    {id: 1,name: 'Alex Johnson',email: 'alex@example && example.com',role: 'Admin',permissions: {viewCandidates: true,editCandidates: true,createJobs: true,manageTeam: true,viewBilling: true,manageBilling: true}},{id: 2,name: 'Jamie Smith',email: 'jamie@example && example.com',role: 'Recruiter',permissions: {viewCandidates: true,editCandidates: true,createJobs: true,manageTeam: false,viewBilling: false,manageBilling: false}},{id: 3,name: 'Sam Williams',email: 'sam@example && example.com',role: 'Manager',permissions: {viewCandidates: true,editCandidates: false,createJobs: true,manageTeam: false,viewBilling: true,manageBilling: false}},{id: 4,name: 'Taylor Brown',email: 'taylor@example && example.com',role: 'Viewer',permissions: {viewCandidates: true,editCandidates: false,createJobs: false,manageTeam: false,viewBilling: false,manageBilling: false}}];const handlePermissionChange = (_memberId: number,permission: string,value: boolean;
  ) => {    // In a real app, this would make an API call to update permissions;
    toast({title: 'Permission updated',description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`})}const roleDescriptions: Record<string, string> = {Admin: 'Full access to all features and settings',Recruiter: 'Can manage candidates and job postings',Manager: 'Can view candidates and create jobs',Viewer: 'Read-only access to candidates'}import { toast  } from '@/hooks/use-toast';
import { InfoIcon  } from 'lucide-react';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip';
import {Table;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",import { Badge } from "@/components/ui/badge",Tooltip;
  TooltipContent;
  TooltipProvider;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
  TooltipTrigger} from "@/components/ui/tooltip",

export function RoleManagement() {
  // Mock team members data
  const teamMembers = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
import { toast } from '@/hooks/use-toast';import { InfoIcon } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;
} from '@/components/ui/tooltip';

export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: 'Alex Johnson',;
      email: 'alex@example && example.com',;
      role: 'Admin',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: true,;
        viewBilling: true,;
        manageBilling: true,;
      },;
    },;
    {;
      id: 2,;
      name: 'Jamie Smith',;
      email: 'jamie@example && example.com',;
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
      id: 3,;
      name: 'Sam Williams',;
      email: 'sam@example && example.com',;
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
      id: 4,;
      name: 'Taylor Brown',;
      email: 'taylor@example && example.com',;
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
    toast({;
      title: 'Permission updated',;
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,;
    });
  };

  const roleDescriptions: Record<string, string> = {;
    Admin: 'Full access to all features and settings',;
    Recruiter: 'Can manage candidates and job postings',;
    Manager: 'Can view candidates and create jobs',;
    Viewer: 'Read-only access to candidates',;
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
  return (


      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: true,
        viewBilling: true,
        manageBilling: true}},
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}},
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: true,
        manageTeam: false,
        viewBilling: true,
        manageBilling: false}},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: false,
        manageTeam: false,
        viewBilling: false,


<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx



  return (
    <div className="space-y-6">
      <div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx


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
              <p className='text-sm text-muted-foreground'>{description}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(roleDescriptions).map(([role, description]) => (
            <div key={role} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>

<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
            </div>
          ))}



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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx


        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view and manage billing information
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>


<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
            {teamMembers.map((member) => (
              <TableRow key={member.id}>



                <TableCell>
                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                  <select 
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={member.role}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Manager">Manager</option>
                    <option value="Viewer">Viewer</option>



                  </select>
                </TableCell>
                <TableCell className="text-center">
                  <Switch
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                    aria-label="View candidates"
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="Edit candidates"
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="Create jobs"
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="Manage team"
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="View billing"
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewBilling", checked)
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from "@/components/ui/tooltip",;
export function RoleManagement() {;
  // Mock team members data;
=======
  TooltipTrigger} from "@/components/ui/tooltip",export function RoleManagement() {// Mock team members data;
  const teamMembers  = null;return (id: 1,name: "Alex Johnson",email: "alex@example.com",role: "Admin",permissions: {viewCandidates: true,editCandidates: true,createJobs: true,manageTeam: true,viewBilling: true,manageBilling: true}},{id: 2,name: "Jamie Smith",email: "jamie@example.com",role: "Recruiter",permissions: {viewCandidates: true,editCandidates: true,createJobs: true,manageTeam: false,viewBilling: false,manageBilling: false}},{id: 3,name: "Sam Williams",email: "sam@example.com",role: "Manager",permissions: {viewCandidates: true,editCandidates: false,createJobs: true,manageTeam: false,viewBilling: true,manageBilling: false}},{id: 4,name: "Taylor Brown",email: "taylor@example.com",role: "Viewer",permissions: {viewCandidates: true,editCandidates: false,createJobs: false,manageTeam: false,viewBilling: false,return (<div className="space-y-6">;
      <div>;
        <h3 className='text-xl font-medium mb-4'>Role Permissions</h3>;
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>;
          {Object.entries(roleDescriptions).map(([role, description]) => (<div;
              key={role}
              className='bg-card rounded-lg p-4 border border-border';
            >;
              <div className='flex items-center gap-2 mb-2'>;
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>;
                  {role}
                </Badge>              </div>;
              <p className='text-sm text-muted-foreground'>{description}</p>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object.entries(roleDescriptions).map(([role, description]) => (<div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
import React from "react",Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table",import { Switch } from "@/components/ui/switch",import { toast } from "@/hooks/use-toast",Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip",export function RoleManagement() {// Mock team members data;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
  const teamMembers = [;
    {manageBilling: false}}],const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {// In a real app, this would make an API call to update permissions;
    toast({title: "Permission updated",description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})},const roleDescriptions: Record<string string> = {"Admin": "Full access to all features and settings","Recruiter": "Can manage candidates and job postings","Manager": "Can view candidates and create jobs","Viewer": "Read-only access to candidates"},return (<div className="space-y-6">;
      <div></div>;
          ))}
        </div>;
      </div>;
            </div>;
          ))}<div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can view and manage billing information;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {teamMembers.map((member) => (<TableRow key={member.id}>;
                <TableCell>;
                  <div className='font-medium'>{member.name}</div>;
                  <div className='text-sm text-muted-foreground'>;
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
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
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="View candidates";
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewCandidates", checked)}
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Edit candidates";
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "editCandidates", checked)}
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Create jobs";
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "createJobs", checked)}
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Manage team";
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "manageTeam", checked)}
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="View billing";
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked)Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table",Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip",export function RoleManagement() {// Mock team members data;
  const teamMembers = [;
    {id: 1,name: "Alex Johnson",email: "alex@example.com",role: "Admin",permissions: {viewCandidates: true,editCandidates: true,createJobs: true,manageTeam: true,viewBilling: true,manageBilling: true}},{id: 2,name: "Jamie Smith",email: "jamie@example.com",role: "Recruiter",permissions: {viewCandidates: true,editCandidates: true,createJobs: true,manageTeam: false,viewBilling: false,manageBilling: false}},{id: 3,name: "Sam Williams",email: "sam@example.com",role: "Manager",permissions: {viewCandidates: true,editCandidates: false,createJobs: true,manageTeam: false,viewBilling: true,manageBilling: false}},{id: 4,name: "Taylor Brown",email: "taylor@example.com",role: "Viewer",permissions: {viewCandidates: true,editCandidates: false,createJobs: false,manageTeam: false,viewBilling: false,manageBilling: false}}],const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {// In a real app, this would make an API call to update permissions;
    toast({title: "Permission updated",description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})},const roleDescriptions: Record<string string> = {"Admin": "Full access to all features and settings","Recruiter": "Can manage candidates and job postings","Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"}return (<div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object.entries(roleDescriptions).map(([role, description]) => (<div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
        </div>;
      </div>;<div className='rounded-md border'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead>Role</TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;

=======

              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
=======
              <TableHead>Role</TableHead>;<TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;<InfoIcon className='h-4 w-4 text-muted-foreground' />;</TooltipTrigger>;
                      <TooltipContent>Can view candidate profiles and applications;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;

=======

              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
=======
              </TableHead>;<TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;<InfoIcon className='h-4 w-4 text-muted-foreground' />;</TooltipTrigger>;
                      <TooltipContent>Can edit candidate information and status;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;

=======

              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
=======
              </TableHead>;<TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;<InfoIcon className='h-4 w-4 text-muted-foreground' />;</TooltipTrigger>;
                      <TooltipContent>Can create and publish job listings;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;

=======

              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
=======
              </TableHead>;<TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;<InfoIcon className='h-4 w-4 text-muted-foreground' />;</TooltipTrigger>;
                      <TooltipContent>Can add, edit, and remove team members;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;

=======

              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view and manage billing information;
=======
              </TableHead>;<TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;<InfoIcon className='h-4 w-4 text-muted-foreground' />;</TooltipTrigger>;
                      <TooltipContent>Can view and manage billing information;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {teamMembers && teamMembers.map(member => (              <TableRow key={member && member.id}>;
                <TableCell>;
                  <div className='font-medium'>{member && member.name}</div>;
                  <div className='text-sm text-muted-foreground'>;
                    {member && member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select;
                    className='w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';
                    defaultValue={member && member.role}>;
    <div className='space - y-6'>;
      <div>;
        <h3 className='text - xl font - medium mb - 4'>Role Permissions</h3>;
        <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6'>;
          {Object.entries (role_descriptions).map (([role, description]) => (<div;
              key={role}
              className='bg - card rounded - lg p - 4 border border - border';
            >;
              <div className='flex items - center gap - 2 mb - 2'>;
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>;
                  {role}
                </Badge>              </div>;
              <p className='text - sm text - muted - foreground'>{description}</p>;
            </div>))}
        </div>;
      </div>;
      <div className='rounded - md border'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Team Member</TableHead>;
              <TableHead > Role</TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>Can view and manage billing information;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {team_members.map (member => (              <TableRow key={member.id}>;
                <TableCell>;
                  <div className='font - medium'>{member.name}</div>;
                  <div className='text - sm text - muted - foreground'>;
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select;
                    className='w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring';
                    default_value={member.role}                  >;
                    <option value='Admin'>Admin</option>;
                    <option value='Recruiter'>Recruiter</option>;
                    <option value='Manager'>Manager</option>;
                    <option value='Viewer'>Viewer</option>;
                  </select>;
                </TableCell>;<TableCell className="text-center">;
                  <Switch;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                    aria-label="View candidates";



                    checked={member.permissions.viewCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id
                        'viewCandidates'
                        checked
                      )
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
                    aria-label='Edit candidates'
                    checked={member.permissions.editCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id
                        'editCandidates'
                        checked
                      )
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
=======
                    aria-label="View candidates";checked={member.permissions.viewCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member.id;
                        'viewCandidates';
                        checked;
                      )}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch;
                    aria-label='Edit candidates';
                    checked={member.permissions.editCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member.id;
                        'editCandidates';
                        checked;
                      )}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch;
                    aria-label='Create jobs';
                    checked={member.permissions.createJobs}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member.id, 'createJobs', checked)}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch;
                    aria-label='Manage team';
                    checked={member.permissions.manageTeam}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member.id, 'manageTeam', checked)}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch;
                    aria-label='View billing';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
                    checked={member && member.permissions.viewCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id,'viewCandidates',checked;
                      )}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch;
                    aria-label='Edit candidates';
                    checked={member && member.permissions.editCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id,'editCandidates',checked;
                      )}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch;
                    aria-label='Create jobs';
                    checked={member && member.permissions.createJobs}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id, 'createJobs', checked)}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch;
                    aria-label='Manage team';
                    checked={member && member.permissions.manageTeam}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id, 'manageTeam', checked)}                  />;
                </TableCell>;
                <TableCell className='text-center'>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
                  <Switch
                    aria-label='View billing'

                    checked={member.permissions.viewBilling}


=======
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
                    aria-label='View billing'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
      </div>;
    </div>;
  );
};

<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx

                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}

          </TableBody>;
=======
                  <Switch;
                    aria-label='View billing';
                    checked={member.permissions.viewBilling}</div>;
    </div>;
  )}checked={member.permissions.viewBilling}onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked)}
                  />;
                </TableCell>;
              </TableRow>;
            ))}</TableBody>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
        </Table>;
      </div>;
    </div>;
  )}<TableCell className='text - center'>;
                  <Switch;
                    aria - label='View candidates';
                    checked={member.permissions.view_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id,'view_candidates',checked)}                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='Edit candidates';
                    checked={member.permissions.edit_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id,'edit_candidates',checked)}                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='Create jobs';
                    checked={member.permissions.create_jobs}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id, 'create_jobs', checked)}                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='Manage team';
                    checked={member.permissions.manage_team}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id, 'manage_team', checked)}                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='View billing';
                    checked={member.permissions.view_billing}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id, 'view_billing', checked)}                  />;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
    </div>);
}
;

=======
                    checked={member.permissions.viewBilling}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
          </TableBody>
        </Table>
      </div>
    </div>
  );
<<<<<<< HEAD:src_backup/components/enterprise/admin/RoleManagement.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </div>)}</TableBody>;
        </Table>;
      </div>;
    </div>;
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/admin/RoleManagement.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/admin/RoleManagement.tsx
