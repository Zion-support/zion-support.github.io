:src/components/community/ReplyForm.tsx

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",


:src/components/community/ReplyForm.tsx
import { useState } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
:src/components/community/ReplyForm.tsx


import {
  Form,
  FormControl,
  FormField,
  FormItem,
:src/components/community/ReplyForm.tsx
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card",
  FormMessage,;
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card";
origin/cursor/automate-test-improve-and-merge-code-2533
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
interface ReplyFormValues {
  content: string
:src/components/community/ReplyForm.tsx

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>,
  parentId?: string
:src/components/community/ReplyForm.tsx
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

      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;

:src/components/community/ReplyForm.tsx
    setIsSubmitting(true);    try {
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
:src/components/community/ReplyForm.tsx
parentId?: string;
interface ReplyFormValues {;
  content: string;

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
  content: string
      content: '',;
    },;
  });
  const handleSubmit = async (values: ReplyFormValues) => {;

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

              render={({
                field
              }: {

                field: ControllerRenderProps<ReplyFormValues, 'content'>;
              }) => (                <FormItem>;
    }
  },

  return (
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField

:src/components/community/ReplyForm.tsx
              control={form.control}
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues "content"> }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px] resize-y"
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
                  <FormControl>;
                    <Textarea;
                      className="min-h-[100px] resize-y";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
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
},

export default ReplyForm,
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
  )
};

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
export default ReplyForm;
:src/components/community/ReplyForm.tsx
  );
};
export default ReplyForm;

  );
};
export default ReplyForm;
origin/cursor/automate-test-improve-and-merge-code-2533
