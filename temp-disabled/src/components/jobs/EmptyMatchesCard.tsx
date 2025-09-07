export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;)
}: EmptyMatchesCardProps) {;
  return (

    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">"
</Card>"
      <div className="mb-4 flex justify-center">"
</div>"
        <Sparkles className="h-12 w-12 text-muted-foreground" />"
</Sparkles>
      </div>"
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>""
      <p className="text-muted-foreground mb-6">"
</p>
      </p>
      <Button;
        onClick={onRefresh} 
        disabled={isProcessing}

"
        className="mx-auto""
      >
</Button>
          <>

"
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />"
</RefreshCcw>
          </>)
        ) : (
          <>

;
import { Card  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Sparkles, RefreshCcw  } from 'lucide-react';

export interface EmptyMatchesCardProps  {onRefresh: () => void;
  isProcessing: boolean;

export function EmptyMatchesCard() {return (<Card className='p-6 text-center border-dashed border-2 bg-muted/30' />;
      <div className='mb-4 flex justify-center' />;
        <Sparkles className='h-12 w-12 text-muted-foreground' />;
      </div>;
      <h3 className='text-lg font-medium mb-2' />No talent matches yet</h3>;
      <p className='text-muted-foreground mb-6' />;
        Run AI matching to find talents that match this job&apos;s requirements.;}
      </p>;}
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto' />      <Button;
        onClick = {onRefresh}
        disabled = {isProcessing}
 ;
  return (import { Card } from \"@/components/ui/card\",import { Button } from \"@/components/ui/button\",export interface EmptyMatchesCardProps {
  onRefresh: () = /> void,isProcessing: boolean;}
}
}
"
export function EmptyMatchesCard() {export function EmptyMatchesCard(): any ({onRefresh,isProcessing}: EmptyMatchesCardProps) {return (<Card className=\"p-6 text-center border-dashed border-2 bg-muted/30\" />;"
      <div className=\"mb-4 flex justify-center\" />;"
        <Sparkles className=\"h-12 w-12 text-muted-foreground\" />;
      </div>;"
      <h3 className=\"text-lg font-medium mb-2\" />No talent matches yet</h3>;"
      <p className=\"text-muted-foreground mb-6\" />;
        Run AI matching to find talents that match this job&apos,s requirements.;
      </p>;}
      <Button;}"
        onClick={onRefresh}disabled={isProcessing}className=\"mx-auto\" />

"
            <Sparkles className="mr-2 h-4 w-4" />"
</Sparkles>
          </>)
        )}

      </Button>;
    </Card>;"
    <Card className='p - 6 text - center border - dashed border - 2 bg - muted / 30'>;'
</Card>'
      <div className='mb - 4 flex justify - center'>;'
</div>'
        <Sparkles className='h - 12 w - 12 text - muted - foreground' />;'
</Sparkles>
      </div>;'
      <h3 className='text - lg font - medium mb - 2'>No talent matches yet</h3>;''
      <p className='text - muted - foreground mb - 6'>;'
</p>
      </p>;'
      <Button on_click={on_refresh} disabled={is_processing} className='mx - auto'>      <Button;'
</Button>
          <>;'
            <RefreshCcw className='mr - 2 h - 4 w - 4 animate - spin' />            Processing...;'
</RefreshCcw>
          </>) : (
          <>;'
            <Sparkles className='mr - 2 h - 4 w - 4' />            Find AI Matches            <RefreshCcw className="mr - 2 h - 4 w - 4 animate - spin" />;"
</Sparkles>)
          </>) : (
          <>;"
            <Sparkles className='mr - 2 h - 4 w - 4' />            <Sparkles className="mr - 2 h - 4 w - 4" />;"
</Sparkles>)
          </>)}
      </Button>;
    </Card>);"
