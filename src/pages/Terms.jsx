import SEO from "@/components/SEO";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import TermsOfService from "@/legal/TermsOfService";
export default function Terms() {
    return (<>
      <SEO title="Terms of Service" description="The terms and conditions for using the Zion platform." canonical="https://ziontechgroup.com/terms"/>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
      <Footer />
<<<<<<< HEAD
    </>);
}
=======
    </>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
