<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
interface ContractBuilderProps {
  isOpen: boolean,
  onClose: () => void,
  talent: TalentProfile,
  clientName: string,
  onContractGenerated?: (contractContent: string) => void
}

export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  const handleContractGenerated = (contract: string) => {
    setGeneratedContract(contract),
    setActiveTab("preview"),
    if (onContractGenerated) {
      onContractGenerated(contract)
import { useState } from "react",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from 'lucide-react';
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { SmartContractBuilder } from "./SmartContractBuilder",;
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}
;
export function ContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),;
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  },;
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract),;
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
  };
  if (showSmartContractBuilder) {;
    return (;
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);
          onClose();
        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}
      />;
    );
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
isOpen;
  onClose;
  talent;
  clientName;

  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx

<<<<<<< HEAD
  const handleLoadTemplate = (templateData: ContractFormValues,) => {;
    setFormValues(templateData)
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

<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
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
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
        }}
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      />;
    );
  }


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  return (


            
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
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
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      />;
    );
  }


  }

  return (


            


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
<<<<<<< HEAD
              </Button>
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          
          <TabsContent value="form" className="pt-4">
            <ContractForm 
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
              />
            )}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx

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
            </TabsList>;

            <div className="flex gap-2">;
              <Button
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
                variant="outline" 
=======
              </Button>                variant="outline" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;

<<<<<<< HEAD
              

              <Button
                variant="secondary"
                size="sm"
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
            <ContractForm

            <ContractForm               talent = {talent,}
=======
              <Button
                variant="secondary"
                size="sm"

=======
                onClick = {() => setShowSmartContractBuilder(true),}

              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;

          <TabsContent value="form" className="pt-4">;

            <ContractForm

            <ContractForm 


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
              talent = {talent,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
<<<<<<< HEAD
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <ContractPreview

              <ContractPreview                 contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"
              />
            )}
          </TabsContent>
        </Tabs>        <TemplateManager
=======

=======

            />;
          </TabsContent>;

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;

              <ContractPreview

              <ContractPreview 


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx

=======
              />;
            )}

          </TabsContent>;
        </Tabs>;



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
        <TemplateManager
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />;
      </DialogContent>;
    </Dialog>;
  );
<<<<<<< HEAD
=======

  handleContractGenerated;
}/> </TabsContent> />);
}</TabsContent> </Tabs> <TemplateManager is_open= {
  templateManagerOpen;
}on_close= {
  () => setTemplateManagerOpen (false);
}onSelectTemplate= {
  handleLoadTemplate;
}current_values= {
  form_values;
}/> </DialogContent> </Dialog>);
}"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        />
      </DialogContent>
    </Dialog>
<<<<<<< HEAD
  )
}
}/>)
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {
  talent
}clientName= {
  clientName
}initialValues= {
  formValues
}onFormValuesChange= {
  setFormValues
}onContractGenerated= {
  handleContractGenerated
}/> </TabsContent> />)
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  templateManagerOpen
}onClose= {
  () => setTemplateManagerOpen (false)
}onSelectTemplate= {
  handleLoadTemplate
}currentValues= {
  formValues
}/> </DialogContent> </Dialog>)
}"}
          
          <TabsContent value="form" className="pt-4">
            <ContractForm 
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
              />
            )}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}        />;
      </DialogContent>;
    </Dialog>;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
;
=======
=======


        />;
      </DialogContent>;
    </Dialog>;
  );
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx

        />;
      </DialogContent>;
    </Dialog>;
  );

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  handleContractGenerated;
}/> </TabsContent> />);
}</TabsContent> </Tabs> <TemplateManager is_open= {
  templateManagerOpen;
}on_close= {
  () => setTemplateManagerOpen (false);
}onSelectTemplate= {
  handleLoadTemplate;
}current_values= {
  form_values;
}/> </DialogContent> </Dialog>);
}"}
}
;

  );

};

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
  formValues ;
}/> </DialogContent> </Dialog>) ;
}"
<<<<<<< HEAD:src/components/contracts/ContractBuilder.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/ContractBuilder.tsx
