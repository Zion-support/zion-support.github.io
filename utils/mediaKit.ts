<<<<<<< HEAD


  };
}


  }

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
=======
<<<<<<< HEAD
export type MediaBundle = 'general' | 'web3' | 'institutional';
export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';
export interface MediaGenerationResponse {;
  ok: boolean;
  text?: string;
  error?: string
}
export async function generateMediaContent(request: MediaGenerationRequest): Promise<MediaGenerationResponse> {
  // Mock implementation - in production, this would call OpenAI or other AI service
  return {
<<<<<<< HEAD
    ok: true
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`
  }
=======
    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {
      path: ''
      filename: 'legal/terms-of-use.md'
      type: 'text'
      content: `# Terms of Use\n\nBy using Zion products, you agree to these terms. Replace with counsel-approved language.`
    }
    {
      path: ''
      filename: 'legal/privacy-policy.md'
      type: 'text'
      content: `# Privacy Policy\n\nWe respect your privacy. Replace with counsel-approved language.`
    }
    {
<<<<<<< HEAD
      path: ''
      filename: 'legal/jurisdictional-disclosures.md'
      type: 'text'
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
export async function generateMediaContent (request: MediaGenerationRequest): Promise < MediaGenerationResponse> {
  // Mock implementation - in production, this would call OpenAI or other AI service;
  return {
    ok: true,
    text: `Mock ${request.type} for ${request.company_name} on ${request.date}`;
  }
;
export function buildLegalDocs (kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {

=======


      path: '',

      filename: 'legal / terms - of - use.md',

      type: 'text',

      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,
    },;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  ];
  const web3Extras: MediaAsset[] = [

    {
      path: '',

      filename: 'legal / privacy - policy.md',

      type: 'text',
      content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`,
    },
    {
      path: '',

      filename: 'legal / jurisdictional - disclosures.md',

      type: 'text',
      content: `# Jurisdictional Disclosures\n\n_usage may be restricted in certain regions. Replace with localized guidance.`,
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ];

;
  const web3Extras: MediaAsset[] = [;

    {

      path: '',

  ];


export function buildPressRelease(
<<<<<<< HEAD
  type: PressReleaseType
=======
<<<<<<< HEAD
  type: PressReleaseType
  params: {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
;
  // Check condition
if (return [...base, ...web3Extras]) {
  $2
}
  return base;
;
export function buildPressRelease (
  type: PressReleaseType,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  params: {
    company_name: string;
=======
export function buildPressRelease(

  type: PressReleaseType,
  params: {;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    companyName: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    date: string;
    raise_amount?: string;
    token_name?: string;
    anchors?: string[];
  }
): string {

  const header = `${params && params.companyName} ${titleCase(type && type.replace('-', ' '))}`;
  const boilerplate = `${params && params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion && zion.app`;


  if (type === 'seed-round') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces a seed round of ${params && params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }
  if (type === 'token-sale') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces the ${params && params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }

  return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params && params.companyName}:\n${boilerplate}`;


=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function buildTimeline(startDate: Date) {
  const addDays = (d: Date, days: number) =>
    new Date(d && d.getFullYear(), d && d.getMonth(), d && d.getDate() + days);
  const fmt = (d: Date) => d && d.toISOString().substring(0, 10);
  return [
    { label: 'Week 1: Closed Beta Invite', date: fmt(addDays(startDate, 0)) }
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt(addDays(startDate, 7)) }
    {
      label: 'Week 3: Token Airdrop Snapshot'
      date: fmt(addDays(startDate, 14))
    }
    { label: 'Week 4: Zion Global Summit', date: fmt(addDays(startDate, 21)) }
  ];
<<<<<<< HEAD
=======
function titleCase(s: string) {
  return s.replace(
    /\w\S*/g
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );}
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


function titleCase(s: string) {

=======
<<<<<<< HEAD
  return s && s.replace(
    /\w\S*/g,
    w => w && w.charAt(0).toUpperCase() + w && w.slice(1).toLowerCase()

  );}


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Media Kit utilities
export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'audio' | 'document' | 'archive';
  name: string;
  filename: string;
  url: string;
  thumbnailUrl?: string;
  size: number; // in bytes
  mimeType: string;
  duration?: number; // for video/audio in seconds
  dimensions?: {
    width: number;
    height: number;
  };
  metadata?: Record<string, any>;
  uploadedAt: string;
  uploadedBy: string;
  tags: string[];
  isPublic: boolean;
  category: 'logo' | 'banner' | 'icon' | 'screenshot' | 'demo' | 'documentation' | 'other';
}

export interface MediaCollection {
  id: string;
  name: string;
  description?: string;
  assets: string[]; // asset IDs
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  isPublic: boolean;
  tags: string[];
}

export interface MediaUploadOptions {
  maxSize?: number; // in bytes
  allowedTypes?: string[];
  generateThumbnail?: boolean;
  compress?: boolean;
  quality?: number; // 0-100
  watermark?: {
    text?: string;
    image?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
    opacity?: number;
  };
}

class MediaKit {
  private assets: Map<string, MediaAsset> = new Map();
  private collections: Map<string, MediaCollection> = new Map();
  private uploadOptions: MediaUploadOptions = {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'audio/mp3', 'application/pdf'],
    generateThumbnail: true,
    compress: true,
    quality: 80
  };

  // Asset management
  async uploadAsset(
    file: File | Buffer,
    name: string,
    uploadedBy: string,
    options: Partial<MediaUploadOptions> = {}
  ): Promise<MediaAsset> {
    const config = { ...this.uploadOptions, ...options };
    
    // Validate file
    if (!this.validateFile(file, config)) {
      throw new Error('Invalid file type or size');
    }

    // Generate asset ID
    const id = `asset_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Process file
    const processedFile = await this.processFile(file, config);
    
    // Create asset record
    const asset: MediaAsset = {
      id,
      type: this.getFileType(processedFile.mimeType),
      name,
      filename: processedFile.filename,
      url: processedFile.url,
      thumbnailUrl: processedFile.thumbnailUrl,
      size: processedFile.size,
      mimeType: processedFile.mimeType,
      duration: processedFile.duration,
      dimensions: processedFile.dimensions,
      metadata: processedFile.metadata,
      uploadedAt: new Date().toISOString(),
      uploadedBy,
      tags: [],
      isPublic: false,
      category: 'other'
    };

    this.assets.set(id, asset);
    return asset;
  }

  async getAsset(id: string): Promise<MediaAsset | null> {
    return this.assets.get(id) || null;
  }

  async updateAsset(id: string, updates: Partial<MediaAsset>): Promise<MediaAsset | null> {
    const asset = this.assets.get(id);
    if (!asset) return null;

    const updatedAsset = { ...asset, ...updates };
    this.assets.set(id, updatedAsset);
    return updatedAsset;
  }

  async deleteAsset(id: string): Promise<boolean> {
    return this.assets.delete(id);
  }

  async searchAssets(query: string, filters?: {
    type?: MediaAsset['type'];
    category?: MediaAsset['category'];
    tags?: string[];
    uploadedBy?: string;
    isPublic?: boolean;
  }): Promise<MediaAsset[]> {
    let assets = Array.from(this.assets.values());

    // Apply filters
    if (filters) {
      if (filters.type) {
        assets = assets.filter(a => a.type === filters.type);
      }
      if (filters.category) {
        assets = assets.filter(a => a.category === filters.category);
      }
      if (filters.tags && filters.tags.length > 0) {
        assets = assets.filter(a => filters.tags!.some(tag => a.tags.includes(tag)));
      }
      if (filters.uploadedBy) {
        assets = assets.filter(a => a.uploadedBy === filters.uploadedBy);
      }
      if (filters.isPublic !== undefined) {
        assets = assets.filter(a => a.isPublic === filters.isPublic);
      }
    }

    // Apply search query
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      assets = assets.filter(a =>
        a.name.toLowerCase().includes(lowercaseQuery) ||
        a.filename.toLowerCase().includes(lowercaseQuery) ||
        a.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    }

    return assets.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
  }

  // Collection management
  async createCollection(
    name: string,
    createdBy: string,
    description?: string
  ): Promise<MediaCollection> {
    const collection: MediaCollection = {
      id: `collection_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      description,
      assets: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy,
      isPublic: false,
      tags: []
    };

    this.collections.set(collection.id, collection);
    return collection;
  }

  async getCollection(id: string): Promise<MediaCollection | null> {
    return this.collections.get(id) || null;
  }

  async updateCollection(id: string, updates: Partial<MediaCollection>): Promise<MediaCollection | null> {
    const collection = this.collections.get(id);
    if (!collection) return null;

    const updatedCollection = {
      ...collection,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.collections.set(id, updatedCollection);
    return updatedCollection;
  }

  async deleteCollection(id: string): Promise<boolean> {
    return this.collections.delete(id);
  }

  async addAssetToCollection(collectionId: string, assetId: string): Promise<boolean> {
    const collection = this.collections.get(collectionId);
    if (!collection) return false;

    if (!collection.assets.includes(assetId)) {
      collection.assets.push(assetId);
      collection.updatedAt = new Date().toISOString();
      this.collections.set(collectionId, collection);
    }

    return true;
  }

  async removeAssetFromCollection(collectionId: string, assetId: string): Promise<boolean> {
    const collection = this.collections.get(collectionId);
    if (!collection) return false;

    const index = collection.assets.indexOf(assetId);
    if (index > -1) {
      collection.assets.splice(index, 1);
      collection.updatedAt = new Date().toISOString();
      this.collections.set(collectionId, collection);
    }

    return true;
  }

  async getCollectionAssets(collectionId: string): Promise<MediaAsset[]> {
    const collection = this.collections.get(collectionId);
    if (!collection) return [];

    return collection.assets
      .map(assetId => this.assets.get(assetId))
      .filter((asset): asset is MediaAsset => asset !== undefined);
  }

  // Utility methods
  private validateFile(file: File | Buffer, config: MediaUploadOptions): boolean {
    // Check file size
    if (file instanceof File && file.size > (config.maxSize || 0)) {
      return false;
    }

    // Check file type
    if (file instanceof File && config.allowedTypes) {
      if (!config.allowedTypes.includes(file.type)) {
        return false;
      }
    }

    return true;
  }

  private async processFile(
    file: File | Buffer,
    config: MediaUploadOptions
  ): Promise<{
    filename: string;
    url: string;
    thumbnailUrl?: string;
    size: number;
    mimeType: string;
    duration?: number;
    dimensions?: { width: number; height: number };
    metadata: Record<string, any>;
  }> {
    // Mock file processing - in production, you would:
    // 1. Upload to cloud storage (S3, Cloudinary, etc.)
    // 2. Generate thumbnails for images/videos
    // 3. Extract metadata
    // 4. Compress if needed

    const filename = file instanceof File ? file.name : `file_${Date.now()}`;
    const mimeType = file instanceof File ? file.type : 'application/octet-stream';
    const size = file instanceof File ? file.size : (file as Buffer).length;

    return {
      filename,
      url: `https://media.ziontechgroup.com/assets/${filename}`,
      thumbnailUrl: config.generateThumbnail ? `https://media.ziontechgroup.com/thumbnails/${filename}` : undefined,
      size,
      mimeType,
      duration: this.getFileType(mimeType) === 'video' || this.getFileType(mimeType) === 'audio' ? 120 : undefined,
      dimensions: this.getFileType(mimeType) === 'image' ? { width: 1920, height: 1080 } : undefined,
      metadata: {
        originalName: filename,
        processedAt: new Date().toISOString(),
        version: '1.0'
      }
    };
  }

  private getFileType(mimeType: string): MediaAsset['type'] {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.startsWith('audio/')) return 'audio';
    if (mimeType.startsWith('application/')) return 'document';
    return 'document';
  }

  // Configuration
  async updateUploadOptions(options: Partial<MediaUploadOptions>): Promise<void> {
    this.uploadOptions = { ...this.uploadOptions, ...options };
  }

  async getUploadOptions(): Promise<MediaUploadOptions> {
    return { ...this.uploadOptions };
  }

  // Statistics
  async getStats(): Promise<{
    totalAssets: number;
    totalCollections: number;
    totalSize: number;
    byType: Record<MediaAsset['type'], number>;
    byCategory: Record<MediaAsset['category'], number>;
  }> {
    const assets = Array.from(this.assets.values());
    
    const byType: Record<MediaAsset['type'], number> = {
      image: 0,
      video: 0,
      audio: 0,
      document: 0,
      archive: 0
    };

    const byCategory: Record<MediaAsset['category'], number> = {
      logo: 0,
      banner: 0,
      icon: 0,
      screenshot: 0,
      demo: 0,
      documentation: 0,
      other: 0
    };

    let totalSize = 0;

    for (const asset of assets) {
      byType[asset.type]++;
      byCategory[asset.category]++;
      totalSize += asset.size;
    }

    return {
      totalAssets: assets.length,
      totalCollections: this.collections.size,
      totalSize,
      byType,
      byCategory
    };
  }

  // Cleanup
  async clearAll(): Promise<void> {
    this.assets.clear();
    this.collections.clear();
  }
}

// Singleton instance
export const mediaKit = new MediaKit();

// Main functions for external use
export async function uploadAsset(
  file: File | Buffer,
  name: string,
  uploadedBy: string,
  options?: Partial<MediaUploadOptions>
): Promise<MediaAsset> {
  return mediaKit.uploadAsset(file, name, uploadedBy, options);
}

export async function getAsset(id: string): Promise<MediaAsset | null> {
  return mediaKit.getAsset(id);
}

export async function searchAssets(query: string, filters?: Parameters<typeof mediaKit.searchAssets>[1]): Promise<MediaAsset[]> {
  return mediaKit.searchAssets(query, filters);
}

export async function createCollection(
  name: string,
  createdBy: string,
  description?: string
): Promise<MediaCollection> {
  return mediaKit.createCollection(name, createdBy, description);
}

export async function getCollection(id: string): Promise<MediaCollection | null> {
  return mediaKit.getCollection(id);
}

// Utility functions
export function formatFileSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

export function isImageFile(mimeType: string): boolean {
  return mimeType.startsWith('image/');
}

export function isVideoFile(mimeType: string): boolean {
  return mimeType.startsWith('video/');
}

export function isAudioFile(mimeType: string): boolean {
  return mimeType.startsWith('audio/');
}

export function generateAssetId(): string {
  return `asset_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateCollectionId(): string {
  return `collection_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  const header = `${params.company_name} ${title_case (type.replace ('-', ' '))}`;
  const boilerplate = `${params.company_name} builds AI agents for Web3 enterprises. Learn more at https://zion.app`;
;
  // Check condition
if ( {) {
  $2
}
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces a seed round of ${params.raise_amount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\n_quotes:\n- CEO: "We are thrilled..."\n\n_about ${params.company_name}:\n${boilerplate}`;
  }
  // Check condition
if ( {) {
  $2
}
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces the ${params.token_name ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\n_distribution:\n- Community: 40%\n- Treasury: 20%\n\n_about ${params.company_name}:\n${boilerplate}`;
  }
  return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\n_about ${params.company_name}:\n${boilerplate}`;
;
export /**
 * build_timeline - Function description
 */
function build_timeline() {
  const add_days = (d: Date, days: number) =>: any;
    new Date (d.getFullYear (), d.get_month (), d.get_date () + days);
  const fmt = (d: Date) =>: any d.toISOString ().substring (0, 10);
  return [;
    { label: 'Week 1: Closed Beta Invite', date: fmt (add_days (start_date, 0)) },
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt (add_days (start_date, 7)) },
    {
      label: 'Week 3: Token Airdrop Snapshot',
      date: fmt (add_days (start_date, 14)),
    },
    { label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) },
  ];
;
/**
 * title_case - Function description
 */
function title_case() {
  return s.replace (
    /\w\S*/g,
    w => w.char_at (0).toUpperCase () + w.slice (1).toLowerCase ());}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
