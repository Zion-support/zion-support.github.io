

import React from 'react';
import { 
  LightBulbIcon,
  CpuChipIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon;
} from '@heroicons/react/24/outline';
import React from 'react';



const features = [
  {
    name: 'AI-Powered Research'
    description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.'
    icon: LightBulbIcon
  }
  {
    name: 'Quantum Computing'
    description: 'Next-generation quantum neural networks for solving complex computational problems.'
    icon: CpuChipIcon
  }
  {
    name: 'Global Solutions'
    description: 'Worldwide deployment of autonomous business operations and digital transformation.'
    icon: GlobeAltIcon
  }
  {
    name: 'Enterprise Security'
    description: 'Military-grade security protocols protecting your most valuable digital assets.'
    icon: ShieldCheckIcon
  }
  {
    name: 'Data Analytics'
    description: 'Advanced analytics and insights driving informed decision-making.'
    icon: ChartBarIcon
  }
  {
    name: 'Expert Team'
    description: 'World-class researchers and engineers pushing the boundaries of technology.'
    icon: UserGroupIcon
  }
];
const stats = [
  { name: 'Research Papers Published', value: '150+' }
  { name: 'AI Models Deployed', value: '500+' }
  { name: 'Global Clients', value: '1000+' }
  { name: 'Patents Filed', value: '25+' }
];
const solutions = [
  {
    name: 'AI Research Assistant'
    description: 'Autonomous research platform that accelerates scientific discovery.'
    href: '/solutions/ai-autonomous-research'
  }
  {
    name: 'Quantum Neural Networks'
    description: 'Next-generation computing for complex problem solving.'
    href: '/solutions/quantum-neural-networks'
  }
  {
    name: 'Autonomous Business Operations'
    description: 'AI-powered automation for enterprise efficiency.'
    href: '/solutions/autonomous-business'
  }
  {
    name: 'IT Asset Management'
    description: 'Intelligent management of digital infrastructure.'
    href: '/solutions/it-asset-management'
  }
];
export default function HomePage() {
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon;
} from '@heroicons / react / 24 / outline';
;
const features = [;
import {
  return (
    <div className="bg - black">;
      {/* Hero section */}
      <div className="relative isolate px - 6 pt - 14 lg:px - 8">;
        <div className="mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56">;
          <div className="text - center">;
            <h1 className="text - 4xl font - bold tracking - tight text - white sm:text - 6xl">;
              Leading the Future of{' '}
      {/* Solutions showcase */}
      <div className="mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8">;
        <div className="mx - auto max - w-2xl lg:text - center">;
          <h2 className="text - base font - semibold leading - 7 text - blue - 400">Our Solutions</h2>;
          <p className="mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl">;
            Flagship AI and Technology Platforms;
          </p>;
          <p className="mt - 6 text - lg leading - 8 text - gray - 300">;
            Discover how our innovative solutions are transforming industries and driving unprecedented growth.;
          </p>;
        </div>;
        <div className="mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none">;
          <div className="grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 2">;
            {solutions.map ((solution) => (
              <article;
                key={solution.name}
                className="flex flex - col items - start group bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 hover:scale - 105";
              >;
                <div className="flex items - center gap - x-4 text - xs">;
                  <time date_time="2024" className="text - gray - 400">;
                    2024;
                  </time>;
                  <span className="relative z - 10 rounded - full bg - gray - 800 px - 3 py - 1.5 font - medium text - gray - 300 hover:bg - gray - 700 transition - colors duration - 200">;
                    AI Platform;
                  </span>;
                </div>;
                <div className="group relative">;
                  <h3 className="mt - 3 text - lg font - semibold leading - 6 text - white group - hover:text - blue - 400 transition - colors duration - 200">;
                    <a href={solution.href}>;
                      <span className="absolute inset - 0" />;
                      {solution.name}
