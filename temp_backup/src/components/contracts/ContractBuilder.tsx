/* eslint-disable */
 interface ContractBuilderProps {;
  isOpen: boolean;
onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void ;
}export function ContractBuilder ({;
  isOpen;
onClose;
talent;
clientName;
onContractGenerated ;
}: ContractBuilderProps) {;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen,  setTemplateManagerOpen] = useState (false);
const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
const handleLoadTemplate = (templateData: ContractFormValues) => {;
  setFormValues (templateData) ;
};
const handleContractGenerated = (contract: string) => {;
  if (onContractGenerated) {;
  onContractGenerated (contract) ;
}
};
return (<SmartContractBuilder isOpen= {;
  isOpen ;
}/>) ;
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {;
  talent ;
}clientName= {;
  clientName ;
}initialValues= {;
  formValues ;
}onFormValuesChange= {;
  setFormValues ;
}onContractGenerated= {;
  handleContractGenerated ;
}/> </TabsContent> />) ;
}</TabsContent> </Tabs> <TemplateManager isOpen= {;
  templateManagerOpen ;
}onClose= {;
  () => setTemplateManagerOpen (false) ;
}onSelectTemplate= {;
  handleLoadTemplate ;
}currentValues= {;
  formValues ;"
}/> </DialogContent> </Dialog>) ;""
}"""