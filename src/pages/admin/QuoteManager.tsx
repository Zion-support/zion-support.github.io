import React, { useState } from "react";
import { _useAdminQuotes } from "@/hooks/useAdminQuotes";
import { _useAuth } from "@/hooks/useAuth";
import { _Card } from "@/components/ui/card";
import { _Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { _Navigate } from "react-router-dom";
import { _ProtectedRoute } from "@/components/ProtectedRoute";
import { _QuoteDetails } from "@/components/quotes/QuoteDetails";
import { _ExportToCSV } from "@/components/quotes/ExportToCSV";
import { _QuoteStatusCards, QuotesFilter, QuotesTable } from "@/components/admin/quotes";

import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QuoteDetails from '@/components/QuoteDetails';
export default function QuoteManager() {
    const { user } = useAuth();
    const _isAdmin = user?.userType === 'admin';
    const [selectedQuote, setSelectedQuote] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const { quotes, isLoading, error, statusFilter, setStatusFilter, archiveFilter, setArchiveFilter, searchQuery, setSearchQuery, dateRange, setDateRange, updateStatus, toggleArchive, deleteQuote } = useAdminQuotes();
    // Count quotes by status
    const _statusCounts = {
        new: quotes.filter(q => q.status === 'new').length,
        in_review: quotes.filter(q => q.status === 'in_review').length,
        accepted: quotes.filter(q => q.status === 'accepted').length,
        responded: quotes.filter(q => q.status === 'responded').length,
        closed: quotes.filter(q => q.status === 'closed').length
    };
    const _handleViewDetails = (quote) => {
        setSelectedQuote(quote);
        setShowDetails(true);
    };
    const _handleResetFilters = () => {
        setStatusFilter('all');
        setArchiveFilter('all');
        setSearchQuery('');
        setDateRange({ from: undefined, to: undefined });
    };
    if (!isAdmin) {
        return <Navigate to="/unauthorized" replace/>;
    }
    return (<ProtectedRoute adminOnly>
      <div>
        
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>
              </div>
              <ExportToCSV quotes={quotes} filename="zion-quote-requests"/>
            </div>
            
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts}/>
            
            {/* Filters */}
            <QuotesFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter} archiveFilter={archiveFilter} setArchiveFilter={setArchiveFilter} dateRange={dateRange} setDateRange={setDateRange} onReset={handleResetFilters}/>
            
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Quotes</TabsTrigger>
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active">
                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable quotes={quotes.filter(quote => !quote.is_archived)} isLoading={isLoading} updateStatus={updateStatus} toggleArchive={toggleArchive} deleteQuote={deleteQuote} onViewDetails={handleViewDetails}/>
                </Card>
              </TabsContent>
              
              <TabsContent value="archived">
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable quotes={quotes.filter(quote => quote.is_archived)} isArchived={true} isLoading={isLoading} updateStatus={updateStatus} toggleArchive={toggleArchive} deleteQuote={deleteQuote} onViewDetails={handleViewDetails}/>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Quote Details Modal */}
        <QuoteDetails quote={selectedQuote} isOpen={showDetails} onClose={() => {
            setShowDetails(false);
            setSelectedQuote(null);
        }}/>
        
        
      </div>
    </ProtectedRoute>);
}
