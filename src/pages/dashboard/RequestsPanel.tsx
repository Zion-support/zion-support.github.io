
import {

  RequestsHeader,
  QuoteRequestsList""""
} from "@/components/quotes";"
;
export { function };
export default function RequestsPanel(...args[]):  {

  const { user } = useAuth();

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState<typeof false>(false);

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

    if (quote.status = == 'new') {;
      markAsViewed(quote.id)};

  // Filter quotes by archive status
  "
  return()    <ProtectedRoute>""
      <div>"""
""""
        <div className="min-h-screen bg-zion-blue px-4 py-8">""""
          <div className="container mx-auto">
            <RequestsHeader unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}"
              />""
"""
            {/* Main Content */}""""
            <Tabs defaultValue="active" className="mb-6">""""
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">""""
                <TabsTrigger value="active">Active Requests</TabsTrigger>""""
                <TabsTrigger value="archived">Archived</TabsTrigger>""
              </TabsList>"""
""""
              <TabsContent value="active">
                <QuoteRequestsList quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}"
                  />""
              </TabsContent>"""
""""
              <TabsContent value="archived">
                <QuoteRequestsList quotes={archivedQuotes}
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
        <QuoteDetails quote={selectedQuote}
          isOpen={showDetails}
          onClose={(: unknown {

            setShowDetails(false);
            setSelectedQuote(null)}}
         />


      </div>'"
    </ProtectedRoute>'"'"
  )}'"'"'"
'"'"'"'"