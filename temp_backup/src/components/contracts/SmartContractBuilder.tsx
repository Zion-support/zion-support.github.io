toast.error ('Failed to deploy smart contract');
}'
};''
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {';'''
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {;''
  setGeneratedContract (contract);';''
setActiveTab ('preview');''
};';''
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
    </Dialog>;'
  )}<TabsContent value='form' className='pt - 4' />;
          </TabsContent>;'
          <TabsContent value='preview' className='pt - 4' />;
                />;'
                {!deployment_info && deploy_options.deployToChain && (<div className='mt - 6 flex justify - center' />;}
                    <Button;}
                      on_click = {handleDeployContract }
                      disabled = {deploy_status === 'deploying' }'
                      className='bg - gradient - to - r from - blue - 600 to - indigo - 600 hover: from - blue - 700 hover:to - indigo - 700' />
  )}//Modified to match the expected interface const handleFormSubmit = (';'
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {setGeneratedContract (contract)';) => {
  return $3;}
}'
setActiveTab ('preview')}';
  formValues ;''
}/> </DialogContent> </Dialog>) ;''''
}''''''
