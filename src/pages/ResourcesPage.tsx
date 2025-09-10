import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen,
  Download,
  FileText,
  Video,
  Play,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  ArrowRight,
  Star,
  Award,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Share2,
  Tag,
  TrendingUp,
  Lightbulb,
  Target,
  CheckCircle
} from "lucide-react";
export function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "whitepapers", name: "White Papers", icon: FileText },
    { id: "case-studies", name: "Case Studies", icon: Target },
    { id: "webinars", name: "Webinars", icon: Video },
    { id: "guides", name: "Guides", icon: BookOpen },
    { id: "templates", name: "Templates", icon: FileText },
    { id: "research", name: "Research", icon: Brain },
    { id: "tools", name: "Tools", icon: Code }