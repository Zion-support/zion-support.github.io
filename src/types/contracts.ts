export interface ContractTemplate {
  id: string,
  name: string,
  description: string,
  category: string,
  content: string,
  isDefault: boolean,
  isStarred: boolean,
  createdAt: string,
  updatedAt: string}

export interface Contract {
  id: string,
  title: string,
  content: string,
  status: 'draft' | 'pending' | 'signed' | 'completed' | 'cancelled',
  clientId: string,
  talentId: string,
  createdAt: string,
  updatedAt: string,
  signedAt?: string;
  completedAt?: string, }