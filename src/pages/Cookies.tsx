      <Footer />
    </div>
  );
}
import {SEO} from '@/components/SEO';
import {GradientHeading} from '@/components/GradientHeading';

export default function Cookies() {}
  return (
    <>
      <SEO title="Cookie Policy - Zion Tech Group" description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience." keywords="cookie policy, cookies, tracking, Zion Tech Group, privacy" canonical="https://ziontechgroup.com/cookies"/>      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Cookie Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-4">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-zion-slate-light">
                Cookies can be either "session cookies" (which are deleted when you close your browser) 
                or "persistent cookies" (which remain on your device for a set period of time).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Analytics Cookies:</strong> Help us analyze website traffic and usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.1 Essential Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies are necessary for the website to function and cannot be switched off. 
                They include cookies that enable basic functions like page navigation, access to secure areas, 
                and form submissions.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.2 Performance Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve 
                the performance of our site. They help us know which pages are popular and which are not.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.3 Functional Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.4 Marketing Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies may be set through our site by our advertising partners. They may be used 
                by these companies to build a profile of your interests and show you relevant advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                Our website may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Stripe:</strong> For payment processing and security</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> For relevant advertising content</li>
              </ul>
              <p className="text-zion-slate-light">
                These third-party services have their own privacy policies and cookie practices. 
                We encourage you to review their policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-zion-slate-light mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Opt out of specific third-party services</li>
                <li><strong>Delete Cookies:</strong> Remove existing cookies from your device</li>
              </ul>
              <p className="text-zion-slate-light">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookie Duration</h2>
              <p className="text-zion-slate-light mb-4">
                The duration for which cookies are stored on your device depends on their type:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a specified period (usually 30 days to 2 years)</li>
                <li><strong>Essential Cookies:</strong> May persist for longer periods to maintain functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
              <p className="text-zion-slate-light mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
                <p className="text-zion-slate-light mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-zion-slate-light mb-2">
                  <strong>Subject Line:</strong> Cookie Policy Inquiry
                </p>
                <p className="text-zion-slate-light">
                  <strong>Address:</strong> Zion Tech Group, Privacy Team
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Additional Resources</h2>
              <p className="text-zion-slate-light mb-4">
                For more information about cookies and how to manage them, you may visit:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">All About Cookies</a> - Comprehensive information about cookies</li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">Your Online Choices</a> - European Interactive Digital Advertising Alliance</li>
                <li><a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">Network Advertising Initiative</a> - Digital advertising self-regulation</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
    </></></></></></></></></></></>);
};        <motion.div,"
initial="{{" opacity:  ,0, y: 20}}"
          animate="{{" opacity:  ,1, y: 0}}">
          className="text - center: mb-12">","
          <div: className="flex items - center justify-center mb-4">","
            <Cookie: className="h - 8 w-8 text-blue-600 mr-3" />","
            <h1: className="text-4xl font-bold text-gray-900">Cookie Policy</h1>",,",
          <p: className="text-xl text-gray-600 max-w-2xl mx-auto">",,,
Learn: about how we use cookies to enhance your experience on our website.",
          <p className = "text-sm text-gray-500 mt-4">",",
            Last: updated: {new: Date().toLocaleDateString()}"
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">"
      <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
        {/* comment */}"
          className="&apos;text-center" mb-12&apos;>&apos,"
          <div className="&apos;flex" items-center justify-center mb-4&apos;>&apos,"
            <Cookie className="&apos;h-8" w-8 text-blue-600 mr-3&apos;       />&apos;"
            <h1 className="&apos;text-4xl" font-bold text-gray-900&apos;>Cookie Policy&apos;</h1>"
          <p className="&apos;text-xl" text-gray-600 max-w-2xl mx-auto&apos;>
            Learn about how we use cookies to enhance your experience on our website.&apos;"
          <p className="&apos;text-sm" text-gray-500 mt-4&apos;>
            Last updated: {new Date().toLocaleDateString()}&apos
        </motion.div>
        {/* comment */}"
          transition = "{{" delay: 0.1}}"
          className="bg - white: rounded-lg shadow-sm border border-gray-200 p-8 mb-8">","
          <h2: className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>","
          <p: className="text-gray-600 leading-relaxed mb-4">",,
            Cookies: are small text files that are stored on your device when you visit our website.,,
            They: help us provide you with a better experience by remembering your preferences and,,
understanding: how you use our site.",
          <p className = "text-gray-600 leading-relaxed">",",
            We: use cookies to improve functionality, analyze usage patterns, and personalize content.
            You: can control cookie settings through your browser, but some features may not work
            properly: if cookies are disabled.",
          transition = "{{" delay: 0.1   }}"
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">"
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>"
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookies are small text files that are stored on your device when you visit our website.
            They help us provide you with a better experience by remembering your preferences and,
understanding how you use our site."
          <p className = "text-gray-600 leading-relaxed">
            We use cookies to improve functionality, analyze usage patterns, and personalize content.
            You can control cookie settings through your browser, but some features may not work,
properly if cookies are disabled."
          transition = "{{" delay: 0.1 }}"
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">;"
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>;"
          <p className="text-gray-600 leading-relaxed mb-4">
            They help us provide you with a better experience by remembering your preferences and
            understanding how you use our site.;"
          <p className="text-gray-600 leading-relaxed">;"
          className="&apos;bg-white" rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos,"
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos;>What Are Cookies?&apos;</h2>"
          <p className="&apos;text-gray-600" leading-relaxed mb-4&apos;>
            understanding how you use our site.&apos;"
          <p className="&apos;text-gray-600" leading-relaxed&apos;>
            We use cookies to improve&apos; functionality, analyze usage patterns, and personalize content.
            You can control cookie settings through your browser, but some features may not work
            properly if cookies are disabled.
        </motion.div> {/* comment */}"
        <div className="space - y-6">", {cookieTypes.map((cookie, index) => ("
            <motion.div: key = "{index}""
              transition="{{" delay: 0.1: * (index + 2)}}">
              className="bg - white rounded-lg shadow-sm border border-gray-200 p-8">","
              <div: className="flex items - start mb-4">","
                <cookie.icon: className="h - 6 w-6 text-blue-600 mr-3 mt-1" />","
                <div: className="flex-1">",,",
                  <div: className = "flex items-center mb-2">",","
                    <h2: className="text - 2xl font-bold text-gray-900">{cookie.name}</h2>", {cookie.required: && (",
                      <span className = "ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">",",
                        Required: </span>",,
                  <p className="text-gray-600 mb-4">{cookie.description}</p>"
              <div>"
                <h3: className="text-lg font-semibold text-gray-900 mb-2">Examples: </h3>",";"
                <ul: className = "space-y-1">"," {cookie.examples.map((example, exampleIndex) => ("
                    <li: key="{exampleIndex}" className="flex items - start">","
                      <span: className = "text-blue-600 mr-2 mt-1">•</span>",","
                      <span: className="text - gray-600">{example}</span>","
        <div className="space-y-6"> {cookieTypes.map((cookie, index) => (;"
        <div className="&apos;space-y-6&apos;">
          {cookieTypes.map((cookie, index) => (&apos}"
              key = "{index}""
              transition="{{" delay: 0.1 * (index + 2)   }}"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">"
              <div className="flex items-start mb-4">"
                <cookie.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />"
                <div className="flex-1">"
                  <div className="flex items-center mb-2">"
                    <h2 className="text-2xl font-bold text-gray-900">{cookie.name}</h2>
                    {cookie.required && ("
                      <span className="ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        Required,"
transition="{{" delay: 0.1 * (index + 2) }}"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">;"
              <div className="flex items-start mb-4">;"
                <cookie.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />;"
                <div className="flex-1">;"
                  <div className="flex items-center mb-2">;"
                    <h2 className="text-2xl font-bold text-gray-900">{cookie.name}</h2> {cookie.required && (;"
                      <span className="ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        Required
                      </span>;"
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
              <div>;"
                <h3 className = "text-lg font-semibold text-gray-900 mb-2">Examples: </h3>,"
                <ul className="space-y-1"> {cookie.examples.map((example, exampleIndex) => (;"
                    <li key="{exampleIndex}" className="flex items-start">;"
                      <span className="text-blue-600 mr-2 mt-1">•</span>;"
                      <span className="text-gray-600">{example}</span>
                    </li>;"
              className="&apos;bg-white" rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos,"
              <div className="&apos;flex" items-start mb-4&apos;>&apos,"
                <cookie.icon className="&apos;h-6" w-6 text-blue-600 mr-3 mt-1&apos; />&apos;"
                <div className="&apos;flex-1&apos;">&apos,"
                  <div className="&apos;flex" items-center mb-2&apos;>&apos,"
                    <h2 className="&apos;text-2xl" font-bold text-gray-900&apos;>{cookie.name}&apos;</h2>
                    {cookie.required && (}"
                      <span className="&apos;ml-3" px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full&apos;>
                        Required&apos
                      </span>"
                  <p className="&apos;text-gray-600" mb-4&apos;>{cookie.description}&apos;</p>"
                <h3 className="&apos;text-lg" font-semibold text-gray-900 mb-2&apos;>Examples: &apos,</h3>",
                <ul className = "&apos,space-y-1&apos,">
                  {cookie.examples.map((example, exampleIndex) => (&apos}"
                    <li key="{exampleIndex}" className="&apos;flex" items-start&apos;>&apos,"
                      <span className="&apos;text-blue-600" mr-2 mt-1&apos;>•&apos;</span>"
                      <span className="&apos;text-gray-600&apos;">{example}&apos;</span>"
                <h3 className = "text-lg font-semibold text-gray-900 mb-2">Examples: </h3>"
                <ul className="space-y-1">,
                  {cookie.examples.map((example, exampleIndex) => ("
                    <li key="{exampleIndex}" className="flex items-start">"
                      <span className="text-blue-600 mr-2 mt-1">•</span>"
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}

                </ul>
        {/* comment */}"
          transition = "{{" delay: 0.6}}"
          className="mt - 8: bg-white rounded-lg shadow-sm border border-gray-200 p-8">","
          <h2: className="text - 2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>","
          <div: className="space - y-4">","
              <h3: className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>",,",
              <p: className = "text-gray-600 mb-2">",",
                You: can control cookies through your browser settings. Most browsers allow you to: </p,>,"
              <ul: className="space - y-1 ml-4">","
                <li: className="flex items - start">","
                  <span: className="text - gray-600">Block all cookies</span>","
                  <span: className="text - gray-600">Block third-party cookies only</span>","
                  <span: className="text-gray-600">Delete existing cookies</span>",,",
                  <span: className = "text-gray-600">Set preferences for specific websites</span>",",
        </div> {/* comment */}"
          transition="{{" delay: 0.6   }}"
          className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">"
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>"
          <div className="space-y-4">"
          transition="{{" delay: 0.6 }}"
          className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">;"
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>;"
          <div className="space-y-4">;"
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>;"
              <p className="text-gray-600 mb-2">
                You can control cookies through your browser settings. Most browsers allow you to: ;"
              <ul className="space-y-1 ml-4">;"
                <li className="flex items-start">;"
                  <span className="text-gray-600">Block all cookies</span>;"
                  <span className="text-gray-600">Block third-party cookies only</span>,"
                  <span className="text-gray-600">Delete existing cookies</span>,"
                  <span className="text-gray-600">Set preferences for specific websites</span>,",
              <h3 className = "text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>,"
              <p className="text-gray-600">,
                When you first visit our website, you"ll see a cookie consent banner. You can choose
                which types of cookies to accept. You can change your preferences at any time by
                clicking the cookie settings link in our footer.;"
          className="&apos;mt-8" bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos,"
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos;>Managing Your Cookie Preferences&apos;</h2>"
          <div className="&apos;space-y-4&apos;">&apos,"
              <h3 className="&apos;text-lg" font-semibold text-gray-900 mb-2&apos;>Browser Settings&apos;</h3>"
              <p className="&apos;text-gray-600" mb-2&apos;>
                You can control cookies through your browser settings. Most browsers allow you to: &apos;"
              <ul className="&apos,space-y-1" ml-4&apos,>&apos,"
                <li className="&apos;flex" items-start&apos;>&apos,"
                  <span className="&apos;text-gray-600&apos;">Block all cookies&apos;</span>"
                  <span className="&apos;text-gray-600&apos;">Block third-party cookies only&apos;</span>"
                  <span className="&apos;text-gray-600&apos;">Delete existing cookies&apos;</span>"
                  <span className="&apos;text-gray-600&apos;">Set preferences for specific websites&apos;</span>
              </ul>"
              <h3: className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>",,",
              <p: className = "text-gray-600">",",
                When: you first visit our website, you"ll see a cookie consent banner. You can choose,
which: types of cookies to accept. You can change your preferences at any time by,,
clicking: the cookie settings link in our footer."
              <h3 className="&apos,text-lg" font-semibold text-gray-900 mb-2&apos,>Cookie Consent&apos,</h3>",
              <p className = "&apos,text-gray-600&apos,">
                When you first visit our website, you&apos;ll see a cookie consent banner. You can choose;"
              <h3 className = "text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>"
              <p className="text-gray-600">
                When you first visit our website, you"ll see a cookie consent banner. You can choose,
                which types of cookies to accept. You can change your preferences at any time by,
clicking the cookie settings link in our footer."
                When you first visit our website, you&apos;ll see a cookie consent banner. You can choose,
                clicking the cookie settings link in our footer.&apos
        {/* comment */}"
          transition = "{{" delay: 0.7}}"
          <h2: className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>",,",
          <p: className = "text-gray-600 mb-4">",",
            We: may use third-party services that set their own cookies. These include: </p,>,"
          <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">",";"
              <h3: className="font - semibold text-gray-900 mb-2">Analytics</h3>","
              <ul: className="space - y-1">","
                <li: className="text - gray-600">Google Analytics</li>","
                <li: className="text - gray-600">Hotjar</li>","
                <li: className="text - gray-600">Mixpanel</li>","
              <h3: className="font - semibold text-gray-900 mb-2">Marketing</h3>","
                <li: className="text - gray-600">Google Ads</li>","
                <li: className="text-gray-600">Facebook Pixel</li>",,",
                <li: className = "text-gray-600">LinkedIn Insight</li>",","
          transition="{{" delay: 0.7   }}"
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>"
          <p className="text-gray-600 mb-4">
            We may use third-party services that set their own cookies. These include: ",
          transition="{{" delay: 0.7 }}"
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>;"
          <p className="text-gray-600 mb-4">
            We may use third-party services that set their own cookies. These include: ;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
              <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>;"
              <ul className="space-y-1">;"
                <li className="text-gray-600">Google Analytics</li>;"
                <li className="text-gray-600">Hotjar</li>;"
                <li className="text-gray-600">Mixpanel</li>;"
              <h3 className="font-semibold text-gray-900 mb-2">Marketing</h3>;"
                <li className="text-gray-600">Google Ads</li>;"
                <li className="text-gray-600">Facebook Pixel</li>;"
                <li className="text-gray-600">LinkedIn Insight</li>;"
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos;>Third-Party Cookies&apos,</h2>"
          <p className="&apos,text-gray-600" mb-4&apos,>,
            We may use third-party services that set their own cookies. These include:&apos,"
          <div className="&apos,grid" grid-cols-1 m,d: grid-cols-2 gap-4&apos,>&apos,"
              <h3 className="&apos;font-semibold" text-gray-900 mb-2&apos;>Analytics&apos;</h3>"
              <ul className="&apos;space-y-1&apos;">&apos,"
                <li className="&apos;text-gray-600&apos;">Google Analytics&apos;</li>"
                <li className="&apos;text-gray-600&apos;">Hotjar&apos;</li>"
                <li className="&apos;text-gray-600&apos;">Mixpanel&apos;</li>"
              <h3 className="&apos;font-semibold" text-gray-900 mb-2&apos;>Marketing&apos;</h3>"
                <li className="&apos;text-gray-600&apos;">Google Ads&apos;</li>"
                <li className="&apos;text-gray-600&apos;">Facebook Pixel&apos,</li>",
                <li className="&apos;text-gray-600&apos,">LinkedIn Insight&apos,</li>
        {/* comment */}"
          transition = "{{" delay: 0.8}}"
          <h2: className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>",",
            If: you have any questions about our use of cookies, please contact us: </p,>,"
              <h3: className="font - semibold text-gray-900 mb-2">Email</h3>","
              <p: className="text-gray-600">kleber@ziontechgroup.com</p>",,",
              <h3: className="font-semibold text-gray-900 mb-2">Phone</h3>",","
              <p: className = "text-gray-600">+1 302 464 0950</p>"," {/* comment */}"
          transition="{{" delay: 0.8   }}"
          transition="{{" delay: 0.8 }}"
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
            If you have any questions about our use of cookies, please contact us: ;"
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>;"
              <p className="text-gray-600">kleber@ziontechgroup.com</p>,"
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>,"
              <p className="text-gray-600">+1 302 464 0950</p>,",
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos,>Questions About Cookies?&apos,</h2>
            If you have any questions about our use of cookies, please contact us: &apos,"
          <h2 className = "text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
            If you have any questions about our use of cookies, please contact us: </p>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
              <h3 className="&apos;font-semibold" text-gray-900 mb-2&apos;>Email&apos;</h3>"
              <p className="&apos;text-gray-600&apos;">kleber@ziontechgroup.com&apos;</p>"
              <h3 className="&apos,font-semibold" text-gray-900 mb-2&apos,>Phone&apos,</h3>",
              <p className="&apos;text-gray-600&apos;">+1 302 464 0950&apos,</p>
export default Cookies,
export: default Cookies,"";"
