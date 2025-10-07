/**
 * Banner Registry - Centralized banner management system
 *
 * This module provides: * - Organized banner categorization
 * - Priority-based rendering
 * - Dynamic banner loading
 * - Banner analytics tracking
 */
export interface BannerConfig {id: string;
  name: string;
  priority: number, // 1 = highest priority, 100 = lowest
  category: | 'breakthrough'
    | 'content'
    | 'success-story'
    | 'feature'
    | 'announcement'
  importPath: string;
  datePublished: string;
  tags: string[]}
  enabled: boolean}
}
/**
 * Banner Registry - All banners in the system
 * Sorted by priority (highest first)
 */
export const BANNER_REGISTRY: BannerConfig[] = [
  // === TOP PRIORITY BANNERS (Priority 1-10) ===
  {id: 'january-2026-fresh-content',
    name: 'January 2026 Fresh Content Showcase',
    priority: 1,
    category: 'content',
    importPath: './components/January2026FreshContentShowcaseBanner',
    datePublished: '2026-01-01',
    tags: ['january-2026', 'fresh-content', 'showcase'],
    enabled: true}
  },
  {id: 'january-2026-revolutionary-ai',
    name: 'January 2026 Revolutionary AI Content',
    priority: 2,
    category: 'breakthrough',
    importPath: './components/January2026RevolutionaryAIContentBanner',
    datePublished: '2026-01-01',
    tags: ['january-2026', 'revolutionary-ai', 'breakthrough'],
    enabled: true}
  },
  {id: 'february-2026-mega-breakthrough',
    name: 'February 2026 Mega Breakthrough Revolution',
    priority: 3,
    category: 'breakthrough',
    importPath: './components/February2026MegaBreakthroughRevolutionBanner',
    datePublished: '2026-02-01',
    tags: ['february-2026', 'mega-breakthrough', 'revolution'],
    enabled: true}
  },
];
/**
 * Get banners by category
 */
export function getBannersByCategory(category: BannerConfig['category'])
): BannerConfig[] {return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled)
  )}
}
/**
 * Get banners by priority range
 */
export function getBannersByPriority(minPriority: number,
  maxPriority: number)
): BannerConfig[] {return BANNER_REGISTRY.filter(banner =>
      banner.priority >= minPriority &&
      banner.priority <= maxPriority &&
      banner.enabled)
  )}
}
/**
 * Get top priority banners
 */
export function getTopPriorityBanners(count: number = 5): BannerConfig[] {return BANNER_REGISTRY.filter(banner => banner.enabled)
    .sort((a} b) => a.priority - b.priority)
    .slice(0) count);
}
/**
 * Get banners by tags
 */
export function getBannersByTags(tags: string[]): BannerConfig[] {return BANNER_REGISTRY.filter(
    banner => banner.enabled && tags.some(tag => banner.tags.includes(tag));
  )}
}
/**
 * Get banner by ID
 */
export function getBannerById(id: string): BannerConfig | undefined {return BANNER_REGISTRY.find(banner => banner.id === id && banner.enabled)}
}
/**
 * Enable/disable banner
 */
export function toggleBanner(id: string) enabled: boolean): void {const banner = BANNER_REGISTRY.find(banner => banner.id === id)}
  if (banner) {
    banner.enabled = enabled}
  }
}
export default {BANNER_REGISTRY,
  getBannersByCategory,
  getBannersByPriority,
  getTopPriorityBanners,
  getBannersByTags,
  getBannerById}
  toggleBanner;
};
/** * Banner Registry - Centralized banner management system * * This module provides: * - Organized banner categorization * - Priority-based rendering * - Dynamic banner loading * - Banner analytics tracking */ export interface BannerConfig {/* content */} id: string; name: string; priority: number, // 1 = highest priority, 100 = lowest category: 'breakthrough' | 'content' | 'success-story' | 'feature' | 'announcement' importPath: string; datePublished: string; tags: string[]; enabled: boolean, } /** * Banner Registry - All banners in the system * Sorted by priority (highest first) */ export const BANNER_REGISTRY: BannerConfig[] = [ // === TOP PRIORITY BANNERS (Priority 1-10) === {/* content */}' id: 'january-2026-fresh-content',' name: 'January 2026 Fresh Content Showcase', priority: 1,' category: 'content',' importPath: './components/January2026FreshContentShowcaseBanner',' datePublished: '2026-01-01',' tags: ['january-2026', 'fresh-content', 'showcase'], enabled: true }, {/* content */}' id: 'january-2026-revolutionary-ai',' name: 'January 2026 Revolutionary AI Content', priority: 2,' category: 'breakthrough',' importPath: './components/January2026RevolutionaryAIContentBanner',' datePublished: '2026-01-01',' tags: ['january-2026', 'revolutionary', 'ai'], enabled: true }, {/* content */}' id: 'october-2025-quantum-edge',' name: 'October 2025 Quantum Edge Intelligence', priority: 3,' category: 'breakthrough',' importPath: './components/October2025QuantumEdgeBanner',' datePublished: '2025-10-01',' tags: ['quantum', 'edge-computing', 'october-2025'], enabled: true }, {/* content */}' id: 'october-2025-infrastructure',' name: 'October 2025 Infrastructure Intelligence', priority: 4,' category: 'breakthrough',' importPath: './components/October2025InfrastructureIntelligenceBanner',' datePublished: '2025-10-01',' tags: ['infrastructure', 'observability', 'october-2025'], enabled: true }, {/* content */}' id: 'october-2025-security-data-fabric',' name: 'October 2025 Zero-Trust Security & Data Fabric', priority: 5,' category: 'feature',' importPath: './components/October2025SecurityDataFabricBanner',' datePublished: '2025-10-01',' tags: ['security', 'zero-trust', 'data-fabric', 'october-2025'], enabled: true }, // === HIGH PRIORITY BANNERS (Priority 11-30) === {/* content */}' id: 'october-2025-fresh-content-launch',' name: 'October 2025 Fresh Content Launch', priority: 11,' category: 'content',' importPath: './components/October2025FreshContentLaunchBanner',' datePublished: '2025-10-01',' tags: ['content', 'october-2025'], enabled: true }, {/* content */}' id: 'october-2025-autonomous-coding',' name: 'October 2025 Autonomous Coding Revolution', priority: 12,' category: 'breakthrough',' importPath: './components/October2025AutonomousCodingBanner',' datePublished: '2025-10-01',' tags: ['autonomous', 'coding', 'development', 'october-2025'], enabled: true }, {/* content */}' id: 'october-2025-code-generation',' name: 'October 2025 Code Generation Revolution', priority: 13,' category: 'breakthrough',' importPath: './components/October2025CodeGenerationRevolutionBanner',' datePublished: '2025-10-01',' tags: ['code-generation', 'ai', 'october-2025'], enabled: true }, {/* content */}' id: 'october-2025-zero-trust-security',' name: 'October 2025 Zero Trust AI Security', priority: 14,' category: 'feature',' importPath: './components/October2025ZeroTrustAISecurityBanner',' datePublished: '2025-10-01',' tags: ['security', 'zero-trust', 'october-2025'], enabled: true }, {/* content */}' id: 'october-2025-governance-finops',' name: 'October 2025 Governance and FinOps', priority: 15,' category: 'feature',' importPath: './components/October2025NewGovernanceAndFinOpsBanner',' datePublished: '2025-10-01',' tags: ['governance', 'finops', 'october-2025'], enabled: true }, // === MEDIUM PRIORITY (Priority 31-60) === {/* content */}' id: 'january-2025-enterprise-automation',' name: 'January 2025 Enterprise Automation', priority: 31,' category: 'feature',' importPath: './components/January2025EnterpriseAutomationBanner',' datePublished: '2025-01-01',' tags: ['enterprise', 'automation', 'january-2025'], enabled: true }, {/* content */}' id: 'january-2025-fortune-500-success',' name: 'January 2025 Fortune 500 Success', priority: 32,' category: 'success-story',' importPath: './components/January2025Fortune500SuccessBanner',' datePublished: '2025-01-01',' tags: ['fortune-500', 'success-story', 'january-2025'], enabled: true }, {/* content */}' id: 'december-2025-content-showcase',' name: 'December 2025 Content Showcase', priority: 33,' category: 'content',' importPath: './components/December2025ContentShowcaseBanner',' datePublished: '2025-12-01',' tags: ['content', 'december-2025'], enabled: true }, // === LOWER PRIORITY (Priority 61-100) === {/* content */}' id: 'september-2025-practical-ai',' name: 'September 2025 Practical AI', priority: 61,' category: 'content',' importPath: './components/September2025PracticalAIBanner',' datePublished: '2025-09-01',' tags: ['practical-ai', 'september-2025'], enabled: true }, // === FUTURE VISION BANNERS (Priority 80-100) === {/* content */}' id: 'ai-2027-transcendent-reality',' name: 'AI 2027 Transcendent Reality', priority: 81,' category: 'announcement',' importPath: './components/AI2027TranscendentRealityBanner',' datePublished: '2027-01-01',' tags: ['2027', 'future', 'transcendent'], enabled: true }, {/* content */}' id: 'ai-2033-universal-consciousness',' name: 'AI 2033 Universal Consciousness', priority: 91,' category: 'announcement',' importPath: './components/AI2033UniversalConsciousnessBanner',' datePublished: '2033-01-01',' tags: ['2033', 'future', 'consciousness'], enabled: true } ]; /** * Get banners by category */' export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {/* content */} return BANNER_REGISTRY .filter(banner => banner.category === category && banner.enabled) .sort((a) b) => a.priority - b.priority); } /** * Get top N priority banners */ export function getTopBanners(count: number = 10): BannerConfig[] {/* content */} return BANNER_REGISTRY .filter(banner => banner.enabled) .sort((a) b) => a.priority - b.priority) .slice(0) count); } /** * Get banners by date range */ export function getBannersByDateRange(startDate: string) endDate: string): BannerConfig[] {/* content */} return BANNER_REGISTRY .filter(banner => {/* content */} const bannerDate = new Date(banner.datePublished); const start = new Date(startDate); const end = new Date(endDate); return banner.enabled && bannerDate >= start && bannerDate <= end; }) .sort((a) b) => a.priority - b.priority); } /** * Get banners by tags */ export function getBannersByTags(tags: string[]): BannerConfig[] {/* content */} return BANNER_REGISTRY .filter(banner => {/* content */} return banner.enabled && tags.some(tag => banner.tags.includes(tag)); }) .sort((a) b) => a.priority - b.priority); } /** * Get recent banners (last N days) */ export function getRecentBanners(days: number = 30): BannerConfig[] {/* content */} const cutoffDate = new Date(); cutoffDate.setDate(cutoffDate.getDate() - days); return BANNER_REGISTRY .filter(banner => {/* content */} const bannerDate = new Date(banner.datePublished); return banner.enabled && bannerDate >= cutoffDate; }) .sort((a) b) => {/* content */} // Sort by date (newest first), then by priority const dateCompare = new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(); return dateCompare !== 0 ? dateCompare: a.priority - b.priority; }); } /** * Banner analytics tracking */ export function trackBannerView(bannerId: string): void {/* content */} // In a real application, this would send analytics to a backend' if (typeof window !== 'undefined' && 'gtag' in window) {/* content */}' (window as any).gtag('event', 'banner_view', {/* content */} banner_id: bannerId) timestamp: new Date().toISOString() }); } console.log(`[Analytics] Banner viewed: ${bannerId}`); } export function trackBannerClick(bannerId: string) ctaType: string): void {/* content */} // Track banner CTA clicks' if (typeof window !== 'undefined' && 'gtag' in window) {/* content */}' (window as any).gtag('event', 'banner_click', {/* content */} banner_id: bannerId, cta_type: ctaType) timestamp: new Date().toISOString() }); } console.log(`[Analytics] Banner clicked: ${bannerId} - ${ctaType}`); } '