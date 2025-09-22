<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  contentLength?: number
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
=======
const handleEnhance = async () => {
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
const handleEnhance = async () => {

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
    if ((!options.content |options.content.trim().length < contentLength) &&
=======
}
export function AIEnhancementButton({
  const handleEnhance = async () => {    if ((!options.content |options.content.trim().length < contentLength) &&
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  import { useState } from 'react';
import { Button } from '@/components / ui / button';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx

export function AIEnhancementButton({
  options,
  onEnhanced,
  buttonText = "Enhance with AI",
  className,
  variant = "ghost",
  size = "sm",
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),
  const [showActions, setShowActions] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if ((!options.content || options.content.trim().length < contentLength) && 
        (!options.context || options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content",
        description: `Please enter at least ${contentLength} characters before enhancing.`,
        variant: "destructive"
      }),
      return
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
<<<<<<< HEAD
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
import { toast } from '@/hooks/use-toast',;
=======
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks / useAIContentEnhancer';
import { toast } from '@/hooks / use - toast';
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  on_enhanced: (enhanced_content: string) => void,
  button_text?: string;
  class_name?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";  content_length?: number;
}
export /**
 * AIEnhancementButton - Function description
 */
function AIEnhancementButton() {
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
  const [show_actions, setShowActions] = useState (false);
  const [generated_content, setGeneratedContent] = useState < string | null>(null);
  const handle_enhance = async () => {
    if (.length < content_length) &&) {
  $2
}
        (!options.context || options.context.trim ().length < content_length)) {
      toast ({
        title: "Not enough content",
        description: `Please enter at least ${content_length} characters before enhancing.`,
        variant: "destructive";
      });
      return;
    }
    const enhanced_content = await enhance_content (options);
    // Check condition
if ( {) {
  $2
}
      setGeneratedContent (enhanced_content);
      setShowActions (true);
    }
  }
  const handle_accept = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_enhanced (generated_content);
      setShowActions (false);
      setGeneratedContent (null);
      toast ({
        title: "Content applied",
        description: "AI - enhanced content has been applied."});
    }
  }
  const handle_regenerate = async () => {
    await handle_enhance ();
  }
  const handle_cancel = () =>: any {
    setShowActions (false);
    setGeneratedContent (null);
  }

  import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
  className?: string,;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",;
  size?: "default" | "sm" | "lg" | "icon",;
  contentLength?: number;
}
;
export function AIEnhancementButton({;
  options,;
  onEnhanced,;
  buttonText = "Enhance with AI",;
  className,;
  variant = "ghost",;
  size = "sm",;
  contentLength = 10;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const [showActions, setShowActions] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
  const handleEnhance = async () => {;
    if ((!options.content || options.content.trim().length < contentLength) &&;
        (!options.context || options.context.trim().length < contentLength)) {;
      toast({;
        title: "Not enough content",,
  description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
      }),;
      return;
    }
;
    const enhancedContent = await enhanceContent(options),;
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent),;
      setShowActions(true);
    }
  },
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
      toast({
        title: "Content applied",
        description: "AI-enhanced content has been applied."})
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  },
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  },
<<<<<<< HEAD
  
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
=======
=======


  if (showActions) {
    return (
      <div className="flex gap-2 items-center">;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  contentLength?: number
  import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer'
import { toast } from '@/hooks/use-toast'
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon";  contentLength?: number
}
export function AIEnhancementButton({
  options;
  onEnhanced;
  buttonText;
origin/cursor/automate-test-improve-and-merge-code-2533
  if (showActions) {
    return (
      <div className="flex gap-2 items-center">
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
=======

  if (showActions) {
    return (
      <div className="flex gap-2 items-center">;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
        <Button
          type="button"
          variant="ghost"
          size="sm"
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20"
        >
          <Check className="h-4 w-4 mr-1" />
          Apply
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}
        >
          {isEnhancing ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-1" />
          )}
          Regenerate
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
        >
          <X className="h-4 w-4 mr-1" />
          Cancel
        </Button>
      </div>
    )
  }
  
  return (
    <Button
      type="button"
  },;
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent),;
      setShowActions(false),;
      setGeneratedContent(null),;
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
  },;
  const handleRegenerate = async () => {;
    await handleEnhance();
  },;
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
  if (showActions) {;
    return (;
      <div className="flex gap-2 items-center">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20";
        >;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20";
          disabled={isEnhancing}
        >;
=======

  if (showActions) {
    return (
      <div className="flex gap-2 items-center">;
  if (showActions) {
    return (
      <div className="flex gap-2 items-center">        <Button
=======
=======
          onClick = {handleAccept,}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx

        <Button
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleRegenerate,}
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled = {isEnhancing,}>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
<<<<<<< HEAD
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20";
        >;
=======
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleCancel,}

          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
<<<<<<< HEAD
    );
  }
;
  return (;
    <Button;
      type="button";
      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
=======
    ),;
  }


  return (
    <Button
      type="button"
      variant = {variant,}
      size = {size,}
      className={`gap-1 ${className}`}
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}>;
      {isEnhancing ? (;
        <Loader2 className="h-4 w-4 animate-spin" />;
      ) : (;
        <Sparkles className="h-4 w-4" />;
      )}

      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );

};";
<Buttontype="button" variant="ghost" size="sm" onClick={
  handleAccept "
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20"> <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;
}"}

  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex gap - 2 items - center">;
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
=======
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
        <Button;
          type="button";
          variant="ghost";
          size="sm";
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
          on_click = {handle_accept, }
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
        >;
          <Check className="h - 4 w - 4 mr - 1" />;
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
          on_click = {handle_regenerate, }
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          disabled = {is_enhancing, }
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin" />) : (
            <RefreshCw className="h - 4 w - 4 mr - 1" />)}
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
          Regenerate;
=======
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"          Regenerate;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_cancel, }
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray-100 / 20";
        >;
          <X className="h - 4 w - 4 mr-1" />;
          Cancel;
        </Button>;
      </div>),
  }
  return (
    <Button;
      type="button";
      variant = {variant, }
      size = {size, }
      className={`gap - 1 ${class_name}`}
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
      {is_enhancing ? (
        <Loader2 className="h - 4 w - 4 animate-spin" />) : (
        <Sparkles className="h - 4 w-4" />)}
      <span className="text-xs">{button_text}</span>;
    </Button>);
}";
<Button type="button" variant="ghost" size="sm" on_click={
  handle_accept ";
}className="text - green - 500 hover:text - green - 700 hover:bg - green-100 / 20" > <Check className="h - 4 w - 4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h - 4 w - 4 mr-1" />) ";
}Regenerate </Button> <Button h - 4 w - 4 mr - 1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h - 4 w-4" />);
}</Button>);
}"}

<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
}
;
=======
      <span className="text-xs">{buttonText}</span>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
      <span className="text-xs">{buttonText}</span>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
    </Button>
  );

};";
<Button type="button" variant="ghost" size="sm" onClick={;
  handleAccept ";
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;
}"
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementButton.tsx
