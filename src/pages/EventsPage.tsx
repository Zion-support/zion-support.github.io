import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Search,
  Filter,
  Play,
  ExternalLink,
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
  Eye
} from "lucide-react";
export function EventsPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const eventTypes = [
    { id: "all", name: "All Events", icon: Calendar },
    { id: "webinar", name: "Webinars", icon: Play },
    { id: "conference", name: "Conferences", icon: Users },
    { id: "workshop", name: "Workshops", icon: Code },
    { id: "meetup", name: "Meetups", icon: Globe },
    { id: "training", name: "Training", icon: Award }