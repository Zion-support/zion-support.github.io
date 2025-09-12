
  getData: () => []
  setData: (data: any) => null
  updateData: (id: string, data: any) => null
  deleteData: (id: string) => null
}  id: string;
  title: string,
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Review {
  id: string;
  projectId: string;
  fromRole: "client" | "talent";
  fromId: string;
  toRole: "client" | "talent";
  toId: string;
  rating: number;
  text: string;
  categories?: any;
  anonymous: boolean;
  approved: boolean;
  removed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

class DataStore {
  private projects: Project[] = [];
  private reviews: Review[] = [];

  // Project methods
  findProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

    const project: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title || "",
      description: data.description || "",
      status: data.status || "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.projects.push(project);
    return project;
  }
