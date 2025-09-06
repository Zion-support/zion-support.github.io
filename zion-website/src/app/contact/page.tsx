import {
  {
    name: 'Email'
    description: 'Get in touch with our team'
    value: 'contact@ziontechgroup.com'
    href: 'mailto:contact@ziontechgroup.com'
    icon: EnvelopeIcon}
  {
  {
    question: 'What industries do you serve?'
    answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different sectors.'}
  {
  {
    question: 'Do you provide ongoing support?'
    answer: 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services to ensure your AI solutions continue to deliver value.'}
  {
  return (
    <div className=&quot;bg - black & quot;>;
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              Get in{' '}
      {/* Contact methods */}
      <div className=&quot;mx - auto max - w-7xl px - 6 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Contact Us</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Multiple ways to reach us;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 3&quot;>;
            {contact_methods.map ((method) => (
              <div key={method.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <method.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {method.name}
          </dl>;
        </div>;
      </div>;
      {/* Contact form */}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Send us a message</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Let's start a conversation;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl lg:max - w-none & quot;>;
          <form className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm & quot;>;
            <div className=&quot;grid grid - cols - 1 gap - x-8 gap - y-6 sm:grid - cols - 2&quot;>;
              <div>;
                <label html_for=&quot;first - name & quot; className=&quot;block text - sm font - semibold leading - 6 text - white & quot;>;
                  First name;
                </label>;
                <div className=&quot;mt - 2.5 & quot;>;
                  <input;
                    type=&quot;text & quot;
                    name=&quot;first - name & quot;
                    id=&quot;first - name & quot;
                    auto_complete=&quot;given - name & quot;
                    className=&quot;block w - full rounded - md border - 0 bg - white / 5 px - 3.5 py - 2 text - white shadow - sm ring - 1 ring - inset ring - white / 10 focus:ring - 2 focus:ring - inset focus:ring - blue - 500 sm:text - sm sm:leading - 6&quot;
                  />;
                </div>;
              </div>;
              <div>;
                <label html_for=&quot;last - name & quot; className=&quot;block text - sm font - semibold leading - 6 text - white & quot;>;
                  Last name;
                </label>;
                <div className=&quot;mt - 2.5 & quot;>;
                  <input;
                    type=&quot;text & quot;
                    name=&quot;last - name & quot;
                    id=&quot;last - name & quot;
                    auto_complete=&quot;family - name & quot;
                    className=&quot;block w - full rounded - md border - 0 bg - white / 5 px - 3.5 py - 2 text - white shadow - sm ring - 1 ring - inset ring - white / 10 focus:ring - 2 focus:ring - inset focus:ring - blue - 500 sm:text - sm sm:leading - 6&quot;
                  />;
                </div>;
              </div>;
              <div className=&quot;sm:col - span - 2&quot;>;
                <label html_for=&quot;email & quot; className=&quot;block text - sm font - semibold leading - 6 text - white & quot;>;
                  Email;
                </label>;
                <div className=&quot;mt - 2.5 & quot;>;
                  <input;
                    type=&quot;email & quot;
                    name=&quot;email & quot;
                    id=&quot;email & quot;
                    auto_complete=&quot;email & quot;
                    className=&quot;block w - full rounded - md border - 0 bg - white / 5 px - 3.5 py - 2 text - white shadow - sm ring - 1 ring - inset ring - white / 10 focus:ring - 2 focus:ring - inset focus:ring - blue - 500 sm:text - sm sm:leading - 6&quot;
                  />;
                </div>;
              </div>;
              <div className=&quot;sm:col - span - 2&quot;>;
                <label html_for=&quot;company & quot; className=&quot;block text - sm font - semibold leading - 6 text - white & quot;>;
                  Company;
                </label>;
                <div className=&quot;mt - 2.5 & quot;>;
                  <input;
                    type=&quot;text & quot;
                    name=&quot;company & quot;
                    id=&quot;company & quot;
                    auto_complete=&quot;organization & quot;
                    className=&quot;block w - full rounded - md border - 0 bg - white / 5 px - 3.5 py - 2 text - white shadow - sm ring - 1 ring - inset ring - white / 10 focus:ring - 2 focus:ring - inset focus:ring - blue - 500 sm:text - sm sm:leading - 6&quot;
                  />;
                </div>;
              </div>;
              <div className=&quot;sm:col - span - 2&quot;>;
                <label html_for=&quot;message & quot; className=&quot;block text - sm font - semibold leading - 6 text - white & quot;>;
                  Message;
                </label>;
                <div className=&quot;mt - 2.5 & quot;>;
                  <textarea;
                    name=&quot;message & quot;
                    id=&quot;message & quot;
                    rows={4}
      {/* Office locations */}
      <div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Global Presence</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Visit our offices worldwide;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 3&quot;>;
            {office_locations.map ((office) => (
              <div key={office.name} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 & quot;>;
                <div className=&quot;flex items - center gap - x-3 mb - 4&quot;>;
                  <MapPinIcon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  <h3 className=&quot;text - xl font - semibold text - white & quot;>{office.name}</h3>;
                </div>;
                <div className=&quot;space - y-3 text - gray - 300 & quot;>;
                  <p className=&quot;flex items - start gap - 2&quot;>;
                    <MapPinIcon className=&quot;h - 5 w - 5 text - blue - 400 mt - 0.5 flex - shrink - 0&quot; />;
                    {office.address}
                  </p>;
                  <p className=&quot;flex items - center gap - 2&quot;>;
                    <PhoneIcon className=&quot;h - 5 w - 5 text - blue - 400 & quot; />;
                    {office.phone}
                  </p>;
                  <p className=&quot;flex items - center gap - 2&quot;>;
                    <EnvelopeIcon className=&quot;h - 5 w - 5 text - blue - 400 & quot; />;
                    {office.email}
                  </p>;
                  <p className=&quot;flex items - center gap - 2&quot;>;
                    <ClockIcon className=&quot;h - 5 w - 5 text - blue - 400 & quot; />;
                    {office.hours}
                  </p>;
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* FAQ */}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Frequently Asked</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Common questions;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl lg:max - w-none & quot;>;
          <dl className=&quot;space - y-8 & quot;>;
            {faqs.map ((faq, index) => (
              <div key={index} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm & quot;>;
                <dt className=&quot;text - lg font - semibold leading - 7 text - white mb - 4&quot;>;
                  {faq.question}
                </dt>;
                <dd className=&quot;text - base leading - 7 text - gray - 300 & quot;>;
                  {faq.answer}
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* CTA section */}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl text - center & quot;>;
          <h2 className=&quot;text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Ready to get started?;
          </h2>;
          <p className=&quot;mx - auto mt - 6 max - w-xl text - lg leading - 8 text - gray - 300 & quot;>;
            Our team is ready to help you explore the possibilities of AI and transform your business.;
          </p>;
          <div className=&quot;mt - 10 flex items - center justify - center gap - x-6 & quot;>;
            <a;
              href=&quot;/solutions & quot;
              className=&quot;rounded - md bg - blue - 600 px - 3.5 py - 2.5 text - sm font - semibold text - white shadow - sm hover:bg - blue - 500 focus - visible:outline focus - visible:outline - 2 focus - visible:outline - offset - 2 focus - visible:outline - blue - 600 transition - all duration - 200 hover:scale - 105 & quot;
            >;
              Explore Solutions;
            </Link>;
            <a href=&quot;/about & quot; className=&quot;text - sm font - semibold leading - 6 text - white hover:text - blue - 400 transition - colors duration - 200 & quot;>;
              Learn More <span aria - hidden=&quot;true & quot;>→</span>;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>);
}
