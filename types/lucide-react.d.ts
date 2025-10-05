declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }
  
  export type LucideIcon = ComponentType<LucideProps>;
  
  // Re-export all icons as components that accept LucideProps
  export const ArrowRight: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Brain: LucideIcon;
  export const Zap: LucideIcon;
  export const Target: LucideIcon;
  export const Users: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Award: LucideIcon;
  export const Clock: LucideIcon;
  export const Calendar: LucideIcon;
  export const User: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const Share2: LucideIcon;
  export const Bookmark: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Rocket: LucideIcon;
  export const Satellite: LucideIcon;
  export const Globe: LucideIcon;
  export const Tag: LucideIcon;
  export const BarChart3: LucideIcon;
  export const FileText: LucideIcon;
  export const Cpu: LucideIcon;
  export const Code2: LucideIcon;
  export const Atom: LucideIcon;
  export const Bot: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Star: LucideIcon;
  export const Shield: LucideIcon;
}
