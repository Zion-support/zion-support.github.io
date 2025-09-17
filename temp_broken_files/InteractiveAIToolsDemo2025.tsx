"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play
  Pause
  RotateCcw
  Download
  Share2
  Settings
  Zap
  Brain
  Cpu
  Database,
  BarChart3,
  Image,
  FileText,
  Code,
  Video,
  Music,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  status: 'ready' | 'processing' | 'completed' | 'error';
  input: string;
  output: string;
  processingTime: number;
  accuracy: number;
  features: string[];
}

const InteractiveAIToolsDemo2025: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart width={300} height={200} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


export default UserDashboard;`,
    'data-analyzer': `📊 Data Analysis Results
Dataset: Sales Performance Q1-Q3 2025
Records Analyzed: 15,847 transactions
Key Insights:
• Revenue Growth: +23.4% quarter-over-quarter
• Peak Performance: March 2025 (+31.2% vs February)
• Top Product Category: AI Solutions (42% of total sales)
• Customer Acquisition: 1,247 new customers this quarter
Predictions for Q4:
• Expected Revenue: $2.4M (+18% growth)
• Recommended Focus: Expand AI Solutions line
• Risk Factors: Supply chain delays (15% probability)
• Opportunity: Holiday season boost (+25% expected)
Recommendations:
1. Increase inventory for AI Solutions by 30%
2. Launch targeted marketing campaign for Q4
3. Implement customer retention program
4. Prepare for increased demand in December`,
    'video-generator': 'Generated: 30-second promotional video featuring dynamic animations of the tech startup logosleek product shotscustomer testimonialsand a compelling call-to-action with upbeat background music.',
    'music-composer': 'Generated: Upbeat electronic track (120 BPM) featuring synthesizer melodiesdriving basslinenergetic drum patternsand motivational chord progressions perfect for workout sessions.'
  };
  const currentTool = aiTools.find(tool => tool.id === selectedTool) || aiTools[0];
  const handleProcess = async () => {
    if (!inputText.trim()) return;
    setIsProcessing(true);
    setProgress(0);
    // Simulate processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setResults(prev => ({
            ...prev,
            [selectedTool]: sampleOutputs[selectedTool as keyof typeof sampleOutputs] || 'Processing complete!'
          }));
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }200);
  };
  const handleReset = () => {
    setInputText(', ');
    setResults(prev => {
      const newResults = { ...prev };
      delete newResults[selectedTool];
      return newResults;
    });
    setProgress(0);
    setIsProcessing(false);
  };
  const handleDownload = () => {
    const result = results[selectedTool];
    if (result) {
      const blob = new Blob([result]{ type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${currentTool.name}-output.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Interactive AI Tools
            <Sparkles className="w-12 h-12 text-yellow-400 ml-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the Power of AI
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Try our cutting-edge AI tools in real-time. Generate contentcreate visualswrite codeand much more with just a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tools Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">AI Tools</h3>
              <div className="space-y-3">
                {aiTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      setSelectedTool(tool.id);
                      setInputText(sampleInputs[tool.id as keyof typeof sampleInputs] || ', ');
                    }}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                      selectedTool === tool.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-lg mr-3 ${
                        selectedTool === tool.id ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        {tool.icon}
                      <div>
                        <div className="font-semibold">{tool.name}</div>
                        <div className="text-sm opacity-75">{tool.category}</div>
                    <div className="text-sm opacity-75 line-clamp-2">
                      {tool.description}
                    </div>
                  </button>
                ))}
          {/* Main Demo Area */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Tool Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 mr-4">
                    {currentTool.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentTool.name}</h3>
                    <p className="text-gray-300">{currentTool.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {currentTool.processingTime}s
                  <div className="text-sm text-gray-400">
                    <Star className="w-4 h-4 inline mr-1" />
                    {currentTool.accuracy}%
              {/* Input Section */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-white mb-4">
                  Input
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={sampleInputs[selectedTool as keyof typeof sampleInputs]}
                  className="w-full h-32 p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={handleProcess}
                  disabled={!inputText.trim() || isProcessing}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isProcessing ? (
                    <>
                      <Pause className="w-5 h-5 mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Process
                    </>
                  )}
                <button
                  onClick={handleReset}
                  className="flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                {results[selectedTool] && (
                  <button
                    onClick={handleDownload}
                    className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download
                )}
              {/* Progress Bar */}
              {isProcessing && (
                <div
                  className="mb-8"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Processing...</span>
                    <span className="text-gray-400">{Math.round(progress)}%</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              )}
              {/* Output Section */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Output
                <div className="bg-slate-800 rounded-lg p-6 min-h-[200px] border border-white/10">
                  {results[selectedTool] ? (
                    <div
                      className="text-gray-300 whitespace-pre-wrap"
                    >
                      {results[selectedTool]}
                    </div>
                  ) : (
                    <div className="text-gray-500 italic">
                      {isProcessing ? 'Processing your request...' : 'Click "Process" to see the AI output'}
                  )}
              {/* Features */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {currentTool.features.map((featureindex) => (
                    <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                  ))}
        {/* Call to Action */}
        <div 
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Integrate AI into Your Workflow?
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI tools to boost productivity and creativity.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 px-8 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <Settings className="w-5 h-5 mr-2" />
              View API Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );



export default InteractiveAIToolsDemo2025;
