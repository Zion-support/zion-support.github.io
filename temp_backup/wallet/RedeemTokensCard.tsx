/* eslint-disable */
 import { ;
  {;
  {;
  Gift,  ArrowRight, ExternalLink ;
  } from 'lucide-react';
import {;
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
  DialogTitle;
  DialogTrigger} from '@/components/ui/dialog',type RewardOption = any;
  Card;
  CardContent;
  CardDescription;
  CardHeader;
  CardTitle;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button'; import { Gift, ArrowRight, ExternalLink  } from 'lucide-react';
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
  DialogTitle;
  DialogTrigger;
} from '@/components/ui/dialog';

type RewardOption = any;
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button'; import { Gift, ArrowRight, ExternalLink } from 'lucide-react'
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from '@/components/ui/dialog',

  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'; import { Gift, ArrowRight, ExternalLink } from 'lucide-react'
  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle
  DialogTrigger
} from '@/components/ui/dialog'
type RewardOption = {
  id: string
title: string;
description: string;
cost: number;';''
type: 'credit' | 'feature' | 'course' ;'
};''
const REWARD OPTIONS: RewardOption[] = [ {';''
  id: 'premium-week';';''
title: 'Premium Week';';''
description: '7 days of premium features including top placement in search results';''
cost: 100;';''
type: 'feature' ;'
};''
{';''
  id: 'resume-review';';''
title: 'AI Resume Review';';''
description: 'Get your resume analyzed and optimized by our AI';''
cost: 50;';''
type: 'feature' ;'
};''
{';''
  id: 'platform-credit';';''
title: '$5 Platform Credit';';''
description: 'Get $5 credit to use on any paid service';''
cost: 100;';''
type: 'credit' ;
}];
export function RedeemTokensCard () {;
  const {;
  wallet, spendTokens ;
}= useWallet ();
const [open, setOpen] = useState (false);
const handleRedeem = async (option: RewardOption) => {;
  if (!wallet || wallet.balance < option.cost) return;
await spendTokens (option.cost, `Redeemed: $ {;
  option.title ;`
}`);
setOpen (false) ;'
};''
flex items-center gap-2'> <Gift className=' h-5 w-5'/> Redeem Rewards </CardTitle> <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription> </CardHeader> <CardContent> <Dialog open= {;
  open ;'
}onOpenChange= {;''
  setOpen ';''
}> <DialogTrigger asChild> <Button className=' w-full'>View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;''
  wallet?.balance || 0 ';''
}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=' ml-1 h-3 w-3' /> </Button> </div> </div>) ) ;''
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;''''
}''''''`