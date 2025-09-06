<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD:src/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns',;
import { Button } from '@/components/ui/button',;
import { Calendar } from '@/components/ui/calendar',;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
=======
// If there are multiple milestones, submit them one by one;
    milestones.forEach(milestone => {}
      onSubmit({}
        title: milestone.title;
        description: milestone.description;
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined;
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
      })
    })

  },

<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
  const handleAddMilestone = (milestone: GeneratedMilestone) => {

    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })

type MilestoneFormValues = z.infer < typeof form_schema>;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AddMilestoneForm.tsx
import React from 'react';
import { use_form } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date - fns';
import { Button } from '@/components / ui / button';
=======
  const handleAddMilestone = (milestone: GeneratedMilestone) => {}
    onSubmit({}
      title: milestone.title;
      description: milestone.description;
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined;
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    })

type MilestoneFormValues = z.infer < typeof form_schema>;
import React from 'react';'
import { use_form } from 'react - hook - form';'
import { zod_resolver } from '@hookform / resolvers / zod';'
import { z } from 'zod';'
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date - fns';'
import { Button } from '@/components / ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
import { Calendar } from '@/components / ui / calendar';
import {};
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;'
  FormMessage} from '@/components / ui / form';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';
  Popover;
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
  PopoverContent;
<<<<<<< HEAD:src/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD
  PopoverTrigger} from '@/components / ui / popover'; import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';
const form_schema = z.object ({
  title: z.string ().min (1, 'Title is required'),
=======
  PopoverContent;'
  PopoverTrigger} from '@/components / ui / popover'; import { AIMilestoneGenerator } from './AIMilestoneGenerator';'
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';
const form_schema = z.object ({'
  title: z.string ().min (1, 'Title is required');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
  description: z.string ().optional (),
  due_date: z.date ().optional (),'
  amount: z.coerce.number ().min (0, 'Amount must be greater than or equal to 0')});
type MilestoneFormValues = z.infer < typeof form_schema>;
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AddMilestoneForm.tsx
  PopoverTrigger } from '@/components/ui/popover';
import { AIMilestoneGenerator  } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = null;
type MilestoneFormValues = z.infer<typeof formSchema>
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Popover
  PopoverContent
  PopoverTrigger} from '@/components/ui/popover'; import { AIMilestoneGenerator } from './AIMilestoneGenerator'
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator'
const formSchema = z.object({
  title: z.string().min(1, 'Title is required')
  description: z.string().optional()
  due_date: z.date().optional()
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')})
type MilestoneFormValues = z.infer<typeof formSchema>
origin/cursor/automate-test-improve-and-merge-code-2533
interface AddMilestoneFormProps {
=======
interface AddMilestoneFormProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
  on_submit: (data: MilestoneFormValues, ) => void,
  is_submitting: boolean,
  on_cancel?: () => void;
  project_scope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  project_type?: string;
}
export /**;
 * AddMilestoneForm - Function description;
 */
function AddMilestoneForm() {}
  const form = use_form < MilestoneFormValues>({}
    resolver: zod_resolver (form_schema),
    default_values: {'
      title: '','
      description: '',
      amount: 0}}),
  const handle_submit = (values: MilestoneFormValues) =>: any {}
    on_submit (values);    form.reset ();
  }
  const handleAddMilestones = (milestones: GeneratedMilestone[], ) =>: any {'
    // If there's only one milestone, submit it directly;
    // Check condition;
if ( {) {}
  $2;
}
      const milestone = milestones[0];
      // Check condition;
if ( {) {}
  $2;
}
        on_submit ({}
          title: milestone.title,
          description: milestone.description,
          due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
          amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
        });
        return;
      }
    }
    // If there are multiple milestones, submit them one by one;
    milestones.for_each (milestone => {}
      on_submit ({}
        title: milestone.title,
        description: milestone.description,
        due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
        amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
      });
    });
  }
  const handleAddMilestone = (milestone: GeneratedMilestone, ) =>: any {}
    on_submit ({}
      title: milestone.title,
      description: milestone.description,
      due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
      amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });

  }
type MilestoneFormValues = z && z.infer<typeof formSchema>;'
import React from 'react';'
import { useForm } from 'react-hook-form';'
import { zodResolver } from '@hookform/resolvers/zod';'
import { z } from 'zod';'
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns';'
import { Button } from '@/components/ui/button';'
import { Calendar } from '@/components/ui/calendar';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {;
<<<<<<< HEAD:src/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Popover;
  PopoverContent;
  PopoverTrigger} from '@/components/ui/popover';import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = z && z.object({;
  title: z && z.string().min(1, 'Title is required'),
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});

type MilestoneFormValues = z && z.infer<typeof formSchema>;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;'
  FormMessage} from '@/components/ui/form',;'
import { Input } from '@/components/ui/input',;'
import { Textarea } from '@/components/ui/textarea',;
import {;
  Popover,;
  PopoverContent,;'
  PopoverTrigger} from '@/components/ui/popover',;'
import { AIMilestoneGenerator } from './AIMilestoneGenerator',;'
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',;
const formSchema = z.object({;'
  title: z.string().min(1, 'Title is required'),;
  description: z.string().optional(),;
  due_date: z.date().optional(),;'
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),;
type MilestoneFormValues = z.infer<typeof formSchema>,;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AddMilestoneForm.tsx
interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues,) => void,;
  isSubmitting: boolean,;
  onCancel?: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  projectType?: string;
}
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx

export function AddMilestoneForm(): any ({;
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope = '';
  projectStartDate = '';
  projectEndDate = '';
  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: '',,
  description: '',;
      amount: 0}}),;
  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values);    form && form.reset()
};

  const handleAddMilestones = (milestones: GeneratedMilestone[],) => {;
=======
;
export function AddMilestoneForm() { return null; }
      amount: 0}}),;
  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values),;
    form.reset();
  },;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
    // If there's only one milestone, submit it directly;
    if (milestones && milestones.length === 1) {;
      const milestone = milestones[0];
      if (milestone) {;
        onSubmit({;
          title: milestone.title,,
  description: milestone.description,;
          due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,;
          amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
        }),;
        return;
      }
    }

<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
    // If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title,
        description: milestone.description,
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
=======
    // If there are multiple milestones, submit them one by one;
    milestones.forEach(milestone => {}
      onSubmit({}
        title: milestone.title;
        description: milestone.description;
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined;
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
      })
    })
<<<<<<< HEAD:src/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD
  },

<<<<<<< HEAD
  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title,
      description: milestone.description,
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
=======
  const handleAddMilestone = (milestone: GeneratedMilestone,) => {;
    onSubmit({;
      title: milestone && milestone.title,,
  description: milestone && milestone.description,;
      due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
      amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    })
};

  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  },


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AddMilestoneForm.tsx
  }
  const handleAddMilestone = (milestone: GeneratedMilestone,) => {
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },

  return ("
    <div className="space-y-6">
      {/* AI Milestone Generator */}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  },

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator;
          scope={projectScope}
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
          onAddMilestone={handleAddMilestone}
        />;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      )}

<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;

          <FormField
            control = {form && form.control,}
=======

      <Form {...form}>;"
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;

          <FormField;
            control={form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
            name="title"
<<<<<<< HEAD
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Milestone title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (
=======
            render={({ field }: { field: any },) => (;
              <FormItem>;
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
                <FormLabel>Title</FormLabel>;
    <div className="space-y-6">;
=======
                <FormLabel>Title</FormLabel>;"
    <div className="space - y-6">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
      {/* AI Milestone Generator */}
      {project_scope && projectStartDate && (
        <AIMilestoneGenerator;
          scope = {project_scope, }
          start_date = {projectStartDate, }
          end_date = {projectEndDate, }
          project_type = {project_type, }
          onAddMilestones = {handleAddMilestones, }
          onAddMilestone = {handleAddMilestone, }
        />)}
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
      <Form {...form}>;
        <form on_submit={form.handle_submit (handle_submit)} className="space-y-4">;
=======
      <Form {...form}>;"
        <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
          <FormField;
            control = {form.control, }"
            name="title";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel > Title</FormLabel>;
                <FormControl>;"
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;

          />;

          <FormField;
            control = {form && form.control,}"
            name="description"

            render={({ field }: { field: any }) => (

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea"
                    placeholder="Describe what needs to be delivered""
                    className="min-h-[100px]"
<<<<<<< HEAD
=======
              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }"
            name="description";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min-h-[100px]";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <Textarea;"
                    placeholder="Describe what needs to be delivered";"
                    className="min - h-[100px]";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />

<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
<<<<<<< HEAD:src/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD
              control = {form && form.control,}
              name="due_date"
              render={({ field }: { field: any },) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;                        <Button
=======
=======
              control={form.control}
=======
          />;
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

            <FormField;
              control={form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
              name="due_date"
              render={({ field }: { field: any }) => ("
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AddMilestoneForm.tsx

                        <Button
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                          variant="outline"
=======
                        <Button"
                          variant="outline""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
                          className="w-full pl-3 text-left font-normal"
                        >
                          {field.value ? ("
                            format(field.value, "PPP")
                          ) : ("
                            <span className="text-muted-foreground">
                              Pick a date;
                            </span>
                          )}"
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>"
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar"
                        mode="single"
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus;
<<<<<<< HEAD
=======
              </FormItem>)}
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
          />;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
=======
          />;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
            <FormField;
              control = {form.control, }"
              name="due_date";
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
              render={({ field }: { field: any }, ) => (
                <FormItem className="flex flex-col">;
=======
              render={({ field }: { field: any }, ) => ("
                <FormItem className="flex flex - col">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
                  <FormLabel > Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <FormControl>;
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
                        <Button;
                          variant="outline";
                          className="w - full pl - 3 text - left font-normal";
                        >;
                          {field.value ? (
                            format (field.value, "PPP")) : (
                            <span className="text - muted-foreground">;
                              Pick a date;
                            </span>)}
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p-0" align="start">;
                      <Calendar;
=======
                        <Button;"
                          variant="outline";"
                          className="w - full pl - 3 text - left font - normal";
                        >;
                          {field.value ? ("
                            format (field.value, "PPP")) : ("
                            <span className="text - muted - foreground">;
                              Pick a date;
                            </span>)}"
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w - auto p - 0" align="start">;
                      <Calendar;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
                        mode="single";
                        selected = {field.value, }
                        on_select = {field.on_change, }
                        disabled = {(date, ) => date < new Date (), }
                        initial_focus;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
<<<<<<< HEAD
                </FormItem>;
              )}
=======

            />;

<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
            <FormField
              control = {form && form.control,}
=======

            <FormField;
              control = {form && form.control,}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
              name="amount"
              render={({ field }: { field: any },) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            />;
            <FormField;
              control={form.control}"
              name="amount"
              render={({ field }: { field: any }) => (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
=======
                    <Input"
                      type="number""
                      min="0""
                      step="0 && 0.01""
                      placeholder="0 && 0.00"
                </FormItem>)}
            />;
            <FormField;
              control = {form.control, }"
              name="amount";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > Amount ($)</FormLabel>;
                  <FormControl>;
                    <Input;"
                      type="number";"
                      min="0";"
                      step="0.01";"
                      placeholder="0.00";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />
          </div>

<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
          <div className="flex justify-end space-x-2 pt-4">
            {onCancel && (
              <Button
                type="button"
=======
            />;
          </div>;
"
          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;

              <Button"
                type="button""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
                variant="outline"
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                onClick={onCancel}
                disabled={isSubmitting}
              >;
                Cancel;
              </Button>;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            )}
=======

            )}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : ("
                "Add Milestone"
              )}
<<<<<<< HEAD:src/components/projects/milestones/AddMilestoneForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );
<<<<<<< HEAD
=======

                </FormItem>)}
            />;
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
          </div>;
          <div className="flex justify - end space - x-2 pt-4">;
=======
          </div>;"
          <div className="flex justify - end space - x-2 pt - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
            {on_cancel && (
              <Button;"
                type="button";"
                variant="outline";
                on_click = {on_cancel, }
                disabled = {is_submitting, }
              >;
                Cancel;
              </Button>)}"
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? (
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;
=======
                <>;"
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
                  Saving...;
                </>) : ("
                "Add Milestone")}
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>);
}//If there are multiple milestones, submit them one by one <AIMilestoneGenerator scope= {}
  project_scope;
}start_date= {}
  projectStartDate;
}end_date= {}
  projectEndDate;
}project_type= {}
  project_type;

}onAddMilestones= {}
  handleAddMilestones;
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
}onAddMilestone= {

  handleAddMilestone;
}/>);
}</FormControl> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>);
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4" > <FormField <FormLabel > Due Date (optional) </FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button variant="outline" className="w - full pl - 3 text - left font-normal" >) : (<span className="text - muted-foreground" > Pick a date </span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p-0" align="start" > <Calendar initial_focus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <Button type="button" variant="outline" on_click={
  on_cancel;
}disabled= {
  is_submitting;
}> Cancel </Button>) ";
}<> <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" /> Saving... </>) : ("Add Milestone");
}</Button> </div> </form> </Form> </div>);
=======
}onAddMilestone= {}
  handleAddMilestone;
}/>);
}</FormControl> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>);"
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormLabel > Due Date (optional) </FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button variant="outline" className="w - full pl - 3 text - left font - normal" >) : (<span className="text - muted - foreground" > Pick a date </span>) ";"
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar initial_focus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);"
}/> <FormField <FormItem> <FormLabel > Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";"
}/> </div> <Button type="button" variant="outline" on_click={}
  on_cancel;
}disabled= {}
  is_submitting;"
}> Cancel </Button>) ";"
}<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : ("Add Milestone");
}</Button> </div> </form> </Form> </div>);'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
}'"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD:src_backup/components/projects/milestones/AddMilestoneForm.tsx
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AddMilestoneForm.tsx
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );

}//If there are multiple milestones, submit them one by one <AIMilestoneGenerator scope= {;
  projectScope ;
}startDate= {;
  projectStartDate ;
}endDate= {;
  projectEndDate ;
}projectType= {;
  projectType ;
}onAddMilestones= {;
  handleAddMilestones ;
}onAddMilestone= {;
  handleAddMilestone ;
}/>) ;
}</FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <Button type="button" variant="outline" onClick={;
  onCancel ;
}disabled= {;
  isSubmitting ;
}> Cancel </Button>) ";
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone") ;
}</Button> </div> </form> </Form> </div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AddMilestoneForm.tsx
