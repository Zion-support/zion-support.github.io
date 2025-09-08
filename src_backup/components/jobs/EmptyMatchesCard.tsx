
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCcw } from 'lucide-react'
import { Sparkles, RefreshCcw } from lucide-react'
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
export function EmptyMatchesCard() {return (<Card className='p-6 text-center border-dashed border-2 bg-muted/30'>;
      <div className='mb-4 flex justify-center'>;
        <Sparkles className='h-12 w-12 text-muted-foreground' />;

      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button 
        onClick = {onRefresh,}
        disabled = {isProcessing,}
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto>      <Button 
        onClick = {onRefresh}
        disabled = {isProcessing}
  return (
import { Card } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Sparkles, RefreshCcw } from 'lucide-react'



      <h3 className='text-lg font-medium mb-2'>No talent matches yet</h3>
      <p className='text-muted-foreground mb-6'>
      <h3 className=text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6>
        Run AI matching to find talents that match this job&apos,s requirements.



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

  );
}

  );
}
  )
}
