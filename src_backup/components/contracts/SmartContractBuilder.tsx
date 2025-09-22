:src/components/contracts/SmartContractBuilder.tsx
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",
import { useSmartContracts } from "@/hooks/useSmartContracts",
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
interface SmartContractBuilderProps {
  isOpen: boolean,
  onClose: () => void,
  talent: TalentProfile,
  clientName: string,
  onContractGenerated?: (contractContent: string) => void
}

export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import { TalentProfile } from '@/types/talent';
import { ContractForm, ContractFormValues } from './components/ContractForm';
import { ContractPreview } from './components/ContractPreview';
import { TemplateManager } from './templates/TemplateManager';
import { DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts';
import { useSmartContracts } from '@/hooks/useSmartContracts';
import { toast } from 'sonner';
import { logErrorToProduction } from '@/utils/productionLogger';

interface SmartContractBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (contractContent: string) => void
}
export function SmartContractBuilder({
  isOpen;
:src/components/contracts/SmartContractBuilder.tsx
  onClose;
  talent;
  clientName;
  onContractGenerated}: SmartContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({
    network: 'ethereum',
    useEscrow: true,
    deployToChain: false
  }),
  const [deployStatus, setDeployStatus] = useState<string>(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),

  const { deploySmartContract } = useSmartContracts(),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  // Convert ContractFormValues to contract content string

  const handleDeployContract = async () => {
    if (!generatedContract) return,

    try {
      setDeployStatus('deploying'),
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),

      if (contractInfo) {
        setDeploymentInfo(contractInfo),
        setDeployStatus('deployed'),
        toast.success("Smart contract deployed successfully!")
      } else {
        setDeployStatus('error'),
        toast.error("Failed to deploy smart contract")
      }
    } catch (error) {
      logErrorToProduction('Error deploying contract:', { data: error }),
      setDeployStatus('error'),
      toast.error("Failed to deploy smart contract")
import { useState } from "react",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from 'lucide-react';
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",;
import { useSmartContracts } from "@/hooks/useSmartContracts",;
import { toast } from "sonner",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface SmartContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}
;
export function SmartContractBuilder({;
  return () => {
    // Cleanup function
}
return []};
export function SmartContractBuilder(): any ({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated}: SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({;
    network: 'ethereum',;
    useEscrow: true,;
    deployToChain: false;
  }),;
  const [deployStatus, setDeployStatus] = useState<string>(''),;
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),;
  const { deploySmartContract } = useSmartContracts(),;
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  },;
  // Convert ContractFormValues to contract content string;
  const handleDeployContract = async () => {;
    if (!generatedContract) return,;
    try {;
      setDeployStatus('deploying'),;
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),;
      if (contractInfo) {;
        setDeploymentInfo(contractInfo),;
        setDeployStatus('deployed'),;
        toast.success("Smart contract deployed successfully!");
      } else {;
        setDeployStatus('error'),;
        toast.error("Failed to deploy smart contract");
        throw error}
      if(data && data.markdownContent) { // Assuming your Supabase func returns { markdownContent: "..." }
        setGeneratedMarkdownContract(data.markdownContent)
        if(onLegalDraftGenerated) {}
          onLegalDraftGenerated(data.markdownContent)}
:src_backup/components/contracts/SmartContractBuilder.tsx

const { data, error } = await supabase.functions.invoke ('generate - contract', {
        body: payload, ,
});
      // Check condition;
if ( {) {}
  $2;
}
        throw error}"
      if ( { // Assuming your Supabase func returns { markdown_content: "..." }
        setGeneratedMarkdownContract (data.markdown_content)) {}
  $2;
}
        // Check condition;
if ( {) {}
  $2;
}
          onLegalDraftGenerated (data.markdown_content)}"
        setActiveTab ("preview_markdown"); // Switch to a new tab for Markdown preview;"
        toast.success ("Legal draft generated successfully!")} else {"
        throw new Error ("No content received from draft generator.")}
    } catch (err: any) {"
      console.error ("Error generating legal draft:", err);"
      setLegalDraftError (err.message || "Failed to generate legal draft.");"
      toast.error (err.message || "Failed to generate legal draft.")} finally {}
      setIsLoadingLegalDraft (false)}

:src_backup/components/contracts/SmartContractBuilder.tsx
  }
  }"
      toast.info ("Generating PDF...");
      html2pdf ().from (element).set (opt).save ();"
        .then (() => toast.success ("PDF downloaded successfully!"));
        .catch ((err) => {"
          toast.error ("PDF generation failed.");"
          console.error ("Error generating PDF:", err)})} else {"
      toast.warn ("No draft content available to download or form values missing.")}
  }
      return}
:src_backup/components/contracts/SmartContractBuilder.tsx
    network: 'ethereum';
    useEscrow: true;
    deployToChain: false
  }),
  const [deployStatus, setDeployStatus] = useState<string>(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),

  const { deploySmartContract } = useSmartContracts();
  const handleLoadTemplate = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">
            <ContractForm
              talent = {talent,}
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleFormSubmit,}
            />
          </TabsContent>
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        throw new Error("No content received from draft generator.")}
    } catch(err: any) {;"
      console && console.error("Error generating legal draft:", err);"
      setLegalDraftError(err && err.message || "Failed to generate legal draft.");"
      toast && toast.error(err && err.message || "Failed to generate legal draft.")} finally {;
      setIsLoadingLegalDraft(false)}
  };"
      toast && toast.info("Generating PDF...");
      html2pdf().from(element).set(opt).save();"
        .then(() => toast && toast.success("PDF downloaded successfully!"));
        .catch((err) => {;"
          toast && toast.error("PDF generation failed.");"
          console && console.error("Error generating PDF:", err)})} else {;"
      toast && toast.warn("No draft content available to download or form values missing.")}
  };
      return}
'
    setOnChainDeploymentStatus('connecting');
    setDeploymentError(null);
    setTransactionHash(null);
    setDeployedContractAddress(null);
    setPopulatedSolidityCode(null);
    try {;
      if(!window && window.ethereum) {;"
        throw new Error("MetaMask is not installed && installed.Please install it to continue.")}
'
      await window && window.ethereum.request({ method: 'eth_requestAccounts' });'
      const targetChainId = selectedNetwork === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon;

      if(currentNetwork && currentNetwork.chainId.toString() !== BigInt(targetChainId).toString()) {;
        try {;
          await window && window.ethereum.request({;'
            method: 'wallet_switchEthereumChain',;
            params: [{ chainId: targetChainId }],,;
});
          // Re-initialize provider and signer after network switch;
          // ;
          // signer = await newProvider && newProvider.getSigner()} catch(switchError: any) {;
          if(switchError && switchError.code === 4902) { // Chain not added;

            throw new Error(`Please add ${selectedNetwork} to MetaMask and switch to it.`)}`
          throw new Error(`Failed to switch network: ${switchError && switchError.message}`)}
      }

'
      setOnChainDeploymentStatus('fetching_code');'
      // Determine contractType(e && e.g. from a form field if it's selectable, or default);'
      // For now, let's assume it's part of formValues or a fixed choice for this flow && flow.const contractTypeToDeploy: ContractType = formValues && formValues.contractType || 'simple'; // Default to 'simple';

      // Create a temporary projectDetailsIPFSHash(replace with actual IPFS hashing later);
      const projectDetailsIPFSHash = ethers && ethers.id(projectDetailsString); // Simple hash;
'
      const { data, error: funcError } = await supabase && supabase.functions.invoke('generate-smart-contract', {;
        body: {;
          contractType: contractTypeToDeploy,;
          clientAddress: formValues && formValues.clientWalletAddress,;
          talentAddress: formValues && formValues.talentWalletAddress,;
          projectDetailsIPFSHash: projectDetailsIPFSHash,,;
},,;
});`
      if(funcError) throw new Error(`Failed to fetch contract code: ${funcError && funcError.message}`);"
      if(!data || !data && data.solidityCode) throw new Error("No Solidity code received from generator.");
      setPopulatedSolidityCode(data && data.solidityCode); // This is actually bytecode if Supabase func compiles;'
      // For now, assuming data && data.solidityCode IS the bytecode && bytecode.This is a placeholder.// In reality, the Supabase function should return bytecode and ABI.// Or, if it returns Solidity, we'd compile it client-side(not recommended for production).setContractAbi(currentAbi);'
      setOnChainDeploymentStatus('deploying');"
      toast && toast.info("Deploying contract... This may take a moment && moment.Please confirm in MetaMask.");'
      // IMPORTANT: populatedSolidityCode here should be BYTECODE.// The current 'generate-smart-contract' returns Solidity source && source.This will not work.// This is a placeholder for the actual deployment flow.// We need a compile step or the Supabase function must return bytecode.// For now, this will fail if populatedSolidityCode is not bytecode && bytecode.let contract;
      // Adjust constructor arguments based on contractTypeToDeploy;'
      if(contractTypeToDeploy === 'simple') {;
        contract = await factory && factory.deploy(formValues && formValues.clientWalletAddress, formValues && formValues.talentWalletAddress, projectDetailsIPFSHash)} else { // escrow;
        // EscrowAgreement constructor: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client);'`
        // The Ownable(_client) is handled by OpenZeppelin's constructor if `initialOwner` is the first arg to Ownable's constructor.// Or, if our EscrowAgreement's constructor directly calls Ownable(_client), then that's fine.// Based on EscrowAgreement && EscrowAgreement.sol: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client);
        // The ethers && ethers.js deploy will pass these args to the Solidity constructor && constructor.contract = await factory && factory.deploy(formValues && formValues.talentWalletAddress, formValues && formValues.clientWalletAddress, projectDetailsIPFSHash)}

      await contract && contract.waitForDeployment();
      setDeployedContractAddress(deployedAddr);
      setTransactionHash(contract && contract.deploymentTransaction()?.hash || null);'
      setOnChainDeploymentStatus('success');`
      toast && toast.success(`Contract deployed successfully at ${deployedAddr}`)} catch(err: any) {;"
      console && console.error("Deployment error:", err);"
      setDeploymentError(err && err.message || "An unknown error occurred during deployment.");'
      setOnChainDeploymentStatus('error');"
      toast && toast.error(err && err.message || "Deployment failed.")}
  };'"
  // This function is passed to ContractForm.// We now decide what "generate" means in this context.// The subtask asks for a "Generate Legal Draft" button.// Let's assume ContractForm's onContractGenerated is for the primary action, which could be Solidity or data pass-through.// For clarity, we will add a dedicated "Generate Legal Draft" button in SmartContractBuilder's JSX.// The onContractGenerated from ContractForm might be re-purposed or trigger our Solidity generation && generation.const handleFormSubmitFromContractForm = (values: ContractFormValues) => {;'
    // This is called by ContractForm's own submit/generate button.// Let's make this one generate the Solidity code, as per existing flow && flow.setFormValues(values); // Update formValues state first;
    handleGenerateSolidity(); // Then generate Solidity.};
:src_backup/components/contracts/SmartContractBuilder.tsx
  return (<Dialog open={isOpen} onOpenChange={onClose}>;

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
          <DialogDescription>;
            Create, customize, and deploy your smart contract or generate a legal draft.</DialogDescription>;
:src_backup/components/contracts/SmartContractBuilder.tsx
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center mb-4">;
            <TabsList className="grid grid-cols-3"> {/* Added new tab */}
              <TabsTrigger value="form">1 && 1.Details</TabsTrigger>;
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2 && 2.Legal Draft</TabsTrigger>;
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3 && 3.On-Chain Contract</TabsTrigger>;
            </TabsList>;
'"
            {/* This button seems out of place if it's just for templates, maybe move into "form" tab? */}
            {/* <Button"
              variant="outline""
              size="sm"
              onClick={() => setTemplateManagerOpen(true)}
"
              className="flex gap-1">;"
              <Save className="h-4 w-4"  />;
              Templates;
            </Button>;
          </div>;"
          <TabsContent value="form" className="pt-4 space-y-6">;
            <ContractFormtalent={talent}

              clientName={clientName}
              initialValues={formValues} // Pass the potentially prefilled/template-loaded values'
              onFormValuesChange={setFormValues} // Keep SmartContractBuilder's state in sync;
              onContractGenerated={handleFormSubmitFromContractForm} // This will now trigger Solidity generation;
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}

             />;"
            <div className="flex justify-end pt-4">;
              <Button;
                onClick={handleGenerateLegalDraft}
                disabled={isLoadingLegalDraft || !formValues}"
                size="lg""
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700">;"
                <FileText className="h-5 w-5"  />;
"
                {isLoadingLegalDraft ? "Generating Draft..." : "Generate Legal Draft(GPT)"}
              </Button>
            </div>
          </TabsContent>"
          <TabsContent value="preview_markdown" className="pt-4">
            {isLoadingLegalDraft && <p>Loading draft...</p>}"
            {legalDraftError && <p className="text-red-500">Error: {legalDraftError}</p>}'
    setOnChainDeploymentStatus ('connecting');
    setDeploymentError (null);
    setTransactionHash (null);
    setDeployedContractAddress (null);
    setPopulatedSolidityCode (null);
    try {}
      // Check condition;
if ( {) {}
  $2;
}"
        throw new Error ("MetaMask is not installed.Please install it to continue.")}'
      await window.ethereum.request ({ method: 'eth_requestAccounts' });'
      const targetChainId = selected_network === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon;
      if (!== BigInt (targetChainId).to_string ()) {) {}
  $2;
}
        try {}
          await window.ethereum.request ({'
            method: 'wallet_switchEthereumChain',
            params: [{ chain_id: targetChainId }], ,
});
          // Re - initialize provider and signer after network switch;
          //;
          // signer = await new_provider.get_signer ()} catch (switch_error: any) {}
          // Check condition;
if ( { // Chain not added) {}
  $2;
}`
            throw new Error (`Please add ${selected_network} to MetaMask and switch to it.`)}`
          throw new Error (`Failed to switch network: ${switch_error.message}`)}
:src_backup/components/contracts/SmartContractBuilder.tsx
      }
    } catch (error) {;
      logErrorToProduction('Error deploying contract:', { data: error }),;
      setDeployStatus('error'),;
      toast.error("Failed to deploy smart contract");
    }
  },;
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
:src_backup/components/contracts/SmartContractBuilder.tsx
    setGeneratedContract(contract),
    setActiveTab("preview")
  },

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
            </div>
          </div>

          <TabsContent value="form" className="pt-4">
            <ContractForm 
    setGeneratedContract(contract);
    setActiveTab("preview");
  };
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
        </DialogHeader>;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
          <div className="flex justify-between items-center">;"
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details</TabsTrigger>;"
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
              <TabsTrigger value="form">1.Details</TabsTrigger>;
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2.Legal Draft</TabsTrigger>;
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3.On-Chain Contract</TabsTrigger>;
            </TabsList>;
:src_backup/components/contracts/SmartContractBuilder.tsx
            <div className="flex gap-2">;
              <Button;
                variant="outline";
                size="sm";
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
<Save className="h-4 w-4" />;

:src/components/contracts/SmartContractBuilder.tsx
                Templates;
              </Button>;
            </div>;
          </div>;
:src/components/contracts/SmartContractBuilder.tsx
          <TabsContent value="form" className="pt-4">;
            <ContractForm;
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
            />
          </TabsContent>

            />;
          </TabsContent>;
"
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;

:src_backup/components/contracts/SmartContractBuilder.tsx
                <ContractPreview
                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
                  deploymentInfo = {deploymentInfo,}

                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
deploymentInfo = {deploymentInfo,}          </TabsContent>;
                      onClick = {handleDeployContract,}
                      disabled = {deployStatus === 'deploying',}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;"
                  <div className="mt-6 flex justify-center">;

                    <Button;
                      onClick = {handleDeployContract,}'
                      disabled = {deployStatus === 'deploying',}"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;'
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>                )}
              </div>;
            )}

:src/components/contracts/SmartContractBuilder.tsx
        <TemplateManager
        <TemplateManager;
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}

:src/components/contracts/SmartContractBuilder.tsx
          </TabsContent>;
        </Tabs>;

:src_backup/components/contracts/SmartContractBuilder.tsx
        <TemplateManager


          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview 
:src/components/contracts/SmartContractBuilder.tsx
                  generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deploymentInfo={deploymentInfo}
                />
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>;
                )}
              </div>;
            )}
</TabsContent>;
        </Tabs>;
        <TemplateManager;


          isOpen={templateManagerOpen}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p>Generate a legal draft to preview and download.</p>}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
:src/components/contracts/SmartContractBuilder.tsx
/>;
      </DialogContent>;
    </Dialog>;
  );
}
;

;
:src/components/contracts/SmartContractBuilder.tsx
        />
      </DialogContent>
    </Dialog>
  );

};
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {';
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {;
  setGeneratedContract (contract);";
setActiveTab ("preview");
};";
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
}deploymentInfo= {;
  deploymentInfo ;
}/> > {';
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
  formValues ;
}/> </DialogContent> </Dialog>) ;
}'"
:src/components/contracts/SmartContractBuilder.tsx
;'"`
