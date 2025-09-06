<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/QuickActions.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
=======
import React from "react";"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';'
import { Calendar } from 'lucide-react';
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FileText, Plus, Search, Calendar } from 'lucide-react'

<<<<<<< HEAD
export function QuickActions() {
  const actions = [
    {
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",
      color: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      id: "add-member",
      label: "Add Team Member",
      icon: <Plus className="h-5 w-5 mr-2" />,
      description: "Invite someone to your team",
      color: "bg-green-100 dark:bg-green-900/20"
    },
    {
      id: "find-talent",
      label: "Find Talent",
      icon: <Search className="h-5 w-5 mr-2" />,
      description: "Search the talent pool",
      color: "bg-purple-100 dark:bg-purple-900/20"
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;'
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>;
          {actions && actions.map(action => (;
<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
            <Button
<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/QuickActions.tsx

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      id: 'post - job',
      label: 'Post New Job',
      icon: <FileText className='h - 5 w - 5 mr - 2' />,
      description: 'Create a new job posting',
=======
            <Button;
'
      id: 'post - job','
      label: 'Post New Job','
      icon: <FileText className='h - 5 w - 5 mr - 2' />,'
      description: 'Create a new job posting','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
      color: 'bg - blue - 100 dark:bg - blue - 900 / 20',
    },'
      id: 'add - member','
      label: 'Add Team Member','
      icon: <Plus className='h - 5 w - 5 mr - 2' />,'
      description: 'Invite someone to your team','
      color: 'bg - green - 100 dark:bg - green - 900 / 20',
    },
    {'
      id: 'find - talent','
      label: 'Find Talent','
      icon: <Search className='h - 5 w - 5 mr - 2' />,'
      description: 'Search the talent pool','
      color: 'bg - purple - 100 dark:bg - purple - 900 / 20',
    },
    {'
      id: 'schedule','
      label: 'Schedule Interview','
      icon: <Calendar className='h - 5 w - 5 mr - 2' />,'
      description: 'Set up candidate interviews','
      color: 'bg - amber - 100 dark:bg - amber - 900 / 20',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },
  ];
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;'
        <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 4'>;
          {actions.map (action => (
            <Button;

<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD
=======
              key={action.id}
=======
              key={action.id}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
              variant='outline'              className={`h - auto justify - start p - 4 ${action.color}`}
            >;'
              <div className='flex flex - col items - start text - left'>;'
                <div className='flex items - center'>;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
'
                <span className='mt - 1 text - xs text - muted - foreground'>;
                  {action.description}

<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/QuickActions.tsx

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react'
export function QuickActions() {
  const actions = null;
<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/QuickActions.tsx
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/QuickActions.tsx
<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {actions.map(action => (
<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
            <Button 
              key={action.id}
              variant="outline" 
              className={`h-auto justify-start p-4 ${action.color}`}

            >
              <div className="flex flex-col items-start text-left">
=======

            <Button;
              key={action.id}"
              variant="outline" `
              className={`h-auto justify-start p-4 ${action.color}`}


            >"
              <div className="flex flex-col items-start text-left">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
                <div className="flex items-center">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
            <Button 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <Button;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>"
import React from "react",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;'
import { FileText, Plus, Search, Calendar } from 'lucide-react';
<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
export function QuickActions() {;
  const actions = [;
    {;
      id: "post-job",;
      label: "Post New Job",;
      icon: <FileText className="h-5 w-5 mr-2" />,,
  description: "Create a new job posting",;
      color: "bg-blue-100 dark:bg-blue-900/20";
    },;
    {;
      id: "add-member",;
      label: "Add Team Member",;
      icon: <Plus className="h-5 w-5 mr-2" />,,
  description: "Invite someone to your team",;
      color: "bg-green-100 dark:bg-green-900/20";
    },;
    {;
      id: "find-talent",;
      label: "Find Talent",;
      icon: <Search className="h-5 w-5 mr-2" />,,
  description: "Search the talent pool",;
      color: "bg-purple-100 dark:bg-purple-900/20";
    },;
    {;
      id: "schedule",;
      label: "Schedule Interview",;
      icon: <Calendar className="h-5 w-5 mr-2" />,,
  description: "Set up candidate interviews";
=======
export function QuickActions() { return null; }
    },;
    {;"
      id: "add-member",;"
      label: "Add Team Member",;"
      icon: <Plus className="h-5 w-5 mr-2" />,;"
      description: "Invite someone to your team",;"
      color: "bg-green-100 dark:bg-green-900/20";
    },;
    {;"
      id: "find-talent",;"
      label: "Find Talent",;"
      icon: <Search className="h-5 w-5 mr-2" />,;"
      description: "Search the talent pool",;"
      color: "bg-purple-100 dark:bg-purple-900/20";
    },;
    {;"
      id: "schedule",;"
      label: "Schedule Interview",;"
      icon: <Calendar className="h-5 w-5 mr-2" />,;"
      description: "Set up candidate interviews";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
      color: "bg-amber-100 dark:bg-amber-900/20";
    }
  ];
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
          {actions.map(action => (;
            <Button;
<<<<<<< HEAD
<<<<<<< HEAD
              key={action.id}
              variant="outline";
              className={`h-auto justify-start p-4 ${action.color}`}
            >;
              <div className="flex flex-col items-start text-left">;
                <div className="flex items-center">;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

              key={action.id}"
              variant="outline"`
              className={`h-auto justify-start p-4 ${action.color}`}
            >

              key={action && action.id}'`
              variant='outline'              className={`h-auto justify-start p-4 ${action && action.color}`}>;'
              <div className='flex flex-col items-start text-left'>;'
                <div className='flex items-center'>;
                  {action && action.icon}
                  <span>{action && action.label}</span>;
                </div>;
'
                <span className='mt-1 text-xs text-muted-foreground'>;
                  {action && action.description}
                </span>              </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;
          {actions && actions.map(action => (;
            <Button;
              key={action && action.id}"
              variant="outline" `
              className={`h-auto justify-start p-4 ${action && action.color}`}>;"
              <div className="flex flex-col items-start text-left">;"
                <div className="flex items-center">;
                  {action && action.icon}
                  <span>{action && action.label}</span>;
                </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;
              </div>;
            </Button>;

<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
              <div className='flex flex-col items-start text-left'>
=======
'
              <div className='flex flex-col items-start text-left'>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
                <div className='flex items-center'>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {action.icon}
<<<<<<< HEAD
                  <span>{action.label}</span>;
                </div>;
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>;
              </div>;
            </Button>;
=======
                  <span>{action.label}</span>
                </div>'
                <span className='mt-1 text-xs text-muted-foreground'>
                  {action.description}
                </span>
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>

            </Button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          ))}
<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
<<<<<<< HEAD
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
=======

  );
}

<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
                </span>              </div>;
                <span className="mt - 1 text - xs text - muted-foreground">{action.description}</span>;
=======
                </span>              </div>;"
                <span className="mt - 1 text - xs text - muted - foreground">{action.description}</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
          {actions.map (action => (
            <Button;
              key={action.id}"
              variant="outline";`
              className={`h - auto justify - start p - 4 ${action.color}`}
<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
            >;
              <div className="flex flex - col items - start text-left">;
                <div className="flex items-center">;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;
                <span className="mt - 1 text - xs text - muted-foreground">{action.description}</span>;
=======
            >;"
              <div className="flex flex - col items - start text - left">;"
                <div className="flex items - center">;
                  {action.icon}
                  <span>{action.label}</span>;
                </div>;"
                <span className="mt - 1 text - xs text - muted - foreground">{action.description}</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
              </div>;
            </Button>))}
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/enterprise/workspace/QuickActions.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/QuickActions.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
;

        </div>
      </CardContent>
    </Card>
  );
}
<<<<<<< HEAD:src/components/enterprise/workspace/QuickActions.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/workspace/QuickActions.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/workspace/QuickActions.tsx
