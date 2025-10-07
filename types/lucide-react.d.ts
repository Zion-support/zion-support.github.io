declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  
  export type LucideIcon = ComponentType<LucideProps>;
  
  export const Calendar: LucideIcon;
  export const Clock: LucideIcon;
  export const ListChecks: LucideIcon;
  export const FileWarning: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const User: LucideIcon;
  export const Tag: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Users: LucideIcon;
  export const Target: LucideIcon;
  export const Brain: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Cog: LucideIcon;
  export const Award: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Zap: LucideIcon;
  export const CheckCircle: LucideIcon;
  // Add more icons as needed
}
