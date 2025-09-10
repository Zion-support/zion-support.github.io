

export /**
 * ApiLogs - Function description;
 */
function ApiLogs() {
  const { logs, total_logs, loading, fetchApiLogs } = useApiKeys ();
  const [page_size, setPageSize] = useState (25);
  const [current_page, setCurrentPage] = useState (0);
  const hasNextPage = current_page < total_pages - 1;
  const hasPrevPage = current_page > 0);
}
  );


