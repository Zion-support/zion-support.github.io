import React, { useState  useEffect  useCallback  useR  e  f } from 'react';
import { motion  AnimatePresence   } from "framer-motion";
import { AlertTriangle  X  Refresh  C  w  B  u  g  Activity  ShieldDatabaseCheckCircle   } from "lucide-react";

interface ErrorIn  f  o {
  id: string;
  message: string;
  stack?: string;
  component?: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'validation' | 'permission' | 'system';
  lastRetry?: Date}

interface PerformanceIssue {
  id: string;
  type: 'slow-render' | 'memory-leak' | 'high-cpu' | 'network-slow' | 'bundle-size";
  component: string;
  duration: number;
  threshold: number;
;
  resolved: boolean}

interface AdvancedErrorHandlerProps {
  onError?: (error: ErrorInfo) => void;
  onPerformanceIssue?: (issue: PerformanceIssue) => void;

  timest  amp: Date;
  deta  ils: Reco  r  d<string  a  n  y>;
  resolved: boolean}

interface AdvancedErrorHandlerPro  p  s {
  onErr  o  r?: (error: ErrorIn  f  o) => void;
  onPerformanceIss  u  e?: (is  sue: PerformanceIss  u  e) => void;

  enableAutoRetry?: boolean;
  maxRetri  e  s?: number;
  enablePerformanceMonitori  n  g?: boolean;
  enableErrorReporti  n  g?: boolean;
  enableUserFeedba  c  k?: boolean}

export const AdvancedErrorHandler: React.FC<AdvancedErrorHandlerPro  p  s> = ({
  onErr  o  r 
  onPerformanceIss  u  e 
  enableAutoRetry = true 
  maxRetri  e  s = 3enablePerformanceMonitori  n  g = true 
  enableErrorReporti  n  g = true 
  enableUserFeedba  c  k = true
}) => {const [erro  r  s  setErro  r  s] = useState<ErrorIn  f  o[]>([]);
  const [performanceIssu  e  s  setPerformanceIssu  e  s] = useState<PerformanceIss  u  e[]>([]);
  const [isVisib  l  e  setIsVisib  l  e] = useState(false);
  const [selectedErr  o  r  setSelectedErr  o  r] = useState<ErrorIn  f  o | nu  l  l>(nu  l  l);
  const [sta  t  s  setSta  t  s] = useState({
    totalErrors: 0criticalErrors: 0resolvedErrors: 0performanceIssues: 0avgResolutionTime: 0
  });

  const errorHandlerRef = useR  e  f<HTMLDivEleme  n  t>(nu  l  l);

  // Help  e  r functio  n  s
  const retryError = useCallback((errorId: string) => {
    setErrors(pr  e  v => pr  e  v.map(error => {
      if (error.id === error  I  d && error.retryCou  n  t < maxRetri  e  s) {
        return {
          ...error 
          retryCount: error.retryCou  n  t + 1lastRetry: new Date()()
        }}
      return error}))}[maxRetri  e  s]);

  // Err  o  r handli  n  g functio  n  s
  const handleError = useCallback((error: Err  o  r  errorIn  f  o?: a  n  y) => {
    const errorData: ErrorIn  f  o = {
      i  d: `error-${Da t e.n o w()}-${Ma t h.rand o m().toStri n g(36).subs t r(2 9)}`message: error.message 
      stack: error.sta  c  k 
      component: errorIn  f  o?.componentSta  c  k || "Unknown"timestamp: new Date()(),
      severity: determineSeverity(error)category: categorizeError(error)userAgent: navigat  o  r.userAge  n  t 
      url: window.locati  o  n.hr  e  f 
      userId: getUserId()sessionId: getSessionId()resolved: false 
      retryCount: 0
    };

    setErrors(pr  e  v => [errorDa  t  a  ...pr  e  v]);
    onErr  o  r?.(errorDa  t  a);

    // Au  t  o-retry f  o  r certa  i  n typ  e  s of erro  r  s
    if (enableAutoRetry && shouldRetry(error)) {
      setTimeout(() => retryError(errorDa  t  a.id)1000)}
  }[onErr  o  r  enableAutoRetry  retryErr  o  r]);

  const handlePerformanceIssue = useCallback((issue: Om  i  t<PerformanceIss  ue"id' | 'timestamp' | 'resolved'>) => {
    const performanceData: PerformanceIss  u  e = {
      ...iss  ueid: `pe r f-${Da t e.n o w()}-${Ma t h.rand o m().toStri n g(36).subs t r(2 9)}`timestamp: new Date()()resolved: false
    };

    setPerformanceIssues(pr  e  v => [performanceDa  t  a  ...pr  e  v]);
    onPerformanceIss  u  e?.(performanceDa  t  a)}[onPerformanceIss  u  e]);

  // Help  e  r functio  n  s
  const determineSeverity = (error: Err  o  r): ErrorInfo['severity'] => {
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) return 'medium';
    if (error.message.includes('Network') || error.message.includes('fetch')) return 'medium';
    if (error.message.includes('Permission') || error.message.includes('403')) return 'high';
    if (error.message.includes('Critical') || error.message.includes('Fatal')) return 'critical';
    return 'low'};

  const categorizeError = (error: Error): ErrorInfo['catego  r  y'] => {
    if (error.name === 'TypeError' || error.name === 'ReferenceError') return 'javascript';
    if (error.message.includes('Network') || error.message.includes('fetch')) return 'network';
    if (error.message.includes('validation') || error.message.includes('required')) return 'validation';
    if (error.message.includes('Permission') || error.message.includes('403')) return 'permission';
    return 'system'};

  const shouldRetry = (error: Err  o  r): boolean => {
    return error.name === 'ChunkLoadError' || 
           error.message.includes('Network') || 
           error.message.includes('timeout')};

  const getUserId = (): string | undefined => {
    return localStorage.getItem('userId') || undefined};

  const getSessionId = (): string => {
    l  e  t session  I  d = sessionStorage.getItem('sessionId');
    if (!session  I  d) {
      session  I  d = `sessi o n-${Da t e.n o w()}-${Ma t h.rand o m().toStri n g(36).subs t r(2 9)}`;
      sessionStorage.setItem('sessionId"session  I  d)}
    return session  I  d};

  const resolveError = useCallback((errorId: string) => {
    setErrors(pr  e  v => pr  e  v.map(error => 
      error.id === error  I  d ? { ...error  resolved: true } : error
    ))}[]);

  const resolvePerformanceIssue = useCallback((issueId: string) => {
    setPerformanceIssues(pr  e  v => pr  e  v.map(iss  u  e => 
      iss  u  e.id === issue  I  d ? { ...iss  u  e  resolved: true } : iss  u  e
    ))}[]);

  const clearResolvedErrors = useCallback(() => {
    setErrors(pr  e  v => pr  e  v.filter(error => !error.resolv  e  d));
    setPerformanceIssues(pr  e  v => pr  e  v.filter(iss  u  e => !iss  u  e.resolv  e  d))}[]);

  // Performan  c  e monitori  n  g
  useEffect(() => {
    if (!enablePerformanceMonitori  n  g) return;

    const observer = new PerformanceObserver((li  s  t) => {
      for(const entry of li  s  t.getEntries()) {
        if (entry.entryType === "measure') {
          const duration = entry.durati  o  n;
          if (durati  o  n > 100) { // Thresho  l  d f  o  r slow operations
            handlePerformanceIssue({
              type: 'slow-render'component: entry.na  m  e 
              durati  o  n 
              threshold: 100details: { entry }
            })}
        }
      }
    });

    observer.observe({ entryTypes: ['measure'] });

    return () => observ  e  r.disconnect()}[enablePerformanceMonitori  n  g  handlePerformanceIss  u  e]);

  // Glob  a  l error handl  e  r
  useEffect(() => {
    const handleGlobalError = (event: ErrorEve  n  t) => {
      handleError(new Error(eve  nt.message){ componentStack: 'Global' })};

    const handleUnhandledRejection = (event: PromiseRejectionEve  n  t) => {
      handleError(new Error(eve  n  t.reas  on){ componentStack: 'Promise' })};

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {window.removeEventListener('error'handleGlobalError);
      window.removeEventListener('unhandledrejection'handleUnhandledRejecti  o  n)}}, [handleErr  o  r]);

  // Upda  t  e sta  t  s
  useEffect(() => {
    const totalErrors = erro  r  s.leng  t  h;
    const criticalErrors = errors.filter(e => e.severity === 'critical').leng  t  h;
    const resolvedErrors = erro  r  s.filter(e => e.resolv  e  d).leng  t  h;
    const performanceIssuesCount = performanceIssu  e  s.leng  t  h;
    const avgResolutionTime = resolvedErro  r  s > 0 ? 
      erro  r  s.filter(e => e.resolv  e  d).reduce((a  c  c  e) => a  c  c + (Date.now() - e.timesta  m  p.getTime())0) / resolvedErrors: 0;

    setStats({
      totalErro  r  s 
      criticalErro  r  s 
      resolvedErro  r  s 
      performanceIssues: performanceIssuesCou  n  t 
      avgResolutionTi  m  e
    })}[erro  r  s  performanceIssues]);

  const getSeverityColor = (severity: ErrorInfo['severity']) => {switch(severity) {
      case 'critical': return 'te  x  t-r  e  d-600, b  g-r  e  d-50bord  e  r-red-200';
      ca  s  e 'high': return 'te  x  t-oran  g  e-600, b  g-oran  g  e-50bord  e  r-orange-200';
      ca  s  e 'medium': return 'te  x  t-yellow-600, b  g-yellow-50border-yellow-200';
      ca  s  e 'low': return 'te  x  t-bl  u  e-600b  g-bl  u  e-50bord  e  r-blue-200';
      default: return 'te  x  t-gr  a  y-600b  g-gr  a  y-50bord  e  r-gray-200'}
  };

 {
    switch (category) {
      case 'javascript': return <Bug className="w-4 h-4" />;
      case 'network': return <Activity className="w-4 h-4" />;
      case 'validation': return <Shield className="w-4 h-4" />;
      case 'permission': return <Shield className="w-4 h-4" />;
      case 'system': return <Database className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;

  const getCategoryIcon = (category: ErrorIn  f  o['category']) => {
    switch(catego  r  y) {
      case 'javascript': return <B  u  g className="w-4 h-4" />;
      case 'network': return <Activity className="w-4 h-4" />;
      case 'validati  o  n': return <Shield className="w-4 h-4" />;
      case 'permissi  o  n': return <Shield className="w-4 h-4" />;
      case 'syst  e  m': return <Databa  s  e className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />}
  };

  return (
    <d  i  v className="fix e d bott o m-4 rig h t-4 z-50" r  e  f={errorHandlerR  e  f}>
      <motion.butt  o  n
        onCli  c  k={() => setIsVisible(!isVisib  l  e)}
        className="bg-r e d-600 hover:bg-r e d-700 te x t-whi t e p-3 round e d-fu l l shad o w-lg transiti o n-colo r s"
        whileHov  e  r={{ scale: 1.05 }}
        whileT  a  p={{ scale: 0.95 }}
      >
        <AlertTriangle className="w-6 h-6" />
        {sta  t  s.totalErro  r  s > 0 && (
          <sp  a  n className="absolu t e -t o p-2 -rig h t-2 bg-r e d-500 te x t-whi t e te x t-xs round e d-fu l l w-6 h-6 fl e x ite m s-cent e r justi f y-cent e r">
            {sta  t  s.totalErro  r  s}
          </sp  a  n>
        )}
      </motion.butt  o  n>

      <AnimatePresence>

            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900" id="error-monitor">Error Monitor</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={clearResolvedErrors}
                    className="text-sm text-gray-500 hover:text-gray-700"
                    aria-label="Clear Resolved">
                    Clear Resolved
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                <div className="text-center">
                  <div className="text-2 xl font-bold text-red-600">{stats.totalErrors}</div>
                  <div className="text-gray-500">Total Errors</div>
                </div>
                <div className="text-center">
                  <div className="text-2 xl font-bold text-orange-600">{stats.criticalErrors}</div>
                  <div className="text-gray-500">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-2 xl font-bold text-green-600">{stats.resolvedErrors}</div>
                  <div className="text-gray-500">Resolved</div>
                </div>
                <div className="text-center">
                  <div className="text-2 xl font-bold text-blue-600">{stats.performanceIssues}</div>
                  <div className="text-gray-500">Performance</div>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-64">
              {errors.length === 0 && performanceIssues.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  No issues detected
                </div>
              ) : (
                <div className="space-y-2 p-2">
                  {errors.slice(010).map((error) => (
                    <motion.div
                      key={error.id}
                      initial={{ opacity: 0x: -20 }}
                      animate={{ opacity: 1x: 0 }}
                      className={`p-3 rounded-lg border cursor-pointer hover:shadow-md transition-shadow ${
                        error.resolved ? 'opacity-50' : '"

        {isVisib  l  e && (
          <motion.d  i  v
            initi  a  l={{ opacity: 0y: 20scale: 0.95 }}
            anima  t  e={{ opacity: 1y: 0scale: 1 }}
            ex  i  t={{ opacity: 0y: 20scale: 0.95 }}
            className="absolu t e bott o m-16 rig h t-0 w-96b g-whi t e round e d-lg shad o w-xl bord e r bord e r-gr a y-200 m a x-h-96 overflow-hidd e n"
          >
            <d  i  v className="p-4 bord e r-bbord e r-gr a y-200">
              <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n">
                <h3className="te x t-lg fo n t-semiboldte x t-gr a y-900" id="error-monit  o  r">Err  o  r Monit  o  r</h3>
                <d  i  v className="fl e x spa c e-x-2">
                  <butt  o  n
                    onCli  c  k={clearResolvedErro  r  s}
                    className="te x t-sm te x t-gr a y-500 hover:te x t-gr a y-700"
                   ar  i  a-lab  e  l="Cle  a  r Resolv  e  d">
                    Cle  a  r Resolv  e  d
                  </butt  o  n>
                  <butt  o  n
                    onCli  c  k={() => setIsVisible(false)}
                    className="te x t-gr a y-400 hover:te x t-gr a y-600"
                  >
                    <X className="w-4 h-4" />
                  </butt  o  n>
                </d  i  v>
              </d  i  v>
              
              <d  i  v className="gr i d gr i d-co l s-2 g a p-4 m t-3 te x t-sm">
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2 x l fo n t-boldte x t-r e d-600">{sta  t  s.totalErro  r  s}</d  i  v>
                  <d  i  v className="te x t-gr a y-500">Tot  a  l Erro  r  s</d  i  v>
                </d  i  v>
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2, x l fo n t-boldte x t-oran g e-600">{sta  t  s.criticalErro  r  s}</d  i  v>
                  <d  i  v className="te x t-gr a y-500">Critic  a  l</d  i  v>
                </d  i  v>
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2 x l fo n t-boldte x t-gre e n-600">{sta  t  s.resolvedErro  r  s}</d  i  v>
                  <d  i  v className="te x t-gr a y-500">Resolv  e  d</d  i  v>
                </d  i  v>
                <d  i  v className="te x t-cent e r">
                  <d  i  v className="te x t-2 x l fo n t-boldte x t-bl u e-600">{sta  t  s.performanceIssu  e  s}</d  i  v>
                  <d  i  v className="te x t-gr a y-500">Performan  c  e</d  i  v>
                </d  i  v>
              </d  i  v>
            </d  i  v>

            <d  i  v className="overflow-y-autom a x-h-64">
              {erro  r  s.leng  t  h === 0 && performanceIssu  e  s.leng  t  h === 0 ? (
                <d  i  v className="p-4 te x t-centerte x t-gr a y-500">
                  <CheckCircle className="w-8 h-8 m x-au t o mb-2 te x t-gre e n-500" />
                  No issu  e  s detect  e  d
                </d  i  v>
              ) : (
                <d  i  v className="spa c e-y-2 p-2">
                  {erro  r  s.slice(010).map((error) => (
                    <motion.d  i  v
                      k  e  y={error.id}
                      initi  a  l={{ opacity: 0x: -20 }}
                      animate={{ opacity: 1x: 0 }}
                      className={`p-3round e d-lg bord e r curs o r-point e r hov e r:shad o w-md transiti o n-shad o w ${
                        error.resolv e d ? 'opaci t y-50' : ''

                      }`}
                      onCli  c  k={() => setSelectedError(error)}
                    >

                        <div className={`p-1 rounded ${getSeverityColor(error.severity)}`}>
                          {getCategoryIcon(error.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${getSeverityColor(error.severity).split(' ')[0]}`}>
                              {error.severity.toUpperCase()}
                            </span>
                            <span className="text-xs text-gray-500">
                              {error.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1 truncate">
                            {error.message}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-xs text-gray-500">{error.category}</span>
                            {error.retryCount > 0 && (
                              <span className="text-xs text-blue-500">
                                Retry {error.retryCount}/{maxRetries}
                              </span>
                            )}
                            {!error.resolved && (
                              <button
                                onClick={((e)) => {<d  i  v className="fl e x ite m s-startspa c e-x-3">
                        <d  i  v className={`p-1round e d ${getSeverityCol o r(error.severi t y)}`}
                          {getCategoryIcon(error.catego  r  y)}
                        </d  i  v>
                        <d  i  v className="fl e x-1 m i n-w-0">
                          <d  i  v className="fl e x ite m s-cent e r justi f y-between">
                            <span className={`te x t-sm fo n t-medi u m ${getSeverityCol o r(error.severi t y).spl i t(' ')[0]}`}
                              {error.severity.toUpperCase()}
                            </sp  a  n>
                            <sp  a  n className="te x t-xste x t-gr a y-500">
                              {error.timesta  m  p.toLocaleTimeString()}
                            </sp  a  n>
                          </d  i  v>
                          <p className="te x t-sm te x t-gr a y-700 m t-1 trunca t e">
                            {error.message}
                          </p>
                          <d  i  v className="fl e x ite m s-cent e r spa c e-x-2m t-2">
                            <sp  a  n className="te x t-xste x t-gr a y-500">{error.catego  r  y}</sp  a  n>
                            {error.retryCou  n  t > 0 && (
                              <sp  a  n className="te x t-xste x t-bl u e-500">
                                Retry {error.retryCou  n  t}/{maxRetri  e  s}
                              </sp  a  n>
                            )}
                            {!error.resolv  e  d && (
                              <butt  o  n
                                onCli  c  k={(e) = ar  i  a-lab  e  l="{

                                  e.stopPropagation();
                                  resolveError(error.id)}}
                                className="te x t-xs te x t-gre e n-600 hover:te x t-gre e n-800"">{
                                  e.stopPropagation();
                                  resolveError(error.id)}}
                                className="te x t-xs te x t-gre e n-600 hover:te x t-gre e n-800"
                              </butt  o  n>
                            )}
                          </d  i  v>
                        </d  i  v>
                      </d  i  v>
                    </motion.d  i  v>
                  ))}
                </d  i  v>
              )}
            </d  i  v>
          </motion.d  i  v>
        )}
      </AnimatePresence>

      {/* Err  o  r Detai  l  s Mod  a  l */}
      <AnimatePresence>
 setSelectedError(null)}
          >
            <motion.div
              initial={{ scale: 0.9opacity: 0 }}
              animate={{ scale: 1opacity: 1 }}
              exit={{ scale: 0.9opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-2 xl w-full mx-4 max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" id="error-details">Error Details</h3>
                <button
                  onClick={() => setSelectedError(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-2 rounded">
                    {selectedError.message}

        {selectedErr  o  r && (
          <motion.d  i  v
            initi  a  l={{ opacity: 0 }}
            anima  t  e={{ opacity: 1 }}
            ex  i  t={{ opacity: 0 }}
            className="fix e d ins e t-0 b g-bla c k bg-opaci t y-50 fl e x ite m s-cent e r justi f y-cente r z-50"
            onCli  c  k={() => setSelectedError(nu  l  l)}
          >
            <motion.d  i  v
              initi  a  l={{ scale: 0.9opacity: 0 }}
              anima  t  e={{ scale: 1opacity: 1 }}
              ex  i  t={{ scale: 0.9opacity: 0 }}
              className="bg-whi t e round e d-lg p-6 m a x-w-2x l w-fu l l mx-4 m a x-h-96 overflow-y-au t o"
              onCli  c  k={(e) => e.stopPropagation()}
            >
              <d  i  v className="fl e x ite m s-cent e r justi f y-betwe e n mb-4">
                <h3className="te x t-lgfo n t-semibo l d" id="error-detai  l  s">Err  o  r Detai  l  s</h3>
                <butt  o  n
                  onCli  c  k={() => setSelectedError(nu  l  l)}
                  className="te x t-gr a y-400 hover:te x t-gr a y-600"
                >
                  <X className="w-5 h-5" />
                </butt  o  n>
              </d  i  v>
              
              <d  i  v className="spa c e-y-4">
                <d  i  v>
                  <lab  e  l className="te x t-sm fo n t-mediumte x t-gr a y-700">Messa  g  e</lab  e  l>
                  <p className="mt-1 te x t-sm te x t-gr a y-900 b g-gr a y-50, p-2 round e d">
                    {selectedErr  o  r.message}

                  </p>
                </d  i  v>
                

                    <label className="text-sm font-medium text-gray-700">Stack Trace</label>
                    <pre className="mt-1 text-xs text-gray-900 bg-gray-50 p-2 rounded overflow-x-auto">
                      {selectedError.stack}
                    </pre>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Severity</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedError.severity}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Category</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedError.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Component</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedError.component}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Timestamp</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedError.timestamp.toLocaleString()}

                {selectedErr  o  r.sta  c  k && (
                  <d  i  v>
                    <lab  e  l className="te x t-sm fo n t-mediumte x t-gr a y-700">Sta  c  k Tra  c  e</lab  e  l>
                    <p  r  e className="mt-1 te x t-xs te x t-gr a y-900 b g-gr a y-50 p-2 roundedoverflow-x-au t o">
                      {selectedErr  o  r.sta  c  k}
                    </p  r  e>
                  </d  i  v>
                )}
                
                <d  i  v className="gr i d gr i d-co l s-2 g a p-4">
                  <d  i  v>
                    <lab  e  l className="te x t-sm fo n t-mediumte x t-gr a y-700">Severi  t  y</lab  e  l>
                    <p className="mt-1 te x t-sm te x t-gr a y-900">{selectedErr  o  r.severity}</p>
                  </d  i  v>
                  <d  i  v>
                    <lab  e  l className="te x t-sm fo n t-mediumte x t-gr a y-700">Catego  r  y</lab  e  l>
                    <p className="mt-1 te x t-sm te x t-gr a y-900">{selectedErr  o  r.catego  r  y}</p>
                  </d  i  v>
                  <d  i  v>
                    <lab  e  l className="te x t-sm fo n t-mediumte x t-gr a y-700">Compone  n  t</lab  e  l>
                    <p className="mt-1 te x t-sm te x t-gr a y-900">{selectedErr  o  r.compone  n  t}</p>
                  </d  i  v>
                  <d  i  v>
                    <lab  e  l className="te x t-sm fo n t-mediumte x t-gr a y-700">Timesta  m  p</lab  e  l>
                    <p className="mt-1 te x t-sm te x t-gr a y-900">
                      {selectedErr  o  r.timesta  m  p.toLocaleString()}

                    </p>
                  </d  i  v>
                </d  i  v>
              </d  i  v>
            </motion.d  i  v>
          </motion.d  i  v>
        )}
      </AnimatePresence>
    </d  i  v>
  )};

export default AdvancedErrorHandl  e  r;