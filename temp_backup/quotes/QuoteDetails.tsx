/* eslint-disable */
 import {;
  Dialog;
DialogContent;
DialogHeader;
DialogTitle;
DialogDescription interface QuoteDetailsProps {;
  quote: QuoteRequest | null;
isOpen: boolean;
onClose: () => void ;
}export const QuoteDetails = ({;
  quote,  isOpen, onClose ;
}: QuoteDetailsProps) => {;
  if (!quote) return null;
const formatDate = (dateString?: string) => {;
  if (!dateString) return 'Not specified';''
try {';''
  return format (new Date (dateString), 'PPP') ;
}catch (e) {;
  return dateString;
}
};
return (<Dialog open= {;
  isOpen ;
}onOpenChange= {;
  (open) => !open && onClose () ;
}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span> {;
  quote.project name ;
}</span> <QuoteStatusBadge status= {;"
  quote.status ;""
}/> formatDate (quote.created at) ";""
}</DialogDescription> </DialogHeader> <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div> </CardContent> </Card> <Card> </div> </div> </CardContent> </Card> </div> {";""
  quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p> {;
  quote.project description ;
}</p> </>) ;
}(quote.budget min && quote.budget max ? `$$ {;
  quote.budget min ;
}- $$ {;
  quote.budget max ;'`
}` : quote.budget min ? `$$ {;''
  quote.budget min ';''`
}` : 'Not specified') ;
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>) ;'"
};'"'"
'"'"'"`