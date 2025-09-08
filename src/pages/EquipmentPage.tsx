<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
=======
=======
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, DollarSign, Users, MapPin, Phone, Mail } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-e276

const API_BASE = '/api';

// Sample datacenter equipment listings
const EQUIPMENT_LISTINGS: ProductListing[] = [
  {
    id: "2u-rack-mount-server",
    title: "2U Rack Mount Server",
    description:
      "High‑density server optimized for virtualization and private cloud deployments.",
    category: "Servers",
    price: 4200,
    currency: "$",
    tags: ["Xeon", "64GB RAM", "Dual PSU"],
    author: {
      name: "DataCore",
      id: "datacore",
      avatarUrl:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1585079548264-ef0c62f1db1f?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: "10gbe-switch",
    title: "48‑Port 10GbE Switch",
    description:
      "Enterprise switch delivering ultra‑low latency for mission critical applications.",
    category: "Networking",
    price: 6800,
    currency: "$",
    tags: ["Layer 3", "SFP+", "Managed"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1587202372775-67d85b1cce31?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-05T12:30:00.000Z",
    rating: 4.7,
    reviewCount: 15,
  },
  {
    id: "intelligent-pdu",
    title: "Intelligent Rack PDU",
    description:
      "Remotely monitor power consumption with per‑outlet switching and metering.",
    category: "Power",
    price: 950,
    currency: "$",
    tags: ["Remote", "Metered", "24 Outlets"],
    author: {
      name: "PowerHub",
      id: "powerhub",
    },
    images: [
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-18T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 32,
  },
  {
    id: "modular-ups",
    title: "Modular Online UPS",
    description:
      "Scalable uninterrupted power supply with hot‑swappable battery modules.",
    category: "Power",
    price: 8200,
    currency: "$",
    tags: ["Hot Swap", "Scalable", "LCD"],
    author: {
      name: "VoltSecure",
      id: "voltsecure",
      avatarUrl:
        "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-22T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 12,
  },
  {
    id: "fiber-patch-panel",
    title: "24‑Port Fiber Patch Panel",
    description:
      "Rack mount patch panel with LC connectors for organized fiber management.",
    category: "Networking",
    price: 480,
    currency: "$",
    tags: ["LC", "1U", "Cable Management"],
    author: {
      name: "FiberLink",
      id: "fiberlink",
    },
    images: [
      "https://images.unsplash.com/photo-1552508744-1696a1be6c54?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-02T14:20:00.000Z",
    rating: 4.5,
    reviewCount: 9,
  },
  {
    id: "precision-cooling",
    title: "Precision Airflow Cooling Unit",
    description:
      "Efficient cooling system designed to maintain optimal rack temperature.",
    category: "Cooling",
    price: 5400,
    currency: "$",
    tags: ["Rack Mount", "Variable Speed", "Energy Efficient"],
    author: {
      name: "CoolWorks",
      id: "coolworks",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1581093588401-1cfe5f157568?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-10T08:10:00.000Z",
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "blade-server-chassis",
    title: "Blade Server Chassis",
    description:
      "High‑density chassis supporting up to 8 hot-swappable blades for scalable compute.",
    category: "Servers",
    price: 9200,
    currency: "$",
    tags: ["8 Blades", "Hot Swap", "Redundant PSU"],
    author: {
      name: "ComputeMax",
      id: "computemax",
    },
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-12T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 11,
  },
  {
    id: "40gbe-core-switch",
    title: "40GbE Core Switch",
    description:
      "High-performance core switch for enterprise datacenters with advanced routing features.",
    category: "Networking",
    price: 12800,
    currency: "$",
    tags: ["Layer 3", "QSFP+", "Redundant Fans"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1581091870625-55858aad7cf0?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-07T09:20:00.000Z",
    rating: 4.8,
    reviewCount: 16,
  },
  {
    id: "firewall-appliance",
    title: "Enterprise Firewall Appliance",
    description:
      "Next‑generation firewall providing deep packet inspection and intrusion prevention.",
    category: "Security",
    price: 6200,
    currency: "$",
    tags: ["NGFW", "VPN", "Gigabit"],
    author: {
      name: "SecureSys",
      id: "securesys",
    },
    images: [
      "https://images.unsplash.com/photo-1585861291871-e6c46a28d5c7?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-27T15:30:00.000Z",
    rating: 4.6,
    reviewCount: 14,
  },
  {
    id: "kvm-ip-switch",
    title: "KVM over IP Switch",
    description:
      "Remote management of multiple servers with virtual media support.",
    category: "Management",
    price: 3100,
    currency: "$",
    tags: ["8 Ports", "Virtual Media", "Remote Access"],
    author: {
      name: "ManageIT",
      id: "manageit",
    },
    images: [
      "https://images.unsplash.com/photo-1603791440384-9465026a9b69?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-12T08:55:00.000Z",
    rating: 4.4,
    reviewCount: 10,
  },
  {
    id: "flash-storage-array",
    title: "All‑Flash Storage Array",
    description:
      "Ultra‑fast storage platform delivering millions of IOPS for database workloads.",
    category: "Storage",
    price: 15000,
    currency: "$",
    tags: ["NVMe", "SSD", "Redundant Controller"],
    author: {
      name: "DataCore",
      id: "datacore",
    },
    images: [
      "https://images.unsplash.com/photo-1581091870625-4c31b89f9518?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-04T11:10:00.000Z",
    rating: 4.9,
    reviewCount: 20,
  },
  {
    id: "tape-backup-library",
    title: "Automated Tape Backup Library",
    description: "Scalable tape library for reliable long‑term data archiving.",
    category: "Storage",
    price: 7600,
    currency: "$",
    tags: ["LTO-9", "Redundant Power", "24 Slots"],
    author: {
      name: "ArchiveTech",
      id: "archivetech",
    },
    images: [
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-30T16:40:00.000Z",
    rating: 4.5,
    reviewCount: 7,
  },
  {
    id: "server-rack-42u",
    title: "42U Server Rack Cabinet",
    description:
      "Standard rack cabinet with adjustable rails and locking doors.",
    category: "Infrastructure",
    price: 1200,
    currency: "$",
    tags: ["Adjustable Rails", "Lockable", "Ventilated"],
    author: {
      name: "RackMaster",
      id: "rackmaster",
    },
    images: [
      "https://images.unsplash.com/photo-1581091012184-e5857b5b3a4b?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-20T13:05:00.000Z",
    rating: 4.8,
    reviewCount: 25,
  },
  {
    id: "dc-monitoring",
    title: "Data Center Monitoring System",
    description:
      "Comprehensive environment and power monitoring with alerting.",
    category: "Management",
    price: 4700,
    currency: "$",
    tags: ["Sensors", "Alerts", "Analytics"],
    author: {
      name: "DCVision",
      id: "dcvision",
    },
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-08T18:00:00.000Z",
    rating: 4.7,
    reviewCount: 13,
  },
  {
    id: "high-capacity-router",
    title: "High‑Capacity Edge Router",
    description:
      "Carrier-grade router providing advanced QoS and BGP routing capabilities.",
    category: "Networking",
    price: 13400,
    currency: "$",
    tags: ["BGP", "10GbE", "Redundant PSU"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1604079625023-792d09e87a4d?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-09T08:45:00.000Z",
    rating: 4.6,
    reviewCount: 17,
  },
  {
    id: "cable-management-arm",
    title: "Cable Management Arm",
    description:
      "Keeps server rack cabling organized and reduces strain on connections.",
    category: "Infrastructure",
    price: 160,
    currency: "$",
    tags: ["Adjustable", "Tool-Less", "1U"],
    author: {
      name: "RackMaster",
      id: "rackmaster",
    },
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-03T06:25:00.000Z",
    rating: 4.4,
    reviewCount: 5,
  },
];

const EquipmentPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Equipment - Zion Tech Group"
        description="Browse our available equipment and hardware"
        canonical="https://ziontechgroup.com/equipment"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Equipment
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Browse our available equipment and hardware
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our equipment page is coming soon. You'll be able to browse and rent our available equipment and hardware.
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function EquipmentPage() {
  const [listings, setListings] = useState<ProductListing[]>([
    ...EQUIPMENT_LISTINGS,
  ]);

  useEffect(() => {
    async function fetchEquipment() {
      try {
        const res = await fetch(`${API_BASE}/equipment`);
        if (!res.ok) throw new Error('Equipment fetch failed');
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error(err);
        setListings(EQUIPMENT_LISTINGS);
      }
    }
    fetchEquipment();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings((prev) => [...prev, generateRandomEquipment()]);
    }, 120000); // add new equipment every 2 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Tech Equipment - Zion Tech Group"
        description="Browse and rent professional tech equipment for your projects."
        canonical="https://ziontechgroup.com/equipment"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Tech Equipment</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Access to professional-grade technology equipment for your development and testing needs.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our equipment marketplace is currently under development. Soon you'll be able to browse, rent, and purchase professional tech equipment.
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
  );
};

export default EquipmentPage;
=======
      </main>
      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
