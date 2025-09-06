

import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { useWhitelabel } from "@/context/WhitelabelContext",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();
  return (
    <>
      <SEO 
        title;
              reduce time-to-hire, and improve candidate experience.

            </p>
            <Button
              size='lg'
              className='bg-zion-purple hover:bg-zion-purple-light text-white'
              asChild
            >
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>
            <Button 
              size="lg" 
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild
            >
              <Link href="/enterprise/demo">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
;