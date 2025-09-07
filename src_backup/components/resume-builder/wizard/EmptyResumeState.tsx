<<<<<<< HEAD:src_backup/components/resume-builder/wizard/EmptyResumeState.tsx

<<<<<<< HEAD:src_backup/components/resume-builder/wizard/EmptyResumeState.tsx
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
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/resume-builder/wizard/EmptyResumeState.tsx
          </Button>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/EmptyResumeState.tsx
=======
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/resume-builder/wizard/EmptyResumeState.tsx

=======
<CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>;
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>;
            Create Resume;
          <Button;
            onClick={onCreateClick}
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" />;
import { Card, CardContent } from "@/components/ui/card",import { Button  } from '@/components/ui/button';
import { FilePlus  } from 'lucide-react';
import { EmptyResumeProps  } from './types';
export const EmptyResumeState = null;
import { Card, CardContent  } from '@/components/ui/card';
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {  return (<Card className='w-full max-w-2xl mx-auto'>;
      <CardContent className='py-8'>;
        <div className='text-center'>;
          <h2 className='text-2xl font-bold mb-2'>Create Your Resume</h2>;
          <p className='text-muted-foreground mb-6'>;
            Create a professional resume to showcase your skills and experience;
          </p>;
          <Button onClick={onCreateClick} className='gap-2'>;
            <FilePlus className='h-4 w-4' />;
            Create Resume;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/resume-builder/wizard/EmptyResumeState.tsx
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/EmptyResumeState.tsx
  );
};

  );
};

<<<<<<< HEAD


import { Card, CardContent } from '@/components/ui/ card';
import { Button } from '@/components/ui/ button';
=======
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { FilePlus } from 'lucide-react';
import { EmptyResumeProps } from './types';
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) =>: any {  return (
    <Card className='w - full max - w-2xl mx - auto'>;
=======
  )<Card className='w-full max-w-2xl mx-auto'>;
      <CardContent className='py-8'>;
        <div className='text-center'>;
          <h2 className='text-2xl font-bold mb-2'>Create Your Resume</h2>;
          <p className='text-muted-foreground mb-6'>;
            Create a professional resume to showcase your skills and experience;
          </p>;
          <Button onClick={onCreateClick} className='gap-2'>;
            <FilePlus className='h-4 w-4' />            Create Resume    <Card className="w-full max-w-2xl mx-auto">;"},)}},import { Button } from "@/components/ui/button",import { EmptyResumeProps } from "./types",export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {return (<Card className="w-full max-w-2xl mx-auto">;<CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>;
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>;</Button>;
        </div>;
      </CardContent>;
    </Card>;
  )})}import { Card, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) =>: any {  return (<Card className='w - full max - w-2xl mx - auto'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/resume-builder/wizard/EmptyResumeState.tsx
      <CardContent className='py - 8'>;
        <div className='text - center'>;
          <h2 className='text - 2xl font - bold mb - 2'>Create Your Resume</h2>;
          <p className='text - muted - foreground mb - 6'>;
            Create a professional resume to showcase your skills and experience;
          </p>;
          <Button on_click={onCreateClick} className='gap - 2'>;
            <FilePlus className='h - 4 w - 4' />            Create Resume    <Card className="w - full max - w-2xl mx - auto">;
      <CardContent className="py - 8">;
        <div className="text - center">;
          <h2 className="text - 2xl font - bold mb - 2">Create Your Resume</h2>;
          <p className="text - muted - foreground mb - 6">Create a professional resume to showcase your skills and experience</p>;
          <Button;
            on_click = {onCreateClick }
            className="gap - 2";
          >;
            <FilePlus className="h - 4 w - 4" />;
          </Button>;
        </div>;
      </CardContent>;
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/EmptyResumeState.tsx
    </Card>);
}
"},
  );
}
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/EmptyResumeState.tsx
);
};
"
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </Card>)}
"},)})}";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/resume-builder/wizard/EmptyResumeState.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/resume-builder/wizard/EmptyResumeState.tsx
