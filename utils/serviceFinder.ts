// Service finder utility
// Provides a simple lookup across known service collections at runtime.

type BasicService = {
  title: string;
  description?: string;
  category?: string;
  pricing?: string;
};

// Lazy imports to avoid increasing bundle size unnecessarily
async function loadCatalogs(): Promise<BasicService[][]> {
  try {
    const catalogs: BasicService[][] = [];
    // Only import lightweight catalogs that definitely exist in the repo
    const micro = await import('../pages/micro-saas');
    const ai = await import('../pages/ai-services');
    const it = await import('../pages/it-services');
    // Defensive extraction for default/named exports
    const microList: BasicService[] = (micro.microSaaSProducts || micro.default?.microSaaSProducts || []);
    const aiList: BasicService[] = (ai.services || ai.default?.services || ai.aiServices || []);
    const itList: BasicService[] = (it.itServices || it.default?.itServices || []);
    catalogs.push(microList, aiList, itList);
    return catalogs;
  } catch {
    return [];
  }
}

export async function findService(serviceName: string): Promise<BasicService | null> {
  if (!serviceName) return null;
  const name = serviceName.toLowerCase();
  const catalogs = await loadCatalogs();
  for (const list of catalogs) {
    for (const svc of list) {
      if (svc?.title && svc.title.toLowerCase() === name) {
        return svc;
      }
    }
  }
  return null;
}