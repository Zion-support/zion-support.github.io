<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { Header } from "@/components/Header",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Textarea } from "@/components/ui/textarea",
import { Input } from "@/components/ui/input",
import { Switch } from "@/components/ui/switch",
import { Label } from "@/components/ui/label",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { toast } from "sonner",
import { Loader2 } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { ScrollArea } from "@/components/ui/scroll-area",
import { useRouter } from 'next/router',
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useState, useEffect } from 'react';
import { Header } from &quot;@/components/Header&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { toast } from &quot;sonner&quot;;
import { Loader2 } from 'lucide-react'
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { ScrollArea } from &quot;@/components/ui/scroll-area&quot;;
import { useRouter } from 'next/router';
import {logErrorToProduction} from '@/utils/productionLogger';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ContentGenerator() {

  const { user, isLoading } = useAuth(),
  const router = useRouter(),
  const [contentType, setContentType] = useState<'blog' | 'newsletter' | 'serviceDescription' | 'faq'>('blog'),
  const [customPrompt, setCustomPrompt] = useState(''),
  const [topic, setTopic] = useState(''),
  const [keywords, setKeywords] = useState(''),
  const [autoPublish, setAutoPublish] = useState(false),
  const [includeImage, setIncludeImage] = useState(true),
  const [isGenerating, setIsGenerating] = useState(false),
  const [previewContent, setPreviewContent] = useState<any>(null),
  const [testEmail, setTestEmail] = useState(''),

  useEffect(() => {
    if (!isLoading && !user) {
<<<<<<< HEAD
      router.push("/login?redirect=/content-generator")
=======
      router.push(&quot;/login?redirect=/content-generator&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, { useState, useEffect } from 'react',;
import { Header } from "@/components/Header",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Textarea } from "@/components/ui/textarea",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
import { Label } from "@/components/ui/label",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { toast } from "sonner",;
import { Loader2 } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { useRouter } from 'next/router',;
import {logErrorToProduction} from '@/utils/productionLogger',;
export default function ContentGenerator() {;
  const { user, isLoading } = useAuth(),;
  const router = useRouter(),;
  const [contentType, setContentType] = useState<'blog' | 'newsletter' | 'serviceDescription' | 'faq'>('blog'),;
  const [customPrompt, setCustomPrompt] = useState(''),;
  const [topic, setTopic] = useState(''),;
  const [keywords, setKeywords] = useState(''),;
  const [autoPublish, setAutoPublish] = useState(false),;
  const [includeImage, setIncludeImage] = useState(true),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [previewContent, setPreviewContent] = useState<any>(null),;
  const [testEmail, setTestEmail] = useState(''),;
  useEffect(() => {;
    if (!isLoading && !user) {;
      router.push("/login?redirect=/content-generator");
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }, [user, isLoading, router]),;
  const generateContent = async () => {;
    setIsGenerating(true),;
    setPreviewContent(null),;
    try {;
      const keywordsArray = keywords.split().map(k => k.trim()).filter(k => k.length > 0),;
      const { data, error } = await supabase.functions.invoke('generate-seo-content', {;
        body: {;
          contentType,;
          userPrompt: customPrompt || topic, // Use customPrompt if available, else topic;
          keywords: keywordsArray,;
          // autoPublish and includeImage are not explicitly used by 'generate-seo-content';
          // but we can leave them here, the backend will ignore them if not needed.;
          autoPublish,;
          includeImage: contentType === 'blog' ? includeImage : false;
        }
<<<<<<< HEAD
      }),
      
      if (error) throw error,
      
<<<<<<< HEAD
      setPreviewContent(data), // Expecting { generatedContent: "..." }
      toast.success(`Content for "${contentType}" generated successfully!`)
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error }),
      toast.error("Failed to generate content. Please try again.")
=======
      setPreviewContent(data); // Expecting { generatedContent: &quot;...&quot; }
      toast.success(`Content for &quot;${contentType}&quot; generated successfully!`);
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error });
      toast.error(&quot;Failed to generate content. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsGenerating(false)
    }
  },

  const sendTestNewsletter = async () => {
    if (!testEmail) {
<<<<<<< HEAD
      toast.error("Please enter a test email address"),
      return
    }
    
    if (!previewContent) {
      toast.error("Generate newsletter content first"),
      return
=======
      toast.error(&quot;Please enter a test email address&quot;);
      return;
    }
    
    if (!previewContent) {
      toast.error(&quot;Generate newsletter content first&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      }),;
      if (error) throw error,;
      setPreviewContent(data), // Expecting { generatedContent: "..." }
      toast.success(`Content for "${contentType}" generated successfully!`);
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast.error("Failed to generate content. Please try again.");
    } finally {;
      setIsGenerating(false);
    }
  },;
  const sendTestNewsletter = async () => {;
    if (!testEmail) {;
      toast.error("Please enter a test email address"),;
      return;
    }
;
    if (!previewContent) {;
      toast.error("Generate newsletter content first"),;
      return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
;
    try {;
      const { data, error } = await supabase.functions.invoke('send-newsletter', {;
        body: {;
          subject: previewContent.subject,;
          previewText: previewContent.previewText,;
          body: previewContent.body,;
          testMode: true,;
          testEmail;
        }
<<<<<<< HEAD
      }),
      
      if (error) throw error,
      
      toast.success(`Test newsletter sent to ${testEmail}!`)
    } catch (error) {
<<<<<<< HEAD
      logErrorToProduction('Error sending test newsletter:', { data: error }),
      toast.error("Failed to send test newsletter. Please try again.")
=======
      logErrorToProduction('Error sending test newsletter:', { data: error });
      toast.error(&quot;Failed to send test newsletter. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Check if user is still loading
  if (isLoading) {
    return (
      <>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center&quot;>
          <div className=&quot;animate-pulse text-white&quot;>Loading...</div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue py-12&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h1 className=&quot;text-3xl font-bold text-white mb-8&quot;>Content Generator</h1>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;lg:col-span-1&quot;>
              <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                <CardHeader>
                  <CardTitle className=&quot;text-white&quot;>Content Settings</CardTitle>
                  <CardDescription className=&quot;text-zion-slate-light&quot;>
                    Configure what type of content you want to generate.
                  </CardDescription>
                </CardHeader>
                <CardContent className=&quot;space-y-6&quot;>
                  <div className=&quot;space-y-2&quot;>
                    <Label htmlFor=&quot;contentType&quot; className=&quot;text-white&quot;>Content Type</Label>
                    <Select value={contentType} onValueChange={(value) => setContentType(value as 'blog' | 'newsletter' | 'serviceDescription' | 'faq')}>
                      <SelectTrigger id=&quot;contentType&quot; className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;>
                        <SelectValue placeholder=&quot;Select content type&quot; />
                      </SelectTrigger>
                      <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                        <SelectItem value=&quot;blog&quot; className=&quot;text-white&quot;>Blog Post</SelectItem>
                        <SelectItem value=&quot;newsletter&quot; className=&quot;text-white&quot;>Email Newsletter</SelectItem>
                        <SelectItem value=&quot;serviceDescription&quot; className=&quot;text-white&quot;>Service Description</SelectItem>
                        <SelectItem value=&quot;faq&quot; className=&quot;text-white&quot;>FAQ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className=&quot;space-y-2&quot;>
                    <Label htmlFor=&quot;topic&quot; className=&quot;text-white&quot;>Main Topic / User Prompt</Label>
                    <Input
                      id=&quot;topic&quot;
                      placeholder={
                        contentType === 'blog' ? &quot;e.g., Benefits of AI in Marketing&quot; :
                        contentType === 'serviceDescription' ? &quot;e.g., AI-Powered Chatbot Solutions&quot; :
                        contentType === 'faq' ? &quot;e.g., How does AI improve customer service?&quot; :
                        &quot;e.g., May Platform Updates&quot; // Newsletter or default
                      }
                      className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>

                  <div className=&quot;space-y-2&quot;>
                    <Label htmlFor=&quot;keywords&quot; className=&quot;text-white&quot;>Keywords (Optional, comma-separated)</Label>
                    <Input
                      id=&quot;keywords&quot;
                      placeholder=&quot;e.g., AI, machine learning, SEO&quot;
                      className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </div>
                  
                  <div className=&quot;space-y-2&quot;>
                    <Label htmlFor=&quot;customPrompt&quot; className=&quot;text-white&quot;>Detailed Instructions / Custom Prompt (Optional)</Label>
                    <Textarea
                      id=&quot;customPrompt&quot;
                      placeholder=&quot;Optionally provide more detailed instructions or a full custom prompt for the AI...&quot;
                      className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-[100px]&quot;
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                    />
                  </div>
                  
                  {contentType === 'blog' && (
                    <>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <Label htmlFor=&quot;autoPublish&quot; className=&quot;text-white&quot;>Auto-Publish</Label>
                        <Switch
                          id=&quot;autoPublish&quot;
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
                        />
                      </div>
                      
                      <div className=&quot;flex items-center justify-between&quot;>
                        <Label htmlFor=&quot;includeImage&quot; className=&quot;text-white&quot;>Generate Image Prompt</Label>
                        <Switch
                          id=&quot;includeImage&quot;
=======
      }),;
      if (error) throw error,;
      toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;
      logErrorToProduction('Error sending test newsletter:', { data: error });
      toast.error("Failed to send test newsletter. Please try again.");
    }
  };
  // Check if user is still loading;
  if (isLoading) {;
    return (;
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="animate-pulse text-white">Loading...</div>;
        </div>;
      </>;
    );
  }
;
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12">;
        <div className="container mx-auto px-4">;
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            <div className="lg:col-span-1">;
              <Card className="bg-zion-blue-dark border border-zion-blue-light">;
                <CardHeader>;
                  <CardTitle className="text-white">Content Settings</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
                    Configure what type of content you want to generate.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent className="space-y-6">;
                  <div className="space-y-2">;
                    <Label htmlFor="contentType" className="text-white">Content Type</Label>;
                    <Select value={contentType} onValueChange={(value) => setContentType(value as 'blog' | 'newsletter' | 'serviceDescription' | 'faq')}>;
                      <SelectTrigger id="contentType" className="bg-zion-blue border border-zion-blue-light text-white">;
                        <SelectValue placeholder="Select content type" />;
                      </SelectTrigger>;
                      <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                        <SelectItem value="blog" className="text-white">Blog Post</SelectItem>;
                        <SelectItem value="newsletter" className="text-white">Email Newsletter</SelectItem>;
                        <SelectItem value="serviceDescription" className="text-white">Service Description</SelectItem>;
                        <SelectItem value="faq" className="text-white">FAQ</SelectItem>;
                      </SelectContent>;
                    </Select>;
                  </div>;
                  <div className="space-y-2">;
                    <Label htmlFor="topic" className="text-white">Main Topic / User Prompt</Label>;
                    <Input;
                      id="topic";
                      placeholder={;
                        contentType === 'blog' ? "e.g., Benefits of AI in Marketing" :;
                        contentType === 'serviceDescription' ? "e.g., AI-Powered Chatbot Solutions" :;
                        contentType === 'faq' ? "e.g., How does AI improve customer service?" :;
                        "e.g., May Platform Updates" // Newsletter or default;
                      }
                      className="bg-zion-blue border border-zion-blue-light text-white";
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />;
                  </div>;
                  <div className="space-y-2">;
                    <Label htmlFor="keywords" className="text-white">Keywords (Optional, comma-separated)</Label>;
                    <Input;
                      id="keywords";
                      placeholder="e.g., AI, machine learning, SEO";
                      className="bg-zion-blue border border-zion-blue-light text-white";
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />;
                  </div>;
                  <div className="space-y-2">;
                    <Label htmlFor="customPrompt" className="text-white">Detailed Instructions / Custom Prompt (Optional)</Label>;
                    <Textarea;
                      id="customPrompt";
                      placeholder="Optionally provide more detailed instructions or a full custom prompt for the AI...";
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]";
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                    />;
                  </div>;
                  {contentType === 'blog' && (;
                    <>;
                      <div className="flex items-center justify-between">;
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish</Label>;
                        <Switch;
                          id="autoPublish";
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
                        />;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>;
                        <Switch;
                          id="includeImage";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
                    </>;
                  )}
<<<<<<< HEAD
                  
                  {contentType === 'newsletter' && (
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;testEmail&quot; className=&quot;text-white&quot;>Test Email</Label>
                      <Input
                        id=&quot;testEmail&quot;
                        type=&quot;email&quot;
                        placeholder=&quot;your@email.com&quot;
                        className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
=======
;
                  {contentType === 'newsletter' && (;
                    <div className="space-y-2">;
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>;
                      <Input;
                        id="testEmail";
                        type="email";
                        placeholder="your@email.com";
                        className="bg-zion-blue border border-zion-blue-light text-white";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        value={testEmail}
                        onChange={(e) => setTestEmail(e.target.value)}
                      />;
                    </div>;
                  )}
                </CardContent>;
                <CardFooter>;
                  <Button;
                    onClick={generateContent}
                    disabled={isGenerating}
<<<<<<< HEAD
                    className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
                        Generating...
                      </>
                    ) : (
                      <>Generate Content</> // Simplified button text
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className=&quot;lg:col-span-2&quot;>
              <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light h-full&quot;>
                <CardHeader>
                  <CardTitle className=&quot;text-white&quot;>Content Preview</CardTitle>
                  <CardDescription className=&quot;text-zion-slate-light&quot;>
                    Generated content will appear here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className=&quot;flex flex-col items-center justify-center py-12&quot;>
                      <Loader2 className=&quot;h-8 w-8 animate-spin text-zion-purple mb-4&quot; />
                      <p className=&quot;text-zion-slate-light&quot;>Generating content...</p>
                    </div>
                  ) : previewContent && previewContent.generatedContent ? (
                    // Simplified preview for all content types for this subtask
                    <ScrollArea className=&quot;h-[500px] pr-4&quot;>
                      <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>Generated Content ({contentType})</h2>
                      <pre className=&quot;bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto&quot;>
=======
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  >;
                    {isGenerating ? (;
                      <>;
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                        Generating...;
                      </>;
                    ) : (;
                      <>Generate Content</> // Simplified button text;
                    )}
                  </Button>;
                </CardFooter>;
              </Card>;
            </div>;
            <div className="lg:col-span-2">;
              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">;
                <CardHeader>;
                  <CardTitle className="text-white">Content Preview</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
                    Generated content will appear here.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  {isGenerating ? (;
                    <div className="flex flex-col items-center justify-center py-12">;
                      <Loader2 className="h-8 w-8 animate-spin text-zion-purple mb-4" />;
                      <p className="text-zion-slate-light">Generating content...</p>;
                    </div>;
                  ) : previewContent && previewContent.generatedContent ? (;
                    // Simplified preview for all content types for this subtask;
                    <ScrollArea className="h-[500px] pr-4">;
                      <h2 className="text-2xl font-bold text-white mb-4">Generated Content ({contentType})</h2>;
                      <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        {previewContent.generatedContent}
                      </pre>;
                      {/* Specific handling for newsletter test send can be re-added if needed */}
<<<<<<< HEAD
                      {contentType === 'newsletter' && previewContent.subject && ( // Assuming generatedContent might be the body for newsletter
                        <div className=&quot;mt-4 flex justify-end&quot;>
                          <Button
                            onClick={sendTestNewsletter} // sendTestNewsletter would need to be adapted if previewContent structure changed significantly
                            disabled={!testEmail}
                            className=&quot;bg-zion-blue-light hover:bg-zion-blue text-white&quot;
                          >
                            Send Test to {testEmail || &quot;your email&quot;}
                          </Button>
                        </div>
                      )}
                    </ScrollArea>
                  ) : (
                    <div className=&quot;flex flex-col items-center justify-center py-12 text-center&quot;>
                      <div className=&quot;bg-zion-blue-light/20 p-6 rounded-full mb-4&quot;>
                        <svg
                          xmlns=&quot;http://www.w3.org/2000/svg&quot;
                          width=&quot;24&quot;
                          height=&quot;24&quot;
                          viewBox=&quot;0 0 24 24&quot;
                          fill=&quot;none&quot;
                          stroke=&quot;currentColor&quot;
                          strokeWidth=&quot;2&quot;
                          strokeLinecap=&quot;round&quot;
                          strokeLinejoin=&quot;round&quot;
                          className=&quot;h-8 w-8 text-zion-purple&quot;
                        >
                          <path d=&quot;M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z&quot; />
                          <polyline points=&quot;14 2 14 8 20 8&quot; />
                          <path d=&quot;M12 18v-6&quot; />
                          <path d=&quot;M8 15h8&quot; />
                        </svg>
                      </div>
                      <h3 className=&quot;text-white font-medium mb-2&quot;>No Content Generated Yet</h3>
                      <p className=&quot;text-zion-slate-light max-w-md&quot;>
                        Use the settings panel to configure your content and click &quot;Generate&quot; to create AI-powered content.
                      </p>
                    </div>
=======
                      {contentType === 'newsletter' && previewContent.subject && ( // Assuming generatedContent might be the body for newsletter;
                        <div className="mt-4 flex justify-end">;
                          <Button;
                            onClick={sendTestNewsletter} // sendTestNewsletter would need to be adapted if previewContent structure changed significantly;
                            disabled={!testEmail}
                            className="bg-zion-blue-light hover:bg-zion-blue text-white";
                          >;
                            Send Test to {testEmail || "your email"}
                          </Button>;
                        </div>;
                      )}
                    </ScrollArea>;
                  ) : (;
                    <div className="flex flex-col items-center justify-center py-12 text-center">;
                      <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4">;
                        <svg;
                          xmlns="http://www.w3.org/2000/svg";
                          width="24";
                          height="24";
                          viewBox="0 0 24 24";
                          fill="none";
                          stroke="currentColor";
                          strokeWidth="2";
                          strokeLinecap="round";
                          strokeLinejoin="round";
                          className="h-8 w-8 text-zion-purple";
                        >;
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />;
                          <polyline points="14 2 14 8 20 8" />;
                          <path d="M12 18v-6" />;
                          <path d="M8 15h8" />;
                        </svg>;
                      </div>;
                      <h3 className="text-white font-medium mb-2">No Content Generated Yet</h3>;
                      <p className="text-zion-slate-light max-w-md">;
                        Use the settings panel to configure your content and click "Generate" to create AI-powered content.;
                      </p>;
                    </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  )}
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
;