// Next.jsstubsfor compatibilitydeclaremodule 'next/link' {
  import { ComponentType } from 'react';
  interfaceLinkProps { 
    href: string;
    children: React.ReactNode;
    className ?  : string;
   }
  constLink: ComponentType<LinkProps>;
  exportdefaultLink;
}

declaremodule 'next/head' {
  import { ComponentType } from 'react';
  interfaceHeadProps {
    children: React.ReactNode;
  }
  constHead: ComponentType<HeadProps>;
  exportdefaultHead;
}
