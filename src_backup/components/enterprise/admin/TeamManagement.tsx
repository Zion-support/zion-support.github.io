<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import {
=======
const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx

import React, { useState } from "react";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Badge } from "@/components/ui/badge";
import { Trash, Mail, UserPlus } from 'lucide-react'
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  // Mock team members data
  const teamMembers = null;
import React, { useState } from 'react'; import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Trash, Mail, UserPlus } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
  DialogTrigger} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false)
  const [newMemberEmail, setNewMemberEmail] = useState('')
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
      lastActive: "2 hours ago"},
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      status: "active",
      lastActive: "Yesterday"},
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      status: "pending",
      lastActive: "Never"},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
  const handleAddMember = () => {    // In a real app, this would make an API call to add the member
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
  const handleAddMember = () => {
const handleAddMember = () => {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx

    // In a real app, this would make an API call to add the member
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    if (!newMemberEmail) {
      toast({

        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),

      return
    }
    toast({

      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,

    })
    setNewMemberEmail('')
    setIsAddingMember(false)
  }
  const handleRemoveMember = (_memberId: number,) => {
    // In a real app, this would make an API call to remove the member
    toast({
      title: 'Team member removed'
      description: 'The team member has been removed from your workspace.'
    })
  }
  const handleResendInvite = (memberEmail: string,) => {
    // In a real app, this would make an API call to resend the invitation
    toast({
      title: 'Invitation resent'
      description: `A new invitation has been sent to ${memberEmail}`
    })
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
=======
  TableRow,
} from '@/components / ui / table';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Badge } from "@/components/ui/badge",
import { Trash, Mail, UserPlus } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false),
  const [newMemberEmail, setNewMemberEmail] = useState(""),
=======
  DialogTrigger,
} from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { Trash, Mail, UserPlus } from 'lucide-react';
import { toast } from '@/hooks / use - toast';
  DialogTrigger} from "@/components / ui / dialog",
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Badge  } from '@/components / ui / badge';
import { toast  } from '@/hooks / use - toast';
export /**
 * TeamManagement - Function description
 */
function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState (false);
  const [newMemberEmail, setNewMemberEmail] = useState ('');
  // Mock team members data;
  const team_members = [;
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      role: 'Admin',
      status: 'active',
      last_active: '2 hours ago',
    },
    {
      id: 2,
      name: 'Jamie Smith',
      email: 'jamie@example.com',
      role: 'Recruiter',
      status: 'active',
      last_active: 'Yesterday',
    },
    {
      id: 3,
      name: 'Sam Williams',
      email: 'sam@example.com',
      role: 'Manager',
      status: 'pending',
      last_active: 'Never',
    },
    {
      id: 4,
      name: 'Taylor Brown',
      email: 'taylor@example.com',
      role: 'Viewer',
      status: 'active',
      last_active: '3 days ago',
    },
  ];
  const handleAddMember = () =>: any {
    // In a real app, this would make an API call to add the member;
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Email required',
        description: 'Please enter an email address for the new team member.',
        variant: 'destructive',
      });
      return;
    }
    toast ({
      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,
    });
    setNewMemberEmail ('');
    setIsAddingMember (false);
  }
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
  const handleRemoveMember = (_memberId: number, ) =>: any {
    // In a real app, this would make an API call to remove the member;
    toast ({
      title: 'Team member removed',
      description: 'The team member has been removed from your workspace.',
    });
  }
  const handleResendInvite = (member_email: string, ) =>: any {
    // In a real app, this would make an API call to resend the invitation;
    toast ({
      title: 'Invitation resent',
      description: `A new invitation has been sent to ${member_email}`,
    });
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
      lastActive: "2 hours ago"},
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      status: "active",
      lastActive: "Yesterday"},
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      status: "pending",
      lastActive: "Never"},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

<<<<<<< HEAD
  const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return
    }

    toast({
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      title: "Invitation sent",
      description: `An invitation has been sent to ${newMemberEmail}`}),

    setNewMemberEmail(""),
    setIsAddingMember(false)
  },

  const handleRemoveMember = (_memberId: number) => {
    // In a real app, this would make an API call to remove the member
    toast({
      title: "Team member removed",
      description: "The team member has been removed from your workspace."})
  },

  const handleResendInvite = (memberEmail: string) => {
    // In a real app, this would make an API call to resend the invitation
    toast({
      title: "Invitation resent",
      description: `A new invitation has been sent to ${memberEmail}`})
  },

<<<<<<< HEAD
=======



=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Team Members</h3>
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              Add Team Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>
                Send an invitation to join your workspace. They'll receive an email with instructions.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
                  className="col-span-3"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <select
                  id="role"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="admin">Admin</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="manager">Manager</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddMember}>Send Invitation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {member.name
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {member.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                  <Badge
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    variant={member.status === "active" ? "default" : "outline"}
                  >
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>{member.lastActive}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {member.status === "pending" ? (
                      <Button
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        Resend
                      </Button>
                    ) : (
                      <Button
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
import React, { useState } from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { Trash, Mail, UserPlus } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false),;
  const [newMemberEmail, setNewMemberEmail] = useState(""),;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;
      email: "alex@example.com",;
      role: "Admin",;
      status: "active",;
      lastActive: "2 hours ago"},;
    {;
      id: 2,;
      name: "Jamie Smith",;
      email: "jamie@example.com",;
      role: "Recruiter",;
      status: "active",;
      lastActive: "Yesterday"},;
    {;
      id: 3,;
      name: "Sam Williams",;
      email: "sam@example.com",;
      role: "Manager",;
      status: "pending",;
      lastActive: "Never"},;
    {;
      id: 4,;
      name: "Taylor Brown",;
      email: "taylor@example.com",;
      role: "Viewer",;
      status: "active",;
      lastActive: "3 days ago"}],;
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;
<<<<<<< HEAD
        title: "Email required",;
        description: "Please enter an email address for the new team member.",;
        variant: "destructive"}),;
=======
        title: 'Email required',,
  description: 'Please enter an email address for the new team member.',;
        variant: 'destructive',;
      });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return;
    }
;
    toast({;
<<<<<<< HEAD
      title: "Invitation sent",;
      description: `An invitation has been sent to ${newMemberEmail}`}),;
    setNewMemberEmail(""),;
    setIsAddingMember(false);
  },;
  const handleRemoveMember = (_memberId: number) => {;
    // In a real app, this would make an API call to remove the member;
    toast({;
      title: "Team member removed",;
      description: "The team member has been removed from your workspace."});
  },;
  const handleResendInvite = (memberEmail: string) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title: "Invitation resent";
      description: `A new invitation has been sent to ${memberEmail}`});
  };
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Team Members</h3>;
=======
      title: 'Invitation sent',,
  description: `An invitation has been sent to ${newMemberEmail}`,;
    });

    setNewMemberEmail('');
    setIsAddingMember(false)
};

  const handleRemoveMember = (_memberId: number,) => {;
    // In a real app, this would make an API call to remove the member;
    toast({;
      title: 'Team member removed',,
  description: 'The team member has been removed from your workspace.',;
    })
};

  const handleResendInvite = (memberEmail: string,) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title: 'Invitation resent',,
  description: `A new invitation has been sent to ${memberEmail}`,;
    })
};

  return (

    <div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - xl font - medium'>Team Members</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger asChild>;
            <Button className="gap-2">;
              <UserPlus className="h-4 w-4" />;
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogTitle>Add Team Member</DialogTitle>;
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="grid gap-4 py-4">;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="email" className="text-right">;
                  Email;
                </Label>;
                <Input;
                  id="email";
                  type="email";
                  placeholder="colleague@company.com";
                  className="col-span-3";
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />;
              </div>;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="role" className="text-right">;
                  Role;
                </Label>;
                <select;
                  id="role";
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
                >;
                  <option value="admin">Admin</option>;
                  <option value="recruiter">Recruiter</option>;
                  <option value="manager">Manager</option>;
                  <option value="viewer">Viewer</option>;
                </select>;
              </div>;
            </div>;
            <DialogFooter>;
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Name</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Last Active</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="flex items-center gap-2">;
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">;
                      <span className="text-sm font-medium">;
                        {member.name;
                          .split(" ");
                          .map((n) => n[0]);
                          .join("")}
                      </span>;
                    </div>;
                    <div>;
                      <div className="font-medium">{member.name}</div>;
                      <div className="text-sm text-muted-foreground">;
                        {member.email}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" : "outline"}
                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;
                <TableCell>{member.lastActive}</TableCell>;
                <TableCell className="text-right">;
                  <div className="flex justify-end gap-2">;
                    {member.status === "pending" ? (;
                      <Button;
                        variant="ghost";
                        size="sm";
                        onClick={() => handleResendInvite(member.email)}
                      >;
                        <Mail className="h-4 w-4 mr-1" />;
                        Resend;
                      </Button>;
                    ) : (;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-destructive hover:text-destructive";
                        onClick={() => handleRemoveMember(member.id)}
                      >;
                        <Trash className="h-4 w-4" />;
                      </Button>;
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
=======



                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;
                <TableCell>{member.last_active}</TableCell>;
                <TableCell className='text - right'>;
                  <div className='flex justify - end gap - 2'>;
                    {member.status === 'pending' ? (
                      <Button;
                        variant='ghost';
                        size='sm';
                        on_click={() => handleResendInvite (member.email)}                      >;
                        <Mail className='h - 4 w - 4 mr - 1' />;
                        Resend;
                      </Button>) : (
                      <Button;
                        variant='ghost';
                        size='sm';
                        className='text - destructive hover:text - destructive';
                        on_click={() => handleRemoveMember (member.id)}                      >;
                        <Trash className='h - 4 w - 4' />;
                      </Button>)}
                  </div>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
  //In a real app, this would make an API call to remove the member toast ({
}
  //In a real app, this would make an API call to resend the invitation toast ({
}";
  handleAddMember ";
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded - md border"> <Table> <TableHeader> <TableRow> <TableHead > Name</TableHead> <TableHead > Role</TableHead> <TableHead > Status</TableHead> <TableHead > Last Active</TableHead> <TableHead className=" text - right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  team_members.map ( (member) => (<TableRow key= {
  member.id ";
}> <TableCell> .join ("");
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {
  member.role;
}</TableCell> <TableCell> <Badge > {
  member.status;
}</Badge> </TableCell> <TableCell> {
  member.last_active ";
}</TableCell> <TableCell className="text - right"> on_click={
  () => handleResendInvite (member.email) ";
}> <Mail className="h - 4 w - 4 mr - 1"/> Resend </Button> className="text - destructive hover:text - destructive"on_click={
  () => handleRemoveMember (member.id) ";
}> <Trash className="h - 4 w - 4" /> </Button>);
}</div> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>);
}'"}
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
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

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
          </TableBody>
        </Table>
      </div>
    </div>
  );

  //In a real app, this would make an API call to remove the member toast ({;
  ;
};
  //In a real app, this would make an API call to resend the invitation toast ({;
  ;
};";
  handleAddMember ";
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Role</TableHead> <TableHead>Status</TableHead> <TableHead>Last Active</TableHead> <TableHead className=" text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  teamMembers.map ( (member) => (<TableRow key= {;
  member.id ";
}> <TableCell> .join ("") ;
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {;
  member.role ;
}</TableCell> <TableCell> <Badge > {;
  member.status ;
}</Badge> </TableCell> <TableCell> {;
  member.lastActive ";
}</TableCell> <TableCell className="text-right"> onClick={;
  () => handleResendInvite (member.email) ";
}> <Mail className="h-4 w-4 mr-1"/> Resend </Button> className="text-destructive hover:text-destructive"onClick={;
  () => handleRemoveMember (member.id) ";
}> <Trash className="h-4 w-4" /> </Button>) ;
}</div> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}'"
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
