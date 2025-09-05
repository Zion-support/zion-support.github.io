import {useForm} from &quot;react-hook-form&quot;; import {zodResolver} from &quot;@hookform/resolvers/zod&quot;; import z from &quot;zod&quot;; import {supabase} from &quot;@/integrations/supabase/client&quot;; import {useAuth} from &quot;@/hooks/useAuth&quot;; import {useToast} from &quot;@/hooks/use-toast&quot;; import {useNavigate} from &quot;react-router-dom&quot;; import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from &quot;@/components/ui/form&quot;; import {Input} from &quot;@/components/ui/input&quot;; import {Button} from &quot;@/components/ui/button&quot;; import {Textarea} from &quot;@/components/ui/textarea&quot;; import {AspectRatio} from &quot;@/components/ui/aspect-ratio&quot;; import {Tabs,TabsList,TabsTrigger,TabsContent} from &quot;@/components/ui/tabs&quot;; import {AIListingGenerator} from &quot;@/components/listing/AIListingGenerator&quot;; import { Sparkles const productSchema = z.object({ title: z.string().min(3,&quot;Title must be at least 3 characters&quot;),description: z.string().min(10,&quot;Description must be at least 10 characters&quot;),price: z .string() .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0,{ message: &quot;Price must be a valid number&quot;,}),category: z.string().min(1,&quot;Please select a category&quot;),image: z.instanceof(File).optional(),video: z.instanceof(File).optional(),model: z.instanceof(File).optional(),tags: z.string().optional(),};); export function ProductSubmissionForm($1) { const { user } = useAuth(); const {toast} = useToast(); const navigate = useNavigate(); const [isSubmitting,setIsSubmitting] = React.useState(false); const [imagePreview,setImagePreview] = React.useState(null); const [activeTab,setActiveTab] = React.useState(&quot;manual&quot;); const form = useForm({ resolver: zodResolver(productSchema),defaultValues: { title: &quot;,description: &quot;,price: &quot;,category: &quot;,video: null,model: null,tags: &quot;,},};); const handleImageChange = (props) => { const file = e.target.files?.[0]; if (file) { form.setValue(&quot;image&quot;,file); const reader = new FileReader(); reader.onloadend = () => { setImagePreview(reader.result)}; reader.readAsDataURL(file)} }; const handleVideoChange = (props) => { const file = e.target.files?.[0]; if (file) { form.setValue(&quot;video&quot;,file)} }; const handleModelChange = (props) => { const file = e.target.files?.[0]; if (file) { form.setValue(&quot;model&quot;,file)} }; const handleApplyGenerated = (props) => {form.setValue(&quot;description&quot;,content.description); form.setValue(&quot;tags&quot;,content.tags.join(&quot;,&quot;)); const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2); form.setValue(&quot;price&quot;,averagePrice); setActiveTab(&quot;manual&quot;)}; const onSubmit = async (values) => { if (!user) { toast({ title: &quot;Authentication Required&quot;,description: &quot;You must be logged in to publish products&quot;,variant: &quot;destructive&quot;,};); return} setIsSubmitting(true); try { const productData = { title: values.title,description: values.description,price: parseFloat(values.price),category: values.category,currency: &quot;USD&quot;,tags: values.tags ? values.tags.split(&apos;,&apos;).map(tag => tag.trim()) [],; author: { name: user.displayName || &quot;Anonymous Creator&quot;,id: user.id,},createdAt: new Date().toISOString(),};&apos;; const {data: productRecord,error: productError} = await supabase .from(&apos;product_listings&apos;) .insert([productData]) .select(&apos;id&apos;) .single(); if (productError) {throw new Error(productError.message)} if (values.image) { const imagePath = `product_images/${productRecord.id}/${values.image.name};`; const {error: uploadError} = await supabase.storage&apos;; .from(&apos;products&apos;) .upload(imagePath,values.image); if (uploadError) {throw new Error(uploadError.message)} const {data: publicUrlData} = supabase.storage&apos;; .from(&apos;products&apos;) .getPublicUrl(imagePath); const {error: updateError} = await supabase .from(&apos;product_listings&apos;) .update({images[publicUrlData.publicUrl]});&apos;;&apos;; .eq(&apos;id&apos;,productRecord.id); if (updateError) {throw new Error(updateError.message)} } if (values.video) { const videoPath = `product_videos/${productRecord.id}/${values.video.name};`; const {error: uploadError} = await supabase.storage&apos;; .from(&apos;products&apos;) .upload(videoPath,values.video); if (uploadError) {throw new Error(uploadError.message)} const {data: publicUrlData} = supabase.storage&apos;; .from(&apos;products&apos;) .getPublicUrl(videoPath);&apos;; const {error: updateError} = await supabase .from(&apos;product_listings&apos;) .update({video_url: publicUrlData.publicUrl};)&apos;;&apos;; .eq(&apos;id&apos;,productRecord.id); if (updateError) {throw new Error(updateError.message)} } if (values.model) { const modelPath = `product_models/${productRecord.id}/${values.model.name};`; const {error: uploadError} = await supabase.storage&apos;; .from(&apos;products&apos;) .upload(modelPath,values.model); if (uploadError) {throw new Error(uploadError.message)} const {data: publicUrlData} = supabase.storage&apos;; .from(&apos;products&apos;) .getPublicUrl(modelPath);&apos;; const {error: updateError} = await supabase .from(&apos;product_listings&apos;) .update({model_url: publicUrlData.publicUrl};)&apos;;&apos;; .eq(&apos;id&apos;,productRecord.id); if (updateError) {throw new Error(updateError.message)} } toast({title: &quot;Product Published!&quot;,description: &quot;Your product has been successfully published on Zion.&quot;,}); router(`/marketplace/listing/${productRecord.id}`)} catch (error) { toast({ title: &quot;Publication Failed&quot;,description: error instanceof Error ? error.message : &quot;An unknown error occurred&quot;,variant: &quot;destructive&quot;,})} finally {setIsSubmitting(false)} }; return (<Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;w-full&quot;> <TabsList className=&quot;grid grid-cols-2 mb-6&quot;> <TabsTrigger value=&quot;manual&quot; className=&quot;data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;> Manual Creation </TabsTrigger> <TabsTrigger value=&quot;ai&quot; className=&quot;data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;> <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> AI-Powered Creation </TabsTrigger> </TabsList> <TabsContent value=&quot;manual&quot;> <Form {...form}> <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;> <FormField control={form.control} name=&quot;title&quot; render={({ field }) => (<FormItem> <FormLabel>Product Title</FormLabel> <FormControl> <Input placeholder=&quot;Enter product title&quot; {...field} /> </FormControl> <FormDescription> Create a compelling title that describes your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name=&quot;description&quot; render={({ field }) => (<FormItem> <FormLabel>Description</FormLabel> <FormControl> <Textarea placeholder=&quot;Describe your product in detail...&quot; className=&quot;min-h-32&quot; {...field} /> </FormControl> <FormDescription>&apos;; Provide a detailed description of what you&apos;re offering </FormDescription> <FormMessage /> </FormItem>)}/> <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;> <FormField control={form.control} name=&quot;price&quot; render={({ field }) => (<FormItem> <FormLabel>Price (USD)</FormLabel> <FormControl> <Input type=&quot;number&quot; min=&quot;0&quot; step=&quot;0.01&quot; placeholder=&quot;0.00&quot; {...field} /> </FormControl> <FormDescription> Set your price in USD </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name=&quot;category&quot; render={({ field }) => (<FormItem> <FormLabel>Category</FormLabel> <FormControl> <select className=&quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot; {...field}> <option value=&quot;>Select a category</option> <option value=&quot;digital_product&quot;>Digital Product</option> <option value=&quot;service&quot;>Service</option> <option value=&quot;ai_tool&quot;>AI Tool</option> <option value=&quot;course&quot;>Course</option> <option value=&quot;template&quot;>Template</option> <option value=&quot;other&quot;>Other</option> </select> </FormControl> <FormMessage /> </FormItem>)}/> </div> <FormField control={form.control} name=&quot;tags&quot; render={({ field }) => (<FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder=&quot;Enter tags separated by commas&quot; {...field} /> </FormControl> <FormDescription> Add relevant tags to help users find your product (e.g.,ai,productivity,design) </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name=&quot;image&quot; render={() => (<FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type=&quot;file&quot; accept=&quot;image/*&quot; onChange={handleImageChange} className=&quot;cursor-pointer&quot; /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> {imagePreview && (<div className=&quot;mt-2 w-full max-w-md border rounded overflow-hidden&quot;> <AspectRatio ratio={3 / 2}> <img src={imagePreview} alt=&quot;Preview&quot; className=&quot;w-full h-full object-cover&quot; /> </AspectRatio> </div> )} </FormItem>)}/> <FormField control={form.control} name=&quot;video&quot; render={() => (<FormItem> <FormLabel>Product Video (MP4)</FormLabel> <FormControl> <Input type=&quot;file&quot; accept=&quot;video/mp4&quot; onChange={handleVideoChange} className=&quot;cursor-pointer&quot; /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name=&quot;model&quot; render = { () => (<FormItem> <FormLabel>3D Model (glb)</FormLabel> <FormControl> <Input type=&quot;file&quot; accept=&quot;model/gltf-binary,.glb&quot; onChange={handleModelChange } className=&quot;cursor-pointer&quot; /> </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>)}/> <div className=&quot;flex justify-end&quot;> <Button type=&quot;submit&quot; disabled={isSubmitting} className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;> {isSubmitting ? &quot;Publishing...&quot; : &quot;Publish Product&quot;} </Button> </div> </form> </Form> </TabsContent> <TabsContent value=&quot;ai&quot;> <AIListingGenerator onApplyGenerated={handleApplyGenerated} initialValues = { { title: form.getValues(&quot;title&quot;),category: form.getValues(&quot;category&quot;) }} /> </TabsContent> </Tabs>)} export default ProductSubmissionForm; </AIListingGenerator> </FormField> </FormField> </FormField> </FormField>;&apos;;&apos;;
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import z from "zod";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {useToast} from "@/hooks/use-toast";
import {useNavigate} from "react-router-dom";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {AIListingGenerator} from "@/components/listing/AIListingGenerator";
import { Sparkles // Define the form schema with zod;
const productSchema = z.object({;
    "title": "z.string().min(3", "Title must be at least 3 characters"),;
    "description": "z.string().min(10", "Description must be at least 10 characters"),;
    "price": "z;
        .string();
        .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0", {;
        "message": "Price must be a valid number",;
    }),;
    "category": "z.string().min(1", "Please select a category"),;
    "image": "z.instanceof(File).optional()",;
    "video": "z.instanceof(File).optional()",;
    "model": "z.instanceof(File).optional()",;
    "tags": "z.string().optional()",;
});
export function ProductSubmissionForm("props": "any) {;
    const { user "} = useAuth();
import { Sparkles // Define the form schema with zod
const productSchema = z.object({
    "title": z.string().min(3, "Title must be at least 3 characters"),
    "description": z.string().min(10, "Description must be at least 10 characters"),
    "price": z
        .string()
        .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
        message: "Price must be a valid number",
    }),
    category: z.string().min(1, "Please select a category"),
    image: z.instanceof(File).optional(),
    video: z.instanceof(File).optional(),
    model: z.instanceof(File).optional(),
    tags: z.string().optional(),
}
    );
export function ProductSubmissionForm(props: any) {
        "message": "Price must be a valid number"}),
    "category": z.string().min(1, "Please select a category"),
    "image": z.instanceof(File).optional(),
    "video": z.instanceof(File).optional(),
    "model": z.instanceof(File).optional(),
    "tags": z.string().optional()};);
export function ProductSubmissionForm($1) {
    const { user } = useAuth();
    const {toast} = useToast();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [imagePreview, setImagePreview] = React.useState(null);
    const [activeTab, setActiveTab] = React.useState("manual");
    // Initialize the form;
    const form = useForm({;
        "resolver": "zodResolver(productSchema)",;
        "defaultValues": "{;
            "title": """,;
            "description": "",;
            "price": "",;
            "category": "",;
            "video": "null",;
            "model": "null",;
            "tags": "",;
        },;
    });
    // Handle image upload preview;
    const handleImageChange = ("props": "any) => {;
    // Initialize the form
    const form = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: "",
            description: "",
            price: "",
            category: "",
            video: null,
            model: null,
            tags: "",
        },
    }
    );
        "resolver": zodResolver(productSchema),
        "defaultValues": {
            title: ",
            "description": ",
            "price": ",
            "category": ",
            "video": null,
            "model": null,
            "tags": "}};);
    // Handle image upload preview
    const handleImageChange = (props) => {
        const file = e.target.files?.[0];
        if (file) {;
            form.setValue("image"", file);
            const reader = new FileReader();
            reader.onloadend = () => {;
                setImagePreview(reader.result)};
            reader.readAsDataURL(file)}
    };
    const handleVideoChange = ("props": "any) => {;
    const handleVideoChange = (props) => {
        const file = e.target.files?.[0];
        if (file) {;
            form.setValue("video"", file)}
    };
    const handleModelChange = ("props": "any) => {;
    const handleModelChange = (props) => {
        const file = e.target.files?.[0];
        if (file) {;
            form.setValue("model"", file)}
    };
    // Apply AI-generated content to the form;
    const handleApplyGenerated = ("props": "any) => {form.setValue("description"", content.description);
    // Apply AI-generated content to the form
    const handleApplyGenerated = (props) => {form.setValue("description", content.description);
        form.setValue("tags", content.tags.join(", "));
        // Set a default price as the middle of the suggested range;
        const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
        form.setValue("price", averagePrice);
        // Switch to the manual tab to show applied content;
        setActiveTab("manual")};
    // Handle form submission;
    const onSubmit = async (values) => {;
        if (!user) {;
            toast({;
                "title": "Authentication Required",;
                "description": "You must be logged in to publish products",;
                "variant": "destructive",;
            });
            return}
        setIsSubmitting(true);
        try {;
            // Create the product listing;
            const productData = {;
  "title": "values.title",;
                "description": "values.description",;
                "price": "parseFloat(values.price)",;
                "category": "values.category",;
                "currency": "USD", // Default currency;
                "tags": "values.tags ? values.tags.split('",').map(tag => tag.trim()) [],;
                "author": "{;
                    "name": user.displayName || "Anonymous Creator"",;
                    "id": "user.id",;
  ;
},;
                "createdAt": "new Date().toISOString()",;
            };
            const {"data": "productRecord", "error": "productError"} = await supabase;
                .from('product_listings');
                .insert([productData]);
                .select('id');
                .single();
            if (productError) {throw new Error(productError.message)}
            // If we have an image, upload it;
            if (values.image) {;
                const imagePath = `product_images/${productRecord.id}/${values.image.name}`;
                const {"error": "uploadError"} = await supabase.storage;
                    .from('products');
                    .upload(imagePath, values.image);
                if (uploadError) {throw new Error(uploadError.message)}
                // Get the public URL for the image;
                const {"data": "publicUrlData"} = supabase.storage;
                    .from('products');
                    .getPublicUrl(imagePath);
                // Update the product with the image URL;
                const {"error": "updateError"} = await supabase;
                    .from('product_listings');
                    .update({images[publicUrlData.publicUrl];});
                    .eq('id', productRecord.id);
                if (updateError) {throw new Error(updateError.message)}
            }
            // Upload video if provided;
            if (values.video) {;
                const videoPath = `product_videos/${productRecord.id}/${values.video.name}`;
                const {"error": "uploadError"} = await supabase.storage;
                    .from('products');
                    .upload(videoPath, values.video);
                if (uploadError) {throw new Error(uploadError.message)}
                const {"data": "publicUrlData"} = supabase.storage;
                    .from('products');
                    .getPublicUrl(videoPath);
                const {"error": "updateError"} = await supabase;
                    .from('product_listings');
                    .update({"video_url": "publicUrlData.publicUrl"});
                    .eq('id', productRecord.id);
                if (updateError) {throw new Error(updateError.message)}
            }
            // Upload model if provided;
            if (values.model) {;
                const modelPath = `product_models/${productRecord.id}/${values.model.name}`;
                const {"error": "uploadError"} = await supabase.storage;
                    .from('products');
                    .upload(modelPath, values.model);
                if (uploadError) {throw new Error(uploadError.message)}
                const {"data": "publicUrlData"} = supabase.storage;
                    .from('products');
                    .getPublicUrl(modelPath);
                const {"error": "updateError"} = await supabase;
                    .from('product_listings');
                    .update({"model_url": "publicUrlData.publicUrl"});
                    .eq('id', productRecord.id);
                if (updateError) {throw new Error(updateError.message)}
            }
            // Show success message;
            toast({"title": "Product Published!",;
                "description": "Your product has been successfully published on Zion."});
            // Redirect to product page;
            router(`/marketplace/listing/${productRecord.id}`);
        }
        catch (error) {;
            toast({;
                "title": "Publication Failed",;
                "description": "error instanceof Error ? error.message : "An unknown error occurred"",;
                "variant": "destructive",;
            })}
    // Handle form submission
    const onSubmit = async (values) => {
        if (!user) {
            toast({
                title: "Authentication Required",
                description: "You must be logged in to publish products",
                variant: "destructive",
            }
    );
                "title": "Authentication Required",
                "description": "You must be logged in to publish products",
                "variant": "destructive"};);
            return}
        setIsSubmitting(true);
        try {
            // Create the product listing
            const productData = {
  "title": values.title,
                "description": values.description,
                "price": parseFloat(values.price),
                "category": values.category,
                "currency": "USD", // Default currency
                "tags": values.tags ? values.tags.split(',').map(tag => tag.trim()) [],;
                "author": {
                    name: user.displayName || "Anonymous Creator",
                    "id": user.id},
                "createdAt": new Date().toISOString()};';
            const {"data": productRecord, "error": productError} = await supabase
                .from('product_listings')
                .insert([productData])
                .select('id')
                .single();
            if (productError) {throw new Error(productError.message)}
            // If we have an image, upload it
            if (values.image) {
                const imagePath = `product_images/${productRecord.id}/${values.image.name};`;
                const {"error": uploadError} = await supabase.storage';
                    .from('products')
                    .upload(imagePath, values.image);
                if (uploadError) {throw new Error(uploadError.message)}
                // Get the public URL for the image
                const {"data": publicUrlData} = supabase.storage';
                    .from('products')
                    .getPublicUrl(imagePath);
                // Update the product with the image URL
                const {"error": updateError} = await supabase
                    .from('product_listings')
                    .update({images[publicUrlData.publicUrl];}
    );
                    .update({images[publicUrlData.publicUrl];});';';
                    .eq('id', productRecord.id);
                if (updateError) {throw new Error(updateError.message)}
            }
            // Upload video if provided
            if (values.video) {
                const videoPath = `product_videos/${productRecord.id}/${values.video.name};`;
                const {"error": uploadError} = await supabase.storage';
                    .from('products')
                    .upload(videoPath, values.video);
                if (uploadError) {throw new Error(uploadError.message)}
                const {"data": publicUrlData} = supabase.storage';
                    .from('products')
                    .getPublicUrl(videoPath);';
                const {"error": updateError} = await supabase
                    .from('product_listings')
                    .update({"video_url": publicUrlData.publicUrl};)';';
                    .eq('id', productRecord.id);
                if (updateError) {throw new Error(updateError.message)}
            }
            // Upload model if provided
            if (values.model) {
                const modelPath = `product_models/${productRecord.id}/${values.model.name};`;
                const {"error": uploadError} = await supabase.storage';
                    .from('products')
                    .upload(modelPath, values.model);
                if (uploadError) {throw new Error(uploadError.message)}
                const {"data": publicUrlData} = supabase.storage';
                    .from('products')
                    .getPublicUrl(modelPath);';
                const {"error": updateError} = await supabase
                    .from('product_listings')
                    .update({"model_url": publicUrlData.publicUrl};)';';
                    .eq('id', productRecord.id);
                if (updateError) {throw new Error(updateError.message)}
            }
            // Show success message
            toast({title: "Product Published!",
                description: "Your product has been successfully published on Zion.",}
    );
            toast({"title": "Product Published!",
                "description": "Your product has been successfully published on Zion."});
            // Redirect to product page
            router(`/marketplace/listing/${productRecord.id}`);
        } catch (error) {
            toast({
                title: "Publication Failed",
                description: error instanceof Error ? error.message : "An unknown error occurred",
                variant: "destructive",
                }
    );
        finally {setIsSubmitting(false)}
                "title": "Publication Failed",
                "description": error instanceof Error ? error.message : "An unknown error occurred",
                "variant": "destructive"})} finally {setIsSubmitting(false)}
    };
    return (<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
      <TabsList className="grid grid-cols-2 mb-6">;
        <TabsTrigger value="manual" className="data-[state=active]: "bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          <Sparkles className="h-4 w-4 mr-2" />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value="manual">;
        <Form {...form"}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
            <FormField control={form.control} name="title" render={({ field }) => (<FormItem>;
                  <FormLabel>Product Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="Enter product title" {...field}  />;
                  </FormControl>;
                  <FormDescription>;
                    Create a compelling title that describes your product;
                  </FormDescription>;
                  <FormMessage  />;
                </FormItem>)}/>;
            <FormField control={form.control} name="description" render={({ field }) => (<FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
                    <Textarea placeholder="Describe your product in detail..." className="min-h-32" {...field} />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage  />;
                </FormItem>)}/>;
            <div className="grid grid-cols-1 "md": "grid-cols-2 gap-6">;
              <FormField control={form.control"} name="price" render={({ field }) => (<FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
                    <FormControl>;
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field}  />;
                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
                    <FormMessage  />;
                  </FormItem>)}/>;
              <FormField control={form.control} name="category" render={({ field }) => (<FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background "placeholder": "text-muted-foreground focus-"visible":outline-none focus-"visible":ring-2 focus-"visible":ring-ring focus-"visible":ring-offset-2 "disabled":cursor-not-allowed "disabled":opacity-50 "md":text-sm" {...field"}>;
                        <option value="">Select a category</option>;
                        <option value="digital_product">Digital Product</option>;
                        <option value="service">Service</option>;
                        <option value="ai_tool">AI Tool</option>;
                        <option value="course">Course</option>;
                        <option value="template">Template</option>;
                        <option value="other">Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage  />;
                  </FormItem>)}/>;
            </div>;
            <FormField control={form.control} name="tags" render={({ field }) => (<FormItem>;
                  <FormLabel>Tags</FormLabel>;
                  <FormControl>;
                    <Input placeholder="Enter tags separated by commas" {...field}  />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e.g., ai, productivity, design);
                  </FormDescription>;
                  <FormMessage  />;
                </FormItem>)}/>;
            <FormField control={form.control} name="image" render={() => (<FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;
                    <Input type="file" accept="image/*" onChange={handleImageChange} className="cursor-pointer"  />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high-quality image of your product (recommended "size": "1200x800px);
                  </FormDescription>;
                  <FormMessage  />;
                  {imagePreview && (<div className="mt-2 w-full max-w-md border rounded overflow-hidden">;
                      <AspectRatio ratio={3 / 2"}>;
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover"  />;
                      </AspectRatio>;
                    </div>)}
                </FormItem>)}/>;
            <FormField control={form.control} name="video" render={() => (<FormItem>;
                  <FormLabel>Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer"  />;
                  </FormControl>;
                  <FormDescription>;
                    Optional video demonstrating your product;
                  </FormDescription>;
                  <FormMessage  />;
                </FormItem>)}/>;
            <FormField control={form.control} name="model" render = {;
  () => (<FormItem>;
                  <FormLabel>3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input type="file" accept="model/gltf-binary,;
  .glb" onChange={handleModelChange;
;
;
;
} className="cursor-pointer"  />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a 3D model for interactive viewing;
                  </FormDescription>;
                  <FormMessage  />;
                </FormItem>)}/>;
            <div className="flex justify-end">;
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "from-zion-purple-light "hover":to-zion-purple text-white">;
                {isSubmitting ? "Publishing..." : "Publish Product""}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;
      <TabsContent value="ai">;
        <AIListingGenerator onApplyGenerated={handleApplyGenerated} initialValues = {;
  {;
            "title": "form.getValues("title")",;
  "category": "form.getValues("category");
        ;
;
;
;
"}} />;
      </TabsContent>;
    </Tabs>)}
;
export default ProductSubmissionForm;
</AIListingGenerator>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>
    return (<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      <TabsContent value="manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="title" render={({ field }) => (<FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product title" {...field}  />
                  </FormControl>
                  <FormDescription>
                    Create a compelling title that describes your product
                  </FormDescription>
                  <FormMessage  />
                </FormItem>)}/>
            <FormField control={form.control} name="description" render={({ field }) => (<FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your product in detail..." className="min-h-32" {...field} />
                  </FormControl>
                  <FormDescription>';
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage  />
                </FormItem>)}/>
            <div className="grid grid-cols-1 "md": grid-cols-2 gap-6">
              <FormField control={form.control} name="price" render={({ field }) => (<FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field}  />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage  />
                  </FormItem>)}/>
              <FormField control={form.control} name="category" render={({ field }) => (<FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background "placeholder": text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" {...field}>
                        <option value=">Select a category</option>
                        <option value="digital_product">Digital Product</option>
                        <option value="service">Service</option>
                        <option value="ai_tool">AI Tool</option>
                        <option value="course">Course</option>
                        <option value="template">Template</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage  />
                  </FormItem>)}/>
            </div>
            <FormField control={form.control} name="tags" render={({ field }) => (<FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {...field}  />
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage  />
                </FormItem>)}/>
            <FormField control={form.control} name="image" render={() => (<FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" onChange={handleImageChange} className="cursor-pointer"  />
                  </FormControl>
                  <FormDescription>
                    Upload a high-quality image of your product (recommended "size": 1200x800px)
                  </FormDescription>
                  <FormMessage  />
                  {imagePreview && (<div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3 / 2}>
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover"  />
                      </AspectRatio>
                        </div>
  );
}
                </FormItem>)}/>
            <FormField control={form.control} name="video" render={() => (<FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer"  />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product
                  </FormDescription>
                  <FormMessage  />
                </FormItem>)}/>
            <FormField control={form.control} name="model" render = {
  () => (<FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binary,
  .glb" onChange={handleModelChange
} className="cursor-pointer"  />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage  />
                </FormItem>)}/>
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": from-zion-purple-light hover:to-zion-purple text-white">
                {isSubmitting ? "Publishing..." : "Publish Product"}
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="ai">
        <AIListingGenerator onApplyGenerated={handleApplyGenerated} initialValues = {
  {
            "title": form.getValues("title"),
  "category": form.getValues("category")
}} />
      </TabsContent>
    </Tabs>)}
export default ProductSubmissionForm;
</AIListingGenerator>
</FormField>
</FormField>
</FormField>
</FormField>;';';
import {useForm} from "react-hook-form"; import {zodResolver} from "@hookform/resolvers/zod"; import z from "zod"; import {supabase} from "@/integrations/supabase/client"; import {useAuth} from "@/hooks/useAuth"; import {useToast} from "@/hooks/use-toast"; import {useNavigate} from "react-router-dom"; import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"; import {Input} from "@/components/ui/input"; import {Button} from "@/components/ui/button"; import {Textarea} from "@/components/ui/textarea"; import {AspectRatio} from "@/components/ui/aspect-ratio"; import {Tabs,TabsList,TabsTrigger,TabsContent} from "@/components/ui/tabs"; import {AIListingGenerator} from "@/components/listing/AIListingGenerator"; import { Sparkles const productSchema = z.object({ title: z.string().min(3,"Title must be at least 3 characters"),description: z.string().min(10,"Description must be at least 10 characters"),price: z .string() .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0,{ message: "Price must be a valid number",}),category: z.string().min(1,"Please select a category"),image: z.instanceof(File).optional(),video: z.instanceof(File).optional(),model: z.instanceof(File).optional(),tags: z.string().optional(),};); export function ProductSubmissionForm($1) { const { user } = useAuth(); const {toast} = useToast(); const navigate = useNavigate(); const [isSubmitting,setIsSubmitting] = React.useState(false); const [imagePreview,setImagePreview] = React.useState(null); const [activeTab,setActiveTab] = React.useState("manual"); const form = useForm({ resolver: zodResolver(productSchema),defaultValues: { title: ",description: ",price: ",category: ",video: null,model: null,tags: ",},};); const handleImageChange = (props) => { const file = e.target.files?.[0]; if (file) { form.setValue("image",file); const reader = new FileReader(); reader.onloadend = () => { setImagePreview(reader.result)}; reader.readAsDataURL(file)} }; const handleVideoChange = (props) => { const file = e.target.files?.[0]; if (file) { form.setValue("video",file)} }; const handleModelChange = (props) => { const file = e.target.files?.[0]; if (file) { form.setValue("model",file)} }; const handleApplyGenerated = (props) => {form.setValue("description",content.description); form.setValue("tags",content.tags.join(",")); const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2); form.setValue("price",averagePrice); setActiveTab("manual")}; const onSubmit = async (values) => { if (!user) { toast({ title: "Authentication Required",description: "You must be logged in to publish products",variant: "destructive",};); return} setIsSubmitting(true); try { const productData = { title: values.title,description: values.description,price: parseFloat(values.price),category: values.category,currency: "USD",tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) [],; author: { name: user.displayName || "Anonymous Creator",id: user.id,},createdAt: new Date().toISOString(),};'; const {data: productRecord,error: productError} = await supabase .from('product_listings') .insert([productData]) .select('id') .single(); if (productError) {throw new Error(productError.message)} if (values.image) { const imagePath = `product_images/${productRecord.id}/${values.image.name};`; const {error: uploadError} = await supabase.storage'; .from('products') .upload(imagePath,values.image); if (uploadError) {throw new Error(uploadError.message)} const {data: publicUrlData} = supabase.storage'; .from('products') .getPublicUrl(imagePath); const {error: updateError} = await supabase .from('product_listings') .update({images[publicUrlData.publicUrl]});';'; .eq('id',productRecord.id); if (updateError) {throw new Error(updateError.message)} } if (values.video) { const videoPath = `product_videos/${productRecord.id}/${values.video.name};`; const {error: uploadError} = await supabase.storage'; .from('products') .upload(videoPath,values.video); if (uploadError) {throw new Error(uploadError.message)} const {data: publicUrlData} = supabase.storage'; .from('products') .getPublicUrl(videoPath);'; const {error: updateError} = await supabase .from('product_listings') .update({video_url: publicUrlData.publicUrl};)';'; .eq('id',productRecord.id); if (updateError) {throw new Error(updateError.message)} } if (values.model) { const modelPath = `product_models/${productRecord.id}/${values.model.name};`; const {error: uploadError} = await supabase.storage'; .from('products') .upload(modelPath,values.model); if (uploadError) {throw new Error(uploadError.message)} const {data: publicUrlData} = supabase.storage'; .from('products') .getPublicUrl(modelPath);'; const {error: updateError} = await supabase .from('product_listings') .update({model_url: publicUrlData.publicUrl};)';'; .eq('id',productRecord.id); if (updateError) {throw new Error(updateError.message)} } toast({title: "Product Published!",description: "Your product has been successfully published on Zion.",}); router(`/marketplace/listing/${productRecord.id}`)} catch (error) { toast({ title: "Publication Failed",description: error instanceof Error ? error.message : "An unknown error occurred",variant: "destructive",})} finally {setIsSubmitting(false)} }; return (<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full"> <TabsList className="grid grid-cols-2 mb-6"> <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> Manual Creation </TabsTrigger> <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2" /> AI-Powered Creation </TabsTrigger> </TabsList> <TabsContent value="manual"> <Form {...form}> <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> <FormField control={form.control} name="title" render={({ field }) => (<FormItem> <FormLabel>Product Title</FormLabel> <FormControl> <Input placeholder="Enter product title" {...field} /> </FormControl> <FormDescription> Create a compelling title that describes your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name="description" render={({ field }) => (<FormItem> <FormLabel>Description</FormLabel> <FormControl> <Textarea placeholder="Describe your product in detail..." className="min-h-32" {...field} /> </FormControl> <FormDescription>'; Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>)}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <FormField control={form.control} name="price" render={({ field }) => (<FormItem> <FormLabel>Price (USD)</FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} /> </FormControl> <FormDescription> Set your price in USD </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name="category" render={({ field }) => (<FormItem> <FormLabel>Category</FormLabel> <FormControl> <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" {...field}> <option value=">Select a category</option> <option value="digital_product">Digital Product</option> <option value="service">Service</option> <option value="ai_tool">AI Tool</option> <option value="course">Course</option> <option value="template">Template</option> <option value="other">Other</option> </select> </FormControl> <FormMessage /> </FormItem>)}/> </div> <FormField control={form.control} name="tags" render={({ field }) => (<FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {...field} /> </FormControl> <FormDescription> Add relevant tags to help users find your product (e.g.,ai,productivity,design) </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name="image" render={() => (<FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" onChange={handleImageChange} className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> {imagePreview && (<div className="mt-2 w-full max-w-md border rounded overflow-hidden"> <AspectRatio ratio={3 / 2}> <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" /> </AspectRatio> </div> )} </FormItem>)}/> <FormField control={form.control} name="video" render={() => (<FormItem> <FormLabel>Product Video (MP4)</FormLabel> <FormControl> <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)}/> <FormField control={form.control} name="model" render = { () => (<FormItem> <FormLabel>3D Model (glb)</FormLabel> <FormControl> <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange } className="cursor-pointer" /> </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>)}/> <div className="flex justify-end"> <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"> {isSubmitting ? "Publishing..." : "Publish Product"} </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai"> <AIListingGenerator onApplyGenerated={handleApplyGenerated} initialValues = { { title: form.getValues("title"),category: form.getValues("category") }} /> </TabsContent> </Tabs>)} export default ProductSubmissionForm; </AIListingGenerator> </FormField> </FormField> </FormField> </FormField>;';';