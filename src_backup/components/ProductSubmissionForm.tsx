:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {

  Form
  FormControl
  FormDescription
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AIListingGenerator } from '@/components/listing/AIListingGenerator'
import { Sparkles } from 'lucide-react'
// Define the form schema with zod
const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters')
  description: z.string().min(10, 'Description must be at least 10 characters')
  price: z
    .string()
    .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: 'Price must be a valid number'
    })
  category: z.string().min(1, 'Please select a category')
  image:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  video:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  model:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  tags: z.string().optional()
})
// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>
export function ProductSubmissionForm() {
  const { user } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [imagePreview, setImagePreview] = React.useState(null as string | null)
  const [activeTab, setActiveTab] = React.useState('manual')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from "next/router",
import Image from 'next/image', // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger',
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",
import { Sparkles } from 'lucide-react'

// Define the form schema with zod
const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: "Price must be a valid number"}),
  category: z.string().min(1, "Please select a category"),
  image: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  video: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  model: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  tags: z.string().optional()}),

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>,

export function ProductSubmissionForm() {
  const { user } = useAuth(),
  const { toast } = useToast(),
  const router = useRouter(),
  const [isSubmitting, setIsSubmitting] = React.useState(false),
  const [imagePreview, setImagePreview] = React.useState(null as string | null),
  const [activeTab, setActiveTab] = React.useState("manual"),

  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      video: undefined,
      model: undefined,
      tags: ""}}),

  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("image", file),
      const reader = new FileReader(),
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      },
      reader.readAsDataURL(file)
    }
  },

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("video", file)
    }
  },

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("model", file)
    }
  },

  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue("description", content.description),
    form.setValue("tags", content.tags.join(", ")),

    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),
    form.setValue("price", averagePrice),

    // Switch to the manual tab to show applied content
    setActiveTab("manual")
  },

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({

        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive"}),
      return
    }

    setIsSubmitting(true),

    try {
      // Create the product listing
const productData = {
=======
try {
      // Create the product listing;
      const product_data = {

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
=======
try {}
      // Create the product listing;
      const product_data = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        title: values.title,
=======
      const productData = {        title: values.title,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        description: values.description,
        price: parseFloat(values.price),
        category: values.category,
:src_backup/components/ProductSubmissionForm.tsx
        currency: "USD", // Default currency
        tags: values.tags ? values.tags.split().map(tag => tag.trim()) : [],
        author: {
name: user.displayName || "Anonymous Creator",
          id: user.id},
        createdAt: new Date().toISOString()},
      let imagePublicUrl: string | undefined;
      // If we have an image, upload it;
      // Check condition;
if ( {) {}
  $2;
}
        const image_path = `product_images/${product_record.id}/${values.image.name}`;
        const { error: upload_error } = await supabase.storage;'
          .from ('products');
          .upload (image_path, values.image);
        // Check condition;
if ( {) {}
  $2;
}
          throw new Error (upload_error.message);
        }
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase.storage;'
          .from ('products');
          .getPublicUrl (image_path);
        imagePublicUrl = publicUrlData.public_url;
        // Update the product with the image URL;
        const { error: update_error } = await supabase;'
          .from ('product_listings');
          .update ({}
            images: [imagePublicUrl],
          });'
          .eq ('id', product_record.id);
        // Check condition;
if ( {) {}
  $2;
}
          throw new Error (update_error.message);
        }
      }
      // Upload video if provided;
      // Check condition;
if ( {) {}
  $2;
}`
        const video_path = `product_videos/${product_record.id}/${values.video.name}`;
        const { error: upload_error } = await supabase.storage;'
          .from ('products');
          .upload (video_path, values.video);
        // Check condition;
if ( {) {}
  $2;
}
          throw new Error (upload_error.message);
        }
        const { data: publicUrlData } = supabase.storage;'
          .from ('products');
          .getPublicUrl (video_path);
        const { error: update_error } = await supabase;'
          .from ('product_listings');
          .update ({ video_url: publicUrlData.public_url });'
          .eq ('id', product_record.id);
        // Check condition;
if ( {) {}
  $2;
}
          throw new Error (update_error.message);
        }
      }
      // Upload model if provided;
      // Check condition;
if ( {) {}
  $2;
}`
        const model_path = `product_models/${product_record.id}/${values.model.name}`;
        const { error: upload_error } = await supabase.storage;'
          .from ('products');
          .upload (model_path, values.model);
        // Check condition;
if ( {) {}
  $2;
}
          throw new Error (upload_error.message);
        }
        const { data: publicUrlData } = supabase.storage;'
          .from ('products');
          .getPublicUrl (model_path);
        const { error: update_error } = await supabase;'
          .from ('product_listings');
          .update ({ model_url: publicUrlData.public_url });'
          .eq ('id', product_record.id);
        // Check condition;
if ( {) {}
  $2;
}
          throw new Error (update_error.message);
        }
      }
      // Send listing to moderation service;

      try {'
        await supabase.functions.invoke ('moderate - listing', {}
          body: {}
            listing_id: product_record.id,'
            listing_type: 'product',
            description: values.description,
            images: imagePublicUrl ? [imagePublicUrl] : [],
            seller_id: user.id,
          },
        });

      } catch (err) {'
        logErrorToProduction ('Error invoking moderation:', { data: err });
      }

:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';

:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const { data: productRecord, error: productError } = await supabase
=======
'
import React from 'react';'
import { useForm, ControllerRenderProps } from 'react-hook-form';'
import { zodResolver } from '@hookform/resolvers/zod';'
import z from 'zod';'
import { supabase } from '@/integrations/supabase/client';'
import { useAuth } from '@/hooks/useAuth';'
import { useToast } from '@/hooks/use-toast';'
import { useRouter } from 'next/router';'
import Image from 'next/image'; // Import next/image;'
import { logErrorToProduction } from '@/utils/productionLogger';

      const { data: productRecord, error: productError } = await supabase'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        .from('product_listings')
        .insert([productData])'
        .select('id')

:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        .single(),
=======
          name: user.displayName || "Anonymous Creator",
          id: user.id},
        createdAt: new Date().toISOString()},
              .single(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      if (productError) {}
        throw new Error(productError.message)
import React from "react",;"
import { useForm, ControllerRenderProps } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import z from "zod",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { useToast } from "@/hooks/use-toast",;"
import { useRouter } from "next/router",;'
import Image from 'next/image', // Import next/image;'
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",;
import { Sparkles } from 'lucide-react';
// Define the form schema with zod;
const productSchema = z.object({;
  title: z.string().min(3, "Title must be at least 3 characters"),;
  description: z.string().min(10, "Description must be at least 10 characters"),;
  description: z && z.string().min(10, 'Description must be at least 10 characters'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  price: z;
    .string();
:src_backup/components/ProductSubmissionForm.tsx
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
      message: "Price must be a valid number"}),;
  category: z.string().min(1, "Please select a category"),;
  image: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),;
  video: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),;
  model: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),;
  tags: z.string().optional()}),;
// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>,;
export function ProductSubmissionForm() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const router = useRouter(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
  const [imagePreview, setImagePreview] = React.useState(null as string | null),;
  const [activeTab, setActiveTab] = React.useState("manual"),;

:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
:src_backup/components/ProductSubmissionForm.tsx
    defaultValues: {;
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      title: "",;
      description: "",;
      price: "",;
      category: "",;
      category: '',;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
      video: undefined,;
:src_backup/components/ProductSubmissionForm.tsx
      model: undefined,;
      tags: ""}}),;
  // Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("image", file),;
      const reader = new FileReader(),;
      reader.onloadend = () => {;
        setImagePreview(reader.result as string);
      },;
      reader.readAsDataURL(file);
    }
  },;
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("video", file);
    }
  },;
  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("model", file);
    }
  },;
  // Apply AI-generated content to the form;
:src_backup/components/ProductSubmissionForm.tsx
  const handleApplyGenerated = (content: any) => {;
    form.setValue("description", content.description),;
    form.setValue("tags", content.tags.join(", ")),;
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),;
    form.setValue("price", averagePrice),;
    // Switch to the manual tab to show applied content;
    setActiveTab("manual");
  },;
  // Handle form submission;
  const onSubmit = async (values: ProductFormValues) => {;
    if (!user) {;
:src_backup/components/ProductSubmissionForm.tsx
      toast({;
        title: "Authentication Required",;
        description: "You must be logged in to publish products",;
        variant: "destructive"}),;
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Create the product listing;
      const productData = {;
:src_backup/components/ProductSubmissionForm.tsx
        title: values.title,;
        description: values.description,;
        price: parseFloat(values.price),;
        category: values.category,;
        currency: "USD", // Default currency;
        tags: values.tags ? values.tags.split().map(tag => tag.trim()) : [],;
        author: {;
          name: user.displayName || "Anonymous Creator",;
          id: user.id},;
        createdAt: new Date().toISOString()},;
      const { data: productRecord, error: productError } = await supabase;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        title: values && values.title,;
        description: values && values.description,;
        price: parseFloat(values && values.price),;
        category: values && values.category,;'
        currency: 'USD', // Default currency;'
        tags: values && values.tags ? values && values.tags.split(',').map(tag => tag && tag.trim()) : [],;
        author: {;'
          name: user && user.displayName || 'Anonymous Creator',;
          id: user && user.id,;
        },;
        createdAt: new Date().toISOString(),;
      };

      const { data: productRecord, error: productError } = await supabase;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        .from('product_listings');
        .insert([productData]);'
        .select('id');
:src/components/ProductSubmissionForm.tsx
.single(),;
      if (productError) {;
throw new Error(productError.message);
      }
;
      let imagePublicUrl: string | undefined,;
      // If we have an image, upload it;
      if (values.image) {;
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`,;
        const { error: uploadError } = await supabase.storage;
          .from('products');
          .upload(imagePath, values.image),;
        if (uploadError) {;
          throw new Error(uploadError.message);
        }
;
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(imagePath),;
        imagePublicUrl = publicUrlData.publicUrl,;
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
        // Update the product with the image URL;
        const { error: updateError } = await supabase;'
          .from('product_listings');
          .update({;
:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            images: [imagePublicUrl];
          });
          .eq('id', productRecord.id),;
      if (updateError) {;
        throw new Error(updateError.message);
      }
    }
;
      // Upload video if provided;
      if (values.video) {;
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`,;
        const { error: uploadError } = await supabase.storage;
          .from('products');
          .upload(videoPath, values.video),;
        if (uploadError) {;
          throw new Error(uploadError.message);
        }
;
        const { data: publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(videoPath),;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ video_url: publicUrlData.publicUrl });
          .eq('id', productRecord.id),;
        if (updateError) {;
          throw new Error(updateError.message);
        }
      }
;
      // Upload model if provided;
      if (values.model) {;
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`,;
        const { error: uploadError } = await supabase.storage;
          .from('products');
          .upload(modelPath, values.model),;
        if (uploadError) {;
          throw new Error(uploadError.message);
        }
;
        const { data: publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(modelPath),;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ model_url: publicUrlData.publicUrl });
          .eq('id', productRecord.id),;
        if (updateError) {;
          throw new Error(updateError.message);
        }
      }
;
      // Send listing to moderation service;
      try {;
        await supabase.functions.invoke('moderate-listing', {;
          body: {;
            listingId: productRecord.id,;
            listingType: 'product',;
            description: values.description,;
            images: imagePublicUrl ? [imagePublicUrl] : [],;
            sellerId: user.id}
            images: [imagePublicUrl],;
          });'
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Upload video if provided;
      if (values && values.video) {;`
        const videoPath = `product_videos/${productRecord && productRecord.id}/${values && values.video.name}`;
        const { error: uploadError } = await supabase && supabase.storage;'
          .from('products');
          .upload(videoPath, values && values.video);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        const { data: publicUrlData } = supabase && supabase.storage;'
          .from('products');
          .getPublicUrl(videoPath);

        const { error: updateError } = await supabase;'
          .from('product_listings');
          .update({ video_url: publicUrlData && publicUrlData.publicUrl });'
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Upload model if provided;
      if (values && values.model) {;`
        const modelPath = `product_models/${productRecord && productRecord.id}/${values && values.model.name}`;
        const { error: uploadError } = await supabase && supabase.storage;'
          .from('products');
          .upload(modelPath, values && values.model);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        const { data: publicUrlData } = supabase && supabase.storage;'
          .from('products');
          .getPublicUrl(modelPath);

        const { error: updateError } = await supabase;'
          .from('product_listings');
          .update({ model_url: publicUrlData && publicUrlData.publicUrl });'
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Send listing to moderation service;
      try {;'
        await supabase && supabase.functions.invoke('moderate-listing', {;
          body: {;
            listingId: productRecord && productRecord.id,;'
            listingType: 'product',;
            description: values && values.description,;
            images: imagePublicUrl ? [imagePublicUrl] : [],;
            sellerId: user && user.id,;
          },;
:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        });
:src_backup/components/ProductSubmissionForm.tsx
      } catch (err) {;
=======
      } catch (err) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        logErrorToProduction('Error invoking moderation:', { data: err });
      }

:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

:src_backup/components/ProductSubmissionForm.tsx
      // Show success message
      toast({
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),
:src/components/ProductSubmissionForm.tsx
// Redirect to product page
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({

title: 'Publication Failed',

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
        description:
          error instanceof Error ? error.message : 'An unknown error occurred'
=======
      // Redirect to product page;`
      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {}
      toast({}
'
        title: 'Publication Failed',

        description:'
          error instanceof Error ? error.message : 'An unknown error occurred''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        variant: 'destructive'
      })
    } finally {}
      setIsSubmitting(false)
    }
:src_backup/components/ProductSubmissionForm.tsx
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"})
    } finally {}
      setIsSubmitting(false)
    }
  },

:src_backup/components/ProductSubmissionForm.tsx
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>

    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;
      <TabsList className='grid grid-cols-2 mb-6'>;
        <TabsTrigger'
          value='manual''
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger'
          value='ai'

:src_backup/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <TabsContent value="manual">
=======

:src_backup/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
<<<<<<< HEAD
              name='title';

              render={({}
                field;
              }: {}
              control={form.control}
:src_backup/components/ProductSubmissionForm.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              name="title"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {
                const { onChange, onBlur, value, ref } = field,
                return (
:src/components/ProductSubmissionForm.tsx
                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product title"
;
      // Show success message;
      toast({;"
        title: "Product Published!",;"
        description: "Your product has been successfully published on Zion."}),;
      // Redirect to product page;`
      router.push(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {;
      toast({;"
        title: "Publication Failed",;"
        description: error instanceof Error ? error.message : "An unknown error occurred",;"
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return (;"
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
      <TabsList className="grid grid-cols-2 mb-6">;"
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          Manual Creation;
        </TabsTrigger>;"
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;"
          <Sparkles className="h-4 w-4 mr-2" />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;"
      <TabsContent value="manual">;
        <Form {...form}>;"
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
            <FormField;
              control={form.control}"
              name="title";"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {;
                const { onChange, onBlur, value, ref } = field,;
                return (;
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;"
                        placeholder="Enter product title";
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
:src/components/ProductSubmissionForm.tsx

                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                        ref={ref}
=======

                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input                        ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      />;
                    </FormControl>;
                    <FormDescription>;
                      Create a compelling title that describes your product;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                );
              }}
            />;
:src_backup/components/ProductSubmissionForm.tsx
            <FormField;
              control={form.control}"
              name="description""
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea"
                      placeholder="Describe your product in detail...""
                      className="min-h-32""
              name="description";"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
:src_backup/components/ProductSubmissionForm.tsx
                    <Textarea;
                      placeholder="Describe your product in detail...";
<<<<<<< HEAD
                      className="min-h-32";

<<<<<<< HEAD
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
:src/components/ProductSubmissionForm.tsx
/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField;
                control={form.control}
name="price"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (
                  <FormItem>
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>"
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD;
                    </FormDescription>
                    <FormMessage />
                  </FormItem>

:src_backup/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            />;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <FormField;
                control={form.control}"
                name="price";"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (;
:src/components/ProductSubmissionForm.tsx
                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
=======
                      className="min-h-32";                  <FormItem>;
                    <FormLabel > Product Title</FormLabel>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <FormControl>;
:src_backup/components/ProductSubmissionForm.tsx
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />;
                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
                    <FormMessage />;
:src_backup/components/ProductSubmissionForm.tsx
field: ControllerRenderProps<ProductFormValues, 'description'>;
              }) => (                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;

                    <Textarea'
                      placeholder='Describe your product in detail...''
                      className='min-h-32''
                field: ControllerRenderProps < ProductFormValues, 'description'>;
              }) => (                <FormItem>;
                  <FormLabel > Description</FormLabel>;
                  <FormControl>;
                    <Textarea;'
                      placeholder='Describe your product in detail...';'
                      className='min - h-32';
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;'
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;

            />;
'
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;

              <FormField;
                control={form && form.control}'
                name='price'
                </FormItem>)}
            />;'
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>;
              <FormField;
                control={form.control}'
                name='price';
                render={({}
                  field;
                }: {}
'
                  field: ControllerRenderProps<ProductFormValues, 'price'>;
                }) => (                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
                    <FormControl>;

                      <Input'
                        type='number''
                        min='0''
                        step='0 && 0.01''
                        placeholder='0 && 0.00'
                        {...field}
                      />;
                    </FormControl>;
                    <FormDescription>Set your price in USD</FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                )}
:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD

              />;

              <FormField;
                control={form && form.control}'
                name='category''
                  field: ControllerRenderProps < ProductFormValues, 'price'>;
                }) => (                  <FormItem>;
                    <FormLabel > Price (USD)</FormLabel>;
                    <FormControl>;
                      <Input;'
                        type='number';'
                        min='0';'
                        step='0.01';'
                        placeholder='0.00';
                        {...field}
                      />;
                    </FormControl>;
                    <FormDescription > Set your price in USD</FormDescription>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}'
                name='category';
                render={({}
                  field;
                }: {}
'
                  field: ControllerRenderProps<ProductFormValues, 'category'>;
                }) => (                  <FormItem>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  </FormItem>;
                )}
:src/components/ProductSubmissionForm.tsx
              />;
=======

              />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <FormField;
                control={form.control}"
                name="category""
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (
                  <FormItem>

:src/components/ProductSubmissionForm.tsx
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}
                      >"
                        <option value="">Select a category</option>"
                        <option value="digital_product">Digital Product</option>"
                        <option value="service">Service</option>"
                        <option value="ai_tool">AI Tool</option>"
                        <option value="course">Course</option>"
                        <option value="template">Template</option>"
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                name="category";
=======
            <FormField
              control={form && form.control}
              name='tags'                name="category";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
                name="category";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
:src_backup/components/ProductSubmissionForm.tsx
                      <select;
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
                        {...field}
                      >;
                        <option value="">Select a category</option>;
                        <option value="digital_product">Digital Product</option>;
                        <option value="service">Service</option>;
                        <option value="ai_tool">AI Tool</option>;
                        <option value="course">Course</option>;
                        <option value="template">Template</option>;
                        <option value="other">Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;
<FormField;
              control={form.control}
              name="tags"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              name="tags";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (;
                <FormItem>;

            <FormField;
              control={form && form.control}'
              name='tags'
                  </FormItem>)}
              />;
            </div>;
            <FormField;
:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              control={form.control}
"
              name="tags""
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (
                <FormItem>
:src/components/ProductSubmissionForm.tsx

                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input'
                      placeholder='Enter tags separated by commas'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
:src_backup/components/ProductSubmissionForm.tsx

<<<<<<< HEAD
                field: ControllerRenderProps<ProductFormValues, 'tags'>;
              }) => (                <FormItem>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <FormLabel>Tags</FormLabel>;
                  <FormControl>;
                    <Input placeholder="Enter tags separated by commas" {...field} />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e.g., ai, productivity, design);
                field: ControllerRenderProps<ProductFormValues, 'tags'>;
              }) => (                <FormItem>;
                  <FormLabel>Tags</FormLabel>;
                  <FormControl>;
                    <Input'
                      placeholder='Enter tags separated by commas'
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e && e.g., ai,;
                    productivity, design);

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
            <FormField;
              control={form.control}
              name="image"

            <FormField;
              control={form && form.control}'
              name='image'
              render={() => (;
                <FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;
                    <Input'
                      type='file''
                      accept='image/*'
                      onChange={handleImageChange}

                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>

:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
                    <Input
=======

=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                    <Input 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                      type="file" 
=======
                    <Input "
                      type="file" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                      accept="image/*" 
                      onChange={handleImageChange}"
                      className="cursor-pointer"
                    />

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  </FormControl>
                  <FormDescription>
:src_backup/components/ProductSubmissionForm.tsx
                    Upload a high-quality image of your product (recommended size: 1200x800px)
                  </FormDescription>
                  <FormMessage />

:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD

                  {imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>
                        <Image
=======
                        <Image;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                          src={imagePreview}
alt="Product image preview"
                          width={600} // Example width, adjust as needed
                          height={400} // Example height, adjust as needed
                          className="w-full h-full object-cover"
                          priority={false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />
                      </AspectRatio>
</div>
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                          alt="Product image preview"
                          width={600} // Example width, adjust as needed;
                          height={400} // Example height, adjust as needed'
                          className='w-full h-full object-cover'
                          priority={false} // Preview images are not LCP;`
                          // `sizes` might not be strictly necessary for a preview of this nature;
                          // but can be added if responsive behavior is critical here.'
                          // For local object URLs, optimization via loader won't occur.
                        />;
                      </AspectRatio>;
                    </div>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                  )}
=======
                    </div>                  )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                </FormItem>;
              )}

              name='video'              render={() => (;
                <FormItem>;
                  <FormLabel>Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input'
                      type='file''
                      accept='video/mp4'
                      onChange={handleVideoChange}'
                      className='cursor-pointer''
                field: ControllerRenderProps < ProductFormValues, 'tags'>;
              }) => (                <FormItem>;
                  <FormLabel > Tags</FormLabel>;
                  <FormControl>;
                    <Input;'
                      placeholder='Enter tags separated by commas';
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e.g., ai,
                    productivity, design);
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}'
              name='image';
              render={() => (
                <FormItem>;
                  <FormLabel > Product Image</FormLabel>;
                  <FormControl>;
                    <Input;'
                      type='file';'
                      accept='image/*';
                      on_change={handleImageChange}'
                      className='cursor - pointer'                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high - quality image of your product (recommended;
                    size: 1200x800px);
                  </FormDescription>;
                  <FormMessage />;
                  {image_preview && ('
                    <div className='mt - 2 w - full max - w-md border rounded overflow - hidden'>;
                      <AspectRatio ratio={3 / 2}>;
                        <Image;
                          src={image_preview}'
                          alt='Product image preview'                          width={600} // Example width, adjust as needed;
                          height={400} // Example height, adjust as needed;'
                          className='w - full h - full object - cover';
                          priority={false} // Preview images are not LCP;`
                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.;'
                          // For local object URLs, optimization via loader won't occur.;
                        />;
                      </AspectRatio>;
                    </div>)}
                </FormItem>)}
            />;
            <FormField;
              control={form.control}'
              name='video'              render={() => (
                <FormItem>;
                  <FormLabel > Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input;'
                      type='file';'
                      accept='video / mp4';
                      on_change={handleVideoChange}'
                      className='cursor - pointer';
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Optional video demonstrating your product;
                  </FormDescription>;
                  <FormMessage />;

            />;

:src_backup/components/ProductSubmissionForm.tsx
            <FormField
              control={form && form.control}
              name='model'              render={() => (;
                <FormItem>;
                  <FormLabel>3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input'
                      type='file''
                      accept='model/gltf-binary,.glb'
                      onChange={handleModelChange}'
                      className='cursor-pointer'
                </FormItem>)}
            />;
            <FormField;
              control={form.control}'
              name='model'              render={() => (
                <FormItem>;
                  <FormLabel > 3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input;'
                      type='file';'
                      accept='model / gltf - binary, .glb';
                      on_change={handleModelChange}'
                      className='cursor - pointer';
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a 3D model for interactive viewing;
                  </FormDescription>;
                  <FormMessage />;

            />;
'
            <div className='flex justify-end'>;

              <Button'
                type='submit'
:src_backup/components/ProductSubmissionForm.tsx
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
<<<<<<< HEAD
<<<<<<< HEAD
                {isSubmitting ? 'Publishing...' : 'Publish Product'}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            />;
            <FormField;
              control={form.control}"
              name="video"
              render={() => (

=======
                {isSubmitting ? 'Publishing...' : 'Publish Product'}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                <FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>"
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product;
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}

:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            />;
            <FormField;
              control={form.control}"
              name="model"
              render={() => (
                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>"
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing;
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD

      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")

                </FormItem>)}
            />;'
            <div className='flex justify - end'>;
              <Button;'
                type='submit';
                disabled={is_submitting}'
                className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'              >;'
                {is_submitting ? 'Publishing...' : 'Publish Product'}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;'
      <TabsContent value='ai'>;
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}          initial_values={{'
            title: form.get_values ('title'),'
            category: form.get_values ('category'),

          }}
        />;
      </TabsContent>;
    </Tabs>);
  const file = e.target.files?.[0];
// Check condition;
if ( {) {}
  $2;
}
  reader.onloadend = () => {}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;
'
      <TabsContent value='ai'>;
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}          initialValues={{'
            title: form && form.getValues('title'),'
            category: form && form.getValues('category'),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
        />;
      </TabsContent>;
    </Tabs>;
  );

}`) ;
}catch (error) {;
  toast ({;
  ;
origin/cursor/automate-test-improve-and-merge-code-2533
}finally {;
  setIsSubmitting (false) ;

};
:src_backup/components/ProductSubmissionForm.tsx

}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> ;
}";
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
}/> <FormFieldDescribe your product in detail..." className="min-h-32" {
  ...field '
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Inputtype="number" min="0" step="0 && 0.01" placeholder="0 && 0.00" {
  ...field 
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Inputplaceholder="Enter tags separated by commas" {
  ...field 
}/> ";
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Inputtype="file" accept="image/*" onChange= {
  handleImageChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype="file" accept="video/mp4" onChange= {
  handleVideoChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"  );

}

reader.readAsDataURL (file)
  setImagePreview (reader.result as string);
}
reader.readAsDataURL (file);

}
}
const handleModelChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {}
  const file = e.target.files?.[0];
// Check condition;
if ( {) {}
  $2;
}
}
//Apply AI - generated content to the form const handleApplyGenerated = (content: any) =>: any {}
  // Check condition;
if ( {) {}
  $2;
}
  toast ({}
  return;
}setIsSubmitting (true);"
author: {";"
  name: user.display_name || "Anonymous Creator";
id: user.id;
}
created_at: new Date () .toISOString ();

}'
data: product_record, error: product_error ';'
}= await supabase .from ('product listings') .insert ([product_data]) .select ('id') .single ();'
let imagePublicUrl: string | undefined;';'
//If we have an image, upload it .from ('products') .upload (image_path, values.image);
//Get the public window.URL for the image const {'
  data: publicUrlData ';'
}= supabase.storage.from ('products') .getPublicUrl (image_path);
imagePublicUrl = publicUrlData.public_url;
//Update the product with the image window.URL const {'
  error: update_error ';'
}= await supabase .from ('product listings') .from ('products') .upload (video_path, values.video);
const {'
  data: publicUrlData ';'
}= supabase.storage.from ('products') .getPublicUrl (video_path);
const {'
  error: update_error ';'
}= await supabase .from ('product listings') .from ('products') .upload (model_path, values.model);
const {'
  data: publicUrlData ';'
}= supabase.storage.from ('products') .getPublicUrl (model_path);
:src_backup/components/ProductSubmissionForm.tsx
const {

  error: update_error ';
}= await supabase .from ('product listings');
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate - listing', {
  body: {
  //Redirect to product page router.push (`/marketplace / listing/$ {
  product_record.id;
}`);
}catch (error) {}
  toast ({}
}finally {}
  setIsSubmitting (false);

:src_backup/components/ProductSubmissionForm.tsx
      <TabsContent value="ai">
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}
          initialValues={{"
            title: form.getValues("title"),"
            category: form.getValues("category")
          }}
        />;
      </TabsContent>;
    </Tabs>;
  );

:src_backup/components/ProductSubmissionForm.tsx
}

}
}className="w - full"> <TabsList className="grid grid - cols - 2 mb - 6" > <TabsTrigger value="manual" className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple" > ai"className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple"> <Sparkles className="h - 4 w - 4 mr - 2"/> AI - Powered Creation </TabsTrigger> </TabsList>;
}";
}/> <FormField Describe your product in detail..." className="min - h-32" {
  ...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6" > <FormField <FormItem> <FormLabel > Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {
  ...field;
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel > Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {
  ...field;
}/> ";
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" on_change= {
  handleImageChange ";
}className="cursor - pointer" /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>);
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video / mp4" on_change= {
  handleVideoChange ";
}className="cursor - pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>);
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify - end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>);
}'"  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
}/> <FormField Describe your product in detail..." className="min-h-32" {;
  ...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {;
  ...field ;
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {;
  ...field ;
}/> ";
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" onChange= {;
  handleImageChange ";
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video/mp4" onChange= {;
  handleVideoChange ";
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"
:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}"
}className="w - full"> <TabsList className="grid grid - cols - 2 mb - 6" > <TabsTrigger value="manual" className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple" > ai"className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple"> <Sparkles className="h - 4 w - 4 mr - 2"/> AI - Powered Creation </TabsTrigger> </TabsList>;"
}";"
}/> <FormField Describe your product in detail..." className="min - h-32" {'
  ...field ';'"
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";"
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6" > <FormField <FormItem> <FormLabel > Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {}
  ...field;"
}/> ";"
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";"
}/> </div> <FormField <FormItem> <FormLabel > Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {}
  ...field;"
}/> ";"
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" on_change= {"
  handleImageChange ";'"`
}className="cursor - pointer" /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';'
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>);"
}</FormItem>) ";"
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video / mp4" on_change= {"
  handleVideoChange ";"
}className="cursor - pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>);"
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";"
}/> <div className="flex justify - end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>);'"
}'"  );
}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
