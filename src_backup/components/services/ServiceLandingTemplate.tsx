


name: string;
  role?: string;
  text: string;
  avatar?: string;
name: string;
import React from 'react';
import { GradientHeading  } from '@/components/GradientHeading';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardFooter  } from '@/components/ui/card';
import Image from 'next/image';
export interface Benefit  {title: string;
  description: string;
  icon?: React.ReactNode;
}
export interface Testimonial  {name: string;role?: string;
  text: string;
  avatar?: string;
}interface ServiceLandingTemplateProps  {title: string;


  heroImage,
  heroImage,

main

  return ("
    <div className="bg-background text-white">"
      <section className="bg-zion-blue py-16 px-4 text-center">"
        <div className="container mx-auto">"
          <GradientHeading level="h1" className="mb-4">
  return (
    <div className=bg-background text-white">"
      <section className=bg-zion-blue py-16 px-4 text-center>"
        <div className="container mx-auto>
          <GradientHeading level="h1" className=mb-4>
  icon?: React.ReactNode;
}export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({title,subtitle,heroImage,heroImage,description,benefits,export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({title,subtitle,description,benefits,features = [],stats = [],ctaText,ctaLink}) => {return (</p>;
  testimonials,ctaText,return (<div className="bg-background text-white">;
      <section className="bg-zion-blue py-16 px-4 text-center">;
        <div className="container mx-auto">;
          <GradientHeading level="h1" className="mb-4">;



      {benefits.length > 0 && (ursor/automate-test-improve-and-merge-code-646c;
        <section className="py - 16 px - 4">;
          <div className="max - w-7xl mx - auto">;
          </p>;"
          <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;


          </p>;
        </div>;
      </section>;

      {benefits && benefits.length > 0 && (;
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">;
              Benefits;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {benefits.map((benefit, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-lg">;
                  {benefit.icon && (<div className="mb-4 text-blue-600">;
                      {benefit.icon}</p>;
        </div>;
      </section>;{benefits && benefits.length > 0 && (<section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">;
              Benefits;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {benefits && benefits.map((benefit, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-lg">;
                  {benefit && benefit.icon && (<div className="mb-4 text-blue-600">;
                      {benefit && benefit.icon}
                    </div>;

  title;
                    </div>;title;
  subtitle;
  heroImage;
  description;
  benefits;
  testimonials;
  ctaText;
  ctaLink}) => {return (<div className;
            {description}
          </p>;
        </div>;
      </section>;
<section className='py-16 bg-zion-blue-light'>;
        <div className='container mx-auto px-4'>;
          <h2 className='text-2xl font-bold text-white text-center mb-8'>;
            Benefits;
          </h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {benefits.map((benefit, idx) => (<div;
                key={idx}
                className='bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center';
              >;
                {benefit.icon && (<div className='mb-4 flex justify-center text-zion-cyan'>;
                    {benefit.icon}
                  </div>;
                )}
                <h3 className='text-lg font-bold mb-2'>{benefit.title}</h3>;
                <p className='text-zion-slate-light'>{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
<section className='py-16 bg-zion-blue'>;
        <div className='container mx-auto px-4'>;
          <h2 className='text-2xl font-bold text-white text-center mb-8'>;
            What Our Clients Say;
          </h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {testimonials.map((t, idx) => (<Card;
                key={idx}
                className='bg-zion-blue-dark border-zion-purple/30';
              >;
                <CardContent className='pt-6'>;
                  <p className='text-gray-200 mb-6'>"{t.text}"</p>;
                </CardContent>;
                <CardFooter className='border-t border-zion-purple/20 pt-4'>;
                  <div className='flex items-center'>;
                    {t.avatar && (<Image;
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
className='rounded-full mr-4';
                        loading='lazy';
                      />;
                    )}
                    <div>;
                      <p className='font-semibold text-white'>{t.name}</p>;
                      {t.role && (<p className='text-sm text-gray-400'>{t.role}</p>;
                      )}
                    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
                    </div>;
                  )}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>;
                  <p className="text-gray-600">{benefit.description}</p>;
                </div>;



main
      )}


      {features && features.length > 0 && (;
        <section className="py-16 px-4 bg-gray-50">;
            </div>;
          </div>;
        </section>;
      )}{features && features.length > 0 && (<section className="py-16 px-4 bg-gray-50">;
          <div className="max-w-7xl mx-auto">;
                </div>;))}
            </div>;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;
            </div>
          </div>
        </section>


                  <h3 className="text - xl font - semibold mb - 3">{benefit.title}</h3>;


        </section>)}{stats.length > 0 && (<section className="py - 16 px - 4">;
          <div className="max - w-7xl mx - auto">;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 text - center">;
              {stats.map ((stat, index) => (<div key={index}>;
                  <div className="text - 4xl font - bold text - blue - 600 mb - 2">;
        </section>)}{stats.length > 0 && (<section className=py - 16 px - 4">;
          <div className="max - w-7xl mx - auto>;
            <div className=grid grid - cols - 1 md:grid - cols - 3 gap - 8 text - center">;
              {stats.map ((stat, index) => (<div key={index}>;
                  <div className="text - 4xl font - bold text - blue - 600 mb - 2">;


                  <div className="text-4xl font-bold text-blue-600 mb-2">
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
                  <div className="text-4xl font-bold text-blue-600 mb-2>
        <section className=py-16 px-4">;
          <div className="max-w-7xl mx-auto>;
            <div className=grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
              {stats.map((stat, index) => (<div key={index}>;
                  <div className="text-4xl font-bold text-blue-600 mb-2">;
                    {stat.value}{stats && stats.length > 0 && (<section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
              {stats && stats.map((stat, index) => (<div key={index}>;


                </div>;))}
            </div>;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;
            </div>
          </div>
        </section>

main
      )}


      <section className="py-16 px-4 bg-blue-600">;
            </div>;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;
      )}<section className="py-16 px-4 bg-blue-600">;
        <div className="max-w-4xl mx-auto text-center">;


            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            className=bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block
          >

main


            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block";
          >;
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">;
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">;
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block";
          >;
            {ctaText}</a>;


                  </div>;
                  </div>;
                  </div>;</div>;
                  </div>;
                  </div>;
                  </div>;)}
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>;
                <p className="text-zion-slate-light">{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <h2 className="text-2xl font-bold text-white text-center mb-8">;
            What Our Clients Say;
          </h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {testimonials.map((t, idx) => (<Card;
                key={idx}
                className="bg-zion-blue-dark border-zion-purple/30";
              >;
                <CardContent className="pt-6">;
                  <p className="text-gray-200 mb-6">"{t.text}"</p>;
                </CardContent>;
                <CardFooter className="border-t border-zion-purple/20 pt-4">;
                  <div className="flex items-center">;
                    {t.avatar && (<Image;
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-4";
                        loading="lazy";
                      />;
                    )}
                    <div>


                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;


                    <div>;
                      <p className="font-semibold text-white">{t.name}</p>;
                      {t.role && (<p className="text-sm text-gray-400">{t.role}</p>;
                      )}</div>;
                  </div>;
                </CardFooter>;
              </Card>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;))}
          </div>;
        </div>;
      </section>;
      <section className="py-12 bg-zion-blue-dark text-center">;
        <Button;
          size="lg";
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white";
          asChild;
        >;
          <a href={ctaLink}>{ctaText}</a>;
          <a href={ctaLink}>{ctaText}</a>;
          <a href={ctaLink}>{ctaText}</Link>;
        </Button>;
      </section>;
    </div>;
          <a href={ctaLink}>{ctaText}</a>;
          <a href={ctaLink}>{ctaText}</a>;
          <a href={ctaLink}>{ctaText}</a>;
          <a href={ctaLink}>{ctaText}</Link>;
        </Button>;
      </section>;
    </div>;
  )</div>;
                  </div>;"


    </div>)}}
},<section className='py-12 bg-zion-blue-dark text-center'>;
    </div>)}}}
},<section className=py-12 bg-zion-blue-dark text-center'>;
        <Button;
          size='lg';
          className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white';
          asChild;
        >;
          <a href={ctaLink}>{ctaText}</a>;
        </Button>;
      </section>;
    </div>;
)}";
}
