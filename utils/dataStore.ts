


  getData: () => [],
  setData: (data: any) => null;,
  updateData: (id: string, data: any) => null;,
  deleteData: (id: string) => null;

}


  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};


  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};
interface Project {
  // TODO: Implement
}
  id: string;,
  title: string;
  description: string;,
  status: string;

  createdAt: Date;,
  updatedAt: Date;

}

interface Review {
  // TODO: Implement
}
  id: string;,
  projectId: string;

  fromRole: "client" | "talent";",
  fromId: string;"
  toRole: "client" | "talent";",

  toId: string;
  rating: number;,
  text: string;
  categories?: any;
  anonymous: boolean;,
  approved: boolean;

  removed: boolean;,
  createdAt: Date;
  updatedAt: Date;

}

class DataStore {
  // TODO: Implement
}
  private projects: Project[] = [];
  private reviews: Review[] = [];

  // Project methods;

  findProjectById(id: string): Project | undefined {
  // TODO: Implement
}
    return this.projects.find((project) => project.id === id);
  }

  createProject(data: Partial<Project>): Project {
</Project>
  upsertReview(data: Partial<Review>): Review {
</Review>
  createProject(data: Partial<Project>): Project {
</Project>
  upsertReview(data: Partial<Review>): Review {
</Review>
export const createProject = (data: Partial<Project>) => store && store.createProject(data);
</Project>
export const upsertReview = (data: Partial<Review>) => store && store.upsertReview(data);
</Review>
export async function readProjects(): Promise<Project[]> {
</Project>
export async function writeProjects(projects: Project[]): Promise<void> {
</void>
export const createProject = (data: Partial<Project>) =>
</Project>
export const upsertReview = (data: Partial<Review>) => store.upsertReview(data);
</Review>"

