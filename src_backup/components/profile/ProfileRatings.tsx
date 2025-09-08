interface ProfileRatingsProps {}
  userId: string,

  useEffect(() => {;

    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">

        <div className="md:w-1/3">
          <ReviewStats;
            averageRating={averageRating}
            totalReviews={ratingCount}

            ratingDistribution={ratingDistribution}
          />
        </div>
        "
        <div className="md:w-2/3">"
          <Tabs defaultValue="all">"
            <TabsList className="mb-4">"
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>"
              <TabsTrigger value="positive">Positive</TabsTrigger>"
              <TabsTrigger value="critical">Critical</TabsTrigger>

                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>

            <TabsContent value="positive">
              <ReviewsList;
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}              />;
            </TabsContent>;
'
            <TabsContent value='positive'>;

              <ReviewsList;
                reviews={reviews && reviews.filter(r => r && r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}

            <TabsContent value="critical">
              <ReviewsList

                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}

              />;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;