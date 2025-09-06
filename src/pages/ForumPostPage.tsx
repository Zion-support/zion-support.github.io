
<<<<<<< HEAD

  const isAuthor = user?.id === post?.authorId;
  
  // Check if user is admin/mod
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin';
  

  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h: mm a"),

