import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LazyComponent from '../components/LazyComponent';
// Lazy load all page components
const AdvancedTechSolutions2026 = lazy(() => import('../pages/AdvancedTechSolutions2026'));
const InnovationShowcase2026 = lazy(() => import('../pages/InnovationShowcase2026'));
const AdvancedAITransformation2025 = lazy(() => import('../pages/AdvancedAITransformation2025'));
const QuantumComputingRevolution2025 = lazy(() => import('../pages/QuantumComputingRevolution2025'));
const NeuralInterfaceRevolution2025 = lazy(() => import('../pages/NeuralInterfaceRevolution2025'));
const NextGenTechShowcase2025 = lazy(() => import('../pages/NextGenTechShowcase2025'));
const AdvancedQuantumComputing2026 = lazy(() => import('../pages/AdvancedQuantumComputing2026'));
const NeuralInterfaceRevolution2026 = lazy(() => import('../pages/NeuralInterfaceRevolution2026'));
const AdvancedAISystems2026 = lazy(() => import('../pages/AdvancedAISystems2026'));
const SyntheticIntelligence2026 = lazy(() => import('../pages/SyntheticIntelligence2026'));
const QuantumNeuralFusion2026 = lazy(() => import('../pages/QuantumNeuralFusion2026'));
const NextGenAIRevolution2026 = lazy(() => import('../pages/NextGenAIRevolution2026'));
const QuantumComputingRevolution2026 = lazy(() => import('../pages/QuantumComputingRevolution2026'));
const RevolutionaryTechBlog2026 = lazy(() => import('../pages/RevolutionaryTechBlog2026'));
const ComprehensiveTechInsights2026 = lazy(() => import('../pages/ComprehensiveTechInsights2026'));
const AdvancedAnalyticsDashboard2026 = lazy(() => import('../pages/AdvancedAnalyticsDashboard2026'));
const BiotechRevolution2026 = lazy(() => import('../pages/BiotechRevolution2026'));
const SpaceTechInnovation2026 = lazy(() => import('../pages/SpaceTechInnovation2026'));
const AdvancedAIConsciousness2026 = lazy(() => import('../pages/AdvancedAIConsciousness2026'));
const UltimateTechShowcase2026 = lazy(() => import('../pages/UltimateTechShowcase2026'));
const AdvancedBiotechRevolution2026 = lazy(() => import('../pages/AdvancedBiotechRevolution2026'));
const SpaceTechRevolution2026 = lazy(() => import('../pages/SpaceTechRevolution2026'));
const AdvancedRoboticsRevolution2026 = lazy(() => import('../pages/AdvancedRoboticsRevolution2026'));
const QuantumConsciousnessRevolution2026 = lazy(() => import('../pages/QuantumConsciousnessRevolution2026'));
const InterdimensionalTech2027 = lazy(() => import('../pages/InterdimensionalTech2027'));
const UltimateTechShowcase2027 = lazy(() => import('../pages/UltimateTechShowcase2027'));
const RevolutionaryInnovationHub2027 = lazy(() => import('../pages/RevolutionaryInnovationHub2027'));
const SyntheticBiologyRevolution2027 = lazy(() => import('../pages/SyntheticBiologyRevolution2027'));
const AdvancedTechBreakthrough2025 = lazy(() => import('../pages/AdvancedTechBreakthrough2025'));
const InnovationShowcase2025 = lazy(() => import('../pages/InnovationShowcase2025'));
const RevolutionaryTechBreakthrough2027 = lazy(() => import('../pages/RevolutionaryTechBreakthrough2027'));
const UltimateAIRevolution2027 = lazy(() => import('../pages/UltimateAIRevolution2027'));
const QuantumRealityEngine2027 = lazy(() => import('../pages/QuantumRealityEngine2027'));
const QuantumComputingBreakthrough2035Page = lazy(() => import('../pages/QuantumComputingBreakthrough2035'));
const NeuralInterfaceRevolution2036Page = lazy(() => import('../pages/NeuralInterfaceRevolution2036'));
const InterdimensionalTech2037Page = lazy(() => import('../pages/InterdimensionalTech2037'));
// Route configuration
const routeConfig = [
  { path: '/pages/AdvancedTechSolutions2026', component: AdvancedTechSolutions2026 },
  { path: '/pages/InnovationShowcase2026', component: InnovationShowcase2026 },
  { path: '/pages/AdvancedAITransformation2025', component: AdvancedAITransformation2025 },
  { path: '/pages/QuantumComputingRevolution2025', component: QuantumComputingRevolution2025 },
  { path: '/pages/NeuralInterfaceRevolution2025', component: NeuralInterfaceRevolution2025 },
  { path: '/pages/NextGenTechShowcase2025', component: NextGenTechShowcase2025 },
  { path: '/pages/AdvancedQuantumComputing2026', component: AdvancedQuantumComputing2026 },
  { path: '/pages/NeuralInterfaceRevolution2026', component: NeuralInterfaceRevolution2026 },
  { path: '/pages/AdvancedAISystems2026', component: AdvancedAISystems2026 },
  { path: '/pages/SyntheticIntelligence2026', component: SyntheticIntelligence2026 },
  { path: '/pages/QuantumNeuralFusion2026', component: QuantumNeuralFusion2026 },
  { path: '/pages/NextGenAIRevolution2026', component: NextGenAIRevolution2026 },
  { path: '/pages/QuantumComputingRevolution2026', component: QuantumComputingRevolution2026 },
  { path: '/pages/RevolutionaryTechBlog2026', component: RevolutionaryTechBlog2026 },
  { path: '/pages/ComprehensiveTechInsights2026', component: ComprehensiveTechInsights2026 },
  { path: '/pages/AdvancedAnalyticsDashboard2026', component: AdvancedAnalyticsDashboard2026 },
  { path: '/pages/BiotechRevolution2026', component: BiotechRevolution2026 },
  { path: '/pages/SpaceTechInnovation2026', component: SpaceTechInnovation2026 },
  { path: '/pages/AdvancedAIConsciousness2026', component: AdvancedAIConsciousness2026 },
  { path: '/pages/UltimateTechShowcase2026', component: UltimateTechShowcase2026 },
  { path: '/pages/AdvancedBiotechRevolution2026', component: AdvancedBiotechRevolution2026 },
  { path: '/pages/SpaceTechRevolution2026', component: SpaceTechRevolution2026 },
  { path: '/pages/AdvancedRoboticsRevolution2026', component: AdvancedRoboticsRevolution2026 },
  { path: '/pages/QuantumConsciousnessRevolution2026', component: QuantumConsciousnessRevolution2026 },
  { path: '/pages/InterdimensionalTech2027', component: InterdimensionalTech2027 },
  { path: '/pages/UltimateTechShowcase2027', component: UltimateTechShowcase2027 },
  { path: '/pages/RevolutionaryInnovationHub2027', component: RevolutionaryInnovationHub2027 },
  { path: '/pages/SyntheticBiologyRevolution2027', component: SyntheticBiologyRevolution2027 },
  { path: '/pages/AdvancedTechBreakthrough2025', component: AdvancedTechBreakthrough2025 },
  { path: '/pages/InnovationShowcase2025', component: InnovationShowcase2025 },
  { path: '/pages/RevolutionaryTechBreakthrough2027', component: RevolutionaryTechBreakthrough2027 },
  { path: '/pages/UltimateAIRevolution2027', component: UltimateAIRevolution2027 },
  { path: '/pages/QuantumRealityEngine2027', component: QuantumRealityEngine2027 },
  { path: '/pages/QuantumComputingBreakthrough2035', component: QuantumComputingBreakthrough2035Page },
  { path: '/pages/NeuralInterfaceRevolution2036', component: NeuralInterfaceRevolution2036Page },
  { path: '/pages/InterdimensionalTech2037', component: InterdimensionalTech2037Page },
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <LazyComponent>
              <Component />
            </LazyComponent>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
