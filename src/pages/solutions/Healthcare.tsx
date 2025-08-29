// React import removed as it's not needed in modern React
import { SEO } from '@/components/SEO';

export default function HealthcareSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO title="Healthcare Solutions - Zion Tech Group" description="Clinical AI, patient analytics, secure interoperability, and compliance-ready platforms." />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Healthcare Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Accelerate outcomes with AI diagnostics, care management analytics, FHIR-based integrations, and HIPAA-compliant data flows.
        </p>
      </section>
    </div>
  );
}

