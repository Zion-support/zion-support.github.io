}, [markSlackConnected]);
  return (;
    <>;
      <SEO;"
        title="API & Integrations";"
        description="Extend Zion by embedding widgets or using our REST API for custom workflows.";"
        keywords="Zion API, Slack integration, embed widget";"
        canonical="https://app.ziontechgroup.com/features/integrations";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;"
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;"
      <main className="bg-background text-white py-12">;"
        <div className="container mx-auto px-4 md: px-6">;"
          <GradientHeading className="mb-4 text-center">API & Integrations</GradientHeading>;"
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Automate your workflows by connecting Zion with the tools you already use.;
          </p>;"
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;"
              src="https://placehold.co/800x400";"
              alt="Screenshot showing integrations";"
              className="object-cover";
            />;

          <ul className='list - disc list - inside space - y-2 mb - 8 text - zion - slate - light'>;
            <li > Trigger Slack notifications for new orders or messages.</li>;
            <li > Embed talent search or job listings directly on your site.</li>;

            <li>;
              Build custom analytics by pulling data from our REST endpoints.;
            </li>;
          </ul>;

                Visit our Developer Portal for authentication guides and;
                endpoint references.;
              </p>;
            </div>;
            <div>;

                Yes, free tier requests are limited per hour. Contact sales for;
                higher limits.;
              </p>;
            </div>;
          </div>;

              <Link href="/developers">Learn More</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;

;