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

export default WhitepaperViewPage,;

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
