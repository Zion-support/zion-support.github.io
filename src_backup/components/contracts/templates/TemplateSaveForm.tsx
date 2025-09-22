:src_backup/components/contracts/templates/TemplateSaveForm.tsx
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { ContractTemplate } from "@/types/contracts",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Button } from "@/components/ui/button",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
const formSchema = null;
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
const formSchema = z.object({
  title: z.string().min(1, 'Title is required')
  isDefault: z.boolean()
})
type FormValues = z.infer<typeof formSchema>
interface TemplateSaveFormProps {
  onCancel: () => void
  onComplete: () => void
  editTemplate?: ContractTemplate | null
  currentValues?: ContractFormValues
export function TemplateSaveForm({
  onCancel
  onComplete
  editTemplate
  currentValues
}: TemplateSaveFormProps) {
  const [saving, setSaving] = useState(false)
  const { createTemplate, updateTemplate } = useContractTemplates()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: editTemplate?.title |''
      isDefault: editTemplate?.is_default |false
origin/cursor/automate-test-improve-and-merge-code-2533
    }

    setSaving(true);

    try {;
      if (editTemplate) {;
        await updateTemplate && updateTemplate.mutateAsync({;
          templateId: editTemplate && editTemplate.id,;
          title: values && values.title,;
          templateData: editTemplate && editTemplate.template_data,;
          isDefault: values && values.isDefault,;
        });
      } else if (currentValues) {;
        await createTemplate && createTemplate.mutateAsync({;
          title: values && values.title,;
          templateData: currentValues,;
          isDefault: values && values.isDefault,;
        });
      }

      onComplete();
    } finally {;
      setSaving(false);
'
import { useState } from 'react';'
import { use_form, type ControllerRenderProps } from 'react - hook - form';'
import { zod_resolver } from '@hookform / resolvers / zod';'
import { z } from 'zod';'
import { Loader2 } from 'lucide-react';'
import { ContractFormValues } from '@/components / contracts / components / ContractForm';'
import { ContractTemplate } from '@/types / contracts';'
import { useContractTemplates } from '@/hooks / useContractTemplates';'
import { Button } from '@/components / ui / button';
import {}
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,';
} from '@/components / ui / form';'
import { Input } from '@/components / ui / input';'
import { Switch } from '@/components / ui / switch';
const form_schema = z.object ({'
  title: z.string ().min (1, 'Title is required'),
  is_default: z.boolean (),
});
type FormValues = z.infer < typeof form_schema>;
:src_backup/components/contracts/templates/TemplateSaveForm.tsx
interface TemplateSaveFormProps {
onCancel: () => void,
  onComplete: () => void,
  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues
import { useState } from "react",;
import { useForm, type ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Loader2 } from 'lucide-react';
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { ContractTemplate } from "@/types/contracts",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Button } from "@/components/ui/button",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
const formSchema = z.object({;
  title: z.string().min(1, "Title is required"),;
  isDefault: z.boolean()}),;
type FormValues = z.infer<typeof formSchema>,;
interface TemplateSaveFormProps {;
  onCancel: () => void,;
  onComplete: () => void,;
  editTemplate?: ContractTemplate | null,;
  currentValues?: ContractFormValues;
}
;
export function TemplateSaveForm({;
  onCancel,;
  onComplete,;
  editTemplate,;
  currentValues;
}: TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false),;
  const { createTemplate, updateTemplate } = useContractTemplates(),;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: editTemplate?.title || "",;
      isDefault: editTemplate?.is_default || false}}),;
  const onSubmit = async (values: FormValues) => {;
    if (!currentValues && !editTemplate) {;
      return;
    }
;
    setSaving(true),;
    try {;
      if (editTemplate) {;
        await updateTemplate.mutateAsync({;
          templateId: editTemplate.id,;
          title: values.title,;
          templateData: editTemplate.template_data,;
          isDefault: values.isDefault});
      } else if (currentValues) {;
        await createTemplate.mutateAsync({;
          title: values.title,;
          templateData: currentValues;
          isDefault: values.isDefault});
      }
;
      onComplete();
    } finally {;
      setSaving(false);
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
    default_values: {'
      title: edit_template?.title || '',
      is_default: edit_template?.is_default || false,
    },
  });
  const on_submit = async (values: FormValues) => {    // Check condition;
if ( {) {}
  $2;
}
      return;
    }
:src/components/contracts/templates/TemplateSaveForm.tsx
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
          is_default: values.is_default,
        });
      } else // Check condition;
if ( {) {}
  $2;
}
        await create_template.mutate_async ({}
          title: values.title,
          template_data: current_values,
          is_default: values.is_default,
        });
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
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}'
          name='title';

:src_backup/components/contracts/templates/TemplateSaveForm.tsx
          render={({
            field
          }: {

    }
  },
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField;
          control={form.control}
:src_backup/components/contracts/templates/TemplateSaveForm.tsx
          name="title"
"
          name="title""
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (
            <FormItem>

:src/components/contracts/templates/TemplateSaveForm.tsx
              <FormLabel>Template Name</FormLabel>
:src_backup/components/contracts/templates/TemplateSaveForm.tsx
              <FormControl>
                <Input {...field} placeholder="Enter template name" />
              </FormControl>
              <FormMessage />
            </FormItem>

            field: ControllerRenderProps<FormValues, 'title'>;
          }) => (            <FormItem>;
              <FormLabel>Template Name</FormLabel>;'
            field: ControllerRenderProps < FormValues, 'title'>;
          }) => (            <FormItem>;
              <FormLabel > Template Name</FormLabel>;

              <FormControl>;'
                <Input {...field} placeholder='Enter template name' />;
              </FormControl>;
              <FormMessage />;

            </FormItem>)}
        />;
        <FormField;
          control={form.control}'
          name='is_default';

          render={({}
            field;
          }: {}
'
            field: ControllerRenderProps<FormValues, 'isDefault'>;
          }) => (;'
            <FormItem className='flex items-center justify-between'>;'
              <FormLabel className='cursor-pointer'>;
                Set as default template;
              </FormLabel>;
              <FormControl>;

                <Switch'
                  aria-label='Default template'
                  checked={field && field.value}
:src/components/contracts/templates/TemplateSaveForm.tsx
                  onCheckedChange={field && field.onChange}                />;

  };
  return (;
    <Form {...form}>;"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}"
          name="title";"
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (;
            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
              <FormControl>;"
                <Input {...field} placeholder="Enter template name" />;
:src/components/contracts/templates/TemplateSaveForm.tsx

              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
:src/components/contracts/templates/TemplateSaveForm.tsx
        />;
        <FormField;
          control={form.control}"
          name="isDefault""
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => ("
            <FormItem className="flex items-center justify-between">"
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch"
                  aria-label="Default template""
          name="isDefault";"
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => (;"
            <FormItem className="flex items-center justify-between">;"
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch;"
                  aria-label="Default template";
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />
        "
        <div className="flex gap-2 justify-end">"
          <Button type="button" variant="outline" onClick={onCancel}>
:src/components/contracts/templates/TemplateSaveForm.tsx
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? (

:src_backup/components/contracts/templates/TemplateSaveForm.tsx
            Cancel
          </Button>

          <Button type='button' variant='outline' onClick={onCancel}>;
            Cancel;
          </Button>;'
          <Button type='submit' disabled={saving}>;
            {saving ? (;
              <>;'
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                Saving...;
              </>;
            ) : (;'
              `${editTemplate ? 'Update' : 'Save'} Template`;
:src_backup/components/contracts/templates/TemplateSaveForm.tsx

              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
:src_backup/components/contracts/templates/TemplateSaveForm.tsx
              `${editTemplate ? "Update" : "Save"} Template`
  editTemplate ? "Update" : "Save" 
"
  editTemplate ? "Update" : "Save" `
}Template`) ;
}</Button> </div> </form> </Form>) ;"
}"};
"`
              `${editTemplate ? "Update" : "Save"} Template`

:src/components/contracts/templates/TemplateSaveForm.tsx
            )}
</Button>;
        </div>;
      </form>;
    </Form>;
  );
}
;
:src/components/contracts/templates/TemplateSaveForm.tsx

          </Button>
        </div>
      </form>
    </Form>
  );

setSaving (true);
try {;
  if (editTemplate) {;
  await updateTemplate.mutateAsync ({;
  <FormItem> <FormLabel>Template Name</FormLabel> <FormControl> <Input {;
  ...field ";
}placeholder="Enter template name" /> ;
}/> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {";
  editTemplate ? "Update" : "Save" ;
}Template`) ;
}</Button> </div> </form> </Form>) ;
}"
:src/components/contracts/templates/TemplateSaveForm.tsx
;'"`
