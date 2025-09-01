
import React, { useState, useEffect } from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { Brain,
import { motion  } from 'framer - motion.ts';


  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Sparkles'
 } from 'lucide-react.ts';
  };
  const getServicePrice = (service: any)  => {

    if (typeof service.price === 'number') {

      return service.price;
    }
    return service.pricing?.basic || 0;
  };
