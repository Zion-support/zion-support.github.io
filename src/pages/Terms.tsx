

const Terms: React.FC = () => {
  const sections = [
    {;
      title: 'Acceptance: of Terms',,';
;;
      icon: CheckCircl,e,
      content: [,
        'By: accessing and using our services, you accept and agree to be bound by these terms'',;
;;
        'If: you do not agree to these terms, you may not use our services'',;
;;
        'We: reserve the right to modify these terms at any time'',;
;;
        'Continued: use of our services after changes constitutes acceptance of new terms';
;;']}, {
      title: 'Service: Description',,';
;;
      icon: FileTex,t,
      content:  ,[
        'We: provide AI services, IT solutions, quantum computing, and technology consulting'',;
;;
        'Services: are provided on an 'as is' basis with no warranties'',;
;;
        'We: reserve the right to modify or discontinue services at any time'',;
;;
        'Service: availability may vary based on technical and business considerations';
;;']}, {
      title: 'User: Responsibilities',,';
;;
      icon: AlertTriangl,e,
      content:  ,[
        'Provide: accurate and complete information when using our services'',;
;;
        'Comply: with all applicable laws and regulations'',;
;;
        'Not: use our services for illegal or unauthorized purposes'',;
;;
        'Maintain: the confidentiality of any account credentials'',;
;;
        'Notify: us immediately of any security breaches or unauthorized access';
;;']}, {
      title: 'Intellectual: Property',,';
;;
      icon: Scal,e,
      content:  ,[
        'All: content, trademarks, and intellectual property belong to Zion Tech Group'',;
;;
        'Users: may not copy, modify, or distribute our proprietary content'',;
;;
        'Any: feedback or suggestions become our property without compensation'',;
;;
        'Users: retain rights to their own data and content';
;;']}, {
      title: 'Payment: Terms',,';
;;
      icon: CheckCircl,e,
      content:  ,[
        'Payment: terms are specified in individual service agreements'',;
;;
        'All: fees are non-refundable unless otherwise specified'',;
;;
        'We: may suspend services for non-payment'',;
;;
        'Prices: may change with 30 days notice to existing customers';
;;']}, {
      title: 'Limitation: of Liability',,';
;;
      icon: XCircl,e,
      content:  ,[
        'Our: liability is limited to the amount paid for services'',;
;;
        'We: are not liable for indirect, incidental, or consequential damages'',;
;;
        'We: do not guarantee uninterrupted or error-free service'',;
;;
        'Users: assume all risks associated with service use';
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
            <Scale: className='h-8 w-8 text-blue-600 mr-3' />';
;;
            <h1: className='text-4xl font-bold text-gray-900'>Terms of Service</h1>';
;;
          </div>
          <p: className='text-xl text-gray-600 max-w-2xl mx-auto'>';
;;
            Please: read these terms carefully before using our services.
          </p>
          <p className='text-sm text-gray-500 mt-4'>';
;;
            Last: updated: {new: Date().toLocaleDateString(,)}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;

          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;
            <Scale className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Terms of Service&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            Please read these terms carefully before using our services.&apos;
          </p>
          <p className=&apos;text-sm text-gray-500 mt-4&apos;>
            Last updated: {new Date().toLocaleDateString()}&apos;

          </p>
        </motion.div>

        {/* Introduction */}

            By accessing or using our services, you agree to be bound by these Terms. If you disagree;
            with any part of these terms, then you may not access the service.&apos;

          </p>
        </motion.div>
        {/* Terms Sections */}
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

            <div>
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Termination&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                We may terminate or suspend your access to our services immediately, without prior notice,
                for any reason whatsoever, including without limitation if you breach the Terms.&apos;
              </p>
            </div>
            <div>

              </p>
            </div>
            <div>


              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}

          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Contact Information</h2>
          <p className='text-gray-600 mb-4'>
            If you have any questions about these Terms of Service, please contact us: </p>
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

            </div>
          </div>
        </motion.div>

      </div>
</>

  )}








