=======
Calendar,
  Clock,
  DollarSign,
  Tag,;
  Users;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


  if (isLoading) {
    return <JobDetailsSkeleton />
  }
  if (error |!job) {
    return (
      <>
        <Header />

      </>
    )
  }
  const handleApply = () => {
    if (!isAuthenticated) {

  return (
    <>
      <SEO
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />;
      <Header />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => router.push('/careers')}
          >;

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>

                    </div>
                  </div>
                  <Badge>{job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>
                  <div className="whitespace-pre-wrap">
                    {job.description}
                  </div>
                </div>

                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start">
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{formatBudget(job.budget)}</p>
                  </div>
                </div>

                {isOwnJob && (
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
                )}

      {/* Job application modal */}
      {job && (
        <ApplyToJobModal
          job={{

          }}

          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
    </>
  );


  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <ButtononClick={'
  () => router && router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router && router.push (`/login?redirect=$ {;
  encodeURIComponent (`/jobs/$ {';
  jobId || '' ;

      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;
          job={{
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? 'Company',
            budget: format_budget (job.budget),
            client_id: job.client_id,
          }}
          is_open={isApplyModalOpen}
          on_close={() => setIsApplyModalOpen (false)}        />)}
    </>);
;
  return (<> <Header /> <div className="container mx - auto px - 4 py - 16 text - center" > <h1 className="text - 2xl font - bold mb - 4" >Job Not Found</h1> <p className="mb - 8" >The job you're looking for doesn't exist or has been removed.</p> <Button on_click={';
  () => router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router.push (`/login?redirect=$ {
  encodeURIComponent (`/jobs/$ {';
  job_id || '' ;
}`) ;
}`);
//Added null check for jobId return;
}setIsApplyModalOpen (true) ;

};
const isOwnJob = user?.id === job && job.client id;
`$ {;
  job && job.title ;
}
const isOwnJob = user?.id === job.client id;
`$ {
  job.title ;

}- $ {';
  is_whitelabel ? brand_name : 'Zion AI Marketplace' ;
}` ;

}description= {
  job.description.substring (0, 160) ";
}/> <Header /> <main className="container mx - auto px - 4 py - 8" > <div className="mb - 6" > <Button > ← Back to Jobs </Button> </div> <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6" > <div className="lg:col - span - 2" > <Card> <CardHeader> <div className="flex justify - between items - start" > <div> </div> </div> <Badge> {
  job.category ";
}</Badge> </div> </CardHeader> <CardContent className="space - y-6" > <div> </div> </div> <div> </Badge>) ) ";
}</div> </div> </CardContent> </Card> </div> <div> <Card> </p> </div> </div> <div className="flex items - start" > <Briefcase className="mt - 1 h - 5 w - 5 text - muted - foreground" /> <div className="ml - 3" > <p className="text - sm text - muted - foreground" >Job Type</p> <p className="font - medium" >Freelance / Remote</p> </div> </div> {";
  !isOwnJob && (<Button className="w - full mt - 4" on_click={
  handle_apply ;
}disabled= {
  isOwnJob ;

}> Apply Now </Button>) ;
}</div>) ;
}</CardContent> </Card> </div> </div> </main> {
  /* Job application modal */ ;

}{
  job && (<ApplyToJobModal job= {
  {

  />) ;
}</>) ;
}'"
}
}

<<<<<<< HEAD
            client_id: job.client_id}}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
    </>;
  );
}
;
