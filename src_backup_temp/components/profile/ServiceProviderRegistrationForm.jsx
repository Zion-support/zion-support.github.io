import React,{useState} from &quot;react&quot;; import {useForm} from &quot;react-hook-form&quot;; import {zodResolver} from &quot;@hookform/resolvers/zod&quot;; import {z} from &quot;zod&quot;; import {Button} from &quot;@/components/ui/button&quot;; import {Input} from &quot;@/components/ui/input&quot;; import {Textarea} from &quot;@/components/ui/textarea&quot;; import {Switch} from &quot;@/components/ui/switch&quot;; import {Badge} from &quot;@/components/ui/badge&quot;; import {Separator} from &quot;@/components/ui/separator&quot;; import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from &quot;@/components/ui/form&quot;; import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from &quot;@/components/ui/card&quot;; import { X,Sparkles,Upload,Check,Briefcase,MapPin,UserRound,Globe import { toast } from &quot;@/components/ui/use-toast&quot;; import {useAuth} from &quot;@/hooks/useAuth&quot;; import {supabase} from &quot;@/integrations/supabase/client&quot;; import {AspectRatio} from &quot;@/components/ui/aspect-ratio&quot;; const serviceProfileSchema = z.object({ name: z.string().min(2,&quot;Name must be at least 2 characters long&quot;),title: z.string().min(5,&quot;Business name/title is required&quot;),bio: z.string().min(50,&quot;Bio must be at least 50 characters long&quot;).max(1000,&quot;Bio cannot exceed 1000 characters&quot;),location: z.string().min(2,&quot;Location is required&quot;),services: z.string().min(2,&quot;Enter at least one service&quot;),hourlyRate: z.string().refine((val) => !isNaN(Number(val)),{ message: &quot;Rate must be a number&quot;,}),availability: z.enum([&quot;available&quot;,&quot;limited&quot;,&quot;unavailable&quot;]),enhancedProfile: z.boolean().transform(val => !!val),website: z.string().url(&quot;Please enter a valid URL&quot;).or(z.string().length(0)).optional(),};); export function ServiceProviderRegistrationForm($1) { const { user } = useAuth(); const [isSubmitting,setIsSubmitting] = useState(false); const [serviceTags,setServiceTags] = useState([]); const [isGenerating,setIsGenerating] = useState(false); const [generatedContent,setGeneratedContent] = useState(null); const [uploadedAvatar,setUploadedAvatar] = useState(null); const form = useForm({ resolver: zodResolver(serviceProfileSchema),defaultValues: { name: user?.displayName || &quot;,title: &quot;,bio: &quot;,location: &quot;,services: &quot;,hourlyRate: &quot;,availability: &quot;available&quot;,enhancedProfile: false,website: &quot;,},};); const handleAddService = (props) => { const serviceInput = form.getValues(&quot;services&quot;); if (serviceInput && !serviceTags.includes(serviceInput)) { setServiceTags([...serviceTags,serviceInput]); form.setValue(&quot;services&quot;,&quot;)} }; const handleRemoveService = (props) => {setServiceTags(serviceTags.filter((s) => s !== service))};; const handleServiceKeyPress = (props) => { if (e.key === &quot;Enter&quot;) { e.preventDefault(); handleAddService()} }; const handleAvatarUpload = (props) => { const file = e.target.files?.[0]; if (file) { const reader = new FileReader(); reader.onloadend = () => { setUploadedAvatar(reader.result)}; reader.readAsDataURL(file)} }; const generateEnhancedProfile = async () => { const formData = form.getValues(); if (!formData.bio || formData.bio.length < 20) { toast({ title: &quot;More information needed&quot;,description: &quot;Please provide at least a detailed bio before generating enhanced content.&quot;,}); return} try { setIsGenerating(true); const { data,error } = await supabase.functions.invoke(&apos;service-profile-enhancer&apos;,{ body: { providerData: { name: formData.name,title: formData.title,bio: formData.bio,services: serviceTags,location: formData.location };); if (error) {throw new Error(error.message)} setGeneratedContent(data); toast({title: &quot;Enhanced Profile Generated&quot;,description: &quot;AI has created a professional bio and suggested additional services for your profile.&quot;,})} catch (error) { toast({ title: &quot;Generation failed&quot;,description: error.message || &quot;There was an error generating your enhanced profile. Please try again.&quot;,variant: &quot;destructive&quot;,})} finally {setIsGenerating(false)} }; const applyGeneratedContent = (props) => { if (generatedContent) { form.setValue(&quot;bio&quot;,generatedContent.summary); if (generatedContent.services && generatedContent.services.length > 0) { const newServices = generatedContent.services.filter(service => typeof service === &apos;string&apos; && service && !serviceTags.includes(service)); if (newServices.length > 0) { setServiceTags([...serviceTags,...newServices])} } } }; const onSubmit = async (values) => { if (serviceTags.length === 0) { toast({ title: &quot;Services required&quot;,description: &quot;Please add at least one service to your profile.&quot;,variant: &quot;destructive&quot;,};); return} setIsSubmitting(true); try { if (!user?.id) { throw new Error(&quot;User not authenticated&quot;)} let finalServices = serviceTags; if (values.enhancedProfile && !generatedContent) { try { const { data: aiData } = await supabase.functions.invoke(&apos;service-profile-enhancer&apos;,{ body: { providerData: { name: values.name,title: values.title,bio: values.bio,services: serviceTags,location: values.location };); if (aiData) {finalSummary = aiData.summary || values.bio; const aiServices = aiData.services || []; finalServices = [...new Set([...serviceTags,...aiServices])]} } catch (error) { else if (generatedContent) { finalSummary = generatedContent.summary; finalServices = [...new Set([...serviceTags,...generatedContent.services])]} const {data: userData} = await supabase.auth.getUser(); const userEmail = userData.user?.email; const {data: profileData,error} = await supabase .from(&apos;profiles&apos;) .update({display_name: values.name,bio: finalSummary,user_type: &quot;creator&quot;,profile_complete: true,updated_at: new Date().toISOString(),headline: values.title,.eq(&apos;id&apos;,user.id) .select(); if (error) throw error; if (userEmail && values.enhancedProfile) { try { await supabase.functions.invoke(&apos;send-email&apos;,{ body: { to: userEmail,subject: &quot;Your Zion Service Profile Is Ready&quot;,html: ` <div style=&quot;font-family: Arial,sans-serif; max-width: 600px; margin: 0 auto;&quot;> <h2 style=&quot;color: #6D28D9;&quot;>Service Profile Created!</h2> <p>Your service provider profile has been successfully created and published.</p>&apos;; <p>We&apos;ve enhanced your profile with AI to help you stand out to potential clients.</p> <p>You can now start receiving service requests and connecting with clients.</p> <div style=&quot;margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;&quot;> <p style=&quot;color: #666; font-size: 12px;&quot;>© ${new Date().getFullYear()} Zion Marketplace</p> </div> </div> ` } })} catch (emailError) { toast({ title: &quot;Profile Created Successfully&quot;,description: &quot;Your service provider profile has been published and is now visible in the directory.&quot;,}); setTimeout(() => {window.location.href = &quot;/service-dashboard&quot;},1500)} catch (error) { toast({ title: &quot;Error Creating Profile&quot;,description: error.message || &quot;There was an error creating your profile. Please try again.&quot;,variant: &quot;destructive&quot;,})} finally {setIsSubmitting(false)} }; return ( <div className=&quot;min-h-screen bg-white&quot;> <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;> <CardHeader> <CardTitle className=&quot;text-2xl text-white&quot;>Create Your Service Provider Profile</CardTitle> <CardDescription className=&quot;text-zion-slate&quot;> Showcase your services and expertise to potential clients. </CardDescription> </CardHeader> <Form {...form}> <form onSubmit={form.handleSubmit(onSubmit)}> <CardContent className=&quot;space-y-8&quot;> {} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-lg font-medium text-white&quot;>Basic Information</h3> <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;> <div className=&quot;col-span-1&quot;> <FormField control={form.control} name=&quot;name&quot; render={({ field }) => (<FormItem> <FormLabel className=&quot;text-zion-slate-light&quot;>Full Name</FormLabel> <FormControl> <div className=&quot;relative&quot;> <UserRound className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; /> <Input className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot; placeholder=&quot;Your full name&quot; {...field} /> </div> </FormControl> <FormMessage className=&quot;text-red-400&quot; /> </FormItem>)}/> </div> <div className=&quot;col-span-1&quot;> <FormField control={form.control} name=&quot;title&quot; render={({ field }) => (<FormItem> <FormLabel className=&quot;text-zion-slate-light&quot;>Business/Service Name</FormLabel> <FormControl> <div className=&quot;relative&quot;> <Briefcase className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; /> <Input className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot; placeholder=&quot;e.g.,Creative Design Studio&quot; {...field} /> </div> </FormControl> <FormMessage className=&quot;text-red-400&quot; /> </FormItem>)}/> </div> <div className=&quot;col-span-1&quot;> <FormField control={form.control} name=&quot;location&quot; render={({ field }) => (<FormItem> <FormLabel className=&quot;text-zion-slate-light&quot;>Location</FormLabel> <FormControl> <div className=&quot;relative&quot;> <MapPin className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; /> <Input className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot; placeholder=&quot;City,State/Province,Country&quot; {...field} /> </div> </FormControl> <FormMessage className=&quot;text-red-400&quot; /> </FormItem>)}/> </div> <div className=&quot;col-span-1&quot;> <FormField control={form.control} name=&quot;website&quot; render={({ field }) => (<FormItem> <FormLabel className=&quot;text-zion-slate-light&quot;>Website (optional)</FormLabel> <FormControl> <div className=&quot;relative&quot;> <Globe className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; /> <Input className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot; placeholder=&quot;https: </div> </FormControl> <FormMessage className=&quot;text-red-400&quot; /> </FormItem>)}/> </div> </div> {} <div className=&quot;space-y-2&quot;> <FormLabel className=&quot;text-zion-slate-light&quot;>Profile Picture</FormLabel> <div className=&quot;flex items-center gap-6&quot;> <div className=&quot;relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light&quot;> {uploadedAvatar ? (<AspectRatio ratio={1 / 1}> <img loading=&quot;lazy&quot; src={uploadedAvatar} alt=&quot;Avatar preview&quot; className=&quot;w-full h-full object-cover&quot; /> </AspectRatio>) : (<div className=&quot;flex items-center justify-center h-full&quot;> <UserRound className=&quot;h-10 w-10 text-zion-slate opacity-50&quot; /> </div> )} </div> <label className=&quot;flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors&quot;> <Upload className=&quot;mr-2 h-4 w-4&quot; /> <span>Upload Photo</span> <input type=&quot;file&quot; accept=&quot;image} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-lg font-medium text-white&quot;>Service Description</h3> <FormField control={form.control} name=&quot;bio&quot; render={({ field }) => (<FormItem> <FormLabel className=&quot;text-zion-slate-light&quot;>About Your Services</FormLabel> <FormControl> <Textarea className=&quot;h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white&quot; placeholder=&quot;Describe your services,expertise,and what sets you apart from others...&quot; {...field} /> </FormControl> <FormMessage className=&quot;text-red-400&quot; /> <FormDescription className=&quot;text-zion-slate&quot;> {field.value?.length || 0}/1000 characters </FormDescription> </FormItem>)}/> {} <FormField control={form.control} name=&quot;enhancedProfile&quot; render={({ field }) => (<FormItem className=&quot;flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md&quot;> <div className=&quot;space-y-0.5&quot;> <FormLabel className=&quot;text-white flex items-center&quot;> <Sparkles className=&quot;w-4 h-4 mr-2 text-zion-purple&quot; /> AI Profile Enhancement </FormLabel> <FormDescription className=&quot;text-zion-slate-light&quot;> Let AI help optimize your service description for better visibility and client engagement </FormDescription> </div> <FormControl> <Switch aria-label=&quot;AI profile enhancement&quot; checked={field.value} onCheckedChange={field.onChange} className=&quot;data-[state=checked]:bg-zion-purple&quot; /> </FormControl> </FormItem>)}/> {form.watch(&quot;enhancedProfile&quot;) && (<div className=&quot;flex justify-end&quot;> <Button type=&quot;button&quot; variant=&quot;outline&quot; className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot; onClick={generateEnhancedProfile} disabled={isGenerating}> <Sparkles className=&quot;mr-2 h-4 w-4&quot; /> {isGenerating ? &quot;Generating...&quot; : &quot;Generate Enhanced Profile&quot;} </Button> </div> )} {} {generatedContent && (<div className=&quot;bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4&quot;> <div className=&quot;flex items-center justify-between mb-3&quot;> <h4 className=&quot;text-white font-medium flex items-center&quot;> <Sparkles className=&quot;w-4 h-4 mr-2 text-zion-purple&quot; /> AI-Generated Content </h4> <Button type=&quot;button&quot; size=&quot;sm&quot; className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot; onClick={applyGeneratedContent}> <Check className=&quot;mr-1 h-3 w-3&quot; /> Apply </Button> </div> <div className=&quot;space-y-4&quot;> <div> <h5 className=&quot;text-zion-slate-light text-sm mb-1&quot;>Professional Summary</h5> <p className=&quot;text-zion-slate italic&quot;>{generatedContent.summary}</p> </div> {generatedContent.services && generatedContent.services.length > 0 && (<div> <h5 className=&quot;text-zion-slate-light text-sm mb-1&quot;>Suggested Services</h5> <div className=&quot;flex flex-wrap gap-2 mt-1&quot;> {generatedContent.services.map((service,index) => (<Badge key={index} className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none&quot;> {service} </Badge>))} </div> </div> )} </div> </div> )} </div> <Separator className=&quot;bg-zion-blue-light/50&quot; /> {} <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;> {} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-lg font-medium text-white&quot;>Services Offered</h3> <FormField control={form.control} name=&quot;services&quot; render={({ field }) => (<FormItem> <FormLabel className=&quot;text-zion-slate-light&quot;>Services</FormLabel> <div className=&quot;flex gap-2&quot;> <FormControl> <Input className=&quot;flex-1 bg-zion-blue border-zion-blue-light text-white&quot; placeholder=&quot;Add a service...&quot; {...field} onKeyDown={handleServiceKeyPress} /> </FormControl> <Button type=&quot;button&quot; variant=&quot;outline&quot; className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot; onClick={handleAddService}> Add </Button> </div> <FormDescription className=&quot;text-zion-slate&quot;> Press Enter or click Add to include a service </FormDescription> <FormMessage className=&quot;text-red-400&quot; /> </FormItem>)}/> <div className=&quot;flex flex-wrap gap-2 mt-2&quot;> {serviceTags.map(service => (<Badge key={service} className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1&quot;> {service} <button type=&quot;button&quot; onClick={() => handleRemoveService(service)} className=&quot;rounded-full hover:bg-zion-purple-dark/20 p-0.5&quot;> <X className=&quot;h-3 w-3&quot; /> </button> </Badge>))} {serviceTags.length === 0 && (<p className=&quot;text-zion-slate text-sm italic&quot;>No services added yet</p>)} </div> </div> {} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-lg font-medium text-white&quot;>Pricing & Availability</h3> <FormField control={form.control} name=&quot;hourlyRate&quot; render={({ field }) => (<FormItem> <FormLabel className=&quot;text-zion-slate-light&quot;>Starting Rate (USD)</FormLabel> <FormControl> <div className=&quot;relative&quot;> <span className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot;>$</span> <Input className=&quot;pl-8 bg-zion-blue border-zion-blue-light text-white&quot; placeholder=&quot;e.g.,85&quot; {...field} /> </div> </FormControl> <FormDescription className=&quot;text-zion-slate&quot;> Your base hourly or project rate </FormDescription> <FormMessage className=&quot;text-red-400&quot; /> </FormItem>)}/> <FormField control={form.control} name=&quot;availability&quot; render={({ field }) => (<FormItem className=&quot;space-y-4&quot;> <FormLabel className=&quot;text-zion-slate-light&quot;>Current Status</FormLabel> <FormControl> <div className=&quot;space-y-2&quot;> <div className=&quot;flex items-center space-x-2&quot;> <input type=&quot;radio&quot; id=&quot;available&quot; value=&quot;available&quot; checked={field.value === &quot;available&quot;} onChange={() => field.onChange(&quot;available&quot;)} className=&quot;text-zion-purple focus:ring-zion-purple&quot;/> <label htmlFor=&quot;available&quot; className=&quot;text-white flex items-center gap-2&quot;> <div className=&quot;h-2 w-2 rounded-full bg-green-500&quot;></div> Available for Work </label> </div> <div className=&quot;flex items-center space-x-2&quot;> <input type=&quot;radio&quot; id=&quot;limited&quot; value=&quot;limited&quot; checked={field.value === &quot;limited&quot;} onChange={() => field.onChange(&quot;limited&quot;)} className=&quot;text-zion-purple focus:ring-zion-purple&quot;/> <label htmlFor=&quot;limited&quot; className=&quot;text-white flex items-center gap-2&quot;> <div className=&quot;h-2 w-2 rounded-full bg-yellow-500&quot;></div> Limited Availability </label> </div> <div className=&quot;flex items-center space-x-2&quot;> <input type=&quot;radio&quot; id=&quot;unavailable&quot; value=&quot;unavailable&quot; checked={field.value === &quot;unavailable&quot;} onChange={() => field.onChange(&quot;unavailable&quot;)} className=&quot;text-zion-purple focus:ring-zion-purple&quot;/> <label htmlFor=&quot;unavailable&quot; className=&quot;text-white flex items-center gap-2&quot;> <div className=&quot;h-2 w-2 rounded-full bg-red-500&quot;></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className=&quot;text-red-400&quot; /> </FormItem>)}/> </div> </div> </CardContent> <CardFooter className=&quot;border-t border-zion-blue-light pt-6&quot;> <div className=&quot;flex flex-col sm:flex-row gap-4 w-full sm:justify-between&quot;> <Button type=&quot;button&quot; variant=&quot;outline&quot; className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;> Save as Draft </Button> <Button type=&quot;submit&quot; className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot; disabled={isSubmitting}> {isSubmitting ? &quot;Creating Profile...&quot; : &quot;Create Service Profile&quot;} </Button> </div> </CardFooter> </form> </Form> </Card> </div> )} export default ServiceProviderRegistrationForm; </FormField> </FormField> </FormField> </FormField>;&apos;;&apos;;
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { X, Sparkles, Upload, Check, Briefcase, MapPin, UserRound, Globe import { toast } from "@/components/ui/use-toast";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {AspectRatio} from "@/components/ui/aspect-ratio";
// Define form schema;
const serviceProfileSchema = z.object({;
    "name": "z.string().min(2", "Name must be at least 2 characters long"),;
    "title": "z.string().min(5", "Business name/title is required"),;
    "bio": "z.string().min(50", "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),;
    "location": "z.string().min(2", "Location is required"),;
    "services": "z.string().min(2", "Enter at least one service"),;
    "hourlyRate": "z.string().refine((val) => !isNaN(Number(val))", {;
        "message": "Rate must be a number",;
    }),;
    "availability": "z.enum(["available"", "limited", "unavailable"]),;
    "enhancedProfile": "z.boolean().transform(val => !!val)",;
    "website": "z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()",;
});
export function ServiceProviderRegistrationForm("props": "any) {;
    const { user "} = useAuth();
// Define form schema
const serviceProfileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    title: z.string().min(5, "Business name/title is required"),
    bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),
    location: z.string().min(2, "Location is required"),
    services: z.string().min(2, "Enter at least one service"),
    hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
        message: "Rate must be a number",
    }),
    availability: z.enum(["available", "limited", "unavailable"]),
    enhancedProfile: z.boolean().transform(val => !!val),
    website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional(),
}
    );
export function ServiceProviderRegistrationForm(props: any) {
    "name": z.string().min(2, "Name must be at least 2 characters long"),
    "title": z.string().min(5, "Business name/title is required"),
    "bio": z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),
    "location": z.string().min(2, "Location is required"),
    "services": z.string().min(2, "Enter at least one service"),
    "hourlyRate": z.string().refine((val) => !isNaN(Number(val)), {
        "message": "Rate must be a number"}),
    "availability": z.enum(["available", "limited", "unavailable"]),
    "enhancedProfile": z.boolean().transform(val => !!val),
    "website": z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()};);
export function ServiceProviderRegistrationForm($1) {
    const { user } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serviceTags, setServiceTags] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState(null);
    const [uploadedAvatar, setUploadedAvatar] = useState(null);
    // Initialize form with default values;
    const form = useForm({;
        "resolver": "zodResolver(serviceProfileSchema)",;
        "defaultValues": "{;
            "name": user?.displayName || """,;
            "title": "",;
            "bio": "",;
            "location": "",;
            "services": "",;
            "hourlyRate": "",;
            "availability": "available",;
            "enhancedProfile": "false",;
            "website": "",;
        },;
    });
    // Handle adding service tags;
    const handleAddService = ("props": "any) => {;
        const serviceInput = form.getValues("services");
        if (serviceInput && !serviceTags.includes(serviceInput)) {;
            setServiceTags([...serviceTags", serviceInput]);
            form.setValue("services", "")}
    };
    // Handle removing service tags;
    const handleRemoveService = ("props": "any) => {setServiceTags(serviceTags.filter((s) => s !== service))"};
    // Handle key press in services input (add on enter);
    const handleServiceKeyPress = ("props": "any) => {;
        if (e.key === "Enter") {;
    // Initialize form with default values
    const form = useForm({
        resolver: zodResolver(serviceProfileSchema),
        defaultValues: {
            name: user?.displayName || "",
            title: "",
            bio: "",
            location: "",
            services: "",
            hourlyRate: "",
            availability: "available",
            enhancedProfile: false,
            website: "",
        },
    }
    );
        "resolver": zodResolver(serviceProfileSchema),
        "defaultValues": {
            name: user?.displayName || ",
            "title": ",
            "bio": ",
            "location": ",
            "services": ",
            "hourlyRate": ",
            "availability": "available",
            "enhancedProfile": false,
            "website": "}};);
    // Handle adding service tags
    const handleAddService = (props) => {
        const serviceInput = form.getValues("services");
        if (serviceInput && !serviceTags.includes(serviceInput)) {
            setServiceTags([...serviceTags, serviceInput]);
            form.setValue("services", ")}
    };
    // Handle removing service tags
    const handleRemoveService = (props) => {setServiceTags(serviceTags.filter((s) => s !== service))};
    // Handle key press in services input (add on enter)
    const handleServiceKeyPress = (props) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddService()"}
    };
    // Handle avatar upload;
    const handleAvatarUpload = ("props": "any) => {;
    // Handle avatar upload
    const handleAvatarUpload = (props) => {
        const file = e.target.files?.[0];
        if (file) {;
            const reader = new FileReader();
            reader.onloadend = () => {;
                setUploadedAvatar(reader.result)"};
            reader.readAsDataURL(file)}
    };
    // Generate enhanced profile with AI;
    const generateEnhancedProfile = async () => {;
        const formData = form.getValues();
        if (!formData.bio || formData.bio.length < 20) {;
            toast({;
                "title": "More information needed",;
                "description": "Please provide at least a detailed bio before generating enhanced content.",;
            });
        if (!formData.bio || formData.bio.length < 20) {
            toast({
                title: "More information needed",
                description: "Please provide at least a detailed bio before generating enhanced content.",
            }
    );
                "title": "More information needed",
                "description": "Please provide at least a detailed bio before generating enhanced content."});
            return}
        try {;
            setIsGenerating(true);
            // Call the Supabase Edge Function;
            const { data, error } = await supabase.functions.invoke('service-profile-enhancer', {;
                "body": "{;
                    "providerData": {;
                        "name": formData.name",;
                        "title": "formData.title",;
                        "bio": "formData.bio",;
                        "services": "serviceTags",;
                        "location": "formData.location;
;
            "});
            if (error) {throw new Error(error.message)}
            setGeneratedContent(data);
            toast({"title": "Enhanced Profile Generated",;
                "description": "AI has created a professional bio and suggested additional services for your profile."})}
        catch (error) {;
            // // // // // // // console.error("Error generating enhanced "profile":", error);
            toast({;
                "title": "Generation failed",;
                "description": "error.message || "There was an error generating your enhanced profile. Please try again."",;
                "variant": "destructive",;
            })}
            // Call the Supabase Edge Function
            const { data, error } = await supabase.functions.invoke('service-profile-enhancer', {
                "body": {
                    providerData: {
                        name: formData.name,
                        title: formData.title,
                        bio: formData.bio,
                        services: serviceTags,
                        location: formData.location
            }
    );
                        "title": formData.title,
                        "bio": formData.bio,
                        "services": serviceTags,
                        "location": formData.location
            };);
            if (error) {throw new Error(error.message)}
            setGeneratedContent(data);
            toast({"title": "Enhanced Profile Generated",
                "description": "AI has created a professional bio and suggested additional services for your profile."})} catch (error) {
            // // // // // // // console.error("Error generating enhanced "profile": ", error);
            toast({
                title: "Generation failed",
                description: error.message || "There was an error generating your enhanced profile. Please try again.",
                variant: "destructive",
                }
    );
        finally {setIsGenerating(false)}
                "title": "Generation failed",
                "description": error.message || "There was an error generating your enhanced profile. Please try again.",
                "variant": "destructive"})} finally {setIsGenerating(false)}
    };
    // Apply generated content to form;
    const applyGeneratedContent = ("props": "any) => {;
        if (generatedContent) {;
            form.setValue("bio"", generatedContent.summary);
            if (generatedContent.services && generatedContent.services.length > 0) {;
    // Apply generated content to form
    const applyGeneratedContent = (props) => {
        if (generatedContent) {
            form.setValue("bio", generatedContent.summary);
            if (generatedContent.services && generatedContent.services.length > 0) {
                const newServices = generatedContent.services.filter(service => typeof service === 'string' && service && !serviceTags.includes(service));
                if (newServices.length > 0) {;
                    setServiceTags([...serviceTags, ...newServices])}
            }
        }
    };
    // Handle form submission;
    const onSubmit = async (values) => {;
        if (serviceTags.length === 0) {;
            toast({;
                "title": "Services required",;
                "description": "Please add at least one service to your profile.",;
                "variant": "destructive",;
            });
    // Handle form submission
    const onSubmit = async (values) => {
        if (serviceTags.length === 0) {
            toast({
                title: "Services required",
                description: "Please add at least one service to your profile.",
                variant: "destructive",
            }
    );
                "title": "Services required",
                "description": "Please add at least one service to your profile.",
                "variant": "destructive"};);
            return}
        setIsSubmitting(true);
        try {;
            // For actual implementation with Supabase;
            if (!user?.id) {;
                throw new Error("User not authenticated")}
            // Enhance profile if not already done;
            let finalServices = serviceTags;
            if (values.enhancedProfile && !generatedContent) {;
                try {;
                    const { "data": "aiData "} = await supabase.functions.invoke('service-profile-enhancer', {;
                        "body": "{;
                            "providerData": {;
                                "name": values.name",;
                                "title": "values.title",;
                                "bio": "values.bio",;
                                "services": "serviceTags",;
                                "location": "values.location;
;
                    "});
            if (values.enhancedProfile && !generatedContent) {
                try {
                    const { "data": aiData } = await supabase.functions.invoke('service-profile-enhancer', {
                        "body": {
                            providerData: {
                                name: values.name,
                                title: values.title,
                                bio: values.bio,
                                services: serviceTags,
                                location: values.location
                    }
    );
                                "title": values.title,
                                "bio": values.bio,
                                "services": serviceTags,
                                "location": values.location
                    };);
                    if (aiData) {finalSummary = aiData.summary || values.bio;
                        // Merge AI suggested services with user-provided services;
                        const aiServices = aiData.services || [];
                        finalServices = [...new Set([...serviceTags, ...aiServices])]}
                }
                catch (error) {;
                    // // // // // // // console.error("Error enhancing "profile":", error);
                    // Continue with submission even if enhancement fails;
;
            else if (generatedContent) {;
                finalSummary = generatedContent.summary;
                finalServices = [...new Set([...serviceTags, ...generatedContent.services])]}
            // Get user email for notification;
            const {"data": "userData"} = await supabase.auth.getUser();
            const userEmail = userData.user?.email;
            // Create the service profile;
            const {"data": "profileData", error} = await supabase;
                .from('profiles');
                .update({"display_name": "values.name",;
                "bio": "finalSummary",;
                "user_type": "creator", // Set as service provider;
                "profile_complete": "true",;
                "updated_at": "new Date().toISOString()",;
                "headline": "values.title",;
                // Additional fields that might be in profiles table});
                .eq('id', user.id);
                } catch (error) {
                    // // // // // // // console.error("Error enhancing "profile": ", error);
                    // Continue with submission even if enhancement fails
            else if (generatedContent) {
                finalSummary = generatedContent.summary;
                finalServices = [...new Set([...serviceTags, ...generatedContent.services])]}
            // Get user email for notification
            const {"data": userData} = await supabase.auth.getUser();
            const userEmail = userData.user?.email;
            // Create the service profile
            const {"data": profileData, error} = await supabase
                .from('profiles')
                .update({"display_name": values.name,
                "bio": finalSummary,
                "user_type": "creator", // Set as service provider
                "profile_complete": true,
                "updated_at": new Date().toISOString(),
                "headline": values.title,
                // Additional fields that might be in profiles table};)
                .eq('id', user.id)
                .select();
            if (error);
                throw error;
            // Store service-specific data in service_profiles table;
            // (This assumes you have a service_profiles table in your database);
            /*;
            const {"error": "serviceError"} = await supabase;
              .from('service_profiles');
              .insert({"user_id": "user.id",;
                "services": "finalServices",;
                "hourly_rate": "Number(values.hourlyRate)",;
                "availability_status": "values.availability",;
                "location": "values.location",;
                "website": "values.website || null"});
;
            if (serviceError) throw serviceError;
            */;
            // Send notification email if available;
            if (userEmail && values.enhancedProfile) {;
                try {;
                    await supabase.functions.invoke('send-email', {;
                        "body": "{;
                            "to": userEmail",;
                            "subject": "Your Zion Service Profile Is Ready",;
                            "html": "`;
              <div style="font-"family": Arial", sans-serif; max-"width": "600px; "margin": 0 auto;">;
                <h2 style=""color": #6D28D9;">Service Profile Created!</h2>;
                <p>Your service provider profile has been successfully created and published.</p>;
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>;
                <p>You can now start receiving service requests and connecting with clients.</p>;
                <div style="margin-"top": 30px; padding-"top": 20px; border-"top": 1px solid #eee;">;
                  <p style=""color": #666; font-"size": 12px;">© ${new Date().getFullYear()"} Zion Marketplace</p>;
                </div>;
              </div>;
              `;
                        }
                    })}
                catch (emailError) {;
                    // // // // // // // console.error("Failed to send notification "email":", emailError);
                    // Continue with submission even if email fails;
;
            toast({;
                "title": "Profile Created Successfully",;
                "description": "Your service provider profile has been published and is now visible in the directory.",;
            });
            // Redirect to service provider dashboard or profile page;
            setTimeout(() => {window.location.href = "/service-dashboard"}, 1500)}
        catch (error) {;
            // // // // // // // console.error("Error creating "profile":", error);
            toast({;
                "title": "Error Creating Profile",;
                "description": "error.message || "There was an error creating your profile. Please try again."",;
                "variant": "destructive",;
            })}
        finally {setIsSubmitting(false)}
    };
    return (<div className="max-w-4xl mx-auto p-4 "md": "p-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle>;
          <CardDescription className="text-zion-slate">;
            Showcase your services and expertise to potential clients.;
          </CardDescription>;
        </CardHeader>;
        <Form {...form"}>;
          <form onSubmit={form.handleSubmit(onSubmit)}>;
            <CardContent className="space-y-8">;
              {/* Basic Information */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;
                <div className="grid grid-cols-1 "md": "grid-cols-2 gap-6">;
                  <div className="col-span-1">;
                    <FormField control={form.control"} name="name" render={({ field }) => (<FormItem>;
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="Your full name" {...field}  />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>)}/>;
                  </div>;
                  <div className="col-span-1">;
                    <FormField control={form.control} name="title" render={({ field }) => (<FormItem>;
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="e.g., Creative Design Studio" {...field}  />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>)}/>;
                  </div>;
                  <div className="col-span-1">;
                    <FormField control={form.control} name="location" render={({ field }) => (<FormItem>;
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="City, State/Province, Country" {...field}  />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>)}/>;
                  </div>;
                  <div className="col-span-1">;
                    <FormField control={form.control} name="website" render={({ field }) => (<FormItem>;
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder=""https": "//yourwebsite.com" {...field"}  />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>)}/>;
                  </div>;
                </div>;
                {/* Upload Avatar */}
                <div className="space-y-2">;
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>;
                  <div className="flex items-center gap-6">;
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;
                      {uploadedAvatar ? (<AspectRatio ratio={1 / 1}>;
                          <img loading="lazy" src={uploadedAvatar} alt="Avatar preview" className="w-full h-full object-cover"  />;
                        </AspectRatio>) : "(<div className="flex items-center justify-center h-full">;
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;
                        </div>)"}
                    </div>;
                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple "hover": "bg-zion-purple-dark text-white cursor-pointer transition-colors">;
                      <Upload className="mr-2 h-4 w-4" />;
                      <span>Upload Photo</span>;
                      <input type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload"}  />;
                    </label>;
                  </div>;
                  <p className="text-sm text-zion-slate">;
                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;
              <Separator className="bg-zion-blue-light/50" />;
              {/* Bio Section */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Service Description</h3>;
                <FormField control={form.control} name="bio" render={({ field }) => (<FormItem>;
                      <FormLabel className="text-zion-slate-light">About Your Services</FormLabel>;
                      <FormControl>;
                        <Textarea className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white" placeholder="Describe your services, expertise, and what sets you apart from others..." {...field} />;
                      </FormControl>;
                      <FormMessage className="text-red-400" />;
                      <FormDescription className="text-zion-slate">;
                        {field.value?.length || 0}/1000 characters;
                      </FormDescription>;
                    </FormItem>)}/>;
                {/* AI Enhancement Option */}
                <FormField control={form.control} name="enhancedProfile" render={({ field }) => (<FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;
                      <div className="space-y-0.5">;
                        <FormLabel className="text-white flex items-center">;
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className="text-zion-slate-light">;
                          Let AI help optimize your service description for better visibility and client engagement;
                        </FormDescription>;
                      </div>;
                      <FormControl>;
                        <Switch aria-label="AI profile enhancement" checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]: "bg-zion-purple" />;
                      </FormControl>;
                    </FormItem>)"}/>;
                {form.watch("enhancedProfile") && (<div className="flex justify-end">;
                    <Button type="button" variant="outline" className="border-zion-purple text-zion-purple "hover": "bg-zion-purple/10" onClick={generateEnhancedProfile"} disabled={isGenerating}>;
                      <Sparkles className="mr-2 h-4 w-4" />;
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}
                    </Button>;
                  </div>)}
;
                {/* Generated Content Display */}
                {generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">;
                    <div className="flex items-center justify-between mb-3">;
                      <h4 className="text-white font-medium flex items-center">;
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                        AI-Generated Content;
                      </h4>;
                      <Button type="button" size="sm" className="bg-zion-purple "hover": "bg-zion-purple-dark text-white" onClick={applyGeneratedContent"}>;
                        <Check className="mr-1 h-3 w-3" /> Apply;
                      </Button>;
                    </div>;
                    <div className="space-y-4">;
                      <div>;
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>;
                        <p className="text-zion-slate italic">{generatedContent.summary}</p>;
                      </div>;
                      {generatedContent.services && generatedContent.services.length > 0 && (<div>;
                          <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5>;
                          <div className="flex flex-wrap gap-2 mt-1">;
                            {generatedContent.services.map((service, index) => (<Badge key={index} className="bg-zion-purple/20 "hover": "bg-zion-purple/30 text-zion-purple border-none">;
                                {service"}
                              </Badge>))}
                          </div>;
                        </div>)}
                    </div>;
                  </div>)}
              </div>;
              <Separator className="bg-zion-blue-light/50" />;
              {/* Services and Availability */}
              <div className="grid grid-cols-1 "md": "grid-cols-2 gap-8">;
                {/* Services Section */"}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>;
                  <FormField control={form.control} name="services" render={({ field }) => (<FormItem>;
                        <FormLabel className="text-zion-slate-light">Services</FormLabel>;
                        <div className="flex gap-2">;
                          <FormControl>;
                            <Input className="flex-1 bg-zion-blue border-zion-blue-light text-white" placeholder="Add a service..." {...field} onKeyDown={handleServiceKeyPress}  />;
                          </FormControl>;
                          <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light "hover": "bg-zion-blue-light "hover":text-white" onClick={handleAddService"}>;
                            Add;
                          </Button>;
                        </div>;
                        <FormDescription className="text-zion-slate">;
                          Press Enter or click Add to include a service;
                        </FormDescription>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>)}/>;
                  <div className="flex flex-wrap gap-2 mt-2">;
                    {serviceTags.map(service => (<Badge key={service} className="bg-zion-purple/20 "hover": "bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1">;
                        {service"}
                        <button type="button" onClick={() => handleRemoveService(service)} className="rounded-full "hover": "bg-zion-purple-dark/20 p-0.5">;
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>))"}
                    {serviceTags.length === 0 && (<p className="text-zion-slate text-sm italic">No services added yet</p>)}
                  </div>;
                </div>;
                {/* Pricing and Availability Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>;
                  <FormField control={form.control} name="hourlyRate" render={({ field }) => (<FormItem>;
                        <FormLabel className="text-zion-slate-light">Starting Rate (USD)</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
                            <Input className="pl-8 bg-zion-blue border-zion-blue-light text-white" placeholder="e.g., 85" {...field}  />;
                          </div>;
                        </FormControl>;
                        <FormDescription className="text-zion-slate">;
                          Your base hourly or project rate;
                        </FormDescription>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>)}/>;
                  <FormField control={form.control} name="availability" render={({ field }) => (<FormItem className="space-y-4">;
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>;
                        <FormControl>;
                          <div className="space-y-2">;
                            <div className="flex items-center space-x-2">;
                              <input type="radio" id="available" value="available" checked={field.value === "available"} onChange={() => field.onChange("available")} className="text-zion-purple "focus": "ring-zion-purple"/>;
                              <label htmlFor="available" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;
                                Available for Work;
                              </label>;
                            </div>;
                            <div className="flex items-center space-x-2">;
                              <input type="radio" id="limited" value="limited" checked={field.value === "limited""} onChange={() => field.onChange("limited")} className="text-zion-purple "focus": "ring-zion-purple"/>;
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;
                                Limited Availability;
                              </label>;
                            </div>;
                            <div className="flex items-center space-x-2">;
                              <input type="radio" id="unavailable" value="unavailable" checked={field.value === "unavailable""} onChange={() => field.onChange("unavailable")} className="text-zion-purple "focus": "ring-zion-purple"/>;
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>;
                                Currently Unavailable;
                              </label>;
                            </div>;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>)"}/>;
                </div>;
              </div>;
            </CardContent>;
            <CardFooter className="border-t border-zion-blue-light pt-6">;
              <div className="flex flex-col "sm": "flex-row gap-4 w-full "sm":justify-between">;
                <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light "hover":bg-zion-blue-light "hover":text-white">;
                  Save as Draft;
                </Button>;
                <Button type="submit" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white" disabled={isSubmitting"}>;
                  {isSubmitting ? "Creating Profile..." : "Create Service Profile"}
                </Button>;
              </div>;
            </CardFooter>;
          </form>;
        </Form>;
      </Card>;
    </div>)}
;
export default ServiceProviderRegistrationForm;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>;
</FormField>
            // Store service-specific data in service_profiles table
            // (This assumes you have a service_profiles table in your database)
            /*
            const {"error": serviceError} = await supabase
              .from('service_profiles')
              .insert({user_id: user.id,
                services: finalServices,
                hourly_rate: Number(values.hourlyRate),
                availability_status: values.availability,
                location: values.location,
                website: values.website || null,}
    );
              .insert({"user_id": user.id,
                "services": finalServices,
                "hourly_rate": Number(values.hourlyRate),
                "availability_status": values.availability,
                "location": values.location,
                "website": values.website || null};);
            if (serviceError) throw serviceError;
            */
            // Send notification email if available
            if (userEmail && values.enhancedProfile) {
                try {
                    await supabase.functions.invoke('send-email', {
                        "body": {
                            to: userEmail,
                            "subject": "Your Zion Service Profile Is Ready",
                            "html": `
              <div style="font-family: Arial, sans-serif; max-"width": 600px; margin: 0 auto;">
                <h2 style="color: #6D28D9;">Service Profile Created!</h2>
                <p>Your service provider profile has been successfully created and published.</p>';
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>
                <p>You can now start receiving service requests and connecting with clients.</p>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Zion Marketplace</p>
                </div>
              </div>
              `
                        }
                    })} catch (emailError) {
                    // // // // // // // console.error("Failed to send notification "email": ", emailError);
                    // Continue with submission even if email fails
            toast({
                title: "Profile Created Successfully",
                description: "Your service provider profile has been published and is now visible in the directory.",
            }
    );
                "title": "Profile Created Successfully",
                "description": "Your service provider profile has been published and is now visible in the directory."});
            // Redirect to service provider dashboard or profile page
            setTimeout(() => {window.location.href = "/service-dashboard"}, 1500)} catch (error) {
            // // // // // // // console.error("Error creating "profile": ", error);
            toast({
                title: "Error Creating Profile",
                description: error.message || "There was an error creating your profile. Please try again.",
                variant: "destructive",
                }
    );
        finally {setIsSubmitting(false)}
    };
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6">
                "title": "Error Creating Profile",
                "description": error.message || "There was an error creating your profile. Please try again.",
                "variant": "destructive"})} finally {setIsSubmitting(false)}
    };
    return (
    <div className="min-h-screen bg-white">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle>
          <CardDescription className="text-zion-slate">
            Showcase your services and expertise to potential clients.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 "md": grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <FormField control={form.control} name="name" render={({ field }) => (<FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="Your full name" {...field}  />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>)}/>
                  </div>
                  <div className="col-span-1">
                    <FormField control={form.control} name="title" render={({ field }) => (<FormItem>
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="e.g., Creative Design Studio" {...field}  />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>)}/>
                  </div>
                  <div className="col-span-1">
                    <FormField control={form.control} name="location" render={({ field }) => (<FormItem>
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="City, State/Province, Country" {...field}  />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>)}/>
                  </div>
                  <div className="col-span-1">
                    <FormField control={form.control} name="website" render={({ field }) => (<FormItem>
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder=""https": //yourwebsite.com" {...field}  />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>)}/>
                  </div>
                </div>
                {/* Upload Avatar */}
                <div className="space-y-2">
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">
                      {uploadedAvatar ? (<AspectRatio ratio={1 / 1}>
                          <img loading="lazy" src={uploadedAvatar} alt="Avatar preview" className="w-full h-full object-cover"  />
                        </AspectRatio>) : (<div className="flex items-center justify-center h-full">
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />
                            </div>
  );
}
                    </div>
                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple "hover": bg-zion-purple-dark text-white cursor-pointer transition-colors">
                      <Upload className="mr-2 h-4 w-4" />
                      <span>Upload Photo</span>
                      <input type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload}  />
                    </label>
                  </div>
                  <p className="text-sm text-zion-slate">
                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.
                  </p>
                </div>
              </div>
              <Separator className="bg-zion-blue-light/50" />
              {/* Bio Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Service Description
                <FormField control={form.control} name="bio" render={({ field }) => (<FormItem>
                      <FormLabel className="text-zion-slate-light">About Your Services</FormLabel>
                      <FormControl>
                        <Textarea className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white" placeholder="Describe your services, expertise, and what sets you apart from others..." {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate">
                        {field.value?.length || 0}/1000 characters
                      </FormDescription>
                    </FormItem>)}/>
                {/* AI Enhancement Option */}
                <FormField control={form.control} name="enhancedProfile" render={({ field }) => (<FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">
                      <div className="space-y-0.5">
                        <FormLabel className="text-white flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                          AI Profile Enhancement
                        </FormLabel>
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your service description for better visibility and client engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch aria-label="AI profile enhancement" checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-zion-purple" />
                      </FormControl>
                    </FormItem>)}/>
                {form.watch("enhancedProfile") && (<div className="flex justify-end">
                    <Button type="button" variant="outline" className="border-zion-purple text-zion-purple "hover": bg-zion-purple/10" onClick={generateEnhancedProfile} disabled={isGenerating}>
                      <Sparkles className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}
                    </Button>
                      </div>
  );
}
                {/* Generated Content Display */}
                {generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                        AI-Generated Content
                      </h4>
                      <Button type="button" size="sm" className="bg-zion-purple "hover": bg-zion-purple-dark text-white" onClick={applyGeneratedContent}>
                        <Check className="mr-1 h-3 w-3" /> Apply
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>
                        <p className="text-zion-slate italic">{generatedContent.summary}</p>
                      </div>
                      {generatedContent.services && generatedContent.services.length > 0 && (<div>
                          <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {generatedContent.services.map((service, index) => (<Badge key={index} className="bg-zion-purple/20 "hover": bg-zion-purple/30 text-zion-purple border-none">
                                {service}
                              </Badge>))}
                          </div>
                            </div>
  );
}
                    </div>
                      </div>
  );
}
              </div>
              <Separator className="bg-zion-blue-light/50" />
              {/* Services and Availability */}
              <div className="grid grid-cols-1 "md": grid-cols-2 gap-8">
                {/* Services Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Services Offered
                  <FormField control={form.control} name="services" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Services</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input className="flex-1 bg-zion-blue border-zion-blue-light text-white" placeholder="Add a service..." {...field} onKeyDown={handleServiceKeyPress}  />
                          </FormControl>
                          <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light "hover": bg-zion-blue-light hover:text-white" onClick={handleAddService}>
                            Add
                          </Button>
                        </div>
                        <FormDescription className="text-zion-slate">
                          Press Enter or click Add to include a service
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>)}/>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {serviceTags.map(service => (<Badge key={service} className="bg-zion-purple/20 "hover": bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1">
                        {service}
                        <button type="button" onClick={() => handleRemoveService(service)} className="rounded-full "hover": bg-zion-purple-dark/20 p-0.5">
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>))}
                    {serviceTags.length === 0 && (<p className="text-zion-slate text-sm italic">No services added yet</p>)}
                  </div>
                </div>
                {/* Pricing and Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Pricing & Availability
                  <FormField control={form.control} name="hourlyRate" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Starting Rate (USD)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                            <Input className="pl-8 bg-zion-blue border-zion-blue-light text-white" placeholder="e.g., 85" {...field}  />
                          </div>
                        </FormControl>
                        <FormDescription className="text-zion-slate">
                          Your base hourly or project rate
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>)}/>
                  <FormField control={form.control} name="availability" render={({ field }) => (<FormItem className="space-y-4">
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="available" value="available" checked={field.value === "available"} onChange={() => field.onChange("available")} className="text-zion-purple "focus": ring-zion-purple"/>
                              <label htmlFor="available" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                Available for Work
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="limited" value="limited" checked={field.value === "limited"} onChange={() => field.onChange("limited")} className="text-zion-purple "focus": ring-zion-purple"/>
                              <label htmlFor="limited" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                Limited Availability
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="unavailable" value="unavailable" checked={field.value === "unavailable"} onChange={() => field.onChange("unavailable")} className="text-zion-purple "focus": ring-zion-purple"/>
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                Currently Unavailable
                              </label>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>)}/>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-zion-blue-light pt-6">
              <div className="flex flex-col "sm": flex-row gap-4 w-full sm:justify-between">
                <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                  Save as Draft
                </Button>
                <Button type="submit" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Profile..." : "Create Service Profile"}
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
        </div>
  );
}
export default ServiceProviderRegistrationForm;
</FormField>
</FormField>
</FormField>
</FormField>;';';
import React,{useState} from "react"; import {useForm} from "react-hook-form"; import {zodResolver} from "@hookform/resolvers/zod"; import {z} from "zod"; import {Button} from "@/components/ui/button"; import {Input} from "@/components/ui/input"; import {Textarea} from "@/components/ui/textarea"; import {Switch} from "@/components/ui/switch"; import {Badge} from "@/components/ui/badge"; import {Separator} from "@/components/ui/separator"; import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"; import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"; import { X,Sparkles,Upload,Check,Briefcase,MapPin,UserRound,Globe import { toast } from "@/components/ui/use-toast"; import {useAuth} from "@/hooks/useAuth"; import {supabase} from "@/integrations/supabase/client"; import {AspectRatio} from "@/components/ui/aspect-ratio"; const serviceProfileSchema = z.object({ name: z.string().min(2,"Name must be at least 2 characters long"),title: z.string().min(5,"Business name/title is required"),bio: z.string().min(50,"Bio must be at least 50 characters long").max(1000,"Bio cannot exceed 1000 characters"),location: z.string().min(2,"Location is required"),services: z.string().min(2,"Enter at least one service"),hourlyRate: z.string().refine((val) => !isNaN(Number(val)),{ message: "Rate must be a number",}),availability: z.enum(["available","limited","unavailable"]),enhancedProfile: z.boolean().transform(val => !!val),website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional(),};); export function ServiceProviderRegistrationForm($1) { const { user } = useAuth(); const [isSubmitting,setIsSubmitting] = useState(false); const [serviceTags,setServiceTags] = useState([]); const [isGenerating,setIsGenerating] = useState(false); const [generatedContent,setGeneratedContent] = useState(null); const [uploadedAvatar,setUploadedAvatar] = useState(null); const form = useForm({ resolver: zodResolver(serviceProfileSchema),defaultValues: { name: user?.displayName || ",title: ",bio: ",location: ",services: ",hourlyRate: ",availability: "available",enhancedProfile: false,website: ",},};); const handleAddService = (props) => { const serviceInput = form.getValues("services"); if (serviceInput && !serviceTags.includes(serviceInput)) { setServiceTags([...serviceTags,serviceInput]); form.setValue("services",")} }; const handleRemoveService = (props) => {setServiceTags(serviceTags.filter((s) => s !== service))};; const handleServiceKeyPress = (props) => { if (e.key === "Enter") { e.preventDefault(); handleAddService()} }; const handleAvatarUpload = (props) => { const file = e.target.files?.[0]; if (file) { const reader = new FileReader(); reader.onloadend = () => { setUploadedAvatar(reader.result)}; reader.readAsDataURL(file)} }; const generateEnhancedProfile = async () => { const formData = form.getValues(); if (!formData.bio || formData.bio.length < 20) { toast({ title: "More information needed",description: "Please provide at least a detailed bio before generating enhanced content.",}); return} try { setIsGenerating(true); const { data,error } = await supabase.functions.invoke('service-profile-enhancer',{ body: { providerData: { name: formData.name,title: formData.title,bio: formData.bio,services: serviceTags,location: formData.location };); if (error) {throw new Error(error.message)} setGeneratedContent(data); toast({title: "Enhanced Profile Generated",description: "AI has created a professional bio and suggested additional services for your profile.",})} catch (error) { toast({ title: "Generation failed",description: error.message || "There was an error generating your enhanced profile. Please try again.",variant: "destructive",})} finally {setIsGenerating(false)} }; const applyGeneratedContent = (props) => { if (generatedContent) { form.setValue("bio",generatedContent.summary); if (generatedContent.services && generatedContent.services.length > 0) { const newServices = generatedContent.services.filter(service => typeof service === 'string' && service && !serviceTags.includes(service)); if (newServices.length > 0) { setServiceTags([...serviceTags,...newServices])} } } }; const onSubmit = async (values) => { if (serviceTags.length === 0) { toast({ title: "Services required",description: "Please add at least one service to your profile.",variant: "destructive",};); return} setIsSubmitting(true); try { if (!user?.id) { throw new Error("User not authenticated")} let finalServices = serviceTags; if (values.enhancedProfile && !generatedContent) { try { const { data: aiData } = await supabase.functions.invoke('service-profile-enhancer',{ body: { providerData: { name: values.name,title: values.title,bio: values.bio,services: serviceTags,location: values.location };); if (aiData) {finalSummary = aiData.summary || values.bio; const aiServices = aiData.services || []; finalServices = [...new Set([...serviceTags,...aiServices])]} } catch (error) { else if (generatedContent) { finalSummary = generatedContent.summary; finalServices = [...new Set([...serviceTags,...generatedContent.services])]} const {data: userData} = await supabase.auth.getUser(); const userEmail = userData.user?.email; const {data: profileData,error} = await supabase .from('profiles') .update({display_name: values.name,bio: finalSummary,user_type: "creator",profile_complete: true,updated_at: new Date().toISOString(),headline: values.title,.eq('id',user.id) .select(); if (error) throw error; if (userEmail && values.enhancedProfile) { try { await supabase.functions.invoke('send-email',{ body: { to: userEmail,subject: "Your Zion Service Profile Is Ready",html: ` <div style="font-family: Arial,sans-serif; max-width: 600px; margin: 0 auto;"> <h2 style="color: #6D28D9;">Service Profile Created!</h2> <p>Your service provider profile has been successfully created and published.</p>'; <p>We've enhanced your profile with AI to help you stand out to potential clients.</p> <p>You can now start receiving service requests and connecting with clients.</p> <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;"> <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Zion Marketplace</p> </div> </div> ` } })} catch (emailError) { toast({ title: "Profile Created Successfully",description: "Your service provider profile has been published and is now visible in the directory.",}); setTimeout(() => {window.location.href = "/service-dashboard"},1500)} catch (error) { toast({ title: "Error Creating Profile",description: error.message || "There was an error creating your profile. Please try again.",variant: "destructive",})} finally {setIsSubmitting(false)} }; return ( <div className="min-h-screen bg-white"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle> <CardDescription className="text-zion-slate"> Showcase your services and expertise to potential clients. </CardDescription> </CardHeader> <Form {...form}> <form onSubmit={form.handleSubmit(onSubmit)}> <CardContent className="space-y-8"> {} <div className="space-y-4"> <h3 className="text-lg font-medium text-white">Basic Information</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div className="col-span-1"> <FormField control={form.control} name="name" render={({ field }) => (<FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative"> <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="Your full name" {...field} /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> </div> <div className="col-span-1"> <FormField control={form.control} name="title" render={({ field }) => (<FormItem> <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel> <FormControl> <div className="relative"> <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="e.g.,Creative Design Studio" {...field} /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> </div> <div className="col-span-1"> <FormField control={form.control} name="location" render={({ field }) => (<FormItem> <FormLabel className="text-zion-slate-light">Location</FormLabel> <FormControl> <div className="relative"> <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="City,State/Province,Country" {...field} /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> </div> <div className="col-span-1"> <FormField control={form.control} name="website" render={({ field }) => (<FormItem> <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel> <FormControl> <div className="relative"> <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input className="pl-10 bg-zion-blue border-zion-blue-light text-white" placeholder="https: </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> </div> </div> {} <div className="space-y-2"> <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel> <div className="flex items-center gap-6"> <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light"> {uploadedAvatar ? (<AspectRatio ratio={1 / 1}> <img loading="lazy" src={uploadedAvatar} alt="Avatar preview" className="w-full h-full object-cover" /> </AspectRatio>) : (<div className="flex items-center justify-center h-full"> <UserRound className="h-10 w-10 text-zion-slate opacity-50" /> </div> )} </div> <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className="mr-2 h-4 w-4" /> <span>Upload Photo</span> <input type="file" accept="image} <div className="space-y-4"> <h3 className="text-lg font-medium text-white">Service Description</h3> <FormField control={form.control} name="bio" render={({ field }) => (<FormItem> <FormLabel className="text-zion-slate-light">About Your Services</FormLabel> <FormControl> <Textarea className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white" placeholder="Describe your services,expertise,and what sets you apart from others..." {...field} /> </FormControl> <FormMessage className="text-red-400" /> <FormDescription className="text-zion-slate"> {field.value?.length || 0}/1000 characters </FormDescription> </FormItem>)}/> {} <FormField control={form.control} name="enhancedProfile" render={({ field }) => (<FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md"> <div className="space-y-0.5"> <FormLabel className="text-white flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI Profile Enhancement </FormLabel> <FormDescription className="text-zion-slate-light"> Let AI help optimize your service description for better visibility and client engagement </FormDescription> </div> <FormControl> <Switch aria-label="AI profile enhancement" checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-zion-purple" /> </FormControl> </FormItem>)}/> {form.watch("enhancedProfile") && (<div className="flex justify-end"> <Button type="button" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick={generateEnhancedProfile} disabled={isGenerating}> <Sparkles className="mr-2 h-4 w-4" /> {isGenerating ? "Generating..." : "Generate Enhanced Profile"} </Button> </div> )} {} {generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4"> <div className="flex items-center justify-between mb-3"> <h4 className="text-white font-medium flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI-Generated Content </h4> <Button type="button" size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick={applyGeneratedContent}> <Check className="mr-1 h-3 w-3" /> Apply </Button> </div> <div className="space-y-4"> <div> <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5> <p className="text-zion-slate italic">{generatedContent.summary}</p> </div> {generatedContent.services && generatedContent.services.length > 0 && (<div> <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5> <div className="flex flex-wrap gap-2 mt-1"> {generatedContent.services.map((service,index) => (<Badge key={index} className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"> {service} </Badge>))} </div> </div> )} </div> </div> )} </div> <Separator className="bg-zion-blue-light/50" /> {} <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {} <div className="space-y-4"> <h3 className="text-lg font-medium text-white">Services Offered</h3> <FormField control={form.control} name="services" render={({ field }) => (<FormItem> <FormLabel className="text-zion-slate-light">Services</FormLabel> <div className="flex gap-2"> <FormControl> <Input className="flex-1 bg-zion-blue border-zion-blue-light text-white" placeholder="Add a service..." {...field} onKeyDown={handleServiceKeyPress} /> </FormControl> <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" onClick={handleAddService}> Add </Button> </div> <FormDescription className="text-zion-slate"> Press Enter or click Add to include a service </FormDescription> <FormMessage className="text-red-400" /> </FormItem>)}/> <div className="flex flex-wrap gap-2 mt-2"> {serviceTags.map(service => (<Badge key={service} className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"> {service} <button type="button" onClick={() => handleRemoveService(service)} className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"> <X className="h-3 w-3" /> </button> </Badge>))} {serviceTags.length === 0 && (<p className="text-zion-slate text-sm italic">No services added yet</p>)} </div> </div> {} <div className="space-y-4"> <h3 className="text-lg font-medium text-white">Pricing & Availability</h3> <FormField control={form.control} name="hourlyRate" render={({ field }) => (<FormItem> <FormLabel className="text-zion-slate-light">Starting Rate (USD)</FormLabel> <FormControl> <div className="relative"> <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input className="pl-8 bg-zion-blue border-zion-blue-light text-white" placeholder="e.g.,85" {...field} /> </div> </FormControl> <FormDescription className="text-zion-slate"> Your base hourly or project rate </FormDescription> <FormMessage className="text-red-400" /> </FormItem>)}/> <FormField control={form.control} name="availability" render={({ field }) => (<FormItem className="space-y-4"> <FormLabel className="text-zion-slate-light">Current Status</FormLabel> <FormControl> <div className="space-y-2"> <div className="flex items-center space-x-2"> <input type="radio" id="available" value="available" checked={field.value === "available"} onChange={() => field.onChange("available")} className="text-zion-purple focus:ring-zion-purple"/> <label htmlFor="available" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-green-500"></div> Available for Work </label> </div> <div className="flex items-center space-x-2"> <input type="radio" id="limited" value="limited" checked={field.value === "limited"} onChange={() => field.onChange("limited")} className="text-zion-purple focus:ring-zion-purple"/> <label htmlFor="limited" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-yellow-500"></div> Limited Availability </label> </div> <div className="flex items-center space-x-2"> <input type="radio" id="unavailable" value="unavailable" checked={field.value === "unavailable"} onChange={() => field.onChange("unavailable")} className="text-zion-purple focus:ring-zion-purple"/> <label htmlFor="unavailable" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-red-500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> </div> </div> </CardContent> <CardFooter className="border-t border-zion-blue-light pt-6"> <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between"> <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"> Save as Draft </Button> <Button type="submit" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" disabled={isSubmitting}> {isSubmitting ? "Creating Profile..." : "Create Service Profile"} </Button> </div> </CardFooter> </form> </Form> </Card> </div> )} export default ServiceProviderRegistrationForm; </FormField> </FormField> </FormField> </FormField>;';';