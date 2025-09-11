<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
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
}
}
}
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

onst WhitepaperViewPage: React.FC = () => {
ursor/fix-website-loading-errors-and-merge-6662
const WhitepaperViewPage: React.FC = () => {
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
        setError("No whitepaper ID provided.")
        setLoading(false)
        return
        return;
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
    }
    },
    }
    },
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
}
export default WhitepaperViewPage;

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
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default WhitepaperViewPage; import React, { useState, useEffect } from 'react';
import { use_router } from 'next / router', // Changed from use_params;
import { supabase } from '@/integrations / supabase / client';
import WhitepaperPreviewPanel from '@/components / WhitepaperPreviewPanel', // Re - use the preview panel;
import { Button } from '@/components / ui / button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next / link', // For a back button, changed from react-router-dom;
import {logErrorToProduction} from '@/utils / production_logger';
// Placeholder for user context / role checking;
// In a real app, this would come from an auth context;
const use_auth = () =>: any {
    // const { user } = useUserContext (), // Example from a real app;
    // return { is_admin: user?.role === 'admin', is_authenticated: !!user },
    return { is_admin: false, is_authenticated: false }, // Default to non - admin, not authenticated for this example;
},
interface SharedWhitepaper {
  whitepaper_data: {
    token_name: string,
    token_supply: string,
    sections: Array<{ id: string, title: string, content: string }>,
    distributionChartData: Array<{ name: string, value: number }>,
    distribution_breakdown?: string;
  },
  created_at: string,
  is_public: boolean;
}
const WhitepaperViewPage: React.FC = () => {
  const router = use_router (),
  const { id: raw_id } = router.query,
  const id = typeof raw_id === 'string' ? raw_id : undefined,
  const [shared_data, setSharedData] = useState < SharedWhitepaper | null>(null),
  const [loading, set_loading] = useState (true),
  const [error, set_error] = useState < string | null>(null),
  const { is_admin } = use_auth (), // Get admin status;
  useEffect ((, ) => {
    const fetch_whitepaper = async () => {
      // Check condition
if ( {) {
  $2
}
        set_error ("No whitepaper ID provided."),
        set_loading (false),
        return;
      }
      set_loading (true),
      set_error (null),
      try {
        const { data: response_data, error: func_error } = await supabase.functions.invoke ('get - shared - whitepaper', {
          body: { id }}),
        if (throw new Error (`Supabase function error: ${func_error.message}`), ) {
  $2
}
        if (.error) throw new Error ((response_data as any).error), ) {
  $2
}
        // Check condition
if (.whitepaper_data) {) {
  $2
}
          throw new Error ('Shared whitepaper not found or data is invalid.');
        }
        setSharedData (response_data as SharedWhitepaper);
      } catch (e: any) {
        logErrorToProduction ('Error fetching shared whitepaper:', { data:  e }),
        set_error (e.message || 'An unexpected error occurred.');

      } finally {
        setLoading(false)
      }



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
<<<<<<< HEAD
}

export default WhitepaperViewPage;import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router', // Changed from useParams;
import { supabase } from '@/integrations/supabase/client';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel;
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link', // For a back button, changed from react-router-dom;
import {logErrorToProduction} from '@/utils/productionLogger';
=======
  created_at: string
  is_public: boolean
}
import React, { useState, useEffect } from 'react',;
import { useRouter } from 'next/router', // Changed from useParams;
import { supabase } from '@/integrations/supabase/client',;
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel;
import { Button } from '@/components/ui/button',;
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link', // For a back button, changed from react-router-dom;
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Placeholder for user context/role checking;
// In a real app, this would come from an auth context;
const useAuth = () => {;
    // const { user } = useUserContext(), // Example from a real app;
    // return { isAdmin: user?.role === 'admin', isAuthenticated: !!user },;
    return { isAdmin: false, isAuthenticated: false }, // Default to non-admin, not authenticated for this example;
},;
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}

<<<<<<< HEAD
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
        setError("No whitepaper ID provided.")
        setLoading(false)
        return
        setError("No whitepaper ID provided."),
        setLoading(false),
        return
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const WhitepaperViewPage: React.FC = () => {;
  const router = useRouter(),;
  const { id: rawId } = router && router.query,;
  const id = typeof rawId === 'string' ? rawId : undefined,;
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const { isAdmin } = useAuth(), // Get admin status;

  useEffect((,) => {;
    const fetchWhitepaper = async () => {;
      if (!id) {;
        setError("No whitepaper ID provided."),;
        setLoading(false),;
        return;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
    }
    },
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      setLoading(true),;
      setError(null),;
      try {;
        const { data: responseData, error: funcError } = await supabase && supabase.functions.invoke('get-shared-whitepaper', {;
          body: { id }}),;

        if (funcError) throw new Error(`Supabase function error: ${funcError && funcError.message}`),;
        if (responseData && (responseData as any).error) throw new Error((responseData as any).error),;
        if (!responseData || !(responseData as any).whitepaper_data) {;
          throw new Error('Shared whitepaper not found or data is invalid.');
        }

        setSharedData(responseData as SharedWhitepaper);

      } catch (e: any) {;
        logErrorToProduction('Error fetching shared whitepaper:', { data:  e }),;
        setError(e && e.message || 'An unexpected error occurred.');
      } finally {;
        setLoading(false);
      }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },;
    fetchWhitepaper();
  }, [id]),;
  if (loading) {;
    return <div className="flex justify-center items-center h-screen"><p>Loading whitepaper...</p></div>;
  }
;
  if (error) {;
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">;
        <p>Error: {error}</p>;
        <Button asChild variant="link" className="mt-4">;
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
;
  if (!sharedData) { // Check sharedData which includes the is_public flag;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  if (!sharedData) { // Check sharedData which includes the is_public flag;

    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
         <div className="flex flex-col justify-center items-center h-screen">;
            <p>Whitepaper not found.</p> {/* This can be a generic message */}
            <Button asChild variant="link" className="mt-4">;
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>;
            </Button>;
        </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
;
  // Access control based on is_public and admin role;
  if (!sharedData.is_public && !isAdmin) {;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Access control based on is_public and admin role;
  if (!sharedData && sharedData.is_public && !isAdmin) {;

    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
  const { whitepaper_data: whitepaper } = sharedData,;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const { whitepaper_data: whitepaper } = sharedData,;


  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      <WhitepaperPreviewPanel;
        sections={whitepaper.sections}
        distributionChartData={whitepaper.distributionChartData}
        tokenName={whitepaper.tokenName}
        tokenSupply={whitepaper.tokenSupply}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <WhitepaperPreviewPanel

        sections = {whitepaper && whitepaper.sections,}
        distributionChartData = {whitepaper && whitepaper.distributionChartData,}
        tokenName = {whitepaper && whitepaper.tokenName,}
        tokenSupply = {whitepaper && whitepaper.tokenSupply,}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
    </div>;
  );
},;
<<<<<<< HEAD
<<<<<<< HEAD
export default WhitepaperViewPage;
export default WhitepaperViewPage;
        setError("No whitepaper ID provided."),
        setLoading(false),
=======

export default WhitepaperViewPage,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default WhitepaperViewPage;
export default WhitepaperViewPage;
=======

export default WhitepaperViewPage,;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        setLoading(false),
=======
        setLoading(false),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        setLoading(false),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
