export type MediaBundle = 'general' | 'web3' | 'institutional';
export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';

export interface MediaAsset {
  id: string;
  name: string;
  type: 'logo' | 'image' | 'video' | 'document';
  url: string;
  bundle: MediaBundle;
  createdAt: string;
}

export interface PressRelease {
  id: string;
  title: string;
  type: PressReleaseType;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export function createMediaAsset(asset: Omit<MediaAsset, 'id' | 'createdAt'>): MediaAsset {
  return {
    ...asset,
    id: `asset_${Date.now()}`,
    createdAt: new Date().toISOString()
  };
}

export function createPressRelease(release: Omit<PressRelease, 'id' | 'createdAt' | 'updatedAt'>): PressRelease {
  return {
    ...release,
    id: `pr_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}