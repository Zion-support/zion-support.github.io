import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface Recommendation {
  id: string;
  title: string;
  description: string;
}

export default function RecommendationsPage() {
  // Mock data instead of using external hooks
  const mockRecommendations: Recommendation[] = [
    {
      id: '1',
      title: 'AI-Powered Analytics',
      description: 'Implement AI-driven analytics to gain deeper insights into your business data.'
    },
    {
      id: '2',
      title: 'Cybersecurity Enhancement',
      description: 'Strengthen your security posture with advanced threat detection and prevention.'
    },
    {
      id: '3',
      title: 'Cloud Migration',
      description: 'Migrate to cloud infrastructure for improved scalability and cost efficiency.'
    },
    {
      id: '4',
      title: 'Digital Transformation',
      description: 'Transform your business processes with modern digital solutions.'
    }
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">AI Recommendations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRecommendations.map((rec) => (
            <div key={rec.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{rec.title}</h3>
                <p className="text-gray-600">{rec.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
