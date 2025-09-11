class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import Head from \'next/head\'; import Link from \'next/link\'; export default function MobileSurveys() { return ( <> <Head> <title>Mobile-First Survey Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Create,distribute,and analyze mobile-optimized surveys with real-time analytics and integrations.\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-slate-950 text-white\"> <section className=\"py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600\"> <div className=\"max-w-5xl mx-auto text-center\"> <h1 className=\"text-4xl md:text-5xl font-extrabold\">Mobile-First Survey Platform</h1> <p className=\"mt-4 text-slate-100 text-lg md:text-xl\">Increase completion rates with beautiful,responsive surveys and real-time insights.</p> <div className=\"mt-6 flex flex-col \"sm\": flex-row gap-3 justify-center\"> <Link href=\"/request-quote\" className=\"px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold\">Request a Quote</Link> <Link href=\"/schedule-demo\" className=\"px-6 py-3 border border-white/20 rounded-lg font-semibold\">Schedule a Demo</Link> </div> </div> </section> <section className=\"py-14 px-4\"> <div className=\"max-w-6xl mx-auto grid md:grid-cols-3 gap-6\"> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Features</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Customizable templates and question types</li> <li>Skip logic and branching</li> <li>Real-time dashboards and exports</li> <li>Embeddable widgets and QR links</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Benefits</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Higher completion on mobile devices</li> <li>Actionable insights for product and CX teams</li> <li>Flexible distribution across channels</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Pricing</h3> <p className=\"text-slate-300\">Starts at <strong>$39–$79/month</strong> based on responses and features. See similar offerings like <a className=\"text-blue-400 hover:text-blue-300\" href=\"https: </div> </div> </section> </main> </> )}



import Head from \'next/head\'; import Link from \'next/link\'; export default function MobileSurveys() { return ( <> <Head> <title>Mobile-First Survey Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Create,distribute,and analyze mobile-optimized surveys with real-time analytics and integrations.\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-slate-950 text-white\"> <section className=\"py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600\"> <div className=\"max-w-5xl mx-auto text-center\"> <h1 className=\"text-4xl md:text-5xl font-extrabold\">Mobile-First Survey Platform</h1> <p className=\"mt-4 text-slate-100 text-lg md:text-xl\">Increase completion rates with beautiful,responsive surveys and real-time insights.</p> <div className=\"mt-6 flex flex-col \"sm\": flex-row gap-3 justify-center\"> <Link href=\"/request-quote\" className=\"px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold\">Request a Quote</Link> <Link href=\"/schedule-demo\" className=\"px-6 py-3 border border-white/20 rounded-lg font-semibold\">Schedule a Demo</Link> </div> </div> </section> <section className=\"py-14 px-4\"> <div className=\"max-w-6xl mx-auto grid md:grid-cols-3 gap-6\"> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Features</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Customizable templates and question types</li> <li>Skip logic and branching</li> <li>Real-time dashboards and exports</li> <li>Embeddable widgets and QR links</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Benefits</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Higher completion on mobile devices</li> <li>Actionable insights for product and CX teams</li> <li>Flexible distribution across channels</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Pricing</h3> <p className=\"text-slate-300\">Starts at <strong>$39–$79/month</strong> based on responses and features. See similar offerings like <a className=\"text-blue-400 hover:text-blue-300\" href=\"https: </div> </div> </section> </main> </> )}
import Head from \'next/head\'; import Link from \'next/link\'; export default function MobileSurveys() { return ( <> <Head> <title>Mobile-First Survey Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Create,distribute,and analyze mobile-optimized surveys with real-time analytics and integrations.\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-slate-950 text-white\"> <section className=\"py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600\"> <div className=\"max-w-5xl mx-auto text-center\"> <h1 className=\"text-4xl md:text-5xl font-extrabold\">Mobile-First Survey Platform</h1> <p className=\"mt-4 text-slate-100 text-lg md:text-xl\">Increase completion rates with beautiful,responsive surveys and real-time insights.</p> <div className=\"mt-6 flex flex-col \"sm\": flex-row gap-3 justify-center\"> <Link href=\"/request-quote\" className=\"px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold\">Request a Quote</Link> <Link href=\"/schedule-demo\" className=\"px-6 py-3 border border-white/20 rounded-lg font-semibold\">Schedule a Demo</Link> </div> </div> </section> <section className=\"py-14 px-4\"> <div className=\"max-w-6xl mx-auto grid md:grid-cols-3 gap-6\"> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Features</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Customizable templates and question types</li> <li>Skip logic and branching</li> <li>Real-time dashboards and exports</li> <li>Embeddable widgets and QR links</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Benefits</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Higher completion on mobile devices</li> <li>Actionable insights for product and CX teams</li> <li>Flexible distribution across channels</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Pricing</h3> <p className=\"text-slate-300\">Starts at <strong>$39–$79/month</strong> based on responses and features. See similar offerings like <a className=\"text-blue-400 hover:text-blue-300\" href=\"https: </div> </div> </section> </main> </> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import Head from \'next/head\'; import Link from \'next/link\'; export default function MobileSurveys() { return ( <> <Head> <title>Mobile-First Survey Platform | Zion Tech Group</title> <meta name=\"description\" content=\"Create,distribute,and analyze mobile-optimized surveys with real-time analytics and integrations.\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-slate-950 text-white\"> <section className=\"py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600\"> <div className=\"max-w-5xl mx-auto text-center\"> <h1 className=\"text-4xl md:text-5xl font-extrabold\">Mobile-First Survey Platform</h1> <p className=\"mt-4 text-slate-100 text-lg md:text-xl\">Increase completion rates with beautiful,responsive surveys and real-time insights.</p> <div className=\"mt-6 flex flex-col \"sm\": flex-row gap-3 justify-center\"> <Link href=\"/request-quote\" className=\"px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold\">Request a Quote</Link> <Link href=\"/schedule-demo\" className=\"px-6 py-3 border border-white/20 rounded-lg font-semibold\">Schedule a Demo</Link> </div> </div> </section> <section className=\"py-14 px-4\"> <div className=\"max-w-6xl mx-auto grid md:grid-cols-3 gap-6\"> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Features</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Customizable templates and question types</li> <li>Skip logic and branching</li> <li>Real-time dashboards and exports</li> <li>Embeddable widgets and QR links</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Benefits</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Higher completion on mobile devices</li> <li>Actionable insights for product and CX teams</li> <li>Flexible distribution across channels</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Pricing</h3> <p className=\"text-slate-300\">Starts at <strong>$39–$79/month</strong> based on responses and features. See similar offerings like <a className=\"text-blue-400 hover:text-blue-300\" href=\"https: </div> </div> </section> </main> </> )}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react';
<<<<<<< HEAD
interface MobilesurveysProps {
  // Add props here as needed
}

export default function Mobilesurveys({ }: MobilesurveysProps) {
=======

interface MobilesurveysProps {;
  // Add props here as needed;
}
export default function Mobilesurveys(): any ({ }: MobilesurveysProps) {;
  return (
    <div>
      <h1>Mobilesurveys</h1>
      <p>This component is currently under development.</p>
    </div>
  );



}
}
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


origin/cursor/integrate-build-improve-and-re-verify-c7b5
