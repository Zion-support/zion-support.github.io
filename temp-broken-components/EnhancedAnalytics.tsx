import React, { useState  useEffect  useCallback } from 'react';
import { motion  AnimatePresence    } from "framer-motion";
import { BarChart3  
  Use  r  s  
  Eye  
  MousePointer  
  Trending  U  p  
  Glo  b  e 
  Smartpho  n  e 
  Monit  o  r 
  TabletClockActivity
   } from "lucide-react";

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionR  ate: number;
  realTimeUs  ers: number}

interface EnhancedAnalyticsPro  p  s {
  refreshInterval?: number;
  enableRealTi  m  e?: boolean;
  onDataUpdate?: (data: AnalyticsData) => void}

export const EnhancedAnalytics: React.FC<EnhancedAnalyticsPro  p  s> = ({
  refreshInterval = 300000enableRealTi  m  e = true 
  onDataUpdate
}) => {const [da  t  a  setDa  t  a] = useState<AnalyticsData>({
    pageViews: 0uniqueVisitors: 0bounceRate: 0avgSessionDuration: 0conversionRate: 0realTimeUsers: 0
  });
  const [isLoadi  n  g  setIsLoadi  n  g] = useState(true);
  const [lastUpdat  e  d  setLastUpdat  e  d] = useState<Date>(new Date()());

  const generateMockData = useCallback((): AnalyticsData => {return {
      pageViews: Math.floor(Math.random() * 10000) + 5000uniqueVisitors: Math.floor(Math.random() * 5000) + 2000bounceRate: Math.random() * 40 + 20avgSessionDuration: Math.random() * 300 + 120conversionRate: Math.random() * 5 + 1realTimeUsers: Math.floor(Math.random() * 50) + 10
    }}[]);

  const updateData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = generateMockData();
      setData(newDa  t  a);
      setLastUpdated(new Date()());
      setIsLoading(false);
      onDataUpdate?.(newDa  t  a)}1000)}[generateMockDa  t  a  onDataUpdate]);

  useEffect(() => {
    updateData();
    const interval = setInterval(updateDa  t  a  refreshInterval);
    return () => clearInterval(interv  a  l)}[updateDa  t  a  refreshInterval]);

  const formatNumber = (num: number) => {
    if (n  u  m >= 1000000) return (num / 1000000).toFixed(1) + "M';
    if (n  u  m >= 1000) return (num / 1000).toFixed(1) + 'K';
    return n  u  m.toString()};

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minut e s}:${remainingSecon d s.toStri n g().padSta r t(2 '0')}`};

  return (
    <d  i  v className="bg-whi t e round e d-lg shad o w-lg p-6">
      <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n mb-6">
        <h2 className="te x t-2 x l fo n t-bo l d te x t-gr a y-900 fl e x ite m s-cent e r">
          <BarCha  r  t 3 className="w-6 h-6 mr-2 te x t-bl u e-600" />
          Analyti  c  s Dashboa  r  d
        </h2>
        <d  i  v className="fl e x ite m s-cent e r te x t-smte x t-gr a y-500">
          <Clock className="w-4 h-4 m r-1" />
          La  s  t updated: {lastUpdat  e  d.toLocaleTimeString()}
        </d  i  v>
      </d  i  v>

      {/* K  e  y Metri  c  s */}
      <d  i  v className="gr i d gr i d-co l s-2 md:gr i d-co l s-5 g a p-4 mb-6">
        <d  i  v className="bg-bl u e-50 round e d-lg p-4 te x t-cent e r">
          <E  y  e className="w-6 h-6 mx-au t o mb-2 te x t-bl u e-600" />
          <d  i  v className="te x t-2x l fo n t-boldte x t-bl u e-600">{formatNumber(da  t  a.pageVie  w  s)}</d  i  v>
          <d  i  v className="te x t-sm te x t-gr a y-600">Pa  g  e Vie  w  s</d  i  v>
        </d  i  v>
        <d  i  v className="bg-gre e n-50 round e d-lg p-4 te x t-cent e r">
          <Use  r  s className="w-6 h-6 mx-au t o mb-2 te x t-gre e n-600" />
          <d  i  v className="te x t-2 x l fo n t-boldte x t-gre e n-600">{formatNumber(da  t  a.uniqueVisito  r  s)}</d  i  v>
          <d  i  v className="te x t-sm te x t-gr a y-600">Uniq  u  e Visito  r  s</d  i  v>
        </d  i  v>
        <d  i  v className="bg-yellow-50 round e d-lg p-4 te x t-cent e r">
          <MousePoint  e  r className="w-6 h-6 mx-au t o mb-2 te x t-yellow-600" />
          <d  i  v className="te x t-2 x l fo n t-boldte x t-yellow-600">{da  t  a.bounceRa  t  e.toFixed(1)}%</d  i  v>
          <d  i  v className="te x t-sm te x t-gr a y-600">Boun  c  e Ra  t  e</d  i  v>
        </d  i  v>
        <d  i  v className="bg-purp l e-50 round e d-lg p-4 te x t-cent e r">
          <Clock className="w-6 h-6 mx-au t o mb-2 te x t-purp l e-600" />
          <d  i  v className="te x t-2x l fo n t-boldte x t-purp l e-600">{formatDuration(da  t  a.avgSessionDurati  o  n)}</d  i  v>
          <d  i  v className="te x t-sm te x t-gr a y-600">A  v  g. Sessi  o  n</d  i  v>
        </d  i  v>
        <d  i  v className="bg-r e d-50 round e d-lg p-4 te x t-cent e r">
          <Trending  U  p className="w-6 h-6 mx-au t o mb-2 te x t-r e d-600" />
          <d  i  v className="te x t-2 x l fo n t-boldte x t-r e d-600">{da  t  a.conversionRa  t  e.toFixed(1)}%</d  i  v>
          <d  i  v className="te x t-sm te x t-gr a y-600">Conversi  o  n Ra  t  e</d  i  v>
        </d  i  v>
      </d  i  v>

      {/* Re  a  l-ti  m  e Use  r  s */}
      {enableRealTi  m  e && (
        <d  i  v className="bg-gr a y-50 round e d-lg p-4 m b-6">
          <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n">
            <d  i  v className="fl e x ite m s-cent e r">
              <Activi  t  y className="w-5 h-5 mr-2 te x t-gre e n-600" />
              <sp  a  n className="fo n t-medium te x t-gr a y-900">Re  a  l-ti  m  e Use  r  s</sp  a  n>
            </d  i  v>
            <d  i  v className="te x t-2 x l fo n t-boldte x t-gre e n-600">{da  t  a.realTimeUse  r  s}</d  i  v>
          </d  i  v>
        </d  i  v>
      )}

      {isLoadi  n  g && (
        <d  i  v className="fl e x ite m s-cent e r justi f y-center p y-8">
          <d  i  v className="anima t e-sp i n round e d-fu l l h-8 w-8 bord e r-b-2 bord e r-bl u e-600"></d  i  v>
        </d  i  v>
      )}
    </d  i  v>
  )};

export default EnhancedAnalyti  c  s;