import React, {_useState, _useEffect} from 'react';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel'; // Re-use the preview panel
import Link from 'next/link'; // For a back button, changed from react-router-dom


// Placeholder for user context/role checking
// In a real app, this would come from an auth context
const _useAuth = () => {_// const { user} = useUserContext(); // Example from a real app
    // return {_isAdmin: user?.role === 'admin', _isAuthenticated: !!user};
    return {_isAdmin: false, _isAuthenticated: false}; // Default to non-admin, not authenticated for this example
};

interface SharedWhitepaper {_whitepaper_data: {
    tokenName: string;
    tokenSupply: string;
    sections: Array<{ id: string; title: string; content: string}>;
    distributionChartData: Array<{_name: string; value: number}>;
    distributionBreakdown?: string;
  };
  created_at: string;
  is_public: boolean;
}

const WhitepaperViewPage: React.FC = () => {_const _router = useRouter();
  const { id: rawId} = router.query;
  const _id = typeof rawId === 'string' ? rawId : undefined;
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {_isAdmin} = useAuth(); // Get admin status

  useEffect__(() => {_const _fetchWhitepaper = async () => {
      if (!id) {
        setError("No whitepaper ID provided.");
        setLoading(false);
        return;}
      setLoading(true);
      setError(null);
      try {_const { data: responseData, _error: funcError} = await supabase.functions.invoke('get-shared-whitepaper', {_body: { id}});

        if (funcError) throw new Error(`Supabase function error: ${_funcError.message}`);
        if (_responseData && (responseData as any).error) throw new Error((responseData as any).error);
        if (!responseData || !(responseData as any).whitepaper_data) {_throw new Error('Shared whitepaper not found or data is invalid.');}

        setSharedData(responseData as SharedWhitepaper);

      } catch (e: unknown) {_logErrorToProduction('Error fetching shared whitepaper:', _{ data:  e});
        setError(e.message || 'An unexpected error occurred.');
      } finally {_setLoading(false);}
    };
    fetchWhitepaper();
  }, [id]);

  if (loading) {_return <div className="flex justify-center items-center h-screen"><p>Loading whitepaper...</p></div>;}

  if (error) {_return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">
        <p>Error: {error}</p>
        <Button asChild variant="link" className="mt-4">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
      </div>
    );
  }

  if (!sharedData) {_// Check sharedData which includes the is_public flag
    return (
         <div className="flex flex-col justify-center items-center h-screen">
            <p>Whitepaper not found.</p> {/* This can be a generic message */}
            <Button asChild variant="link" className="mt-4">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
            </Button>
        </div>
    );
  }

  // Access control based on is_public and admin role
  if (!sharedData.is_public && !isAdmin) {_return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>
        <p className="mb-4">This whitepaper is not public and you do not have permission to view it.</p>
        <Button asChild variant="link">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
      </div>
    );}

  const {_whitepaper_data: whitepaper} = sharedData;

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
        <div className="mb-6 flex justify-between items-center">
            <Button asChild variant="outline">
                 <Link href={_isAdmin ? "/admin/whitepaper-generator" : "/"}> {_/* Sensible back link */}
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                 </Link>
            </Button>
            {_!sharedData.is_public && isAdmin && (
                <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                    Private (Admin View)
                </span>
            )}
        </div>
      <WhitepaperPreviewPanel
        sections={_whitepaper.sections}
        distributionChartData={_whitepaper.distributionChartData}
        tokenName={_whitepaper.tokenName}
        tokenSupply={_whitepaper.tokenSupply}
      />
    </div>
  );
};

export default WhitepaperViewPage;
