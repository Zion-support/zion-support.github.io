
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
import React from 'react',
import { Button } from '@/components/ui/button',
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip',
import { Card, CardContent } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge';
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/resolved-merge-conflicts
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  TooltipProvider
  Tooltip
  TooltipTrigger
  TooltipContent
} from '@/components/ui/tooltip'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
origin/cursor/automate-test-improve-and-merge-code-2533
import { Loader2, Info, ThumbsUp } from 'lucide-react'
<<<<<<< HEAD
import { PricingSuggestion } from '@/services/pricingSuggestionService',
=======
import { PricingSuggestion } from "@/services/pricingSuggestionService",
>>>>>>> origin/resolved-merge-conflicts
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
  suggestion;
  isLoading;
  onApplySuggestion;
  rateType}) => {
  if (isLoading) {
    return (
      <Card className;
origin/cursor/automate-test-improve-and-merge-code-2533
      <Card className='border border-dashed border-muted'>
        <CardContent className='flex items-center justify-center p-6'>
          <div className='text-center'>
            <Loader2 className='h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4' />
            <p className='text-sm text-muted-foreground'>
              Generating optimal pricing suggestion...
origin/cursor/automate-test-improve-and-merge-code-2533
            </p>
          </div>
        </CardContent>
      </Card>
);
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  if (!suggestion) {
    return null
  }
  const confidenceColor = {
High: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-red-100 text-red-800',
  }[suggestion.confidence];

  return (
    <Card className='border-2 border-dashed border-muted-foreground/20'>
      <CardContent className='p-5 space-y-4'>
        <div className='flex items-center justify-between'>
          <h4 className='font-semibold'>AI Suggested Price</h4>
          <Badge variant='outline' className={confidenceColor}>
origin/cursor/automate-test-improve-and-merge-code-2533
            {suggestion.confidence} confidence
          </Badge>
        </div>

<div className='bg-muted/50 rounded-md p-3 text-center'>
          <span className='text-2xl font-bold'>
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>
          <span className='text-sm text-muted-foreground ml-1'>
            {rateType === 'hourly' ? '/hour' : ' total'}
          </span>
        </div>
        <div className='flex items-start space-x-2 text-sm text-muted-foreground'>
          <Info className='h-4 w-4 flex-shrink-0 mt-1' />
          <p>{suggestion.explanation}</p>
        </div>

        <div className='flex items-center justify-between'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
variant='default'
                  onClick={onApplySuggestion}
                  className='w-full'
                >
                  <ThumbsUp className='h-4 w-4 mr-2' /> Apply Suggestion
                </Button>
origin/cursor/automate-test-improve-and-merge-code-2533
              </TooltipTrigger>
              <TooltipContent>
                <p>Apply this suggestion to your pricing field</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
<p className='text-xs text-center text-muted-foreground pt-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>

<<<<<<< HEAD
        <p className='text-xs text-center text-muted-foreground pt-2'>;
=======
        <p className="text-xs text-center text-muted-foreground pt-2">;
>>>>>>> origin/resolved-merge-conflicts
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>;
  );
};



};

import React from 'react';
import { Button } from '@/components/ui/ button';
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/ tooltip';
import { Card, CardContent } from '@/components/ui/ card';
import { Badge } from '@/components/ui/ badge';
import { Loader2, Info, ThumbsUp } from 'lucide-react';
import { PricingSuggestion } from '@/services / pricingSuggestionService';
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
  is_loading: boolean;
  onApplySuggestion: () => void;
  rate_type: 'hourly' | 'fixed';
export const PricingSuggestionBox: React.FC < PricingSuggestionBoxProps> = ({
  suggestion,
  is_loading,
  onApplySuggestion,
  rate_type,
}) => {  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='border border - dashed border - muted'>;
        <CardContent className='flex items - center justify - center p - 6'>;
          <div className='text - center'>;
            <Loader2 className='h - 10 w - 10 animate - spin text - muted - foreground mx - auto mb - 4' />;
<<<<<<< HEAD
            <p className='text - sm text - muted - foreground'>              Generating optimal pricing suggestion...      <Card className='border border - dashed border - muted'>;
        <CardContent className='flex items - center justify - center p - 6'>;
          <div className='text - center'>;
            <Loader2 className='h - 10 w - 10 animate - spin text - muted - foreground mx - auto mb - 4' />;
            <p className='text - sm text - muted - foreground'>;
=======
            <p className='text - sm text - muted - foreground'>              Generating optimal pricing suggestion...      <Card className="border border - dashed border - muted">;
        <CardContent className="flex items - center justify - center p - 6">;
          <div className="text - center">;
            <Loader2 className="h - 10 w - 10 animate - spin text - muted - foreground mx - auto mb - 4" />;
            <p className="text - sm text - muted - foreground">;
>>>>>>> origin/resolved-merge-conflicts
            </p>;
          </div>;
        </CardContent>;
      </Card>) }    );
  }
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  const confidence_color = {
    High: 'bg - green - 100 text - green - 800',
    Medium: 'bg - yellow - 100 text - yellow - 800',
    Low: 'bg - red - 100 text - red - 800',
  }[suggestion.confidence];
  return (
    <Card className='border - 2 border - dashed border - muted - foreground / 20'>;
      <CardContent className='p - 5 space - y-4'>;
        <div className='flex items - center justify - between'>;
          <h4 className='font - semibold'>AI Suggested Price</h4>;
          <Badge variant='outline' className={confidence_color}>            {suggestion.confidence} confidence;
          </Badge>;
        </div>;
        <div className='bg - muted / 50 rounded - md p - 3 text - center'>;
<<<<<<< HEAD
          <span className='text - 2xl font - bold'>    <Card className='border - 2 border - dashed border - muted - foreground / 20'>;
      <CardContent className='p - 5 space - y-4'>;
        <div className='flex items - center justify - between'>;
          <h4 className='font - semibold'>AI Suggested Price</h4>;
          <Badge variant='outline' className={confidence_color}>;
=======
          <span className='text - 2xl font - bold'>    <Card className="border - 2 border - dashed border - muted - foreground / 20">;
      <CardContent className="p - 5 space - y-4">;
        <div className="flex items - center justify - between">;
          <h4 className="font - semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidence_color}>;
>>>>>>> origin/resolved-merge-conflicts
          </Badge>;
        </div>;
        <div className='bg - muted / 50 rounded - md p - 3 text - center'>;
          <span className='text - 2xl font - bold'>;
            ${suggestion.min_rate.to_fixed (0)} - ${suggestion.max_rate.to_fixed (0)}
          </span>;
          <span className='text - sm text - muted - foreground ml - 1'>;
            {rate_type === 'hourly' ? '/hour' : ' total'}
          </span>;
        </div>;
        <div className='flex items - start space - x-2 text - sm text - muted - foreground'>;
          <Info className='h - 4 w - 4 flex - shrink - 0 mt - 1' />;
          <p>{suggestion.explanation}</p>;
        </div>;
        <div className='flex items - center justify - between'>          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger as_child>;
                <Button;
                  variant='default'            ${suggestion.min_rate.to_fixed (0)} - ${suggestion.max_rate.to_fixed (0)}
          </span>;
<<<<<<< HEAD
          <span className='text - sm text - muted - foreground ml - 1'>;
            {rate_type === 'hourly' ? '/hour' : ' total'}
          </span>;
        </div>;
        <div className='flex items - start space - x-2 text - sm text - muted - foreground'>;
          <Info className='h - 4 w - 4 flex - shrink - 0 mt - 1' />;
          <p>{suggestion.explanation}</p>;
        </div>;
        <div className='flex items - center justify - between'>;
=======
          <span className="text - sm text - muted - foreground ml - 1">;
            {rate_type === "hourly" ? "/hour" : " total"}
          </span>;
        </div>;
        <div className="flex items - start space - x-2 text - sm text - muted - foreground">;
          <Info className="h - 4 w - 4 flex - shrink - 0 mt - 1" />;
          <p>{suggestion.explanation}</p>;
        </div>;
        <div className="flex items - center justify - between">;
>>>>>>> origin/resolved-merge-conflicts
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger as_child>;
                <Button;
                  variant='default';
                  on_click={onApplySuggestion}
                  className='w - full'                >;
                  <ThumbsUp className='h - 4 w - 4 mr - 2' /> Apply Suggestion                </Button>;
<<<<<<< HEAD
                  <ThumbsUp className='h - 4 w - 4 mr - 2' /> Apply Suggestion;
                  on_click={onApplySuggestion}
                  className='w - full';
                >;
                  <ThumbsUp className='h - 4 w - 4 mr - 2' /> Apply Suggestion;
=======
                  <ThumbsUp className="h - 4 w - 4 mr - 2" /> Apply Suggestion;
                  on_click={onApplySuggestion}
                  className="w - full";
                >;
                  <ThumbsUp className="h - 4 w - 4 mr - 2" /> Apply Suggestion;
>>>>>>> origin/resolved-merge-conflicts
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p > Apply this suggestion to your pricing field</p>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;
        <p className='text - xs text - center text - muted - foreground pt - 2'>          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
';
        <p className='text - xs text - center text - muted - foreground pt - 2'>;
=======
";
        <p className="text - xs text - center text - muted - foreground pt - 2">;
>>>>>>> origin/resolved-merge-conflicts
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
'  );
}
);
};
'
=======
"  );
}
);
};
"
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
