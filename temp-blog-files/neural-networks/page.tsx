import React from 'react'
import Link from 'next/link'
import SEO from '../../components/SEO';
export const metadata = {
  title: 'Neural Networks 2025 - Advanced AI Learning | Zion Tech Group',
  description: 'Master neural networks and deep learning with our comprehensive curriculum. From fundamentals to advanced architectures and real-world applications.',
  keywords: ['neural networksdeep learningmachine learningAI education', 'neural network tutorials']
}
export default function NeuralNetworksPage() {
  return (
    <div>
      <SEO
        title="[^"]*"
        description="[^"]*"
        keywords="neural networks, deep learning, machine learning, AI education, neural network tutorials"
        url="/neural-networks"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Neural Networks 2025,
          </h1>
          <p>
            Discover the next generation of neural network architectures that mimic the human brain,
            with unprecedented accuracy and efficiency. Experience AI that thinks like humans.,
          </p>
          <div>
            <Link,
              href="/neural-networks/learning-path",
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Learning Path,
            </Link>
            <Link,
              href="/neural-networks/interactive-demo",
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Try Interactive Demo,
            </Link>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Neural Network Types</h2>
          <div>
            <div>
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Learning</h3>
              <p>
                Multi-layered neural networks with advanced backpropagation algorithms.,
              </p>
              <Link href="/neural-networks/deep-learning" className="text-orange-600 font-semibold hover:text-orange-800">
                Learn More →,
              </Link>
            </div>
            <div>
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recurrent Networks</h3>
              <p>
                Memory-based networks for sequential data processing and time series analysis.,
              </p>
              <Link href="/neural-networks/recurrent" className="text-orange-600 font-semibold hover:text-orange-800">
                Learn More →,
              </Link>
            </div>
            <div>
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Convolutional Networks</h3>
              <p>
                Vision-based networks for image and video recognition with spatial hierarchies.,
              </p>
              <Link href="/neural-networks/convolutional" className="text-orange-600 font-semibold hover:text-orange-800">
                Learn More →,
              </Link>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transformer Networks</h3>
              <p>
                Attention-based networks for natural language processing and sequence modeling.,
              </p>
              <Link href="/neural-networks/transformers" className="text-orange-600 font-semibold hover:text-orange-800">
                Learn More →,
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Neural Network Journey,
          </h2>
          <p>
            Join thousands of developers and researchers learning neural networks with our comprehensive curriculum.,
          </p>
          <Link,
            href="/neural-networks/community",
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Join Learning Community,
          </Link>
        </div>
      </section>
    </div>)}