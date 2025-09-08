


interface MainLayoutProps {
interface MainLayoutProps {;

  children: ReactNode, title?: string,  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;}





const MainLayout: React.FC<MainLayoutProps> = ({
  children
  title = 'Zion Tech Group - Technology Solutions'
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.'
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions'
  canonical
  noindex = false
  nofollow = false
  type = 'website'
  image = '/og-image.jpg'
  url







  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />



const MainLayout: React.FC < MainLayoutProps> = ({
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
</>
  );
}



  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  nofollow?: boolean;

  ogImage = '/og-image.jpg';
}) => {return (;
const MainLayout: React.FC<MainLayoutProps> = ({;


  return (
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;




        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        {image && <meta name="twitter:image" content={image} />}
      </Head>;
        <Header />;
        <main className="flex-1">;
      </Head>;
        <Header />;
        <main className="flex-1">;

      </Head    />;
        <Header    />;"
        <main className=\"flex-1\"    />;


        <Header    />;"
        <main className=\"flex - 1\"    />;



<   />)export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',og_image = '/og - image.jpg';
}) => {return (<>;}





    </>);

}


export default MainLayout;
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {childre}
} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> ;
}


export default MainLayout;
    <   />)}

export default MainLayout;

ursor/automate-test-improve-and-merge-code-646c;"
        <meta name=\"keywords\" content={keywords}    />;"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;
      </Head>;
import React, { ReactNode } from 'react';
import Footer from './Footer';
import SEOHead from '../SEOHead';


  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website', 
  noindex = false, 
  nofollow = false, 
  canonical 

}: MainLayoutProps) {




