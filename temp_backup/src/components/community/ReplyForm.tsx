<<<<<<<< HEAD:temp_backup/src/components/community/ReplyForm.tsx
/* eslint-disable */
 import {;
========
<<<<<<< HEAD

import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/components/community/ReplyForm.tsx
  Form;
FormControl;
FormField;
FormItem;
FormMessage interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
interface ReplyFormValues {
  content: string
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ''
    }
  })
  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);    try {
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
<<<<<<<< HEAD:temp_backup/src/components/community/ReplyForm.tsx
  }
========
  };

=======
<<<<<<< HEAD

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

  Form
  FormControl
  FormField
  FormItem
  FormMessage
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;


import { useState } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

<<<<<<< HEAD
import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
  Form,
  FormControl,
  FormField,
  FormItem,
<<<<<<< HEAD
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string

<<<<<<< HEAD
    setIsSubmitting(true);    try {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
interface ReplyFormValues {
  content: string

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ''
    }
  })
  const handleSubmit = async (values: ReplyFormValues) => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setIsSubmitting(true);    try {
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD

import { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormMessage;
} from "@/components/ui/form",;
import { Card, CardContent } from "@/components/ui/card",;
interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>,;
  parentId?: string;
interface ReplyFormValues {;
  content: string;
=======
  parentId?: string;
interface ReplyFormValues {;
  content: string;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReplyFormValues>({;
    defaultValues: {;
      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;
    setIsSubmitting(true);    try {;
      await onSubmit(values && values.content);
      form && form.reset();
    } finally {;
      setIsSubmitting(false);
import { useState } from 'react';
import { use_form, ControllerRenderProps } from 'react - hook - form';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components / ui / form';
import { Card, CardContent } from '@/components / ui / card';
interface ReplyFormProps {
  on_submit: (content: string) => Promise < void>;
  parent_id?: string;
interface ReplyFormValues {
  content: string;
export const ReplyForm = ({ on_submit, parent_id }: ReplyFormProps) =>: any {
  const [is_submitting, setIsSubmitting] = useState (false);
  const form = use_form < ReplyFormValues>({
    default_values: {
      content: '',
    },
  });
  const handle_submit = async (values: ReplyFormValues) => {
    setIsSubmitting (true);    try {
      await on_submit (values.content);
      form.reset ();
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <Card>;
      <CardContent className='pt - 6'>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (handle_submit)}>;
            <FormField;
              control={form.control}
              name='content';
  parentId?: string;
}
;
interface ReplyFormValues {;
  content: string;
}
;
export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const form = useForm<ReplyFormValues>({;
    defaultValues: {;
      content: "";
    }
  }),;
  const handleSubmit = async (values: ReplyFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values.content),;
      form.reset();
    } finally {;
      setIsSubmitting(false);
    }
  },

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/components/community/ReplyForm.tsx
  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
<<<<<<< HEAD
              control={form.control}
<<<<<<<< HEAD:temp_backup/src/components/community/ReplyForm.tsx
========
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues, "content"> }) => (
=======
<<<<<<< HEAD
              control={form.control}
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/components/community/ReplyForm.tsx
              name='content'
              render={({
                field
              }: {
                field: ControllerRenderProps<ReplyFormValues, 'content'>
              }) => (                <FormItem>
<<<<<<<< HEAD:temp_backup/src/components/community/ReplyForm.tsx
                  <FormControl>
                    <Textarea className='min-h-[100px] resize-y' {...field} />
========
                  <FormControl>
                    <Textarea className='min-h-[100px] resize-y' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              control={form.control}
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (
>>>>>>> merged-prs-20250907-203621
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px] resize-y"
<<<<<<< HEAD
                      {...field}
                    />
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/components/community/ReplyForm.tsx
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
<<<<<<<< HEAD:temp_backup/src/components/community/ReplyForm.tsx
}
export default ReplyForm
========
};

export default ReplyForm;
=======
  },;
  return (;
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form.control}
              name="content";
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (;
                <FormItem>;
<<<<<<< HEAD
}
export default ReplyForm
}
export default ReplyForm;
;
}
}

ursor/fix-website-loading-errors-and-merge-6662
              render={({
                field
              }: {
                field: ControllerRenderProps<ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <FormControl>;
                    <Textarea className='min-h-[100px] resize-y' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            <div className='mt-4 flex justify-end'>;
              <Button type='submit' disabled={isSubmitting}>;
                {isSubmitting ? 'Submitting...' : 'Post Reply'}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};
export default ReplyForm;
                field: ControllerRenderProps < ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
                  <FormControl>;
                    <Textarea className='min - h-[100px] resize - y' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <div className='mt - 4 flex justify - end'>;
              <Button type='submit' disabled={is_submitting}>;
                {is_submitting ? 'Submitting...' : 'Post Reply'}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
  FormMessage;
} from "@/components/ui/form",;
import { Card, CardContent } from "@/components/ui/card",;
;
interface ReplyFormProps {;
  onSubmit:(content:string) => Promise<void>,;
  parentId?:string;}
;
interface ReplyFormValues {;
  content:string;
}
;
export const ReplyForm = ({ onSubmit, parentId } ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  const form = useForm<ReplyFormValues>({;
    defaultValues:{;
      content:"";
    }
  }),;
;
  const handleSubmit = async (values:ReplyFormValues) => {;
    setIsSubmitting(true),;
    try {;
      await onSubmit(values.content),;
      form.reset();
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)}>;
            <FormField;
              control={form.control}
              name="content";
              render={({ field } { field:ControllerRenderProps<ReplyFormValues "content"> }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea;
                      className="min-h-[100px] resize-y";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            <div className="mt-4 flex justify-end">;
              <Button type="submit" disabled={isSubmitting}>;
                {isSubmitting ? "Submitting..." :"Post Reply"}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  ),;
},;
;
export default ReplyForm,; import {;
  Form;
FormControl;
FormField;
FormItem;
FormMessage interface ReplyFormProps {;
  onSubmit: (content: string) => Promise<void>;
parentId?: string ;
}interface ReplyFormValues {;
  content: string ;
}export const ReplyForm = ({;
  onSubmit, parentId ;
}: ReplyFormProps) => {;
  const [isSubmitting, setIsSubmitting] = useState (false);
defaultValues: {;
  ...field ;
}/> </FormControl> <FormMessage /> </FormItem>) ;
}/> </Button> </div> </form> </Form> </CardContent> </Card>) ;
};
export default ReplyForm;
}
export default ReplyForm
}
export default ReplyForm;
;
}
}
},

export default ReplyForm,
export default ReplyForm;
=======
export default ReplyForm;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/components/community/ReplyForm.tsx
