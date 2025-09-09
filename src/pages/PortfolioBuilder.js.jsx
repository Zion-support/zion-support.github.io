import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard';
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder';
function PortfolioBuilderContent() {
    const [activeTab, setActiveTab] = useState('resume');
    return (<>
        <SEO
          title="Portfolio Builder | Zion AI Marketplace"
          description="Create and customize your resume and portfolio to showcase your skills and experience."
              />

        <div>Broken JSX</div>
          className="space-y-6"">"";
          <TabsList className="bg-muted/60 p-0">";
            <div>Broken JSX</div>
              className="data-[state=active]:bg-background">;
              Resume;
            </TabsTrigger>";
            <div>Broken JSX</div>
              className="data-[state=active]:bg-background">;
              Portfolio;
            </TabsTrigger>;
          </TabsList>";
"";
          <TabsContent value="resume" className="space-y-6">;
            <ResumeWizard />;
          </TabsContent>";
"";
          <TabsContent value="portfolio" className="space-y-6">;
            <PortfolioSection />;
          </TabsContent>;
        </Tabs>;
      </main>;
    </>;
  );,
}
export {};
  return null;
}
  return();
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>)}


export { PortfolioBuilderContent, PortfolioBuilder }
export { PortfolioBuilderContent, PortfolioBuilder }
export { PortfolioBuilderContent, PortfolioBuilder }
export { PortfolioBuilderContent, PortfolioBuilder }
export { PortfolioBuilderContent, PortfolioBuilder }