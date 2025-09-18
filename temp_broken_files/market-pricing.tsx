            </div>
          </div>
          
          <div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentMarket.description}
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <divh2 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Competitive Analysis
          </divh2>
          
          <div className="space-y-8">
            {currentMarket.competitors.map((competitor, index) => (
              <div
                key={competitor.name}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{competitor.name}</h3>
                      <div className="flex items-center gap-2">
                        {getRatingStars(competitor.rating)}
                        <span className="text-sm text-gray-400">({competitor.rating})</span>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-400">Market Share:</span>
                        <p className="font-semibold text-cyan-400">{competitor.marketShare}</p>
                      <div>
                        <span className="text-sm text-gray-400">Pricing:</span>
                        <p className="font-semibold text-green-400">{competitor.pricing}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Strengths</h4>
                        <ul className="space-y-1">
                          {competitor.strengths.map((strength, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              {strength}
                          ))}
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Weaknesses</h4>
                        <ul className="space-y-1">
                          {competitor.weaknesses.map((weakness, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0" />
                              {weakness}
                          ))}
                  {competitor.name === 'Zion Tech Group' && (
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-center">
                        <Crown className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-cyan-400">Our Position</p>
                        <p className="text-xs text-gray-300 mt-1">Competitive advantage in AI consciousness and pricing</p>
                  )}
                </div>
              </div>
            ))}
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-sky-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Monitoring & Incident Response</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Datadog: <a className="text-cyan-400 underline" href={`https://www.datadoghq.com/pricing/`} target="_blank" rel="noopener noreferrer">datadoghq.com/pricing</a></li>
                <li>New Relic: <a className="text-cyan-400 underline" href={`https://newrelic.com/pricing`} target="_blank" rel="noopener noreferrer">newrelic.com/pricing</a></li>
                <li>PagerDuty: <a className="text-cyan-400 underline" href={`https://www.pagerduty.com/pricing/`} target="_blank" rel="noopener noreferrer">pagerduty.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$1,000/month depending on host count and alerting.</div>
            <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Feature Flags & Progressive Delivery</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>LaunchDarkly: <a className="text-cyan-400 underline" href={`https://launchdarkly.com/pricing/`} target="_blank" rel="noopener noreferrer">launchdarkly.com/pricing</a></li>
                <li>GrowthBook: <a className="text-cyan-400 underline" href={`https://www.growthbook.io/pricing`} target="_blank" rel="noopener noreferrer">growthbook.io/pricing</a></li>
                <li>Flagsmith: <a className="text-cyan-400 underline" href={`https://www.flagsmith.com/pricing`} target="_blank" rel="noopener noreferrer">flagsmith.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$800/month by environments and MAUs.</div>
            <div className="bg-black/30 rounded-2xl border border-teal-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">CI/CD & Platforms</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>GitHub Actions: <a className="text-cyan-400 underline" href={`https://github.com/pricing`} target="_blank" rel="noopener noreferrer">github.com/pricing</a></li>
                <li>CircleCI: <a className="text-cyan-400 underline" href={`https://circleci.com/pricing/`} target="_blank" rel="noopener noreferrer">circleci.com/pricing</a></li>
                <li>Render: <a className="text-cyan-400 underline" href={`https://render.com/pricing`} target="_blank" rel="noopener noreferrer">render.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$500/month for moderate pipelines and environments.</div>
            <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Feature Flags & Experimentation</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>LaunchDarkly: <a className="text-cyan-400 underline" href={`https://launchdarkly.com/pricing`} target="_blank" rel="noopener noreferrer">launchdarkly.com/pricing</a></li>
                <li>GrowthBook: <a className="text-cyan-400 underline" href={`https://www.growthbook.io/pricing`} target="_blank" rel="noopener noreferrer">growthbook.io/pricing</a></li>
                <li>Optimizely: <a className="text-cyan-400 underline" href={`https://www.optimizely.com/pricing/`} target="_blank" rel="noopener noreferrer">optimizely.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$1,500/month depending on MAUs and flags.</div>
            <div className="bg-black/30 rounded-2xl border border-green-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">A/B Testing & CRO</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>VWO pricing: <a className="text-cyan-400 underline" href={`https://vwo.com/plans/`} target="_blank" rel="noopener noreferrer">vwo.com/plans</a></li>
                <li>Convert: <a className="text-cyan-400 underline" href={`https://www.convert.com/pricing/`} target="_blank" rel="noopener noreferrer">convert.com/pricing</a></li>
                <li>Optimizely Web: <a className="text-cyan-400 underline" href={`https://www.optimizely.com/pricing/`} target="_blank" rel="noopener noreferrer">optimizely.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $49–$499/month based on visitors and experiments.</div>
            <div className="bg-black/30 rounded-2xl border border-red-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Incident Management & On-Call</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>PagerDuty pricing: <a className="text-cyan-400 underline" href={`https://www.pagerduty.com/pricing/`} target="_blank" rel="noopener noreferrer">pagerduty.com/pricing</a></li>
                <li>Opsgenie pricing: <a className="text-cyan-400 underline" href={`https://www.atlassian.com/software/opsgenie/pricing`} target="_blank" rel="noopener noreferrer">atlassian.com/software/opsgenie/pricing</a></li>
                <li>FireHydrant pricing: <a className="text-cyan-400 underline" href={`https://www.firehydrant.com/pricing/`} target="_blank" rel="noopener noreferrer">firehydrant.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $10–$500/month per responder depending on features.</div>
            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">SEO & Content</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Ahrefs pricing: <a className="text-cyan-400 underline" href={`https://ahrefs.com/pricing`} target="_blank" rel="noopener noreferrer">ahrefs.com/pricing</a></li>
                <li>Semrush pricing: <a className="text-cyan-400 underline" href={`https://www.semrush.com/pricing/`} target="_blank" rel="noopener noreferrer">semrush.com/pricing</a></li>
                <li>Clearscope pricing: <a className="text-cyan-400 underline" href={`https://www.clearscope.io/pricing`} target="_blank" rel="noopener noreferrer">clearscope.io/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$500/month depending on seats and projects.</div>
            <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Ecommerce Reviews & UGC</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Yotpo pricing: <a className="text-cyan-400 underline" href={`https://www.yotpo.com/pricing/`} target="_blank" rel="noopener noreferrer">yotpo.com/pricing</a></li>
                <li>Judge.me pricing: <a className="text-cyan-400 underline" href={`https://judge.me/pricing`} target="_blank" rel="noopener noreferrer">judge.me/pricing</a></li>
                <li>Loox pricing: <a className="text-cyan-400 underline" href={`https://loox.app/pricing`} target="_blank" rel="noopener noreferrer">loox.app/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $9–$199/month based on features and order volume.</div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Scheduling & Appointments</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Calendly pricing: <a className="text-cyan-400 underline" href={`https://calendly.com/pricing`} target="_blank" rel="noopener noreferrer">calendly.com/pricing</a></li>
                <li>Cal.com pricing: <a className="text-cyan-400 underline" href={`https://cal.com/pricing`} target="_blank" rel="noopener noreferrer">cal.com/pricing</a></li>
                <li>Acuity pricing: <a className="text-cyan-400 underline" href={`https://www.squarespace.com/pricing/acuity-scheduling`} target="_blank" rel="noopener noreferrer">squarespace.com/pricing/acuity-scheduling</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $10–$200/month depending on calendars and reminders.</div>
            <div className="bg-black/30 rounded-2xl border border-violet-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Learning Management (LMS)</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>TalentLMS pricing: <a className="text-cyan-400 underline" href={`https://www.talentlms.com/pricing`} target="_blank" rel="noopener noreferrer">talentlms.com/pricing</a></li>
                <li>Docebo pricing: <a className="text-cyan-400 underline" href={`https://www.docebo.com/pricing/`} target="_blank" rel="noopener noreferrer">docebo.com/pricing</a></li>
                <li>LearnWorlds pricing: <a className="text-cyan-400 underline" href={`https://www.learnworlds.com/pricing/`} target="_blank" rel="noopener noreferrer">learnworlds.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $60–$600/month depending on seats and content.</div>
            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Developer Productivity</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Sentry pricing: <a className="text-cyan-400 underline" href={`https://sentry.io/pricing/`} target="_blank" rel="noopener noreferrer">sentry.io/pricing</a></li>
                <li>Linear pricing: <a className="text-cyan-400 underline" href={`https://linear.app/pricing`} target="_blank" rel="noopener noreferrer">linear.app/pricing</a></li>
                <li>Postman pricing: <a className="text-cyan-400 underline" href={`https://www.postman.com/pricing/`} target="_blank" rel="noopener noreferrer">postman.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$300/month per team depending on usage.</div>
          {/* New categories with verified links */}
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Affiliate & Partnerships</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Refersion pricing: <a className="text-cyan-400 underline" href={`https://www.refersion.com/pricing`} target="_blank" rel="noopener noreferrer">refersion.com/pricing</a></li>
                <li>LeadDyno pricing: <a className="text-cyan-400 underline" href={`https://www.leaddyno.com/pricing`} target="_blank" rel="noopener noreferrer">leaddyno.com/pricing</a></li>
                <li>PartnerStack pricing: <a className="text-cyan-400 underline" href={`https://partnerstack.com/pricing`} target="_blank" rel="noopener noreferrer">partnerstack.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $49–$500/month by affiliates and orders.</div>
            <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Returns & Post‑Purchase</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Loop Returns: <a className="text-cyan-400 underline" href={`https://www.loopreturns.com/pricing`} target="_blank" rel="noopener noreferrer">loopreturns.com/pricing</a></li>
                <li>Returnly: <a className="text-cyan-400 underline" href={`https://returnly.com/`} target="_blank" rel="noopener noreferrer">returnly.com</a></li>
                <li>AfterShip Returns: <a className="text-cyan-400 underline" href={`https://www.aftership.com/returns-center/pricing`} target="_blank" rel="noopener noreferrer">aftership.com/returns-center/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $29–$299/month by orders and features.</div>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Helpdesk & ITSM</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Freshdesk pricing: <a className="text-cyan-400 underline" href={`https://freshdesk.com/pricing`} target="_blank" rel="noopener noreferrer">freshdesk.com/pricing</a></li>
                <li>Zendesk pricing: <a className="text-cyan-400 underline" href={`https://www.zendesk.com/pricing/`} target="_blank" rel="noopener noreferrer">zendesk.com/pricing</a></li>
                <li>Jira Service Management: <a className="text-cyan-400 underline" href={`https://www.atlassian.com/software/jira/service-management/pricing`} target="_blank" rel="noopener noreferrer">atlassian.com/.../pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $19–$1,000/month based on agents and SLAs.</div>
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-sky-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">CDP & Reverse ETL</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Segment: <a className="text-cyan-400 underline" href={`https://segment.com/pricing/`} target="_blank" rel="noopener noreferrer">segment.com/pricing</a></li>
                <li>RudderStack: <a className="text-cyan-400 underline" href={`https://www.rudderstack.com/pricing/`} target="_blank" rel="noopener noreferrer">rudderstack.com/pricing</a></li>
                <li>Hightouch (Reverse ETL): <a className="text-cyan-400 underline" href={`https://hightouch.com/pricing`} target="_blank" rel="noopener noreferrer">hightouch.com/pricing</a></li>
                <li>Census (Reverse ETL): <a className="text-cyan-400 underline" href={`https://www.getcensus.com/pricing`} target="_blank" rel="noopener noreferrer">getcensus.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$1,500/month depending on sources, destinations, and MAUs.</div>
            <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Returns & Logistics</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Loop Returns pricing: <a className="text-cyan-400 underline" href={`https://www.loopreturns.com/pricing`} target="_blank" rel="noopener noreferrer">loopreturns.com/pricing</a></li>
                <li>AfterShip Returns: <a className="text-cyan-400 underline" href={`https://www.aftership.com/returns-center/pricing`} target="_blank" rel="noopener noreferrer">aftership.com/returns-center/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $29–$299/month depending on orders and policies.</div>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Feature Flags & Experiments</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>LaunchDarkly: <a className="text-cyan-400 underline" href={`https://launchdarkly.com/pricing/`} target="_blank" rel="noopener noreferrer">launchdarkly.com/pricing</a></li>
                <li>Flagsmith: <a className="text-cyan-400 underline" href={`https://www.flagsmith.com/pricing`} target="_blank" rel="noopener noreferrer">flagsmith.com/pricing</a></li>
                <li>Split.io: <a className="text-cyan-400 underline" href={`https://www.split.io/pricing/`} target="_blank" rel="noopener noreferrer">split.io/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$800/month depending on flags and MAUs.</div>
          <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
            <h2 className="text-2xl font-semibold mb-2">Synthetic Monitoring & Browser Automation</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Checkly pricing: <a className="text-cyan-400 underline" href={`https://www.checklyhq.com/pricing/`} target="_blank" rel="noopener noreferrer">checklyhq.com/pricing</a></li>
              <li>Browserless pricing: <a className="text-cyan-400 underline" href={`https://www.browserless.io/pricing`} target="_blank" rel="noopener noreferrer">browserless.io/pricing</a></li>
              <li>Grafana Cloud k6: <a className="text-cyan-400 underline" href={`https://grafana.com/products/cloud/k6/`} target="_blank" rel="noopener noreferrer">grafana.com/products/cloud/k6</a></li>
            <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $20–$500/month depending on checks, regions, and concurrency.</div>
          <div className="bg-black/30 rounded-2xl border border-violet-500/30 p-6">
            <h2 className="text-2xl font-semibold mb-2">Email Deliverability & Monitoring</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>GlockApps pricing: <a className="text-cyan-400 underline" href={`https://glockapps.com/pricing/`} target="_blank" rel="noopener noreferrer">glockapps.com/pricing</a></li>
              <li>Mailgun monitoring: <a className="text-cyan-400 underline" href={`https://www.mailgun.com/pricing/`} target="_blank" rel="noopener noreferrer">mailgun.com/pricing</a></li>
              <li>Postmaster Tools: <a className="text-cyan-400 underline" href={`https://postmaster.google.com`} target="_blank" rel="noopener noreferrer">postmaster.google.com</a></li>
            <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $15–$300/month plus ESP fees depending on volumes.</div>
          <div className="bg-black/30 rounded-2xl border border-teal-500/30 p-6">
            <h2 className="text-2xl font-semibold mb-2">Secrets Management & Rotation</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>HashiCorp Vault: <a className="text-cyan-400 underline" href={`https://www.hashicorp.com/products/vault/pricing`} target="_blank" rel="noopener noreferrer">hashicorp.com/products/vault/pricing</a></li>
              <li>Doppler: <a className="text-cyan-400 underline" href={`https://www.doppler.com/pricing`} target="_blank" rel="noopener noreferrer">doppler.com/pricing</a></li>
              <li>AWS KMS: <a className="text-cyan-400 underline" href={`https://aws.amazon.com/kms/pricing/`} target="_blank" rel="noopener noreferrer">aws.amazon.com/kms/pricing</a></li>
            <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$1,000/month depending on key volume and audit needs.</div>
          <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
            <h2 className="text-2xl font-semibold mb-2">PDF Generation & Processing</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>DocRaptor: <a className="text-cyan-400 underline" href={`https://docraptor.com/pricing`} target="_blank" rel="noopener noreferrer">docraptor.com/pricing</a></li>
              <li>PDFMonkey: <a className="text-cyan-400 underline" href={`https://www.pdfmonkey.io/pricing`} target="_blank" rel="noopener noreferrer">pdfmonkey.io/pricing</a></li>
              <li>CloudConvert: <a className="text-cyan-400 underline" href={`https://cloudconvert.com/pricing`} target="_blank" rel="noopener noreferrer">cloudconvert.com/pricing</a></li>
            <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $15–$200/month depending on pages and concurrency.</div>
          <div className="text-center text-slate-400 mt-10">
            Need help benchmarking? <a href="/contact" className="text-cyan-400 underline">Contact us</a> — we align to transparent, vendor-verifiable pricing.
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-teal-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Observability & Monitoring</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Datadog pricing: <a className="text-cyan-400 underline" href={`https://www.datadoghq.com/pricing/`} target="_blank" rel="noopener noreferrer">datadoghq.com/pricing</a></li>
                <li>New Relic pricing: <a className="text-cyan-400 underline" href={`https://newrelic.com/pricing`} target="_blank" rel="noopener noreferrer">newrelic.com/pricing</a></li>
                <li>Grafana Cloud pricing: <a className="text-cyan-400 underline" href={`https://grafana.com/pricing/`} target="_blank" rel="noopener noreferrer">grafana.com/pricing</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$2,000/month by host count, metrics, and retention.</div>
            <div className="bg-black/30 rounded-2xl border border-lime-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Website Performance & RUM</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>SpeedCurve pricing: <a className="text-cyan-400 underline" href={`https://www.speedcurve.com/pricing/`} target="_blank" rel="noopener noreferrer">speedcurve.com/pricing</a></li>
                <li>Calibre pricing: <a className="text-cyan-400 underline" href={`https://calibreapp.com/pricing`} target="_blank" rel="noopener noreferrer">calibreapp.com/pricing</a></li>
                <li>Cloudflare Web Analytics: <a className="text-cyan-400 underline" href={`https://www.cloudflare.com/web-analytics/`} target="_blank" rel="noopener noreferrer">cloudflare.com/web-analytics</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$500/month depending on synthetic runs and MAUs.</div>
            <div className="bg-black/30 rounded-2xl border border-violet-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Data Labeling & Enrichment</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Scale AI: <a className="text-cyan-400 underline" href={`https://scale.com`} target="_blank" rel="noopener noreferrer">scale.com</a></li>
                <li>Labelbox pricing: <a className="text-cyan-400 underline" href={`https://labelbox.com/pricing/`} target="_blank" rel="noopener noreferrer">labelbox.com/pricing</a></li>
                <li>Hive data: <a className="text-cyan-400 underline" href={`https://thehive.ai`} target="_blank" rel="noopener noreferrer">thehive.ai</a></li>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$5,000/month based on volume and SLAs.</div>
      {/* Pricing Analysis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <divh2 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Pricing Analysis
          </divh2>
          
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Low End', price: currentMarket.pricingAnalysis.lowEnd, color: 'from-green-500 to-emerald-600' },
              { label: 'Mid Range', price: currentMarket.pricingAnalysis.midRange, color: 'from-yellow-500 to-orange-600' },
              { label: 'High End', price: currentMarket.pricingAnalysis.highEnd, color: 'from-red-500 to-pink-600' },
              { label: 'Our Position', price: currentMarket.pricingAnalysis.ourPosition, color: 'from-cyan-500 to-blue-600' }
            ].map((tier, index) => (
              <div
                key={tier.label}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <BarChart3 className="w-10 h-10 text-white" />
                <h3 className="text-lg font-bold mb-2">{tier.label}</h3>
                <p className="text-2xl font-bold text-cyan-400">{tier.price}</p>
              </div>
            ))}
          </div>
          
          <div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Strategic Advantages</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: 'Competitive Pricing',
                  description: 'Positioned in the mid-range with premium features that justify our pricing strategy.'
                },
                {
                  title: 'AI-First Approach',
                  description: 'Unique focus on AI consciousness and emotional intelligence sets us apart from competitors.'
                },
                {
                  title: 'Enterprise Focus',
                  description: 'Built specifically for enterprise needs with security, scalability, and compliance features.'
                }
              ].map((advantage, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-cyan-400 mb-2">{advantage.title}</h4>
                  <p className="text-sm text-gray-300">{advantage.description}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <divh2 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Market Trends & Opportunities
          </divh2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Growth Drivers</h3>
              <ul className="space-y-3">
                {[
                  'Increasing demand for AI consciousness in customer service',
                  'Quantum computing breakthroughs in cryptography',
                  'Automation needs in post-pandemic business operations',
                  'Digital transformation initiatives across industries',
                  'Growing focus on AI ethics and responsible development'
                ].map((driver, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{driver}</span>
                ))}
              </ul>
            </div>
            
            <div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Market Opportunities</h3>
              <ul className="space-y-3">
                {[
                  'Untapped markets in emerging economies',
                  'Integration opportunities with existing enterprise systems',
                  'Custom AI consciousness solutions for specific industries',
                  'Partnerships with research institutions and universities',
                  'White-label solutions for enterprise software providers'
                ].map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{opportunity}</span>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Compete in the Market?
            <p className="text-xl text-gray-300 mb-8">
              Our competitive pricing and unique AI consciousness features give you the edge 
              you need to succeed in today's rapidly evolving technology landscape.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Our Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              <a 
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Get Custom Quote
import React from "react";
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const function MarketPricing() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function MarketPricing() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );

export default function MarketPricing() {;
