<<<<<<< HEAD
import { useState } from 'react';'''
import { SEO } from '@/components/SEO';'''
import { ProtectedRoute } from '@/components/ProtectedRoute';'''
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';'''
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard';'''
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder';
function PortfolioBuilderContent() {}
'
''
'''
  const [activeTab, setActiveTab] = useState('resume');
  return()
    <>
      <SEO;
        title="Portfolio Builder | Zion AI Marketplace""""
        description="Create and customize your resume and portfolio to showcase your skills and experience."""
      />"""
""""
      <main className="container mx-auto px-4 py-8">""""
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>

        <Tabs;
          value={activeTab}"""
          onValueChange={setActiveTab}""""
          className="space-y-6""""
        >""""
          <TabsList className="bg-muted/60 p-0">"""
            <TabsTrigger""""
              value="resume""""
              className="data-[state=active]:bg-background"""
            >
              Resume;
            </TabsTrigger>"""
            <TabsTrigger""""
              value="portfolio""""
              className="data-[state=active]:bg-background"""
            >
              Portfolio;
            </TabsTrigger>
          </TabsList>"""
""""
          <TabsContent value="resume" className="space-y-6">
            <ResumeWizard />
          </TabsContent>"""
""""
=======
import { useState } from 'react';
import SEO from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard';
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder';
function PortfolioBuilderContent() {

    const [activeTab, setActiveTab] = useState('resume');
    return (<>
      <SEO title="Portfolio Builder | Zion AI Marketplace" description="Create and customize your resume and portfolio to showcase your skills and experience."/>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-muted/60 p-0">
            <TabsTrigger value="resume" className="data-[state=active]:bg-background">Resume</TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-background">Portfolio</TabsTrigger>
          </TabsList>
          
          <TabsContent value="resume" className="space-y-6">
            <ResumeWizard />
          </TabsContent>
          
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
          <TabsContent value="portfolio" className="space-y-6">
            <PortfolioSection />
          </TabsContent>
        </Tabs>
      </main>
<<<<<<< HEAD
    </>
  );
}
export default function PortfolioBuilder() {}
  return()
    <ProtectedRoute>
      <PortfolioBuilderContent />
    </ProtectedRoute>
  );
}'"""
'"'"""
=======
      
    </>)}
export default function PortfolioBuilder() {

    return (<ProtectedRoute>
      <PortfolioBuilderContent />
    </ProtectedRoute>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
