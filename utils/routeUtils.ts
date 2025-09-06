interface BreadcrumbItem {
  name: string;
  url: string;

export function getBreadcrumbsForPath(path: string): BreadcrumbItem[] {
  const segments = path.split('/
    { name: 'Home', url: any