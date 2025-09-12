import React from 'react';
import Link from 'next/link';

export default function AIHealthcareDiagnosis2025() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6'>
              <span className='mr-2'>🏥</span>
              Healthcare AI
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              AI-Powered Medical Diagnosis Platform
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Revolutionizing healthcare with AI-driven diagnostic accuracy. See how we helped a 
              leading medical center achieve 95% diagnostic accuracy and reduce diagnosis time by 70%.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
              >
                Start Your AI Project
              </Link>
              <Link
                href='/case-studies'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <article className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-12'>
            {/* Main Content */}
            <div className='lg:col-span-2'>
              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Project Overview</h2>
                <p className='text-lg text-gray-700 mb-6'>
                  We partnered with MedCenter Plus, a leading regional healthcare network, to develop 
                  an AI-powered diagnostic platform that could analyze medical images, lab results, 
                  and patient symptoms to provide accurate preliminary diagnoses. The goal was to 
                  improve diagnostic accuracy while reducing the time required for initial assessments.
                </p>

                <h2 className='text-3xl font-bold text-gray-900 mb-6'>The Challenge</h2>
                <div className='bg-red-50 border border-red-200 rounded-lg p-6 mb-8'>
                  <h3 className='text-xl font-bold text-red-800 mb-4'>Critical Issues Facing MedCenter Plus</h3>
                  <ul className='space-y-3 text-red-700'>
                    <li className='flex items-start'>
                      <span className='text-red-500 mr-2'>•</span>
                      <span>Diagnostic accuracy varied significantly between physicians (60-85%)</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-500 mr-2'>•</span>
                      <span>Average diagnosis time was 45 minutes per patient</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-500 mr-2'>•</span>
                      <span>High rate of misdiagnosis leading to delayed treatment</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-500 mr-2'>•</span>
                      <span>Physician burnout due to high patient volume</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-500 mr-2'>•</span>
                      <span>Increasing costs due to repeated diagnostic procedures</span>
                    </li>
                  </ul>
                </div>

                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Our Solution</h2>
                <p className='text-lg text-gray-700 mb-6'>
                  We developed a comprehensive AI diagnostic platform that combines computer vision, 
                  natural language processing, and machine learning to analyze multiple data sources 
                  and provide accurate preliminary diagnoses.
                </p>

                <div className='grid md:grid-cols-2 gap-8 mb-8'>
                  <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>🔍 Image Analysis Module</h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li>• X-ray interpretation</li>
                      <li>• MRI/CT scan analysis</li>
                      <li>• Dermatology image recognition</li>
                      <li>• Ophthalmology screening</li>
                    </ul>
                  </div>

                  <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>📊 Lab Results Processing</h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li>• Blood test analysis</li>
                      <li>• Urine test interpretation</li>
                      <li>• Biomarker pattern recognition</li>
                      <li>• Trend analysis over time</li>
                    </ul>
                  </div>

                  <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>📝 Symptom Analysis</h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li>• Natural language processing</li>
                      <li>• Symptom pattern matching</li>
                      <li>• Risk factor assessment</li>
                      <li>• Differential diagnosis generation</li>
                    </ul>
                  </div>

                  <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>🤖 AI Decision Engine</h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li>• Multi-modal data fusion</li>
                      <li>• Confidence scoring</li>
                      <li>• Uncertainty quantification</li>
                      <li>• Recommendation ranking</li>
                    </ul>
                  </div>
                </div>

                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Technical Implementation</h2>
                
                <div className='bg-gray-50 p-8 rounded-lg mb-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-6'>Technology Stack</h3>
                  
                  <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                      <h4 className='text-lg font-semibold text-gray-900 mb-3'>AI/ML Technologies</h4>
                      <ul className='space-y-2 text-gray-700'>
                        <li>• TensorFlow & PyTorch for deep learning</li>
                        <li>• OpenCV for image processing</li>
                        <li>• spaCy & BERT for NLP</li>
                        <li>• Scikit-learn for traditional ML</li>
                        <li>• XGBoost for ensemble methods</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-gray-900 mb-3'>Infrastructure</h4>
                      <ul className='space-y-2 text-gray-700'>
                        <li>• AWS SageMaker for model training</li>
                        <li>• Kubernetes for orchestration</li>
                        <li>• PostgreSQL for data storage</li>
                        <li>• Redis for caching</li>
                        <li>• Docker for containerization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Results & Impact</h2>
                
                <div className='grid md:grid-cols-2 gap-8 mb-8'>
                  <div className='bg-green-50 border border-green-200 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-green-800 mb-4'>📈 Performance Metrics</h3>
                    <div className='space-y-3'>
                      <div className='flex justify-between'>
                        <span className='text-green-700'>Diagnostic Accuracy:</span>
                        <span className='font-bold text-green-800'>95%</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-green-700'>Diagnosis Time:</span>
                        <span className='font-bold text-green-800'>-70%</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-green-700'>Misdiagnosis Rate:</span>
                        <span className='font-bold text-green-800'>-85%</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-green-700'>Patient Satisfaction:</span>
                        <span className='font-bold text-green-800'>+40%</span>
                      </div>
                    </div>
                  </div>

                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-blue-800 mb-4'>💰 Business Impact</h3>
                    <div className='space-y-3'>
                      <div className='flex justify-between'>
                        <span className='text-blue-700'>Cost Savings:</span>
                        <span className='font-bold text-blue-800'>$2.3M/year</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-blue-700'>Patient Throughput:</span>
                        <span className='font-bold text-blue-800'>+60%</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-blue-700'>Physician Efficiency:</span>
                        <span className='font-bold text-blue-800'>+45%</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-blue-700'>ROI:</span>
                        <span className='font-bold text-blue-800'>340%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Client Testimonial</h2>
                
                <div className='bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8'>
                  <blockquote className='text-lg text-gray-700 mb-6 italic'>
                    "The AI diagnostic platform has transformed our healthcare delivery. We've seen 
                    remarkable improvements in diagnostic accuracy and patient outcomes. Our physicians 
                    can now focus on complex cases while the AI handles routine diagnoses with 
                    exceptional accuracy. The ROI has been outstanding."
                  </blockquote>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4'>
                      <span className='text-blue-600 font-bold text-lg'>DC</span>
                    </div>
                    <div>
                      <div className='font-semibold text-gray-900'>Dr. Sarah Chen</div>
                      <div className='text-gray-600'>Chief Medical Officer, MedCenter Plus</div>
                    </div>
                  </div>
                </div>

                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Key Learnings</h2>
                
                <div className='space-y-6 mb-8'>
                  <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6'>
                    <h3 className='text-lg font-semibold text-yellow-800 mb-2'>🎯 Data Quality is Critical</h3>
                    <p className='text-yellow-700'>
                      The success of AI in healthcare depends heavily on data quality. We spent significant 
                      time cleaning and validating medical data before training our models.
                    </p>
                  </div>

                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
                    <h3 className='text-lg font-semibold text-blue-800 mb-2'>🤝 Physician Collaboration is Essential</h3>
                    <p className='text-blue-700'>
                      Working closely with physicians throughout the development process ensured the AI 
                      system aligned with clinical workflows and gained physician trust.
                    </p>
                  </div>

                  <div className='bg-green-50 border border-green-200 rounded-lg p-6'>
                    <h3 className='text-lg font-semibold text-green-800 mb-2'>⚖️ Regulatory Compliance is Complex</h3>
                    <p className='text-green-700'>
                      Healthcare AI requires careful attention to regulatory requirements, including 
                      HIPAA compliance, FDA guidelines, and medical device regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-8'>
                <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Project Details</h3>
                  <div className='space-y-3'>
                    <div>
                      <span className='text-sm font-medium text-gray-500'>Client:</span>
                      <p className='text-gray-900'>MedCenter Plus</p>
                    </div>
                    <div>
                      <span className='text-sm font-medium text-gray-500'>Industry:</span>
                      <p className='text-gray-900'>Healthcare</p>
                    </div>
                    <div>
                      <span className='text-sm font-medium text-gray-500'>Duration:</span>
                      <p className='text-gray-900'>12 months</p>
                    </div>
                    <div>
                      <span className='text-sm font-medium text-gray-500'>Team Size:</span>
                      <p className='text-gray-900'>15 developers</p>
                    </div>
                    <div>
                      <span className='text-sm font-medium text-gray-500'>Budget:</span>
                      <p className='text-gray-900'>$2.5M</p>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Technologies Used</h3>
                  <div className='flex flex-wrap gap-2'>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>TensorFlow</span>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>PyTorch</span>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>OpenCV</span>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>BERT</span>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>AWS SageMaker</span>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>Kubernetes</span>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>PostgreSQL</span>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>Docker</span>
                  </div>
                </div>

                <div className='bg-white rounded-lg shadow-md p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Key Results</h3>
                  <div className='space-y-3'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Diagnostic Accuracy:</span>
                      <span className='font-semibold text-green-600'>95%</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Time Reduction:</span>
                      <span className='font-semibold text-green-600'>70%</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Cost Savings:</span>
                      <span className='font-semibold text-green-600'>$2.3M/year</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>ROI:</span>
                      <span className='font-semibold text-green-600'>340%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-xl p-8 text-center shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Ready to Transform Your Healthcare with AI?
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Discover how AI can revolutionize your healthcare operations, improve patient outcomes, 
              and reduce costs. Let's discuss your specific needs and challenges.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Start Your AI Healthcare Project
              </Link>
              <Link
                href='/case-studies'
                className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}