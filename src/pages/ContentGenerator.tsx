 export default function ContentGenerator () {
  const {
  user, isLoading 
}= useAuth ();
const router = useRouter ();
const [contentType, setContentType] = useState<'blog' | 'newsletter' | 'serviceDescription' | 'faq'> ('blog');
const [customPrompt, setCustomPrompt] = useState ('');
const [topic, setTopic] = useState ('');
const [keywords, setKeywords] = useState ('');
const [autoPublish, setAutoPublish] = useState (false);
const [includeImage, setIncludeImage] = useState (true);
const [isGenerating, setIsGenerating] = useState (false);
const [previewContent, setPreviewContent] = useState<any> (null);
const [testEmail, setTestEmail] = useState ('');
useEffect ( () => {
  if (!isLoading && !user) {
  
}
}, [user, isLoading, router]);
const generateContent = async () => {
  setIsGenerating (true);
setPreviewContent (null);
try {
  const keywordsArray = keywords.split () .map (k => k.trim () ) .filter (k => k.length > 0);
const {
  data, error 
}= await supabase.functions.invoke ('generate-seo-content', {
  body: {
  contentType;
userPrompt: customPrompt || topic, //Use customPrompt if available, else topic keywords: keywordsArray;
//autoPublish and includeImage are not explicitly used by 'generate-seo-content'//but we can leave them here, the backend will ignore them if not needed. autoPublish;
includeImage: contentType === 'blog'? includeImage : false 
}
});
}finally {
  setIsGenerating (false) 
}
};
const sendTestNewsletter = async () => {
  if (!testEmail) {
  
}try {
  const {
  data, error 
}= await supabase.functions.invoke ('send-newsletter', {
  body: {
  subject: previewContent.subject;
previewText: previewContent.previewText;
body: previewContent.body;
testMode: true;
testEmail 
}
});
}
};
//Check if user is still loading if (isLoading) {
  return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading...</div> </div> </> return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12" > <div className="container mx-auto px-4" > <h1 className="text-3xl font-bold text-white mb-8" >Content Generator</h1> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" > <div className="lg:col-span-1" > <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardHeader> <CardTitle className="text-white" >Content Settings</CardTitle> <CardDescription className="text-zion-slate-light" > Configure what type of content you want to generate. </CardDescription> </CardHeader> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="blog" className="text-white" >Blog Post</SelectItem> <SelectItem value="newsletter" className="text-white" >Email Newsletter</SelectItem> <SelectItem value="serviceDescription" className="text-white" >Service Description</SelectItem> <SelectItem value="faq" className="text-white" >FAQ</SelectItem> </SelectContent> </Select> </div> <div className="space-y-2" > <Label htmlFor="topic" className="text-white" >Main Topic /User Prompt</Label> <Input /> </div> <div className="space-y-2" > <Label htmlFor="keywords" className="text-white" >Keywords (Optional, comma-separated) </Label> <Input /> </div> <div className="space-y-2" > <Label htmlFor="customPrompt" className="text-white" >Detailed Instructions / Custom Prompt (Optional) </Label> <Textarea /> </div> {
  contentType === 'blog' && (<> <div className="flex items-center justify-between" > <Label htmlFor="autoPublish" className="text-white" >Auto-Publish</Label> <Switch id="autoPublish" checked= {
  autoPublish 
}onCheckedChange= {
  setAutoPublish 
}/> </div> <div className="flex items-center justify-between" > <Label htmlFor="includeImage" className="text-white" >Generate Image Prompt</Label> <Switch /> </div> </>) 
}<Input id="testEmail" type="email" placeholder="your@email.com" className="bg-zion-blue border border-zion-blue-light text-white" value= {
  testEmail 
}onChange= {
  (e) => setTestEmail (e.target.value) 
}/> </div>) 
}</CardContent> <CardFooter> <Button > {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating... </>) : (<>Generate Content</> //Simplified button text) 
}</Button> </CardFooter> </Card> </div> <div className="lg:col-span-2" > <Card className="bg-zion-blue-dark border border-zion-blue-light h-full" > <CardHeader> <CardTitle className="text-white" >Content Preview</CardTitle> <CardDescription className="text-zion-slate-light" > Generated content will appear here. </CardDescription> </CardHeader> <CardContent> </Button> </div>) 
}</ScrollArea>) : (<div className="flex flex-col items-center justify-center py-12 text-center" > <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4" > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-zion-purple" > <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /> <polyline points="14 2 14 8 20 8" /> <path d="M12 18v-6" /> <path d="M8 15h8" /> </svg> </div> <h3 className="text-white font-medium mb-2" >No Content Generated Yet</h3> <p className="text-zion-slate-light max-w-md" > Use the settings panel to configure your content and click "Generate" to create AI-powered content. </p> </div>) 
}</CardContent> </Card> </div> </div> </div> </div> </>) 
}