import React, { useState, useEffect } from 'react.ts';
import { Link              } from 'react-router-dom.ts';
import { motion              } from 'framer-motion.ts';
import { Brain,
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
  Sparkles
<<<<<<< HEAD
} from 'lucide-react';

const getServicePrice = (service: any) => {
=======
             } from 'lucide-react.ts';
  };
  const getServicePrice = (service: anyanyanyanyanyanyanyanyanyanyanyanyany)              => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    if (typeof service.price === 'number') {
      return service.price;
    }
    return service.pricing?.basic || 0;
  };
