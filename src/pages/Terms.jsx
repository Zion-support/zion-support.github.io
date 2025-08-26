import { SEO } from "@/components/SEO";
import TermsOfService from "@/legal/TermsOfService";
export default function Terms() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
        <SEO title="Terms of Service" description="The terms and conditions for using the Zion platform." canonical="https://ziontechgroup.com/terms"/>
        <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
    </div>
  );
}
