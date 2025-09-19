"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Brain,
  Code,
  BarChart3,
  Image;
  FileText;
  Music;
  Video;
  Download;
  Share2;
  Star;
  CheckCircle;
  ArrowRight,
} from 'lucide-react';
const InteractiveAIToolsDemo2027 = () => {,
  const [activeToolsetActiveTool] = useState(0);
  const [isRunningsetIsRunning] = useState(false);
  const [progressetProgress] = useState(0);
  const [resultsetResults] = useState<any[]>([]);
  const [isVisiblesetIsVisible] = useState(false);
  useEffect(() => {,
    setIsVisible(true);
  }[]);
  const aiTools = [,
    {,
      id: 'code-generator';
      name: 'AI Code Generator';
      description: 'Generate production-ready code from natural language descriptions';
      icon: Code;
      color: 'from-blue-500 to-cyan-500';
      demo: {,
        input: 'Create a React component for a user profile card with avatarnameand bio';
        output: `import React from 'react';
import { Avatar } from './ui/avatar';
interface UserProfileCardProps {,
  user: {,
    name: string;
    bio: string;
    avatar: string,};
}
,
export const UserProfileCard: React.FC<UserProfileCardProps> = ({ user ,}) => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">InteractiveAIToolsDemo2027</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  );
},`;
        time: 2.3,}
    };
    {,
      id: 'data-analyzer';
      name: 'AI Data Analyzer';
      description: 'Automatically analyze datasets and generate insights';
      icon: BarChart3;
      color: 'from-green-500 to-emerald-500';
      demo: {,
        input: 'Analyze sales data for Q4 2024 and identify trends';
        output: `## Q4 2024 Sales Analysis,
### Key Insights:,
- **Total Revenue**: $2.4M (+23% vs Q3),
- **Top Product**: Premium AI Tools (34% of sales),
- **Growth Rate**: 23% month-over-month,
- **Customer Acquisition**: 1,247 new customers,
### Trends Identified: ,
1. **Peak Performance**: December showed 45% increase,
2. **Geographic Growth**: European market up 67%,
3. **Customer Segment**: Enterprise clients driving 78% of growth,
### Recommendations:,
- Focus on European expansion,
- Increase premium product marketing,
- Develop enterprise-specific features`;
        time: 3.1,}
    };
    {,
      id: 'image-generator';
      name: 'AI Image Generator';
      description: 'Create stunning visuals from text descriptions';
      icon: Image;
      color: 'from-purple-500 to-pink-500';
      demo: {,
        input: 'A futuristic cityscape at sunset with flying cars and neon lights';
        output: 'Generated high-resolution image (2048x2048) with photorealistic qualityfeaturing a cyberpunk cityscape with glowing neon signsflying vehiclesand dramatic sunset lighting.';
        time: 4.2,}
    };
    {,
      id: 'content-writer';
      name: 'AI Content Writer';
      description: 'Generate engaging content for any purpose';
      icon: FileText;
      color: 'from-orange-500 to-red-500';
      demo: {,
        input: 'Write a blog post about the future of AI in healthcare';
        output: `# The Future of AI in Healthcare: A Revolutionary Transformation,
## Introduction,
Artificial Intelligence is poised to revolutionize healthcare in ways 'weve never imagined. From diagnostic accuracy to personalized treatment plansAI is transforming every aspect of medical care.,
## Key Applications,
### 1. Diagnostic Imaging,
AI-powered systems can now detect diseases with superhuman accuracyidentifying conditions like cancerheart diseaseand neurological disorders earlier than ever before.,
### 2. Drug Discovery,
Machine learning algorithms are accelerating drug developmentreducing the time from discovery to market from years to months.,
### 3. Personalized Medicine,
AI analyzes patient data to create customized treatment plansensuring optimal outcomes for each individual.,
## The Road Ahead,
As AI continues to evolvewe can expect even more groundbreaking innovations that will save lives and improve quality of care for millions worldwide.`;
        time: 2.8,}
    };
    {,
      id: 'music-composer';
      name: 'AI Music Composer';
      description: 'Create original music compositions in any style';
      icon: Music;
      color: 'from-indigo-500 to-purple-500';
      demo: {,
        input: 'Compose an upbeat electronic track for a tech startup presentation';
        output: 'Generated 3-minute electronic track with:\n- 128 BPM tempo\n- Synthwave/cyberpunk style\n- Dynamic build-up and drop\n- Professional mixing and mastering\n- Available in WAVMP3and MIDI formats';
        time: 5.5,}
    };
    {,
      id: 'video-editor';
      name: 'AI Video Editor';
      description: 'Automatically edit and enhance video content';
      icon: Video;
      color: 'from-teal-500 to-blue-500';
      demo: {,
        input: 'Create a 30-second promotional video from raw footage';
        output: 'Generated promotional video featuring:\n- Automatic scene selection\n- Smooth transitions\n- Color grading\n- Background music sync\n- Text overlays and captions\n- Optimized for social media';
        time: 6.2,}
    }
  ];
  const runDemo = async () => {,
    setIsRunning(true);
    setProgress(0);
    setResults([]);
    const tool = aiTools[activeTool];
    const duration = tool.demo.time * 1000;
    const interval = 50;
    const increment = (interval / duration) * 100;
    const timer = setInterval(() => {,
      setProgress(prev => {,
        if (prev >= 100) {,
          clearInterval(timer);
          setIsRunning(false);
          setResults([{,
            tool: tool.name;
            input: tool.demo.input;
            output: tool.demo.output;
            time: tool.demo.time,}]);
          return 100;
        }
        return prev + increment;
      });
    }interval);
  };
  const resetDemo = () => {,
    setIsRunning(false);
    setProgress(0);
    setResults([]);
  };
  if (!isVisible) return null;
  return (,
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */,}
        <div,
          className="text-center mb-16",
        >,
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">,
            <Zap className="w-4 h-4" />,
            Interactive AI Tools Demo 2027,
          </div>,
          <h2 className="text-4xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">,
            Try AI Tools Live,
          </h2>,
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
            Experience the power of our AI tools with interactive demonstrations.,
            See how artificial intelligence can transform your workflow in real-time.,
          </p>,
        </div>,
        <div className="grid lg:grid-cols-2 gap-12">,
          {/* Tool Selection */,}
          <div,
            className="space-y-6",
          >,
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose an AI Tool</h3>,
            <div className="grid gap-4">,
              {aiTools.map((toolindex) => (,
                <button,
                  key={tool.id}
                  onClick={() => setActiveTool(index)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${,
                    activeTool === index,
                      ? `border-blue-500 bg-gradient-to-r ${tool.color} text-white shadow-lg`,
                      : 'border-gray-200 bg-white hover: border-gray-300 hover:shadow-md',}`}
                >,
                  <div className="flex items-center gap-3">,
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${,
                      activeTool === index ? 'bg-white/20' : `bg-gradient-to-r ${tool.color}`,
                    }`}>,
                      <tool.icon className={`w-6 h-6 ${activeTool === index ? 'text-white' : 'text-white'}`} />,
                    </div>,
                    <div>,
                      <h4 className="font-semibold text-lg">{tool.name}</h4>,
                      <p className={`text-sm ${activeTool === index ? 'text-white/80' : 'text-gray-600'}`}>,
                        {tool.description}
                      </p>,
                    </div>,
                  </div>,
                </button>,
              ))}
            </div>,
          </div>,
          {/* Demo Interface */}
          <div,
            className="bg-white rounded-2xl shadow-xl p-8",
          >,
            <div className="flex items-center justify-between mb-6">,
              <h3 className="text-2xl font-bold text-gray-900">,
                {aiTools[activeTool].name}
              </h3>,
              <div className="flex gap-2">,
                <button,
                  onClick={runDemo}
                  disabled={isRunning}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover: from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                >,
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />,}
                  {isRunning ? 'Running...' : 'Run Demo'}
                </button>,
                <button,
                  onClick={resetDemo}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover: bg-gray-300 transition-all duration-300 flex items-center gap-2",
                >,
                  <RotateCcw className="w-4 h-4" />,
                  Reset,
                </button>,
              </div>,
            </div>,
            {/* Input Section */,}
            <div className="mb-6">,
              <label className="block text-sm font-medium text-gray-700 mb-2">,
                Input Prompt,
              </label>,
              <div className="bg-gray-50 rounded-lg p-4 border">,
                <p className="text-gray-800 font-mono text-sm">,
                  {aiTools[activeTool].demo.input}
                </p>,
              </div>,
            </div>,
            {/* Progress Bar */}
            {isRunning && (,
              <div className="mb-6">,
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">,
                  <span>Processing...</span>,
                  <span>{Math.round(progress)}%</span>,
                </div>,
                <div className="w-full bg-gray-200 rounded-full h-2">,
                  <div,
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full",
                    style={{ width: `${progress,}%` }}
                  />,
                </div>,
              </div>,
            )}
            {/* Output Section */}
            <div>,
              <label className="block text-sm font-medium text-gray-700 mb-2">,
                AI Output,
              </label>,
              <div className="bg-gray-900 rounded-lg p-4 border min-h-[200px]">,
                <div>,
                  {results.length > 0 ? (,
                    <div,
                      className="space-y-4",
                    >,
                      <div className="flex items-center gap-2 text-green-400 text-sm">,
                        <CheckCircle className="w-4 h-4" />,
                        Generated in {results[0].time}s,
                      </div>,
                      <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">,
                        {results[0].output}
                      </pre>,
                      <div className="flex gap-2 pt-4">,
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover: bg-blue-700 transition-colors flex items-center gap-2">,
                          <Download className="w-4 h-4" />,
                          Download,
                        </button>,
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2">,
                          <Share2 className="w-4 h-4" />,
                          Share,
                        </button>,
                      </div>,
                    </div>,
                  ) : (,
                    <div className="text-gray-500 text-center py-8">,
                      <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />,
                      <p>Click "Run Demo" to see AI magic in action</p>,
                    </div>,
                  ),}
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Call to Action */}
        <div,
          className="text-center mt-16",
        >,
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">,
            <h3 className="text-3xl font-bold mb-4">,
              Ready to Transform Your Workflow?,
            </h3>,
            <p className="text-xl mb-8 max-w-2xl mx-auto">,
              Get access to all these AI tools and more. Start your free trial today.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">,
                <Star className="w-5 h-5" />,
                Start Free Trial,
              </button>,
              <button className="bg-white/20 backdrop-blur-sm text-white py-4 px-8 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">,
                <ArrowRight className="w-5 h-5" />,
                View All Tools,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>,
  );
export default InteractiveAIToolsDemo2027;
}