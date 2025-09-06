 //Filter quotes based on selected filters const filteredQuotes = allQuotes.filter ( (quote) => {
  //Status filter if (statusFilter !== 'all' && quote.status !== statusFilter) {
  if (!quote.requester name.toLowerCase () .includes (query) && !quote.project name.toLowerCase () .includes (query) && !quote.project summary.toLowerCase () .includes (query) && ! (quote.talent name && quote.talent name.toLowerCase () .includes (query) ) ) {
  
}return true;
});
//Update quote status mutation 
}
});
//Archive/Unarchive mutation 
}
});
// Delete mutation const deleteMutation = useMutation ({
  mutationFn: (id: string) => quoteRequestService.delete (id), onSuccess: () => {
  toast ({
  
}
});
