  title: z.string () .min (3, 'Title must be at least 3 characters');';''
description: z.string () .min (10,  'Description must be at least 10 characters');''
price: z .string () .refine ( (val) => !isNaN (parseFloat (val) ) && parseFloat (val) >= 0, {';''
  message: 'Price must be a valid number' ;'''
});';''''
category: z.string () .min (1, 'Please select a category');';''
//Type for our form values type ProductFormValues = z.infer<typeof productSchema>;'
const [isSubmitting, setIsSubmitting] = React.useState (false);''
const [imagePreview, setImagePreview] = React.useState (null as string | null);';''
const [activeTab, setActiveTab] = React.useState ('manual');
  },const handleModelChange = (e: React.ChangeEvent<HTMLInputElement />) => ;'
  const file = e.target.files?.[0],if (file) {form.setValue('model', file)}
  },// Apply AI-generated content to the form;
'
const handleApplyGenerated = (form.setValue('description', content.description),form.setValue('tags', content.tags.join(', ')),// Set a default price as the middle of the suggested range;
'
const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),form.setValue('price', averagePrice),// Switch to the manual tab to show applied content;) => {
  return $3;}
}'
    setActiveTab('manual')},// Handle form submission;
}setIsSubmitting (true);''
author: {';''
  name: user.displayName || 'Anonymous Creator';
  description: values.description,images: imagePublicUrl ? [imagePublicUrl] : [],seller_id: user.id}
import { logErrorToProduction  } from '@/utils/productionLogger';'
          name: user.displayName || 'Anonymous Creator',id: user.i
  activeTab ;'
}onValueChange= {;''
  setActiveTab ';''
}className='w-full'> <TabsList className='grid grid-cols-2 mb-6' > <TabsTrigger value='manual' className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple' > ai'className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'> <Sparkles className='h-4 w-4 mr-2'/> AI-Powered Creation </TabsTrigger> </TabsList> ;''
}';'''
}/> <FormField Describe your product in detail...' className='min-h-32' {;'''
  ...field ';''''
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ';''
}/> <div className='grid grid-cols-1 md:grid-cols-2 gap-6' > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type='number' min='0' step='0.01' placeholder='0.00' {;'
  ...field ;''
}/> ';''
}/> <FormField >Select a category</option> <option value='digital product' >Digital Product</option> <option value='service' >Service</option> <option value='ai tool' >AI Tool</option> <option value='course' >Course</option> <option value='template' >Template</option> <option value='other' >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ';''
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder='Enter tags separated by commas' {;'
  ...field ;''
}/> ';''
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type='file' accept='image/*' onChange= {;'''
  handleImageChange ';''''`
}className='cursor-pointer' /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';'''
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;''
}</FormItem>) ';''
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type='file' accept='video/mp4' onChange= {;''
  handleVideoChange ';''
}className='cursor-pointer' /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;''
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ';'''
}/> <div className='flex justify-end' > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value='ai' > <AIListingGenerator /> </TabsContent> </Tabs>) ;''''
}''''''`
