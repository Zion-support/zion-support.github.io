import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router', // Changed from useParams
import { supabase } from '@/integrations/supabase/client';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link', // For a back button, changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger';
// Placeholder for user context/role checking
// In a real app, this would come from an auth context
const useAuth = () => {
    // const { user } = useUserContext(), // Example from a real app
    // return { isAdmin: user ?.role === 'admin', isAuthenticated: !!user },
    return { isAdmin: false, isAuthenticated: false}, // Default to non-admin, not authenticated for this example
},

interface SharedWhitepaper {
  whitepaper_data: {;
    tokenName: string;
    tokenSupply: string;
    sections: Array<{ id: string, title: string, content: string };>,
    distributionChartData: Array<{ name: string, value: number }>,
    distributionBreakdown?: string
  },
  created_at: string,
  is_public: boolean,
}

const WhitepaperViewPage: React.FC = () => {,
  const router = useRouter(),
  const { id: rawId } = router.query,
  const id = typeof rawId === 'string' ? rawId : undefined,
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null),
  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const { isAdmin } = useAuth(), // Get admin status

  useEffect(() => {
    const fetchWhitepaper = async () => {
      if (!id) {
        setError($2);
        setLoading($2);
        return
      }
      setLoading($2);
      setError($2);
      try {
        const { data: responseData, error: funcError} = await supabase.functions.invoke($2);
        if (funcError) throw new Error($2);
        if (responseData && (responseData as any).error) throw new Error((responseData as any).error),
        if (!responseData || !(responseData as any).whitepaper_data) {
          throw new Error('Shared whitepaper not found or data is invalid.')
        }

        setSharedData(responseData as SharedWhitepaper)

      } catch (e: any) {,
        logErrorToProduction('Error fetching shared whitepaper:', { data:  e }),
        setError(e.message || 'An unexpected error occurred.')
      } finally {
        setLoading(false)
      }
    },
    fetchWhitepaper()
  }, [id]),

  if (loading) {
    return <div className = $2;
  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
        <div className="mb-6 flex justify-between items-center">
            <Button asChild variant="outline">,
                 <Link href={isAdmin ? "/admin/whitepaper-generator" : "/"}> {/* Sensible back link */}
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                 </Link>
            </Button>
            {!sharedData.is_public && isAdmin && (
                <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                    Private (Admin View)
                </span>
            )}
        </div>
      <WhitepaperPreviewPanel
        sections={whitepaper.sections}
        distributionChartData={whitepaper.distributionChartData}
        tokenName={whitepaper.tokenName}
        tokenSupply={whitepaper.tokenSupply}
      />
    </div>
  )
},
;
export default WhitepaperViewPage;