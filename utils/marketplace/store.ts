export interface Offer {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: any;
  agreementUrl?: string;
  status: string;
  projectId?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  status: string;
  timeline: any[];
  documents: any[];
  notes: any[];
}

// Mock storage
const offers: Offer[] = [];
const projects: Project[] = [];

export function saveOffer(offer: Offer): void {
  const index = offers.findIndex(o => o.id === offer.id);
  if (index >= 0) {
    offers[index] = offer;
  } else {
    offers.push(offer);
  }
}

export function getOfferById(id: string): Offer | null {
  return offers.find(o => o.id === id) || null;
}

export function getAllOffers(): Offer[] {
  return offers;
}

export function saveProject(project: Project): void {
  const index = projects.findIndex(p => p.id === project.id);
  if (index >= 0) {
    projects[index] = project;
  } else {
    projects.push(project);
  }
}

export function getProjectById(id: string): Project | null {
  return projects.find(p => p.id === id) || null;
}

export function getAllProjects(): Project[] {
  return projects;
}