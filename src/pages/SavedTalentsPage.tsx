
import { useState, useEffect } from "react",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",

  // Using router.asPath instead of useLocation

  useEffect(() => {
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)
    }

  }, [user, router]),

  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true),
      try {
        if (!user) {
          logWarn("User not authenticated."),

          return

        }
        const { data, error } = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
              id
              user_id
              full_name
              professional_title
              profile_picture_url
              hourly_rate
              bio
              years_experience
              key_projects
              skills
              location
              availability
              is_verified
            )
          `
          )

  const handleViewProfile = (talentId: string) => {;
    router.push(`/talent/${talentId}`);
  };
  const handleRequestHire = (talent: TalentProfile) => {;
    logInfo('Request to hire:', { data: talent });    toast({
      title: 'Hire Request Sent',
      description: `A hire request has been sent to ${talent.full_name}.`,
    })
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
  const handleToggleSave = async (
    talentId: string,
        return;
  }, [user, router]);

=======

        const { data, error } = await supabase;
          .from('saved_talents');
          .select(;
            `;
            talent_profile (;
              id,;
              user_id,;
              full_name,;
              professional_title,;
              profile_picture_url,;
              hourly_rate,;
              bio,;
              years_experience,;
              key_projects,;
              skills,;
              location,;
              availability,;
              is_verified;
            );
          `;
          );
          .eq('user_id', user && user.id);

        if (error) {;
          throw error;
        }

        if (data) {;
          // Extract talent profiles and convert to TalentProfile type;
          const talentProfiles = data && data.map(;
            (item: any) => item && item.talent_profile as unknown as TalentProfile;
          );
          setSavedTalents(talentProfiles);        }
      } catch (error) {;
        logErrorToProduction(;
          error instanceof Error ? error && error.message : String(error),;
          error instanceof Error ? error : undefined,;
          { message: 'Error fetching saved talents' }
        );


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      } else {
        // Add to saved talents
        const { error } = await supabase
          .from('saved_talents')
          .insert([{ user_id: user.id, talent_id: talentId }])
        if (error) {
          throw error
        }
          .insert([{ user_id: user.id, talent_id: talentId }]),
  
          .insert([{ user_id: user.id, talent_id: talentId }]),
  

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        if (error) {
          throw error
        }

        // Fetch the updated talent profile and add it to the list
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)
          .single()
        if (talentError) {
          logErrorToProduction(
            talentError instanceof Error
              ? talentError.message
              : String(talentError)
            talentError instanceof Error ? talentError : undefined
            { message: 'Error fetching talent profile' }
          )
          toast({
            title: 'Error'
            description:
              'Failed to update saved talents. Please try again later.'
            variant: 'destructive'
          })
          return
        }
        if (talentData) {
          setSavedTalents(prevTalents => [
            ...prevTalents
            talentData as unknown as TalentProfile
          ])
          toast({
            title: 'Talent Saved'
            description: 'Talent saved to your list.'
          })
        }
      }
    } catch (error) {
      logErrorToProduction(
        error instanceof Error ? error.message : String(error)
        error instanceof Error ? error : undefined
        { message: 'Error toggling saved talent' }
      )
      toast({
        title: 'Error'
        description: 'Failed to update saved talents. Please try again later.'
        variant: 'destructive'
      })
    }
  }
          return;
          .single(),
  
        if (talentError) {
          logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' }),
          toast({
            title: "Error",
            description: "Failed to update saved talents. Please try again later.",
            variant: "destructive"}),
          return
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        }

        if (talentData) {

          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),
          toast({
            title: "Talent Saved",
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
      logErrorToProduction(
        error instanceof Error ? error.message : String(error),
        error instanceof Error ? error : undefined,
        { message: 'Error toggling saved talent' }
      )
      toast({
        title: 'Error',
        description: 'Failed to update saved talents. Please try again later.',
        variant: 'destructive',
      })
    }
  }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        {isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="py-8">
            <EmptyState

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedTalents.map((talent) => (
              <TalentCard
;
        setSavedTalents(prevTalents =>;
          prevTalents.filter(talent => talent.id !== talentId);
        ),;
        toast({;
          title: "Talent Removed",;
          description: "Talent removed from saved list."});
      } else {;
        // Add to saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .insert([{ user_id: user.id, talent_id: talentId }]),;
        if (error) {;
          throw error;
        }
;
        // Fetch the updated talent profile and add it to the list;
        const { data: talentData, error: talentError } = await supabase;
          .from('talent_profiles');
          .select('*');
          .eq('id', talentId);
          .single(),;
        if (talentError) {;
          logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' }),;
          toast({;
            title: "Error",;
            description: "Failed to update saved talents. Please try again later.",;
            variant: "destructive"}),;
          return;
        }
;
        if (talentData) {;
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),;
          toast({;
            title: "Talent Saved",;
            description: "Talent saved to your list."});
        }
      }
    } catch (error) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error toggling saved talent' }),;
      toast({;
        title: 'Error',;
        description: 'Failed to update saved talents. Please try again later.',;
        variant: 'destructive',;
      });
        // Fetch the updated talent profile and add it to the list;
        const { data: talent_data, error: talent_error } = await supabase;
          .from ('talent_profiles');
          .select ('*');
          .eq ('id', talent_id);
          .single ();
        // Check condition
if ( {) {
  $2
}
          logErrorToProduction (
            talent_error instanceof Error;
              ? talent_error.message;
              : String (talent_error),
            talent_error instanceof Error ? talent_error : undefined,
            { message: 'Error fetching talent profile' }
          );
          toast ({
            title: 'Error',
            description:;
              'Failed to update saved talents. Please try again later.',
            variant: 'destructive',
          });
          return;
        }
        // Check condition
if ( {) {
  $2
}
          setSavedTalents (prev_talents => [;
            ...prev_talents,
            talent_data as unknown as TalentProfile,
          ]);
          toast ({
            title: 'Talent Saved',
            description: 'Talent saved to your list.',
          });
        }
      }
    } catch (error) {
      logErrorToProduction (
        error instanceof Error ? error.message : String (error),
        error instanceof Error ? error : undefined,
        { message: 'Error toggling saved talent' }
      );
      toast ({
        title: 'Error',
        description: 'Failed to update saved talents. Please try again later.',
        variant: 'destructive',
      });
    }
  };
  return (;
    <>;

      />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
        {isLoading ? (;
          <div className='text-center py-8'>Loading saved talents...</div>;
        ) : savedTalents && savedTalents.length === 0 ? (;
          <div className='py-8'>;

            <EmptyState
              icon={<Heart className='h-8 w-8' />}
              title='No Saved Talents'              description="You haven't saved any talents yet.";
              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center";
            />;
          </div>;
        ) : (;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isAuthenticated={!!user}
              />;
<<<<<<< HEAD
<<<<<<< HEAD

            ))}
          </div>
        )}
<<<<<<< HEAD
