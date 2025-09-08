}

    setSaving(true);

    try {
      if (editTemplate) {
        await updateTemplate && updateTemplate.mutateAsync({
          templateId: editTemplate && editTemplate.id,
          title: values && values.title,
          templateData: editTemplate && editTemplate.template_data,
          isDefault: values && values.isDefault});
      } else if (currentValues) {
        await createTemplate && createTemplate.mutateAsync({
          title: values && values.title,
          templateData: currentValues,
          isDefault: values && values.isDefault});
      }

      onComplete();
    } finally {
      setSaving(false);
'
import { useState } from react;'
import { use_form, type ControllerRenderProps } from 'react - hook - form;
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from zod';'
import { Loader2 } from lucide-react;'
import { ContractFormValues } from '@/components / contracts / components / ContractForm;
import { ContractTemplate } from '@/types / contracts';
import { useContractTemplates } from @/hooks / useContractTemplates';'
import { Button } from @/components / ui / button;
import {}
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,';
} from '@/components / ui / form;
import { Input } from '@/components / ui / input';
import { Switch } from @/components / ui / switch';
const form_schema = z.object ({'
  title: z.string ().min (1, Title is required),
  is_default: z.boolean ()});
type FormValues = z.infer < typeof form_schema>;

  on_cancel: () => void;


  on_complete: () => void;
  edit_template?: ContractTemplate | null;
  current_values?: ContractFormValues;
export /**;
 * TemplateSaveForm - Function description;
 */
function TemplateSaveForm() {}
  const [saving, set_saving] = useState (false);
  const { create_template, update_template } = useContractTemplates ();
  const form = use_form < FormValues>({}
    resolver: zod_resolver (form_schema),
    default_values: {
      title: edit_template?.title || ',
      is_default: edit_template?.is_default || false}});
  const on_submit = async (values: FormValues) => {    // Check condition;
if ( {) {}
  $2;
}
      return;
    }

    set_saving (true);


    try {}
      // Check condition;
if ( {) {}
  $2;
}
        await update_template.mutate_async ({}
          template_id: edit_template.id,
          title: values.title,
          template_data: edit_template.template_data,
          is_default: values.is_default});
      } else // Check condition;
if ( {) {}
  $2;
}
        await create_template.mutate_async ({}
          title: values.title,
          template_data: current_values,
          is_default: values.is_default});
      }
      on_complete ();
    } finally {}
      set_saving (false);

    }
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Form {...form}>;
'
      <form on_submit={form.handle_submit (on_submit)} className=space - y-4>;
        <FormField;
          control={form.control}'
          name='title;

    }
  },

          name=title"

          render={({ field }: { field: ControllerRenderProps<FormValues "title> }) => (
            <FormItem>



            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
              <FormControl>;"
                <Input {...field} placeholder="Enter template name />;

              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

        />;


        <FormField;
          control={form.control}"
          name=isDefault"
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault> }) => (
            <FormItem className="flex items-center justify-between">
              <FormLabel className=cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch"
                  aria-label=Default template"
          name="isDefault;
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => (;
            <FormItem className=flex items-center justify-between">;"
              <FormLabel className=cursor-pointer>Set as default template</FormLabel>;
              <FormControl>;
                <Switch;"
                  aria-label="Default template;
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />
        
        <div className="flex gap-2 justify-end">
          <Button type=button" variant="outline onClick={onCancel}>

          <Button type='button variant=outline' onClick={onCancel}>;
            Cancel;
          </Button>;'
          <Button type=submit disabled={saving}>;
            {saving ? (;
              <>;'
                <Loader2 className='mr-2 h-4 w-4 animate-spin />;
                Saving...;
              </>;
            ) : (;
              `${editTemplate ? 'Update' : Save} Template`;



                Saving...
              </>
            ) : (

  editTemplate ? "Update : Save" 

}Template`) ;
}</Button> </div> </form> </Form>) ;"
}}
`
              `${editTemplate ? "Update" : Save} Template`

            )}

    </Form>;
  );




          </Button>
        </div>
      </form>
    </Form>
  );

setSaving (true);


}/> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {";
  editTemplate ? "Update" : "Save" ;
}Template`) ;
}</Button> </div> </form> </Form>) ;
}"