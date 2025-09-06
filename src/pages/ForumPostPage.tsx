  const isAuthor = user?.id === post?.authorId;
  
  // Check if user is admin/mod
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin';
  



      return
    }
    


  const handlePinPost = () => {
    if (!isAdminOrMod) return;
    
    setPost({ ...post, isPinned: !post.isPinned }),
    

  const handleLockPost = () => {
    if (!isAdminOrMod) return;
    
    setPost({ ...post, isLocked: !post.isLocked }),
    
  
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),
  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h: mm a"),
