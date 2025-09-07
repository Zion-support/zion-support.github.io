/* eslint-disable */
 const formSchema = z.object ({;
  title: z.string () .min (3, "Title must be at least 3 characters");
keyFeatures: z.string ();
targetAudience: z.string () ;
});
const handleSubmit = async (data: FormData) => {;
  setIsLoading (true);
try {;
  const {;
  data: response, error ;
}= await supabase.functions.invoke ('generate-service-description', {;
  body: {;
  title: data.title;
keyFeatures: data.keyFeatures;
targetAudience: data.targetAudience ;
}
});
if (error) {;
  throw new Error (error.message) ;
}if (response && (response as any) .error) {;
  throw new Error ( (response as any) .error) ;'
}''
}catch (error) {';''
  logErrorToProduction ('Error generating description:', {;
  data: error ;
});
toast ({;
}finally {;
  setIsLoading (false) ;
}"
};""
>Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";""
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";""
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";""
}/> <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > {";""
  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin" /> Generating Description... </>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Description </>) ;'"
}</Button> </form> </Form> </CardContent> </Card>) ;'"'"
}'"'"'"