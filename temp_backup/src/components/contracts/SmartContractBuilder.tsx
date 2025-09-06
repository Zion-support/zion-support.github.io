/* eslint-disable */
 interface SmartContractBuilderProps {;
  isOpen: boolean;
onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void ;
}export function SmartContractBuilder ({;
  isOpen;
onClose;
talent;
clientName;
onContractGenerated ;
}: SmartContractBuilderProps) {;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen,  setTemplateManagerOpen] = useState (false);
const [deployOptions, setDeployOptions] = useState<DeploymentOptions> ({;
  network: 'ethereum';
useEscrow: true;'
deployToChain: false ;''
});';''
const [deployStatus, setDeployStatus] = useState<string> ('');
const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null> (null);
const {;
  deploySmartContract ;
}= useSmartContracts ();
const handleLoadTemplate = (templateData: ContractFormValues) => {;
  setFormValues (templateData) ;
};
//Convert ContractFormValues to contract content string const handleDeployContract = async () => {;'
  if (!generatedContract) return;''
try {';''
  setDeployStatus ('deploying');''
const contractInfo = await deploySmartContract (generatedContract, deployOptions);';''
setDeployStatus ('error');
toast.error ("Failed to deploy smart contract");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ;
}'
};''
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {';''"
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {;""
  setGeneratedContract (contract);";""
setActiveTab ("preview");""
};";""
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 </TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {;
  talent ;
}clientName= {;
  clientName ;
}initialValues= {;
  formValues ;
}onFormValuesChange= {;
  setFormValues ;
}onContractGenerated= {;
  handleFormSubmit ;
}/> </TabsContent> <div> <ContractPreview generatedContract= {;
  generatedContract ;
}talent= {;
  talent ;
}onClose= {;
  onClose ;
}deploymentInfo= {;'
  deploymentInfo ;''
}/> > {';''
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' ;
}</Button> </div>) ;
}</div>) ;
}</TabsContent> </Tabs> <TemplateManager isOpen= {;
  templateManagerOpen ;
}onClose= {;
  () => setTemplateManagerOpen (false) ;
}onSelectTemplate= {;
  handleLoadTemplate ;
}currentValues= {;
  formValues ;'"
}/> </DialogContent> </Dialog>) ;'"'"
}'"'"'"