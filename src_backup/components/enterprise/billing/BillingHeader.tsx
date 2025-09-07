<<<<<<< HEAD:src_backup/components/enterprise/billing/BillingHeader.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/billing/BillingHeader.tsx

<<<<<<< HEAD:src_backup/components/enterprise/billing/BillingHeader.tsx
import React from "react",
import { Button } from "@/components/ui/button";
import { Download, Mail, BarChart3 } from 'lucide-react'
import Link from "next/link";
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Mail, BarChart3 } from 'lucide-react'
import Link from 'next/link'
export function BillingHeader() {
  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Billing & Invoices
        </h1>
        <div className='flex gap-2'>
          <Button variant='outline' size='sm' className='gap-1'>
            <Download className='h-4 w-4' />
            Export
          </Button>
          <Button variant='outline' size='sm' className='gap-1'>
            <Mail className='h-4 w-4' />
            Contact Billing Support
          </Button>
          <Button variant='outline' size='sm' className='gap-1' asChild>
            <Link href='/dashboard/client/analytics'>
              <BarChart3 className='h-4 w-4' />
<<<<<<< HEAD:src_backup/components/enterprise/billing/BillingHeader.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/billing/BillingHeader.tsx
export function BillingHeader() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Mail className="h-4 w-4" />
            Contact Billing Support
          </Button>




          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/dashboard/client/analytics">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>
          </Button>
        </div>
      </div>

<<<<<<< HEAD:src_backup/components/enterprise/billing/BillingHeader.tsx
      <p className="text-muted-foreground">

        Manage your subscription, view invoice history, and update payment methods.
      </p>
    </div>

export function BillingHeader() {;
  return (
    <div className='space-y-2'>;
=======
;
import React from "react",import { Button  } from '@/components/ui/button';
import { Download, Mail, BarChart3  } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
export function BillingHeader() {return (<div className='space-y-2'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-3xl font-bold tracking-tight'>;
          Billing & Invoices;
        </h1>;
        <div className='flex gap-2'>;
          <Button variant='outline' size='sm' className='gap-1'>;
            <Download className='h-4 w-4' />;
            Export;
          </Button>;
          <Button variant='outline' size='sm' className='gap-1'>;
            <Mail className='h-4 w-4' />;
            Contact Billing Support;
          </Button>;
          <Button variant='outline' size='sm' className='gap-1' asChild>;
            <Link href='/dashboard/client/analytics'>;
              <BarChart3 className='h-4 w-4' />;
export function BillingHeader() {return (<div className="space-y-2">;
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>;
        <div className="flex gap-2">;
          <Button variant="outline" size="sm" className="gap-1">;
            <Download className="h-4 w-4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1">;
            <Mail className="h-4 w-4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1" asChild>;
            <Link href="/dashboard/client/analytics">;
              <BarChart3 className="h-4 w-4" />;
              Analytics;
            </Link>;
          </Button>;
        </div>;
      </div>;
      <p className="text-muted-foreground">;
        Manage your subscription, view invoice history, and update payment methods.;
      </p>;
    </div>;
export function BillingHeader() {return (<div className='space-y-2'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/billing/BillingHeader.tsx
      <div className='flex items-center justify-between'>;
        <h1 className='text-3xl font-bold tracking-tight'>;
          Billing & Invoices;
        </h1>;
        <div className='flex gap-2'>;
          <Button variant='outline' size='sm' className='gap-1'>;
            <Download className='h-4 w-4' />;
            Export;
          </Button>;
          <Button variant='outline' size='sm' className='gap-1'>;
            <Mail className='h-4 w-4' />;
            Contact Billing Support;
          </Button>;
          <Button variant='outline' size='sm' className='gap-1' asChild>;
            <Link href='/dashboard/client/analytics'>;
              <BarChart3 className='h-4 w-4' />              Analytics;
          <Button variant="outline" size="sm" className="gap-1" asChild>;
            <Link href="/dashboard/client/analytics">;
              <BarChart3 className="h-4 w-4" />;)import { Button } from "@/components/ui/button",export function BillingHeader() {return (<div className="space-y-2">;
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>;
        <div className="flex gap-2">;
          <Button variant="outline" size="sm" className="gap-1">;
            <Download className="h-4 w-4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1">;
            <Mail className="h-4 w-4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1" asChild>;
            <Link href="/dashboard/client/analytics">;
              <BarChart3 className="h-4 w-4" />;
import { Button  } from '@/components / ui / button';
import Link from 'next / link';
export /**;
 * BillingHeader - Function description;
 */;
function BillingHeader() {return (<div className='space - y-2'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 3xl font - bold tracking - tight'>;
          Billing & Invoices;
        </h1>;
        <div className='flex gap - 2'>;
          <Button variant='outline' size='sm' className='gap - 1'>;
            <Download className='h - 4 w - 4' />;
            Export;
          </Button>;
          <Button variant='outline' size='sm' className='gap - 1'>;
            <Mail className='h - 4 w - 4' />;
            Contact Billing Support;
          </Button>;
          <Button variant='outline' size='sm' className='gap - 1' as_child>;
            <Link href='/dashboard / client / analytics'>;
              <BarChart3 className='h - 4 w - 4' />              Analytics;
          <Button variant="outline" size="sm" className="gap - 1" as_child>;
            <Link href="/dashboard / client / analytics">;
              <BarChart3 className="h - 4 w - 4" />;
import React from './react';
import { Button   } from '@/components / ui / button';
import Link from './next / link';
export /**;
 * BillingHeader - Function description;
 */;
function BillingHeader() {return (<div className="space - y-2">;
      <div className="flex items - center justify - between">;
        <h1 className="text - 3xl font - bold tracking - tight">Billing & Invoices</h1>;
        <div className="flex gap - 2">;
          <Button variant="outline" size="sm" className="gap - 1">;
            <Download className="h - 4 w - 4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 1">;
            <Mail className="h - 4 w - 4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 1" as_child>;
            <Link href="/dashboard / client / analytics">;
              <BarChart3 className="h - 4 w - 4" />;
              Analytics;
            </Link>;
          </Button>;
        </div>;
      </div>;<p className='text - muted - foreground'>;
        Manage your subscription, view invoice history, and update payment;
        methods.;
      </p>;
    </div>) <p className="text - muted - foreground">;
        Manage your subscription, view invoice history, and update payment methods.;
      </p>;
<<<<<<< HEAD:src_backup/components/enterprise/billing/BillingHeader.tsx
    </div>);
}
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/billing/BillingHeader.tsx

<p className='text-muted-foreground'>
        Manage your subscription, view invoice history, and update payment
        methods.
      </p>
    </div>
  );
<<<<<<< HEAD:src_backup/components/enterprise/billing/BillingHeader.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </div>)}<p className='text-muted-foreground'>;
        Manage your subscription, view invoice history, and update payment;
        methods.;
      </p>;
    </div>;
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/enterprise/billing/BillingHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/enterprise/billing/BillingHeader.tsx
