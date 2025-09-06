<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
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
=======
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema)
    defaultValues: {
    const file = e.target.files?.[0];    if (file) {
      form.setValue('image', file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];    if (file) {
      form.setValue('video', file)
    }
  }
  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];    if (file) {
      form.setValue('model', file)
    }
  }
  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue('description', content.description)
    form.setValue('tags', content.tags.join(', '))
    // Set a default price as the middle of the suggested range
    const averagePrice = (
      (content.suggestedPrice.min + content.suggestedPrice.max) /
      2
    ).toFixed(2)
    form.setValue('price', averagePrice)
    // Switch to the manual tab to show applied content
    setActiveTab('manual')
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======
      })
      return;
    }
    setIsSubmitting(true)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive"}),
      return
    }

    setIsSubmitting(true),
    
    try {
      // Create the product listing
<<<<<<< HEAD
      const productData = {
=======
try {
      // Create the product listing;
      const product_data = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
        currency: "USD", // Default currency
        tags: values.tags ? values.tags.split().map(tag => tag.trim()) : [],
        author: {
<<<<<<< HEAD
          name: user.displayName || "Anonymous Creator",
          id: user.id},
        createdAt: new Date().toISOString()},
      
=======

=======
        currency: 'USD', // Default currency;'
        tags: values.tags ? values.tags.split (', ').map (tag => tag.trim ()) : [],
        author: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
import React from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",;
=======
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AIListingGenerator } from '@/components/listing/AIListingGenerator';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
import { Sparkles } from 'lucide-react';
// Define the form schema with zod;
<<<<<<< HEAD
const productSchema = z.object({;
  title: z.string().min(3, "Title must be at least 3 characters"),;
  description: z.string().min(10, "Description must be at least 10 characters"),;
=======
const productSchema = z && z.object({;
  title: z && z.string().min(3, 'Title must be at least 3 characters'),,
=======
  FormMessage,;'
} from '@/components/ui/form';'
import { Input } from '@/components/ui/input';'
import { Button } from '@/components/ui/button';'
import { Textarea } from '@/components/ui/textarea';'
import { AspectRatio } from '@/components/ui/aspect-ratio';'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';'
import { AIListingGenerator } from '@/components/listing/AIListingGenerator';'
import { Sparkles } from 'lucide-react';
// Define the form schema with zod;
const productSchema = z && z.object({;'
  title: z && z.string().min(3, 'Title must be at least 3 characters'),;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
  description: z && z.string().min(10, 'Description must be at least 10 characters'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  price: z;
    .string();
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
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
=======
=======
    .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;'
      message: 'Price must be a valid number',;
    }),;'
  category: z && z.string().min(1, 'Please select a category'),;
  image:;'
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  video:;'
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  model:;'
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  tags: z && z.string().optional(),;
});
// Type for our form values;
type ProductFormValues = z && z.infer<typeof productSchema>;

export function ProductSubmissionForm() { return null; }
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React && React.useState(false);
  const [imagePreview, setImagePreview] = React && React.useState(null as string | null);'
  const [activeTab, setActiveTab] = React && React.useState('manual');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
    defaultValues: {;
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      title: "",;
      description: "",;
      price: "",;
      category: "",;
=======
      title: '',;
      description: '',;
      price: '',;
=======
    defaultValues: {;'
      title: '',;'
      description: '',;'
      price: '',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
      category: '',;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
      video: undefined,;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
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
=======
      model: undefined,;'
      tags: '',;
    },;
  });

  // Handle image upload preview;
  const handleImageChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;'
      form && form.setValue('image', file);
      const reader = new FileReader();
      reader && reader.onloadend = () => {;
        setImagePreview(reader && reader.result as string);
      };
      reader && reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;'
      form && form.setValue('video', file);
    }
  };

  const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;'
      form && form.setValue('model', file);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
    }
  },;
  // Apply AI-generated content to the form;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
  const handleApplyGenerated = (content: any) => {;
    form.setValue("description", content.description),;
    form.setValue("tags", content.tags.join(", ")),;
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),;
    form.setValue("price", averagePrice),;
    // Switch to the manual tab to show applied content;
    setActiveTab("manual");
  },;
=======
  const handleApplyGenerated = (content: any) => {;'
    form && form.setValue('description', content && content.description);'
    form && form.setValue('tags', content && content.tags.join(', '));
    // Set a default price as the middle of the suggested range;
    const averagePrice = (;
      (content && content.suggestedPrice.min + content && content.suggestedPrice.max) /;
      2;
    ).toFixed(2);'
    form && form.setValue('price', averagePrice);

    // Switch to the manual tab to show applied content;'
    setActiveTab('manual');
  };

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
  // Handle form submission;
  const onSubmit = async (values: ProductFormValues) => {;
    if (!user) {;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
      toast({;
        title: "Authentication Required",;
        description: "You must be logged in to publish products",;
        variant: "destructive"}),;
=======
      toast({;'
        title: 'Authentication Required',;'
        description: 'You must be logged in to publish products',;'
        variant: 'destructive',;
      });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Create the product listing;
      const productData = {;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
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
=======

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
        .single(),;
=======
        .single();

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
      if (productError) {;
<<<<<<< HEAD
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
        throw new Error(productError && productError.message);
      }

      let imagePublicUrl: string | undefined;

      // If we have an image, upload it;
      if (values && values.image) {;`
        const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;
        const { error: uploadError } = await supabase && supabase.storage;'
          .from('products');
          .upload(imagePath, values && values.image);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        // Get the public URL for the image;
        const { data: publicUrlData } = supabase && supabase.storage;'
          .from('products');
          .getPublicUrl(imagePath);
        imagePublicUrl = publicUrlData && publicUrlData.publicUrl;

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
        // Update the product with the image URL;
        const { error: updateError } = await supabase;'
          .from('product_listings');
          .update({;
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
        });
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      } catch (err) {;
=======
      } catch (err) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        logErrorToProduction('Error invoking moderation:', { data: err });
      }

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
      
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      // Show success message
      toast({
        title: "Product Published!",
=======
      // Show success message;
      toast({"
        title: "Product Published!","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        description: "Your product has been successfully published on Zion."}),
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
      
=======

=======
      


<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
      // Redirect to product page
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({

<<<<<<< HEAD
        title: 'Publication Failed',

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
=======
  }"
        title: "Publication Failed","
        description: error instanceof Error ? error.message : "An unknown error occurred","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
        variant: "destructive"})
    } finally {}
      setIsSubmitting(false)
    }
  },

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
  return (
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;
=======


  return ('
    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
      <TabsList className='grid grid-cols-2 mb-6'>;
        <TabsTrigger'
          value='manual''
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger'
          value='ai'


<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
=======
      "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
      <TabsContent value="manual">
=======

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

        <Form {...form}>'
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>'
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;'
          <Sparkles className='h-4 w-4 mr-2' />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
'
      <TabsContent value='manual'>;
        <Form {...form}>;'
          <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;
            <FormField;
      // Show success message;
      toast ({'
        title: 'Product Published!','
        description: 'Your product has been successfully published on Zion.',
      });
      // Redirect to product page;`
      router.push (`/marketplace / listing/${product_record.id}`);
    } catch (error) {}
      toast ({'
        title: 'Publication Failed',
        description:;'
          error instanceof Error ? error.message : 'An unknown error occurred','
        variant: 'destructive',
      });
    } finally {}
      setIsSubmitting (false);
    }
  }
  return ('
    <Tabs value={active_tab} onValueChange={setActiveTab} className='w - full'>;'
      <TabsList className='grid grid - cols - 2 mb - 6'>;
        <TabsTrigger;'
          value='manual';'
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger;'
          value='ai';'
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;'
          <Sparkles className='h - 4 w - 4 mr - 2' />;
          AI - Powered Creation;
        </TabsTrigger>;
      </TabsList>;'
      <TabsContent value='manual'>;
        <Form {...form}>;'
          <form on_submit={form.handle_submit (on_submit)} className='space - y-6'>;
            <FormField;
              control={form.control}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
              name='title';

              render={({}
                field;
              }: {}
              control={form.control}
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              name="title"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {
=======
"
              name="title""
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                const { onChange, onBlur, value, ref } = field,
                return (
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input
=======



                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>'
                field: ControllerRenderProps<ProductFormValues, 'title'>;
              }) => {;
                const { onChange, onBlur, value, ref } = field;                return (
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                        ref={ref}                      />;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
=======
=======

                        ref={ref}
                      />;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx

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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
=======
'
                field: ControllerRenderProps < ProductFormValues, 'title'>;
              }) => {}
                const { on_change, on_blur, value, ref } = field; return (
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
                    <Textarea;
                      placeholder="Describe your product in detail...";
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
                      className="min-h-32";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                      className="min-h-32";



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
            />
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
                    <Textarea;"
                      placeholder="Describe your product in detail...";"
                      className="min-h-32";


                      {...field}
                    />
                  </FormControl>
                  <FormDescription>'
                    Provide a detailed description of what you're offering;
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField;
                control={form.control}
<<<<<<< HEAD
                name="price"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (
                  <FormItem>
=======

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            />;
=======
            />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <FormField;
                control={form.control}"
                name="price";"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (;
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
=======
                      className="min-h-32";                  <FormItem>;
                    <FormLabel > Product Title</FormLabel>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <FormControl>;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />;
=======
                      <Input;'
                        placeholder='Enter product title';
                        on_change={on_change}
                        on_blur={on_blur}
                        value={value}
                        ref={ref}                      />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
                    <FormMessage />;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
=======

=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx

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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
              />;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

              />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <FormField;
                control={form.control}"
                name="category""
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (
                  <FormItem>

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
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
=======
                      <select'
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                        {...field}>;'
                  field: ControllerRenderProps < ProductFormValues, 'category'>;
                }) => (                  <FormItem>;
                    <FormLabel > Category</FormLabel>;
                    <FormControl>;
                      <select;'
                        className='flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - base ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 md:text - sm';
                        {...field}
                      >;'
                        <option value=''>Select a category</option>;'
                        <option value='digital_product'>Digital Product</option>;'
                        <option value='service'>Service</option>;'
                        <option value='ai_tool'>AI Tool</option>;'
                        <option value='course'>Course</option>;'
                        <option value='template'>Template</option>;'
                        <option value='other'>Other</option>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                      </select>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

            <FormField;
              control={form && form.control}'
              name='tags'
                  </FormItem>)}
              />;
            </div>;
            <FormField;
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
              control={form.control}
"
              name="tags""
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (
                <FormItem>
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx

=======
              control={form.control}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input'
                      placeholder='Enter tags separated by commas'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
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
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <FormField;
              control={form.control}
              name="image"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx


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

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <Input 
=======
              control={form.control}              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}                    <Input 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  </FormControl>
                  <FormDescription>
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
                    Upload a high-quality image of your product (recommended size: 1200x800px)
=======
                    Upload a high-quality image of your product (recommended;
                    size: 1200x800px)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                  </FormDescription>
                  <FormMessage />

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD

                  
                  {imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

                  


                  {imagePreview && ('
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>
                      <AspectRatio ratio={3 / 2}>'
                      className='cursor-pointer'                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high-quality image of your product (recommended;
                    size: 1200x800px);
                  </FormDescription>;
                  <FormMessage />;

                  {imagePreview && (;'
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>;
                      <AspectRatio ratio={3 / 2}>;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
                        <Image
=======
                  {imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>                        <Image
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                        <Image;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                          src={imagePreview}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          alt="Product image preview"
                          width={600} // Example width, adjust as needed
                          height={400} // Example height, adjust as needed
                          className="w-full h-full object-cover"
                          priority={false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature,
=======
                          height={400} // Example height, adjust as needed
                          className='w-full h-full object-cover'
                          // `sizes` might not be strictly necessary for a preview of this nature
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />
                      </AspectRatio>
<<<<<<< HEAD
                    </div>
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======

            />;

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
            <FormField
              control={form && form.control}
=======

            <FormField;
              control={form && form.control}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
            <FormField
              control={form && form.control}
=======

            <FormField;
              control={form && form.control}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
=======
                disabled={isSubmitting}'
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
                {isSubmitting ? 'Publishing...' : 'Publish Product'}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            />;
            <FormField;
              control={form.control}"
              name="video"
              render={() => (
<<<<<<< HEAD
=======


<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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

<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
=======




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======





>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      
      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx

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
<<<<<<< HEAD
=======

  const file = e && e.target.files?.[0];
if (file) {;
  reader && reader.onloadend = () => {;
  setImagePreview (reader && reader.result as string) ;
};
reader && reader.readAsDataURL (file) ;
import Image from 'next/image'; // Import next/image
import { logErrorToProduction } from '@/utils/productionLogger';

import {
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AIListingGenerator } from "@/components/listing/AIListingGenerator";
import { Sparkles } from 'lucide-react'
// Define the form schema with zod
const productSchema = null;
            category: form.getValues("category")
          }}
        />
      </TabsContent>
    </Tabs>
  );

  const file = e.target.files?.[0];
if (file) {;
  reader.onloadend = () => {;
  setImagePreview (reader.result as string) ;
};
reader.readAsDataURL (file) ;
origin/cursor/automate-test-improve-and-merge-code-2533

};

};
const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
  const file = e.target.files?.[0];
if (file) {;
  ;
origin/cursor/automate-test-improve-and-merge-code-2533

};
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {;
  if (!user) {;
  toast ({;
  return;
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
}setIsSubmitting (true);
author: {";
  name: user.displayName || "Anonymous Creator";
id: user.id ;
origin/cursor/automate-test-improve-and-merge-code-2533
};
createdAt: new Date () .toISOString () ;
};
data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (imagePath, values.image);
//Get the public window.URL for the image const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (imagePath);
imagePublicUrl = publicUrlData.publicUrl;
//Update the product with the image window.URL const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values.video);
const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (videoPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values.model);
const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (modelPath);
origin/cursor/automate-test-improve-and-merge-code-2533
const {;
  error: updateError ';
}= await supabase .from ('product listings') ;
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate-listing', {;
  body: {;
  //Redirect to product page router.push (`/marketplace/listing/$ {;
  productRecord.id ;
=======
}setIsSubmitting (true);"
author: {";"
  name: user && user.displayName || "Anonymous Creator";
id: user && user.id ;
};
createdAt: new Date () .toISOString () ;
};'
data: productRecord, error: productError ';'
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();'
let imagePublicUrl: string | undefined;';'
//If we have an image, upload it .from ('products') .upload (imagePath, values && values.image);
//Get the public window && window.URL for the image const {;'
  data: publicUrlData ';'
}= supabase && supabase.storage.from ('products') .getPublicUrl (imagePath);
imagePublicUrl = publicUrlData && publicUrlData.publicUrl;
//Update the product with the image window && window.URL const {;'
  error: updateError ';'
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values && values.video);
const {;'
  data: publicUrlData ';'
}= supabase && supabase.storage.from ('products') .getPublicUrl (videoPath);
const {;'
  error: updateError ';'
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values && values.model);
const {;'
  data: publicUrlData ';'
}= supabase && supabase.storage.from ('products') .getPublicUrl (modelPath);
const {;'
  error: updateError ';'
}= await supabase .from ('product listings') ;'
}//Send listing to moderation service try {';'
  await supabase && supabase.functions.invoke ('moderate-listing', {;
  body: {;`
  //Redirect to product page router && router.push (`/marketplace/listing/$ {;
  productRecord && productRecord.id ;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
}`) ;
}catch (error) {;
  toast ({;
  ;
origin/cursor/automate-test-improve-and-merge-code-2533
}finally {;
  setIsSubmitting (false) ;

};
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx

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
=======
"
}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> ;"
}";"
}/> <FormFieldDescribe your product in detail..." className="min-h-32" {'
  ...field ''"
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";"
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Inputtype="number" min="0" step="0 && 0.01" placeholder="0 && 0.00" {}
  ...field "
}/> ";"
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";"
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Inputplaceholder="Enter tags separated by commas" {}
  ...field "
}/> ";"
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Inputtype="file" accept="image/*" onChange= {"
  handleImageChange "'"`
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';'
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;"
}</FormItem>) ";"
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype="file" accept="video/mp4" onChange= {"
  handleVideoChange ""
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;"
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";"
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
const {


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  error: update_error ';
}= await supabase .from ('product listings');
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate - listing', {
  body: {
  //Redirect to product page router.push (`/marketplace / listing/$ {
  product_record.id;
=======
const {}
'
  error: update_error ';'
}= await supabase .from ('product listings');'
}//Send listing to moderation service try {';'
  await supabase.functions.invoke ('moderate - listing', {}
  body: {}`
  //Redirect to product page router.push (`/marketplace / listing/$ {}
  product_record.id;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
}`);
}catch (error) {}
  toast ({}
}finally {}
  setIsSubmitting (false);

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
=======

      "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ProductSubmissionForm.tsx
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

<<<<<<< HEAD:src_backup/components/ProductSubmissionForm.tsx
}

<<<<<<< HEAD
}
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
<<<<<<< HEAD
=======
                {isSubmitting ? 'Publishing...' : 'Publish Product'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src/components/ProductSubmissionForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ProductSubmissionForm.tsx
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
