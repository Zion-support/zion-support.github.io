<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx

<CardTitle className="flex items-center gap-2">"
</CardTitle>"
            <FileText className="h-5 w-5" />"
</FileText>
=======
<<<<<<< HEAD

import { Button } from '@/components/ui/button'
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


import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from 'lucide-react'

interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <FileText className='h-5 w-5' />            Standard Contracts
          <CardTitle className="flex items-center gap-2">
<CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
interface ContractTypeCardsProps {

  onStandardClick: () => void

  onSmartClick: () => void
}
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
=======
<CardTitle className="flex items-center gap-2">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <FileText className="h-5 w-5" />
            Standard Contracts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
          </CardTitle>
          <CardDescription>
</CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</CardContent>

"
          <ul className="space-y-2">"
</ul>"
            <li className="text-sm">✓ Legally binding templates</li>""
            <li className="text-sm">✓ Milestone-based payment terms</li>""
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>""
            <li className="text-sm">✓ DocuSign integration</li>"
          </ul>
        </CardContent>
        <CardFooter>
</CardFooter>"
          <Button variant="outline" onClick={onStandardClick}>"
</Button>"
          <Button variant="outline" onClick={onStandardClick}>"
</Button>
=======
<<<<<<< HEAD
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant='outline' onClick={onStandardClick}>            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={onStandardClick}>
<<<<<<< HEAD
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center'>
            <CardTitle className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary' />
              Smart Contracts
            </CardTitle>
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>              Blockchain Powered      <Card>
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">


          <Button variant="outline" onClick={onStandardClick}>
=======


          <Button variant="outline" onClick={onStandardClick}>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Create Standard Contract
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
</Card>


"
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">"
</CardHeader>"
          <div className="flex justify-between items-center">"
</div>"
            <CardTitle className="flex items-center gap-2">"
</CardTitle>"
              <ShieldCheck className="h-5 w-5 text-primary" />"
</ShieldCheck>
            </CardTitle>"
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">"
</span>
            </span>
          </div>
          <CardDescription>
</CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</CardContent>
"
          <ul className="space-y-2">"
</ul>"
            <li className="text-sm">✓ All standard contract features</li>""
            <li className="text-sm">✓ Automatic escrow payment release</li>""
            <li className="text-sm">✓ Transaction verification</li>""
            <li className="text-sm">✓ Permanent on-chain record</li>""
            <li className="text-sm">✓ Multi-signature approval flow</li>"
          </ul>
        </CardContent>
        <CardFooter>
</CardFooter>
=======
<<<<<<< HEAD
          <ul className="space-y-2">
          <ul className="space-y-2">
=======

          <ul className="space-y-2">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <li className="text-sm">✓ All standard contract features</li>
            <li className="text-sm">✓ Automatic escrow payment release</li>
            <li className="text-sm">✓ Transaction verification</li>
            <li className="text-sm">✓ Permanent on-chain record</li>
            <li className="text-sm">✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
    </div>
  )
}
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
            onClick={onSmartClick}
          <Button
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600'            onClick={onSmartClick}          <ul className="space-y-2">
            <li className="text-sm">✓ All standard contract features</li>
            <li className="text-sm">✓ Automatic escrow payment release</li>
            <li className="text-sm">✓ Transaction verification</li>
            <li className="text-sm">✓ Permanent on-chain record</li>
            <li className="text-sm">✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
            onClick = {onSmartClick,}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx

          <Button;"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600""
            onClick={onSmartClick}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
</Button>
          </Button>
        </CardFooter>
      </Card>
    </div>
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
          <Button;"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { FileText, ShieldCheck } from 'lucide-react';'
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
</Button>'
    <div className='grid md:grid-cols-2 gap-6 mb-10'>;'
</div>
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';


          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void;

<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
;
interface ContractTypeCardsProps {;
  onStandardClick:() => void,;
  onSmartClick:() => void;
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick } ContractTypeCardsProps) {;
  return (;
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (;
=======
export function ContractTypeCards(): any ({;
  onStandardClick,;
  onSmartClick,;
}: ContractTypeCardsProps) {;
  return (
    <div className='grid md:grid-cols-2 gap-6 mb-10'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
      <Card>;
</Card>
        <CardHeader>;
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</CardHeader>'
          <CardTitle className='flex items-center gap-2'>;'
</CardTitle>'
            <FileText className='h-5 w-5' />            Standard Contracts;'
</FileText>'
          <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
            <FileText className="h-5 w-5" />;"
</FileText>"
    <div className="grid md:grid-cols-2 gap-6 mb-10">;"
</div>
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
            <FileText className="h-5 w-5" />;"
</FileText>"
    <div className='grid md:grid - cols - 2 gap - 6 mb - 10'>;'
</div>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>'
          <CardTitle className='flex items - center gap - 2'>;'
</CardTitle>'
            <FileText className='h - 5 w - 5' />            Standard Contracts;'
</FileText>'
          <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
            <FileText className="h - 5 w - 5" />;"
</FileText>"
    <div className="grid md:grid - cols - 2 gap - 6 mb - 10">;"
</div>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
            <FileText className="h - 5 w - 5" />;"
</FileText>
          </CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</CardContent>
"
          <ul className='space - y-2'>;'
</ul>'
            <li className='text - sm'>✓ Legally binding templates</li>;''
            <li className='text - sm'>✓ Milestone - based payment terms</li>;''
            <li className='text - sm'>✓ IP rights and confidentiality clauses</li>;''
            <li className='text - sm'>✓ DocuSign integration</li>;'
=======
<<<<<<< HEAD
          <ul className="space-y-2">;
            <li className="text-sm">✓ Legally binding templates</li>;
            <li className="text-sm">✓ Milestone-based payment terms</li>;
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text-sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" onClick={onStandardClick}>;
            Create Standard Contract;
=======

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ Legally binding templates</li>;
            <li className='text - sm'>✓ Milestone - based payment terms</li>;
            <li className='text - sm'>✓ IP rights and confidentiality clauses</li>;
            <li className='text - sm'>✓ DocuSign integration</li>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
          </ul>;
        </CardContent>;
        <CardFooter>;
</CardFooter>'
          <Button variant='outline' on_click={onStandardClick}>            Create Standard Contract;'
</Button>
          </Button>;
        </CardFooter>;
      </Card>;'
          <ul className="space - y-2">;"
</ul>"
            <li className="text - sm">✓ Legally binding templates</li>;""
            <li className="text - sm">✓ Milestone - based payment terms</li>;""
            <li className="text - sm">✓ IP rights and confidentiality clauses</li>;""
            <li className="text - sm">✓ DocuSign integration</li>;"
          </ul>;
        </CardContent>;
        <CardFooter>;
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</CardFooter>"
          <Button variant="outline" on_click={onStandardClick}>;"
</Button>
=======
          <Button variant="outline" on_click={onStandardClick}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</Card>"
        <CardHeader className='bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg'>;'
</CardHeader>'
          <div className='flex justify - between items - center'>;'
</div>'
            <CardTitle className='flex items - center gap - 2'>;'
</CardTitle>'
              <ShieldCheck className='h - 5 w - 5 text - primary' />;'
</ShieldCheck>
            </CardTitle>;'
            <span className='px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;'
</span>'
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;"
</CardHeader>"
          <div className="flex justify - between items - center">;"
</div>"
            <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
              <ShieldCheck className="h - 5 w - 5 text - primary" />;"
</ShieldCheck>
            </CardTitle>;"
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;"
</span>
=======
<<<<<<< HEAD
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
=======
        <CardHeader className='bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg'>;
          <div className='flex justify - between items - center'>;
            <CardTitle className='flex items - center gap - 2'>;
              <ShieldCheck className='h - 5 w - 5 text - primary' />;
              Smart Contracts;
            </CardTitle>;
            <span className='px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;
          <div className="flex justify - between items - center">;
            <CardTitle className="flex items - center gap - 2">;
              <ShieldCheck className="h - 5 w - 5 text - primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Blockchain Powered;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
            </span>;
          </div>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</CardContent>
"
          <ul className='space - y-2'>;'
</ul>'
            <li className='text - sm'>✓ All standard contract features</li>;''
            <li className='text - sm'>✓ Automatic escrow payment release</li>;''
            <li className='text - sm'>✓ Transaction verification</li>;''
            <li className='text - sm'>✓ Permanent on - chain record</li>;''
            <li className='text - sm'>✓ Multi - signature approval flow</li>;'
          </ul>;
        </CardContent>;
        <CardFooter>;
</CardFooter>
          <Button;'
            className='w - full bg - gradient - to - r from - blue - 600 to - indigo - 600'            on_click={onSmartClick}          <ul className="space - y-2">;"
</Button>"
            <li className="text - sm">✓ All standard contract features</li>;""
            <li className="text - sm">✓ Automatic escrow payment release</li>;""
            <li className="text - sm">✓ Transaction verification</li>;""
            <li className="text - sm">✓ Permanent on - chain record</li>;""
            <li className="text - sm">✓ Multi - signature approval flow</li>;"
=======
<<<<<<< HEAD
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
=======

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ All standard contract features</li>;
            <li className='text - sm'>✓ Automatic escrow payment release</li>;
            <li className='text - sm'>✓ Transaction verification</li>;
            <li className='text - sm'>✓ Permanent on - chain record</li>;
            <li className='text - sm'>✓ Multi - signature approval flow</li>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
<<<<<<< HEAD
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;
=======
            className='w - full bg - gradient - to - r from - blue - 600 to - indigo - 600'            on_click={onSmartClick}          <ul className="space - y-2">;
            <li className="text - sm">✓ All standard contract features</li>;
            <li className="text - sm">✓ Automatic escrow payment release</li>;
            <li className="text - sm">✓ Transaction verification</li>;
            <li className="text - sm">✓ Permanent on - chain record</li>;
            <li className="text - sm">✓ Multi - signature approval flow</li>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
          </ul>;
        </CardContent>;
        <CardFooter>;
</CardFooter>
          <Button;"
            className="w - full bg - gradient - to - r from - blue - 600 to - indigo - 600";"
            on_click = {onSmartClick, }
          >;
<<<<<<< HEAD:temp-disabled/src/components/contracts/page/ContractTypeCards.tsx
</Button>
          </Button>;
        </CardFooter>;
      </Card>;
    </div>);"

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
  );
};
}
  );
};
}
}
    </div>);
}
    </div>;
  ),;}
 import {;
  {;
  {;
  FileText, ShieldCheck ;
}from 'lucide-react' interface ContractTypeCardsProps {;
  onStandardClick: () => void;
onSmartClick: () => void ;
}export function ContractTypeCards ({;
  onStandardClick, onSmartClick ;
}: ContractTypeCardsProps) {;
  return (<div className="grid md:grid-cols-2 gap-6 mb-10" > flex items-center gap-2"> <FileText className=" h-5 w-5"/> Standard Contracts </CardTitle> <CardDescription> Generate traditional legal agreements for your projects </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm">✓ Legally binding templates</li> <li className=" text-sm">✓ Milestone-based payment terms</li> <li className=" text-sm">✓ IP rights and confidentiality clauses</li> <li className=" text-sm">✓ DocuSign integration</li> </ul> </CardContent> <CardFooter> <Button variant=" outline"onClick={;
  onStandardClick ";
}> Create Standard Contract </Button> </CardFooter> </Card> <Card> <CardHeader className=" bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg"> <div className=" flex justify-between items-center"> <CardTitle className=" flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contracts </CardTitle> <span className=" px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"> Blockchain Powered </span> </div> <CardDescription> Deploy agreements on Ethereum or Polygon with escrow capabilities </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm">✓ All standard contract features</li> <li className=" text-sm">✓ Automatic escrow payment release</li> <li className=" text-sm">✓ Transaction verification</li> <li className=" text-sm">✓ Permanent on-chain record</li> <li className=" text-sm" >✓ Multi-signature approval flow</li> </ul> </CardContent> <CardFooter> <Button > Create Smart Contract </Button> </CardFooter> </Card> </div>) ;
}'"
    </div>;
  );
};
}
}
;
    </div>);
}

;
=======

  );
}

    </div>);
}

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/page/ContractTypeCards.tsx
