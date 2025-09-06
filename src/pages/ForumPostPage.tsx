<<<<<<< HEAD
  const isAuthor = user?.id === post?.authorId;
  
  // Check if user is admin/mod
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin';
  
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
      return
    }
<<<<<<< HEAD
    
<<<<<<< HEAD

<<<<<<< HEAD

  const handlePinPost = () => {
    if (!isAdminOrMod) return;
    
    setPost({ ...post, isPinned: !post.isPinned }),
    
<<<<<<< HEAD

  const handleLockPost = () => {
    if (!isAdminOrMod) return;
    
    setPost({ ...post, isLocked: !post.isLocked }),
    
<<<<<<< HEAD
  
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),
  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h: mm a"),
