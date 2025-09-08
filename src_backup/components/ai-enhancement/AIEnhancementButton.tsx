

:src/components/ai-enhancement/AIEnhancementButton.tsx
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
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";  contentLength?: number
}
export function AIEnhancementButton({


:src/components/ai-enhancement/AIEnhancementButton.tsx
  options
  onEnhanced
  buttonText = "Enhance with AI"
  className
  variant = "ghost"
  size = "sm"
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer()
  const [showActions, setShowActions] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string | null>(null)

        variant: "destructive"
        variant: destructive"
:src/components/ai-enhancement/AIEnhancementButton.tsx
      })
      return;
    }
    const enhancedContent = await enhanceContent(options)
    if (enhancedContent) {
      setGeneratedContent(enhancedContent)
      setShowActions(true)
    }
  }
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent)
      setShowActions(false)
      setGeneratedContent(null)
      }),
      return
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;

;
}
  variant = "ghost";
  size = "sm";
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';



}: AIEnhancementButtonProps) {const { enhanceContent, isEnhancing } = useAIContentEnhancer()const [showActions, setShowActions] = useState(false)const [generatedContent, setGeneratedContent]  = useState<string | null>(null)const handleEnhance = async () => {if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {toast({title: "Not enough content",description: `Please enter at least ${contentLength} characters before enhancing.`,variant: "destructive";
      })return;
    }const enhancedContent  = await enhanceContent(options)if (enhancedContent) {setGeneratedContent(enhancedContent)setShowActions(true)},const handleAccept = () => {if (generatedContent) {onEnhanced(generatedContent),setShowActions(false),setGeneratedContent(null),toast({title: "Content applied";
        description: "AI-enhanced content has been applied."})},const handleRegenerate = async () => {await handleEnhance()},const handleCancel = () => {setShowActions(false),setGeneratedContent(null)},if (showActions) {return (<div className="flex gap-2 items-center">;import { useState   } from 'react';
import { Button   } from '@/components/ui/button';
import { useAIContentEnhancer, AIEnhancementOptions   } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementButtonProps  {options: AIEnhancementOptions;

          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled = {isEnhancing,}>;

          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20
:src/components/ai-enhancement/AIEnhancementButton.tsx
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
      variant = {variant,}
      size = {size,}
      className={`gap-1 ${className}`}
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
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
          disabled = {isEnhancing,}>;

            <RefreshCw className="h-4 w-4 mr-1" />;

            <RefreshCw className="h-4 w-4 mr-1" />;
export function AIEnhancementButton() {return (<div className="flex gap-2 items-center">;
            <RefreshCw className="h-4 w-4 mr-1 />;
export function AIEnhancementButton() {return (<div className=flex gap-2 items-center">;


        </Button>;<Button;
          type="button";
          variant="ghost";
          size="sm";


          type="button";
          variant="ghost";
          size="sm";
    return (<div className="flex gap - 2 items - center">;<Button;
          type="button";
          variant="ghost";
          size="sm";on_click = {handle_accept }
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
          type="button;
          variant=ghost";
          size="sm;
    return (<div className=flex gap - 2 items - center">;<Button;
          type="button;
          variant=ghost";
          size="sm;on_click = {handle_accept }
          className=text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
        >;
          <Check className="h - 4 w - 4 mr - 1" />;Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_regenerate, }
          size="sm";on_click = {handle_regenerate }
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";
          on_click = {handle_cancel, }
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray-100 / 20";


      </div>)}
  return (<Button;
      type="button";
      variant = {variant }
      size = {size }


    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
      <span className="text-xs">{buttonText}</span>
}"}


}"
}
origin/cursor/automate-test-improve-and-merge-code-2533
}return (<Button) : (<Sparkles className=" h - 4 w - 4" />)}</Button>)}"}variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}>;
      {isEnhancing ? (<Loader2 className="h-4 w-4 animate-spin" />;
      ) : (<Sparkles className="h-4 w-4" />;
      )}<span className="text-xs">{buttonText}</span>;
    </Button>;
  )}";
<Button type="button" variant="ghost" size="sm" onClick={handleAccept ";
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />)}</Button>)}";
