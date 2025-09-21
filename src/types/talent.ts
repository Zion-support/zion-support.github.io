export interface TalentProfile {
  id: string,
  name: string,
  email: string,
  skills: string[],
  experience: number,
  hourlyRate: number,
  availability: string,
  location: string,
  bio: string,
  portfolio: string[],
  verified: boolean,
  rating: number,
  completedProjects: number, }