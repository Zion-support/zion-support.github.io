


;
import { ArrowRight, Search, Users, Zap, Settings  } from 'lucide-react';
import Link from 'next / link';
import { cn } from '@/lib / utils';interface InteractiveFeaturesProps  {class_name?: string,style?: React.CSSProperties;
import { ArrowRight, Search, Users, Zap, Settings  } from lucide-react';
import Link from 'next / link;
import { cn } from @/lib / utils';interface InteractiveFeaturesProps  {class_name?: string,style?: React.CSSProperties;
}
interface InteractiveFeaturesProps  {className?: string;
  style?: React.CSSProperties;
export function InteractiveFeatures() {const [openIndex, setOpenIndex] = React.useState<number | null>(null)import React from 'react',import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card',import { Button } from '@/components/ui/button',import Link from 'next/link',import { cn } from '@/lib/utils',interface InteractiveFeaturesProps  {className?: string,style?: React.CSSProperties;
  class_name?: string;
  style?: React.CSSProperties;
export /**;
 * InteractiveFeatures - Function description;
 */;
function InteractiveFeatures() {const [open_index, setOpenIndex] = React.useState < number | null>(null)const features = [;
    {title: 'AI Talent Matching',description:;
        'Connect with the perfect talent using intelligent matching.',details:;
        'Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.',icon: <Search className='h - 8 w - 8 text - blue - 700' />,link: '/match'},{title: 'Talent Directory',description: 'Browse a verified database of AI and tech specialists.',details:;
        'Every profile is vetted for quality and authenticity so you can hire with confidence.',icon: <Users className='h - 8 w - 8 text - purple - 700' />,link: '/talent'},{title: 'Services Marketplace',description:;
        'Discover professional tech and AI services for your business.',details:;
        'From on - demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.',icon: <Zap className='h - 8 w - 8 text - cyan - 700' />,link: '/services'},{title: 'Equipment Catalog',description: 'Find specialized hardware for development and research.',details:;
        'Access cutting - edge technology with flexible options to buy, rent or lease the gear you need.',icon: <Settings className='h - 8 w - 8 text - amber - 700' />,link: '/equipment'}];
  const handle_toggle = (index: number) =>: any {setOpenIndex (prev => (prev === index ? null : index))}class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
import {Card,CardContent,CardHeader,CardTitle,CardDescription} from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';interface InteractiveFeaturesProps {;
  className?: string,;


import { cn } from '@/lib/utils';interface InteractiveFeaturesProps  {className?: string,style?: React && React.CSSProperties;}interface InteractiveFeaturesProps  {className?: string;
import { cn } from '@/lib/utils;interface InteractiveFeaturesProps  {className?: string,style?: React && React.CSSProperties;}interface InteractiveFeaturesProps  {className?: string;
  style?: React && React.CSSProperties;export function InteractiveFeatures(): any ({className,style}: InteractiveFeaturesProps) {const [openIndex, setOpenIndex]  = React && React.useState<number | null>(null)const features = [;
    {title: 'AI Talent Matching',description:;
        'Connect with the perfect talent using intelligent matching.',details:;
        'Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.',icon: <Search className='h-8 w-8 text-blue-700' />,link: '/match'},{title: 'Talent Directory',description: 'Browse a verified database of AI and tech specialists.',details:;
        'Every profile is vetted for quality and authenticity so you can hire with confidence.',icon: <Users className='h-8 w-8 text-purple-700' />,link: '/talent'},{title: 'Services Marketplace',description:;
        'Discover professional tech and AI services for your business.',details:;
        'From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.',icon: <Zap className='h-8 w-8 text-cyan-700' />,link: '/services'},{title: 'Equipment Catalog',description: 'Find specialized hardware for development and research.',details:;
        'Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.',icon: <Settings className='h-8 w-8 text-amber-700' />,link: '/equipment'}];const handleToggle = (index: number) => {setOpenIndex(prev => (prev === index ? null : index))}return (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>;
          {features.map((feature, index) => (<Card;<section className={cn('py-16 bg-zion-blue-dark', className)} style={style}>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-8'>;
          <h2 className='text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2'>;
            Key Features;
          </h2>;
          <p className='text-zion-slate-light text-lg max-w-2xl mx-auto'>;
            Hover or click a card to learn more about what Zion offers;
          </p>;
        </div>;


                <div>;
                  <CardTitle className='text-lg text-white'>{feature.title}</CardTitle>;
                  <CardDescription className='text-zion-slate-light'>;


  )</Card>))}
        </div>;
      </div>;
    </section>)export default InteractiveFeatures;
}export default InteractiveFeatures;import { Card;
  CardContent;
  CardHeader;
  CardTitle;
  CardDescription;
 } from '@/components/ui/card';
  )export default InteractiveFeatures;
export default InteractiveFeatures;
