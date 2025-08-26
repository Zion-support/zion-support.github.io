import SEOHead from "@/components/SEOHead";
import { FuturisticNavigation } from "@/components/FuturisticNavigation";
import { FuturisticFooter } from "@/components/FuturisticFooter";
import TermsOfService from "@/legal/TermsOfService";
export default function Terms() {
    return (<>
      <SEOHead title="Terms of Service" description="The terms and conditions for using the Zion platform." canonical="https://ziontechgroup.com/terms"/>
      <FuturisticNavigation />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
      <Footer />
    </>);
}
