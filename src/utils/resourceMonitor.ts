type ResourceType = 'script' | 'stylesheet' | 'image' | 'font' | 'other';

interface ResourceError {
  url: string;
  type: ResourceType;