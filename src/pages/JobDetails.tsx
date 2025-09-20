import React from 'react';
import { useRouter } from 'next/router';
import { SEO } from '@/components/SEO';

const JobDetails: React.FC = () => {,
  const router = useRouter();
  const { id } = router.query;

  const mockJob = {
    id: id as string || '1',
    title: 'AI Solutions Architect',
    description: 'Designing and implementing cutting-edge AI solutions for enterprise clients.',
    company_name: 'Zion Tech Group',
    skills: ['AI', 'Machine Learning', 'Cloud Computing', 'Python'],
    created_at: '2024-01-01T12:00:00Z',
    category: 'AI Development'};

  return (
    <>
      <SEO
        title={`${mockJob.title} - Zion AI Marketplace`}
        description={mockJob.description.substring(0, 160)}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{mockJob.title}</h1>
              <p className="text-gray-600 text-lg mb-4">{mockJob.company_name}</p>
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {mockJob.category}
                </span>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                <p className="text-gray-700">{mockJob.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Skills Required</h2>
                <div className="flex flex-wrap gap-2">
                  {mockJob.skills.map((skill) => (
                    <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div>
                    <strong>Posted:</strong> {new Date(mockJob.created_at).toLocaleDateString()}
                  </div>
                  <div>
                    <strong>Location:</strong> Remote
                  </div>
                  <div>
                    <strong>Type:</strong> Full-time
                  </div>
                  <div>
                    <strong>Salary:</strong> $80,000 - $120,000
                  </div>
                </div>
                
                <button 
                  onClick={() => router.push('/careers')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;