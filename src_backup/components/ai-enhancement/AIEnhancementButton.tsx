<<<<<<< HEAD
:src/components/ai-enhancement/AIEnhancementButton.tsx
import { useState  } from 'react;
import { Button  } from @/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react
import { useAIContentEnhancer, AIEnhancementOptions  } from @/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast;
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: "default | destructive" | "outline | secondary" | "ghost | link";
  size?: "default | sm" | "lg | icon";
  contentLength?: number
  import { useState } from react'
import { Button } from '@/components/ui/button
import { Sparkles, Loader2, RefreshCw, Check, X } from lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer
import { toast } from @/hooks/use-toast'
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string;
  variant?: "default | destructive" | "outline | secondary" | "ghost | link";
  size?: "default | sm" | "lg | icon";  contentLength?: number
=======
>>>>>>> origin/chore/fix-lint-and-merge
}
export function AIEnhancementButton({}

<<<<<<< HEAD
:src/components/ai-enhancement/AIEnhancementButton.tsx
  options
  onEnhanced
  buttonText = "Enhance with AI
  className
  variant = ghost"
  size = "sm
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer()
  const [showActions, setShowActions] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string | null>(null)
=======
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
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
=======
        variant: "destructive"
      }),
      return
>>>>>>> merged-prs-20250907-203621
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
}: AIEnhancementButtonProps) {const { enhanceContent, isEnhancing } = useAIContentEnhancer()const [showActions, setShowActions] = useState(false)const [generatedContent, setGeneratedContent]  = useState<string | null>(null)const handleEnhance = async () => {if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {toast({title: "Not enough content,description: `Please enter at least ${contentLength} characters before enhancing.`,variant: destructive";
      })return;
    }const enhancedContent  = await enhanceContent(options)if (enhancedContent) {setGeneratedContent(enhancedContent)setShowActions(true)}},const handleAccept = () => {if (generatedContent) {onEnhanced(generatedContent),setShowActions(false),setGeneratedContent(null),toast({title: "Content applied;
        description: AI-enhanced content has been applied."})}},const handleRegenerate = async () => {await handleEnhance()},const handleCancel = () => {setShowActions(false),setGeneratedContent(null)},if (showActions) {return (<div className="flex gap-2 items-center>;import { useState   } from 'react;
import { Button   } from @/components/ui/button';
import { useAIContentEnhancer, AIEnhancementOptions   } from '@/hooks/useAIContentEnhancer;
interface AIEnhancementButtonProps  {options: AIEnhancementOptions;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20
:src/components/ai-enhancement/AIEnhancementButton.tsx
          disabled={isEnhancing}
        >
          {isEnhancing ? (
            <Loader2 className=h-4 w-4 mr-1 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-1 />
          )}
          Regenerate
        </Button>
        <Button
          type=button"
          variant="ghost
          size=sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20
        >
          <X className=h-4 w-4 mr-1" />
          Cancel
        </Button>
      </div>
    )
  }
  return (
    <Button
      type="button
      variant = {variant}
      size = {size}
      className={`gap-1 ${className}`}
      onClick = {handleEnhance}
      disabled = {isEnhancing}
  },
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
      toast({
        title: Content applied",
        description: "AI-enhanced content has been applied.});
    }
  },
    await handleEnhance();
  },
    setShowActions(false);
    setGeneratedContent(null);
  }
  if (showActions) {
    return (;
      <div className=flex gap-2 items-center">;
        <Button;
          type="button;
          variant=ghost";
          size="sm;
          onClick={handleAccept}
          className=text-green-500 hover:text-green-700 hover:bg-green-100/20";
        >;
          <Check className="h-4 w-4 mr-1 />;
          Apply;
        </Button>;
        <Button;
          type=button";
          variant="ghost;
          size=sm";
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20;
          disabled={isEnhancing}
        >;
          disabled = {isEnhancing}>;
=======
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled = {isEnhancing,}>;
>>>>>>> origin/chore/fix-lint-and-merge

          {isEnhancing ? (;
            <Loader2 className=h-4 w-4 mr-1 animate-spin" />;
          ) : (;
<<<<<<< HEAD
            <RefreshCw className="h-4 w-4 mr-1 />;
export function AIEnhancementButton() {return (<div className=flex gap-2 items-center">;
=======
            <RefreshCw className="h-4 w-4 mr-1" />;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </Button>;<Button;
          type="button;
          variant=ghost";
          size="sm;
=======
>>>>>>> merged-prs-20250907-203621
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
>>>>>>> origin/chore/fix-lint-and-merge

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
          type="button;
          variant=ghost";
          size="sm;
    return (<div className=flex gap - 2 items - center">;<Button;
          type="button;
          variant=ghost";
          size="sm;on_click = {handle_accept }
          className=text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
        >;
          <Check className="h - 4 w - 4 mr - 1 />;Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_regenerate, }
          size="sm";on_click = {handle_regenerate }
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          size=sm";
          on_click = {handle_regenerate}
          size="sm;on_click = {handle_regenerate }
          className=text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          disabled = {is_enhancing }
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin />) : (
            <RefreshCw className=h - 4 w - 4 mr - 1" />)}

          Regenerate;
          {is_enhancing ? (<Loader2 className="h - 4 w - 4 mr - 1 animate - spin />) : (<RefreshCw className=h - 4 w - 4 mr - 1" />)}Regenerate;
        </Button>;
        <Button;
          type="button;
          variant=ghost";
          size="sm;
          on_click = {handle_cancel }
          className=text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";
          on_click = {handle_cancel}
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray-100 / 20;
=======
>>>>>>> merged-prs-20250907-203621
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_cancel, }
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray-100 / 20";
>>>>>>> origin/chore/fix-lint-and-merge
        >;
          <X className=h - 4 w - 4 mr-1" />;
          Cancel;
        </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      </div>)}
  return (<Button;
      type="button;
      variant = {variant }
      size = {size }
=======
>>>>>>> merged-prs-20250907-203621
      </div>),
  }
  return (
    <Button;
      type="button";
      variant = {variant, }
      size = {size, }
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin />
      ) : (
        <Sparkles className=h-4 w-4" />
      )}
      <span className="text-xs>{buttonText}</span>
>>>>>>> merged-prs-20250907-203621
    </Button>
:src/components/ai-enhancement/AIEnhancementButton.tsx
  )
}
<Button type="button" variant=ghost size="sm" onClick={
  handleAccept 
}className=text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1 /> Apply </Button> <Button) : (<RefreshCw className=h-4 w-4 mr-1" />) "
}Regenerate </Button> <Button h-4 w-4 mr-1/> Cancel </Button> </div>) 
}return (<Button) : (<Sparkles className=" h-4 w-4" />)
}</Button>)
}}
=======
    </Button>
>>>>>>> origin/chore/fix-lint-and-merge
  );

};
<Button type="button" variant=ghost size="sm" onClick={
  handleAccept ;
}className=text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1 /> Apply </Button> <Button) : (<RefreshCw className=h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1/> Cancel </Button> </div>) ;
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;
<<<<<<< HEAD
}"
=======
<<<<<<< HEAD
}
origin/cursor/automate-test-improve-and-merge-code-2533
}return (<Button) : (<Sparkles className= h - 4 w - 4" />)}</Button>)}"}variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}>;
      {isEnhancing ? (<Loader2 className=h-4 w-4 animate-spin />;
      ) : (<Sparkles className="h-4 w-4" />;
      )}<span className=text-xs>{buttonText}</span>;
    </Button>;
  )}";
<Button type="button variant=ghost" size="sm onClick={handleAccept ;
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className=h-4 w-4 mr-1 /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ;
}Regenerate </Button> <Button h-4 w-4 mr-1/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />)}</Button>)}";
=======
}"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
