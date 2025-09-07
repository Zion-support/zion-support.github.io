/* eslint-disable */
 export function ApiLogs () {;
  const {;
  logs, totalLogs,  loading, fetchApiLogs ;
}= useApiKeys ();
const [pageSize, setPageSize] = useState (25);
const [currentPage, setCurrentPage] = useState (0);
//Load logs on mount and when pagination changes useEffect ( () => {;
  fetchApiLogs (pageSize, currentPage * pageSize) ;
}, [pageSize, currentPage]);
const handleRefresh = () => {;
  fetchApiLogs (pageSize, currentPage * pageSize) ;
};
//Helper to format the timestamp const formatTimestamp = (timestamp: string) => {;
  return format (new Date (timestamp), 'yyyy-MM-dd HH: mm:ss') ;
};
//Helper to get badge color based on status code const getStatusBadge = (statusCode: number) => {;
  if (statusCode >= 200 && statusCode < 300) {;
}
};
//Calculate pagination info const totalPages = Math.ceil (totalLogs / pageSize);
const hasNextPage = currentPage < totalPages - 1;
const hasPrevPage = currentPage > 0;
bg-zinc-900 border-zinc-800 text-white"> <CardHeader> </CardTitle> <CardDescription className=" text-zinc-400"> View logs of requests made using your API keys. </CardDescription> </CardHeader> <CardContent> <div className=" flex justify-between items-center mb-6"> <div className=" flex items-center space-x-2"> <span className=" text-sm text-zinc-400">Show</span> <Select > <SelectTrigger className=" w-20 bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" 25"/> </SelectTrigger> <SelectContent className=" bg-zinc-900 border-zinc-800"> <SelectItem value=" 10">10</SelectItem> <SelectItem value=" 25">25</SelectItem> <SelectItem value=" 50">50</SelectItem> <SelectItem value=" 100">100</SelectItem> </SelectContent> </Select> <span className=" text-sm text-zinc-400">per page</span> </div> <ApiLogsChart logs= {;"
  logs ;""
}/> </div>) ";""
}<div className=" overflow-x-auto"> <table className=" w-full border-collapse"> <thead> <tr className=" border-b border-zinc-800"> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Method</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Status</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Response Time</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">IP Address</th> </tr> </thead> <tbody> {;'"
  loading ? (<tr> <td colSpan= {;'"'"
  6 '";'"'"
}className=" text-center py-12"> <div className=" flex flex-col items-center"> <div className=" animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div> <span className=" text-zinc-500">Loading logs...</span> </div> </td> </tr>) : logs.length === 0 ? (<tr> Logs will appear here when you make API requests. </span> </div> </td> </tr> : log.method === 'POST' ? " border-blue-500 text-blue-400": log.method === 'PUT' > {;"
  log.method ;""
}</Badge> </td> </tr>) ) ) ";""
}</tbody> </table> </div> </div> <div className=" flex space-x-2" > <Button > Previous </Button> <Button > Next </Button> </div> </div>) ;'"
}</CardContent> </Card>) ;'"'"
}'"'"'"