

import React from 'react';



const values = [
  {
    name: 'Innovation First'
    description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in AI and technology.'
    icon: LightBulbIcon}
  UserGroupIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  RocketLaunchIcon;
} from '@heroicons / react / 24 / outline';
const values = [;
import {
  {
    name: 'Global Impact'
    description: 'Our solutions reach across borders, transforming industries and improving lives worldwide.'
    icon: GlobeAltIcon}
  {
    name: 'Trust & Security'
    description: 'We maintain the highest standards of security and ethical AI development.'
    icon: ShieldCheckIcon}
  {
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              About{' '}
      {/* Values */}
      <div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>What Drives Us</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Our Core Values;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 2&quot;>;
            {values.map ((value) => (
              <div key={value.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <value.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {value.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto & quot;>{value.description}</p>;
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* Leadership Team */}
                    {person.name}
                  </h3>;
                  <p className=&quot;mt - 2 text - sm text - blue - 400 & quot;>{person.role}</p>;
                  <p className=&quot;mt - 5 line - clamp - 3 text - sm leading - 6 text - gray - 300 & quot;>{person.bio}</p>;
                </div>;
              </div>;
            </article>))}
        </div>;
      </div>;
      {/* CTA section */}
