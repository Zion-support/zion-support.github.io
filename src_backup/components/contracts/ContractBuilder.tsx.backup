isOpen;
  onClose;
  talent;
  clientName;

<<<<<<< HEAD


=======
<<<<<<< HEAD
  const handleLoadTemplate = (templateData: ContractFormValues,) => {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleLoadTemplate = (templateData: ContractFormValues,) => {;
  const handleLoadTemplate = (templateData: ContractFormValues,) => {
>>>>>>> origin/resolved-merge-conflicts
    setFormValues(templateData);
  };

  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
    setActiveTab("preview");    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
  };

  if (showSmartContractBuilder) {;
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);          onClose();

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
import { SmartContractBuilder } from './SmartContractBuilder';

interface ContractBuilderProps {
  isOpen: boolean;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
isOpen;
  onClose;
  talent;
  clientName;onContractGenerated;
}: ContractBuilderProps) {const [activeTab, setActiveTab] = useState<string>("form")const [generatedContract, setGeneratedContract] = useState<string | null>(null)const [formValues, setFormValues] = useState<ContractFormValues | undefined>(undefined;
  )const [templateManagerOpen, setTemplateManagerOpen] = useState(false)const [showSmartContractBuilder, setShowSmartContractBuilder]  = useState(false)const handleLoadTemplate = (templateData: ContractFormValues,) => {setFormValues(templateData)}const handleContractGenerated = (contract: string) => {setGeneratedContract(contract)setActiveTab("preview")if (onContractGenerated) {onContractGenerated(contract)}
  }if (showSmartContractBuilder) {return (<SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {setShowSmartContractBuilder(false)onClose()import { useState  } from 'react';
import { Dialog,DialogContent,DialogHeader,DialogTitle} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { Button  } from '@/components/ui/button';
import { Save  } from 'lucide-react';
import { TalentProfile  } from '@/types/talent';
import { ContractForm, ContractFormValues  } from './components/ContractForm';
import { ContractPreview  } from './components/ContractPreview';
import { TemplateManager  } from './templates/TemplateManager';
import { SmartContractBuilder  } from './SmartContractBuilder';
interface ContractBuilderProps  {isOpen: boolean;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (contractContent: string) => void
}
export function ContractBuilder({
  isOpen;
  onClose;
  talent;
  clientName;
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form")
  const [generatedContract, setGeneratedContract] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
  const handleLoadTemplate = null;
          onClose()

        }
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}

import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",

      />
    )
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contract Builder</DialogTitle>
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

    <Dialog open={isOpen} onOpenChange={onClose}>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
export function ContractBuilder() {const [activeTab, setActiveTab] = useState<string>("form")const [generatedContract, setGeneratedContract] = useState<string | null>(null)const [formValues, setFormValues] = useState<ContractFormValues | undefined>(undefined;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ContractBuilder() {const [activeTab, setActiveTab] = useState<string>("form)const [generatedContract, setGeneratedContract] = useState<string | null>(null)const [formValues, setFormValues] = useState<ContractFormValues | undefined>(undefined;
>>>>>>> origin/resolved-merge-conflicts
  ),const [templateManagerOpen, setTemplateManagerOpen] = useState(false)const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false)const handleLoadTemplate = null;
          onClose()}
        talent = {talent}
        clientName = {clientName}
        onContractGenerated = {onContractGenerated}import { useState } from "react",import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",import { Button } from "@/components/ui/button",import { TalentProfile } from "@/types/talent",import { ContractForm, ContractFormValues } from "./components/ContractForm",import { ContractPreview } from "./components/ContractPreview",/>;
    )}return (<Dialog open={isOpen} onOpenChange={onClose}>;
<<<<<<< HEAD
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
=======
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <DialogHeader>;
          <DialogTitle>Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;

            <div className="flex gap-2">;
              <Button

                variant="outline" 

<<<<<<< HEAD

                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";

=======
<<<<<<< HEAD
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
=======
<<<<<<< HEAD
                size="sm
                onClick = {(,) => setTemplateManagerOpen(true)}
>>>>>>> origin/resolved-merge-conflicts
      />;
    )}return (<div className="flex gap-2">;
              <Button;
                variant="outline";
                size="sm";
                onClick = {(,) => setTemplateManagerOpen(true)}
<<<<<<< HEAD
                className="flex gap-1";
=======
                className="flex gap-1;
=======
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;<div className="flex gap-2">;
              <Button;
                variant="outline";
                size="sm";
                onClick = {(,) => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;<Button;
                variant="secondary";
                size="sm";
              <Button;
                variant="secondary";
                size="sm";
                onClick={() => setShowSmartContractBuilder(true)}
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;

          <TabsContent value="form" className="pt-4">;

            <ContractForm

            <ContractForm 

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              talent = {talent,}

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}
<<<<<<< HEAD
=======

                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"

        <TemplateManager

          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              clientName = {clientName}
              initialValues = {formValues}
              onFormValuesChange = {setFormValues}
              onContractGenerated = {handleContractGenerated}
>>>>>>> origin/resolved-merge-conflicts
            <ContractForm;
            <ContractForm;
                onClick = {() => setShowSmartContractBuilder(true)}>;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;<TabsContent value="form" className="pt-4">;<ContractForm;
            <ContractForm;
              talent = {talent}
              clientName = {clientName}
              initialValues = {formValues}
              onFormValuesChange = {setFormValues}
              onContractGenerated = {handleContractGenerated}/>;
          </TabsContent>;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;

              <ContractPreview

              <ContractPreview 



                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"
            {generatedContract && (<ContractPreview;
              <ContractPreview />;
          </TabsContent>;<TabsContent value="preview" className="pt-4">;
            {generatedContract && (<ContractPreview;
              <ContractPreview;
                contractContent = {generatedContract}
                talent = {talent}
                onClose = {onClose}
                status="ready";
              />;
            )}
          </TabsContent>;
        </Tabs>;



        <TemplateManager

          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
              />;
            )}</TabsContent>;
        </Tabs>;<TemplateManager;
          isOpen = {templateManagerOpen}
          onClose = {() => setTemplateManagerOpen(false)}
          onSelectTemplate = {handleLoadTemplate}
          currentValues = {formValues}/>;
      </DialogContent>;
    </Dialog>;
  )}
}/>)}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {talent;
}clientName= {clientName;
}initialValues= {formValues;
}onFormValuesChange= {setFormValues;
}onContractGenerated= {handleContractGenerated;
}/> </TabsContent> />)}</TabsContent> </Tabs> <TemplateManager isOpen= {templateManagerOpen;
}onClose= {() => setTemplateManagerOpen (false)}onSelectTemplate= {handleLoadTemplate;
}currentValues= {formValues;
}/> </DialogContent> </Dialog>)}"}<TabsContent value="form" className="pt-4">;
            <ContractForm;
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (<ContractPreview;
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready";
              />;
            )}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}/>;
      </DialogContent>;
    </Dialog>;
  )}handleContractGenerated;
}/> </TabsContent> />)}</TabsContent> </Tabs> <TemplateManager is_open= {templateManagerOpen;
}on_close= {() => setTemplateManagerOpen (false)}onSelectTemplate= {handleLoadTemplate;
}current_values= {form_values;
}/> </DialogContent> </Dialog>)}"}
})}/>)}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {talent ;
}clientName= {clientName ;
}initialValues= {formValues ;
}onFormValuesChange= {setFormValues ;
}onContractGenerated= {handleContractGenerated ;
}/> </TabsContent> />)}</TabsContent> </Tabs> <TemplateManager isOpen= {templateManagerOpen ;
}onClose= {() => setTemplateManagerOpen (false)}onSelectTemplate= {handleLoadTemplate ;
}currentValues= {formValues ;
}/> </DialogContent> </Dialog>)}";
<<<<<<< HEAD
          currentValues = {formValues,}
=======
          currentValues = {formValues}
=======
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}

                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"

        <TemplateManager

          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
