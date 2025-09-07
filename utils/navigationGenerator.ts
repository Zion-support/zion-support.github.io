export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  priority?: number;
  status?: 'active' | 'inactive' | 'coming-soon';
  isExternal?: boolean;
  children?: NavigationItem[];
  category?: string;
  lastUpdated?: string;
}

export interface NavigationConfig {
  header: NavigationItem[];
  footer: NavigationItem[];
  sidebar: NavigationItem[];
  services: NavigationItem[];
  categories: NavigationItem[];
  pages: NavigationItem[];
  importantLinks: NavigationItem[];
}

export class NavigationGenerator {
  private services: NavigationItem[] = [];
  private pages: NavigationItem[] = [];
  private categories: NavigationItem[] = [];

  // Auto-discover services from data and generate navigation
  async discoverServices(): Promise<NavigationItem[]> {
    // Comprehensive services list based on website analysis
    this.services = [
      // AI & Machine Learning Services
      {
        id: 'ai-ml-services',
        label: 'AI & Machine Learning',
        href: '/services/ai-ml',
        category: 'AI & ML',
        lastUpdated: '2025-01-15',
        priority: 10
      },
      // Cybersecurity Services
      {
        id: 'cybersecurity-services',
        label: 'Cybersecurity',
        href: '/services/cybersecurity',
        category: 'Security',
        lastUpdated: '2025-01-15',
        priority: 13
      },
      // Infrastructure Services
      {
        id: 'infrastructure-services',
        label: 'Infrastructure',
        href: '/services/infrastructure',
        category: 'Infrastructure',
        lastUpdated: '2025-01-15',
        priority: 16
      },
      // Blockchain Services
      {
        id: 'blockchain-services',
        label: 'Blockchain',
        href: '/services/blockchain',
        category: 'Blockchain',
        lastUpdated: '2025-01-15',
        priority: 17
      },
      // Content & Marketing Services
      {
        id: 'content-marketing-services',
        label: 'Content & Marketing',
        href: '/services/content-marketing',
        category: 'Marketing',
        lastUpdated: '2025-01-15',
        priority: 20
      },
      // Research & Development Services
      {
        id: 'rd-services',
        label: 'Research & Development',
        href: '/services/research-development',
        category: 'R&D',
        lastUpdated: '2025-01-15',
        priority: 22
      },
      // Specialized AI Services
      {
        id: 'specialized-ai-services',
        label: 'Specialized AI',
        href: '/services/specialized-ai',
        category: 'AI & ML',
        lastUpdated: '2025-01-15',
        priority: 25
      }
    ];
    
    return this.services;
  }

  // Discover and generate pages
  async discoverPages(): Promise<NavigationItem[]> {
    this.pages = [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        priority: 1
      },
      {
        id: 'about',
        label: 'About',
        href: '/about',
        priority: 2
      },
      {
        id: 'services',
        label: 'Services',
        href: '/services',
        priority: 3
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        priority: 4
      }
    ];
    
    return this.pages;
  }

  // Generate categories from services
  async discoverCategories(): Promise<NavigationItem[]> {
    const categoryMap = new Map<string, NavigationItem>();
    
    // Group services by category
    this.services.forEach(service => {
      if (service.category) {
        if (!categoryMap.has(service.category)) {
          categoryMap.set(service.category, {
            id: `category-${service.category.toLowerCase().replace(/\s+/g, '-')}`,
            label: service.category,
            href: `/category/${service.category.toLowerCase().replace(/\s+/g, '-')}`,
            priority: 5,
            children: []
          });
        }
        
        const category = categoryMap.get(service.category)!;
        category.children = category.children || [];
        category.children.push(service);
      }
    });
    
    // Create category objects
    this.categories = Array.from(categoryMap.values());
    return this.categories;
  }

  // Get category icon
  getCategoryIcon(category: string): string {
    const iconMap: Record<string, string> = {
      'AI & ML': '🤖',
      'Security': '🔒',
      'Infrastructure': '🏗️',
      'Blockchain': '⛓️',
      'Marketing': '📢',
      'R&D': '🔬'
    };
    
    return iconMap[category] || '📁';
  }

  // Generate header navigation
  generateHeaderNavigation(): NavigationItem[] {
    return [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        priority: 1
      },
      {
        id: 'services',
        label: 'Services',
        href: '/services',
        priority: 2
      },
      {
        id: 'about',
        label: 'About',
        href: '/about',
        priority: 3
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        priority: 4
      }
    ];
  }

  // Generate footer navigation
  generateFooterNavigation(): NavigationItem[] {
    return [
      {
        id: 'privacy',
        label: 'Privacy Policy',
        href: '/privacy',
        priority: 1
      },
      {
        id: 'terms',
        label: 'Terms of Service',
        href: '/terms',
        priority: 2
      },
      {
        id: 'github',
        label: 'GitHub',
        href: 'https://github.com/Zion-Holdings/zion.app',
        isExternal: true,
        priority: 4
      }
    ];
  }

  // Generate sidebar navigation based on context
  generateSidebarNavigation(context: any): NavigationItem[] {
    switch (context.pageType) {
      case 'service':
        return this.generateServiceSidebar(context.currentService);
      case 'category':
        return this.generateCategorySidebar(context.currentCategory);
      case 'dashboard':
        return this.generateDashboardSidebar();
      default:
        return this.generateDefaultSidebar();
    }
  }

  private generateServiceSidebar(service: NavigationItem): NavigationItem[] {
    return [
      {
        id: 'service-overview',
        label: `${service.label} Overview`,
        href: service.href,
        priority: 1
      },
      {
        id: 'service-features',
        label: 'Features',
        href: `${service.href}/features`,
        priority: 2
      },
      {
        id: 'service-pricing',
        label: 'Pricing',
        href: `${service.href}/pricing`,
        priority: 3
      }
    ];
  }

  private generateCategorySidebar(category: NavigationItem): NavigationItem[] {
    const categoryServices = this.services.filter(s => s.category === category.label);
    
    return [
      {
        id: 'category-overview',
        label: `${category.label} Overview`,
        href: `/category/${category.label.toLowerCase().replace(/\s+/g, '-')}`,
        priority: 1
      },
      ...categoryServices.map(service => ({
        id: `service-${service.id}`,
        label: service.label,
        href: service.href,
        status: service.status,
        priority: service.priority || 10
      }))
    ];
  }

  private generateDashboardSidebar(): NavigationItem[] {
    return [
      {
        id: 'dashboard-overview',
        label: 'Overview',
        href: '/dashboard',
        priority: 1
      },
      {
        id: 'dashboard-projects',
        label: 'Projects',
        href: '/dashboard/projects',
        priority: 2
      },
      {
        id: 'dashboard-settings',
        label: 'Settings',
        href: '/dashboard/settings',
        priority: 3
      }
    ];
  }

  private generateDefaultSidebar(): NavigationItem[] {
    return [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        priority: 1
      },
      {
        id: 'services',
        label: 'Services',
        href: '/services',
        priority: 2
      }
    ];
  }

  // Get complete navigation configuration
  async getNavigationConfig(): Promise<NavigationConfig> {
    await this.discoverServices();
    await this.discoverPages();
    await this.discoverCategories();
    
    return {
      header: this.generateHeaderNavigation(),
      footer: this.generateFooterNavigation(),
      sidebar: this.generateSidebarNavigation({ pageType: 'home' }),
      services: this.services,
      categories: this.categories,
      pages: this.pages,
      importantLinks: [
        {
          id: 'github',
          label: 'GitHub',
          href: 'https://github.com/Zion-Holdings/zion.app',
          isExternal: true,
          priority: 1
        },
        {
          id: 'website',
          label: 'Website',
          href: 'https://ziontechgroup.com',
          isExternal: true,
          priority: 2
        }
      ]
    };
  }
}