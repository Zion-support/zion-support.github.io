        .order("created_at", { ascending: false }),
      
  
      
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return;
    
        ...project;
        status: newStatus}),
  
  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>;
        return <Badge variant="destructive">Canceled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;
  
