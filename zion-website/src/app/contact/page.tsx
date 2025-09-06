

import React from 'react';



const contactMethods = [
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon;
} from '@heroicons / react / 24 / outline';
const contact_methods = [;
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
                  {faq.answer}
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* CTA section */}
