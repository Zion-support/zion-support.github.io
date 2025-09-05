import React, {_useState, _useEffect} from 'react';

export default function ContentGenerator() {_const { user, _isLoading} = useAuth();
  const _router = useRouter();
  const [contentType, setContentType] = useState<'blog' | 'newsletter' | 'serviceDescription' | 'faq'>('blog');
  const [customPrompt, setCustomPrompt] = useState('');
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewContent, setPreviewContent] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('');

  useEffect__(() => {_if (!isLoading && !user) {
      router.push("/login?redirect=/content-generator");}
  }, [user, isLoading, router]);

  const _generateContent = async () => {_setIsGenerating(true);
    setPreviewContent(null);
    
    try {
      const _keywordsArray = keywords.split(', _').map(k => k.trim()).filter(k => k.length > 0);
      const { data, _error} = await supabase.functions.invoke('generate-seo-content', {_body: {
          contentType, _userPrompt: customPrompt || topic, _// Use customPrompt if available, _else topic
          keywords: keywordsArray, _// autoPublish and includeImage are not explicitly used by 'generate-seo-content'
          // but we can leave them here; the backend will ignore them if not needed.
          autoPublish, _includeImage: contentType === 'blog' ? includeImage : false}
      });
      
      if (error) throw error;
      
      setPreviewContent(data); // Expecting {_generatedContent: "..."}
      toast.success(`Content for "${_contentType}" generated successfully!`);
    } catch (error) {_logErrorToProduction('Error generating content:', _{ data: error});
      toast.error("Failed to generate content. Please try again.");
    } finally {_setIsGenerating(false);}
  };

  const _sendTestNewsletter = async () => {_if (!testEmail) {
      toast.error("Please enter a test email address");
      return;}
    
    if (!previewContent) {_toast.error("Generate newsletter content first");
      return;}
    
    try {_const { data, _error} = await supabase.functions.invoke('send-newsletter', {_body: {
          subject: previewContent.subject, _previewText: previewContent.previewText, _body: previewContent.body, _testMode: true, _testEmail}
      });
      
      if (error) throw error;
      
      toast.success(`Test newsletter sent to ${_testEmail}!`);
    } catch (error) {_logErrorToProduction('Error sending test newsletter:', _{ data: error});
      toast.error("Failed to send test newsletter. Please try again.");
    }
  };

  // Check if user is still loading
  if (isLoading) {_return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading...</div>
        </div>
      </>
    );}

  return (_<>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="bg-zion-blue-dark border border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-white">Content Settings</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Configure what type of content you want to generate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contentType" className="text-white">Content Type</Label>
                    <Select value={_contentType} onValueChange={_(value) => setContentType(value as 'blog' | 'newsletter' | 'serviceDescription' | 'faq')}>
                      <SelectTrigger id="contentType" className="bg-zion-blue border border-zion-blue-light text-white">
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                        <SelectItem value="blog" className="text-white">Blog Post</SelectItem>
                        <SelectItem value="newsletter" className="text-white">Email Newsletter</SelectItem>
                        <SelectItem value="serviceDescription" className="text-white">Service Description</SelectItem>
                        <SelectItem value="faq" className="text-white">FAQ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-white">Main Topic / User Prompt</Label>
                    <Input
                      id="topic"
                      placeholder={_contentType === 'blog' ? "e.g., _Benefits of AI in Marketing" :
                        contentType === 'serviceDescription' ? "e.g., _AI-Powered Chatbot Solutions" :
                        contentType === 'faq' ? "e.g., _How does AI improve customer service?" :
                        "e.g., _May Platform Updates" // Newsletter or default}
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      value={_topic}
                      onChange={_(_e) => setTopic(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords" className="text-white">Keywords (Optional, comma-separated)</Label>
                    <Input
                      id="keywords"
                      placeholder="e.g., AI, machine learning, SEO"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      value={_keywords}
                      onChange={_(_e) => setKeywords(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="customPrompt" className="text-white">Detailed Instructions / Custom Prompt (Optional)</Label>
                    <Textarea
                      id="customPrompt"
                      placeholder="Optionally provide more detailed instructions or a full custom prompt for the AI..."
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]"
                      value={_customPrompt}
                      onChange={_(_e) => setCustomPrompt(e.target.value)}
                    />
                  </div>
                  
                  {_contentType === 'blog' && (
                    <>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish</Label>
                        <Switch
                          id="autoPublish"
                          checked={autoPublish}
                          onCheckedChange={_setAutoPublish}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>
                        <Switch
                          id="includeImage"
                          checked={_includeImage}
                          onCheckedChange={_setIncludeImage}
                        />
                      </div>
                    </>
                  )}
                  
                  {_contentType === 'newsletter' && (_<div className="space-y-2">
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>
                      <Input
                        id="testEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-zion-blue border border-zion-blue-light text-white"
                        value={testEmail}
                        onChange={_(e) => setTestEmail(e.target.value)}
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={_generateContent}
                    disabled={_isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  >
                    {_isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>Generate Content</> // Simplified button text
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">
                <CardHeader>
                  <CardTitle className="text-white">Content Preview</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Generated content will appear here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {_isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-zion-purple mb-4" />
                      <p className="text-zion-slate-light">Generating content...</p>
                    </div>
                  ) : previewContent && previewContent.generatedContent ? (
                    // Simplified preview for all content types for this subtask
                    <ScrollArea className="h-[500px] pr-4">
                      <h2 className="text-2xl font-bold text-white mb-4">Generated Content ({contentType})</h2>
                      <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">
                        {_previewContent.generatedContent}
                      </pre>
                      {_/* Specific handling for newsletter test send can be re-added if needed */}
                      {_contentType === 'newsletter' && previewContent.subject && ( // Assuming generatedContent might be the body for newsletter
                        <div className="mt-4 flex justify-end">
                          <Button
                            onClick={sendTestNewsletter} // sendTestNewsletter would need to be adapted if previewContent structure changed significantly
                            disabled={_!testEmail}
                            className="bg-zion-blue-light hover:bg-zion-blue text-white"
                          >
                            Send Test to {_testEmail || "your email"}
                          </Button>
                        </div>
                      )}
                    </ScrollArea>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-zion-purple"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M12 18v-6" />
                          <path d="M8 15h8" />
                        </svg>
                      </div>
                      <h3 className="text-white font-medium mb-2">No Content Generated Yet</h3>
                      <p className="text-zion-slate-light max-w-md">
                        Use the settings panel to configure your content and click "Generate" to create AI-powered content.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
