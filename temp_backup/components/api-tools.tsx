export default function ApiToolsPage () {
  const apiTools = [ {
  category: 'Development'
color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
gradient: 'from-blue-400 to-cyan-500'
website: 'https://codegen.api'
docs: 'https://docs.codegen.api'
github: 'https://github.com/codegen-api'
status: 'Live'
users: '15, 000+'
rating: 4.8
responseTime: '<100ms' 
}
category: 'Data'
color: 'bg-gradient-to-br from-green-500 to-emerald-600'
gradient: 'from-green-400 to-emerald-500'
website: 'https://datasync.api'
docs: 'https://docs.datasync.api'
github: 'https://github.com/datasync-api'
status: 'Live'
users: '8, 500+'
rating: 4.9
responseTime: '<50ms' 
}
category: 'Location'
color: 'bg-gradient-to-br from-purple-500 to-pink-600'
gradient: 'from-purple-400 to-pink-500'
website: 'https://geo.api'
docs: 'https://docs.geo.api'
github: 'https://github.com/geo-api'
status: 'Live'
users: '12, 000+'
rating: 4.7
responseTime: '<75ms' 
}
                    </div>;
                    <div;
                        {tool.title}
                      </h3 />;
                      <div className='flex items - center space - x-2' />;
                        <div className='flex items - center text - yellow - 400' />;
                          <Star className='w - 4 h - 4 fill - current' />;
                          <span className='ml - 1 text - sm font - medium' />;

                            {tool.rating}

                          </span>
                        </div>
                        <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium' />

                          {tool.status}
                        </span>;
                      </div>;
                    </div>;
<p className='text-gray-400 leading-relaxed mb-6' />;
                      {tool.description}

                    </p>
                    <div className='grid grid-cols-3 gap-4 mb-6' />
                      <div className='text-center p-3 bg-gray-800/50 rounded-lg' />
                        <div className='text-lg font-bold text-indigo-400' />

                          {tool.users}
                        </div>;
                        <div className='text - xs text - gray - 500' />Users</div>;
                      </div>;
                      <div className='text - center p - 3 bg - gray - 800 / 50 rounded - lg' />;
                        <div className='text - lg font - bold text - green - 400' />;
                          {tool.response_time}
                        </div>;
                        <div className='text - xs text - gray - 500' />Response</div>;
                      </div>;
                      <div className='text - center p - 3 bg - gray - 800 / 50 rounded - lg' />;
                        <div className='text - sm font - medium text - gray - 300' />;
                          Starting at;
                        </div>;
                        <div className='text - lg font - bold text - green - 400' />;
                          {tool.pricing.free}
                          <li;
                            key={featureIndex}
                            className='flex items-center text-gray-300 text-sm' />;
                            <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />;
                            {feature}
                          </li>;
                        ))}
                      <Button;
                        href={tool && tool.website}

                        variant='primary'
                        size='sm'

                        className='bg-indigo-600 hover:bg-indigo-700'
                       />
                        <ExternalLink className='w-4 h-4 mr-2' />
                        Visit API;
                      </Button>

                        className='bg-indigo-600 hover:bg-indigo-700'>;
                        <ExternalLink className='w-4 h-4 mr-2' />;
                        Visit API;
                      </Button>;

                      <Button;
href={tool.docs}
variant='outline';
                        size='sm';
                        className='border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400' />

                        <BookOpen className='w-4 h-4 mr-2' />;
                        Documentation;
                      </Button>;
                      <Button;
                        href={tool.github}
variant='ghost';
                        size='sm';
                        className='text-gray-400 hover:text-indigo-400' />

                        <Github className='w-4 h-4 mr-2' />;
                        GitHub;
                      </Button>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}

          </div>
        </div>
      </section>
      {/* Developer Resources */}
<section className='py-24 bg-gray-800' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' />
          <div className='text-center mb-20' />
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white' />


              Developer Resources;
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto' />
              Everything you need to get started and build amazing applications;
with our APIs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8' />
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30' />
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6' />
                <BookOpen className='w-8 h-8 text-indigo-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-4' />
                Comprehensive Documentation;
              </h3>
              <p className='text-gray-400 mb-6' />
                Detailed API references, code examples, and integration guides;
for every service.
              </p>
              <Button href='/docs' variant='outline' size='sm' />
                Explore Docs;
                <ArrowRight className='w-4 h-4 ml-2' />              </Button>
            </Card>
            <Card className='text-center border border-gray-700 hover: border-indigo-500/30' />
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6' />
                <Play className='w-8 h-8 text-indigo-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-4' />
                Interactive Playground;
              </h3>
              <p className='text-gray-400 mb-6' />
                Test APIs directly in your browser with our interactive testing;
environment.
              </p>
              <Button href='/playground' variant='outline' size='sm' />
                Try Playground;
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </Card>
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30' />
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6' />
                <Github className='w-8 h-8 text-indigo-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-4' />
                Open Source SDKs;
              </h3>
              <p className='text-gray-400 mb-6' />
                Official SDKs and client libraries for popular programming;
languages and frameworks.
              </p>
              <Button href='/sdk' variant='outline' size='sm' />
                Browse SDKs;
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section *,}
}
category: 'Integration'
color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
gradient: 'from-yellow-400 to-orange-500'
website: 'https://webhookhub.api'
docs: 'https://docs.webhookhub.api'
github: 'https://github.com/webhookhub-api'
status: 'Live'
users: '9, 200+'
rating: 4.8
responseTime: '<30ms' 
}
category: 'AI/ML'
color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
gradient: 'from-indigo-400 to-purple-500'
website: 'https://nlp.api'
docs: 'https://docs.nlp.api'
github: 'https://github.com/nlp-api'
status: 'Live'
users: '11, 500+'
rating: 4.7
responseTime: '<200ms' 
}
category: 'Analytics'
color: 'bg-gradient-to-br from-teal-500 to-cyan-600'
gradient: 'from-teal-400 to-cyan-500'
website: 'https://analytics.api'
docs: 'https://docs.analytics.api'
github: 'https://github.com/analytics-api'
status: 'Live'
users: '7, 800+'
rating: 4.8
responseTime: '<150ms' 
}
category: 'Security'
color: 'bg-gradient-to-br from-gray-500 to-slate-600'
gradient: 'from-gray-400 to-slate-500'
website: 'https://encrypt.api'
docs: 'https://docs.encrypt.api'
github: 'https://github.com/encrypt-api'
status: 'Live'
users: '4, 200+'
rating: 4.9
responseTime: '<20ms' 
}]
const filteredTools = selectedCategory === 'All' ? apiTools : apiTools.filter (tool => tool.category === selectedCategory)
return (<> <Head> <title>API Tools & Developer Services | Zion Tech Group - Powerful APIs for Modern Applications</title> <meta name='description' content='Discover powerful APIs and developer tools for building modern applications. From AI-powered code generation to real-time data synchronization, we provide the building blocks you need.' /> <meta property='og:title' content='API Tools & Developer Services | Zion Tech Group' /> <meta property='og:description' content='Powerful APIs and developer tools for modern applications. AI, security, analytics, and more.' /> <meta name='twitter:card' content='summary large image' /> </Head> <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center' > <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6' > <Terminal className='w-4 h-4 mr-2' /> Developer-First API Solutions </div> <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight' > Powerful API Tools & Services </h1> <p className='text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed' > Build faster, scale better, and deliver more with our comprehensive collection of developer APIs. Each tool is designed for performance, reliability, and ease of integration. </p> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-6 py-3 rounded-full font-medium transition-all duration-300 $ {
  selectedCategory === category ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> </div> </section> </div> <div className= {
  `absolute -inset-2 bg-gradient-to-r from-transparent via-$ {
  tool.gradient 
}to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm` 
}/> </div> </span> </div> </div> </li>) ) 
}</ul> <div className='flex flex-wrap gap-3' > <Button > <ExternalLink className='w-4 h-4 mr-2' /> Visit API </Button> <Button > <BookOpen className='w-4 h-4 mr-2' /> Documentation </Button> <Button > <Github className='w-4 h-4 mr-2' /> GitHub </Button> </div> </div> </div> </Card>) ) 
}</div> </div> </section> Developer Resources </h2> <p className='text-xl text-gray-400 max-w-3xl mx-auto' > Everything you need to get started and build amazing applications with our APIs. </p> </div> <div className='grid grid-cols-1 md:grid-cols-3 gap-8' > <Card className='text-center border border-gray-700 hover:border-indigo-500/30' > <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6' > <BookOpen className='w-8 h-8 text-indigo-400' /> </div> <h3 className='text-xl font-bold text-white mb-4' >Comprehensive Documentation</h3> <p className='text-gray-400 mb-6' > Detailed API references, code examples, and integration guides for every service. </p> <Button href='/docs' variant='outline' size='sm' > Explore Docs <ArrowRight className='w-4 h-4 ml-2' /> </Button> </Card> <Card className='text-center border border-gray-700 hover:border-indigo-500/30' > <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6' > <Play className='w-8 h-8 text-indigo-400' /> </div> <h3 className='text-xl font-bold text-white mb-4' >Interactive Playground</h3> <p className='text-gray-400 mb-6' > Test APIs directly in your browser with our interactive testing environment. </p> <Button href='/playground' variant='outline' size='sm' > Try Playground <ArrowRight className='w-4 h-4 ml-2' /> </Button> </Card> <Card className='text-center border border-gray-700 hover:border-indigo-500/30' > <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6' > <Github className='w-8 h-8 text-indigo-400' /> </div> <h3 className='text-xl font-bold text-white mb-4' >Open Source SDKs</h3> <p className='text-gray-400 mb-6' > Official SDKs and client libraries for popular programming languages and frameworks. </p> <Button href='/sdk' variant='outline' size='sm' > Browse SDKs <ArrowRight className='w-4 h-4 ml-2' /> </Button> </Card> </div> </div> </section> <section className='py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden'> <div className='absolute inset-0 bg-[radial-gradient (circle, rgba (255, 255, 255, 0.1) 1px, transparent 1px) ] bg-[size: 20px 20px] opacity-10' /> <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'> <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'> text-xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed'> Start integrating our APIs today and join thousands of developers building the future. </p> <div className=' flex flex-col sm:flex-row gap-6 justify-center'> <Button href=' /contact'variant=' secondary'size=' lg'className=' bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl'> Get API Access <ArrowRight className=' w-5 h-5 ml-2'/> </Button> <Button href=' /docs'variant=' outline'size=' lg'className=' border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl' > View Documentation </Button> </div> </div> </section> </>) 
}