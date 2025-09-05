
export default function SavedTalentsPage() {_const { user} = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const _router = useRouter();
  // Using router.asPath instead of useLocation

  useEffect__(() => {_if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`);
    }
  }, [user, router]);

  useEffect__(() => {_const _fetchSavedTalents = async () => {
      setIsLoading(true);
      try {
        if (!user) {
          logWarn("User not authenticated.");
          return;}

        const {_data, _error} = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
              id,
              user_id,
              full_name,
              professional_title,
              profile_picture_url,
              hourly_rate,
              bio,
              years_experience,
              key_projects,
              skills,
              location,
              availability,
              is_verified
            )
          `
          )
          .eq("user_id", user.id);

        if (error) {_throw error;}

        if (data) {_// Extract talent profiles and convert to TalentProfile type
          const _talentProfiles = data.map(_(item: unknown) => item.talent_profile as unknown as TalentProfile
          );
          setSavedTalents(talentProfiles);}
      } catch (error) {_logErrorToProduction(error instanceof Error ? error.message : String(error), _error instanceof Error ? error : undefined, _{ message: 'Error fetching saved talents'});
        toast({_title: "Error", _description: "Failed to load saved talents. Please try again later.", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };

    fetchSavedTalents();
  }, [user]);

  const _handleViewProfile = (_talentId: string) => {_router.push(`/talent/${talentId}`);
  };

  const _handleRequestHire = (_talent: TalentProfile) => {_logInfo('Request to hire:', _{ data: talent});
    toast({_title: "Hire Request Sent", _description: `A hire request has been sent to ${talent.full_name}.`});
  };

  const _handleToggleSave = async (_talentId: string, _isCurrentlySaved: boolean) => {_try {
      if (!user) {
        logWarn("User not authenticated.");
        return;}
  
      if (isCurrentlySaved) {_// Remove from saved talents
        const { error} = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', user.id)
          .eq('talent_id', talentId);
  
        if (error) {_throw error;}
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
        toast({_title: "Talent Removed", _description: "Talent removed from saved list."});
      } else {_// Add to saved talents
        const { error} = await supabase
          .from('saved_talents')
          .insert([{_user_id: user.id, _talent_id: talentId}]);
  
        if (error) {_throw error;}
  
        // Fetch the updated talent profile and add it to the list
        const {_data: talentData, _error: talentError} = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)
          .single();
  
        if (talentError) {_logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), _talentError instanceof Error ? talentError : undefined, _{ message: 'Error fetching talent profile'});
          toast({_title: "Error", _description: "Failed to update saved talents. Please try again later.", _variant: "destructive"});
          return;
        }
  
        if (talentData) {_setSavedTalents(prevTalents => [...prevTalents, _talentData as unknown as TalentProfile]);
          toast({
            title: "Talent Saved", _description: "Talent saved to your list."});
        }
      }
    } catch (error) {_logErrorToProduction(error instanceof Error ? error.message : String(error), _error instanceof Error ? error : undefined, _{ message: 'Error toggling saved talent'});
      toast({_title: "Error", _description: "Failed to update saved talents. Please try again later.", _variant: "destructive"});
    }
  };

  return (
    <>
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>
        <p className="text-muted-foreground">
          Here are the talents you've saved for future reference.
        </p>
        
        {_isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="py-8">
            <EmptyState
              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents"
              description="You haven't saved any talents yet."
              action={_{ text: 'Browse Talent', _href: '/talent'}}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {_savedTalents.map((talent) => (
              <TalentCard
                key={talent.id}
                talent={_talent}
                onViewProfile={_handleViewProfile}
                onRequestHire={_handleRequestHire}
                isAuthenticated={_!!user}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
