:src/components/resume-builder/wizard/EmptyResumeState.tsx
<CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>

            Create Resume

          <Button 
            onClick={onCreateClick}
            className="gap-2"
          >
            <FilePlus className="h-4 w-4" />

import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from "./types";
export const EmptyResumeState = null;
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from './types'
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {  return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardContent className='py-8'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-2'>Create Your Resume</h2>
          <p className='text-muted-foreground mb-6'>
            Create a professional resume to showcase your skills and experience
          </p>
          <Button onClick={onCreateClick} className='gap-2'>
            <FilePlus className='h-4 w-4' />
            Create Resume
origin/cursor/automate-test-improve-and-merge-code-2533
          </Button>
        </div>
      </CardContent>
    </Card>
:src/components/resume-builder/wizard/EmptyResumeState.tsx
<<<<<<< HEAD
  )

<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from "./types",
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>
          <Button 
            onClick={onCreateClick}
            className="gap-2"
          >
            <FilePlus className="h-4 w-4" />
            Create Resume
          </Button>
        </div>
      </CardContent>
    </Card>
  )
},
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FilePlus } from 'lucide-react';
import { EmptyResumeProps } from "./types",;
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {;
  return (;
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>;
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>;
:src/components/resume-builder/wizard/EmptyResumeState.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <Button
            onClick = {onCreateClick,}
            className="gap-2">;
            <FilePlus className="h-4 w-4" />;          </Button>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/wizard/EmptyResumeState.tsx

          </Button>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </div>;
      </CardContent>;
    </Card>;
  )
};

  );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
};

import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { FilePlus } from 'lucide-react';
import { EmptyResumeProps } from './types';
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) =>: any {  return (
    <Card className='w - full max - w-2xl mx - auto'>;
      <CardContent className='py - 8'>;
        <div className='text - center'>;
          <h2 className='text - 2xl font - bold mb - 2'>Create Your Resume</h2>;
          <p className='text - muted - foreground mb - 6'>;
            Create a professional resume to showcase your skills and experience;
          </p>;
          <Button on_click={onCreateClick} className='gap - 2'>;
            <FilePlus className='h - 4 w - 4' />            Create Resume    <Card className="w - full max - w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text - 2xl font - bold mb-2">Create Your Resume</h2>;
          <p className="text - muted - foreground mb-6">Create a professional resume to showcase your skills and experience</p>;
          <Button;
            on_click = {onCreateClick, }
            className="gap-2";
          >;
            <FilePlus className="h - 4 w-4" />;
          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}
"},
  );
}
:src/components/resume-builder/wizard/EmptyResumeState.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
