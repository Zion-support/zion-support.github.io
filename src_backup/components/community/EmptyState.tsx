import React from 'react'
import Link from 'next/link'

import { MessageSquare } from 'lucide-react'

<<<<<<< HEAD

import { Button } from '@/components/ui/button'

=======
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'
=======
<<<<<<< HEAD
import { Button } from @/components/ui/button'
>>>>>>> origin/resolved-merge-conflicts

import { Button } from '@/components/ui/button'

<<<<<<< HEAD
import React from 'react',

;
import React from 'react';
import Link from 'next/link';
import { MessageSquare  } from 'lucide-react';
import { Button  } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
=======
=======
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react',
import Link from 'next/link';
import { Button  } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from @/components/ui/tooltip';
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
origin/cursor/automate-test-improve-and-merge-code-2533
interface EmptyStateProps {

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
import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title: string;
  subtitle: string;
  cta: string;
  href: string;

import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface EmptyStateProps {
  title: string,
  subtitle: string,
  cta: string,
  href: string,

  hasSession: boolean


const EmptyState: React.FC<EmptyStateProps> = ({;
  title,;
  subtitle,;
  cta,;
  href,;
  hasSession,;

}) => {  return (
    <div className='text-center py-16'>;
import React from 'react',import { Button   } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger;
 } from '@/components/ui/tooltip';
interface EmptyStateProps  {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip';
interface EmptyStateProps  {import Link from 'next / link';
import { Button  } from '@/components / ui / button';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components / ui / tooltip';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components / ui / tooltip';
interface EmptyStateProps  {title: string;
  subtitle: string;
  cta: string;
  href: string;hasSession: boolean;
const EmptyState: React.FC<EmptyStateProps> = ({title;
  subtitle;
  cta;
  href;
  hasSession;
}) => {  return (<div className='text-center py-16'>;
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>;
        <MessageSquare className='h-10 w-10 text-zion-purple' />;
      </div>;
      <h2 className='text-xl font-medium mb-2'>{title}</h2>;
      <p className='text-muted-foreground mb-6'>{subtitle}</p>      <TooltipProvider>      <h2 className='text-xl font-medium mb-2'>{title}</h2>;
import { Button } from '@/components/ui/button',import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',interface EmptyStateProps  {title: string,subtitle: string,cta: string,href: string,hasSession: boolean;
}interface EmptyStateProps  {title: string,subtitle: string,cta: string,href: string,hasSession: boolean;
const EmptyState: React.FC<EmptyStateProps> = ({title,subtitle,cta,href,hasSession}) => {  return (<div className='text-center py-16'>;
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>;
        <MessageSquare className='h-10 w-10 text-zion-purple' />;
      </div>;
      <h2 className='text-xl font-medium mb-2'>{title}</h2>;
      <p className='text-muted-foreground mb-6'>{subtitle}</p>      <TooltipProvider>      <h2 className='text-xl font-medium mb-2'>{title}</h2>;
      <p className='text-muted-foreground mb-6'>{subtitle}</p>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            {hasSession ? (<Button asChild>;
                <Link href={href}>{cta}</Link>;
              </Button>;
            ) : (;
              <Button disabled>{cta}</Button>;

  hasSession: boolean

const EmptyState: React.FC<EmptyStateProps> = ({
  title
  subtitle
  cta
  href
  hasSession
}) => {  return (
    <div className='text-center py-16'>
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>
        <MessageSquare className='h-10 w-10 text-zion-purple' />
      </div>
      <h2 className='text-xl font-medium mb-2'>{title}</h2>
      <p className='text-muted-foreground mb-6'>{subtitle}</p>      <TooltipProvider>      <h2 className='text-xl font-medium mb-2'>{title}</h2>
import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
=======
import { MessageSquare } from 'lucide-react;
import { Button } from @/components/ui/button',
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip,
interface EmptyStateProps {
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
interface EmptyStateProps {;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  title: string;

  subtitle: string;
  cta: string;
  href: string;

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className='text-center py-16'>
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>
        <MessageSquare className='h-10 w-10 text-zion-purple' />
      </div>
      <h2 className='text-xl font-medium mb-2'>{title}</h2>

      <p className='text-muted-foreground mb-6'>{subtitle}</p>
  hasSession: boolean
      <p className='text-muted-foreground mb-6'>{subtitle}</p>
origin/cursor/automate-test-improve-and-merge-code-2533
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (
              <Button asChild>
                <Link href={href}>{cta}</Link>
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
            )}

        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );

export default EmptyState;

};

export default EmptyState;

  has_session: boolean;
const EmptyState: React.FC < EmptyStateProps> = ({
  title,
  subtitle,
  cta,
  href,
<<<<<<< HEAD


=======
<<<<<<< HEAD
  has_session,
}) => {  return (
    <div className='text - center py - 16'>;
            ) : (<Button disabled>{cta}</Button>;const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {return (<div className='text-center py-16'>;
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>;
        <MessageSquare className='h-10 w-10 text-zion-purple' />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  has_session}) => {  return (
    <div className='text - center py - 16>;
            ) : (<Button disabled>{cta}</Button>;const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {return (<div className=text-center py-16">;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex>;
        <MessageSquare className=h-10 w-10 text-zion-purple" />;
>>>>>>> origin/resolved-merge-conflicts
      </div>;
      <h2 className='text-xl font-medium mb-2'>{title}</h2>;
      <p className='text-muted-foreground mb-6'>{subtitle}</p>;
  hasSession: boolean;
      <p className='text-muted-foreground mb-6'>{subtitle}</p>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            {hasSession ? (<Button asChild>;
                <Link href={href}>{cta}</Link>;
              </Button>;
            ) : (<Button disabled>{cta}</Button>;
            )}</TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}</Tooltip>;
      </TooltipProvider>;
    </div>;
  )export default EmptyState;}export default EmptyState;has_session: boolean;
<<<<<<< HEAD
const EmptyState: React.FC < EmptyStateProps> = ({title,subtitle,cta,href,has_session}) => {  return (<div className='text - center py - 16'>;
      <div className='bg - zion - blue / 30 p - 6 rounded - full mb - 6 inline - flex'>;
        <MessageSquare className='h - 10 w - 10 text - zion - purple' />;
=======
const EmptyState: React.FC < EmptyStateProps> = ({title,subtitle,cta,href,has_session}) => {  return (<div className='text - center py - 16>;
      <div className=bg - zion - blue / 30 p - 6 rounded - full mb - 6 inline - flex'>;
        <MessageSquare className='h - 10 w - 10 text - zion - purple />;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  has_session,
}) => {  return (
    <div className='text - center py - 16'>;
      <div className='bg - zion - blue / 30 p - 6 rounded - full mb - 6 inline - flex'>;
        <MessageSquare className='h - 10 w - 10 text - zion - purple' />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>;
      <h2 className='text - xl font - medium mb - 2'>{title}</h2>;
      <p className='text - muted - foreground mb - 6'>{subtitle}</p>      <TooltipProvider>      <h2 className='text - xl font - medium mb - 2'>{title}</h2>;
      <p className='text - muted - foreground mb - 6'>{subtitle}</p>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger as_child>;
            {has_session ? (
              <Button as_child>;
                <Link href={href}>{cta}</Link>;
              </Button>) : (
              <Button disabled>{cta}</Button>)}
          </TooltipTrigger>;
          {!has_session && <TooltipContent > Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
    </div>);
}
export default EmptyState;

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}




        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );


<<<<<<< HEAD
},;
=======
},
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
},;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default EmptyState;

        </Tooltip>
      </TooltipProvider>
    </div>
);
<<<<<<< HEAD


=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
export default EmptyState;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/resolved-merge-conflicts
},export default EmptyState;</Tooltip>;
      </TooltipProvider>;
    </div>;
)}export default EmptyState;
export default EmptyState;
=======
};
export default EmptyState;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
