

        }
      } catch (error) {
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching saved talents' }),
        toast({
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }

    },

    fetchSavedTalents()
  }, [user]),

  const handleViewProfile = (talentId: string) => {
    router.push(`/talent/${talentId}`)
  },


  const handleRequestHire = (talent: TalentProfile) => {
    logInfo('Request to hire:', { data: talent }),
    toast({
      title: "Hire Request Sent",
      description: `A hire request has been sent to ${talent.full_name}.`})

  },


  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
    try {
      if (!user) {

        logWarn("User not authenticated."),
        return
      } catch (error) {;
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching saved talents' }),;
        toast({;
          title: "Error",;
          description: "Failed to load saved talents. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchSavedTalents();
  }, [user]),;

        if (error) {
          throw error
        }
  
        // Fetch the updated talent profile and add it to the list
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)


export default function SavedTalentsPage() {;

  
        if (talentError) {
          logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' }),
          toast({
            title: "Error",
            description: "Failed to update saved talents. Please try again later.",
            variant: "destructive"}),
          return


          toast({
            title: "Talent Saved",
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error toggling saved talent' }),
      toast({
        title: "Error",
        description: "Failed to update saved talents. Please try again later.",
        variant: "destructive"})
    }

  },


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
        


        {isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="py-8">
            <EmptyState


              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (


                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isAuthenticated={!!user}

              />;



            ))}
          </div>;
        )}

      <SEO;
        title='Saved Talents | Zion AI Marketplace';
        description='View and manage your saved talents in the Zion AI Marketplace';
      />;
      <div className='container mx - auto px - 4 py - 8'>;
        <h1 className='text - 3xl font - bold mb - 4'>Saved Talents</h1>;
        <p className='text - muted - foreground'>;
          Here are the talents you've saved for future reference.;
        </p>;
        {is_loading ? (
          <div className='text - center py - 8'>Loading saved talents...</div>) : saved_talents.length === 0 ? (
          <div className='py - 8'>;
            <EmptyState;
              icon={<Heart className='h - 8 w - 8' />}
              title='No Saved Talents'              description="You haven't saved any talents yet.";
              action={{ text: 'Browse Talent', href: '/talent' }}
              className='border - none bg - transparent text - center';
            />;
          </div>) : (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 mt - 8'>;
            {saved_talents.map (talent => (              <TalentCard;
                key = {talent.id, }
                talent = {talent, }
                onViewProfile = {handleViewProfile, }
                onRequestHire = {handleRequestHire, }
                is_authenticated = {!!user, }
              />))}
          </div>)}
      </div>;
    </>);
}, [user, router]);
  data, error;
}= await supabase .from ("saved talents") user id;
full name;
professional title;
profile picture url;
hourly rate;
bio;
years experience;
key projects;
skills;
location;
availability;
is verified) `);
}finally {
  setIsLoading (false);


