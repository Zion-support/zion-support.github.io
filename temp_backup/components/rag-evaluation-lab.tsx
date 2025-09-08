

import React from 'react';,
import SEO from '../components/SEO';

import Link from 'next/link';

export default function RAGEvaluationLabPage() {return (<>;}
			<SEO title;}
							{title: 'Dashboards & Reports'}
  desc: 'Team dashboards, API access, and exportable reports.' }
						].map((f) = /> (<div key={f.title} className='rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur' />;
								<h3 className='text-lg font-semibold text-white' />{f.title}</h3>;
								<p className='mt-2 text-sm text-gray-300' />{f.desc}</p>;
							</div>;
						))}

					</div>

  return (
    <>;
      <SEO;
title='RAG Evaluation Lab'
        description='Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates.'
              {
                title: 'Grounding & Faithfulness',
  desc: 'Measure factual consistency, citation quality, and hallucination rate.'}
}
              }
              {<div;}
                key={f && f.title}
                className='rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur' />;
                <h3 className='text-lg font-semibold text-white' />{f && f.title}</h3>;
                <p className='mt-2 text-sm text-gray-300' />{f && f.desc}</p>;
              </div>;

            ))}

          </div>
          <div className='mt-12' />
            <h2 className='text-2xl font-semibold' />Pricing</h2>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6' />
              <div className='rounded-2xl border border-cyan-400/30 p-6' />
                <h3 className='text-xl font-bold' />Starter</h3>
                <p className='mt-2 text-gray-300' />
                  Offline evals, 3 projects, 10k runs/mo.
                </p>
                <p className='mt-4 text-3xl font-bold' />
                  $149;
                  <span className='text-base font-normal text-gray-300' />
                    /mo;
                  </span>
                </p>
              </div>
              <div className='rounded-2xl border border-blue-400/30 p-6' />
                <h3 className='text-xl font-bold' />Growth</h3>
                <p className='mt-2 text-gray-300' />
                  Live canaries, alerts, 10 projects, 100k runs/mo.
                </p>
                <p className='mt-4 text-3xl font-bold' />
                  $449;
                  <span className='text-base font-normal text-gray-300' />
                    /mo;
                  </span>
                </p>
              </div>
              <div className='rounded-2xl border border-purple-400/30 p-6' />
                <h3 className='text-xl font-bold' />Enterprise</h3>
                <p className='mt-2 text-gray-300' />
                  SSO, SOC 2, private networking, custom limits.
                </p>
                <p className='mt-4 text-3xl font-bold' />Custom</p>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-400' />

              Market references: {' ,}
}
              <a;
                className='underline hover:text-cyan-300';
                href='https://humanloop.com';
                target='_blank';
                rel='noreferrer' />

                Humanloop;
              </a>;
              ,{' '}
              <a;
                className='underline hover:text-cyan-300';
                href='https://arize.com';
                target='_blank';
                rel='noreferrer' />

                Arize;
              </a>;
              ,{' '}

              <a;
className='underline hover:text-cyan-300'
                href='https://promptfoo.dev'
                target='_blank'
                rel='noreferrer'
               />
                promptfoo;
              </a>
              .
            </p>
          </div>
          <div className='mt-12 flex flex-wrap items-center gap-4' />
            <Link;
href='/contact'
              className='px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold'
             />
              Start Evaluating;
            </Link>
            <a;
href='mailto:kleber@ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'
             />
              Email: kleber@ziontechgroup.com;
            </a>
            <span className='text-gray-400' />Call: +1 302 464 0950</span>
          </div>
        </div>
      </section>
    </>
  );

