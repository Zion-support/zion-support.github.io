import { useRouter } from "next/router";
export default function ContentGenerator() {

  const { user, isLoading } = useAuth();
  const router = null;
import { ScrollArea } from "@/components/ui/scroll-area",
import { useRouter } from 'next/router',
import {logErrorToProduction} from '@/utils/productionLogger',
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
      router.push("/login?redirect=/content-generator")
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
      }),
      
      if (error) throw error,
      
      setPreviewContent(data), // Expecting { generatedContent: "..." }
      toast.success(`Content for "${contentType}" generated successfully!`)
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error }),
      toast.error("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  },

  const sendTestNewsletter = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address"),
      return
    }
    
    if (!previewContent) {
      toast.error("Generate newsletter content first"),
      return
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
      }),
      
      if (error) throw error,
      
      toast.success(`Test newsletter sent to ${testEmail}!`)
    } catch (error) {
      logErrorToProduction('Error sending test newsletter:', { data: error }),
      toast.error("Failed to send test newsletter. Please try again.")
    }
  },

  // Check if user is still loading
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading...</div>
        </div>
      </>
    )
  }
ursor/expand-services-advertise-and-build-project-4b36

  return (
    <>
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
                    <Select value={contentType} onValueChange={(value) => setContentType(value)}>
                      <SelectTrigger id="contentType" className="bg-zion-blue border border-zion-blue-light text-white">
                        <SelectValue placeholder="Select content type"/>
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                        <SelectItem value="blog" className="text-white">Blog Post</SelectItem>
                        <SelectItem value="newsletter" className="text-white">Email Newsletter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

