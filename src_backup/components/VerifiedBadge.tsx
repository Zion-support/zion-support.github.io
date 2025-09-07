import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */
  label?: string;

origin/cursor/automate-test-improve-and-merge-code-2533
export function VerifiedBadge({
  verified,
  size = 'sm',
  label = 'Verified talent',
}: VerifiedBadgeProps) {
  if (!verified) return null;

  const sizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
import React from 'react';
import { CheckCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/ tooltip';
interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */;
  label?: string;
export /**
 * VerifiedBadge - Function description
 */
function VerifiedBadge() {
  // Check condition
if (return null) {
  $2
}
  const size_classes = {
    sm: 'h - 3.5 w - 3.5',
    md: 'h - 4 w - 4',
    lg: 'h - 5 w - 5',
  }
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/ tooltip';
interface VerifiedBadgeProps {

  verified: boolean,
  }


interface VerifiedBadgeProps {
  verified: boolean;

  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */;
  label?: string;
}
export /**
 * VerifiedBadge - Function description
 */
function VerifiedBadge() {
  // Check condition
if (return null) {
  $2
}
    sm: 'h - 3.5 w - 3.5',
    md: 'h - 4 w - 4',
    lg: 'h - 5 w - 5';
  }




export function VerifiedBadge({ verified, size = 'sm', label = 'Verified talent' }: VerifiedBadgeProps) {
  if (!verified) return null,
  
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  },
  


  return (




<span className='inline-flex text-blue-500'>
origin/cursor/automate-test-improve-and-merge-code-2533
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>



      </Tooltip>
    </TooltipProvider>
}

  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
