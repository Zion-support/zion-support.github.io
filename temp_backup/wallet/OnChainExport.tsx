/* eslint-disable */
 import { ;
  {;
  {;
  Wallet, Info, Check,  ChevronRight, ArrowUpRight ;
<<<<<<< HEAD
  } from 'lucide-react';
=======
  } from "lucide-react";
>>>>>>> origin/resolved-merge-conflicts
import {;
  Tooltip;
TooltipContent;
TooltipProvider;
export function OnChainExport () {;
  const [isConnected, setIsConnected] = useState (false);
const [isExporting,  setIsExporting] = useState (false);';''
const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'> ('idle');
const {;
  toast ;
}= useToast ();
const {;
  user ;
}= useAuth ();
try {;
  //Check if wallet is available return;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ;
>>>>>>> origin/resolved-merge-conflicts
}//Request accounts ;'
}''
};';''
setExportStatus ('success');
toast ({;'
  ;''
}catch (error: any) {';''
  setExportStatus ('error');
toast ({;
}finally {;
  setIsExporting (false) ;
<<<<<<< HEAD
}'
};'''
h-5 w-5'/>) ';''''
}On-chain Export <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Info className=' h-4 w-4 text-muted-foreground cursor-help'/> </TooltipTrigger> <TooltipContent> <p className=' max-w-xs'>Export your ZION$ tokens to an external blockchain wallet</p> </TooltipContent> </Tooltip> </TooltipProvider> </CardTitle> <CardDescription>Export your ZION$ to an external wallet</CardDescription> </CardHeader> <CardContent> <span>Available to export:</span> <span className=' font-medium'>250 ZION$</span> </div> {'';''''
  exportStatus === 'success' ? (<Button className=' w-full bg-green-600 hover:bg-green-700'disabled> <Check className=' mr-2 h-4 w-4'/> Tokens Exported </Button>) : (<Button className=' w-full'onClick={;
  handleExportTokens ;
}disabled= {;'
  isExporting ;''
}> </Button>) ';''
}</div>) : (<div className=' space-y-2'> <p className=' text-sm text-muted-foreground mb-3' > Connect your web3 wallet to export tokens to the blockchain. </p> Connect Wallet </Button> </div>) ;''
}</CardContent> </Card>) ;''''
}''''''
=======
}"
};"'"
h-5 w-5"/>) ";'"'"
}On-chain Export <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Info className=" h-4 w-4 text-muted-foreground cursor-help"/> </TooltipTrigger> <TooltipContent> <p className=" max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p> </TooltipContent> </Tooltip> </TooltipProvider> </CardTitle> <CardDescription>Export your ZION$ to an external wallet</CardDescription> </CardHeader> <CardContent> <span>Available to export:</span> <span className=" font-medium">250 ZION$</span> </div> {'";'"'"
  exportStatus === 'success' ? (<Button className=" w-full bg-green-600 hover:bg-green-700"disabled> <Check className=" mr-2 h-4 w-4"/> Tokens Exported </Button>) : (<Button className=" w-full"onClick={;
  handleExportTokens ;
}disabled= {;"
  isExporting ;""
}> </Button>) ";""
}</div>) : (<div className=" space-y-2"> <p className=" text-sm text-muted-foreground mb-3" > Connect your web3 wallet to export tokens to the blockchain. </p> Connect Wallet </Button> </div>) ;'"
}</CardContent> </Card>) ;'"'"
}'"'"'"
>>>>>>> origin/resolved-merge-conflicts
