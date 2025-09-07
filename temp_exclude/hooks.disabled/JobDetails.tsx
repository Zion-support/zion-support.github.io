return (
    <>
      <SEO 

        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />

                <div className="flex items-start">"
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />"
                  <div className="ml-3">"
                    <p className="text-sm text-muted-foreground">Deadline</p>"
                    <p className="font-medium">"
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : "Flexible"}
                    </p>

                  </div>
                </div>

                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium">

                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : "Flexible"}
                    </p>
                  </div>
                </div>
                "
                <div className="flex items-start">"
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />"
                  <div className="ml-3">"
                    <p className="text-sm text-muted-foreground">Job Type</p>"
                    <p className="font-medium">Freelance / Remote</p>
                  </div>
                </div>
                
                {!isOwnJob && (
                  <Button "
                    className="w-full mt-4" 
                    onClick={handleApply}
                    disabled={isOwnJob}
                  >;
                    Apply Now;
                  </Button>;
                )}

              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      {/* Job application modal */}
      {job && (

            id: job && job.id,
            title: job && job.title,
            description: job && job.description,'
            company_name: job && job.company_name ?? 'Company',
            budget: formatBudget(job && job.budget),
            client_id: job && job.client_id,

          }}

          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
    </>
  );

'"
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <ButtononClick={''
  () => router && router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;`
}router && router.push (`/login?redirect=$ {;'`
  encodeURIComponent (`/jobs/$ {';'
  jobId || '' ;

      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;

  job.title ;
'
}- $ {';'
  is_whitelabel ? brand_name : 'Zion AI Marketplace' ;`
}` ;

}description= {"
  job.description.substring (0, 160) ";"
}/> <Header /> <main className="container mx - auto px - 4 py - 8" > <div className="mb - 6" > <Button > ← Back to Jobs </Button> </div> <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6" > <div className="lg:col - span - 2" > <Card> <CardHeader> <div className="flex justify - between items - start" > <div> </div> </div> <Badge> {"
  job.category ";"
}</Badge> </div> </CardHeader> <CardContent className="space - y-6" > <div> </div> </div> <div> </Badge>) ) ";"
}</div> </div> </CardContent> </Card> </div> <div> <Card> </p> </div> </div> <div className="flex items - start" > <Briefcase className="mt - 1 h - 5 w - 5 text - muted - foreground" /> <div className="ml - 3" > <p className="text - sm text - muted - foreground" >Job Type</p> <p className="font - medium" >Freelance / Remote</p> </div> </div> {";"
  !isOwnJob && (<Button className="w - full mt - 4" on_click={}
  handle_apply ;
}disabled= {}
  isOwnJob ;

}> Apply Now </Button>) ;
}</div>) ;
}</CardContent> </Card> </div> </div> </main> {}
  /* Job application modal */ ;

}{}
  job && (<ApplyToJobModal job= {}
  {}
  />) ;
}</>) ;'"
}'"
}
}

}

            id: job.id,
            title: job.title,
            description: job.description,"
            company_name: job.company_name ?? "Company",