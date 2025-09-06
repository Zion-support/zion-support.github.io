<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from 'lucide-react'

interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { FileText, ShieldCheck } from 'lucide-react'
interface ContractTypeCardsProps {
  onStandardClick: () => void
  onSmartClick: () => void
export function ContractTypeCards({
  onStandardClick
  onSmartClick
}: ContractTypeCardsProps) {
  return (
    <div className='grid md:grid-cols-2 gap-6 mb-10'>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
  onStandardClick: () => void;
  onSmartClick: () => void
}
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className="flex items-center gap-2">
<CardTitle className="flex items-center gap-2">
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
            <FileText className="h-5 w-5" />
=======
          <CardTitle className="flex items-center gap-2">            <FileText className="h-5 w-5" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            Standard Contracts
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>

<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <Button variant="outline" onClick={onStandardClick}>
<<<<<<< HEAD
=======
=======
          <Button variant="outline" onClick={onStandardClick}>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx


          <Button variant="outline" onClick={onStandardClick}>

<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
<ul className='space-y-2'>
            <li className='text-sm'>✓ Legally binding templates</li>
            <li className='text-sm'>✓ Milestone-based payment terms</li>
            <li className='text-sm'>✓ IP rights and confidentiality clauses</li>
            <li className='text-sm'>✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant='outline' onClick={onStandardClick}>
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
      
      <Card>
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Smart Contracts
            </CardTitle>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
<Card>
        <CardHeader className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center'>
            <CardTitle className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary' />
              Smart Contracts
            </CardTitle>
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Blockchain Powered
            </span>
          </div>
          <CardDescription>
            Deploy agreements on Ethereum or Polygon with escrow capabilities
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <CardContent>
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <ul className="space-y-2">
            <li className="text-sm">✓ All standard contract features</li>
            <li className="text-sm">✓ Automatic escrow payment release</li>
            <li className="text-sm">✓ Transaction verification</li>
            <li className="text-sm">✓ Permanent on-chain record</li>
            <li className="text-sm">✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
=======

          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
            onClick={onSmartClick}
=======
        <CardContent>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
<ul className='space-y-2'>
            <li className='text-sm'>✓ All standard contract features</li>
            <li className='text-sm'>✓ Automatic escrow payment release</li>
            <li className='text-sm'>✓ Transaction verification</li>
            <li className='text-sm'>✓ Permanent on-chain record</li>
            <li className='text-sm'>✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600'
            onClick={onSmartClick}
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>

<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void;
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

export function ContractTypeCards(): any ({;
  onStandardClick,;
  onSmartClick,;
}: ContractTypeCardsProps) {;
  return (
    <div className='grid md:grid-cols-2 gap-6 mb-10'>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <FileText className='h-5 w-5' />            Standard Contracts;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;

interface ContractTypeCardsProps {;
  onStandardClick: () => void,;
  onSmartClick: () => void;
}

export function ContractTypeCards(): any ({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
=======
        <CardContent>    <div className="grid md:grid-cols-2 gap-6 mb-10">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {
  onStandardClick: () => void;
  onSmartClick: () => void;
export /**
 * ContractTypeCards - Function description
 */
function ContractTypeCards() {
  return (
    <div className='grid md:grid - cols - 2 gap - 6 mb - 10'>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <FileText className='h - 5 w - 5' />            Standard Contracts;
          <CardTitle className="flex items - center gap - 2">;
            <FileText className="h - 5 w - 5" />;
interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void;
}
export /**
 * ContractTypeCards - Function description
 */
function ContractTypeCards() {
  return (
    <div className="grid md:grid - cols - 2 gap - 6 mb - 10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <FileText className="h - 5 w - 5" />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
            Standard Contracts;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
          <ul className="space-y-2">;
            <li className="text-sm">✓ Legally binding templates</li>;
            <li className="text-sm">✓ Milestone-based payment terms</li>;
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text-sm">✓ DocuSign integration</li>;
=======

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ Legally binding templates</li>;
            <li className='text - sm'>✓ Milestone - based payment terms</li>;
            <li className='text - sm'>✓ IP rights and confidentiality clauses</li>;
            <li className='text - sm'>✓ DocuSign integration</li>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
          </ul>;
        </CardContent>;
        <CardFooter>;
<<<<<<< HEAD
          <Button variant="outline" onClick={onStandardClick}>;
            Create Standard Contract;
=======
          <Button variant='outline' on_click={onStandardClick}>            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
          <ul className="space-y-2">;
            <li className="text-sm">✓ Legally binding templates</li>;
            <li className="text-sm">✓ Milestone - based payment terms</li>;
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text-sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" on_click={onStandardClick}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
<<<<<<< HEAD
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
=======
            <span className='px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded-t-lg">;
          <div className="flex justify - between items-center">;
            <CardTitle className="flex items - center gap-2">;
              <ShieldCheck className="h - 5 w - 5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded-full">;

<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ All standard contract features</li>;
            <li className='text - sm'>✓ Automatic escrow payment release</li>;
            <li className='text - sm'>✓ Transaction verification</li>;
            <li className='text - sm'>✓ Permanent on - chain record</li>;
            <li className='text - sm'>✓ Multi - signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className='w - full bg - gradient - to - r from - blue - 600 to - indigo - 600'            on_click={onSmartClick}          <ul className="space - y-2">;
            <li className="text - sm">✓ All standard contract features</li>;
            <li className="text - sm">✓ Automatic escrow payment release</li>;
            <li className="text - sm">✓ Transaction verification</li>;
            <li className="text - sm">✓ Permanent on - chain record</li>;
            <li className="text - sm">✓ Multi - signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className="w - full bg - gradient - to - r from - blue - 600 to - indigo - 600";
            on_click = {onSmartClick, }
          >;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;

<<<<<<< HEAD
  );
}
<<<<<<< HEAD
=======

    </div>);
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD
=======
          </Button>;
        </CardFooter>;
      </Card>;
    </div>;
  )
};
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/page/ContractTypeCards.tsx
