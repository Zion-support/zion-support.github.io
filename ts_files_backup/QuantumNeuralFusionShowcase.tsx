import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface QuantumNeuralFusionShowcaseProps {
  features?: string[];
}

export default function QuantumNeuralFusionShowcase({ 
  features = [
    "Quantum-enhanced neural networks",
    "Real-time quantum processing",
    "Advanced AI consciousness",
    "Neural fusion capabilities"
  ]
}: QuantumNeuralFusionShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{feature}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Revolutionary quantum-neural fusion technology that pushes the boundaries of AI capabilities.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}