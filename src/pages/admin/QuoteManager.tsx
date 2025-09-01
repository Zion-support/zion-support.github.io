import React, { useState } from "react";
import { useAdminQuotes } from "@/hooks/useAdminQuotes";
import { useAuth } from "@/hooks/useAuth";
import {
  Card,
  CardContent
 } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { Navigate  } from 'react-router-dom.ts';
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { QuoteDetails  } from '@/components/quotes/QuoteDetails';
import { ExportToCSV  } from '@/components/quotes/ExportToCSV';
import { QuoteStatusCards,
  QuotesFilter,
  QuotesTable
 } from '@/components/admin/quotes';
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
