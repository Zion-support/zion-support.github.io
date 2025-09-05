import EnhancedLayout from '../components/layout/EnhancedLayout';
import { Rocket, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function ServicesPage() {
  return (
    <EnhancedLayout>
      <h1 className=&quot;text-2xl font-semibold&quot;>Services</h1>
      <div className=&quot;mt-6 grid md:grid-cols-3 gap-6&quot;>
        <section id=&quot;mvp&quot; className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <Rocket className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>MVP Acceleration</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Dedicated squads to launch your MVP in weeks with tight feedback cycles.</p>
        </section>
        <section id=&quot;security&quot; className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <ShieldCheck className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>Security & Compliance</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Secure architecture, audits, and compliance workflows (SOC2-ready).</p>
        </section>
        <section id=&quot;ai&quot; className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <BadgeCheck className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>AI Integrations</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Copilots, agents, vector search, and automation tailored to your product.</p>
        </section>
      </div>
    </EnhancedLayout>
  );
}