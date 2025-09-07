
}
    setLocalIsSaved(!localIsSaved)
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }





    toast({
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites'',
  description: localIsSaved;
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`'
      variant: 'default'')
    })
  }
    >
  isAuthenticated: boolean;
export function TalentCardSaveButton(): any ({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;
  isAuthenticated,;)
}: TalentCardSaveButtonProps) {;
  const { toast } = useToast();
  const router = useRouter();
  // Using router && router.asPath for current path;
  const [localIsSaved, setLocalIsSaved] = React && React.useState(isSaved);

  // Handle save toggle;
  const handleSaveToggle = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation();
    if (!isAuthenticated) {;
      toast({;'
        title: 'Authentication required',;''
        description: 'Please log in to save talents to your favorites',;''
        variant: 'destructive',;')
      });
      const returnTo = encodeURIComponent(router && router.asPath);
      router && router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }

    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }

    toast({;'
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites',;'
      description: localIsSaved;
        ? `${profileName} has been removed from your favorites`;
        : `${profileName} has been added to your favorites`,;'
      variant: 'default',;')
    });
  };


    >;
      <Heart;
        className={cn('
          'h-4 w-4 transition-colors'''
          localIsSaved ? 'fill-red-500 text-red-500' : 'text-zion-slate'')
        )}      />;
</Heart>
    </button>;
    </button>
}/> </button>) ;
    <button;'
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";"
      onClick={handleSaveToggle}"
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}"
    >;
</button>
      <Heart;
        className={cn(;"
          "h-4 w-4 transition-colors";""
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate";")
        )} ;
      />;
</Heart>
    </button>;
}/> </button>);"

