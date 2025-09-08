/* eslint-disable */
 import {;
  Card;
CardContent;
CardHeader;
CardTitle;
CardDescription type QuoteRequestCardProps = {;
  quote: QuoteRequest;
onViewDetails: (quote: QuoteRequest) => void;
onMarkAsResponded?: (id: string) => void;
onToggleArchive: (id: string, isArchived: boolean) => void ;
};
quote, onViewDetails, onMarkAsResponded, onToggleArchive ;
}) => {;
  //Format date for display const formatDate = (dateString: string) => {;
  try {;
  </CardDescription> </div> <QuoteStatusBadge status= {;
  quote.status ;
}/> </div> </CardHeader> <CardContent> </div> <div className="flex justify-between items-center mt-4" > <Button > <Eye className="h-4 w-4" /> View Details </Button> onClick={;""
  () => onMarkAsResponded (quote.id) ";""
}className="flex items-center gap-1" > <MessageSquare className="h-4 w-4" /> Mark Responded </Button>) ";""
}<Button) : (<ArchiveIcon className="h-4 w-4" />) ;
}</Button> </div> </div> </CardContent> </Card>) ;"
};""
"""