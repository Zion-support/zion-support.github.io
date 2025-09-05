<<<<<<< HEAD
import React, { useState, useEffect } from 'react',;
import { useRouter } from 'next/router', // Changed from useParams;
import { supabase } from '@/integrations/supabase/client',;
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel;
import { Button } from '@/components/ui/button',;
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link', // For a back button, changed from react-router-dom;
import {logErrorToProduction} from '@/utils/productionLogger',;
;
;
// Placeholder for user context/role checking;
// In a real app, this would come from an auth context;
const useAuth = () => {;
    // const { user } = useUserContext(), // Example from a real app;
    // return { isAdmin:user?.role === 'admin', isAuthenticated:!!user },;
    return { isAdmin:false, isAuthenticated:false }, // Default to non-admin, not authenticated for this example;
},;
;
interface SharedWhitepaper {;
  whitepaper_data:{;
    tokenName:string,;
    tokenSupply:string,;
    sections:Array<{ id:string, title:string, content:string }>,;
    distributionChartData:Array<{ name:string, value:number }>,;
    distributionBreakdown?:string,;
  },;
  created_at:string,;
  is_public:boolean;
}
;
const WhitepaperViewPage:React.FC = () => {;
  const router = useRouter(),;
  const { id:rawId } = router.query,;
  const id = typeof rawId === 'string' ? rawId :undefined,;
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const { isAdmin } = useAuth(), // Get admin status;
;
  useEffect(() => {;
    const fetchWhitepaper = async () => {;
      if (!id) {;
        setError("No whitepaper ID provided."),;
        setLoading(false),;
        return,;
      }
      setLoading(true),;
      setError(null),;
      try {;
        const { data:responseData, error:funcError } = await supabase.functions.invoke('get-shared-whitepaper', {;
          body:{ id }}),;
;
        if (funcError) throw new Error(`Supabase function error:${funcError.message}`),;
        if (responseData && (responseData as any).error) throw new Error((responseData as any).error),;
        if (!responseData || !(responseData as any).whitepaper_data) {;
          throw new Error('Shared whitepaper not found or data is invalid.'),;
        }
;
        setSharedData(responseData as SharedWhitepaper),;
;
      } catch (e:any) {;
        logErrorToProduction('Error fetching shared whitepaper:', { data: e }),;
        setError(e.message || 'An unexpected error occurred.'),;
      } finally {;
        setLoading(false),;
      }
    },;
    fetchWhitepaper(),;
  }, [id]),;
;
  if (loading) {;
    return <div className="flex justify-center items-center h-screen"><p>Loading whitepaper...</p></div>,;
  }
;
  if (error) {;
    return (;
      <div className="flex flex-col justify-center items-center h-screen text-red-600">;
        <p>Error:{error}</p>;
        <Button asChild variant="link" className="mt-4">;
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
        </Button>;
      </div>;
    ),;
  }
;
  if (!sharedData) { // Check sharedData which includes the is_public flag;
    return (;
         <div className="flex flex-col justify-center items-center h-screen">;
            <p>Whitepaper not found.</p> {/* This can be a generic message */}
            <Button asChild variant="link" className="mt-4">;
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
            </Button>;
        </div>;
    ),;
  }
;
  // Access control based on is_public and admin role;
  if (!sharedData.is_public && !isAdmin) {;
    return (;
      <div className="flex flex-col justify-center items-center h-screen">;
        <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>;
        <p className="mb-4">This whitepaper is not public and you do not have permission to view it.</p>;
        <Button asChild variant="link">;
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
        </Button>;
      </div>;
    ),;
  }
;
  const { whitepaper_data:whitepaper } = sharedData,;
;
  return (;
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">;
        <div className="mb-6 flex justify-between items-center">;
            <Button asChild variant="outline">;
                 <Link href={isAdmin ? "/admin/whitepaper-generator" :"/"}> {/* Sensible back link */}
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back;
                 </Link>;
            </Button>;
            {!sharedData.is_public && isAdmin && (;
                <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">;
                    Private (Admin View);
                </span>;
            )}
        </div>;
      <WhitepaperPreviewPanel;
        sections={whitepaper.sections}
        distributionChartData={whitepaper.distributionChartData}
        tokenName={whitepaper.tokenName}
        tokenSupply={whitepaper.tokenSupply}
      />;
    </div>;
  ),;
},;
;
export default WhitepaperViewPage,;
=======
import React, { useState, useEffect } from 'react',
import { useRouter } from 'next/router', // Changed from useParams,
import { supabase } from '@/integrations/supabase/client',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel,
import { Button } from '@/components/ui/button',
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link', // For a back button, changed from react-router-dom,
import {logErrorToProduction} from '@/utils/productionLogger',
// Placeholder for user context/role checking
// In a real app, this would come from an auth context,
const useAuth = () => {
    // const { user } = useUserContext(), // Example from a real app
    // return { isAdmin: user?.role === 'admin', isAuthenticated: !!user },
    return { isAdmin: false, isAuthenticated: false }, // Default to non-admin, not authenticated for this example
},

interface SharedWhitepaper {
  whitepaperdata: {
    tokenName: string,
    tokenSupply: string,
    sections: Array<{ id: string, title: string, content: string }>,
    distributionChartData: Array<{ name: string, value: number }>,
    distributionBreakdown?: string
  },
  createdat: string,
  ispublic: boolean
}

const WhitepaperViewPage: React.FC = () => {
  const router = useRouter(),
  const { id: rawId } = router.query,
  const id = typeof rawId === 'string' ? rawId : undefined,
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const { isAdmin } = useAuth(), // Get admin status,
useEffect_(() => {const fetchWhitepaper = async () => {
      if (!id) {
        setError("No whitepaper ID provided."),
        setLoading(false),
        return      }
      setLoading(true),
      setError(null),
      try {
        const { data: responseData, error: funcError } = await supabase.functions.invoke('get-shared-whitepaper', {
          body: { id }}),

        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`),
        if (responseData && (responseData as any).error) throw new Error((responseData as any).error),
        if (!responseData || !(responseData as any).whitepaperdata) {
          throw new Error('Shared whitepaper not found or data is invalid.')
        }
        return}
      setLoading(true);
      setError(null);
      try {const { data: responseData, error: funcError} = await supabase.functions.invoke('get-shared-whitepaper', {body: { id}});

        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`);
        if (responseData && (responseData as any).error) throw new Error((responseData as any).error);
        if (!responseData || !(responseData as any).whitepaperdata) {throw new Error('Shared whitepaper not found or data is invalid.')}

        setSharedData(responseData as SharedWhitepaper)

      } catch (e: any) {
        logErrorToProduction('Error fetching shared whitepaper:', { data:  e }),
        setError(e.message || 'An unexpected error occurred.')
      } finally {
        setLoading(false)
      }
    },
    fetchWhitepaper()
  }, [id]),

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p>Loading whitepaper...</p></div>  }

  if (error) {
    return (
      <div className=&quot;flex flex-col justify-center items-center h-screen text-red-600&quot;>
      } catch (e: unknown) {logErrorToProduction('Error fetching shared whitepaper:', _{ data:  e});
        setError(e.message || 'An unexpected error occurred.')
      } finally {setLoading(false)}
    };
    fetchWhitepaper()
  }, [id]);

  if (loading) {return <div className="flex justify-center items-center h-screen"><p>Loading whitepaper...</p></div>}

  if (error) {return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">
        <p>Error: {error}</p>
        <Button asChild variant=&quot;link&quot; className=&quot;mt-4&quot;>
          <Link href=&quot;/&quot;><ArrowLeft className=&quot;mr-2 h-4 w-4&quot; /> Back to Home</Link>
        </Button>
      </div>
    )
  }

  if (!sharedData) {_// Check sharedData which includes the ispublic flag,
return (
         <div className=&quot;flex flex-col justify-center items-center h-screen&quot;>
            <p>Whitepaper not found.</p> {/* This can be a generic message */}
            <Button asChild variant=&quot;link&quot; className=&quot;mt-4&quot;>
              <Link href=&quot;/&quot;><ArrowLeft className=&quot;mr-2 h-4 w-4&quot; /> Back to Home</Link>
            </Button>
        </div>
    )
  }

  // Access control based on ispublic and admin role,
if (!sharedData.ispublic && !isAdmin) {
    return (
      <div className=&quot;flex flex-col justify-center items-center h-screen&quot;>
        <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Access Denied</h2>
        <p className=&quot;mb-4&quot;>This whitepaper is not public and you do not have permission to view it.</p>
        <Button asChild variant=&quot;link&quot;>
          <Link href=&quot;/&quot;><ArrowLeft className=&quot;mr-2 h-4 w-4&quot; /> Back to Home</Link>
        </Button>
      </div>
    )
  }

  const { whitepaperdata: whitepaper } = sharedData,

  return (
    <div className=&quot;container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen&quot;>
        <div className=&quot;mb-6 flex justify-between items-center&quot;>
            <Button asChild variant=&quot;outline&quot;>
                 <Link href={isAdmin ? &quot;/admin/whitepaper-generator&quot; : &quot;/&quot}> {/* Sensible back link */}
                    <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; /> Back
                 </Link>
            </Button>
            {!sharedData.ispublic && isAdmin && (
                <span className=&quot;px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full&quot;>                    Private (Admin View)
                </span>
            )}
        </div>
      <WhitepaperPreviewPanel,
sections={whitepaper.sections}
        distributionChartData={whitepaper.distributionChartData}
        tokenName={whitepaper.tokenName}
        tokenSupply={whitepaper.tokenSupply}
      />
    </div>
  )
},

export default WhitepaperViewPage,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
