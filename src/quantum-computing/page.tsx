<<<<<<< HEAD
'use client'
import React from 'react'
import { Atom, Lock } from 'lucide-react'
import { CheckCircle, Star, Brain, Shield } from 'lucide-react'

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      id: 'quantum-algorithms',
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed to solve your specific computational challenges.',
      features: ['Custom algorithm design', 'Quantum circuit optimization', 'Performance benchmarking', 'Implementation support'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Competitive advantage', 'Future-proof technology'],
      marketPrice: '$5,00 0-1 5,00 0/month',
      category: 'Algorithm Development',
      technologies: ['Qiskit', 'Cirq', 'Q#', 'PennyLane', 'Quantum Hardware']
   },
    {id: 'quantum-cryptography',
      title: 'Quantum Cryptography Solutions',
      description: 'Ultra-secure communication systems using quantum key distribution and quantum encryption.',
      features: ['Quantum key distribution', 'Quantum encryption', 'Security protocols', 'Implementation support'],
      benefits: ['Unbreakable security', 'Future-proof encryption', 'Regulatory compliance', 'Peace of mind'],
      marketPrice: '$8,00 0-2 0,00 0/month',
      category: 'Security Solutions',
      technologies: ['BB84Protocol', 'Quantum Networks', 'Hardware Integration', 'Security Auditing']
   },
    {id: 'quantum-optimization',
      title: 'Quantum Optimization Services',
      description: 'Solve complex optimization problems using quantum annealing and variational algorithms.',
      features: ['Problem modeling', 'Quantum annealing', 'Variational algorithms', 'Performance analysis'],
      benefits: ['Optimal solutions', 'Faster convergence', 'Cost reduction', 'Improved efficiency'],
      marketPrice: '$3,00 0-1 0,00 0/month',
      category: 'Optimization',
      technologies: ['D-Wave', 'IBM Qiskit', 'Rigetti', 'IonQ', 'Custom Algorithms']
    }
  ]
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )
}
export default QuantumComputingPage
