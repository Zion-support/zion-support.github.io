/* eslint-disable */
 interface ExportToCSVProps {;
  quotes: QuoteRequest[];
filename?: string ;
}export const ExportToCSV = ({;
  quotes, filename = 'quote-requests' ;
}: ExportToCSVProps) => {;
  const handleExport = () => {;
  //Define CSV Headers const headers = [ 'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';';''
'StatusCreated Date' ];
quote.budget min ;
}- $$ {;
  quote.budget max ;'
}`: quote.budget min ? `$$ {;''
  quote.budget min ';''`
}` : 'Not specified');
quote.timeline;'
quote.status;''
new Date (quote.created at) .toLocaleDateString () ]);';''
//Create CSV content //Create download link className='flex items-center gap-2' disabled= {;
  quotes.length === 0 ;
}> <Download size= {;
  16 ;
}/> Export CSV </Button>) ;''
};''''
''''''`