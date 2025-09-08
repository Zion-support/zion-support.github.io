isOpen;
  onClose;
  talent;
  clientName;




import { useState } from 'react;
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle} from @/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs;
import { Button } from @/components/ui/button';
import { Save } from 'lucide-react;
import { TalentProfile } from @/types/talent';
import { ContractForm, ContractFormValues } from './components/ContractForm;
import { ContractPreview } from ./components/ContractPreview';
import { TemplateManager } from './templates/TemplateManager;
import { SmartContractBuilder } from ./SmartContractBuilder';

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
  const [activeTab, setActiveTab] = useState<string>(form")
  const [generatedContract, setGeneratedContract] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
  const handleLoadTemplate = null;
          onClose()

        }}
        talent = {talent}
        clientName = {clientName}
        onContractGenerated = {onContractGenerated}

import { useState } from "react,
import { Dialog, DialogContent, DialogHeader, DialogTitle } from @/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs,
import { Button } from @/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent,
import { ContractForm, ContractFormValues } from ./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview,

      />
    )
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4>
          <div className=flex justify-between items-center">
            <TabsList className="grid grid-cols-2>
              <TabsTrigger value=form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>

            <div className=flex gap-2">
              <Button 
                variant="outline 
                size=sm"
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1
              >
                <Save className=h-4 w-4" />
                Templates

    <Dialog open={isOpen} onOpenChange={onClose}>;


        <DialogHeader>;
          <DialogTitle>Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className=mt-4">;
          <div className="flex justify-between items-center>;
            <TabsList className=grid grid-cols-2">;
              <TabsTrigger value="form>Contract Details</TabsTrigger>;
              <TabsTrigger value=preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;

            <div className="flex gap-2>;
              <Button

                variant=outline" 


                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";

              >;
                <Save className=h-4 w-4" />;
                Templates;
              </Button>;



              talent = {talent}



