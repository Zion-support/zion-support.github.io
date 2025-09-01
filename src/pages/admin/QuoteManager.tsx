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
    deleteQuote;
  } = useAdminQuotes();
  // Count quotes by status;
  const statusCounts: any = {}
'
'"'"""