<<<<<<<< HEAD:temp_broken_pages_all/SavedTalentsPage.tsx
import { useState, useEffect } from "react";,
import { SEO } from "@/components/SEO";,
import { TalentCard } from "@/components/talent/TalentCard";,
import { useAuth } from "@/hooks/useAuth";,
import { supabase } from "@/integrations/supabase/client";,
import { TalentProfile } from "@/types/talent";,
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import { logErrorToProduction } from "@/utils/productionLogger";
import { EmptyState } from "@/components/ui/empty-state";
import { Heart } from "lucide-react";
import { logInfo, logWarn } from "@/utils/productionLogger";
import { useState, useEffect,  } from "react",
import { SEO,  } from "@/components/SEO",
import { TalentCard,  } from "@/components/talent/TalentCard",
import { useAuth,  } from "@/hooks/useAuth",
import { supabase,  } from "@/integrations/supabase/client",
import { TalentProfile,  } from "@/types/talent",
import { toast,  } from "@/components/ui/use-toast";
import { useRouter, ,  } from 'next/router';
import { logErrorToProduction, ,  } from '@/utils/productionLogger';
import { EmptyState,  } from "@/components/ui/empty-state";
import { Heart,  } from 'lucide-react'
import { logInfo, logWarn,  } from '@/utils/productionLogger';
>>>>>>>> pr-22690:temp-broken-files/SavedTalentsPage.tsx
export default function SavedTalentsPage() {
  return (
  return (
  return (
    <>
      <SEO
title='Saved Talents | Zion AI Marketplace'
        description='View and manage your saved talents in the Zion AI Marketplace'
      />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-4'>Saved Talents</h1>
        <p className='text-muted-foreground'>
          Here are the talents you've saved for future reference.
        </p>
        {isLoading ? (
          <div className='text-center py-8'>Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className='py-8'>
            <EmptyState
icon={<Heart className='h-8 w-8' />}
              title='No Saved Talents'              description="You haven't saved any talents yet."
              action={{ text: 'Browse Talent', href: '/talent' }}
              className='border-none bg-transparent text-center'
            />
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {savedTalents.map(talent => (              <TalentCard
key = {talent.id}
                talent = {talent}
                onViewProfile = {handleViewProfile}
                onRequestHire = {handleRequestHire}
                isAuthenticated = {!!user}
              />
            ))}
          </div>
        )}
      </div>
</>
  )
}, [user router])
}const {data error}= await supabase .from ("saved talents") user id,
full name,
professional title,
profile picture url,
hourly rate,
bio
years experience,
key projects,
skills
location,
availability
is verified) `)
}finally {
  
  setIsLoading (false)
}
}, [user])
}
  try {
  
  if (!user) {
}//Remove from saved talents const {
  
  error '
}= await supabase .from ('saved talents') .delete () .eq ('user id', user.id) .eq ('talent id', talentId)
}else {
  
  //Add to saved talents const {
  
  error '
}= await supabase .from ('saved talents') .insert ([ {
  user id: user.id talent id: talentId;
}])
if (error) {throw error}data: talentData error: talentError '
}= await supabase .from ('talent profiles') .select ('*') .eq ('id', talentId) .single ()
return
}catch (error) {
  logErrorToProduction (error instanceof Error ? error.message : String (error),  error instanceof Error ? error : undefined {'
  message: 'Error toggling saved talent'
})
toast ({
};'"
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p>) : savedTalents.length === 0 ? (<div className="py-8" > <EmptyState <TalentCard key= {talent.id}talent= {talent}onViewProfile= {handleViewProfile}onRequestHire= {handleRequestHire}isAuthenticated= {!!user}/>) )
}</div>)
}</div> </>)
}'"}
import React from 'react';

export default function SavedTalentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">SavedTalentsPage</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
