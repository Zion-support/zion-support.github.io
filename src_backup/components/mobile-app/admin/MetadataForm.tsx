:src/components/mobile-app/admin/MetadataForm.tsx

import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from 'lucide-react'

interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AppMetadataValues } from './MetadataManager';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,;
} from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

origin/cursor/automate-test-improve-and-merge-code-2533
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
:src/components/mobile-app/admin/MetadataForm.tsx

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),

  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(),
      const value = e.currentTarget.value.trim(),

      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value]),
        e.currentTarget.value = ""
interface MetadataFormProps {;
  form: UseFormReturn<AppMetadataValues>;
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");  ;
  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>,) => {;
    if (e && e.key === "Enter" || e && e.key === ",") {;
      e && e.preventDefault();
      const value = e && e.currentTarget.value && value.trim();

      if (value && !keywords && keywords.includes(value)) {;
        setValue("keywords", [...keywords, value]);
        e && e.currentTarget.value = "";
      }
    }
  },

  const removeKeyword = (keyword: string) => {
    setValue(
      "keywords",
      keywords.filter((k) => k !== keyword)
    )
  },

  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,
  const longDescription = watch("longDescription"),
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
};  const removeKeyword = (keyword: string,) => {;
    setValue(;
      "keywords",;
      keywords && keywords.filter((k,) => k !== keyword);
    );
  },;

  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,;
  const longDescription = watch("longDescription"),;

  return (
  const { control, register, watch, setValue } = form
  const keywords = watch("keywords")
  const platform = watch("platform")
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    if (e.key === "Enter" |e.key === ",") {
      e.preventDefault()
      const value = e.currentTarget.value.trim()
      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value])
        e.currentTarget.value = ""
      }
};
  };
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000
};  const removeKeyword = (keyword: string,) => {
    setValue(
      "keywords"
      keywords.filter((k,) => k !== keyword)
    )
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000
  const longDescription = watch("longDescription")  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>App Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={control}
              name="appTitle"
:src/components/mobile-app/admin/MetadataForm.tsx
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input
                    <Input
                      placeholder="Enter app title"
                      maxLength={platform === "ios" ? 30 : 50}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === "ios" ? "30" : "50"} characters
                  </FormDescription>
                </FormItem>
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { AppMetadataValues } from "./MetadataManager",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Badge } from "@/components/ui/badge",;
import { X } from 'lucide-react';
interface MetadataFormProps {;
  form: UseFormReturn<AppMetadataValues>;
}
;
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form,;
  const keywords = watch("keywords"),;
  const platform = watch("platform"),;
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === "Enter" || e.key === ",") {;
      e.preventDefault(),;
      const value = e.currentTarget.value.trim(),;
      if (value && !keywords.includes(value)) {;
        setValue("keywords", [...keywords, value]),;
        e.currentTarget.value = "";
      }
    }
},;
  const removeKeyword = (keyword: string) => {;
    setValue(;
      "keywords",;
      keywords.filter((k) => k !== keyword);
    );
  },;
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,;
  const longDescription = watch("longDescription");
  return (;
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;
            <FormField;
              control={control}
              name="appTitle";
              render={({ field }: { field: any }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 : 50}
                      {...field}
:src/components/mobile-app/admin/MetadataForm.tsx
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Max {platform === "ios" ? "30" : "50"} characters;
                  </FormDescription>;
:src/components/mobile-app/admin/MetadataForm.tsx
                </FormItem>;
              )}
            />;
            <FormField;
              control={control}
              name="shortDescription"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Brief description of your app"
                      maxLength={platform === "ios" ? 170 : 80}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === "ios" ? "170" : "80"} characters
                  </FormDescription>
                </FormItem>
              )}
            />;
            <FormField;
              control={control}
              name="longDescription"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength={maxDescriptionLength}
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength = {maxDescriptionLength,}
                </FormItem>)}
            />;
            <FormField;
              control = {control, }
              name="long_description";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
                      max_length = {maxDescriptionLength, }
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
:src/components/mobile-app/admin/MetadataForm.tsx
                    {longDescription.length}/{maxDescriptionLength} characters;
                  </FormDescription>;
                </FormItem>;
              )}
            />

            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input

                    <Textarea
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength = {maxDescriptionLength,}

              <Input
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">
                    {keyword}
                    <button
                      type="button"
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                      aria-label="Remove keyword"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
:src/components/mobile-app/admin/MetadataForm.tsx
</div>
              <FormDescription className="mt-2">
                Add keywords to improve discoverability (max 100 characters total)
              </FormDescription>
            </div>

            <FormField
              control={control}
              name="version"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>;
              )}
            />;
          </div>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};

    </Card>);
},
;
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
:src/components/mobile-app/admin/MetadataForm.tsx
/>
          </div>
        </Form>
      </CardContent>
    </Card>
  )

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from 'lucide-react'

