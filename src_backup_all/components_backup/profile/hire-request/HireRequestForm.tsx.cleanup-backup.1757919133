

import { TimelineField } from "./TimelineField",
import { BudgetFields } from "./BudgetFields",

export interface HireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
    name?: string;
    email?: string;
    id?: string
  }
  onSubmitSuccess?: () => void
export function HireRequestForm({
  talent
  onClose
  initialJobTitle
  userDetails
  onSubmitSuccess
}: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({
    talent
    onClose: onSubmitSuccess |onClose
    initialJobTitle
    userDetails
  })
    name?: string,
    email?: string,
    id?: string
  },
  onSubmitSuccess?: () => void,
}

export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 
    onClose: onSubmitSuccess || onClose, 
    initialJobTitle,
    userDetails 
  }),
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalInfoFields form={form} />
        </div>
        
        <ProjectDetailsField form={form} />
        <TimelineField form={form} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BudgetFields form={form} talent={talent} />
        </div>
        
        <DialogFooter className="pt-4">
          <Button 


            type="button" 
            variant="outline" 
            onClick={onClose}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  ),
}
