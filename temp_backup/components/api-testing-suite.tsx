const features = [ {
  setIsTesting (true)
//Simulate API testing setTimeout ( () => {
  setTestResults ({
  endpoint: apiEndpoint, status: 'success', responseTime: '245ms', statusCode: 200, tests: [ {
  name: 'Response Time', status: 'pass', value: '245ms', threshold: '<500ms' 
}
{
  name: 'Status Code', status: 'pass', value: '200', threshold: '200' 
}
{
  name: 'Response Format', status: 'pass', value: 'JSON', threshold: 'Valid JSON' 
}
{
  name: 'Authentication', status: 'pass', value: 'Valid', threshold: 'Authenticated' 
}
{
  name: 'Rate Limiting', status: 'pass', value: 'Within limits', threshold: 'No throttling' 
}]
recommendations: [ 'Consider implementing response caching for better performanceMonitor response times during peak usageImplement rate limiting headers for better API documentation' ] 
})
setIsTesting (false) 
}, 3000) 
}
return (<> <Head> <title>API Testing Suite - Zion Tech Group | Comprehensive API Testing & Monitoring Tool</title> <meta name='description' content='Test, monitor, and optimize your APIs with our comprehensive testing suite. Functional, performance, and security testing for REST, GraphQL, and SOAP APIs.' /> <meta property='og:title' content='API Testing Suite - Zion Tech Group' /> <meta property='og:description' content='Comprehensive API testing tool with functional, performance, and security testing capabilities.' /> <meta name='twitter:card' content='summary large image' /> </Head> <div className='relative z-10 container-cursor text-center' > <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6' > <Code className='w-4 h-4 mr-2' /> Professional API Testing </div> <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg' > API Testing Suite </h1> <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12' > Test, monitor, and optimize your APIs with our comprehensive testing suite. Functional, performance
and security testing for REST, GraphQL, and SOAP APIs. Ensure your APIs are reliable, fast, and secure. </p> > {
  isTesting ? (<> <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' /> Testing API... </>) : (<> <Play className='w-5 h-5 mr-2' /> Test API Endpoint </>) 
}</Button> </div> <div className='flex flex-col sm:flex-row gap-6 justify-center' > <Button href='#pricing' variant='outline' size='lg' className='border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white shadow-2xl' > View Pricing </Button> <Button href='/contact' variant='outline' size='lg' className='border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl' > Schedule Demo </Button> </div> </div> </section> Powerful Testing Features </h2> <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' > Our API testing suite provides everything you need to ensure your APIs are reliable, performant, and secure. </p> </div> </div> <div className= {
  `absolute -inset-2 bg-gradient-to-r from-transparent via-$ {
  feature.gradient 
}to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm` 
}/> </div> </p> </div> </div> </Card>) ) 
}</div> </div> </section> Comprehensive Testing Coverage </h2> <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' > We cover all aspects of API testing to ensure your APIs meet the highest standards of quality and reliability. </p> </div> </li>) ) 
}</ul> </Card>) ) 
}</div> </div> </section> API Test Results </h2> <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' > Here's a sample API test result. Get comprehensive insights for your own API endpoints. </p> </div> <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8' > {
  /* Summary Card */ 
}<Card className='border-gradient-indigo text-center' > <h3 className='text-2xl font-bold mb-6 text-white' >Test Summary</h3> <div className='space-y-4' > <div className='flex justify-between items-center' > <span className='text-gray-400' >Status</span> <span className='text-green-400 font-bold' >Success</span> </div> </div> </div> </Card> </div> </div>) ) 
}</div> </Card> </div> <div className='flex justify-between items-center' > <span className='text-gray-400' >Throughput</span> <span className='text-green-400 font-bold' >High</span> </div> <div className='flex justify-between items-center' > <span className='text-gray-400' >Reliability</span> <span className='text-green-400 font-bold' >99.9%</span> </div> <div className='flex justify-between items-center' > <span className='text-gray-400' >Uptime</span> <span className='text-green-400 font-bold' >24/7</span> </div> </div> </Card> </div> </div>) ) 
}</div> </Card> </div> </section>) 
}Simple Pricing </h2> <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' > Choose the API testing plan that best fits your development and testing needs. </p> </div> <Card key= {
  index 
}className= {
  `card-hover border-gradient-indigo $ {
  plan.popular ? 'ring-2 ring-indigo-500 scale-105': '' 
}` 
}style= {
  {
  animationDelay: `$ {
  index * 0.1 
}s` 
}
<section className='section-padding bg-gradient-cursor' />
        <div className='container-cursor' />
          <div className='text-center mb-20' />
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow' />





              Comprehensive Testing Coverage;
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' />
              We cover all aspects of API testing to ensure your APIs meet the;
highest standards of quality and reliability.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8' />
            {testTypes.map((type, index) => (
}
              <Card;}
key={index}
                className='card-hover border-gradient-indigo';
                style={ animationDelay: `${index * 0.1}s` ,
}
               />;
                <h3 className='text-xl font-bold mb-4 text-white' />;
                  {type.name}
                </h3>;
                <p className='text-gray-400 mb-6' />{type.description}</p>;
                <ul className='space-y-2' />;
                  {type.tests.map((test, testIndex) => (<li;}
                      key={testIndex}

                      className='flex items-center text-gray-300'
                     />
                      <CheckCircle className='w-4 h-4 text-indigo-400 mr-3 flex-shrink-0' />

                      {test}
                    </li>;
                  ))}
                </ul>;
              </Card>;
            ))}

          </div>
        </div>
      </section>

      {/* Demo Test Results */}
      {testResults && (

<section className='section-padding bg-gradient-cursor-accent' />
          <div className='container-cursor' />
            <div className='text-center mb-12' />
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow' />
                API Test Results;
              </h2>
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' />
                Here's a sample API test result. Get comprehensive insights for;
your own API endpoints.
              </p>
            </div>
            <div className='grid grid-cols-1 lg: grid-cols-3 gap-8 mb-8' />
}
              {/* Summary Card *,}
}
              <Card className='border-gradient-indigo text-center' />;
                <h3 className='text-2xl font-bold mb-6 text-white' />;
                  Test Summary;
                </h3>;
                <div className='space-y-4' />;
                  <div className='flex justify-between items-center' />;
                    <span className='text-gray-400' />Status</span>;
                    <span className='text-green-400 font-bold' />Success</span>;
                  </div>;
                  <div className='flex justify-between items-center' />;
                    <span className='text-gray-400' />Response Time</span>;
                    <span className='text-indigo-400 font-bold' />;
                      {testResults.responseTime}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center' />;
                    <span className='text-gray-400' />Status Code</span>;
                    <span className='text-green-400 font-bold' />;
                      {testResults.statusCode}
                    </span>;
                  </div>;
                </div>;
              </Card>;
              {/* Test Results */}
<Card className='border-gradient-indigo' />;
                <h3 className='text-2xl font-bold mb-6 text-white' />;
                  Test Results;
                </h3>;
                <div className='space-y-3' />;
                  {testResults.tests.map((test, index) => (<div;}
                      key={index}
                      className='flex items-center justify-between' />

                      <span className='text-gray-300 text-sm' />{test.name}</span>;
                      <div className='flex items-center space-x-2' />;
                        <span;
                          className={`text-xs px-2 py-1 rounded ${test.status === 'pass';
                              ? 'bg-green-500/20 text-green-400';}
                              : 'bg-red-500/20 text-red-400';}
                          }`} />

                          {test.status}

                        </span>
                        <span className='text-xs text-gray-400' />
                          {test.value}
                        </span>
                      </div>
                        </span>                      </div>

                      </div>

                    </div>

                  ))}
                </div>;
              </Card>;
              {/* Performance Metrics */}
<Card className='border-gradient-indigo' />;
                <h3 className='text-2xl font-bold mb-6 text-white' />;
                  Performance Metrics;
                </h3>;
                <div className='space-y-4' />;
                  <div className='flex justify-between items-center' />;
                    <span className='text-gray-400' />Response Time</span>;
                    <span className='text-indigo-400 font-bold' />;
                      {testResults.responseTime}

                    </span>




                  </div>
                  <div className='flex justify-between items-center' />
                    <span className='text-gray-400' />Throughput</span>
                    <span className='text-green-400 font-bold' />High</span>
                  </div>
                  <div className='flex justify-between items-center' />
                    <span className='text-gray-400' />Reliability</span>
                    <span className='text-green-400 font-bold' />99.9%</span>
                  </div>
                  <div className='flex justify-between items-center' />
                    <span className='text-gray-400' />Uptime</span>

                    <span className='text-green-400 font-bold' />24/7</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recommendations */}
<Card className='border-gradient-indigo' />
              <h3 className='text-2xl font-bold mb-6 text-white' />
                Optimization Recommendations;
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4' />
                {testResults.recommendations.map((rec, index) => (}
                  <div key={index} className='flex items-start space-x-3' />
                    <CheckCircle className='w-5 h-5 text-indigo-400 mt-1 flex-shrink-0' />

                    <span className='text-gray-300' />{rec}</span>
                  </div>

                ))}
              </div>;
            </Card>;
          </div>;
        </section>;

      )}

      {/* Pricing Section */}
<section id='pricing' className='section-padding bg-gradient-cursor' />
        <div className='container-cursor' />
          <div className='text-center mb-20' />
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow' />
              Simple Pricing;
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' />
              Choose the API testing plan that best fits your development and;
testing needs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8' />
            {pricing.map((plan, index) => (
      <section id='pricing' className='section-padding bg-gradient-cursor' />;

        <div className='container-cursor' />;
          <div className='text-center mb-20' />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow' />;
              Simple Pricing;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed' />;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8' />;

            {test_types.map ((type, index) => (}
              <Card;}
                key={index}

                className={`card-hover border-gradient-indigo ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}

                style={ animationDelay: `${index * 0.1}s` ,
}
               />;
                {plan.popular && (<div className='absolute -top-4 left-1/2 transform -translate-x-1/2' />;
                    <span className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium' />;
                      Most Popular;
                    </span>;}
                  </div>;}
                )}

<div className='text-center mb-8' />
                  <h3 className='text-2xl font-bold text-white mb-4' />

                    {plan.name}
                  </h3>;
                  <div className='mb - 6' />;
                    <span className='text - 4xl font - bold text - white' />;

                      {plan.price}

                    </span>
                    <span className='text-gray-400' />{plan.period}</span>
                  </div>
                  <p className='text-gray-400' />{plan.description}</p>
                </div>
                <ul className='space-y-4 mb-8' />
                  {plan.features.map((feature, featureIndex) => (}
                    <li;}
key={featureIndex}
                      className='flex items-center text-gray-300'
                     />
                      <CheckCircle className='w-5 h-5 text-indigo-400 mr-3 flex-shrink-0' />

                      {feature}
                    </li>;
                  ))}

                <Button;
href='/contact'
                  size='lg'

                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover: from-indigo-600 hover:to-purple-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                 />
                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
              </Card>

            ),
}
          </div>;
        </div>;
      </section>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
              </Card>;
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover: from-indigo-600 hover:to-purple-700' : 'bg-gray-700 hover:bg-gray-600'} text-white,
}>

                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  href='/contact';
                  size='lg';
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover: from-indigo-600 hover:to-purple-700' : 'bg-gray-700 hover:bg-gray-600'} text-white,
}>

                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />;
              </Card>;
            ))}
      {/* CTA Section */}
      {/* CTA Section */}
<section className='section-padding bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='container-cursor text-center relative z-10' />;
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg' />;
          </h2>;
          <p className='text-responsive-md text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed' />;
            Join thousands of developers and businesses using our API testing;
            suite to ensure their APIs are reliable and performant.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center' />;
      <section className='section-padding bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='container-cursor text-center relative z-10' />;
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg' />;
          </h2>;
          <p className='text-responsive-md text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed' />;
            Join thousands of developers and businesses using our API testing;
            suite to ensure their APIs are reliable and performant.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center' />;

            <Button;
href='/contact'
              size='lg'
            <Button;
href='/contact'
              variant='outline'
              size='lg'

              className='border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl'
             />
              Schedule Demo;
            </Button>
          </div>
        </div>
      </section>
    </>

  );
}

