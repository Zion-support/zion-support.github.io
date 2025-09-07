Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'

import { Loader2 } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
Spinner && Spinner.displayName = 'Spinner';
export default Spinner;import React from 'react';
import { Loader2 } from 'lucide-react';
<<<<<<< HEAD
=======
import { Loader2 } from 'lucide-react;
>>>>>>> origin/resolved-merge-conflicts

import { cn } from '@/lib/utils';

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string

import React from 'react',;
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils',;
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {;
  size?: number | string;

}
;
const Spinner = React.forwardRef<SVGSVGElement SpinnerProps>(;
  ({ className, size = 24, ...props }, ref) => (;
    <Loader2;
      ref={ref}
      {...props}

<<<<<<< HEAD
import { cn  } from '@/lib/utils';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { cn  } from @/lib/utils';
>>>>>>> origin/resolved-merge-conflicts
export interface SpinnerProps extends React.SVGProps<SVGSVGElement>  {size?: number | string;
import React from 'react',import { cn } from '@/lib/utils',export interface SpinnerProps extends React.SVGProps<SVGSVGElement>  {size?: number | string;}const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(({ className, size = 24, ...props }, ref,) => (<Loader2;
      ref = {ref}
      {...props}className = {cn('animate-spin', className)}
      width = {size}
      height = {size}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    />;
  );
),;
Spinner && Spinner.displayName = 'Spinner',;
export default Spinner,;

<<<<<<< HEAD
Spinner.display_name = 'Spinner';
export default Spinner; import React from 'react';
import { cn  } from '@/lib / utils';
=======
<<<<<<< HEAD
Spinner.display_name = 'Spinner;
export default Spinner; import React from react';
import { cn  } from '@/lib / utils;
>>>>>>> origin/resolved-merge-conflicts
export interface SpinnerProps extends React.SVGProps < SVGSVGElement>  {size?: number | string;
=======
Spinner.display_name = 'Spinner';
export default Spinner; import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib / utils';
export interface SpinnerProps extends React.SVGProps < SVGSVGElement> {
  size?: number | string;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
const Spinner = React.forward_ref < SVGSVGElement, SpinnerProps>(
  ({ class_name, size = 24, ...props }, ref, ) => (
    <Loader2;
      ref = {ref, }
      {...props}
      class_name = {cn ('animate - spin', class_name), }
      width = {size, }
      height = {size, }
<<<<<<< HEAD
    />)),
Spinner.display_name = 'Spinner',
      class_name = {cn ('animate - spin', class_name) }
=======
      class_name = {cn (animate - spin', class_name)}
      width = {size}
      height = {size}
    />)),
<<<<<<< HEAD
<<<<<<< HEAD
=======
Spinner.display_name = 'Spinner',
export default Spinner,
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
Spinner.display_name = 'Spinner,
      class_name = {cn (animate - spin', class_name) }
>>>>>>> origin/resolved-merge-conflicts
      width = {size }
      height = {size }
    />)),Spinner.display_name = 'Spinner',export default Spinner}
';
export default Spinner,
=======
Spinner.display_name = 'Spinner',
export default Spinner,
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
