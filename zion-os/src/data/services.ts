export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'ai-code-assistant',
    name: 'ZionAI Code Assistant',
    category: 'AI Services',
    description: 'AI-powered code generation and review platform.',
  },
];

export const getCategories = () => Array.from(new Set(services.map((s) => s.category)));
