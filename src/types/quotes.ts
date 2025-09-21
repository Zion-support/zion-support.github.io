export type ServiceType = 'service' | 'talent' | 'equipment',
export interface ListingItem {
  id: string,
  title: string,
  description: string,
  price?: number;
  rating?: number;
  category: string,
  tags: string[],
  provider: {
    name: string,
    verified: boolean, }, }

export interface QuoteFormData {
  serviceType?: ServiceType;
  selectedListing?: ListingItem;
  requirements?: string;
  budget?: {
    min: number,
    max: number, };
  timeline?: string;
  contactInfo?: {
    name: string,
    email: string,
    phone?: string, }, }