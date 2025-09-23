export interface AiSolution {
  name: string;
  description: string;
  technicalSpecs: string[];
  useCases: string[];
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  integration: string[];
}

export default function AiSolutionsPage() {
  const solutions: AiSolution[] = [];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">AI Solutions</h1>
      <p className="text-white/70">Explore our AI offerings. Content coming soon.</p>
    </div>
  );
}
