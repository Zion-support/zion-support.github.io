<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
try {
      // Create the product listing;
      const product_data = {

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

import React from 'react',
import { useForm, ControllerRenderProps } from 'react-hook-form',
import { zodResolver } from '@hookform/resolvers/zod',
import z from 'zod',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { useToast } from '@/hooks/use-toast',
import { useRouter } from 'next/router',
import Image from 'next/image', // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger',

      tags: ''}),
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue('image', file),
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
      form.setValue('video', file)
    }
  },

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue('model', file)
    }
  },

  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue('description', content.description),
    form.setValue('tags', content.tags.join(', ')),
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),
    form.setValue('price', averagePrice),
    
    // Switch to the manual tab to show applied content
    setActiveTab('manual')
  },

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({

        title: 'Authentication Required',
        description: 'You must be logged in to publish products',
        variant: 'destructive'}),
      return
    }

    setIsSubmitting(true),
    
    try {
      // Create the product listing

        title: values.title,

        description: values.description,
        price: parseFloat(values.price),
        category: values.category,

      let imagePublicUrl: string | undefined;
<<<<<<< HEAD


=======
<<<<<<< HEAD

;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import { Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
  FormMessage;
 } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { Textarea  } from '@/components/ui/textarea';
import { AspectRatio  } from '@/components/ui/aspect-ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { AIListingGenerator  } from '@/components/listing/AIListingGenerator';
import { Sparkles  } from 'lucide-react';
// Define the form schema with zod;
const productSchema = z.object({title: z.string().min(3, 'Title must be at least 3 characters')description: z.string().min(10, 'Description must be at least 10 characters')price: z;
    .string().refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {message: 'Price must be a valid number';
    })category: z.string().min(1, 'Please select a category')image:;
    typeof window === 'undefined';
      ? z.any().optional(): z.instanceof(File).optional()video:;
    typeof window === 'undefined';
      ? z.any().optional(): z.instanceof(File).optional()model:;
    typeof window === 'undefined';
      ? z.any().optional(): z.instanceof(File).optional()tags: z.string().optional()})// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>;
export function ProductSubmissionForm() {const { user } = useAuth()const { toast } = useToast()const router = useRouter()const [isSubmitting, setIsSubmitting] = React.useState(false)const [imagePreview, setImagePreview] = React.useState(null as string | null)const [activeTab, setActiveTab] = React.useState('manual')import React from 'react',import { useForm, ControllerRenderProps } from 'react-hook-form',import { zodResolver } from '@hookform/resolvers/zod',import z from 'zod',import { supabase } from '@/integrations/supabase/client',import { useAuth } from '@/hooks/useAuth',import { useToast } from '@/hooks/use-toast',import { useRouter } from 'next/router',import Image from 'next/image', // Import next/image;
import {logErrorToProduction} from '@/utils/productionLogger',// Initialize the form;
  const form = useForm<ProductFormValues>({resolver: zodResolver(productSchema)defaultValues: {const file = e.target.files?.[0];    if (file) {form.setValue('image', file)const reader = new FileReader()reader.onloadend = () => {setImagePreview(reader.result as string)}
      reader.readAsDataURL(file)}
  }
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0];    if (file) {form.setValue('video', file)}
  }
  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0];    if (file) {form.setValue('model', file)}
  }
  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {form.setValue('description', content.description)form.setValue('tags', content.tags.join(', '))// Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) /;
      2;
    ).toFixed(2)form.setValue('price', averagePrice)// Switch to the manual tab to show applied content;
    setActiveTab('manual')}
      tags: ''}),// Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0],if (file) {form.setValue('image', file),const reader = new FileReader(),reader.onloadend = () => {setImagePreview(reader.result as string)},reader.readAsDataURL(file)}
  },const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0],if (file) {form.setValue('video', file)}
  },const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0],if (file) {form.setValue('model', file)}
  },// Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {form.setValue('description', content.description),form.setValue('tags', content.tags.join(', ')),// Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),form.setValue('price', averagePrice),// Switch to the manual tab to show applied content;
    setActiveTab('manual')},// Handle form submission;
  const onSubmit = async (values: ProductFormValues) => {if (!user) {toast({})return;
    }
    setIsSubmitting(true)title: 'Authentication Required',description: 'You must be logged in to publish products',variant: 'destructive'}),return;
    }setIsSubmitting(true),try {// Create the product listing;
      const productData = {try {// Create the product listing;
<<<<<<< HEAD
      const product_data = {title: values.title,description: values.description,price: parse_float (values.price),category: values.category,currency: 'USD', // Default currency;
        tags: values.tags ? values.tags.split (', ').map (tag => tag.trim ()) : [],author: {let imagePublicUrl: string | undefined;
=======
      const product_data = {title: values.title,description: values.description,price: parse_float (values.price),category: values.category,currency: 'USD, // Default currency;
        tags: values.tags ? values.tags.split (, ').map (tag => tag.trim ()) : [],author: {let imagePublicUrl: string | undefined;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';
=======
import React from react;
=======
=======
=======
<<<<<<< HEAD

import React from react;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
<<<<<<< HEAD


=======
<<<<<<< HEAD
import Image from 'next/image'; // Import next/image;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import Image from next/image; // Import next/image;
>>>>>>> origin/resolved-merge-conflicts
import { logErrorToProduction } from '@/utils/productionLogger';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      const { data: productRecord, error: productError } = await supabase

        .from('product_listings')
        .insert([productData])'
        .select('id')

        .single(),

      if (productError) {}
        throw new Error(productError.message)
<<<<<<< HEAD
import React from 'react',;'
import { useForm, ControllerRenderProps } from 'react-hook-form',;'
import { zodResolver } from '@hookform/resolvers/zod',;'
import z from 'zod',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
import { useToast } from '@/hooks/use-toast',;'
import { useRouter } from 'next/router',;'
=======
import React from "react",;"
import { useForm, ControllerRenderProps } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import z from "zod",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { useToast } from "@/hooks/use-toast",;"
import { useRouter } from "next/router",;'
>>>>>>> origin/resolved-merge-conflicts
import Image from 'next/image', // Import next/image;'
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;

<<<<<<< HEAD


=======
<<<<<<< HEAD
import { Sparkles } from 'lucide-react';
      // Send listing to moderation service;try {await supabase.functions.invoke ('moderate - listing', {body: {listing_id: product_record.id,listing_type: 'product',description: values.description,images: imagePublicUrl ? [imagePublicUrl] : [],seller_id: user.id})} catch (err) {logErrorToProduction ('Error invoking moderation:', { data: err })}import React from 'react';
import { useForm, ControllerRenderProps  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import z from 'zod';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { useToast  } from '@/hooks/use-toast';
import { useRouter  } from 'next/router';
import Image from 'next/image'; // Import next/image;
import { logErrorToProduction  } from '@/utils/productionLogger';
          name: user.displayName || 'Anonymous Creator',id: user.id},createdAt: new Date().toISOString()},const { data: productRecord, error: productError } = await supabase;
        .from('product_listings').insert([productData]).select('id').single(),if (productError) {throw new Error(productError.message)import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Sparkles } from 'lucide-react';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Sparkles } from 'lucide-react;
      // Send listing to moderation service;try {await supabase.functions.invoke (moderate - listing', {body: {listing_id: product_record.id,listing_type: 'product,description: values.description,images: imagePublicUrl ? [imagePublicUrl] : [],seller_id: user.id}})} catch (err) {logErrorToProduction (Error invoking moderation:', { data: err })}import React from 'react;
import { useForm, ControllerRenderProps  } from react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod;
import z from zod';
import { supabase  } from '@/integrations/supabase/client;
import { useAuth  } from @/hooks/useAuth';
import { useToast  } from '@/hooks/use-toast;
import { useRouter  } from next/router';
import Image from 'next/image; // Import next/image;
import { logErrorToProduction  } from @/utils/productionLogger';
          name: user.displayName || "Anonymous Creator",id: user.id},createdAt: new Date().toISOString()},const { data: productRecord, error: productError } = await supabase;
        .from('product_listings).insert([productData]).select(id').single(),if (productError) {throw new Error(productError.message)import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form;
=======
import { Sparkles } from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Define the form schema with zod;

  description: z && z.string().min(10, 'Description must be at least 10 characters'),;

  price: z;
    .string();

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;

      category: '',;

      video: undefined,;

    }
  },;
  // Apply AI-generated content to the form;

  // Handle form submission;
  const onSubmit = async (values: ProductFormValues) => {;
    if (!user) {;

      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Create the product listing;
      const productData = {;

      const { data: productRecord, error: productError } = await supabase;

        .from('product_listings');
        .insert([productData]);'
        .select('id');

      if (productError) {;

        // Update the product with the image URL;
        const { error: updateError } = await supabase;'
          .from('product_listings');
          .update({;

            images: [imagePublicUrl],;
          });'
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      ? z && z.any().optional(): z && z.instanceof(File).optional(),tags: z && z.string().optional()})// Type for our form values;
type ProductFormValues = z && z.infer<typeof productSchema>;export function ProductSubmissionForm() {const { user } = useAuth()const { toast } = useToast()const router = useRouter()const [isSubmitting, setIsSubmitting] = React && React.useState(false)const [imagePreview, setImagePreview] = React && React.useState(null as string | null)const [activeTab, setActiveTab]  = React && React.useState('manual')// Initialize the form;
  const form = useForm<ProductFormValues>({resolver: zodResolver(productSchema),defaultValues: {title: '',description: '',price: '',category: '',video: undefined,model: undefined,tags: ''})// Handle image upload preview;
  const handleImageChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {const file = e && e.target.files?.[0];    if (file) {form && form.setValue('image', file)const reader = new FileReader()reader && reader.onloadend = () => {setImagePreview(reader && reader.result as string)}reader && reader.readAsDataURL(file)}
  }const handleVideoChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {const file = e && e.target.files?.[0];    if (file) {form && form.setValue('video', file)}
  }const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {const file = e && e.target.files?.[0];    if (file) {form && form.setValue('model', file)}
  }// Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {form && form.setValue('description', content && content.description)form && form.setValue('tags', content && content.tags.join(', '))// Set a default price as the middle of the suggested range;
    const averagePrice = ((content && content.suggestedPrice.min + content && content.suggestedPrice.max) /;
      2;
    ).toFixed(2)form && form.setValue('price', averagePrice)// Switch to the manual tab to show applied content;
    setActiveTab('manual')}// Handle form submission;
  const onSubmit = async (values: ProductFormValues,) => {if (!user) {toast({title: 'Authentication Required',description: 'You must be logged in to publish products',variant: 'destructive'})return;
    }setIsSubmitting(true)try {// Create the product listing;
      const productData = {title: values && values.title,description: values && values.description,price: parseFloat(values && values.price),category: values && values.category,currency: 'USD', // Default currency;
        tags: values && values.tags ? values && values.tags.split(',').map(tag => tag && tag.trim()) : [],author: {name: user && user.displayName || 'Anonymous Creator',id: user && user.id},createdAt: new Date().toISOString()}const { data: productRecord, error: productError } = await supabase;
        .from('product_listings').insert([productData]).select('id').single()if (productError) {throw new Error(productError && productError.message)}let imagePublicUrl: string | undefined;// If we have an image, upload it;
      if (values && values.image) {const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products').upload(imagePath, values && values.image)if (uploadError) {throw new Error(uploadError && uploadError.message)}// Get the public URL for the image;
        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(imagePath);
        imagePublicUrl = publicUrlData && publicUrlData.publicUrl;


        // Update the product with the image URL;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({;
            images: [imagePublicUrl],;
          });
<<<<<<< HEAD
=======
            images: [imagePublicUrl]});
>>>>>>> origin/resolved-merge-conflicts
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Upload video if provided;
      if (values && values.video) {;
        const videoPath = `product_videos/${productRecord && productRecord.id}/${values && values.video.name}`;
          .from('products').getPublicUrl(imagePath)imagePublicUrl = publicUrlData && publicUrlData.publicUrl;// Update the product with the image URL;
        const { error: updateError } = await supabase;
          .from('product_listings').update({images: [imagePublicUrl]}).eq('id', productRecord && productRecord.id)if (updateError) {throw new Error(updateError && updateError.message)}
      }// Upload video if provided;
      if (values && values.video) {const videoPath = `product_videos/${productRecord && productRecord.id}/${values && values.video.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products').upload(videoPath, values && values.video)if (uploadError) {throw new Error(uploadError && uploadError.message)}const { data: publicUrlData } = supabase && supabase.storage;
          .from('products').getPublicUrl(videoPath)const { error: updateError } = await supabase;
          .from('product_listings').update({ video_url: publicUrlData && publicUrlData.publicUrl }).eq('id', productRecord && productRecord.id)if (updateError) {throw new Error(updateError && updateError.message)}
      }// Upload model if provided;
      if (values && values.model) {const modelPath = `product_models/${productRecord && productRecord.id}/${values && values.model.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(modelPath, values && values.model);
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

        });

      } catch (err) {;

        logErrorToProduction('Error invoking moderation:', { data: err });
      }

      // Show success message
      toast({
        title: 'Product Published!',

        description: 'Your product has been successfully published on Zion.'}),

      // Redirect to product page

      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

        title: 'Publication Failed',


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        description:
          error instanceof Error ? error.message : 'An unknown error occurred'

        variant: 'destructive'
      })
    } finally {}
      setIsSubmitting(false)
    }

        variant: 'destructive'})
    } finally {}
      setIsSubmitting(false)
    }
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          .from('products').upload(modelPath, values && values.model)if (uploadError) {throw new Error(uploadError && uploadError.message)}const { data: publicUrlData } = supabase && supabase.storage;
          .from('products').getPublicUrl(modelPath)const { error: updateError } = await supabase;
          .from('product_listings').update({ model_url: publicUrlData && publicUrlData.publicUrl }).eq('id', productRecord && productRecord.id)if (updateError) {throw new Error(updateError && updateError.message)}
      }// Send listing to moderation service;
      try {await supabase && supabase.functions.invoke('moderate-listing', {body: {listingId: productRecord && productRecord.id,listingType: 'product',description: values && values.description,images: imagePublicUrl ? [imagePublicUrl] : [],sellerId: user && user.id})} catch (err) {logErrorToProduction('Error invoking moderation:', { data: err })}// Show success message;
      toast({title: 'Product Published!',description: 'Your product has been successfully published on Zion.'}),// Redirect to product page;
      router.push(`/marketplace/listing/${productRecord.id}`)} catch (error) {toast({title: 'Publication Failed',description:;
          error instanceof Error ? error.message : 'An unknown error occurred';
        variant: 'destructive';
      })} finally {setIsSubmitting(false)}
  }
        title: 'Publication Failed',description: error instanceof Error ? error.message : 'An unknown error occurred',variant: 'destructive'})} finally {setIsSubmitting(false)}
  },return (<Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;
      <TabsList className='grid grid-cols-2 mb-6'>;
        <TabsTrigger value='manual' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value='ai' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          <Sparkles className='h-4 w-4 mr-2' />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>;
            <FormField;
              control={form.control}<Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;
      <TabsList className='grid grid-cols-2 mb-6'>;
        <TabsTrigger;
          value='manual';
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger;
          value='ai';
      <TabsContent value='manual'>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>;
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          <Sparkles className='h-4 w-4 mr-2' />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;<TabsContent value='manual'>;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;
            <FormField;
      // Show success message;
      toast ({title: 'Product Published!',description: 'Your product has been successfully published on Zion.'})// Redirect to product page;
      router.push (`/marketplace / listing/${product_record.id}`)} catch (error) {toast ({title: 'Publication Failed',description:;
          error instanceof Error ? error.message : 'An unknown error occurred',variant: 'destructive'})} finally {setIsSubmitting (false)}
  }
  return (<Tabs value={active_tab} onValueChange={setActiveTab} className='w - full'>;
      <TabsList className='grid grid - cols - 2 mb - 6'>;
        <TabsTrigger;
          value='manual';
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger;
          value='ai';
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          <Sparkles className='h - 4 w - 4 mr - 2' />;
          AI - Powered Creation;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value='manual'>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)} className='space - y-6'>;
            <FormField;
              control={form.control}
              name='title';
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
              control={form.control}

              name='title'
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'title'> }) => {
                const { onChange, onBlur, value, ref } = field,
                return (

<<<<<<< HEAD
    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
      <TabsList className='grid grid-cols-2 mb-6'>
        <TabsTrigger value='manual' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className=grid grid-cols-2 mb-6>
        <TabsTrigger value="manual" className=data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple>
>>>>>>> origin/resolved-merge-conflicts
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value='ai' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>
          <Sparkles className='h-4 w-4 mr-2' />
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

      <TabsContent value='manual'>

                        placeholder='Enter product title'
;
      // Show success message;
      toast({;'
        title: 'Product Published!','
        description: 'Your product has been successfully published on Zion.'}),;
      // Redirect to product page;`
      router.push(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {;
      toast({;'
        title: 'Publication Failed','
        description: error instanceof Error ? error.message : 'An unknown error occurred',;'
        variant: 'destructive'});
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return (;'
    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;'
      <TabsList className='grid grid-cols-2 mb-6'>;'
        <TabsTrigger value='manual' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          Manual Creation;
        </TabsTrigger>;'
        <TabsTrigger value='ai' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;'
          <Sparkles className='h-4 w-4 mr-2' />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;'
      <TabsContent value='manual'>;
        <Form {...form}>;'
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>;
            <FormField;
              control={form.control}'
              name='title';'
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'title'> }) => {;
                const { onChange, onBlur, value, ref } = field,;
                return (;
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;'
                        placeholder='Enter product title';
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}

                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
<<<<<<< HEAD


=======
<<<<<<< HEAD
              name='title';render={({field;
              }: {control={form.control}name='title';
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'title'> }) => {const { onChange, onBlur, value, ref } = field,return (<FormItem>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              name=title';render={({field;
              }: {control={form.control}name=title";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title> }) => {const { onChange, onBlur, value, ref } = field,return (<FormItem>;
>>>>>>> origin/resolved-merge-conflicts
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                field: ControllerRenderProps<ProductFormValues, 'title'>;
              }) => {const { onChange, onBlur, value, ref } = field;                return (<FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                        ref={ref}                      />;placeholder='Enter product title';// Show success message;
      toast({title: 'Product Published!',description: 'Your product has been successfully published on Zion.'}),// Redirect to product page;
      router.push(`/marketplace/listing/${productRecord.id}`)} catch (error) {toast({title: 'Publication Failed',description: error instanceof Error ? error.message : 'An unknown error occurred',variant: 'destructive'})} finally {setIsSubmitting(false)}
  },return (<Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;
      <TabsList className='grid grid-cols-2 mb-6'>;
        <TabsTrigger value='manual' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value='ai' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          <Sparkles className='h-4 w-4 mr-2' />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value='manual'>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>;
            <FormField;
              control={form.control}
              name='title';
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'title'> }) => {const { onChange, onBlur, value, ref } = field,return (<FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                        placeholder='Enter product title';
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}

                      <Input
                        ref={ref}
                      />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        ref={ref}

                      />;
                    </FormControl>;
                    <FormDescription>;
                      Create a compelling title that describes your product;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                );
              }
            />;

            <FormField;
              control={form.control}'
              name='description''
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'description'> }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea'
                      placeholder='Describe your product in detail...''
                      className='min-h-32''
              name='description';'
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'description'> }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;

                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}

            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FormField;
                control={form.control}

                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>'
                      <Input type='number' min='0' step='0.01' placeholder='0.00' {...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD;
                    </FormDescription>
                    <FormMessage />
                  </FormItem>

<<<<<<< HEAD


=======
<<<<<<< HEAD
              name='description';
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'description'> }) => (<FormItem>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              name="description";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues description> }) => (<FormItem>;
>>>>>>> origin/resolved-merge-conflicts
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder='Describe your product in detail...';
                      className='min-h-32';{...field}
                    />;
                  </FormControl>;
                  <FormDescription>Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}/>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
              <FormField;
                control={form.control}<FormLabel>Price (USD)</FormLabel>;
                    <FormControl>;
                      <Input type='number' min='0' step='0.01' placeholder='0.00' {...field} />;
                    </FormControl>;
                    <FormDescription>Set your price in USD;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
            />;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
              <FormField;
                control={form.control}
<<<<<<< HEAD
                name='price';
                render={({ field }: { field: ControllerRenderProps<ProductFormValues 'price'> }) => (;
=======
                name="price";
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (;
                render={({ field }: { field: ControllerRenderProps<ProductFormValues price> }) => (;
>>>>>>> origin/resolved-merge-conflicts

                  <FormItem>;
                render={({ field }: { field: ControllerRenderProps<ProductFormValues 'price'> }) => (<FormItem>;
                    <FormLabel > Product Title</FormLabel>;
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
=======
            <div className=grid grid-cols-1 md:grid-cols-2 gap-6>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <FormField;
                control={form.control}'
                name='price';'
                render={({ field }: { field: ControllerRenderProps<ProductFormValues 'price'> }) => (;

                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;

                    <FormControl>;

                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                    <FormMessage />;field: ControllerRenderProps<ProductFormValues, 'description'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <FormMessage />;

                field: ControllerRenderProps<ProductFormValues, 'description'>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <FormMessage />;field: ControllerRenderProps<ProductFormValues, 'description>;
=======
                    <FormMessage />;

                field: ControllerRenderProps<ProductFormValues, 'description'>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                )}/>;<FormField;
                control={form && form.control}
<<<<<<< HEAD
                name='category';
=======
                name=category';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

                  </FormItem>;
                )}

              />;

              <FormField;
                control={form.control}'
                name='category''
                render={({ field }: { field: ControllerRenderProps<ProductFormValues 'category'> }) => (
                  <FormItem>

                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select'
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                        {...field}
                      >'
                        <option value=''>Select a category</option>'
                        <option value='digital_product'>Digital Product</option>'
                        <option value='service'>Service</option>'
                        <option value='ai_tool'>AI Tool</option>'
                        <option value='course'>Course</option>'
                        <option value='template'>Template</option>'
                        <option value='other'>Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                render={({field;
                }: {field: ControllerRenderProps<ProductFormValues, 'category'>;
                }) => (                  <FormItem></FormItem>;
                )}/>;
              <FormField;
                control={form.control}
            <FormField
              control={form && form.control}
              name='tags'
                name='category';
                render={({ field }: { field: ControllerRenderProps<ProductFormValues 'category'> }) => (<FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';
                        {...field}
                      >;
                        <option value=''>Select a category</option>;
                        <option value='digital_product'>Digital Product</option>;
                        <option value='service'>Service</option>;
                        <option value='ai_tool'>AI Tool</option>;
                        <option value='course'>Course</option>;
                        <option value='template'>Template</option>;
                        <option value='other'>Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
            <FormField;
              control={form && form.control}
              name='tags';
                name='category';
                render={({ field }: { field: ControllerRenderProps<ProductFormValues 'category'> }) => (<FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';
                        {...field}>;
                  field: ControllerRenderProps < ProductFormValues, 'category'>;
                }) => (                  <FormItem>;
                    <FormLabel > Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className='flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - base ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 md:text - sm';
                        {...field}
                      >;
                        <option value=''>Select a category</option>;
                        <option value='digital_product'>Digital Product</option>;
                        <option value='service'>Service</option>;
                        <option value='ai_tool'>AI Tool</option>;
                        <option value='course'>Course</option>;
                        <option value='template'>Template</option>;
                        <option value='other'>Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;/>;
            </div>;<FormField;
              control={form && form.control}
<<<<<<< HEAD
              name='tags';
=======
              name=tags';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                name='category';

                render={({ field }: { field: ControllerRenderProps<ProductFormValues 'category'> }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;

                      </select>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;

            <FormField;
              control={form && form.control}'
              name='tags'
                  </FormItem>)}
              />;
            </div>;
            <FormField;

<<<<<<< HEAD

              name='tags'

              control={form.control}
'
              name='tags''
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'tags'> }) => (
                <FormItem>
=======
              control={form.control}


              name=tags""
              render={({ field }: { field: ControllerRenderProps<ProductFormValues tags> }) => (
                <FormItem>
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input'
                      placeholder='Enter tags separated by commas'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
<<<<<<< HEAD


=======
<<<<<<< HEAD
              control={form.control}name='tags';
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'tags'> }) => (<FormItem>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              control={form.control}name="tags";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues tags> }) => (<FormItem>;
>>>>>>> origin/resolved-merge-conflicts
                  <FormLabel>Tags</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder='Enter tags separated by commas';
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
              name='tags';
              render={({ field }: { field: ControllerRenderProps<ProductFormValues 'tags'> }) => (<FormItem>;
=======
              name="tags";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues tags> }) => (<FormItem>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
                    Add relevant tags to help users find your product (e.g., ai, productivity, design);
<<<<<<< HEAD
                    Add relevant tags to help users find your product (e && e.g., ai,;
=======
                    Add relevant tags to help users find your product (e && e.g., ai,
=======
=======
=======
<<<<<<< HEAD
                    Add relevant tags to help users find your product (e.g., ai, productivity, design);
                    Add relevant tags to help users find your product (e && e.g., ai,
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    Add relevant tags to help users find your product (e && e.g., ai,;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    productivity, design);

                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <FormDescription>Add relevant tags to help users find your product (e && e.g., ai,productivity, design)</FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;<FormField;
              control={form && form.control}
              name='image';
              render={() => (<FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='image/*';
                      onChange={handleImageChange}Add relevant tags to help users find your product (e.g., ai, productivity, design)</FormDescription>;
                  <FormMessage />;
                </FormItem>;
              render={() => (<FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='image/*';
                      onChange={handleImageChange}<Input;
<<<<<<< HEAD
                      type='file';
                      accept='image/*';
=======
                      type="file";
                      accept=image/*;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <Input
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <Input 

                    <Input 

                      type='file' 

                      accept='image/*' 
                      onChange={handleImageChange}'
                      className='cursor-pointer'
                    />

                  </FormControl>
                  <FormDescription>

                  </FormDescription>
                  <FormMessage />

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {imagePreview && (
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>
                      <AspectRatio ratio={3/2}>
                        <Image
                          src={imagePreview}


<<<<<<< HEAD
                          alt='Product image preview'
=======
                          alt="Product image preview"
                          alt="Product image preview
>>>>>>> origin/resolved-merge-conflicts
                          width={600} // Example width, adjust as needed


                          height={400} // Example height, adjust as needed
                          className='w-full h-full object-cover'
                          priority={false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />;
                      </AspectRatio>;
                    </div>;

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          src={imagePreview}

                          alt='Product image preview'
                          width={600} // Example width, adjust as needed
                          height={400} // Example height, adjust as needed
                          className='w-full h-full object-cover'
                          priority={false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature,

                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />
                      </AspectRatio>
<<<<<<< HEAD


=======
<<<<<<< HEAD
                      className='cursor-pointer';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      className=cursor-pointer";
>>>>>>> origin/resolved-merge-conflicts
                    />;
                  </FormControl>;
                  <FormDescription>Upload a high-quality image of your product (recommended;
                    size: 1200x800px)</FormDescription>;
                  <FormMessage />;
                  {imagePreview && (<div className='mt-2 w-full max-w-md border rounded overflow-hidden'>;
                      <AspectRatio ratio={3/2}>;
                  {imagePreview && (<div className='mt-2 w-full max-w-md border rounded overflow-hidden'>;
                      <AspectRatio ratio={3 / 2}>;
                      className='cursor-pointer'                    />;
                  </FormControl>;
                  <FormDescription>Upload a high-quality image of your product (recommended;
                    size: 1200x800px)</FormDescription>;
                  <FormMessage />;{imagePreview && (<div className='mt-2 w-full max-w-md border rounded overflow-hidden'>;
                      <AspectRatio ratio={3 / 2}>;<Image;
                          src={imagePreview}height={400} // Example height, adjust as needed;
                          className='w-full h-full object-cover';
                          // `sizes` might not be strictly necessary for a preview of this nature;
                          // but can be added if responsive behavior is critical here.;
                          // For local object URLs, optimization via loader won't occur.;
                        />;
                      </AspectRatio>;
                    </div>;
                          alt='Product image preview';
                          width={600} // Example width, adjust as needed;
                          height={400} // Example height, adjust as needed;
                          className='w-full h-full object-cover';
                          priority={false} // Preview images are not LCP;
                          // `sizes` might not be strictly necessary for a preview of this nature;
                          // but can be added if responsive behavior is critical here.;
                          // For local object URLs, optimization via loader won't occur.;
                        />;
                      </AspectRatio>;
                    </div>;)}
                </FormItem>;
              )}/>;<FormField;
              control={form && form.control}
              name='video'              render={() => (<FormItem>;
                  <FormLabel>Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='video/mp4';
                      onChange={handleVideoChange}
<<<<<<< HEAD
                      className='cursor-pointer';
=======
                      className=cursor-pointer';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          alt='Product image preview'
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

                  )}

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

                {isSubmitting ? 'Publishing...' : 'Publish Product'}

            />;
            <FormField;
              control={form.control}'
              name='video'
              render={() => (

                <FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>'
                    <Input type='file' accept='video/mp4' onChange={handleVideoChange} className='cursor-pointer' />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product;
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}

            />;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                {isSubmitting ? 'Publishing...' : 'Publish Product'}/>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
                {isSubmitting ? Publishing...' : 'Publish Product}/>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
                {isSubmitting ? Publishing...' : 'Publish Product}/>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <FormField;
              control={form.control}'
              name='model'
              render={() => (
                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>'
                    <Input type='file' accept='model/gltf-binary,.glb' onChange={handleModelChange} className='cursor-pointer' />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing;
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

<<<<<<< HEAD


=======
<<<<<<< HEAD
            <div className='flex justify-end'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className=flex justify-end">
>>>>>>> origin/resolved-merge-conflicts
              <Button 
                type='submit' 
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'
              >
<<<<<<< HEAD
                {isSubmitting ? 'Publishing...' : 'Publish Product'}
=======
                {isSubmitting ? "Publishing... : Publish Product"}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            />;
            <div className='flex justify-end'>;
              <Button;
                type='submit';
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white';
              >;
                {isSubmitting ? 'Publishing...' : 'Publish Product'}</Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}          initialValues={title: form.getValues('title')category: form.getValues('category')</FormItem>)}
            />;
            <div className='flex justify - end'>;
              <Button;
                type='submit';
                disabled={is_submitting}
                className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'              >;
                {is_submitting ? 'Publishing...' : 'Publish Product'}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;
      <TabsContent value='ai'>;
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}          initial_values={title: form.get_values ('title'),category: form.get_values ('category')}
        />;
      </TabsContent>;
    </Tabs>)const file = e.target.files?.[0];
// Check condition;
if ( {) {$2;
}
  reader.onloadend = () => {</Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;<TabsContent value='ai'>;
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}          initialValues={title: form && form.getValues('title'),category: form && form.getValues('category')}
        />;
      </TabsContent>;
    </Tabs>;
  );

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
  )const file = e && e.target.files?.[0];
if (file) {reader && reader.onloadend = () => {setImagePreview (reader && reader.result as string)}reader && reader.readAsDataURL (file)import {Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from '@/components/ui/form',import { Input } from '@/components/ui/input',import { Button } from '@/components/ui/button',import { Textarea } from '@/components/ui/textarea',import { AspectRatio } from '@/components/ui/aspect-ratio',// Define the form schema with zod;
const productSchema = null;
<<<<<<< HEAD
            category: form.getValues('category')
          }
=======
            category: form.getValues("category")
            category: form.getValues("category)
          }}
>>>>>>> origin/resolved-merge-conflicts
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
        <AIListingGenerator
<<<<<<< HEAD
          onApplyGenerated={handleApplyGenerated}          initialValues={
            title: form.getValues('title')
            category: form.getValues('category')
=======
          onApplyGenerated={handleApplyGenerated}          initialValues={{
            title: form.getValues('title)
            category: form.getValues(category')
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
          onApplyGenerated={handleApplyGenerated}          initial_values={'
            title: form.get_values ('title'),'
            category: form.get_values ('category'),

<<<<<<< HEAD


=======
<<<<<<< HEAD
const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
  const file = e && e.target.files?.[0];
if (file) {;


};
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {;
  if (!user) {;
  toast ({;
  return;
}setIsSubmitting (true);
author: {';
  name: user.displayName || 'Anonymous Creator';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {
if (file) {}
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {
  if (!user) {
  toast ({
  return;
}setIsSubmitting (true);
author: {";
  name: user.displayName || "Anonymous Creator";
>>>>>>> origin/resolved-merge-conflicts
id: user.id ;
origin/cursor/automate-test-improve-and-merge-code-2533
  name: user && user.displayName || 'Anonymous Creator';
id: user && user.id ;
};
createdAt: new Date () .toISOString () ;
};
data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (imagePath, values.image);
//Get the public window.URL for the image const {;
<<<<<<< HEAD
=======
//If we have an image, upload it .from (products) .upload (imagePath, values.image);
//Get the public window.URL for the image const {
>>>>>>> origin/resolved-merge-conflicts
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
//If we have an image, upload it .from ('products') .upload (imagePath, values && values.image);
//Get the public window && window.URL for the image const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (imagePath);
imagePublicUrl = publicUrlData && publicUrlData.publicUrl;
//Update the product with the image window && window.URL const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values && values.video);
const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (videoPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values && values.model);
const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (modelPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') ;
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate-listing', {;
  body: {;
  //Redirect to product page router.push (`/marketplace/listing/$ {;
<<<<<<< HEAD
=======
  await supabase.functions.invoke ('moderate-listing', {
  body: {
  //Redirect to product page router.push (`/marketplace/listing/$ {
>>>>>>> origin/resolved-merge-conflicts
  productRecord.id ;
}`) ;
}catch (error) {;
  toast ({;
  ;
origin/cursor/automate-test-improve-and-merge-code-2533
  await supabase && supabase.functions.invoke ('moderate-listing', {;
  body: {;
  //Redirect to product page router && router.push (`/marketplace/listing/$ {;
  productRecord && productRecord.id ;
}`) ;
<<<<<<< HEAD
}catch (error) {;
  toast ({;

          }
=======
}catch (error) {
  toast ({}}
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          }}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
          onApplyGenerated={handleApplyGenerated}          initialValues={'
            title: form && form.getValues('title'),'
            category: form && form.getValues('category'),

          }
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

<<<<<<< HEAD


=======
<<<<<<< HEAD
            category: form.getValues('category')}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            category: form.getValues("category")}}
>>>>>>> origin/resolved-merge-conflicts
        />;
      </TabsContent>;
    </Tabs>;
  )const file = e.target.files?.[0];
if (file) {reader.onloadend = () => {setImagePreview (reader.result as string)}reader.readAsDataURL (file)}const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {const file = e && e.target.files?.[0];
if (file) {const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0];
if (file) {;
}//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {if (!user) {toast ({return;
}setIsSubmitting (true)author: {';name: user && user.displayName || 'Anonymous Creator';
id: user && user.id ;name: user.displayName || 'Anonymous Creator';
id: user.id ;}createdAt: new Date () .toISOString ()}data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ()let imagePublicUrl: string | undefined;';//If we have an image, upload it .from ('products') .upload (imagePath, values && values.image)//Get the public window && window.URL for the image const {data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (imagePath)imagePublicUrl = publicUrlData && publicUrlData.publicUrl;
//Update the product with the image window && window.URL const {error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values && values.video)const {data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (videoPath)const {error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values && values.model)const {data: publicUrlData ';
} = supabase && supabase.storage.from ('products') .getPublicUrl (modelPath)//If we have an image, upload it .from ('products') .upload (imagePath, values.image)//Get the public window.URL for the image const {data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (imagePath)imagePublicUrl = publicUrlData.publicUrl;
//Update the product with the image window.URL const {error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values.video)const {data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (videoPath)const {error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values.model)const {data: publicUrlData ';
} = supabase.storage.from ('products') .getPublicUrl (modelPath)const {error: updateError ';
}= await supabase .from ('product listings')}//Send listing to moderation service try {';await supabase && supabase.functions.invoke ('moderate-listing', {body: {//Redirect to product page router && router.push (`/marketplace/listing/$ {productRecord && productRecord.id ;
}`)}catch (error) {toast ({await supabase.functions.invoke ('moderate-listing', {body: {//Redirect to product page router.push (`/marketplace/listing/$ {productRecord.id ;
}`)}catch (error) {toast ({;
<<<<<<< HEAD
}finally {setIsSubmitting (false)}className='w-full'> <TabsList className='grid grid-cols-2 mb-6' > <TabsTrigger value='manual' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple' > ai'className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'> <Sparkles className='h-4 w-4 mr-2'/> AI-Powered Creation </TabsTrigger> </TabsList> ;
}';}/> <FormFieldDescribe your product in detail...' className='min-h-32' {...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='grid grid-cols-1 md:grid-cols-2 gap-6' > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Inputtype='number' min='0' step='0 && 0.01' placeholder='0 && 0.00' {...field;
}/> ';
}/> <FormField >Select a category</option> <option value='digital product' >Digital Product</option> <option value='service' >Service</option> <option value='ai tool' >AI Tool</option> <option value='course' >Course</option> <option value='template' >Template</option> <option value='other' >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ';
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Inputplaceholder='Enter tags separated by commas' {...field;
}/> ';
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type='file' accept='image/*' on_change= {
  handleImageChange ';
}className='cursor - pointer' /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
=======
}finally {setIsSubmitting (false)}}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> ;
}";}/> <FormFieldDescribe your product in detail..." className="min-h-32" {...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Inputtype="number" min="0" step="0 && 0.01" placeholder="0 && 0.00" {...field;
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Inputplaceholder="Enter tags separated by commas" {...field;
}/> ";
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" on_change= {
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type="file" accept=image/* on_change= {
  handleImageChange ";
}className="cursor - pointer /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;;
>>>>>>> origin/resolved-merge-conflicts
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>);
}</FormItem>) ';
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type='file' accept='video / mp4' on_change= {
  handleVideoChange ';
}className='cursor - pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>);
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='flex justify - end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>);
}''  );
}/> <FormFieldDescribe your product in detail...' className='min-h-32' {
  ...field '
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='grid grid-cols-1 md:grid-cols-2 gap-6' > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Inputtype='number' min='0' step='0 && 0.01' placeholder='0 && 0.00' {
  ...field 
}/> ';
}/> <FormField >Select a category</option> <option value='digital product' >Digital Product</option> <option value='service' >Service</option> <option value='ai tool' >AI Tool</option> <option value='course' >Course</option> <option value='template' >Template</option> <option value='other' >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ';
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Inputplaceholder='Enter tags separated by commas' {
  ...field 
}/> ';
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Inputtype='file' accept='image/*' onChange= {
  handleImageChange '
}className='cursor-pointer' /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
<<<<<<< HEAD
}</FormItem>) ';
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype='file' accept='video/mp4' onChange= {
  handleVideoChange '
}className='cursor-pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='flex justify-end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}''  );
=======
}</FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype="file" accept=video/mp4 onChange= {
  handleVideoChange "
}className="cursor-pointer /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ;
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value=ai > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}"  );
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}'"  );
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
}setIsSubmitting (true);'
author: {';'
  name: user.display_name || 'Anonymous Creator';
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

      <TabsContent value='ai'>
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}
          initialValues={'
            title: form.getValues('title'),'
            category: form.getValues('category')
          }
        />;
      </TabsContent>;
    </Tabs>;
  );

}className='w - full'> <TabsList className='grid grid - cols - 2 mb - 6' > <TabsTrigger value='manual' className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple' > ai'className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple'> <Sparkles className='h - 4 w - 4 mr - 2'/> AI - Powered Creation </TabsTrigger> </TabsList>;
}';
}/> <FormField Describe your product in detail...' className='min - h-32' {
  ...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6' > <FormField <FormItem> <FormLabel > Price (USD) </FormLabel> <FormControl> <Input type='number' min='0' step='0.01' placeholder='0.00' {
  ...field;
}/> ';
}/> <FormField >Select a category</option> <option value='digital product' >Digital Product</option> <option value='service' >Service</option> <option value='ai tool' >AI Tool</option> <option value='course' >Course</option> <option value='template' >Template</option> <option value='other' >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ';
}/> </div> <FormField <FormItem> <FormLabel > Tags</FormLabel> <FormControl> <Input placeholder='Enter tags separated by commas' {
  ...field;
}/> ';
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type='file' accept='image/*' on_change= {
  handleImageChange ';
}className='cursor - pointer' /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>);
}</FormItem>) ';
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type='file' accept='video / mp4' on_change= {
  handleVideoChange ';
}className='cursor - pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>);
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='flex justify - end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>);
}''  );

}

}/> <FormField Describe your product in detail...' className='min-h-32' {;
  ...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='grid grid-cols-1 md:grid-cols-2 gap-6' > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type='number' min='0' step='0.01' placeholder='0.00' {;
  ...field ;
}/> ';
}/> <FormField >Select a category</option> <option value='digital product' >Digital Product</option> <option value='service' >Service</option> <option value='ai tool' >AI Tool</option> <option value='course' >Course</option> <option value='template' >Template</option> <option value='other' >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ';
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder='Enter tags separated by commas' {;
  ...field ;
<<<<<<< HEAD
}/> ';
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type='file' accept='image/*' onChange= {;
  handleImageChange ';
}className='cursor-pointer' /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
}</FormItem>) ';
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type='file' accept='video/mp4' onChange= {;
  handleVideoChange ';
}className='cursor-pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='flex justify-end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Inputtype='file' accept='image/*' onChange= {handleImageChange ';
}className='cursor-pointer' /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>)}</FormItem>) ';
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype='file' accept='video/mp4' onChange= {handleVideoChange ';
}className='cursor-pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='flex justify-end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>)}''  )}reader.readAsDataURL (file)setImagePreview (reader.result as string)}
=======
}/> ;
}/> <FormField >Select a category</option> <option value=digital product" >Digital Product</option> <option value="service >Service</option> <option value=ai tool" >AI Tool</option> <option value="course >Course</option> <option value=template" >Template</option> <option value="other >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ;
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {
  ...field ;
}/> ;
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type=file" accept="image/* onChange= {
  handleImageChange ;
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader wont occur. /> </AspectRatio> </div>) ;
}</FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type=file" accept="video/mp4 onChange= {
  handleVideoChange ;
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ;
}/> <div className=flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Inputtype=file" accept="image/* onChange= {handleImageChange ;
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;;
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>)}</FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype=file" accept="video/mp4 onChange= {handleVideoChange ;
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ;
}/> <div className=flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai > <AIListingGenerator /> </TabsContent> </Tabs>)}'  )}reader.readAsDataURL (file)setImagePreview (reader.result as string)}
>>>>>>> origin/resolved-merge-conflicts
reader.readAsDataURL (file)}
}
const handleModelChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {const file = e.target.files?.[0];
// Check condition;
if ( {) {$2;
}
}
//Apply AI - generated content to the form const handleApplyGenerated = (content: any) =>: any {// Check condition;
if ( {) {$2;
}
  toast ({return;
}setIsSubmitting (true)author: {';
  name: user.display_name || 'Anonymous Creator';
id: user.id;
}
created_at: new Date () .toISOString ()}
data: product_record, error: product_error ';
}= await supabase .from ('product listings') .insert ([product_data]) .select ('id') .single ()let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (image_path, values.image)//Get the public window.URL for the image const {data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (image_path)imagePublicUrl = publicUrlData.public_url;
//Update the product with the image window.URL const {error: update_error ';
}= await supabase .from ('product listings') .from ('products') .upload (video_path, values.video)const {data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (video_path)const {error: update_error ';
}= await supabase .from ('product listings') .from ('products') .upload (model_path, values.model)const {data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (model_path)const {error: update_error ';
}= await supabase .from ('product listings')}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate - listing', {body: {//Redirect to product page router.push (`/marketplace / listing/$ {product_record.id;
}`)}catch (error) {toast ({}finally {setIsSubmitting (false)<TabsContent value='ai'>;
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}
          initialValues={title: form.getValues('title'),category: form.getValues('category')}
        />;
      </TabsContent>;
    </Tabs>;
<<<<<<< HEAD
  )}className='w - full'> <TabsList className='grid grid - cols - 2 mb - 6' > <TabsTrigger value='manual' className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple' > ai'className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple'> <Sparkles className='h - 4 w - 4 mr - 2'/> AI - Powered Creation </TabsTrigger> </TabsList>;
}';
}/> <FormField Describe your product in detail...' className='min - h-32' {...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6' > <FormField <FormItem> <FormLabel > Price (USD) </FormLabel> <FormControl> <Input type='number' min='0' step='0.01' placeholder='0.00' {...field;
}/> ';
}/> <FormField >Select a category</option> <option value='digital product' >Digital Product</option> <option value='service' >Service</option> <option value='ai tool' >AI Tool</option> <option value='course' >Course</option> <option value='template' >Template</option> <option value='other' >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ';
}/> </div> <FormField <FormItem> <FormLabel > Tags</FormLabel> <FormControl> <Input placeholder='Enter tags separated by commas' {...field;
}/> ';
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type='file' accept='image/*' on_change= {handleImageChange ';
}className='cursor - pointer' /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>)}</FormItem>) ';
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type='file' accept='video / mp4' on_change= {handleVideoChange ';
}className='cursor - pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='flex justify - end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>)}''  )}/> <FormField Describe your product in detail...' className='min-h-32' {...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='grid grid-cols-1 md:grid-cols-2 gap-6' > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type='number' min='0' step='0.01' placeholder='0.00' {...field ;
}/> ';
}/> <FormField >Select a category</option> <option value='digital product' >Digital Product</option> <option value='service' >Service</option> <option value='ai tool' >AI Tool</option> <option value='course' >Course</option> <option value='template' >Template</option> <option value='other' >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ';
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder='Enter tags separated by commas' {...field ;
}/> ';
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type='file' accept='image/*' onChange= {handleImageChange ';
}className='cursor-pointer' /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>)}</FormItem>) ';
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type='file' accept='video/mp4' onChange= {handleVideoChange ';
}className='cursor-pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';
}/> <div className='flex justify-end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>)}'';
}''
=======
  )}}className="w - full> <TabsList className=grid grid - cols - 2 mb - 6" > <TabsTrigger value="manual className=data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple" > ai"className=data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple> <Sparkles className="h - 4 w - 4 mr - 2"/> AI - Powered Creation </TabsTrigger> </TabsList>;
};
}/> <FormField Describe your product in detail... className="min - h-32" {...field ;
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ;
}/> <div className=grid grid - cols - 1 md:grid - cols - 2 gap - 6" > <FormField <FormItem> <FormLabel > Price (USD) </FormLabel> <FormControl> <Input type="number min=0" step="0.01 placeholder=0.00" {...field;
}/> ";
}/> <FormField >Select a category</option> <option value=digital product >Digital Product</option> <option value="service" >Service</option> <option value=ai tool >AI Tool</option> <option value="course" >Course</option> <option value=template >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ;
}/> </div> <FormField <FormItem> <FormLabel > Tags</FormLabel> <FormControl> <Input placeholder=Enter tags separated by commas" {...field;
}/> ";
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type=file accept="image/*" on_change= {handleImageChange ;
}className=cursor - pointer" /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader wont occur. /> </AspectRatio> </div>)}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type=file accept="video / mp4" on_change= {handleVideoChange ;
}className=cursor - pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className=flex justify - end > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>)}  )}}/> <FormField Describe your product in detail... className="min-h-32" {...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ;
}/> <div className=grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type="number min=0" step="0.01 placeholder=0.00" {...field ;
}/> ";
}/> <FormField >Select a category</option> <option value=digital product >Digital Product</option> <option value="service" >Service</option> <option value=ai tool >AI Tool</option> <option value="course" >Course</option> <option value=template >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ;
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder=Enter tags separated by commas" {...field ;
}/> ";
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type=file accept="image/*" onChange= {handleImageChange ;
}className=cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;;
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader wont occur. /> </AspectRatio> </div>)}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type=file accept="video/mp4" onChange= {handleVideoChange ;
}className=cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className=flex justify-end > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>)}'";
}'"
=======
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
