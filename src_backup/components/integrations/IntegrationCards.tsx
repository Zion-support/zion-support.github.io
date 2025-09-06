<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { logDebug } from '@/utils/productionLogger',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'

interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending",
  href?: string,
  onConnect?: () => void
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
import React from "react";
import { logDebug  } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardFooter
  CardHeader
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
  ArrowRight
  Check
  ExternalLink
  Slack
  Briefcase
  Users
} from 'lucide-react'
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: 'connected' | 'disconnected' | 'pending'
  href?: string
  onConnect?: () => void

import React from 'react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {;
  ArrowRight,;
  Check,;
  ExternalLink,;
  Slack,;
  Briefcase,;
  Users,;
} from 'lucide-react';

}

interface IntegrationCardProps {;
  title: string;
  description: string;
  icon: React && React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  onConnect?: () => void;

<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function IntegrationCard({
  title,
  description,
  icon,
  status = "disconnected",
  href,
  onConnect}: IntegrationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
            </div>
          </div>
          {status === "connected" ? (
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">
              <Check className="h-3.5 w-3.5" />
              <span>Connected</span>
            </Badge>
          ) : status === "pending" ? (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>
          ) : (
            <Badge variant="outline">Not Connected</Badge>
          )}
<<<<<<< HEAD
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        {status === "connected" ? (
          <Button variant="outline" className="w-full" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>Manage</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={onConnect}>
            <span>Connect</span>
=======
        </div>;
      </CardHeader>;
      <CardContent className='pb-4'>;
        <p className='text-sm text-muted-foreground'>{description}</p>;
      </CardContent>;
      <CardFooter className='pt-0'>;
        {status === 'connected' ? (;
          <Button variant='outline' className='w-full' asChild>;
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD

import React from "react";
import { logDebug } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status?: "connected" | "disconnected" | "pending"
  href?: string
  onConnect?: () => void
              className='flex items-center gap-1'>;
              <span>Manage</span>;
              <ExternalLink className='h-3 && 3.5 w-3 && 3.5' />;
            </a>;
          </Button>;
        ) : (;
          <Button variant='default' className='w-full' onClick={onConnect}>;
            <span>Connect</span>;
            <ArrowRight className='ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5' />          </Button>;
            <ArrowRight className="ml-1 && 1.5 h-3 && 3.5 w-3 && 3.5" />;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
import React from "react",;
import { logDebug } from '@/utils/productionLogger',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight, Check, ExternalLink, Slack, Briefcase, Users } from 'lucide-react';
interface IntegrationCardProps {;
  title: string,;
  description: string,;
<<<<<<< HEAD
  icon: React.ReactNode,;
  status?: "connected" | "disconnected" | "pending",;
  href?: string,;
  onConnect?: () => void;
}
;
export function IntegrationCard({;
  title,;
  description,;
  icon,;
  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;
  return (;
=======
  icon: React && React.ReactNode,;
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  onConnect?: () => void;

}

export function IntegrationCard(): any ({;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
              className='flex items-center gap-1'
            >
              <span>Manage</span>
              <ExternalLink className='h-3.5 w-3.5' />
            </a>
          </Button>
        ) : (
          <Button variant='default' className='w-full' onClick={onConnect}>
            <span>Connect</span>
            <ArrowRight className='ml-1.5 h-3.5 w-3.5' />
export function IntegrationCard({
origin/cursor/automate-test-improve-and-merge-code-2533
  title;
  description;
  icon;

  status = "disconnected";
  href;
  onConnect}: IntegrationCardProps) {;

  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;
              <h3 className="font-semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;
<<<<<<< HEAD
              <Check className="h-3.5 w-3.5" />;
=======
              <Check className="h-3 && 3.5 w-3 && 3.5" />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <span>Connected</span>;
            </Badge>;
          ) : status === "pending" ? (;
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
          ) : (;
            <Badge variant="outline">Not Connected</Badge>;
          )}
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-sm text-muted-foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt-0">;
        {status === "connected" ? (;
          <Button variant="outline" className="w-full" asChild>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;
              <span>Manage</span>;
              <ExternalLink className="h-3.5 w-3.5" />;
            </a>;
          </Button>;
        ) : (;
          <Button variant="default" className="w-full" onClick={onConnect}>;
            <span>Connect</span>;

<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        {status === "connected" ? (
          <Button variant="outline" className="w-full" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>Manage</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={onConnect}>
            <span>Connect</span>
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>

        )}
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />;
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  );
<<<<<<< HEAD
}

export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard
        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
        icon={<Briefcase className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Teams clicked')}
=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
      </CardFooter>
    </Card>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
export function IntegrationCards() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>;
      <IntegrationCard

  );
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
}

export function IntegrationCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <IntegrationCard

        title="Slack"
        description="Send notifications and interact with Zion from Slack."
        icon={<Slack className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard
        title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD

        icon={<Briefcase className="h-5 w-5" />}

        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
<<<<<<< HEAD
=======
=======
    </div>
  )
      />;
    </div>;
  );
}        icon={<Briefcase className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx

      <IntegrationCard
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Teams clicked')}

<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
}

<<<<<<< HEAD

<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
      />;
    </div>;
  );
}
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx

  );
}

import React from 'react';
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
  ArrowRight,
  Check,
  ExternalLink,
  Slack,
  Briefcase,
  Users,
} from 'lucide-react';
interface IntegrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'connected' | 'disconnected' | 'pending';
  href?: string;
  on_connect?: () => void;
export /**
 * IntegrationCard - Function description
 */
function IntegrationCard() {
  return (
    <Card className='overflow - hidden'>;
      <CardHeader className='pb - 2'>;
        <div className='flex justify - between items - start'>;
          <div className='flex items - center gap - 3'>;
            <div className='h - 9 w - 9 flex items - center justify - center bg - muted rounded - md'>;
              {icon}
            </div>;
            <div>;
              <h3 className='font - semibold'>{title}</h3>;
            </div>;
          </div>;
          {status === 'connected' ? (
            <Badge;
              variant='outline';
              className='bg - green - 100 text - green - 800 gap - 1';
            >;
              <Check className='h - 3.5 w - 3.5' />;
              <span > Connected</span>;
            </Badge>) : status === 'pending' ? (
            <Badge variant='outline' className='bg - yellow - 100 text - yellow - 800'>;
              Pending;
            </Badge>) : (
            <Badge variant='outline'>Not Connected</Badge>)}
        </div>;
      </CardHeader>;
      <CardContent className='pb - 4'>;
        <p className='text - sm text - muted - foreground'>{description}</p>;
      </CardContent>;
      <CardFooter className='pt - 0'>;
        {status === 'connected' ? (
          <Button variant='outline' className='w - full' as_child>;
            <a;
              href={href}
              target='_blank';
              rel='noopener noreferrer';
              className='flex items - center gap - 1';
            >;
              <span > Manage</span>;
              <ExternalLink className='h - 3.5 w - 3.5' />;
            </a>;
          </Button>) : (
          <Button variant='default' className='w - full' on_click={on_connect}>;
            <span > Connect</span>;
            <ArrowRight className='ml - 1.5 h - 3.5 w - 3.5' />          </Button>;
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending";
  href?: string;
  on_connect?: () => void;
}
export /**
 * IntegrationCard - Function description
 */
function IntegrationCard() {
  return (
    <Card className="overflow - hidden">;
      <CardHeader className="pb - 2">;
        <div className="flex justify - between items - start">;
          <div className="flex items - center gap - 3">;
            <div className="h - 9 w - 9 flex items - center justify - center bg - muted rounded - md">;
              {icon}
            </div>;
            <div>;
              <h3 className="font - semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (
            <Badge variant="outline" className="bg - green - 100 text - green - 800 gap - 1">;
              <Check className="h - 3.5 w - 3.5" />;
              <span > Connected</span>;
            </Badge>) : status === "pending" ? (
            <Badge variant="outline" className="bg - yellow - 100 text - yellow - 800">Pending</Badge>) : (
            <Badge variant="outline">Not Connected</Badge>)}
        </div>;
      </CardHeader>;
      <CardContent className="pb - 4">;
        <p className="text - sm text - muted - foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt - 0">;
        {status === "connected" ? (
          <Button variant="outline" className="w - full" as_child>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 1">;
              <span > Manage</span>;
              <ExternalLink className="h - 3.5 w - 3.5" />;
            </a>;
          </Button>) : (
          <Button variant="default" className="w - full" on_click={on_connect}>;
            <span > Connect</span>;
            <ArrowRight className="ml - 1.5 h - 3.5 w - 3.5" />;
          </Button>)}
      </CardFooter>;
    </Card>);
export /**
 * IntegrationCards - Function description
 */
function IntegrationCards() {
  return (
    <div className='grid md:grid - cols - 3 gap - 6'>;
      <IntegrationCard;
        title='Slack';
        description='Send notifications and interact with Zion from Slack.';
        icon={<Slack className='h - 5 w - 5' />}
        on_connect={() => log_debug ('Connect Slack clicked')}
      />;
      <IntegrationCard;
        title='Salesforce';
        description='Sync leads and opportunities with Salesforce.';
        icon={<Briefcase className='h - 5 w - 5' />}
        on_connect={() => log_debug ('Connect Salesforce clicked')}      />;
      <IntegrationCard;
        title="Salesforce";
        description="Sync leads and opportunities with Salesforce.";
        icon = {<Briefcase className="h - 5 w - 5" />, }
        on_connect = {() => log_debug ('Connect Salesforce clicked'), }
      />;
      <IntegrationCard;
        title='Microsoft Teams';
        description='Receive updates through Microsoft Teams.';
        icon={<Users className='h - 5 w - 5' />}        on_connect={() => log_debug ('Connect Teams clicked')}
      />;
    </div>);
}        icon={<Briefcase className="h - 5 w - 5" />}
        on_connect={() => log_debug ('Connect Salesforce clicked')}
      />;
      <IntegrationCard;
        title="Microsoft Teams";
        description="Receive updates through Microsoft Teams.";
        icon={<Users className="h - 5 w - 5" />}
        on_connect={() => log_debug ('Connect Teams clicked')}
        icon = {<Users className="h - 5 w - 5" />, }
        on_connect = {() => log_debug ('Connect Teams clicked'), }
      />;
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
        icon = {<Briefcase className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Salesforce clicked'),}
      />
      <IntegrationCard
        title='Microsoft Teams'
        description='Receive updates through Microsoft Teams.'
        icon={<Users className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Teams clicked')}
        icon = {<Users className="h-5 w-5" />,}
        onConnect = {() => logDebug('Connect Teams clicked'),}
      />
    </div>
  );
}
<<<<<<< HEAD:src/components/integrations/IntegrationCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/IntegrationCards.tsx
