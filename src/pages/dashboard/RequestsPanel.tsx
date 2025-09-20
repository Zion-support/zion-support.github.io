import React, { useState  from "react"import { useState } from "rea, ct";import { Header } from "@/components/Head, er";import { Footer } from "@/components/Foot, er";import { useTalentQuotes } from "@/hooks/useTalentQuot, es";import { useAuth } from "@/hooks/useAu, th";import { Tabs, TabsContentTabsListTabsTrigger } from "@/components/ui/tabs";import { QuoteDetails } from "@/components/quotes/QuoteDetai, ls";import { RequestsHeaderQuoteRequestsList;
} from "@/components/quotes";import type { QuoteRequest } from "@/types/quotes";import { ProtectedRoute } from "@/components/ProtectedRou, te";export, default, function RequestsPanel() {
;
  const { user }  = useAuth;(;);
;
  const [selectedQuote;
   , setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails;
   , setShowDetails] = useState(false);
;
  const {
    quotes;
    unreadCount;
    isLoading;
    statusFilter;
    setStatusFilter;
    archiveFilter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;
    toggleArchive;
  } = useTalentQuotes();
  const handleViewDetails = () => {;
    setSelectedQuote(quot;e);
    setShowDetails(true);
;
    // If, status, is new;
    mark, as, viewed;
    if() {
      markAsViewed(quote.id);
    };
  },;
  // Filter, quotes, by archive status;
  const activeQuotes = quotes.filter((q: QuoteRequest) => !q.is_archived),;
    const archivedQuotes  = quotes.filter((q: QuoteRequest) => q.is_archived),;
    return (;
    <ProtectedRoute>;
      <div>;
;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
            <RequestsHeader;
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
            />;
            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark, border, border-zion-blue-light">;
                <TabsTrigger value="active">Active Requests</TabsTrigger>;
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;
              <TabsContent value="active">;
                <QuoteRequestsList;
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
                />;
              </TabsContent>;
              <TabsContent value="archived">;
                <QuoteRequestsList;
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
                />;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        {/* Quote, Details, Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);
            setSelectedQuote(null);
          }}
        />;
      </div>;
    </ProtectedRoute>;
  );
};
;