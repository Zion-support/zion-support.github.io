<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react';
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription, ;
  FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
interface ProjectDetailsFieldsProps {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;

import { format } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",
import { 

  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
}
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
name='projectName'
        render={({
          field
        }: {
          field: ControllerRenderProps<ContractFormValues, 'projectName'>
        }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx

import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;

  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
}

export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
  return (
    <>;
      <FormField


        render={({
          field
        }: {

        control={form.control}


=======
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (



import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { ContractFormValues } from "./ContractForm",
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>
import { format } from "date-fns",;
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
;
import { format  } from 'date-fns';
import { CalendarIcon  } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps  } from 'react-hook-form';
import {FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage ;
} from "@/components/ui/form",import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { Button  } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger  } from '@/components/ui/popover';
import { Calendar  } from '@/components/ui/calendar';
import { ContractFormValues  } from './ContractForm';
interface ProjectDetailsFieldsProps  {form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;interface ProjectDetailsFieldsProps  {form: UseFormReturn<ContractFormValues>;import { format } from "date-fns",import { UseFormReturn, ControllerRenderProps } from "react-hook-form",import {FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage;
} from "@/components/ui/form",interface ProjectDetailsFieldsProps  {form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;
}
export function ProjectDetailsFields() {return (<>;
      <FormField;
        control={form.control}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        name="projectName"
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (

=======

        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx



          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />

<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
            </FormControl>


              <Input placeholder='AI Website Development' {...field} />
            </FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
              <Input placeholder='AI Website Development' {...field} />
            </FormControl>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
            <FormMessage />
          </FormItem>
        )}
      />
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx

          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (;
          <FormItem>;
=======
name='projectName';
        render={({field;
        }: {field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (<FormItem>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (interface ProjectDetailsFieldsProps  {form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;
}export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {return (<>;
      <FormField;
        render={({field;
        }: {control={form.control}name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (import { Input } from "@/components/ui/input",import { Textarea } from "@/components/ui/textarea",import { Button } from "@/components/ui/button",import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",import { Calendar } from "@/components/ui/calendar",import { ContractFormValues } from "./ContractForm",interface ProjectDetailsFieldsProps  {form: UseFormReturn<ContractFormValues>;
  FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage;
} from "@/components/ui/form",interface ProjectDetailsFieldsProps  {form: UseFormReturn<ContractFormValues>;
}export function ProjectDetailsFields() {return (<>;
      <FormField;
        control={form.control}
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (<FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
              <Input placeholder='AI Website Development' {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
          field: ControllerRenderProps < ContractFormValues, 'project_name'>;
        }) => (
          <FormItem>;
=======
          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (<FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (</FormControl>;
            <FormMessage />;
          </FormItem>;
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (<FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;</FormControl>;<FormMessage />;
          </FormItem>;
        )}
      />;field: ControllerRenderProps < ContractFormValues, 'project_name'>;
        }) => (<FormItem>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }, ) => (name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }) => (<FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            <FormMessage />;
          </FormItem>)}
      />;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
      <FormField;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
<FormField
origin/cursor/automate-test-improve-and-merge-code-2533
=======

<FormField
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
        control={form.control}
        name='scope_summary';

        render={({
          field
        }: {
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533
=======

          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (;


      <FormField
        control={form && form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
              <Textarea
placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'
=======
      <FormField;<FormField;
        control={form.control}
        name='scope_summary';render={({field;
        }: {field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (<FormField;
        control={form && form.control}
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (<FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (<FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
placeholder='Describe the project scope, deliverables, and expectations...';
                className='min-h-[120px]';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
                {...field}
              />;
            </FormControl>;
            <FormDescription>Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        )}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
      />
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======

      />;

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
        <FormField
          control={form && form.control}
          name='startDate'
          render={({
            field
          }: {

<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
      
      <FormField
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
      <FormField;
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (



=======
            field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;

        <FormField
          control = {form && form.control,}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (;
            <FormItem className="flex flex-col">;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && 'text-muted-foreground'}`}
                      {field && field.value ? (
                        format(field && field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w-auto p-0' align='start'>;
                  <Calendar
                    mode='single'
                    selected={field && field.value}
                    onSelect={field && field.onChange}
                    disabled={date => date < new Date()}                    initialFocus                    mode="single";
                    selected = {field && field.value,}
                    onSelect = {field && field.onChange,}
                    disabled = {(date,) => date < new Date(),}
                    >;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx


          field: ControllerRenderProps < ContractFormValues, 'scope_summary'>;
=======
        )}/>;<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;/>;
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
        <FormField;
          control={form && form.control}
          name='startDate';
          render={({field;
          }: {field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (<FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;<FormField;
          control = {form && form.control}
          name="startDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (<FormItem className="flex flex-col">;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && 'text-muted-foreground'}`}
                      {field && field.value ? (format(field && field.value, 'PPP')) : (<span>Pick a date</span>;
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w-auto p-0' align='start'>;
                  <Calendar;
                    mode='single';
                    selected={field && field.value}
                    onSelect={field && field.onChange}
                    disabled={date => date < new Date()}                    initialFocus                    mode="single";
                    selected = {field && field.value}
                    onSelect = {field && field.onChange}
                    disabled = {(date,) => date < new Date()}
                    >;
                      {field && field.value ? (format(field && field.value, "PPP")) : (<span>Pick a date</span>;<FormField;
        control={form.control}
=======
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (<FormField;
        control={form.control}
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (<FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (<FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";field: ControllerRenderProps < ContractFormValues, 'scope_summary'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
        }) => (          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';
                className='min - h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }, ) => (<FormField;
        control={form.control}
        name="scope_summary";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }) => (<FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';
                className='min - h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations...";
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                className="min - h-[120px]";

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
                {...field}
=======
                className="min - h-[120px]";{...field}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
              />;
            </FormControl>;
            <FormDescription>Be specific about what is included and any limitations;
            </FormDescription>;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
            <FormMessage />;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx

          </FormItem>;



<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx



=======
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
            field: ControllerRenderProps<ContractFormValues, 'startDate'>
          }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Start Date</FormLabel>
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx

                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx

                    mode="single"
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx

=======
            <FormMessage />;</FormItem>;)}
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
        <FormField;
          control={form.control}name="startDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (<FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
            field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (<FormItem className='flex flex-col'>;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (format(field.value, "PPP")) : (<span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar;
                    mode="single";
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;<FormField;
          control = {form.control }
          name="start_date";
          render={({ field }: { field: ControllerRenderProps < ContractFormValues, "start_date"> }, ) => (<FormItem className="flex flex - col">;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;
                      variant={'outline'}
                      className={`w - full pl - 3 text - left font - normal ${!field.value && 'text - muted - foreground'}`}
                      {field.value ? (format (field.value, 'PPP')) : (<span > Pick a date</span>)}
                      <CalendarIcon className='ml - auto h - 4 w - 4 opacity - 50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w - auto p - 0' align='start'>;
                  <Calendar;
                    mode='single';
                    selected={field.value}
                    on_select={field.on_change}
                    disabled={date => date < new Date ()}                    initial_focus                    mode="single";
                    selected = {field.value }
                    on_select = {field.on_change }
                    disabled = {(date, ) => date < new Date () }
                    >;/>;<FormField;
          control={form && form.control}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
          name='endDate'
          render={({
            field
          }: {

            field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>        ;

        <FormField
          control = {form && form.control,}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
                      )}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date < new Date()}
origin/cursor/automate-test-improve-and-merge-code-2533
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        />
<FormField
          control={form.control}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
          name='endDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>
          }) => (
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx



            <FormItem className='flex flex-col'>
              <FormLabel>End Date (Optional)</FormLabel>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>
        <FormField
          control = {form.control,}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (
            <FormItem className="flex flex-col">
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>

            <FormItem className='flex flex-col'>
              <FormLabel>End Date (Optional)</FormLabel>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx

                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value |undefined}
                    onSelect={field.onChange}
                    disabled={date => date < form.getValues('startDate')}
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Leave empty if the end date is flexible
              </FormDescription>
              <FormMessage />
            </FormItem>
=======
          name='endDate';
          render={({field;
          }: {field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (<FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>        ;<FormField;
          control = {form && form.control}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => ({field.value ? (format(field.value, "PPP")) : (<span>Pick a date</span>;
                      )}variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (format(field.value, 'PPP')) : (<span>Pick a date</span>;
                      )}<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w-auto p-0' align='start'>;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                  <Calendar
                    mode='single'
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx

                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}
                    disabled={date => date < form && form.getValues('startDate')}                    initialFocus                    mode="single";
                    selected = {field && field.value || undefined,}
                    onSelect = {field && field.onChange,}
                    disabled = {(date,) => date < form && form.getValues("startDate"),}
                    >;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;



=======
                  <Calendar;
                    mode='single';
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date < new Date()}initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
            </FormItem>;
          )}/>;
<FormField;
          control={form.control}name='endDate';
          render={({field;
          }: {field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (<FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>;
        <FormField;
          control = {form.control}
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (<FormItem className="flex flex-col">;
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (<FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
            <FormItem className='flex flex-col'>;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (format(field.value, "PPP")) : (<span>Pick a date</span>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
=======
        
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}

                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                  <Calendar
                    mode="single"


<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx
=======
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (format(field.value, 'PPP')) : (<span>Pick a date</span>;
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w-auto p-0' align='start'>;
                  <Calendar;
                    mode='single';
                    selected={field.value |undefined}
                    onSelect={field.onChange}
                    disabled={date => date < form.getValues('startDate')}initialFocus;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx


;
<<<<<<< HEAD:src_backup/components/contracts/components/ProjectDetailsFields.tsx

      </div>
    </>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
            </FormItem>;
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (<FormItem className="flex flex-col">;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && 'text-muted-foreground'}`}
                      {field && field.value ? (format(field && field.value, 'PPP')) : (<span>Pick a date</span>;
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w-auto p-0' align='start'>;
                  <Calendar;
                    mode='single';
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
        <FormField;
          control={form.control}
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (<FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}>;
                      {field.value ? (format(field.value, "PPP")) : (<span>Pick a date</span>;
                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}
                    disabled={date => date < form && form.getValues('startDate')}                    initialFocus                    mode="single";
                    selected = {field && field.value || undefined}
                    onSelect = {field && field.onChange}
                    disabled = {(date,) => date < form && form.getValues("startDate")}
                    >;
                      {field && field.value ? (format(field && field.value, "PPP")) : (<span>Pick a date</span>;)}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar;
                    mode="single";
                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;;</div>;
    </>;
  )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/contracts/components/ProjectDetailsFields.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/contracts/components/ProjectDetailsFields.tsx
