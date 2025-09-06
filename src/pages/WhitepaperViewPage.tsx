

export default WhitepaperViewPage; import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router', // Changed from useParams
import { supabase  } from '@/integrations/supabase/client';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel
import { Button  } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link', // For a back button, changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger';
// Placeholder for user context/role checking
// In a real app, this would come from an auth context

const useAuth = () => {
    // const { user } = useUserContext(), // Example from a real app
    // return { isAdmin: user?.role === 'admin', isAuthenticated: !!user }
    return { isAdmin: false, isAuthenticated: false }, // Default to non-admin, not authenticated for this example
}
interface SharedWhitepaper {
  whitepaper_data: {
    tokenName: string
    tokenSupply: string
    sections: Array<{ id: string, title: string, content: string }>
    distributionChartData: Array<{ name: string, value: number }>
    distributionBreakdown?: string
  }
  created_at: string
  is_public: boolean


=======
import React, { useState, useEffect } from 'react',;
import { useRouter } from 'next/router', // Changed from useParams;
import { supabase } from '@/integrations/supabase/client',;
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel;
import { Button } from '@/components/ui/button',;
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link', // For a back button, changed from react-router-dom;
import {logErrorToProduction} from '@/utils/productionLogger',;
// Placeholder for user context/role checking;
// In a real app, this would come from an auth context;
const useAuth = () => {;
    // const { user } = useUserContext(), // Example from a real app;
    // return { isAdmin: user?.role === 'admin', isAuthenticated: !!user },;
    return { isAdmin: false, isAuthenticated: false }, // Default to non-admin, not authenticated for this example;
},;
interface SharedWhitepaper {;
  whitepaper_data: {;
    tokenName: string,;
    tokenSupply: string,;
    sections: Array<{ id: string, title: string, content: string }>,;
    distributionChartData: Array<{ name: string, value: number }>,;
    distributionBreakdown?: string;
  },;
  created_at: string,;
  is_public: boolean;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const WhitepaperViewPage: React.FC = () => {
  const router = useRouter()
  const { id: rawId } = router.query
  const id = typeof rawId === 'string' ? rawId : undefined
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { isAdmin } = useAuth(), // Get admin status
  useEffect((,) => {
    const fetchWhitepaper = async () => {
      if (!id) {

        setError("No whitepaper ID provided."),
        setLoading(false),

