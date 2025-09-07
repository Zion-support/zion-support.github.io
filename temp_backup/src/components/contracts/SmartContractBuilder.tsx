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
<<<<<<< HEAD
toast.error ('Failed to deploy smart contract');
}'
};''
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {';'''
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {;''
  setGeneratedContract (contract);';''
setActiveTab ('preview');''
};';''
=======
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
>>>>>>> origin/resolved-merge-conflicts
  talent ;
}clientName= {clientName ;}
}initialValues= {formValues ;}
}onFormValuesChange= {setFormValues ;}
}onContractGenerated= {handleFormSubmit ;}
}/> </TabsContent> <div /> <ContractPreviewgeneratedContract= {generatedContract;}
}talent= {talent;}
}onClose= {onClose;}
}deploymentInfo= {deploymentInfo;}
}/> > {';}
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' ;}
}</Button> </div>)}</div>)}</TabsContent> </Tabs> <TemplateManagerisOpen= {templateManagerOpen;}
}onClose= {() = /> setTemplateManagerOpen (false)}onSelectTemplate= {handleLoadTemplate ;}
<<<<<<< HEAD
}currentValues= {formValues ;}'
}/> </DialogContent> </Dialog>)}''            {!enableOnChainAgreement && <p className='text-muted-foreground p-4 text-center' />Enable on-chain agreement to deploy this contract to a blockchain.</p>}
            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on-chain flow */}{/* {generatedSolidityContract && !deployOptions && deployOptions.deployToChain && !enableOnChainAgreement && ( ... )} */}</TabsContent>;
        </Tabs>;<TemplateManager;'
          <TabsContent value='preview' className='pt-4' />;
            {generatedContract && (<div />;
                <ContractPreview />;'
                {!deploymentInfo && deployOptions.deployToChain && (<div className='mt-6 flex justify-center' />;}
                    <Button;}
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}'
                      className='bg-gradient-to-r from-blue-600 to-indigo-600 hover: from-blue-700 hover:to-indigo-700' />
=======
}currentValues= {formValues ;}"
}/> </DialogContent> </Dialog>)}'"            {!enableOnChainAgreement && <p className="text-muted-foreground p-4 text-center" />Enable on-chain agreement to deploy this contract to a blockchain.</p>}
            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on-chain flow */}{/* {generatedSolidityContract && !deployOptions && deployOptions.deployToChain && !enableOnChainAgreement && ( ... )} */}</TabsContent>;
        </Tabs>;<TemplateManager;"
          <TabsContent value="preview" className="pt-4" />;
            {generatedContract && (<div />;
                <ContractPreview />;"
                {!deploymentInfo && deployOptions.deployToChain && (<div className="mt-6 flex justify-center" />;}
                    <Button;}
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover: from-blue-700 hover:to-indigo-700" />
>>>>>>> origin/resolved-merge-conflicts

                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain}
}
                    </Button>;
                  </div>;
                )}
              </div>;
            )}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p />Generate a legal draft to preview and download.</p>}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;isOpen={templateManagerOpen}
          onClose={() = /> setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}/>;
      </DialogContent>;
<<<<<<< HEAD
    </Dialog>;'
  )}<TabsContent value='form' className='pt - 4' />;
=======
    </Dialog>;"
  )}<TabsContent value="form" className="pt - 4" />;
>>>>>>> origin/resolved-merge-conflicts
            <ContractForm;
              talent = {talent }
              client_name = {client_name }
              initial_values = {form_values }
              onFormValuesChange = {setFormValues }
              onContractGenerated = {handleFormSubmit }
            />;
<<<<<<< HEAD
          </TabsContent>;'
          <TabsContent value='preview' className='pt - 4' />;
=======
          </TabsContent>;"
          <TabsContent value="preview" className="pt - 4" />;
>>>>>>> origin/resolved-merge-conflicts
            {generated_contract && (<div />;}
                <ContractPreview;}
                  generated_contract = {generated_contract }
                  talent = {talent }
                  on_close = {on_close }
                  deployment_info = {deployment_info }
<<<<<<< HEAD
                />;'
                {!deployment_info && deploy_options.deployToChain && (<div className='mt - 6 flex justify - center' />;}
                    <Button;}
                      on_click = {handleDeployContract }
                      disabled = {deploy_status === 'deploying' }'
                      className='bg - gradient - to - r from - blue - 600 to - indigo - 600 hover: from - blue - 700 hover:to - indigo - 700' />
=======
                />;"
                {!deployment_info && deploy_options.deployToChain && (<div className="mt - 6 flex justify - center" />;}
                    <Button;}
                      on_click = {handleDeployContract }
                      disabled = {deploy_status === 'deploying' }"
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover: from - blue - 700 hover:to - indigo - 700" />
>>>>>>> origin/resolved-merge-conflicts

                      {deploy_status === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain}
}
                    </Button>
    </div>
  );
}
              </div>)}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          is_open = {templateManagerOpen }
          on_close = {() = /> setTemplateManagerOpen (false) }
          onSelectTemplate = {handleLoadTemplate }
          current_values = {form_values }
        />;
      </DialogContent>;
    </Dialog>)}/>;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
  )}//Modified to match the expected interface const handleFormSubmit = (';'
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {setGeneratedContract (contract)';) => {
  return $3;}
}'
setActiveTab ('preview')}';
=======
  )}//Modified to match the expected interface const handleFormSubmit = (';"
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {setGeneratedContract (contract)";) => {
  return $3;}
}"
setActiveTab ("preview")}";
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  formValues ;''
}/> </DialogContent> </Dialog>) ;''''
}''''''
=======
  formValues ;'"
}/> </DialogContent> </Dialog>) ;'"'"
}'"'"'"
>>>>>>> origin/resolved-merge-conflicts
