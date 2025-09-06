<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm",
import { useRouter } from 'next/router',
import { ShieldAlert } from 'lucide-react'

interface RaiseDisputeButtonProps {
=======
return (
    <>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  projectId: string,
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm";
import { useRouter } from 'next/router';
<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
} from '@/components/ui/dialog'
import { DisputeForm } from './DisputeForm'
origin/cursor/automate-test-improve-and-merge-code-2533
import { ShieldAlert } from 'lucide-react'
  DialogDescription} from "@/components/ui/dialog"
import { DisputeForm } from "./DisputeForm"
import { useRouter } from 'next/router'
interface RaiseDisputeButtonProps {
  projectId: string;
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string
<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
<<<<<<< HEAD

export function RaiseDisputeButton({
Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm",
import { useRouter } from 'next/router',
import { ShieldAlert } from 'lucide-react'

interface RaiseDisputeButtonProps {  projectId: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
return (
    <>;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx
  projectId: string,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
}

export function RaiseDisputeButton({ 

<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx
  projectId,
  milestoneId, 
  variant = "outline", 
  size,
  className 
}: RaiseDisputeButtonProps) {
<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),
  
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`)
  },
  
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx
}

export function RaiseDisputeButton({ 
  projectId;
  milestoneId;
  variant;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <Button 
        variant={variant} 
        size={size} 
        className={className} 
        onClick={() => setIsDialogOpen(true)}
      >
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute
      </Button>
      
<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with this project.
            </DialogDescription>
          </DialogHeader>
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-[550px]'>
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with
              this project.
            </DialogDescription>
          </DialogHeader>

        onClick={() => setIsDialogOpen(true)}      >;
        <ShieldAlert className='h-4 w-4 mr-2' />;
        Raise Dispute;
      </Button>;

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className='sm:max-w-[550px]'>;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
      <Button;
        variant={variant}
        size={size}
        className={class_name}
        on_click={() => setIsDialogOpen (true)}      >;
        <ShieldAlert className='h - 4 w - 4 mr - 2' />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className='sm:max - w-[550px]'>;
          <DialogHeader>;
            <DialogTitle > Raise a Dispute</DialogTitle>;

            <DialogDescription>;
              Please provide details about the issue you're experiencing with;
              this project.;
            </DialogDescription>;
          </DialogHeader>;

            onCancel={() => setIsDialogOpen(false)}          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}

          <DisputeForm;
            project_id={project_id}
            milestone_id={milestone_id}
            onDisputeCreated={handleDisputeCreated}
<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            onCancel={() => setIsDialogOpen(false)}          />
        </DialogContent>
      </Dialog>
    </>
<<<<<<< HEAD
  )
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx
            on_cancel={() => setIsDialogOpen (false)}          />;
        </DialogContent>;
      </Dialog>;
    </>);
}


<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx
          
=======
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),
  
  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`)
  },
  
  return (
    <>
      <Button 
        variant={variant} 
        size={size} 
        className={className} 
        onClick={() => setIsDialogOpen(true)}
      >
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute
      </Button>
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <DisputeForm 
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription} from "@/components/ui/dialog",;
import { DisputeForm } from "./DisputeForm",;
import { useRouter } from 'next/router',;
import { ShieldAlert } from 'lucide-react';
interface RaiseDisputeButtonProps {;
  projectId: string,;
  milestoneId?: string,;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",;
  size?: "default" | "sm" | "lg" | "icon",;
  className?: string;
}
;
export function RaiseDisputeButton({;
  projectId,;
  milestoneId,;
  variant = "outline",;
  size,;
  className;
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const router = useRouter(),;
  const handleDisputeCreated = (disputeId: string) => {;
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`)
};
  return (;
    <>;
      <Button;
        variant={variant} ;
        size={size} ;
        className={className} ;
        onClick={() => setIsDialogOpen(true)}
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
            <DialogTitle>Raise a Dispute</DialogTitle>;
            <DialogDescription>;
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;
          <DisputeForm;
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}
          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
<<<<<<< HEAD:src/components/disputes/RaiseDisputeButton.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/RaiseDisputeButton.tsx
