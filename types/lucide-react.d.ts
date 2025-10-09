declare module "lucide-react" {
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

  // Social media icons
  export const Github: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Twitter: LucideIcon;

  // Communication icons
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;

  // Location icons
  export const MapPin: LucideIcon;

  // UI icons
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Star: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const Home: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Cpu: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Shield: LucideIcon;
  export const Settings: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Code: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Atom: LucideIcon;
  export const Calculator: LucideIcon;
  export const Share2: LucideIcon;
  export const Search: LucideIcon;
  export const Globe: LucideIcon;
  export const Database: LucideIcon;
  export const Cloud: LucideIcon;

  // Add more icons as needed
}
