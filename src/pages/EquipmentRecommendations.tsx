

  useEffect((,) => {
    if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
        .finally(() => setLoading(false)) }        .catch((,) => setError(true))
        .finally((,) => setLoading(false))
  }, [isAuthenticated, user]),

  if (!isAuthenticated) {;
