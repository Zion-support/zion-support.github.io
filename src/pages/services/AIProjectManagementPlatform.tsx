import { Calendar, Users, Check, ExternalLink, Phone, Mail, Brain, Target, TrendingUp, BarChart3, Clock, Zap, FolderOpen } from "lucide-react"
export default function AIProjectManagementPlatform() {;
  const features = [;
    'AI-powered project planning and scheduling optimizationIntelligent resource allocation and workload balancing',;
    'Predictive risk assessment and mitigation strategiesAutomated task prioritization and dependency management',;
    'Real-time project progress tracking and analyticsSmart team collaboration and communication tools',;
    'Automated reporting and stakeholder updatesIntegration with popular project management tools',;
    'Mobile app for on-the-go project managementAdvanced project portfolio management'
  ],;

  const benefits = [;
    'Complete projects 20-40% fasterReduce project costs by 15-30%',;
    'Improve team productivity by 25-50%Minimize project risks and delays',;
    'Better resource utilizationEnhanced stakeholder communication'
  ],;

  const useCases = [;
    'Software development projectsConstruction and engineering projects'
    'Marketing campaign managementEvent planning and execution'
    'Product development and launchResearch and development projects'
  ];
  const tiers = [;
    { ;
      name: 'Team',price: '$1,299/mo', ;
      details: ['Up to 25 team membersBasic AI insights', 'Email supportStandard integrations'] ;
    },;
    { ;
      name: 'Professional',price: '$3,499/mo', ;
      details: ['Up to 100 team membersAdvanced AI analytics', 'Priority supportCustom integrations'] ;
    },;
    { ;
      name: 'Enterprise',price: '$8,999/mo', ;
      details: ['Unlimited team membersCustom AI models', 'Dedicated supportWhite-label solution'] ;
    };
  ],;

  const projectTools = [;
    'Task ManagementResource Planning',;
    'Risk ManagementTime Tracking',;
    'Budget ManagementReporting & Analytics'
  ],;

  const aiCapabilities = [;
    'Predictive schedulingResource optimization',;
    'Risk predictionPerformance analytics',;
    'Automated reportingSmart notifications'
  ];
  return (
    <div className="min-h-screen bg-white">;
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20 text-center">;
        <div className="max-w-5xl mx-auto px-6">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
            <Calendar className="w-4 h-4 mr-2" /> AI-Powered Project Management;
          </[^>]*>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Project Management Platform</[^>]*>
          <p className="text-indigo-100 text-xl">Streamline your projects with intelligent planning, automated optimization, and predictive insights.</[^>]*>
        </[^>]*>
      </[^>]*>

      <section className="py-16 max-w-6xl mx-auto px-6">;
        <div className="grid md:grid-cols-2 gap-10">;
          <div>;
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Intelligent Project Features</[^>]*>
            <ul className="space-y-3">;
              {features.map((f) => (;
                <li key={f} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-zion-slate-dark">{f}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            <div className="mt-6 text-sm text-zion-slate-light">;
              SOC 2 Type II compliant. 99.9% uptime SLA. Enterprise-grade security.;
            </[^>]*>
          </[^>]*>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">;
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Project Plans</[^>]*>
            <div className="grid md:grid-cols-1 gap-4">;
              {tiers.map((t) => (;
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">;
                  <div className="text-lg font-semibold mb-1">{t.name}</[^>]*>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{t.price}</[^>]*>
                  <ul className="text-sm text-zion-slate-dark space-y-1">;
                    {t.details.map((d) => (<li key={d}>{d}</li>))};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            <div className="mt-6 flex flex-wrap gap-3">;
              <a href="/pricing" className="px-5 py-3 bg-indigo-600/10 text-indigo-600 rounded-lg hover:bg-indigo-600/20 transition-colors inline-flex items-center">;
                View Full Pricing <[^>]*/>
              </[^>]*>
              <a href="https://[^;]*
                Learn More <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <div className="mt-12 grid md:grid-cols-2 gap-8">;
          <div>;
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Project Benefits</[^>]*>
            <ul className="space-y-3">;
              {benefits.map((b) => (;
                <li key={b} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-zion-slate-dark">{b}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
          <div>;
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Use Cases</[^>]*>
            <ul className="space-y-3">;
              {useCases.map((u) => (;
                <li key={u} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-zion-slate-dark">{u}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <div className="mt-12">;
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">Project Management Tools</[^>]*>
          <div className="grid md:grid-cols-3 gap-6">;
            {projectTools.map((t) => (;
              <div key={t} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">;
                <[^>]*/>
                <div className="text-zion-slate-dark font-semibold">{t}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        <div className="mt-12">;
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">AI-Powered Capabilities</[^>]*>
          <div className="grid md:grid-cols-3 gap-6">;
            {aiCapabilities.map((c) => (;
              <div key={c} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">;
                <[^>]*/>
                <div className="text-zion-slate-dark font-semibold">{c}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-8">;
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Project Management Workflow</[^>]*>
          <div className="grid md: grid-cols-4 gap-4 text-center">;
            <div>;
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Project Planning</[^>]*>
              <p className="text-sm text-zion-slate-light">AI-powered scheduling</[^>]*>
            </[^>]*>
            <div>;
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Resource Allocation</[^>]*>
              <p className="text-sm text-zion-slate-light">Smart team assignment</[^>]*>
            </[^>]*>
            <div>;
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Execution & Monitoring</[^>]*>
              <p className="text-sm text-zion-slate-light">Real-time tracking</[^>]*>
            </[^>]*>
            <div>;
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Optimization</[^>]*>
              <p className="text-sm text-zion-slate-light">Continuous improvement</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">;
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Project Success Metrics</[^>]*>
          <div className="grid md:grid-cols-3 gap-6">;
            <div className="text-center">;
              <[^>]*/>
              <h4 className="font-semibold text-zion-slate-dark mb-2">On-Time Delivery</[^>]*>
                              <p className="text-sm text-zion-slate-light">Target: &gt, 95%</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <[^>]*/>
              <h4 className="font-semibold text-zion-slate-dark mb-2">Budget Adherence</[^>]*>
                              <p className="text-sm text-zion-slate-light">Target: &gt, 90%</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <[^>]*/>
              <h4 className="font-semibold text-zion-slate-dark mb-2">Team Satisfaction</[^>]*>
                              <p className="text-sm text-zion-slate-light">Target: &gt, 85%</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <div className="mt-14 text-center">;
          <div className="text-sm text-zion-slate-light mb-2">Ready to transform your project management?</[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg">;
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950;
            </[^>]*>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg">;
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </[^>]*>
          </[^>]*>
          <div className="mt-4 text-sm text-zion-slate-light">;
            Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">https://ziontechgroup.com</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};