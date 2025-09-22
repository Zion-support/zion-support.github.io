:src/components/jobs/EmptyMatchesCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from 'lucide-react'

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
  return (
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCcw } from 'lucide-react';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
:src/components/jobs/EmptyMatchesCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Sparkles, RefreshCcw } from 'lucide-react'
export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <Card className='p-6 text-center border-dashed border-2 bg-muted/30'>
      <div className='mb-4 flex justify-center'>
        <Sparkles className='h-12 w-12 text-muted-foreground' />;
      </div>;
      <h3 className='text-lg font-medium mb-2'>No talent matches yet</h3>;
      <p className='text-muted-foreground mb-6'>;
        Run AI matching to find talents that match this job&apos;s requirements.
      </p>
:src/components/jobs/EmptyMatchesCard.tsx
<<<<<<< HEAD
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button 
        onClick = {onRefresh,}
        disabled = {isProcessing,}
  return (
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from 'lucide-react'

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {  return (

  return (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
        Run AI matching to find talents that match this job's requirements.
      </p>
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}

:src/components/jobs/EmptyMatchesCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        className="mx-auto"
      >
        {isProcessing ? (
          <>
:src/components/jobs/EmptyMatchesCard.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            Processing...
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </>
        ) : (
          <>
:src/components/jobs/EmptyMatchesCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
import { Card } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;

}

            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
        )}

      </Button>;
    </Card>;
  );
}
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/EmptyMatchesCard.tsx

import { Card } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Sparkles, RefreshCcw } from 'lucide-react';
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean;
}
<<<<<<< HEAD
;
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {;
  return (;
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;
      <div className="mb-4 flex justify-center">;
        <Sparkles className="h-12 w-12 text-muted-foreground" />;
      </div>;
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;
      <p className="text-muted-foreground mb-6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;
      <Button;
        onClick={onRefresh} ;
        disabled={isProcessing}
        className="mx-auto";
      >;
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
        ) : (;
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;
        )}
      </Button>;
    </Card>;
  );
}
;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/EmptyMatchesCard.tsx
<Sparkles className='mr-2 h-4 w-4' />
            Find AI Matches
          </>
        )}
      </Button>
    </Card>
  );
}
:src/components/jobs/EmptyMatchesCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
