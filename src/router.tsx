import React from "react";
impo, r, t {
} fr, o, m "rea, c, t-rout, e, r-d, o, m";
impo, r, t {
HelmetProvid, e, r;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";
// Pag, e, s
  import, HomePage, from "./pag, e, s/HomePa, g, e";
import, ServicesPage, from "./pag, e, s/ServicesPa, g, e";
import, AboutPage, from "./pag, e, s/AboutPa, g, e";
import, ContactPage, from "./pag, e, s/ContactPa, g, e";
import, BlogPage, from "./pag, e, s/BlogPa, g, e";
import, CaseStudiesPage, from "./pag, e, s/CaseStudiesPa, g, e";
import, SolutionsPage, from "./pag, e, s/SolutionsPa, g, e";
import, Resources, from "./pag, e, s/Resourc, e, s";
import, Pricing, from "./pag, e, s/Prici, n, g";
import, Partners, from "./pag, e, s/Partne, r, s";
import, Team, from "./pag, e, s/Te, a, m";
import, Privacy, from "./pag, e, s/Priva, c, y";
import, Terms, from "./pag, e, s/Ter, m, s";
import, ServicesCatalog, from "./pag, e, s/ServicesCatal, o, g";
import, SolutionsEnterprise, from "./pag, e, s/SolutionsEnterpri, s, e";
import, SolutionsSMB, from "./pag, e, s/SolutionsS, M, B";
import, SolutionsStartup, from "./pag, e, s/SolutionsStart, u, p";
import, SolutionsHealthcare, from "./pag, e, s/solutio, n, s/Healthca, r, e";
import, SolutionsFinancial, from "./pag, e, s/solutio, n, s/Financi, a, l";
import, SolutionsRetail, from "./pag, e, s/solutio, n, s/Reta, i, l";
import, SolutionsManufacturing, from "./pag, e, s/solutio, n, s/Manufacturi, n, g";
import, AISolutions, from "./pag, e, s/AISolutio, n, s";
import, ITServices, from "./pag, e, s/ITServic, e, s";
import, AIMicroSAAS, from "./pag, e, s/AIMicroSA, A, S";
import, CloudDevOps, from "./pag, e, s/servic, e, s/CloudDevO, p, s";
import, AIDataAnalytics, from "./pag, e, s/servic, e, s/AIDataAnalyti, c, s";
import, AdvancedCybersecurityAI, from "./pag, e, s/servic, e, s/AdvancedCybersecurity, A, I";
import, AIWorkflowAutomation, from "./pag, e, s/servic, e, s/AIWorkflowAutomati, o, n";
// Layout, Component, s
  import, Header, from "./componen, t, s/Head, e, r";
import, Footer, from "./componen, t, s/Foot, e, r";
import, Sidebar, from "./componen, t, s/Sideb, a, r";
import, BannerManager, from "./componen, t, s/BannerManag, e, r";
import, EnhancedErrorBoundary, from "./componen, t, s/EnhancedErrorBounda, r, y";
import, NotificationSystem, from "./componen, t, s/NotificationSyst, e, m";
import, PerformanceMonitor, from "./componen, t, s/PerformanceMonit, o, r";
import, EnhancedSEOHead, from "./componen, t, s/EnhancedSEOHe, a, d";
import, AccessibilityEnhancer, from "./componen, t, s/AccessibilityEnhanc, e, r";
import, PerformanceOptimizer, from "./componen, t, s/PerformanceOptimiz, e, r";
const, AppRoute, r: Rea, c, t.FC = () => {
  return (
    <HelmetProvid, e, r>
      <Rout, e, r>
        <div, className="m, i, n-h-screen, b, g-whi, t, e">
          <Head, e, r   />
          <ma, i, n>
            <Rout, e, s>
              <Route, pat, h="/" eleme, n, t={<HomePa, g, e />}  />
              <Route, pat, h="/servic, e, s" eleme, n, t={<ServicesPa, g, e />}  />
            <Route, pat, h="/servic, e, s/catal, o, g" eleme, n, t={<ServicesCatal, o, g />}  />
            <Route, pat, h="/servic, e, s/ai-servic, e, s" eleme, n, t={<AISolutio, n, s />}  />
            <Route, pat, h="/servic, e, s/it-servic, e, s" eleme, n, t={<ITServic, e, s />}  />
            <Route, pat, h="/servic, e, s/mic, r, o-sa, a, s" eleme, n, t={<AIMicroSA, A, S />}  />
            <Route, pat, h="/servic, e, s/clo, u, d" eleme, n, t={<CloudDevO, p, s />}  />
            <Route, pat, h="/servic, e, s/analyti, c, s" eleme, n, t={<AIDataAnalyti, c, s />}  />
            <Route, pat, h="/servic, e, s/securi, t, y" eleme, n, t={<AdvancedCybersecurity, A, I />}  />
            <Route, pat, h="/servic, e, s/automati, o, n" eleme, n, t={<AIWorkflowAutomati, o, n />}  />
            <Route, pat, h="/solutio, n, s" eleme, n, t={<SolutionsPa, g, e />}  />
            <Route, pat, h="/solutio, n, s/enterpri, s, e" eleme, n, t={<SolutionsEnterpri, s, e />}  />
            <Route, pat, h="/solutio, n, s/s, m, b" eleme, n, t={<SolutionsS, M, B />}  />
            <Route, pat, h="/solutio, n, s/start, u, p" eleme, n, t={<SolutionsStart, u, p />}  />
            <Route, pat, h="/solutio, n, s/healthca, r, e" eleme, n, t={<SolutionsHealthca, r, e />}  />
            <Route, pat, h="/solutio, n, s/financi, a, l" eleme, n, t={<SolutionsFinanci, a, l />}  />
            <Route, pat, h="/solutio, n, s/reta, i, l" eleme, n, t={<SolutionsReta, i, l />}  />
            <Route, pat, h="/solutio, n, s/manufacturi, n, g" eleme, n, t={<SolutionsManufacturi, n, g />}  />
            <Route, pat, h="/resourc, e, s" eleme, n, t={<Resourc, e, s />}  />
            <Route, pat, h="/prici, n, g" eleme, n, t={<Prici, n, g />}  />
            <Route, pat, h="/partne, r, s" eleme, n, t={<Partne, r, s />}  />
            <Route, pat, h="/te, a, m" eleme, n, t={<Te, a, m />}  />
            <Route, pat, h="/priva, c, y" eleme, n, t={<Priva, c, y />}  />
            <Route, pat, h="/ter, m, s" eleme, n, t={<Ter, m, s />}  />
              <Route, pat, h="/abo, u, t" eleme, n, t={<AboutPa, g, e />}  />
              <Route, pat, h="/conta, c, t" eleme, n, t={<ContactPa, g, e />}  />
              <Route, pat, h="/bl, o, g" eleme, n, t={<BlogPa, g, e />}  />
              <Route, pat, h="/ca, s, e-studi, e, s" eleme, n, t={<CaseStudiesPa, g, e />}  />
            </Rout, e, s>
          </ma, i, n>
          <Foot, e, r   />
        </d, i, v>
      </Rout, e, r>
    </HelmetProvid, e, r>
  );
};
// Lazy, load, components for, better, performance
  const, Hom, e = la, z, y(() => impo, r, t('./pag, e, s/Ho, m, e'));
const, Abou, t = la, z, y(() => impo, r, t('./pag, e, s/Abo, u, t'));
const, Service, s = la, z, y(() => impo, r, t('./pag, e, s/Servic, e, s'));
const, Solution, s = la, z, y(() => impo, r, t('./pag, e, s/Solutio, n, s'));
const, Resource, s = la, z, y(() => impo, r, t('./pag, e, s/Resourc, e, s'));
const, AISolution, s = la, z, y(() => impo, r, t('./pag, e, s/AISolutio, n, s'));
const, Pricin, g = la, z, y(() => impo, r, t('./pag, e, s/Prici, n, g'));
const, Dem, o = la, z, y(() => impo, r, t('./pag, e, s/De, m, o'));
const, Suppor, t = la, z, y(() => impo, r, t('./pag, e, s/Suppo, r, t'));
const, Contac, t = la, z, y(() => impo, r, t('./pag, e, s/Conta, c, t'));
const, Blo, g = la, z, y(() => impo, r, t('./pag, e, s/Bl, o, g'));
const, CaseStudie, s = la, z, y(() => impo, r, t('./pag, e, s/CaseStudi, e, s'));
// Service, page, s
  const, AIDataAnalytic, s = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/AIDataAnalyti, c, s'));
const, AIIntelligentDocumentProcessin, g = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/AIIntelligentDocumentProcessi, n, g'));
const, AIVirtualAssistan, t = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/AIVirtualAssista, n, t'));
const, AIWorkflowAutomatio, n = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/AIWorkflowAutomati, o, n'));
const, AIContentGenerato, r = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/AIContentGenerat, o, r'));
const, SmartAppointmentSchedule, r = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/SmartAppointmentSchedul, e, r'));
const, AdvancedCybersecurityA, I = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/AdvancedCybersecurity, A, I'));
const, RealTimeCognitiveAutomatio, n = la, z, y(() => impo, r, t('./pag, e, s/servic, e, s/RealTimeCognitiveAutomati, o, n'));
// Case, study, pages
  const, GlobalFinTechAITransformatio, n = la, z, y(() => impo, r, t('./pag, e, s/ca, s, e-studi, e, s/glob, a, l-finte, c, h-ai-transformati, o, n-20, 2, 5'));
const, GlobalRetailAITransformatio, n = la, z, y(() => impo, r, t('./pag, e, s/ca, s, e-studi, e, s/glob, a, l-reta, i, l-ai-transformati, o, n-20, 2, 5'));
const, GlobalTelecomCognitiveTransformatio, n = la, z, y(() => impo, r, t('./pag, e, s/ca, s, e-studi, e, s/glob, a, l-telec, o, m-cogniti, v, e-transformati, o, n-4-7-billi, o, n'));
const, HealthcareAITransformatio, n = la, z, y(() => impo, r, t('./pag, e, s/ca, s, e-studi, e, s/healthca, r, e-ai-transformati, o, n-20, 2, 5'));
// Blog, page, s
  const, PostBySlu, g = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/PostBySl, u, g'));
const, AdaptiveLearningPlatform, s = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/ai-20, 2, 5-o, c, t-adapti, v, e-learni, n, g-platfor, m, s'));
const, CognitiveAutomationEnterpriseRevolutio, n = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/ai-20, 2, 5-o, c, t-cogniti, v, e-automati, o, n-enterpri, s, e-revoluti, o, n'));
const, CognitiveComputingTransformatio, n = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/ai-20, 2, 5-cogniti, v, e-computi, n, g-enterpri, s, e-transformati, o, n'));
const, EnterpriseAITransformationSuccessStrategie, s = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/ai-20, 2, 5-o, c, t-enterpri, s, e-ai-transformati, o, n-succe, s, s-strategi, e, s'));
const, MultiAgentEnterpriseOrchestratio, n = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/ai-20, 2, 5-multiage, n, t-enterpri, s, e-orchestrati, o, n-revoluti, o, n'));
const, MultimodalEnterpriseIntelligenc, e = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/ai-20, 2, 5-o, c, t-multimod, a, l-enterpri, s, e-intelligen, c, e'));
const, NextGenIntelligentAutomationBreakthroug, h = la, z, y(() => impo, r, t('./pag, e, s/bl, o, g/ai-20, 2, 5-o, c, t-ne, x, t-g, e, n-intellige, n, t-automati, o, n-breakthrou, g, h'));
export, const, AppRouter: Rea, c, t.FC = () => {
  return (
    <Suspense, fallbac, k={<Loadi, n, g />}>
      <Rout, e, s>
      <Route, pat, h="/" eleme, n, t={<Ho, m, e />}  />
      <Route, pat, h="/abo, u, t" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/servic, e, s" eleme, n, t={<Servic, e, s />}  />
      <Route, pat, h="/solutio, n, s" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/resourc, e, s" eleme, n, t={<Resourc, e, s />}  />
      <Route, pat, h="/ai-solutio, n, s" eleme, n, t={<AISolutio, n, s />}  />
      <Route, pat, h="/prici, n, g" eleme, n, t={<Prici, n, g />}  />
      <Route, pat, h="/de, m, o" eleme, n, t={<De, m, o />}  />
      <Route, pat, h="/suppo, r, t" eleme, n, t={<Suppo, r, t />}  />
      <Route, pat, h="/servic, e, s/ai-workfl, o, w-automati, o, n" eleme, n, t={<AIWorkflowAutomati, o, n />}  />
      <Route, pat, h="/servic, e, s/ai-virtu, a, l-assista, n, t" eleme, n, t={<AIVirtualAssista, n, t />}  />
      <Route, pat, h="/servic, e, s/ai-da, t, a-analyti, c, s" eleme, n, t={<AIDataAnalyti, c, s />}  />
      <Route, pat, h="/servic, e, s/ai-intellige, n, t-docume, n, t-processi, n, g" eleme, n, t={<AIIntelligentDocumentProcessi, n, g />}  />
      <Route, pat, h="/servic, e, s/re, a, l-ti, m, e-cogniti, v, e-automati, o, n" eleme, n, t={<RealTimeCognitiveAutomati, o, n />}  />
      <Route, pat, h="/servic, e, s/advanc, e, d-cybersecuri, t, y-ai" eleme, n, t={<AdvancedCybersecurity, A, I />}  />
      <Route, pat, h="/servic, e, s/ai-conte, n, t-generat, o, r" eleme, n, t={<AIContentGenerat, o, r />}  />
      <Route, pat, h="/servic, e, s/sma, r, t-appointme, n, t-schedul, e, r" eleme, n, t={<SmartAppointmentSchedul, e, r />}  />
      <Route, pat, h="/servic, e, s/ai-predicti, v, e-analyti, c, s" eleme, n, t={<AIPredictiveAnalyti, c, s />}  />
      <Route, pat, h="/servic, e, s/sma, r, t-contra, c, t-aud, i, t" eleme, n, t={<SmartContractAud, i, t />}  />
      <Route, pat, h="/servic, e, s/ed, g, e-computi, n, g-ai" eleme, n, t={<EdgeComputing, A, I />}  />
      <Route, pat, h="/servic, e, s/conversation, a, l-ai" eleme, n, t={<Conversational, A, I />}  />
      <Route, pat, h="/servic, e, s/ai-ema, i, l-marketi, n, g" eleme, n, t={<AIEmailMarketi, n, g />}  />
      <Route, pat, h="/ca, s, e-studi, e, s" eleme, n, t={<CaseStudi, e, s />}  />
      <Route, pat, h="/ca, s, e-studi, e, s/glob, a, l-reta, i, l-ai-transformati, o, n-20, 2, 5" eleme, n, t={<GlobalRetailAITransformati, o, n />}  />
      <Route, pat, h="/ca, s, e-studi, e, s/healthca, r, e-ai-transformati, o, n-20, 2, 5" eleme, n, t={<HealthcareAITransformati, o, n />}  />
      <Route, pat, h="/ca, s, e-studi, e, s/glob, a, l-finte, c, h-ai-transformati, o, n-20, 2, 5" eleme, n, t={<GlobalFinTechAITransformati, o, n />}  />
      <Route, pat, h="/ca, s, e-studi, e, s/glob, a, l-telec, o, m-cogniti, v, e-transformati, o, n-4-7-billi, o, n" eleme, n, t={<GlobalTelecomCognitiveTransformati, o, n />}  />
      <Route, pat, h="/conta, c, t" eleme, n, t={<Conta, c, t />}  />
      <Route, pat, h="/bl, o, g" eleme, n, t={<Bl, o, g />}  />
      <Route, pat, h="/bl, o, g/:sl, u, g" eleme, n, t={<PostBySl, u, g />}  />
      <Route, pat, h="/bl, o, g/ai-20, 2, 5-o, c, t-multimod, a, l-enterpri, s, e-intelligen, c, e" eleme, n, t={<MultimodalEnterpriseIntelligen, c, e />}  />
      <Route, pat, h="/bl, o, g/ai-20, 2, 5-o, c, t-adapti, v, e-learni, n, g-platfor, m, s" eleme, n, t={<AdaptiveLearningPlatfor, m, s />}  />
      <Route, pat, h="/bl, o, g/ai-20, 2, 5-o, c, t-cogniti, v, e-automati, o, n-enterpri, s, e-revoluti, o, n" eleme, n, t={<CognitiveAutomationEnterpriseRevoluti, o, n />}  />
      <Route, pat, h="/bl, o, g/ai-20, 2, 5-o, c, t-enterpri, s, e-ai-transformati, o, n-succe, s, s-strategi, e, s" eleme, n, t={<EnterpriseAITransformationSuccessStrategi, e, s />}  />
      <Route, pat, h="/bl, o, g/ai-20, 2, 5-o, c, t-ne, x, t-g, e, n-intellige, n, t-automati, o, n-breakthrou, g, h" eleme, n, t={<NextGenIntelligentAutomationBreakthrou, g, h />}  />
      <Route, pat, h="/bl, o, g/ai-20, 2, 5-multiage, n, t-enterpri, s, e-orchestrati, o, n-revoluti, o, n" eleme, n, t={<MultiAgentEnterpriseOrchestrati, o, n />}  />
      <Route, pat, h="/bl, o, g/ai-20, 2, 5-cogniti, v, e-computi, n, g-enterpri, s, e-transformati, o, n" eleme, n, t={<CognitiveComputingTransformati, o, n />}  />
      {/* Additional, routes, for missing, page, s */}
      <Route, pat, h="/solutio, n, s/enterpri, s, e" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/s, m, b" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/start, u, p" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/governme, n, t" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/healthca, r, e" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/financi, a, l" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/manufacturi, n, g" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/reta, i, l" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/educati, o, n" eleme, n, t={<Solutio, n, s />}  />
      <Route, pat, h="/solutio, n, s/transportati, o, n" eleme, n, t={<Solutio, n, s />}  />
      {/* Resources, route, s */}
      <Route, pat, h="/whi, t, e-pape, r, s" eleme, n, t={<Resourc, e, s />}  />
      <Route, pat, h="/webina, r, s" eleme, n, t={<Resourc, e, s />}  />
      <Route, pat, h="/do, c, s" eleme, n, t={<Resourc, e, s />}  />
      <Route, pat, h="/do, c, s/a, p, i" eleme, n, t={<Resourc, e, s />}  />
      <Route, pat, h="/develop, e, r-too, l, s" eleme, n, t={<Resourc, e, s />}  />
      <Route, pat, h="/traini, n, g" eleme, n, t={<Resourc, e, s />}  />
      <Route, pat, h="/communi, t, y" eleme, n, t={<Resourc, e, s />}  />
      {/* Company, route, s */}
      <Route, pat, h="/te, a, m" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/partne, r, s" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/ne, w, s" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/pre, s, s" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/investo, r, s" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/sustainabili, t, y" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/diversi, t, y" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/caree, r, s" eleme, n, t={<Abo, u, t />}  />
      {/* Additional, service, routes */}
      <Route, pat, h="/quant, u, m-computi, n, g" eleme, n, t={<Servic, e, s />}  />
      <Route, pat, h="/cybersecuri, t, y" eleme, n, t={<Servic, e, s />}  />
      <Route, pat, h="/clo, u, d-devo, p, s" eleme, n, t={<Servic, e, s />}  />
      <Route, pat, h="/i, o, t-ed, g, e-computi, n, g" eleme, n, t={<Servic, e, s />}  />
      <Route, pat, h="/digit, a, l-tw, i, n" eleme, n, t={<Servic, e, s />}  />
      <Route, pat, h="/blockcha, i, n-we, b, 3" eleme, n, t={<Servic, e, s />}  />
      <Route, pat, h="/spa, c, e-te, c, h" eleme, n, t={<Servic, e, s />}  />
      {/* Additional, action, routes */}
      <Route, pat, h="/reque, s, t-quo, t, e" eleme, n, t={<Conta, c, t />}  />
      <Route, pat, h="/priva, c, y" eleme, n, t={<Priva, c, y />}  />
      <Route, pat, h="/ter, m, s" eleme, n, t={<Ter, m, s />}  />
      <Route, pat, h="/cooki, e, s" eleme, n, t={<Abo, u, t />}  />
      <Route, pat, h="/stat, u, s" eleme, n, t={<Suppo, r, t />}  />
      </Rout, e, s>
    </Suspen, s, e>
  );
};