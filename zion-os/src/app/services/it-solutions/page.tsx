export interface ItSolution {
  name: string;
  description: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  technologies: string[];
  industries: string[];
}

export default function ItSolutionsPage() {
  const solutions: ItSolution[] = [];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">IT Solutions</h1>
      <p className="text-white/70">Our IT services and solutions. Content coming soon.</p>
    </div>
  );
}
