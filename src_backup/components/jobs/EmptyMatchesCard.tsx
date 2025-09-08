import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCcw } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

<<<<<<< HEAD

=======
<<<<<<< HEAD
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCcw } from 'lucide-react'
=======
<<<<<<< HEAD
import { Sparkles, RefreshCcw } from lucide-react'
>>>>>>> origin/resolved-merge-conflicts
export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean,
}

  return (
    <Card className='p-6 text-center border-dashed border-2 bg-muted/30'>
      <div className='mb-4 flex justify-center'>

;
import { Card  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Sparkles, RefreshCcw  } from 'lucide-react';
export interface EmptyMatchesCardProps  {onRefresh: () => void;
  isProcessing: boolean;
<<<<<<< HEAD
export function EmptyMatchesCard() {return (<Card className='p-6 text-center border-dashed border-2 bg-muted/30'>;
      <div className='mb-4 flex justify-center'>;
        <Sparkles className='h-12 w-12 text-muted-foreground' />;
=======
export function EmptyMatchesCard() {return (<Card className=p-6 text-center border-dashed border-2 bg-muted/30'>;
      <div className='mb-4 flex justify-center>;
        <Sparkles className=h-12 w-12 text-muted-foreground' />;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Sparkles, RefreshCcw } from 'lucide-react'
export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {

  return (
    <Card className='p-6 text-center border-dashed border-2 bg-muted/30'>
      <div className='mb-4 flex justify-center'>
        <Sparkles className='h-12 w-12 text-muted-foreground' />;
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>;
      <h3 className='text-lg font-medium mb-2'>No talent matches yet</h3>;
      <p className='text-muted-foreground mb-6'>;
        Run AI matching to find talents that match this job&apos;s requirements.
      </p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button 
        onClick = {onRefresh,}
        disabled = {isProcessing,}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto>      <Button 
        onClick = {onRefresh}
        disabled = {isProcessing}
>>>>>>> origin/resolved-merge-conflicts
  return (
import { Card } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Sparkles, RefreshCcw } from 'lucide-react'
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (

    <Card className='p-6 text-center border-dashed border-2 bg-muted/30'>
      <div className='mb-4 flex justify-center'>
        <Sparkles className='h-12 w-12 text-muted-foreground' />
      </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
      <h3 className='text-lg font-medium mb-2'>No talent matches yet</h3>
      <p className='text-muted-foreground mb-6'>
=======
<<<<<<< HEAD
      <h3 className=text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6>
>>>>>>> origin/resolved-merge-conflicts
        Run AI matching to find talents that match this job&apos,s requirements.
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
        Run AI matching to find talents that match this job's requirements.

      </p>
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}

        className='mx-auto'
      >
        {isProcessing ? (
          <>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>
        {isProcessing ? (
          <>
            <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />
origin/cursor/automate-test-improve-and-merge-code-2533
            Processing...
          </>
        ) : (
          <>

import { Card } from '@/components/ui/ card';
import { Button } from '@/components/ui/ button';
import { Sparkles, RefreshCcw } from 'lucide-react';
<<<<<<< HEAD
=======
import { Card } from '@/components/ui/ card;
import { Button } from @/components/ui/ button';
>>>>>>> origin/resolved-merge-conflicts
export interface EmptyMatchesCardProps {
  on_refresh: () => void;
        Run AI matching to find talents that match this job&apos;s requirements.;
      </p>;
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button;
        onClick = {onRefresh}
        disabled = {isProcessing}
  return (import { Card } from '@/components/ui/card',import { Button } from '@/components/ui/button',export interface EmptyMatchesCardProps  {onRefresh: () => void,isProcessing: boolean;
}export function EmptyMatchesCard() {export function EmptyMatchesCard(): any ({onRefresh,isProcessing}: EmptyMatchesCardProps) {return (<Card className='p-6 text-center border-dashed border-2 bg-muted/30'>;
      <div className='mb-4 flex justify-center'>;
        <Sparkles className='h-12 w-12 text-muted-foreground' />;
      </div>;
      <h3 className='text-lg font-medium mb-2'>No talent matches yet</h3>;
      <p className='text-muted-foreground mb-6'>;
        Run AI matching to find talents that match this job&apos,s requirements.;
      </p>;
      <Button;
        onClick={onRefresh}disabled={isProcessing}className='mx-auto';
      >;
        {isProcessing ? (<>;
            <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />;
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>;
        {isProcessing ? (<>;
            <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />;
            Processing...;
          </>;
        ) : (<>;
}<Sparkles className='mr-2 h-4 w-4' />;
            Find AI Matches;
          </>;
        )}</Button>;
    </Card>;
  )}import { Card  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
export interface EmptyMatchesCardProps  {on_refresh: () => void;
  is_processing: boolean;
export /**;
 * EmptyMatchesCard - Function description;
 */;
function EmptyMatchesCard() {return (<Card className='p - 6 text - center border - dashed border - 2 bg - muted / 30'>;
      <div className='mb - 4 flex justify - center'>;
        <Sparkles className='h - 12 w - 12 text - muted - foreground' />;
      </div>;
      <h3 className='text - lg font - medium mb - 2'>No talent matches yet</h3>;
      <p className='text - muted - foreground mb - 6'>;
        Run AI matching to find talents that match this job & apos;s requirements.;
      </p>;
      <Button on_click={on_refresh} disabled={is_processing} className='mx - auto'>      <Button;
        on_click = {on_refresh }
        disabled = {is_processing }
        className='mx - auto';
      >;
        {is_processing ? (<>;
            <RefreshCcw className='mr - 2 h - 4 w - 4 animate - spin' />            Processing...;
          </>) : (<>;
            <Sparkles className='mr - 2 h - 4 w - 4' />            Find AI Matches            <RefreshCcw className='mr - 2 h - 4 w - 4 animate - spin' />;
            Processing...;
          </>) : (<>;
            <Sparkles className='mr - 2 h - 4 w - 4' />            <Sparkles className='mr - 2 h - 4 w - 4' />;
            Find AI Matches;
          </>)}
      </Button>;
    </Card>);
}
;

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </>
        ) : (
          <>

}

            <Sparkles className='mr-2 h-4 w-4' />
            Find AI Matches
          </>
        )}

      </Button>;
    </Card>;
  );
}

;

<Sparkles className='mr-2 h-4 w-4' />
            Find AI Matches
          </>
        )}
      </Button>
    </Card>
<<<<<<< HEAD

  );
}

=======
<<<<<<< HEAD
  );
}
=======
<<<<<<< HEAD
  )
}
=======
  );
}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
