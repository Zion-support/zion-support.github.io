<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import { CreditCard, Plus, Trash } from 'lucide-react'



import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
origin/cursor/automate-test-improve-and-merge-code-2533
import { CreditCard, Plus, Trash } from 'lucide-react'

<<<<<<< HEAD
export function PaymentMethods() {
  // Mock payment methods
  const paymentMethods = [
    {
=======
import { CreditCard, Plus, Trash } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from 'lucide-react'

<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function PaymentMethods() {
  // Mock payment methods
<<<<<<< HEAD

  const paymentMethods = [
    {

      id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      expMonth: 12,
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      expYear: 2025,
      isDefault: true},
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",
      last4: "8888",
      expMonth: 4,
      expYear: 2026,
<<<<<<< HEAD
      isDefault: false}
  ],

=======
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======

export function PaymentMethods() {
  // Mock payment methods
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======







id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },
    {
      id: 'pm-2',
      type: 'credit_card',
      brand: 'Mastercard',
      last4: '8888',
      expMonth: 4,
      expYear: 2026,
      isDefault: false,
    },
  ];
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
<CardDescription>
          Manage your payment methods for automatic billing
        </CardDescription>
origin/cursor/automate-test-improve-and-merge-code-2533
      </CardHeader>

      <CardContent className="space-y-4">
        {paymentMethods.map((method,) => (
          <div
            key = {method.id,}
import React from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CreditCard, Plus, Trash } from 'lucide-react';
export function PaymentMethods() {;
  // Mock payment methods;
  const paymentMethods = [;
    {;
      id: 'pm-1',;
      type: 'credit_card',;
      brand: 'Visa',;
      last4: '4242',;
      expYear: 2025,;
      isDefault: true,;
    },;
    {;
      id: 'pm-2',;
      type: 'credit_card',;
      brand: 'Mastercard',;
      last4: '8888',;
      expMonth: 4,;
      expYear: 2026,;
      isDefault: false,;
    },;
  ];
  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>;
        {paymentMethods && paymentMethods.map(method => (;
          <div            key={method && method.id}
      <CardContent className="space-y-4">;
        {paymentMethods && paymentMethods.map((method,) => (;
          <div
            key = {method && method.id,}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? "bg-muted border-primary" : "border-border"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
<<<<<<< HEAD
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      Default
                    </span>
                  )}
                </p>
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
                <p className="text-sm text-muted-foreground">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
            <div className="flex gap-2">
              {!method.isDefault && (
=======

<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
                <Button size="sm" variant="ghost">Set Default</Button>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              )}
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      </CardContent>
      <CardFooter>
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

        <Button className="gap-1">

        <Button className="gap-1">

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        <Button className="gap-1">


        <Button className="gap-1">


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>;
    </Card>;
  );
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD
  )
=======

<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from 'lucide-react';
export function PaymentMethods() {;
  // Mock payment methods;
  const paymentMethods = [;
    {;
      id: "pm-1",;
      type: "credit_card",;
      brand: "Visa",;
      last4: "4242",;
      expMonth: 12,;
      expYear: 2025,;
      isDefault: true},;
    {;
      id: "pm-2",;
      type: "credit_card",;
      brand: "Mastercard",;
      last4: "8888",;
      expMonth: 4,;
      expYear: 2026;
      isDefault: false}
<<<<<<< HEAD
=======
  ];
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method) => (;
          <div;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${;
              method.isDefault ? "bg-muted border-primary" : "border-border";
            }`}
          >
            <div className='flex items-center space-x-4'>
              <div className='h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background'>
                <CreditCard className='h-5 w-5' />
              </div>
              <div>
                <p className='font-medium'>
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>
origin/cursor/automate-test-improve-and-merge-code-2533
                      Default
                    </span>
                  )}
                </p>
<p className='text-sm text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
<div className='flex gap-2'>
              {!method.isDefault && (
                <Button size='sm' variant='ghost'>
                  Set Default
                </Button>
              )}
              <Button size='sm' variant='ghost' className='text-destructive'>
                <Trash className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
              </Button>

            </div>
          </div>
        ))}
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
      </CardContent>;
      <CardFooter>;
        <Button className='gap-1'>;
          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx

<<<<<<< HEAD
  );
}

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
export /**
 * PaymentMethods - Function description
 */
function PaymentMethods() {
  // Mock payment methods;
  const payment_methods = [;
    {
      id: 'pm - 1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',
      exp_year: 2025,
      is_default: true,
    },
    {
      id: 'pm - 2',
      type: 'credit_card',
      brand: 'Mastercard',
      last4: '8888',
      exp_month: 4,
      exp_year: 2026,
      is_default: false,
    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ];
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method) => (;
          <div;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${;
              method.isDefault ? "bg-muted border-primary" : "border-border";
            }`}
          >;
            <div className="flex items-center space-x-4">;
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">;
                <CreditCard className="h-5 w-5" />;
              </div>;
              <div>;
                <p className="font-medium">;
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (;
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">;
                      Default;
                    </span>;
                  )}
                </p>;
                <p className="text-sm text-muted-foreground">;
                  Expires {method.expMonth}/{method.expYear}
                </p>;
              </div>;
            </div>;
            <div className="flex gap-2">;
              {!method.isDefault && (;
                <Button size="sm" variant="ghost">Set Default</Button>;
              )}
              <Button size="sm" variant="ghost" className="text-destructive">;
                <Trash className="h-4 w-4" />;
              </Button>;
            </div>;
          </div>;
        ))}
      </CardContent>;
      <CardFooter>;
        <Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
=======
      </CardContent>
      <CardFooter>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
      </CardContent>
      <CardFooter>
<Button className='gap-1'>
          <Plus className='h-4 w-4' />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
  );
}
<<<<<<< HEAD:src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
