return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Header />
      <Suspense fallback={<ListingGridSkeleton />}>
        <div className="min-h-screen bg-zion-blue">
          <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
              ← Back to Categories
            </Link>
          </div>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                {category.icon}
              </div>
            </div>
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              {category.title}
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
          {isLoading ? (
            <ListingGridSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing,) => (
                <ProductListingCard
key = {listing.id,}
                  listing = {listing,}
                  onRequestQuote = {handleRequestQuote,}
                  detailBasePath="/marketplace/listing"
                />
              ))}
            </div>
          )}
          </div>
        </div>
      </Suspense>
    </>
  )
}