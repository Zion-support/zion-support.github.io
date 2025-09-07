const formSchema = z && z.object({;
  projectName: z && z.string().min(1, "Project name is required");
  scopeSummary: z && z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z && z.date({;
    required_error: "Start date is required"}),;
  endDate: z && z.date().optional(),;
  paymentTerms: z && z.enum(["hourly", "fixed", "milestone"]);
  paymentAmount: z && z.string().min(1, "Payment amount is required");
  additionalClauses: z && z.array(z && z.string()).optional()}),;

export type ContractFormValues = z && z.infer<typeof formSchema>;

        values, ;
        talent, ;
        clientName, ;

export type ContractFormValues = z.infer<typeof formSchema" > interface ContractFormProps {"
  talent: TalentProfile;
   clientName: string;
   initialValues?: ContractFormValues;
   onFormValuesChange?: (values: ContractFormValues) => void;
   onContractGenerated: (contractContent: string) => void;
   deployOptions?: DeploymentOptions
   onDeployOptionsChange?: (options: DeploymentOptions) => void} export function ContractForm({ talent, clientName, initialValues, onFormValuesChange, onContractGenerated, deployOptions, onDeployOptionsChange }: ContractFormProps) {

});
}

}

;

import { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form",
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { useToast } from "@/hooks/use-toast",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { generateContract } from "../utils/contractUtils",
import { ProjectDetailsFields } from "./ProjectDetailsFields",
import { PaymentTermsFields } from "./PaymentTermsFields",
import { AdditionalClausesFields } from "./AdditionalClausesFields";
import {logErrorToProduction} from '@/utils/productionLogger';
const formSchema = null;
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProjectDetailsFields 
            form={form} 
          />
          
          <PaymentTermsFields 
            form={form}
            handleMilestonesGenerated={handleMilestonesGenerated}
          />
          
          <AdditionalClausesFields 
            form={form}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Contract...
              </>
            ) : (
              "Generate Contract"
            )}
          </Button>
        </form>
      </Form>
      
      <DialogFooter className="gap-2 flex-wrap mt-4">
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  );
}finally {;
  setIsGenerating (false) ;

};
talent.full name ;
}</DialogDescription> </DialogHeader> <ProjectDetailsFields form= {;
  form ;
}/> <PaymentTermsFields form= {;
  form ;
}handleMilestonesGenerated= {;
  handleMilestonesGenerated ;
}/> <AdditionalClausesFields form= {;
  form ";
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {;
  isGenerating ;
}> {";
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract") ";
}</Button> </form> </Form> <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form </Button> </DialogFooter> </>) ;
}"
  )
}