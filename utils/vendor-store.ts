interface Vendor {
  id: string;
  name: string;
  email: string;
  approved: boolean;
  suspended: boolean;
  commission: number;
  createdAt: string;
  updatedAt: string;
}

// In-memory store for demo purposes
// In production, this would be a database
const vendorStore: Map<string, Vendor> = new Map();

export function setVendorApproval(vendorId: string, approved: boolean): void {
  const vendor = vendorStore.get(vendorId);
  if (vendor) {
    vendor.approved = approved;
    vendor.updatedAt = new Date().toISOString();
    vendorStore.set(vendorId, vendor);
  }
}

export function setVendorCommission(vendorId: string, commission: number): void {
  const vendor = vendorStore.get(vendorId);
  if (vendor) {
    vendor.commission = commission;
    vendor.updatedAt = new Date().toISOString();
    vendorStore.set(vendorId, vendor);
  }
}

export function suspendVendor(vendorId: string, suspended: boolean): void {
  const vendor = vendorStore.get(vendorId);
  if (vendor) {
    vendor.suspended = suspended;
    vendor.updatedAt = new Date().toISOString();
    vendorStore.set(vendorId, vendor);
  }
}

export function getVendor(vendorId: string): Vendor | undefined {
  return vendorStore.get(vendorId);
}

export function getAllVendors(): Vendor[] {
  return Array.from(vendorStore.values());
}

export function createVendor(vendor: Omit<Vendor, 'id' | 'createdAt' | 'updatedAt'>): Vendor {
  const id = `vendor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const newVendor: Vendor = {
    ...vendor,
    id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  vendorStore.set(id, newVendor);
  return newVendor;
}