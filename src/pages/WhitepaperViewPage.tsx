<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import React, { useState, useEffect } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState, useEffect } from 'react';

export default WhitepaperViewPage; import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useRouter } from 'next/router', // Changed from useParams
import { supabase  } from '@/integrations/supabase/client';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel
import { Button  } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link', // For a back button, changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger';
// Placeholder for user context/role checking
// In a real app, this would come from an auth context
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}

=======
>>>>>>> }

onst WhitepaperViewPage: React.FC = () => {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const WhitepaperViewPage: React.FC = () => {
>>>>>>>   const router = useRouter()
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

const WhitepaperViewPage: React.FC = () => {
  const router = useRouter()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { id: rawId } = router.query
  const id = typeof rawId === 'string' ? rawId : undefined
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { isAdmin } = useAuth(), // Get admin status
  useEffect((,) => {
    const fetchWhitepaper = async () => {
      if (!id) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        return;

=======
        setError("No whitepaper ID provided.")
        setLoading(false)
        return
        return;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        setError("No whitepaper ID provided.")
        setLoading(false)
        return
        setError("No whitepaper ID provided."),
        setLoading(false),
        return
;
const WhitepaperViewPage: React.FC = () => {;
  const router = useRouter(),;
  const { id: rawId } = router.query,;
  const id = typeof rawId === 'string' ? rawId : undefined,;
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const { isAdmin } = useAuth(), // Get admin status;
  useEffect(() => {;
    const fetchWhitepaper = async () => {;
      if (!id) {;
        setError("No whitepaper ID provided."),;
        setLoading(false),;
        return;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
      setLoading(true)
      setError(null)
      try {
        const { data: responseData, error: funcError } = await supabase.functions.invoke('get-shared-whitepaper', {
          body: { id }})
        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`)
        if (responseData && (responseData as any).error) throw new Error((responseData as any).error)
        if (!responseData |!(responseData as any).whitepaper_data) {
          throw new Error('Shared whitepaper not found or data is invalid.')
        }
        setSharedData(responseData as SharedWhitepaper)
      } catch (e: any) {
        logErrorToProduction('Error fetching shared whitepaper:', { data:  e })
        setError(e.message |'An unexpected error occurred.')
      } finally {
        setLoading(false)
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    }
    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    fetchWhitepaper()
  }, [id])
  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p>Loading whitepaper...</p></div>
  }
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">
        <p>Error: {error}</p>
        <Button asChild variant="link" className="mt-4">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
      </div>
    )
  }
  if (!sharedData) { // Check sharedData which includes the is_public flag
    return (
         <div className="flex flex-col justify-center items-center h-screen">
            <p>Whitepaper not found.</p> {/* This can be a generic message */}
            <Button asChild variant="link" className="mt-4">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
            </Button>
        </div>
    )
  }
  // Access control based on is_public and admin role
  if (!sharedData.is_public && !isAdmin) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>
        <p className="mb-4">This whitepaper is not public and you do not have permission to view it.</p>
        <Button asChild variant="link">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
      </div>
    )
  }
  const { whitepaper_data: whitepaper } = sharedData
  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
        <div className="mb-6 flex justify-between items-center">
            <Button asChild variant="outline">
                 <Link href={isAdmin ? "/admin/whitepaper-generator" : "/"}> {/* Sensible back link */}
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                 </Link>
            </Button>
            {!sharedData.is_public && isAdmin && (
                <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                    Private (Admin View)
                </span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
export default WhitepaperViewPage;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            )}
        </div>
      <WhitepaperPreviewPanel
        sections = {whitepaper.sections,}
        distributionChartData = {whitepaper.distributionChartData,}
        tokenName = {whitepaper.tokenName,}
        tokenSupply = {whitepaper.tokenSupply,}
      />
    </div>
  )
}
export default WhitepaperViewPage;

},
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },;
    fetchWhitepaper();
  }, [id]),;
  if (loading) {;
    return <div className="flex justify-center items-center h-screen"><p>Loading whitepaper...</p></div>;
  }
;
  if (error) {;
<<<<<<< HEAD
    return (;
=======
    return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <div className="flex flex-col justify-center items-center h-screen text-red-600">;
        <p>Error: {error}</p>;
        <Button asChild variant="link" className="mt-4">;
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD


  if (!sharedData) { // Check sharedData which includes the is_public flag;

    return (
=======
;
  if (!sharedData) { // Check sharedData which includes the is_public flag;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
         <div className="flex flex-col justify-center items-center h-screen">;
            <p>Whitepaper not found.</p> {/* This can be a generic message */}
            <Button asChild variant="link" className="mt-4">;
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
            </Button>;
        </div>;
    );
  }
<<<<<<< HEAD


  // Access control based on is_public and admin role;
  if (!sharedData && sharedData.is_public && !isAdmin) {;

    return (
=======
;
  // Access control based on is_public and admin role;
  if (!sharedData.is_public && !isAdmin) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex flex-col justify-center items-center h-screen">;
        <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>;
        <p className="mb-4">This whitepaper is not public and you do not have permission to view it.</p>;
        <Button asChild variant="link">;
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD


  const { whitepaper_data: whitepaper } = sharedData,;


  return (
=======
;
  const { whitepaper_data: whitepaper } = sharedData,;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">;
        <div className="mb-6 flex justify-between items-center">;
            <Button asChild variant="outline">;
                 <Link href={isAdmin ? "/admin/whitepaper-generator" : "/"}> {/* Sensible back link */}
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back;
                 </Link>;
            </Button>;
            {!sharedData.is_public && isAdmin && (;
                <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">;
                    Private (Admin View);
                </span>;
            )}
        </div>;
<<<<<<< HEAD
      <WhitepaperPreviewPanel

        sections = {whitepaper && whitepaper.sections,}
        distributionChartData = {whitepaper && whitepaper.distributionChartData,}
        tokenName = {whitepaper && whitepaper.tokenName,}
        tokenSupply = {whitepaper && whitepaper.tokenSupply,}
=======
      <WhitepaperPreviewPanel;
        sections={whitepaper.sections}
        distributionChartData={whitepaper.distributionChartData}
        tokenName={whitepaper.tokenName}
        tokenSupply={whitepaper.tokenSupply}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
    </div>;
  );
},;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default WhitepaperViewPage;

<<<<<<< HEAD
=======
export default WhitepaperViewPage;
export default WhitepaperViewPage;
>>>>>>> 
        setError("No whitepaper ID provided."),
        setLoading(false),

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default WhitepaperViewPage;
export default WhitepaperViewPage;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
    },
    fetch_whitepaper ();
  }, [id]),
  // Check condition
if ( {) {
  $2
}
    return <div className="flex justify - center items - center h - screen"><p > Loading whitepaper...</p></div>;
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex flex - col justify - center items - center h - screen text - red - 600">;
        <p > Error: {error}</p>;
        <Button as_child variant="link" className="mt - 4">;
          <Link href="/"><ArrowLeft className="mr - 2 h - 4 w - 4" /> Back to Home</Link>;
        </Button>;
      </div>);
  }
  // Check condition
if ( { // Check shared_data which includes the is_public flag) {
  $2
}
    return (
        <div className="flex flex - col justify - center items - center h - screen">;
            <p > Whitepaper not found.</p> {/* This can be a generic message */}
            <Button as_child variant="link" className="mt - 4">;
              <Link href="/"><ArrowLeft className="mr - 2 h - 4 w - 4" /> Back to Home</Link>;
            </Button>;
        </div>);
  }
  // Access control based on is_public and admin role;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex flex - col justify - center items - center h - screen">;
        <h2 className="text - 2xl font - semibold mb - 4">Access Denied</h2>;
        <p className="mb - 4">This whitepaper is not public and you do not have permission to view it.</p>;
        <Button as_child variant="link">;
          <Link href="/"><ArrowLeft className="mr - 2 h - 4 w - 4" /> Back to Home</Link>;
        </Button>;
      </div>);
  }
  const { whitepaper_data: whitepaper } = shared_data,
  return (
    <div className="container mx - auto p - 4 md:p - 8 bg - gray - 50 min - h-screen">;
        <div className="mb - 6 flex justify - between items - center">;
            <Button as_child variant="outline">;
                <Link href={is_admin ? "/admin / whitepaper - generator" : "/"}> {/* Sensible back link */}
                    <ArrowLeft className="mr - 2 h - 4 w - 4" /> Back;
                </Link>;
            </Button>;
            {!shared_data.is_public && is_admin && (
                <span className="px - 3 py - 1 text - xs font - semibold text - yellow - 800 bg - yellow - 200 rounded - full">;
                    Private (Admin View);
                </span>)}
        </div>;
      <WhitepaperPreviewPanel;
        sections = {whitepaper.sections, }
        distributionChartData = {whitepaper.distributionChartData, }
        token_name = {whitepaper.token_name, }
        token_supply = {whitepaper.token_supply, }
      />;
    </div>);
},
export default WhitepaperViewPage,
;

        setError("No whitepaper ID provided."),
        setLoading(false),
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
