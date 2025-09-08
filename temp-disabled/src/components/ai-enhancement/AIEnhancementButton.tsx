

const handleEnhance = async () => {
    if ((!options.content |options.content.trim().length < contentLength) &&
        (!options.context |options.context.trim().length < contentLength)) {
      toast({

        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"

  },
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),




      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }




  },
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  },
  




  if (showActions) {

    return (

        </Button>;
        <Button;"
          type="button"""
          variant="ghost"""
          size="sm""
          onClick = {handleRegenerate,}"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20""
          disabled = {isEnhancing,}>;


        >;
</Button>"
          <Check className="h - 4 w - 4 mr - 1" />;"
</Check>
        </Button>;
        <Button;"
          type="button";""
          variant="ghost";""
          size="sm";"
          on_click = {handle_regenerate, }"
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";"
          disabled = {is_enhancing, }
        >;
</Button>"
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin" />) : ("
</Loader2>)"
            <RefreshCw className="h - 4 w - 4 mr - 1" />)}"
</RefreshCw>
        </Button>;
        <Button;"
          type="button";""
          variant="ghost";""
          size="sm";"
          on_click = {handle_cancel, }"
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";"
        >;
</Button>"
          <X className="h - 4 w - 4 mr - 1" />;"
</X>
        </Button>;
      </div>),

  }
  return (
    <Button;
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
      type="button";

      variant = {variant, }
      size = {size, }
      className={`gap - 1 ${class_name}`}
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
</Button>"
        <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
</Loader2>)"
        <Sparkles className="h - 4 w - 4" />)}"
</Sparkles>"
      <span className="text - xs">{button_text}</span>;"
    </Button>);"
<Button type="button" variant="ghost" size="sm" on_click={""
  handle_accept ";""
}className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20" > <Check className="h - 4 w - 4 mr - 1" /> Apply </Button> <Button) : (<RefreshCw className="h - 4 w - 4 mr - 1" />) ";""
}Regenerate </Button> <Button h - 4 w - 4 mr - 1"/> Cancel </Button> </div>) ";""
}return (<Button) : (<Sparkles className=" h - 4 w - 4" />);"
</Button>
}</Button>);"
        <Loader2 className="h-4 w-4 animate-spin" />"
</Loader2>"
        <Sparkles className="h-4 w-4" />"
</Sparkles>"
      <span className="text-xs">{buttonText}</span>""




