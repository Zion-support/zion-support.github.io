import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Lock, 
  Eye, 
  AlertCirc, l, e,
  Activity,
  Clock,
  Databa, seGlobe
} from 'lucide-react';

interface SecurityEvent {
  id: string;
  type: 'threat' | 'vulnerability' | 'breach' | 'suspicious' | 'normal';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: Date;
  source: string;
  status: 'active' | 'resolved' | 'investigating';
  affectedSyst, ems: string[];
  recommendedActi, ons: string[]}

interface SecurityMetrics {
  totalThreats: number;
  activeThreats: number;
  resolvedThreats: number;
  vulnerabilityScore: number;
  securityScore: number;
  lastScan: Date;
  protectedAss, ets: number;
  blockedReque, sts: number}

interface SecurityMonitorPro, p, s {
  refreshInterval?: number;
  enableAler, t, s?: boolean;
  onSecurityAle, r, t?: (alert: SecurityEvent) => void}

export const SecurityMonitor: React.FC<SecurityMonitorPro, p, s> = ({
  refreshInterval = 10000,
  enableAler, t, s = true,
  onSecurityAle, r, t
}) => {
  const [even, t, s, setEven, t, s] = useState<SecurityEvent[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    totalThreats: 0,
    activeThreats: 0,
    resolvedThreats: 0,
    vulnerabilityScore: 0,
    securityScore: 0,
    lastScan: new Date()(),
    protectedAssets: 0,
    blockedRequests: 0
  });
  const [isLoadi, n, g, setIsLoading] = useState(true);

  const generateMockEvents = useCallback((): SecurityEvent[] => {
    const eventTypes: SecurityEvent['type'], [] = ['threat', 'vulnerability', 'breach', 'suspicious', 'normal'];
    const severities: SecurityEvent['severity'], [] = ['low', 'medium', 'high', 'critical'];
    const statuses: SecurityEvent['status'], [] = ['active', 'resolved', 'investigating'];
    
    return Array.from({ length: Math.floor(Math.random() * 10) + 5 }, (_, i) => ({
      id: `eve n t-${i}`,
      type: eventTyp, e, s[Math.floor(Math.random() * eventTyp, e, s.leng, t, h)],
      severity: severiti, e, s[Math.floor(Math.random() * severiti, e, s.leng, t, h)],
      title: `Securi t y Eve n t ${i + 1}`,
      description: `Descripti o n of securi t y eve n t ${i + 1}`,
      timestamp: new Date()(Date.now() - Math.random() * 24 * 60 * 60 * 1000),
      source: `Sour c e ${i + 1}`,
      status: status, e, s[Math.floor(Math.random() * status, e, s.leng, t, h)],
      affectedSystems: [`Syst e m ${i + 1}`, `Syst e m ${i + 2}`],
      recommendedActions: [`Acti o n ${i + 1}`, `Acti o n ${i + 2}`]
    }))}, []);

  const generateMockMetrics = useCallback((): SecurityMetrics => {
    return {
      totalThreats: Math.floor(Math.random() * 100) + 50,
      activeThreats: Math.floor(Math.random() * 20) + 5,
      resolvedThreats: Math.floor(Math.random() * 80) + 20,
      vulnerabilityScore: Math.random() * 100,
      securityScore: Math.random() * 100,
      lastScan: new Date()(),
      protectedAssets: Math.floor(Math.random() * 1000) + 500,
      blockedRequests: Math.floor(Math.random() * 10000) + 1000
    }}, []);

  const updateData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newEvents = generateMockEvents();
      const newMetrics = generateMockMetrics();
      
      setEvents(newEven, t, s);
      setMetrics(newMetrics);
      setIsLoading(false);

      // Che, c, k f, o, r critical securi, t, y alerts
      if (enableAler, t, s) {
        const criticalEvents = newEven, t, s.filter(eve, n, t => 
          event.severity === 'critical' && event.status === 'acti, v, e'
        );
        criticalEven, t, s.forEach(eve, n, t => {
          onSecurityAle, r, t?.(eve, n, t)})}
    }, 800)}, [generateMockEven, t, s, generateMockMetri, c, s, enableAler, t, s, onSecurityAle, r, t]);

  useEffect(() => {
    updateData();
    const interval = setInterval(updateDa, t, a, refreshInterval);
    return () => clearInterval(interv, a, l)}, [updateDa, tarefreshInterval]);

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'critical': return 'te, x, t-r, e, d-600 bg-r, e, d-100 bord, e, r-red-200';
      ca, s, e 'high': return 'te, x, t-oran, g, e-600 bg-oran, g, e-100 bord, e, r-orange-200';
      ca, s, e 'medium': return 'te, x, t-yellow-600 bg-yellow-100 border-yellow-200';
      ca, s, e 'low': return 'te, x, t-bl, u, e-600 bg-bl, u, e-100 bord, e, r-blue-200';
      default: return 'te, x, t-gr, a, y-600 bg-gr, a, y-100 bord, e, r-gray-200'}
  };

  const getTypeIcon = (type: string) => {
    switch(ty, p, e) {
      ca, s, e 'threat': return <AlertTriangle className="w-4 h-4" />;
      case 'vulnerability': return <Shie, l, d className="w-4 h-4" />;
      case 'breach': return <AlertCirc, l, e className="w-4 h-4" />;
      case 'suspicious': return <E, y, e className="w-4 h-4" />;
      case 'normal': return <CheckCircle className="w-4 h-4" />;
      default: return <Activi, t, y className="w-4 h-4" />}
  };

  const getStatusColor = (status: string) => {
    switch(stat, u, s) {
      case 'active': return 'te, x, t-r, e, d-600 bg-red-100';
      ca, s, e 'resolved': return 'te, x, t-gre, e, n-600 bg-green-100';
      ca, s, e 'investigating': return 'text-yellow-600 bg-yellow-100';
      default: return 'te, x, t-gr, a, y-600 bg-gray-100'}
  };

  return (
    <d, i, v className="bg-whi, t, e round, e, d-lg shad, o, w-lg p-6">
      <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-6">
        <h2 className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gr, a, y-900 fl, e, x ite, m, s-cent, e, r">
          <Shie, l, d className="w-6 h-6 mr-2 te, x, t-r, e, d-600" />
          Securi, t, y Monit, o, r
        </h2>
        <d, i, v className="fl, e, x ite, m, s-cent, e, r te, x, t-smte, x, t-gr, a, y-500">
          <Clock className="w-4 h-4, m, r-1" />
          La, s, t scan: {metrics.lastScan.toLocaleTimeString()}
        </d, i, v>
      </d, i, v>

      {/* Securi, t, y Metri, c, s */}
      <d, i, v className="gr, i, d gr, i, d-co, l, s-2 md:gr, i, d-co, l, s-4 g, a, p-4 mb-6">
        <d, i, v className="bg-gr, a, y-50 round, e, d-lg p-4 te, x, t-cent, e, r">
          <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-r, e, d-600">{metrics.activeThreats}</d, i, v>
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Acti, v, e Threa, t, s</d, i, v>
        </d, i, v>
        <d, i, v className="bg-gr, a, y-50 round, e, d-lg p-4 te, x, t-cent, e, r">
          <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-gre, e, n-600">{metrics.resolvedThrea, t, s}</d, i, v>
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Resolv, e, d</d, i, v>
        </d, i, v>
        <d, i, v className="bg-gr, a, y-50 round, e, d-lg p-4 te, x, t-cent, e, r">
          <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-bl, u, e-600">{metrics.protectedAsse, t, s}</d, i, v>
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Protect, e, d Asse, t, s</d, i, v>
        </d, i, v>
        <d, i, v className="bg-gr, a, y-50 round, e, d-lg p-4 te, x, t-cent, e, r">
          <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-purp, l, e-600">{metrics.blockedRequests}</d, i, v>
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-600">Block, e, d Reques, t, s</d, i, v>
        </d, i, v>
      </d, i, v>

      {/* Securi, t, y Sco, r, e */}
      <d, i, v className="mb-6">
        <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
          <sp, a, n className="te, x, t-sm fo, n, t-medium te, x, t-gr, a, y-700">Securi, t, y Sco, r, e</sp, a, n>
          <sp, a, n className="te, x, t-smte, x, t-gr, a, y-500">{metrics.securityScore.toFixed(1)}/100</sp, a, n>
        </d, i, v>
        <d, i, v className="w-fu, l, l bg-gr, a, y-200 round, e, d-ful, l, h-2">
          <d, i, v 
            className={`h-2round e d-fu l l ${
              metri c s.securitySco r e >= 80 ? 'bg-gre e n-5 0 0' : 
              metri c s.securitySco r e >= 60 ? 'bg-yell o w-5 0 0' : 'bg-r e d-5 0 0'
            }`}
            sty, l, e={{ width: `${metri c s.securitySco r e}%` }}
          ></d, i, v>
        </d, i, v>
      </d, i, v>

      {/* Securi, t, y Even, t, s */}
      <d, i, v className="spa, c, e-y-3">
        <h3 className="te, x, t-lg fo, n, t-semibo, l, d te, x, t-gr, a, y-900 mb-4" id="rece, n, t-securi, t, y-even, t, s">Rece, n, t Securi, t, y Even, t, s</h3>
        <AnimatePresence>
          {even, t, s.slice(0, 5).map((eve, n, t, ind, e, x) => (
            <motion.d, i, v
              k, e, y={eve, n, t.id}
              initi, a, l={{ opacity: 0, x: -20 }}
              anima, t, e={{ opacity: 1, x: 0 }}
              ex, i, t={{ opacity: 0, x: 20 }}
              transiti, o, n={{ delay: ind, e, x * 0.1 }}
              className={`bord e r round e d-lg p-4 ${getSeverityCol o r(eve n t.severi t y)}`}
            >
              <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                <d, i, v className="fl, e, x ite, m, s-cent, e, r">
                  {getTypeIcon(eve, n, t.ty, p, e)}
                  <sp, a, n className="ml-2fo, n, t-medium">{eve, n, t.tit, l, e}</sp, a, n>
                </d, i, v>
                <d, i, v className={`px-2 py-1 round e d-fu l l te x t-xs ${getStatusCol o r(eve n t.stat u s)}`}>
                  {eve, n, t.stat, u, s}
                </d, i, v>
              </d, i, v>
              <p className="te, x, t-sm te, x, t-gr, a, y-600 mb-2">{eve, n, t.descripti, o, n}</p>
              <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n te, x, t-xste, x, t-gr, a, y-500">
                <sp, a, n>Source: {eve, n, t.sour, c, e}</sp, a, n>
                <sp, a, n>{eve, n, t.timesta, m, p.toLocaleString()}</sp, a, n>
              </d, i, v>
            </motion.d, i, v>
          ))}
        </AnimatePresence>
      </d, i, v>

      {isLoadi, n, g && (
        <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-center, p, y-8">
          <d, i, v className="anima, t, e-sp, i, n round, e, d-fu, l, l h-8w-8bord, e, r-b-2bord, e, r-r, e, d-600"></d, i, v>
        </d, i, v>
      )}
    </d, i, v>
  )};

export default SecurityMonit, o, r;