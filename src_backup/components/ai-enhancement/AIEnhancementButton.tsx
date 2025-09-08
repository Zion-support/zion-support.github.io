

}
export function AIEnhancementButton({}



    if ((!options.content |options.content.trim().length < contentLength) &&

        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive

export function AIEnhancementButton({
  options,
  onEnhanced,
  buttonText = Enhance with AI",
  className,
  variant = "ghost,
  size = sm",
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),
  const [showActions, setShowActions] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if ((!options.content || options.content.trim().length < contentLength) && 
        (!options.context || options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content,
        description: `Please enter at least ${contentLength} characters before enhancing.`,

import { useState } from 'react,
import { Button } from @/components/ui/button'}
export function AIEnhancementButton({const handleEnhance = async () => {const handleEnhance = async () => {if ((!options.content |options.content.trim().length < contentLength) &&;
        (!options.context |options.context.trim().length < contentLength)) {toast({title: "Not enough content;
        description: `Please enter at least ${contentLength} characters before enhancing.`;
        variant: destructive";
import { Button  } from @/components / ui / button';
      }),return;
import { useState } from 'react,import { Button } from @/components/ui/button',import { Sparkles, Loader2, RefreshCw, Check, X  } from 'lucide-react;
import { useAIContentEnhancer, AIEnhancementOptions  } from @/hooks / useAIContentEnhancer';
import { toast  } from '@/hooks / use - toast;
interface AIEnhancementButtonProps  {options: AIEnhancementOptions,on_enhanced: (enhanced_content: string) => void,button_text?: string;
  class_name?: string;
  variant?: "default | destructive" | "outline | secondary" | "ghost | link";
  size?: "default | sm" | "lg | icon";  content_length?: number;
}
export /**;
 * AIEnhancementButton - Function description;
 */;
function AIEnhancementButton() {const { enhance_content, is_enhancing } = useAIContentEnhancer ()const [show_actions, setShowActions] = useState (false)const [generated_content, setGeneratedContent] = useState < string | null>(null)const handle_enhance = async () => {if (.length < content_length) &&) {$2;
}
        (!options.context || options.context.trim ().length < content_length)) {toast ({title: "Not enough content,description: `Please enter at least ${content_length} characters before enhancing.`,variant: destructive";
      })return;
    }
    const enhanced_content = await enhance_content (options)// Check condition;
if ( {) {$2;
}
      setGeneratedContent (enhanced_content)setShowActions (true)}
  }
  const handle_accept = () =>: any {// Check condition;
if ( {) {$2;
}
      on_enhanced (generated_content)setShowActions (false)setGeneratedContent (null)toast ({title: "Content applied,description: AI - enhanced content has been applied."})}
  }
  const handle_regenerate = async () => {await handle_enhance ()}
  const handle_cancel = () =>: any {setShowActions (false)setGeneratedContent (null)}import { Button  } from @/components/ui/button';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer;
import { toast  } from @/hooks/use-toast';
interface AIEnhancementButtonProps  {options: AIEnhancementOptions,onEnhanced: (enhancedContent: string) => void,buttonText?: string;
  className?: string;
  variant?: "default | destructive" | "outline | secondary" | "ghost | link";
  size?: "default | sm" | "lg | icon";  contentLength?: number;
}export function AIEnhancementButton(): any ({options;
  onEnhanced;
  buttonText = "Enhance with AI;
  className;
  variant = ghost";
  size = "sm;
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react;


interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: default" | "destructive | outline" | "secondary | ghost" | "link,
  size?: default" | "sm | lg" | "icon,
  contentLength?: number;
}
export function AIEnhancementButton({
  options,
  onEnhanced,
  buttonText = Enhance with AI",
  className,
  variant = "ghost,
  size = sm",
  contentLength = 10;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const [showActions, setShowActions] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
  const handleEnhance = async () => {;
}: AIEnhancementButtonProps) {
    if ((!options.content || options.content.trim().length < contentLength) &&;
        (!options.context || options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content,,
  description: `Please enter at least ${contentLength} characters before enhancing.`,
        variant: destructive";
      }),
      return;
    }
    const enhancedContent = await enhanceContent(options),
    if (enhancedContent) {
      setGeneratedContent(enhancedContent),
      setShowActions(true);
    }
  },
  
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),

      toast({
        title: "Content applied,
        description: AI-enhanced content has been applied."})
    }

  },
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  },

import { useState  } from react';
import { Button  } from '@/components/ui/button;
import { toast } from @/hooks/use-toast';
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions;


  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: default" | "destructive | outline" | "secondary | ghost" | "link;
  size?: default" | "sm | lg" | "icon;
  contentLength?: number
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string
  variant?: default" | "destructive | outline" | "secondary | ghost" | "link
  size?: default" | "sm | lg" | "icon;  contentLength?: number
}
export function AIEnhancementButton({
  options;
  onEnhanced;
  buttonText;
origin/cursor/automate-test-improve-and-merge-code-2533
  if (showActions) {
    return (
      <div className=flex gap-2 items-center">

        <Button
          type="button
          variant=ghost"
          size="sm

        <Button

          type=button"
          variant="ghost
          size=sm"
          onClick = {handleRegenerate}


          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled = {isEnhancing,}>;


          {isEnhancing ? (;
            <Loader2 className=h-4 w-4 mr-1 animate-spin" />;
          ) : (;

            <RefreshCw className="h-4 w-4 mr-1" />;

          )}
          Regenerate;
        </Button>;

          <X className="h-4 w-4 mr-1 />;
          Cancel;
        </Button>;
      </div>;

        <Button;
          type=button";
          variant="ghost;
          size=sm";

          on_click = {handle_accept}
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20;
        >;
          <Check className=h - 4 w - 4 mr - 1" />;

          Apply;



          on_click = {handle_regenerate}
          className=text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          disabled = {is_enhancing}
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin />) : (
            <RefreshCw className=h - 4 w - 4 mr - 1" />)}

          Regenerate;

        </Button>;
        <Button;


        >;
          <X className=h - 4 w - 4 mr-1" />;
          Cancel;
        </Button>;


      className={`gap - 1 ${class_name}`}
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
      {is_enhancing ? (
        <Loader2 className=h - 4 w - 4 animate-spin" />) : (
        <Sparkles className="h - 4 w-4 />)}
      <span className=text-xs">{button_text}</span>;
    </Button>);
}";
<Button type=button variant="ghost" size=sm on_click={
  handle_accept ";
}className="text - green - 500 hover:text - green - 700 hover:bg - green-100 / 20 > <Check className=h - 4 w - 4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h - 4 w - 4 mr-1 />) ;
}Regenerate </Button> <Button h - 4 w - 4 mr - 1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className= h - 4 w-4 />);
}</Button>);
}"}

    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin />
      ) : (
        <Sparkles className=h-4 w-4" />
      )}



  );

};
<Button type="button" variant=ghost size="sm" onClick={
  handleAccept ;
}className=text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1 /> Apply </Button> <Button) : (<RefreshCw className=h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1/> Cancel </Button> </div>) ;
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;


