export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  sellerId: string;
  createdAt: string;
  updatedAt: string;
}

const items: MarketplaceItem[] = [];

export function createMarketplaceItem(item: Omit<MarketplaceItem, 'id' | 'createdAt' | 'updatedAt'>): MarketplaceItem {
  const newItem: MarketplaceItem = {
    ...item,
    id: `item_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  items.push(newItem);
  return newItem;
}

export function getMarketplaceItem(id: string): MarketplaceItem | null {
  return items.find(item => item.id === id) || null;
}

export function getAllMarketplaceItems(): MarketplaceItem[] {
  return items;
}

export function updateMarketplaceItem(id: string, updates: Partial<MarketplaceItem>): MarketplaceItem | null {
  const item = items.find(i => i.id === id);
  if (!item) return null;
  
  Object.assign(item, updates, { updatedAt: new Date().toISOString() });
  return item;
}

export function deleteMarketplaceItem(id: string): boolean {
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return false;
  
  items.splice(index, 1);
  return true;
}