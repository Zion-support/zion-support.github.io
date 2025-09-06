
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>

            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
          </Button>
        </DialogContent>
      </Dialog>
    )
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'>;
            <Link href='/auth/login?returnTo=/equipment/recommendations'>;
              Sign In;
            </Link>          </Button>          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">;
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>;
          </Button>;
        </DialogContent>;
      </Dialog>;
    );
  }
  return (

          </div>
        ))}

      </div>;
    </div>;
  );
<<<<<<< HEAD
=======

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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
