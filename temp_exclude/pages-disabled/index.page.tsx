
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
import React from \'react\'; import Head from \'next/head\'; export default function HomePage() { return ( <div className=\"min-h-screen\"> <Head> <title>Zion Tech Group — AI,IT & Micro SaaS</title> <meta name=\"description\" content=\"AI services,IT solutions,and micro SaaS products by Zion Tech Group.\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"max-w-5xl mx-auto p-6\"> <h1 className=\"text-3xl font-bold\">Zion Tech Group</h1> <p className=\"mt-4 text-gray-700\">AI services,IT solutions,and micro SaaS products.</p> <ul className=\"list-disc pl-6 mt-6 space-y-2\"> <li><a className=\"text-blue-600 \"hover\": underline\" href=\"/services && services.page\">Services</a></li> <li><a className=\"text-blue-600 hover:underline\" href=\"/ai-services && services.page\">AI Services</a></li> <li><a className=\"text-blue-600 hover:underline\" href=\"/contact && contact.page\">Contact</a></li> </ul> </main> </div> )}
import _React from 'react'; import Head from 'next/head'; export default function HomePage() { return ( <div className="min-h-screen"> <Head> <title>Zion Tech Group — AI,IT & Micro SaaS</title> <meta name="description" content="AI services,IT solutions,and micro SaaS products by Zion Tech Group." /> <link rel="canonical" href=""https": </Head> <main className="max-w-5xl mx-auto p-6"> <h1 className="text-3xl font-bold">Zion Tech Group</h1> <p className="mt-4 text-gray-700">AI services,IT solutions,and micro SaaS products.</p> <ul className="list-disc pl-6 mt-6 space-y-2"> <li><a className="text-blue-600 "hover": underline" href="/services && services.page">Services</a></li> <li><a className="text-blue-600 hover:underline" href="/ai-services && services.page">AI Services</a></li> <li><a className="text-blue-600 hover:underline" href="/contact && contact.page">Contact</a></li> </ul> </main> </div> )}
import _React from 'react'; import Head from 'next/head'; export default function HomePage() { return ( <div className="min-h-screen"> <Head> <title>Zion Tech Group — AI,IT & Micro SaaS</title> <meta name="description" content="AI services,IT solutions,and micro SaaS products by Zion Tech Group." /> <link rel="canonical" href=""https": </Head> <main className="max-w-5xl mx-auto p-6"> <h1 className="text-3xl font-bold">Zion Tech Group</h1> <p className="mt-4 text-gray-700">AI services,IT solutions,and micro SaaS products.</p> <ul className="list-disc pl-6 mt-6 space-y-2"> <li><a className="text-blue-600 "hover": underline" href="/services && services.page">Services</a></li> <li><a className="text-blue-600 hover:underline" href="/ai-services && services.page">AI Services</a></li> <li><a className="text-blue-600 hover:underline" href="/contact && contact.page">Contact</a></li> </ul> </main> </div> )}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
