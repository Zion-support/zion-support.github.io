

  const quickLinks = [
const quickLinks = [
  const quickLinks = [

  const quickLinks = [;
    {title: t('home.tool_ai_matcher'),description: t('home.tool_ai_matcher_desc'),icon: <Search className='h-6 w-6 text-zion-cyan' />,link: '/marketplace';
    },{title: t('home.tool_talent'),description: t('home.tool_talent_desc'),icon: <Users className='h-6 w-6 text-zion-purple' />,link: '/talent';
    },{title: t('home.tool_services'),description: t('home.tool_services_desc'),icon: <Briefcase className='h-6 w-6 text-zion-cyan' />,link: '/services';
    },{title: t('home.tool_equipment'),description: t('home.tool_equipment_desc'),icon: <Settings className='h-6 w-6 text-zion-purple' />,link: '/equipment';
    },{title: t('nav.community'),description: t('home.tool_chat_desc'),icon: <MessageSquare className='h-6 w-6 text-zion-cyan' />,link: '/community';
    },{title: t('home.tool_mobile_appMobile App'),description: t('home.tool_mobile_app_descZion on the go'),icon: <Smartphone className='h-6 w-6 text-zion-purple' />,link: '/mobile-launch';
    }
  ],return (<section className={cn('py-12 bg-zion-blue-dark', className)} style={style}>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-8'>;
          <h2 className='text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2'>;
            {t('home.quick_access_titleQuick Access')}
          </h2>;
          <p className='text-zion-slate-light text-lg'>;
            {t('home.quick_access_subtitleJump directly to our most popular features')}
    <section className={cn('py-12 bg-zion-blue-dark', className)} style={style}>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-8'>;
          <h2 className='text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2'>;
            {t('home.quick_access_title', 'Quick Access')}
          </h2>;
          <p className='text-zion-slate-light text-lg'>;


          {quick_links.map ((link, index) => (<Link;key={index}
              href={link.link}</p>;
              <div className='flex items - center text - zion - cyan text - xs mt - auto'>;
                <span>{t ('general.explore')}</span>;
                <ArrowRight className='ml - 1 h - 3 w - 3 transition - transform group - hover:translate - x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion   } from 'framer-motion';
export default /**;
 * Page - Function description;
 */;
function Page() {';
    { name: 'Consulting', count: 6, color: 'from - yellow - 500 to - orange - 500' }, ';
    { name: 'Innovation', count: 10, color: 'from - green - 500 to - teal - 500' }, ';
    { name: 'Business', count: 14, color: 'from - indigo - 500 to - purple - 500' }      scale: 1,export default function Page() {';
    { name: 'Consulting', count: 6, color: 'from-yellow-500 to-orange-500' },';
    { name: 'Innovation', count: 10, color: 'from-green-500 to-teal-500' },';
    { name: 'Business', count: 14, color: 'from-indigo-500 to-purple-500' }scale: 1,transition: {duration: 0.5, ';
        ease: 'ease_out'}}
  const hover_variants = {hover: {coordinate_y: -8,      scale: 1.02,transition: {duration: 0.3, '  ease: 'ease_out';
              className='group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20'
            >'
              <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110'>
            </motion && motion.div>;export default QuickAccess;className='group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20';
            >;
              <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110'>;


              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110>
            </motion && motion.div>;export default QuickAccess;className=group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20";
            >;
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110>;



import React from 'react',
import Link from 'next/link',
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone } from 'lucide-react'


    </section>)export default QuickAccess }export default QuickAccess;import React from 'react',import Link from 'next/link',import { useTranslation  } from 'react-i18next';
    </section>)export default QuickAccess }export default QuickAccess;import React from "react,import Link from next/link",import { useTranslation  } from react-i18next;
import { cn  } from '@/lib/utils';
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone  } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight;
  Search;
  Users;
  Briefcase;
  Settings;
  MessageSquare;
  Smartphone;
 } from 'lucide-react';
interface QuickAccessProps  {className?: string;
  style?: React.CSSProperties;
export function QuickAccess() {)export default QuickAccess;
export default QuickAccess;
