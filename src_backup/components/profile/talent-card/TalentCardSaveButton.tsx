}
    setLocalIsSaved(!localIsSaved)
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }

  isAuthenticated: boolean;
export function TalentCardSaveButton(): any ({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;
  isAuthenticated,;
}: TalentCardSaveButtonProps) {;
  const { toast } = useToast();
  const router = useRouter();
  // Using router && router.asPath for current path;
  const [localIsSaved, setLocalIsSaved] = React && React.useState(isSaved);

  // Handle save toggle;
  const handleSaveToggle = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation();
    if (!isAuthenticated) {;
      toast({;

    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },

  return (
    <button 
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >
      <Heart 
        className={cn(
          "h-4 w-4 transition-colors", 

          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
        )} 
      />
    </button>
  )

;