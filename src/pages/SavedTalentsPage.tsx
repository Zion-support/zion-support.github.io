import { useState, useEffect } from 'react'
import { SEO } from '@/components/
import { TalentCard } from '@/components/talent/
import { useAuth } from '@/hooks/
import { supabase } from '@/integrations/supabase/
import { TalentProfile } from '@/types/
import { toast } from '@/components/ui/
import { useRouter } from 'next/
import { logErrorToProduction } from '@/utils/
import { EmptyState } from '@/components/ui/
import { logInfo, logWarn } from '@/utils/
import { useRouter } from 'next/
import { logErrorToProduction } from '@/utils/
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents