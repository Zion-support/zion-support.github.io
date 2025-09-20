<<<<<<< HEAD:temp_broken_pages_all/ContentGenerator.tsx
<<<<<<< HEAD:temp_broken_pages_all/ContentGenerator.tsx
import React { useState useEffect } from 'react';
import { Header } from "@/components/Header";,
import { Button } from "@/components/ui/button";,
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";,
import { Textarea } from "@/components/ui/textarea";,
import { Input } from "@/components/ui/input";,
import { Switch } from "@/components/ui/switch";,
import { Label } from "@/components/ui/label";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";,
import { toast } from "sonner";,
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";,
import { useAuth } from "@/hooks/useAuth";,
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/router";
import { logErrorToProduction } from '@/utils/productionLogger';
export default function ContentGenerator() {
  return (
  return (
  return (
  const { user, isLoading } = useAuth();
  const router = null;
  // Check if user is still loading,
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

=======
import React from 'react';
import { SEO } from '@/components/SEO';

export default function ContentGenerator() {
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/ContentGenerator.tsx
  return (
    <>
      <SEO
        title="Content Generator | Zion AI"
        description="Generate high-quality content using AI-powered tools."
      />
      <div className="min-h-screen bg-zion-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Content Generator</h1>
          <p className="text-gray-300">AI-powered content generation tools coming soon...</p>
        </div>
      </div>
<<<<<<< HEAD:temp_broken_pages_all/ContentGenerator.tsx
</>
  )
}
import React from 'react';

export default function ContentGenerator() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">ContentGenerator</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/ContentGenerator.tsx
=======
    </>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/ContentGenerator.tsx
}