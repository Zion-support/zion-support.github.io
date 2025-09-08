/* eslint-disable */
 import { ;
  {;
  {;
  Eye, MoreHorizontal,  Archive, Trash2 ;
  } from "lucide-react";
import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
TableRow import {;
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuTrigger interface QuotesTableProps {;
  quotes: QuoteRequest[];
isArchived?: boolean;
isLoading: boolean;
updateStatus: (id: string,  status: QuoteStatus) => void;
toggleArchive: (id: string, isArchived: boolean) => void;
deleteQuote: (id: string) => void;
onViewDetails: (quote: QuoteRequest) => void ;
}export const QuotesTable: React.FC<QuotesTableProps> = ({;
  quotes;
isArchived = false;
isLoading;
updateStatus;
toggleArchive;
deleteQuote;
onViewDetails ;"
}) => {;""
  return (<div className="overflow-x-auto" > border-zion-blue-light hover:bg-zion-blue"> <TableHead className=" text-zion-slate-light">Talent</TableHead> <TableHead className=" text-zion-slate-light">Requester</TableHead> <TableHead className=" text-zion-slate-light">Project</TableHead> <TableHead className=" text-zion-slate-light">Budget</TableHead> <TableHead className=" text-zion-slate-light">Date</TableHead> <TableHead className=" text-zion-slate-light">Status</TableHead> <TableHead className=" text-zion-slate-light">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;"
  isLoading ? (<TableRow> <TableCell colSpan= {;""
  7 ";""
}className=" text-center py-10 text-zion-slate-light"> Loading quote requests... </TableCell> </TableRow>) : quotes.length === 0 ? (<TableRow> </TableCell> </TableRow>) : (quotes.map (quote => (<TableRow (quote.budget min && quote.budget max ? `$$ {;
  quote.budget min ;
}- $$ {;
  quote.budget max ;`
}` : quote.budget min ? `$$ {;
  quote.budget min ';''`
}` : 'Not specified') ;"
}</TableCell> </TableCell> <TableCell> <QuoteStatusBadge status= {;""
  quote.status ";""
}/> </TableCell> <TableCell> <div className=" flex items-center gap-2"> <Button > <Eye className=" h-4 w-4"/> <span className=" sr-only">View Details</span> </Button> {";""
  isArchived ? (<> <Button > <Archive className=" h-4 w-4"/> <span className=" sr-only">Unarchive</span> </Button> <Button ;"'"
}";'"'"
}> <Trash2 className=" h-4 w-4"/> <span className=" sr-only">Delete</span> </Button> </>) : (<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" icon"aria-label=" More actions"> <MoreHorizontal className=" h-4 w-4"/> <span className=" sr-only">Actions</span> </Button> </DropdownMenuTrigger> Mark as New </DropdownMenuItem> <DropdownMenuItem onClick={';''
  () => updateStatus (quote.id, 'in review') ;''
}> Mark as In Review </DropdownMenuItem> <DropdownMenuItem onClick={';''
  () => updateStatus (quote.id, 'responded') ;''
}> Mark as Responded </DropdownMenuItem> <DropdownMenuItem onClick={';''
  () => updateStatus (quote.id, 'accepted') ;''
}> Mark as Accepted </DropdownMenuItem> <DropdownMenuItem onClick={';''
  () => updateStatus (quote.id, 'closed') ;'
}> Mark as Closed </DropdownMenuItem> Archive </DropdownMenuItem> <DropdownMenuItem onClick={;''
  () => {';''
  if (window.confirm ('Are you sure you want to delete this quote request? This action cannot be undone.') ) {;"
  ;""
}";""
}className=" text-red-500"> <Trash2 className=" h-4 w-4 mr-2" /> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) ;
}</div> </TableCell> </TableRow>) ) ) ;
}</TableBody> </Table> </div>) ;'"
};'"'"
'"'"'"`