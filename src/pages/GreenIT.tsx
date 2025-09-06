import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Leaf, Server, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function GreenIT() {
  const greenITSolutions = [
    {
      title: 'Energy-Efficient Hardware',
      description:
        'Modern processors, storage solutions, and networking equipment delivering significant performance improvements while consuming less power.',
      icon: Server,
    },
    {
      title: 'Optimized Cooling Systems',
      description:
        'Advanced cooling technologies that reduce energy consumption while maintaining optimal operating temperatures.',
      icon: Cloud,
    },
    {
      title: 'Renewable Energy Integration',
      description:
        'Solutions for leveraging on-site renewable generation or virtual power purchase agreements to offset carbon footprint.',
      icon: Leaf,
    },
  ];

  return (
    <>
      <SEO
        title='Green IT Solutions - Sustainable Technology'
        description='Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance.'
        keywords='green IT, sustainable technology, eco-friendly computing, energy efficient hardware'
        canonical='https://app.ziontechgroup.com/marketplace/category/green-it'
      />
      <main className='min-h-screen bg-zion-blue pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <GradientHeading>Green IT Solutions</GradientHeading>
            <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>
              Sustainable technology solutions that reduce environmental impact
              without compromising performance
            </p>
          </div>

          <div className='mb-16'>
            <div className='bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <h2 className='text-3xl font-bold text-white mb-6'>
                    Sustainable IT for a Better Future
                  </h2>
                  <p className='text-zion-slate-light text-lg mb-6'>
                    As AI and cloud computing demand grows exponentially, so
                    does the environmental impact of data centers. Our Green IT
                    solutions help organizations implement sustainable practices
                    in their IT infrastructure while maintaining performance and
                    reliability.
                  </p>
                  <p className='text-zion-slate-light text-lg mb-6'>
                    From energy-efficient hardware to renewable energy
                    integration, we offer comprehensive solutions for reducing
                    your carbon footprint.
                  </p>
                  <div className='mt-8'>
                    <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'>                      Explore Green IT Solutions
                    </Button>
                  </div>
                </div>

                      Explore Green IT Solutions
                    </Button>
                  </div>
                </div>

                  />
                </div>
              </div>
            </div>

                    </div>
                    <h3 className='text-white font-medium text-xl text-center mb-3'>
                      {solution.title}
                    </h3>
                    <p className='text-zion-slate-light text-center'>
                      {solution.description}
                    </p>                  </div>
                ))}
              </div>
            </div>

                  </div>
                ))}
              </div>
            </div>

                    <li>• Improved operational efficiency and performance</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>
              Ready to implement Green IT solutions?
            </h2>
            <p className='text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto'>
              Connect with our experts to discuss how we can help you build a
              more sustainable IT infrastructure.
            </p>
            <Button
              className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'
              asChild
            >
              <Link href='/contact'>Contact Our Team</Link>            </Button>

            </Button>

          </div>
        </div>
      </main>
    </>
  );

"