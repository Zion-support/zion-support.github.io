

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  const router = null;

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
              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents"
              description="You haven't saved any talents yet."
              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (
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
        title: "Error",;
        description: "Failed to update saved talents. Please try again later.";
        variant: "destructive"});
    }
  };
  return (;
    <>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";
        description="View and manage your saved talents in the Zion AI Marketplace";
      />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents.length === 0 ? (;
          <div className="py-8">;
            <EmptyState;
              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents";
              description="You haven't saved any talents yet.";
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
            ))}
          </div>;
        )}



            ))}
          </div>
        )}
      </div>
    </>
  )
}, [user, router])
}const {
  data, error;
  );

}, [user, router]);
}const {;
  data, error ;
origin/cursor/automate-test-improve-and-merge-code-2533
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

}
}, [user]);
}
  try {

  handleRequestHire;
}is_authenticated= {
  !!user;
}/>) );
}</div>);
}</div> </>);
}'"}

      </div>;
    </>;
  );
}
;
            ))}
          </div>
        )}
is verified) `) ;
}finally {;
  setIsLoading (false) ;

};
}, [user]);
};
  try {;
  if (!user) {;
  ;
}//Remove from saved talents const {;
  error ';
}= await supabase .from ('saved talents') .delete () .eq ('user id', user.id) .eq ('talent id', talentId);
}else {;
  //Add to saved talents const {;
  error ';
}= await supabase .from ('saved talents') .insert ([ {;
  user id: user.id, talent id: talentId ;
}]);
if (error) {;
  throw error ;
}data: talentData, error: talentError ';
}= await supabase .from ('talent profiles') .select ('*') .eq ('id', talentId) .single ();
return;



}catch (error) {;
  logErrorToProduction (error instanceof Error ? error.message : String (error),  error instanceof Error ? error : undefined, {';
  message: 'Error toggling saved talent' ;
});
toast ({;
  ;

};'";
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p>) : savedTalents.length === 0 ? (<div className="py-8" > <EmptyState <TalentCard key= {;
  talent.id ;
}talent= {;
  talent ;
}onViewProfile= {;
  handleViewProfile ;
}onRequestHire= {;
  handleRequestHire ;
}isAuthenticated= {;
  !!user ;
}/>) ) ;
}</div>) ;
}</div> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
