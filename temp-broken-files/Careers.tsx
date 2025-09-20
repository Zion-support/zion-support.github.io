import { SEO,  } from "@/components/SEO",
import { GradientHeading,  } from "@/components/GradientHeading",
import { Button,  } from "@/components/ui/button",
import { Card, CardContent,  } from "@/components/ui/card",
import { Tabs,, TabsContent,, TabsList, TabsTrigger,  } from "@/components/ui/tabs",
import Link from "next/link";
import { CAREER_JOBS,  } from "@/data/careersJobs";
export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers</h1>
        <p className="text-lg text-gray-600">Join our team...</p>
      </div>
    </div>
  );
}