import React, { useState } from "react";
import { useAdminQuotes } from '@/src/src/hooks/useAdminQuotes';
import { useAuth } from '@/src/src/hooks/useAuth';
import {
  Card,
  CardContent
 } from '@/src/src/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/src/src/components/ui/tabs';
import { Navigate  } from 'react-router-dom.ts';
import type { QuoteRequest } from '@/src/src/types/quotes';
import { ProtectedRoute  } from '@/src/src/components/ProtectedRoute';
import { QuoteDetails  } from '@/src/src/components/quotes/QuoteDetails';
import { ExportToCSV  } from '@/src/src/components/quotes/ExportToCSV';
import { QuoteStatusCards,
  QuotesFilter,
  QuotesTable
 } from '@/src/src/components/admin/quotes';
export default function QuoteManager(...args[]):  {
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
