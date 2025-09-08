/* eslint-disable */
 interface SmartContractDeploymentProps {;
  solidityCode: string;
onDeploy: (options: DeploymentOptions) => Promise<void>;
isDeploying: boolean ;
}export function SmartContractDeployment ({;
  solidityCode;
onDeploy;
isDeploying ;
}: SmartContractDeploymentProps) {;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions> ({;
  network: 'none';'
useEscrow: true;''
deployToChain: false;';''
walletAddress: '' ;
});
const handleDeployContract = async () => {;
  if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {;
}try {;'
  await onDeploy (deploymentOptions) ;''
}catch (error) {';''
  logErrorToProduction ('Deployment error:', {;
  data: error ;
}) ;
}
};
<CardHeader> <CardTitle className="flex items-center gap-2" > <ShieldCheck className="h-5 w-5 text-primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-4" > <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="deploy-blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items-center space-x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label htmlFor="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items-center space-x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label htmlFor="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space-y-2" > <Label htmlFor="wallet-address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="use-escrow" >Use escrow for payments</Label> </div> </>) ;
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button onClick={;
  handleDeployContract ;
}disabled= {;'"
  isDeploying ;'"'"
}> {'";'"'"
  isDeploying ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract') ;'"
}</Button> </CardFooter> </Card>) ;'"'"
}'"'"'"