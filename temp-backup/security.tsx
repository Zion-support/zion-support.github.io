<<<<<<< HEAD


import React from 'react';
interface SecurityProps {
  // Add props here as needed

export default function Security({ }: SecurityProps) {
=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Link from \'next/link\'; import Head from \'next/head\'; export default function Security() { return ( <> <Head> <title>Security - Zion Tech Group</title> <meta name=\"description\" content=\"Learn about our security measures,certifications,and commitment to protecting your data and systems.\" /> <meta name=\"keywords\" content=\"security,data protection,cybersecurity,compliance,certifications\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white\"> <div className=\"max-w-6xl mx-auto px-4 py-16\"> <div className=\"text-center mb-12\"> <h1 className=\"text-4xl md:text-5xl font-bold mb-6\">Security</h1> <p className=\"text-xl text-slate-300 max-w-3xl mx-auto\"> Your security is our top priority. Learn about our security measures and certifications. </p> </div> <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\"> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-blue-400\">Data Protection</h3> <p className=\"text-slate-300 mb-4\">Comprehensive data protection measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Encryption at rest and in transit</li> <li>• Access controls</li> <li>• Data backup and recovery</li> <li>• Privacy compliance</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-green-400\">Cybersecurity</h3> <p className=\"text-slate-300 mb-4\">Advanced cybersecurity measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Threat detection</li> <li>• Vulnerability management</li> <li>• Security monitoring</li> <li>• Incident response</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-purple-400\">Compliance</h3> <p className=\"text-slate-300 mb-4\">Industry certifications and compliance</p> <ul className=\"text-slate-400 space-y-2\"> <li>• SOC 2 Type II</li> <li>• ISO 27001</li> <li>• GDPR compliance</li> <li>• Regular audits</li> </ul> </div> </div> <div className=\"text-center\"> <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4\"> Security Inquiry </Link> <Link href=\"/services/cybersecurity\" className=\"px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors\"> Security Services </Link> </div> </div> </main> </> )}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react';
interface SecurityProps {;
  // Add props here as needed;
<<<<<<< HEAD
=======

import Link from \'next/link\'; import Head from \'next/head\'; export default function Security() { return ( <> <Head> <title>Security - Zion Tech Group</title> <meta name=\"description\" content=\"Learn about our security measures,certifications,and commitment to protecting your data and systems.\" /> <meta name=\"keywords\" content=\"security,data protection,cybersecurity,compliance,certifications\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white\"> <div className=\"max-w-6xl mx-auto px-4 py-16\"> <div className=\"text-center mb-12\"> <h1 className=\"text-4xl md:text-5xl font-bold mb-6\">Security</h1> <p className=\"text-xl text-slate-300 max-w-3xl mx-auto\"> Your security is our top priority. Learn about our security measures and certifications. </p> </div> <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\"> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-blue-400\">Data Protection</h3> <p className=\"text-slate-300 mb-4\">Comprehensive data protection measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Encryption at rest and in transit</li> <li>• Access controls</li> <li>• Data backup and recovery</li> <li>• Privacy compliance</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-green-400\">Cybersecurity</h3> <p className=\"text-slate-300 mb-4\">Advanced cybersecurity measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Threat detection</li> <li>• Vulnerability management</li> <li>• Security monitoring</li> <li>• Incident response</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-purple-400\">Compliance</h3> <p className=\"text-slate-300 mb-4\">Industry certifications and compliance</p> <ul className=\"text-slate-400 space-y-2\"> <li>• SOC 2 Type II</li> <li>• ISO 27001</li> <li>• GDPR compliance</li> <li>• Regular audits</li> </ul> </div> </div> <div className=\"text-center\"> <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4\"> Security Inquiry </Link> <Link href=\"/services/cybersecurity\" className=\"px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors\"> Security Services </Link> </div> </div> </main> </> )}



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import Link from \'next/link\'; import Head from \'next/head\'; export default function Security() { return ( <> <Head> <title>Security - Zion Tech Group</title> <meta name=\"description\" content=\"Learn about our security measures,certifications,and commitment to protecting your data and systems.\" /> <meta name=\"keywords\" content=\"security,data protection,cybersecurity,compliance,certifications\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white\"> <div className=\"max-w-6xl mx-auto px-4 py-16\"> <div className=\"text-center mb-12\"> <h1 className=\"text-4xl md:text-5xl font-bold mb-6\">Security</h1> <p className=\"text-xl text-slate-300 max-w-3xl mx-auto\"> Your security is our top priority. Learn about our security measures and certifications. </p> </div> <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\"> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-blue-400\">Data Protection</h3> <p className=\"text-slate-300 mb-4\">Comprehensive data protection measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Encryption at rest and in transit</li> <li>• Access controls</li> <li>• Data backup and recovery</li> <li>• Privacy compliance</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-green-400\">Cybersecurity</h3> <p className=\"text-slate-300 mb-4\">Advanced cybersecurity measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Threat detection</li> <li>• Vulnerability management</li> <li>• Security monitoring</li> <li>• Incident response</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-purple-400\">Compliance</h3> <p className=\"text-slate-300 mb-4\">Industry certifications and compliance</p> <ul className=\"text-slate-400 space-y-2\"> <li>• SOC 2 Type II</li> <li>• ISO 27001</li> <li>• GDPR compliance</li> <li>• Regular audits</li> </ul> </div> </div> <div className=\"text-center\"> <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4\"> Security Inquiry </Link> <Link href=\"/services/cybersecurity\" className=\"px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors\"> Security Services </Link> </div> </div> </main> </> )}
import Link from \'next/link\'; import Head from \'next/head\'; export default function Security() { return ( <> <Head> <title>Security - Zion Tech Group</title> <meta name=\"description\" content=\"Learn about our security measures,certifications,and commitment to protecting your data and systems.\" /> <meta name=\"keywords\" content=\"security,data protection,cybersecurity,compliance,certifications\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white\"> <div className=\"max-w-6xl mx-auto px-4 py-16\"> <div className=\"text-center mb-12\"> <h1 className=\"text-4xl md:text-5xl font-bold mb-6\">Security</h1> <p className=\"text-xl text-slate-300 max-w-3xl mx-auto\"> Your security is our top priority. Learn about our security measures and certifications. </p> </div> <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\"> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-blue-400\">Data Protection</h3> <p className=\"text-slate-300 mb-4\">Comprehensive data protection measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Encryption at rest and in transit</li> <li>• Access controls</li> <li>• Data backup and recovery</li> <li>• Privacy compliance</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-green-400\">Cybersecurity</h3> <p className=\"text-slate-300 mb-4\">Advanced cybersecurity measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Threat detection</li> <li>• Vulnerability management</li> <li>• Security monitoring</li> <li>• Incident response</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-purple-400\">Compliance</h3> <p className=\"text-slate-300 mb-4\">Industry certifications and compliance</p> <ul className=\"text-slate-400 space-y-2\"> <li>• SOC 2 Type II</li> <li>• ISO 27001</li> <li>• GDPR compliance</li> <li>• Regular audits</li> </ul> </div> </div> <div className=\"text-center\"> <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4\"> Security Inquiry </Link> <Link href=\"/services/cybersecurity\" className=\"px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors\"> Security Services </Link> </div> </div> </main> </> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import Link from \'next/link\'; import Head from \'next/head\'; export default function Security() { return ( <> <Head> <title>Security - Zion Tech Group</title> <meta name=\"description\" content=\"Learn about our security measures,certifications,and commitment to protecting your data and systems.\" /> <meta name=\"keywords\" content=\"security,data protection,cybersecurity,compliance,certifications\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white\"> <div className=\"max-w-6xl mx-auto px-4 py-16\"> <div className=\"text-center mb-12\"> <h1 className=\"text-4xl md:text-5xl font-bold mb-6\">Security</h1> <p className=\"text-xl text-slate-300 max-w-3xl mx-auto\"> Your security is our top priority. Learn about our security measures and certifications. </p> </div> <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\"> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-blue-400\">Data Protection</h3> <p className=\"text-slate-300 mb-4\">Comprehensive data protection measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Encryption at rest and in transit</li> <li>• Access controls</li> <li>• Data backup and recovery</li> <li>• Privacy compliance</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-green-400\">Cybersecurity</h3> <p className=\"text-slate-300 mb-4\">Advanced cybersecurity measures</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Threat detection</li> <li>• Vulnerability management</li> <li>• Security monitoring</li> <li>• Incident response</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-purple-400\">Compliance</h3> <p className=\"text-slate-300 mb-4\">Industry certifications and compliance</p> <ul className=\"text-slate-400 space-y-2\"> <li>• SOC 2 Type II</li> <li>• ISO 27001</li> <li>• GDPR compliance</li> <li>• Regular audits</li> </ul> </div> </div> <div className=\"text-center\"> <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4\"> Security Inquiry </Link> <Link href=\"/services/cybersecurity\" className=\"px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors\"> Security Services </Link> </div> </div> </main> </> )}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react';
interface SecurityProps {
  // Add props here as needed
<<<<<<< HEAD
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div>
      <h1>Security</h1>
      <p>This component is currently under development.</p>
    </div>
  );
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
export default function Security({ }: SecurityProps) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export default function Security(): any ({ }: SecurityProps) {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div>;
      <h1>Security</h1>;
      <p>This component is currently under development.</p>;
    </div>;
  );


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

}
}
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
