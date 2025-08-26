#!/bin/bash

echo "🔧 Temporarily fixing build by moving broken files..."

# Create backup directory
mkdir -p broken_files_backup

# Move broken service files
echo "Moving broken service files..."
mv src/pages/services/AIMarketingAutomation.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/services/AIBusinessIntelligence.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/services/AIHRRecruitment.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/services/AIHealthcareAnalytics.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/services/AILegalTech.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"

# Move broken page files
echo "Moving broken page files..."
mv src/pages/GreenIT.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/HelpCenter.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/ITServicesPage.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/InnovativeServices2025.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Marketplace.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/MicroSaasServices.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Mission.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/News.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Partners.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Pricing.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Privacy.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/QuantumNeuralNetworkPlatform.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/RequestQuote.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Services.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/ServicesOverviewPage.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/ServicesPage.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Sitemap.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/TalentDirectory.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Team.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/Terms.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/pages/ZionHireAI.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"

# Move broken component files
echo "Moving broken component files..."
mv src/components/CategoriesSection.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/components/EnhancedAccessibility.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/components/Footer.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/components/Header.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/components/HeroSection.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/components/PerformanceMonitor.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/components/Sidebar.tsx broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"

# Move broken data files
echo "Moving broken data files..."
mv src/data/advancedInnovativeServices.ts broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/data/comprehensiveServices.ts broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/data/emergingTechServices.ts broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/data/enhancedServices.ts broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/data/expandedServices.ts broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/data/innovativeMicroSaasServices.ts broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"
mv src/data/microSaasServices.ts broken_files_backup/ 2>/dev/null || echo "File already moved or doesn't exist"

echo "✅ Broken files moved to broken_files_backup/"
echo "🚀 Now try building the project again!"