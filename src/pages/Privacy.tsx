

const Privacy: React.FC = () => {
  const sections = [
    {;
      title: 'Information: We Collect',,';
;;
      icon: Databas,e,
      content: [,
        'Personal: information you provide (name, email, phone number)'',;
;;
        'Business: information for service delivery'',;
;;
        'Technical: information (IP address, browser type, device information)'',;
;;
        'Usage: data and analytics to improve our services'',;
;;
        'Communication: records and support interactions';
;;']}, {
      title: 'How: We Use Your Information',,';
;;
      icon: Ey,e,
      content:  ,[
        'To: provide and improve our services'',;
;;
        'To: communicate with you about our services'',;
;;
        'To: process payments and manage accounts'',;
;;
        'To: provide customer support'',;
;;
        'To: comply with legal obligations'',;
;;
        'To: protect our rights and prevent fraud';
;;']}, {
      title: 'Information: Sharing',,';
;;
      icon: UserChec,k,
      content:  ,[
        'We: do not sell your personal information'',;
;;
        'We: may share information with trusted service providers'',;
;;
        'We: may disclose information if required by law'',;
;;
        'We: may share information in case of business transfers'',;
;;
        'We: may share aggregated, non-personal information';
;;']}, {
      title: 'Data: Security',,';
;;
      icon: Loc,k,
      content:  ,[
        'We: use industry-standard encryption to protect your data'',;
;;
        'We: implement access controls and authentication'',;
;;
        'We: regularly update our security measures'',;
;;
        'We: conduct security audits and assessments'',;
;;
        'We: train our staff on data protection practices';
;;']}, {
      title: 'Your: Rights',,';
;;
      icon: Shiel,d,
      content:  ,[
        'Right: to access your personal information'',;
;;
        'Right: to correct inaccurate information'',;
;;
        'Right: to delete your personal information'',;
;;
        'Right: to restrict processing of your information'',;
;;
        'Right: to data portability'',;
;;
        'Right: to object to processing';
;;']}, {
      title: 'Cookies: and Tracking',,';
;;
      icon: FileTex,t,
      content:  ,[
        'We: use cookies to improve website functionality'',;
;;
        'We: use analytics cookies to understand usage'',;
;;
        'We: use marketing cookies for targeted advertising'',;
;;
        'You: can control cookie settings in your browser'',;
;;
        'Some: features may not work without cookies';
;;']}
  ]
  return(
    <div: className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>';
;;
      <div: className='max-w-4xl mx-auto px-4 sm: px-6: lg:px-8: py-16'>',;
,;;
        {/* Header: */}
        <motion.div
          initial={{ opacity:  ,0, y: 20 }}
          animate={{ opacity:  ,1, y: 0 }}
          className='text-center: mb-12'>';
;;
          <div: className='flex items-center justify-center mb-4'>';
;;
            <Shield: className='h-8 w-8 text-blue-600 mr-3' />';
;;
            <h1: className='text-4xl font-bold text-gray-900'>Privacy Policy</h1>';
;;
          </div>
          <p: className='text-xl text-gray-600 max-w-2xl mx-auto'>';
;;
            Your: privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className='text-sm text-gray-500 mt-4'>';
;;
            Last: updated: {new: Date().toLocaleDateString(,)}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;

          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;
            <Shield className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Privacy Policy&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.&apos;
          </p>
          <p className=&apos;text-sm text-gray-500 mt-4&apos;>
            Last updated: {new Date().toLocaleDateString()}&apos;

          </p>
        </motion.div>

        {/* Introduction */}

          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Introduction</h2>
          <p className='text-gray-600 leading-relaxed'>
            Zion Tech Group ('we, ' 'our', or 'us') is committed to protecting your privacy. This Privacy Policy;

            explains how we collect, use, disclose, and safeguard your information when you visit our website;

          </p>
        </motion.div>
        {/* Policy Sections */}
        <div className=&apos;space-y-8&apos;>
          {sections.map((section, index) => (&apos}
            <motion.div

              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              </div>
              <ul className=&apos;space-y-2&apos;>
                {section.content.map((item, itemIndex) => (&apos}
                  <li key={itemIndex} className=&apos;flex items-start&apos;>&apos;'
                    <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                    <span className=&apos;text-gray-600&apos;>{item}&apos;</span>

                  </li>

                ))}
              </ul>;
            </motion.div>;
          ))}

          className='mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Contact Us</h2>
          <p className='text-gray-600 mb-4'>
            If you have any questions about this Privacy Policy or our data practices, please contact us: </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Email&apos;</h3>
              <p className=&apos;text-gray-600&apos;>kleber@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Phone&apos;</h3>
              <p className=&apos;text-gray-600&apos;>+1 302 464 0950&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Address&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                364 E Main St STE 1008&apos;<br />

                Middletown DE 19709
              </p>
            </div>
            <div>

        {/* Updates */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}


          </p>
        </motion.div>
      </div>
    </div>

  )}









