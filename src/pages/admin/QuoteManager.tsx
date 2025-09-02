import React, { useState } from 'react';
import { useAdminQuotes } from '@/hooks/useAdminQuotes';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navigate } from 'react-router-dom';
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { QuoteDetails } from '@/components/quotes/QuoteDetails';
import { ExportToCSV } from '@/components/quotes/ExportToCSV';
import { QuoteStatusCards, QuotesFilter, QuotesTable } from '@/components/admin/quotes';

export default function QuoteManager() {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  
  const {
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
    deleteQuote
  } = useAdminQuotes();

  // Count quotes by status
  const statusCounts = {
    new: quotes.filter((q: QuoteRequest) => q.status === 'new').length,
    in_review: quotes.filter((q: QuoteRequest) => q.status === 'in_review').length,
    accepted: quotes.filter((q: QuoteRequest) => q.status === 'accepted').length,
    responded: quotes.filter((q: QuoteRequest) => q.status === 'responded').length,
    closed: quotes.filter((q: QuoteRequest) => q.status === 'closed').length
  };

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading quotes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Quotes</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const handleQuoteSelect = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedQuote(null);
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Quote Manager</h1>
            <p className="mt-2 text-gray-600">
              Manage and track all quote requests from potential clients
            </p>
          </div>

          {/* Status Cards */}
          <div className="mb-8">
            <QuoteStatusCards statusCounts={statusCounts} />
          </div>

          {/* Main Content */}
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="all">All ({quotes.length})</TabsTrigger>
                  <TabsTrigger value="new">New ({statusCounts.new})</TabsTrigger>
                  <TabsTrigger value="in_review">In Review ({statusCounts.in_review})</TabsTrigger>
                  <TabsTrigger value="accepted">Accepted ({statusCounts.accepted})</TabsTrigger>
                  <TabsTrigger value="responded">Responded ({statusCounts.responded})</TabsTrigger>
                  <TabsTrigger value="closed">Closed ({statusCounts.closed})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                  <div className="space-y-6">
                    <QuotesFilter
                      statusFilter={statusFilter}
                      setStatusFilter={setStatusFilter}
                      archiveFilter={archiveFilter}
                      setArchiveFilter={setArchiveFilter}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      dateRange={dateRange}
                      setDateRange={setDateRange}
                    />
                    
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">All Quotes</h3>
                      <ExportToCSV quotes={quotes} />
                    </div>
                    
                    <QuotesTable
                      quotes={quotes}
                      onQuoteSelect={handleQuoteSelect}
                      onStatusUpdate={updateStatus}
                      onToggleArchive={toggleArchive}
                      onDelete={deleteQuote}
                    />
                  </div>
                </TabsContent>

                {Object.entries(statusCounts).map(([status, count]) => (
                  <TabsContent key={status} value={status} className="mt-6">
                    <div className="space-y-6">
                      <QuotesFilter
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        archiveFilter={archiveFilter}
                        setArchiveFilter={setArchiveFilter}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                      />
                      
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold capitalize">
                          {status.replace('_', ' ')} Quotes ({count})
                        </h3>
                        <ExportToCSV 
                          quotes={quotes.filter((q: QuoteRequest) => q.status === status)} 
                        />
                      </div>
                      
                      <QuotesTable
                        quotes={quotes.filter((q: QuoteRequest) => q.status === status)}
                        onQuoteSelect={handleQuoteSelect}
                        onStatusUpdate={updateStatus}
                        onToggleArchive={toggleArchive}
                        onDelete={deleteQuote}
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Quote Details Modal */}
        {showDetails && selectedQuote && (
          <QuoteDetails
            quote={selectedQuote}
            onClose={handleCloseDetails}
            onStatusUpdate={updateStatus}
            onToggleArchive={toggleArchive}
            onDelete={deleteQuote}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}