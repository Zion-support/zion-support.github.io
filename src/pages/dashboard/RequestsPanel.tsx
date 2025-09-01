<<<<<<< HEAD
import {}
  RequestsHeader,
  QuoteRequestsList""""
} from "@/components/quotes";"""
;
export { function };
export default function RequestsPanel(...args[]):  {}
  const { user } = useAuth();

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState<typeof false>(false);

  const {}
=======
import React, { useState } from 'react.ts';

import { useState              } from 'react.ts';
import { Header              } from '@/components/Header';
import { Footer              } from '@/components/Footer';
import { useTalentQuotes              } from '@/hooks/useTalentQuotes';
import { useAuth              } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger              } from '@/components/ui/tabs';
import { QuoteDetails              } from '@/components/quotes/QuoteDetails';
import { RequestsHeader,
  QuoteRequestsList
             } from '@/components/quotes';
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute               } from '@/components/ProtectedRoute';

export default function RequestsPanel(...args[]: any):  {

  const { user } = useAuth();

  const [selectedQuote, setSelectedQuote] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
    quotes,
    unreadCount,
    isLoading,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    markAsViewed,
    markAsResponded,
<<<<<<< HEAD
    toggleArchive;
  } = useTalentQuotes();

    if (quote.status = == 'new') {;
      markAsViewed(quote.id)};

  // Filter quotes by archive status;
  return()    <ProtectedRoute>
      <div>"""
""""
        <div className="min-h-screen bg-zion-blue px-4 py-8">""""
          <div className="container mx-auto">
            <RequestsHeader unreadCount={unreadCount}
=======
    toggleArchive
  } = useTalentQuotes();

    if (quote.status = == 'new') {;
      markAsViewed(quote.id);
  };
  // Filter quotes by archive status
  const archivedQuotes = quotes.filter((q: anyanyanyanyanyanyanyanyanyanyanyanyanyQuoteRequest)              => q.is_archived);

  return (
    <ProtectedRoute>
      <div>
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader
              unreadCount={unreadCount}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
<<<<<<< HEAD
              />
"""
            {/* Main Content */}""""
            <Tabs defaultValue="active" className="mb-6">""""
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">""""
                <TabsTrigger value="active">Active Requests</TabsTrigger>""""
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>"""
""""
              <TabsContent value="active">
                <QuoteRequestsList quotes={activeQuotes}
=======
            />
            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                <QuoteRequestsList
                  quotes={activeQuotes}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
                  />
              </TabsContent>"""
""""
              <TabsContent value="archived">
                <QuoteRequestsList quotes={archivedQuotes}
=======
                />
              </TabsContent>
              <TabsContent value="archived">
                <QuoteRequestsList
                  quotes={archivedQuotes}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
                  />
=======
                />
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
              </TabsContent>
            </Tabs>
          </div>
        </div>
<<<<<<< HEAD

        {/* Quote Details Modal */}
        <QuoteDetails quote={selectedQuote}
          isOpen={showDetails}
          onClose={(: unknown {}
            setShowDetails(false);
            setSelectedQuote(null)}}
         />

      </div>
    </ProtectedRoute>
  )}'"""
'"'"""
=======
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {

            setShowDetails(false);
            setSelectedQuote(null)}}
        />
      </div>
    </ProtectedRoute>
  )}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
