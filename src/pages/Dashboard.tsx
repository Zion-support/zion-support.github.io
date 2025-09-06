
<<<<<<< HEAD

  const userWithExtendedProps = user as any;
  const userType = userWithExtendedProps?.userType || user?.user_metadata?.userType || 'talent';
  const roleForTour = userType === 'client' || userType === 'admin' ? 'client' : 'talent';



