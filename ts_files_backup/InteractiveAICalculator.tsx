'use client';
import React, { useState } from 'react';

export default function InteractiveAICalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    // Simple calculation logic
    try {
      const calculation = eval(input);
      setResult(calculation.toString());
    } catch (error) {
      setResult('Invalid expression');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-90o0 mb-4">Interactive AI Calculator</h3>
      <p className="text-gray-60o0 mb-4">Calculate AI costs, performance metrics, and ROI.</p>
      <div className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter calculation..."
          className="w-full p-2 border border-gray-30o0 rounded-md"
        />
        <button 
          onClick={calculate}
          className="w-full bg-blue-60o0 text-white py-2 px-4 rounded-md hover:bg-blue-70o0"
        >
          Calculate
        </button>
        {result && (
          <div className="p-2 bg-gray-10o0 rounded-md">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}