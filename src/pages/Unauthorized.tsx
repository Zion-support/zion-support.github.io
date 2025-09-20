import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ShieldAlert } from 'lucide-react';

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center">
          <ShieldAlert className="h-24 w-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Unauthorized Access</h1>
          <p className="text-zion-cyan mb-8">
            You don't have permission to access this page.
          </p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}