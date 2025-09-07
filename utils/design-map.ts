export type UIKitKind = "ios" | "android" | "web";

export interface TokenSet {
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
}

export interface UIKit {
  kind: UIKitKind;
  tokens: TokenSet;
}

export interface DesignMapItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  tags: string[];
  status: "draft" | "in-progress" | "review" | "approved";
  lastUpdated: string;
  contributors: string[];
}

export interface DesignMapSection {
  id: string;
  title: string;
  items: DesignMapItem[];
}

export interface DesignMap {
  products: {
    foundations: DesignMapSection[];
    talent: DesignMapSection[];
    client: DesignMapSection[];
    aiTools: DesignMapSection[];
    dao: DesignMapSection[];
    admin: DesignMapSection[];
    mobile: DesignMapSection[];
  };
}

export function getZionDesignMap(): DesignMap {
  return {
    products: {
      foundations: [
        {
          id: "design-tokens",
          title: "Design Tokens",
          items: [
            {
              id: "colors",
              title: "Color System",
              category: "foundations",
              tags: ["colors", "branding", "accessibility"],
              status: "approved",
              lastUpdated: "2024-01-15",
              contributors: ["design-team"]
            },
            {
              id: "typography",
              title: "Typography Scale",
              category: "foundations",
              tags: ["typography", "readability", "hierarchy"],
              status: "approved",
              lastUpdated: "2024-01-15",
              contributors: ["design-team"]
            }
          ]
        }
      ],
      talent: [
        {
          id: "talent-dashboard",
          title: "Talent Dashboard",
          items: [
            {
              id: "profile-overview",
              title: "Profile Overview",
              category: "talent",
              tags: ["dashboard", "profile", "overview"],
              status: "in-progress",
              lastUpdated: "2024-01-20",
              contributors: ["ui-team"]
            }
          ]
        }
      ],
      client: [
        {
          id: "client-portal",
          title: "Client Portal",
          items: [
            {
              id: "project-management",
              title: "Project Management",
              category: "client",
              tags: ["projects", "management", "tracking"],
              status: "draft",
              lastUpdated: "2024-01-18",
              contributors: ["ux-team"]
            }
          ]
        }
      ],
      aiTools: [
        {
          id: "ai-dashboard",
          title: "AI Tools Dashboard",
          items: [
            {
              id: "model-management",
              title: "Model Management",
              category: "ai-tools",
              tags: ["ai", "models", "management"],
              status: "review",
              lastUpdated: "2024-01-22",
              contributors: ["ai-team"]
            }
          ]
        }
      ],
      dao: [
        {
          id: "dao-governance",
          title: "DAO Governance",
          items: [
            {
              id: "voting-interface",
              title: "Voting Interface",
              category: "dao",
              tags: ["governance", "voting", "decentralized"],
              status: "draft",
              lastUpdated: "2024-01-19",
              contributors: ["dao-team"]
            }
          ]
        }
      ],
      admin: [
        {
          id: "admin-console",
          title: "Admin Console",
          items: [
            {
              id: "user-management",
              title: "User Management",
              category: "admin",
              tags: ["admin", "users", "management"],
              status: "in-progress",
              lastUpdated: "2024-01-21",
              contributors: ["admin-team"]
            }
          ]
        }
      ],
      mobile: [
        {
          id: "mobile-app",
          title: "Mobile App",
          items: [
            {
              id: "mobile-navigation",
              title: "Mobile Navigation",
              category: "mobile",
              tags: ["mobile", "navigation", "responsive"],
              status: "draft",
              lastUpdated: "2024-01-17",
              contributors: ["mobile-team"]
            }
          ]
        }
      ]
    }
  };
}