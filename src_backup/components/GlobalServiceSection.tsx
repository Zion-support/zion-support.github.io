<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  Truck,;
} from 'lucide-react';
import { Button } from './ui/button';

<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
<<<<<<< HEAD
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react'
import { Button } from "./ui/button",
=======
import { GradientHeading } from "./GradientHeading",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx

import { GradientHeading } from "./GradientHeading";
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react'
import { Button } from "./ui/button";
const services = null;
import { GradientHeading } from './GradientHeading'
import {
  Server
  HardDrive
  Network
  Clock
  Recycle
  Truck
} from 'lucide-react'
import { Button } from './ui/button'
<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx
const services = [
  {
    title: "Servers",
    description: "Enterprise-grade servers for any workload with 24/7 maintenance and support",
    icon: <Server className="h-10 w-10" />},
  {
    title: "Storage",
    description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems",
    icon: <HardDrive className="h-10 w-10" />},
  {
    title: "Networking",
    description: "Connectivity solutions including switches, routers, and network security devices",
    icon: <Network className="h-10 w-10" />},
  {
    title: "24x7x365 Support",
    description: "Around-the-clock technical support with rapid response times guaranteed",
    icon: <Clock className="h-10 w-10" />},
  {
    title: "Recycling Services",
    description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices",
    icon: <Recycle className="h-10 w-10" />},
  {
<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
<<<<<<< HEAD
    title: "Equipment Rentals",
    description: "Flexible rental options for temporary projects and scaling requirements",
    icon: <Truck className="h-10 w-10" />}],
<<<<<<< HEAD
=======
    <section className='py-20 bg-zion-blue' id='global-services'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-16'>;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
            Our 24x7x365 global IT service offering provides enterprise-grade;
            solutions for businesses of all sizes;
          </p>;
        </div>;

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
          {services && services.map((service, index) => (;

            <div
              key={index}
              className='bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300'>;
              <div className='text-zion-cyan mb-4'>{service && service.icon}</div>;
              <h3 className='text-xl font-bold text-white mb-2'>;
                {service && service.title}
              </h3>;
              <p className='text-zion-slate-light mb-4'>;
                {service && service.description}
              </p>            </div>;

          ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  Truck,;
} from 'lucide-react';
import { Button } from './ui/button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import { GradientHeading } from "./GradientHeading",
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react'
import { Button } from "./ui/button",
const services = [
  {
    title: "Servers",
    description: "Enterprise-grade servers for any workload with 24/7 maintenance and support",
    icon: <Server className="h-10 w-10" />},
  {
    title: "Storage",
    description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems",
    icon: <HardDrive className="h-10 w-10" />},
  {
    title: "Networking",
    description: "Connectivity solutions including switches, routers, and network security devices",
    icon: <Network className="h-10 w-10" />},
  {
    title: "24x7x365 Support",
    description: "Around-the-clock technical support with rapid response times guaranteed",
    icon: <Clock className="h-10 w-10" />},
  {
    title: "Recycling Services",
    description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices",
    icon: <Recycle className="h-10 w-10" />},
  {
    title: "Equipment Rentals",
    description: "Flexible rental options for temporary projects and scaling requirements",
    icon: <Truck className="h-10 w-10" />}],
=======
<<<<<<< HEAD

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx
export function GlobalServiceSection() {;
    title: 'Equipment Rentals'
    description:
      'Flexible rental options for temporary projects and scaling requirements'
    icon: <Truck className='h-10 w-10' />
  }
]
export function GlobalServiceSection() {
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

    <section className='py-20 bg-zion-blue' id='global-services'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-16'>;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
            Our 24x7x365 global IT service offering provides enterprise-grade;
            solutions for businesses of all sizes;
          </p>;
        </div>;

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
          {services && services.map((service, index) => (;

            <div
              key={index}
              className='bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300'
            >
              <div className='text-zion-cyan mb-4'>{service.icon}</div>
              <h3 className='text-xl font-bold text-white mb-2'>
                {service.title}
              </h3>
              <p className='text-zion-slate-light mb-4'>
                {service.description}
              </p>
            </div>
origin/cursor/automate-test-improve-and-merge-code-2533
          ))}
<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function GlobalServiceSection() {
  return (
    <section className="py-20 bg-zion-blue" id="global-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientHeading>Global IT Services</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes
          </p>
<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
<<<<<<< HEAD
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx
          {services.map((service, index) => (
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">
              <div className="text-zion-cyan mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>

<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">
<div className='flex justify-center mt-12'>
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>
origin/cursor/automate-test-improve-and-merge-code-2533
            Get Your Free Commercial Proposal
          </Button>
        </div>
<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
    </section>
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        </div>;

        <div className='flex justify-center mt-12'>;
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>            Get Your Free Commercial Proposal        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services && services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
                {service && service.icon}
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">{service && service.title}</h3>;
              <p className="text-zion-slate-light mb-4">{service && service.description}</p>;
          ))}
        </div>;

        <div className='flex justify-center mt-12'>;
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>        <div className="flex justify-center mt-12">;
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">;
import { GradientHeading } from './GradientHeading';
import {
  Server,
  HardDrive,
  Network,
  Clock,
  Recycle,
  Truck,
} from 'lucide-react';
import { Button } from './ui / button';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { GradientHeading } from "./GradientHeading",;
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react';
import { Button } from "./ui/button",;
const services = [;
  {;
    title: "Servers",;
    description: "Enterprise-grade servers for any workload with 24/7 maintenance and support",;
    icon: <Server className="h-10 w-10" />},;
  {;
    title: "Storage",;
    description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems",;
    icon: <HardDrive className="h-10 w-10" />},;
  {;
    title: "Networking",;
    description: "Connectivity solutions including switches, routers, and network security devices",;
    icon: <Network className="h-10 w-10" />},;
  {;
    title: "24x7x365 Support",;
    description: "Around-the-clock technical support with rapid response times guaranteed",;
    icon: <Clock className="h-10 w-10" />},;
  {;
    title: "Recycling Services",;
    description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices",;
    icon: <Recycle className="h-10 w-10" />},;
  {;
    title: "Equipment Rentals",;
    description: "Flexible rental options for temporary projects and scaling requirements",;
    icon: <Truck className="h-10 w-10" />}];
export function GlobalServiceSection() {;
  return (;
    <section className="py-20 bg-zion-blue" id="global-services">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-16">;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
                {service.icon}
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>;
              <p className="text-zion-slate-light mb-4">{service.description}</p>;
            </div>;
          ))}
        </div>;
        <div className="flex justify-center mt-12">;
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">;
=======
=======

        </div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

        <div className='flex justify-center mt-12'>;
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>            Get Your Free Commercial Proposal        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services && services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
                {service && service.icon}
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">{service && service.title}</h3>;
              <p className="text-zion-slate-light mb-4">{service && service.description}</p>;
          ))}
        </div>;

        <div className='flex justify-center mt-12'>;
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>        <div className="flex justify-center mt-12">;
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">;
import { GradientHeading } from './GradientHeading';
import {
  Server,
  HardDrive,
  Network,
  Clock,
  Recycle,
  Truck,
} from 'lucide-react';
import { Button } from './ui / button';
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react';
import { Button } from "./ui/button",;
=======



      </div>
    </section>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx
const services = [;
  {;
    title: "Servers",,
  description: "Enterprise-grade servers for any workload with 24/7 maintenance and support",;
    icon: <Server className="h-10 w-10" />},;
  {;
    title: "Storage",,
  description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems",;
    icon: <HardDrive className="h-10 w-10" />},;
  {;
    title: "Networking",,
  description: "Connectivity solutions including switches, routers, and network security devices",;
    icon: <Network className="h-10 w-10" />},;
  {;
    title: "24x7x365 Support",,
  description: "Around-the-clock technical support with rapid response times guaranteed",;
    icon: <Clock className="h-10 w-10" />},;
  {;
    title: "Recycling Services",,
  description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices",;
    icon: <Recycle className="h-10 w-10" />},;
  {;
    title: "Equipment Rentals",,
  description: "Flexible rental options for temporary projects and scaling requirements",;
    icon: <Truck className="h-10 w-10" />}];
export function GlobalServiceSection() {;
  return (;
    <section className="py-20 bg-zion-blue" id="global-services">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-16">;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
                {service.icon}
<<<<<<< HEAD
              </div>;
              <h3 className="text - xl font - bold text - white mb - 2">{service.title}</h3>;
              <p className="text - zion - slate - light mb - 4">{service.description}</p>))}
        </div>;
        <div className='flex justify - center mt - 12'>;
          <Button className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white text - lg py - 6 px - 8'>        <div className="flex justify - center mt - 12">;
          <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white text - lg py - 6 px - 8">;
<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            Get Your Free Commercial Proposal;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD:src/components/GlobalServiceSection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    </section>;
  );
}
;
=======

    </section>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );
}

    </section>);
}

  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/GlobalServiceSection.tsx
