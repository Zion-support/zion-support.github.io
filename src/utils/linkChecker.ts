export interface LinkInfo {
  url: string;
  text: string;
  anchor?: string;
  error?: string;
}

export interface PageInfo {
  path: string;
  title: string;
  links: LinkInfo[];
}

export interface LinkCheckResult {
  exists: boolean;
  statusCode?: number;
  error?: string;
}

export class LinkChecker {
  static async checkLink(url: string): Promise<LinkCheckResult> {
    try {
      const response = await fetch(url, { method: "HEAD" });
      return {
        exists: response.ok,
        statusCode: response.status
      };
    } catch (error) {
      return {
        exists: false,
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }

  static async checkPageLinks(page: PageInfo): Promise<PageInfo> {
    const checkedLinks = await Promise.all(
      page.links.map(async (link) => {
        const result = await this.checkLink(link.url);
        return {
          ...link,
          error: result.exists ? undefined : result.error || "Link not found"
        };
      })
    );

    return {
      ...page,
      links: checkedLinks
    };
  }
}