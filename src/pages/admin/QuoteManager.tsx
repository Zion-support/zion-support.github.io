<<<<<<< HEAD
QuotesFilter,
  QuotesTable''
 } from '@/components/admin/quotes';
export { function };
export default function QuoteManager(...args[]):  {}
'
  const { user } = useAuth();''
  const isAdmin: any = user?.userType === 'admin';  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState<typeof false>(false);
  const {}
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState<typeof false>(false);
  const {}
=======

import React, { useState } from 'react.ts';
import { useAdminQuotes              } from '@/hooks/useAdminQuotes';
import { useAuth              } from '@/hooks/useAuth';
import { Card,
  CardContent
              } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger               } from '@/components/ui/tabs';
import { Navigate               } from 'react-router-dom.ts';
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute               } from '@/components/ProtectedRoute';
import { QuoteDetails               } from '@/components/quotes/QuoteDetails';
import { ExportToCSV               } from '@/components/quotes/ExportToCSV';
import { QuoteStatusCards,
  QuotesFilter,
  QuotesTable
              } from '@/components/admin/quotes';

export default function QuoteManager(...args[]: any):  {

  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';

  const [selectedQuote, setSelectedQuote] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
    quotes,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    searchQuery,
    setSearchQuery,
    dateRange,
    setDateRange,
    updateStatus,
    toggleArchive,
<<<<<<< HEAD
    deleteQuote;
  } = useAdminQuotes();
  // Count quotes by status;
  const statusCounts: any = {}
'
'"'"""
=======
    deleteQuote
  } = useAdminQuotes();
  // Count quotes by status
  const statusCounts = {

  <<<<<<< HEAD
    new: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)               => q.status === 'new').length,
    in_review: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)               => q.status === 'in_review').length,
    accepted: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)               => q.status === 'accepted').length,
    responded: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)               => q.status === 'responded').length,
  closed: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)               => q.status === 'closed').length;
  ;

};

  const handleViewDetails = (quote: anyanyanyanyanyanyanyanyanyanyanyanyanyQuoteRequest)               => {

=======
  new: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)              => q.status === 'new').length,
    in_review: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)              => q.status === 'in_review').length,;
    accepted: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)              => q.status === 'accepted').length,;
    responded: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)              => q.status === 'responded').length,;
  ;
  ;
  closed: anyanyanyanyanyanyanyanyanyanyanyanyanyquotes.filter((q: QuoteRequest)              => q.status === 'closed').length;
  ;
};

  const handleViewDetails = (quote: anyanyanyanyanyanyanyanyanyanyanyanyanyQuoteRequest)              => {;
    setSelectedQuote(quote);
    setShowDetails(true)};
  const handleResetFilters = () => {;
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: null, to: null });
  };
  if (!isAdmin) {

    return <Navigate to = "/unauthorized" replace />}
  return (
    <ProtectedRoute adminOnly>
      <div>
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>
              </div>
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />
            </div>
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
            {/* Filters */}
            <QuotesFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
              dateRange={dateRange}
              setDateRange={setDateRange}
              onReset={handleResetFilters}
            />
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Quotes</TabsTrigger>
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
                    quotes={quotes.filter((quote: anyanyanyanyanyanyanyanyanyanyanyanyanyQuoteRequest)               => !quote.is_archived)}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
                  />
                </Card>
              </TabsContent>
              <TabsContent value="archived">
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
                    quotes={quotes.filter((quote: anyanyanyanyanyanyanyanyanyanyanyanyanyQuoteRequest)               => quote.is_archived)}
                    isArchived={true}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
                  />
                </Card>
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
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
