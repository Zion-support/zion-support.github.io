<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react';
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { format } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",
import { 

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;

=======
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
interface ProjectDetailsFieldsProps {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface ProjectDetailsFieldsProps {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
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
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======

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


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
;
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (
=======
        name="projectName"
=======
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />

<<<<<<< HEAD
            </FormControl>

<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
              <Input placeholder='AI Website Development' {...field} />
            </FormControl>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              <Input placeholder='AI Website Development' {...field} />
            </FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
            <FormMessage />
          </FormItem>
        )}
      />
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx

<<<<<<< HEAD
          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (;
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </FormControl>
            <FormMessage />
          </FormItem>
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
          field: ControllerRenderProps < ContractFormValues, 'project_name'>;
=======
        name="projectName"          field: ControllerRenderProps < ContractFormValues, 'project_name'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        }) => (
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }, ) => (
        name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }) => (
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
<FormField
origin/cursor/automate-test-improve-and-merge-code-2533
        control={form.control}
        name='scope_summary';

        render={({
          field
        }: {
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD

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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533
              <Textarea
placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
      />
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <FormField
          control={form && form.control}
          name='startDate'
          render={({
            field
          }: {
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx

      
      <FormField
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <FormField;
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (
<<<<<<< HEAD
=======


<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
          <FormItem>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
<<<<<<< HEAD
                className="min-h-[120px]";
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


          field: ControllerRenderProps < ContractFormValues, 'scope_summary'>;
        }) => (          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';
                className='min - h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }, ) => (
      <FormField;
        control={form.control}
        name="scope_summary";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }) => (
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';
                className='min - h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min - h-[120px]";

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                {...field}
=======
                className="min-h-[120px]";                {...field}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
          </FormItem>;
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
            field: ControllerRenderProps<ContractFormValues, 'startDate'>
          }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Start Date</FormLabel>
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
=======

<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
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

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    mode="single"
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        <FormField;
          control={form.control}
          name="startDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar;
<<<<<<< HEAD
                    mode="single";
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
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
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
=======
                    mode='single';
                    selected={field.value}
                    on_select={field.on_change}
                    disabled={date => date < new Date ()}                    initial_focus                    mode="single";
                    selected = {field.value, }
                    on_select = {field.on_change, }
                    disabled = {(date, ) => date < new Date (), }
                    >;

        />;

        <FormField
          control={form && form.control}
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
variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
origin/cursor/automate-test-improve-and-merge-code-2533
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date < new Date()}
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        />
<FormField
          control={form.control}
origin/cursor/automate-test-improve-and-merge-code-2533
          name='endDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>
          }) => (



            <FormItem className='flex flex-col'>
              <FormLabel>End Date (Optional)</FormLabel>
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
<<<<<<< HEAD
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
=======

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >

<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
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
origin/cursor/automate-test-improve-and-merge-code-2533
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Leave empty if the end date is flexible
              </FormDescription>
              <FormMessage />
            </FormItem>
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (;
            <FormItem className="flex flex-col">;
<<<<<<< HEAD
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>;
                Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
      </div>;
    </>;
  );
}
=======
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

<<<<<<< HEAD
=======
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
        
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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    >
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar
                    mode="single"
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx


                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>;
                Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
      </div>
    </>
  );
}
<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/contracts/components/ProjectDetailsFields.tsx
