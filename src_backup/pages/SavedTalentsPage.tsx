import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { TalentCard } from '@/components/talent/TalentCard';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { TalentProfile } from '@/types/talent';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/router';
import { logErrorToProduction } from '@/utils/productionLogger';
import { EmptyState } from '@/components/ui/empty-state';
import { Heart } from 'lucide-react';
import { logInfo, logWarn } from '@/utils/productionLogger';
export default function SavedTalentsPage() {

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
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



            ))}
          </div>
        )}
      </div>
    </>
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
