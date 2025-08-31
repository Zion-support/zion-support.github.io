import React, { useState } from 'react.ts';

import { useState              } from 'react.ts';
import { Header              } from '@/components/Header';
import { Footer              } from '@/components/Footer';
import { useTalentQuotes              } from '@/hooks/useTalentQuotes';
import { useAuth              } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger              } from '@/components/ui/tabs';
import { QuoteDetails              } from '@/components/quotes/QuoteDetails';
import { RequestsHeader,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  QuoteRequestsList
             } from '@/components/quotes';
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute               } from '@/components/ProtectedRoute';

export default function RequestsPanel(...args[]: any):  {
  const { user } = useAuth();

  const [selectedQuote, setSelectedQuote] = useState<any>(null);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [showDetails, setShowDetails] = useState(false);
  const {
    quotes,
    unreadCount,
    isLoading,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    markAsViewed,
    markAsResponded,
    toggleArchive
  } = useTalentQuotes();

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    if (quote.status = == 'new') {;
      markAsViewed(quote.id);
  };
  // Filter quotes by archive status
  const archivedQuotes = quotes.filter((q: anyanyanyanyanyanyanyanyanyanyanyanyanyQuoteRequest)              => q.is_archived);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <ProtectedRoute>
      <div>
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
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
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
                />
              </TabsContent>
              <TabsContent value="archived">
                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
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
