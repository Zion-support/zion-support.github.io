 export default function ContentGenerator () {
  const {
  user, isLoading 
}= useAuth ();
const navigate = useNavigate ();
const [contentType, setContentType] = useState<'blog' | 'newsletter'> ('blog');
const [customPrompt, setCustomPrompt] = useState ('');
const [topic, setTopic] = useState ('');
const [autoPublish, setAutoPublish] = useState (false);
const [includeImage, setIncludeImage] = useState (true);
const [isGenerating, setIsGenerating] = useState (false);
const [previewContent, setPreviewContent] = useState<any> (null);
const [testEmail, setTestEmail] = useState ('');
//Redirect if not logged in React.useEffect ( () => {
  if (!isLoading && !user) {
  
}
}, [user, isLoading, navigate]);
const generateContent = async () => {
  setIsGenerating (true);
setPreviewContent (null);
try {
  const {
  data, error 
}= await supabase.functions.invoke ('generate-content', {
  body: {
  contentType;
prompt: customPrompt || undefined;
topic: topic || undefined;
autoPublish;
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
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading...</div> </div> <Footer /> </> return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12" > <div className="container mx-auto px-4" > <h1 className="text-3xl font-bold text-white mb-8" >Content Generator</h1> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" > <div className="lg:col-span-1" > <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardHeader> <CardTitle className="text-white" >Content Settings</CardTitle> <CardDescription className="text-zion-slate-light" > Configure what type of content you want to generate. </CardDescription> </CardHeader> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="blog" className="text-white" >Blog Post</SelectItem> <SelectItem value="newsletter" className="text-white" >Email Newsletter</SelectItem> </SelectContent> </Select> </div> <div className="space-y-2" > <Label htmlFor="topic" className="text-white" >Topic (Optional) </Label> <Input /> </div> <div className="space-y-2" > <Label htmlFor="customPrompt" className="text-white" >Custom Prompt (Optional) </Label> <Textarea /> </div> {
  contentType === 'blog'&& (<> <div className="flex items-center justify-between" > <Label htmlFor="autoPublish" className="text-white" >Auto-Publish</Label> <Switch id="autoPublish" checked= {
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
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating... </>) : (<>Generate {
  contentType === 'blog'? 'Blog Post': 'Newsletter' 
}</>) 
}</Button> </CardFooter> </Card> </div> <div className="lg:col-span-2" > <Card className="bg-zion-blue-dark border border-zion-blue-light h-full" > <CardHeader> <CardTitle className="text-white" >Content Preview</CardTitle> <CardDescription className="text-zion-slate-light" > Generated content will appear here. </CardDescription> </CardHeader> <CardContent> </div>) : previewContent ? (contentType === 'blog' ? (<div className="space-y-4" > <Tabs defaultValue="preview" className="w-full" > <TabsList className="bg-zion-blue-light/30 w-full" > <TabsTrigger value="preview" >Preview</TabsTrigger> <TabsTrigger value="markdown" >Markdown</TabsTrigger> <TabsTrigger value="metadata" >Metadata</TabsTrigger> </TabsList> 
}
}/> </div> </ScrollArea> </TabsContent> </pre> </ScrollArea> </TabsContent> <TabsContent value="metadata" className="pt-4" > <div className="space-y-4" > <div> <span key= {
  index 
}className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan" > {
  tag 
}</span>) ) 
}</div> </div> {
  previewContent.tweetSummary && (<div> <h3 className="text-white font-semibold mb-1" >Tweet Summary</h3> <p className="text-zion-slate-light" > {
  previewContent.tweetSummary 
}</p> </div>) 
}{
  previewContent.imagePrompt && (<div> <h3 className="text-white font-semibold mb-1" >Image Prompt</h3> <p className="text-zion-slate-light" > {
  previewContent.imagePrompt 
}</p> </div>) 
}</div> </TabsContent> </Tabs> </div>) : (<div className="space-y-4" > <Tabs defaultValue="preview" className="w-full" > <TabsList className="bg-zion-blue-light/30 w-full" > <TabsTrigger value="preview" >Preview</TabsTrigger> <TabsTrigger value="html" >HTML</TabsTrigger> </TabsList> </Button> </div> </div> <div className="mt-4 flex justify-end" > <Button </Button> </div> </TabsContent> </pre> </ScrollArea> </TabsContent> </Tabs> </div>) ) : (<div className="flex flex-col items-center justify-center py-12 text-center" > <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4" > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-zion-purple" > <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /> <polyline points="14 2 14 8 20 8" /> <path d="M12 18v-6" /> <path d="M8 15h8" /> </svg> </div> <h3 className="text-white font-medium mb-2" >No Content Generated Yet</h3> <p className="text-zion-slate-light max-w-md" > Use the settings panel to configure your content and click "Generate" to create AI-powered content. </p> </div>) 
}</CardContent> </Card> </div> </div> </div> </div> <Footer /> </>) 
}