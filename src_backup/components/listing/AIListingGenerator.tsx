<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface GeneratedContent {
<<<<<<< HEAD
<<<<<<< HEAD
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Sparkles } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",;
import { AIListingForm } from "./AIListingForm",;
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",;
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface GeneratedContent {;
=======

  description: string
  tags: string[]
  suggestedPrice: {
    min: number

<<<<<<< HEAD
    max: number  }
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { AIListingForm } from './AIListingForm';
import { GeneratedContentDisplay } from './GeneratedContentDisplay';
import { LoadingContentSkeleton } from './LoadingContentSkeleton';
import { logErrorToProduction } from '@/utils/productionLogger';

interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
origin/cursor/automate-test-improve-and-merge-code-2533
    max: number
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
  description: string,
  tags: string[],
  suggested_price: {
    min: number,
    max: number;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
  }
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  keyPoints: string[]
}
interface AIListingGeneratorProps {
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD

<<<<<<< HEAD
interface GeneratedContent {,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

interface GeneratedContent {;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
<<<<<<< HEAD
    max: number;
  },;
=======
    max: number
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  keyPoints: string[];
}
;
interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;
<<<<<<< HEAD
    title?: string,;
    category?: string,;
    keyFeatures?: string,;
    targetAudience?: string;
=======


  onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {
origin/cursor/automate-test-improve-and-merge-code-2533
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
;
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null),;
  const handleGenerate = async ({;
    title,;
    category,;
    keyFeatures,;
    targetAudience;
  }: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
  }) => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
        throw new Error(error.message);
=======

<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const handleGenerate = async ({
    title
    category
    keyFeatures
    targetAudience
  }: {
    title: string
    category: string
    keyFeatures: string
    targetAudience: string  }) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {
        body: { title, category, key_features, target_audience }
      });
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      if (data && (data as any).error) {
        throw new Error((data as any).error)
      }

      setGeneratedContent((data as any)?.generated || null)
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',      toast({
=======
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}
=======

  onApplyGenerated?: (content: GeneratedContent, ) => void,
  initial_values?: {
    title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
}
export /**
 * AIListingGenerator - Function description
 */
function AIListingGenerator() {
  const { toast } = use_toast ();
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState < GeneratedContent | null>(null);
  const handle_generate = async ({
    title;
    category;
    key_features;
    target_audience;
  }: {
    title: string,
    category: string,
    key_features: string,
    target_audience: string;


  }) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      })
      if (error) {
        throw new Error(error.message)
      }
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx

  }) => {
    setIsLoading(true)
    try {

<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
      toast({
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        title: "Content Generated"
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error })
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
        variant: "destructive"
      })
      // Check condition
if (.error) {) {
  $2
}
        throw new Error ((data as any).error);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
;
      if (data && (data as any).error) {;
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null),
      toast({
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error }),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
=======

<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
      toast({
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      })
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
  },

=======
=======
export function AIListingGenerator({ onApplyGenerated, initialValues;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function AIListingGenerator({ onApplyGenerated, initialValues;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent>
          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
;
      setGeneratedContent((data as any)?.generated || null),;

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  const handleGenerate = async ({;
    title;
    category;
    keyFeatures;
    targetAudience;
  }: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
  }) => {;
    setIsLoading(true);    ;
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      });

      if (error) {;
        throw new Error(error && error.message);
      }

      if (data && (data as any).error) {;
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null);
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
      toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast({;
        title: "Generation Failed",;
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent),;
      toast({;
        title: "Content Applied";
        description: "The generated content has been applied to your listing.";
      });
    }
  };
  return (;
=======

<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    }

  },




  return (


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
    <div className="space-y-6">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
        <CardHeader>;
          <CardTitle className="flex items-center text-white">;
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text-sm text-zion-slate-light">;
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <AIListingForm;
            onSubmit={handleGenerate} ;
            isLoading={isLoading} ;
            initialValues={initialValues}
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx

          <AIListingForm
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}


          <AIListingForm 


<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
      {isLoading && <LoadingContentSkeleton />}
=======
          />;
        </CardContent>;
      </Card>;      {isLoading && <LoadingContentSkeleton />}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}

<<<<<<< HEAD
    <div className="space-y-6">;
      <Card className="border border - zion - blue - light bg - zion - blue-dark">;
        <CardHeader>;
          <CardTitle className="flex items - center text-white">;
            <Sparkles className="h - 5 w - 5 mr - 2 text - zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text - sm text - zion - slate-light">;
            Provide basic information and let AI generate optimized, SEO - friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;
          <AIListingForm;
            on_submit = {handle_generate, }
            is_loading = {is_loading, }
            initial_values = {initial_values, }
          />;
        </CardContent>;
      </Card>;
      {is_loading && <LoadingContentSkeleton />}
      {generated_content && !is_loading && (
        <GeneratedContentDisplay content={generated_content} on_apply={handle_apply} />)}
    </div>);
}: AIListingGeneratorProps) {
  const {
  toast;
}= use_toast ();
const [is_loading, setIsLoading] = useState (false);
const [generated_content, setGeneratedContent] = useState < GeneratedContent | null> (null);
const handle_generate = async ({
  title;
category;
key_features;
target_audience;
}: {
  title: string;
category: string;
key_features: string;
target_audience: string;

<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
}) => {
  setIsLoading (true)
try {
  const {
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx

  data, error;
}= await supabase.functions.invoke ('ai - listing - generator', {
  body: {
  title, category,  key_features, target_audience;
});
// Check condition
if ( {) {
  $2
}
  throw new Error (error.message);
}// Check condition
if (.error) {) {
  $2
}
  throw new Error ( (data as any) .error);
}setGeneratedContent ( (data as any) ?.generated || null);

toast ({
}catch (error) {'
  logErrorToProduction ('Error generating content:', {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          />;
        </CardContent>;
      </Card>;
      {isLoading && <LoadingContentSkeleton />}
;
      {generatedContent && !isLoading && (;
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />;
      )}
    </div>;
  );
=======
}catch (error) {';
  logErrorToProduction ('Error generating content:', {  data: error;
=======

<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
=======
}finally {;
  setIsLoading (false) ;

};
const handleApply = () => {;
  if (generatedContent && onApplyGenerated) {;
  onApplyGenerated (generatedContent);
toast ({;


};
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingFormonSubmit= {
  handleGenerate 
}isLoading= {
  isLoading 
}initialValues= {
  initialValues 
}/> </CardContent> </Card> {;
  isLoading && <LoadingContentSkeleton /> ;
}{;
  generatedContent && !isLoading && (<GeneratedContentDisplaycontent= {
  generatedContent 
}onApply= {
  handleApply 
}/>) ;
}</div>) ;
}'";


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
  data: error;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
});
toast ({
}finally {
  setIsLoading (false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
<<<<<<< HEAD
=======

const handle_apply = () =>: any {
  // Check condition
if ( {) {
  $2
}
  onApplyGenerated (generated_content);
toast ({
}
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}'";
};
}


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
}
}
}
}

    </div>;
  );
}
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {
  handleGenerate
}isLoading= {
  isLoading
}initialValues= {
  initialValues
}/> </CardContent> </Card> {
  isLoading && <LoadingContentSkeleton />
}{
  generatedContent && !isLoading && (<GeneratedContentDisplay content= {
  generatedContent
}onApply= {
  handleApply
}/>)
}</div>)
}'"
<<<<<<< HEAD:src/components/listing/AIListingGenerator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingGenerator.tsx
