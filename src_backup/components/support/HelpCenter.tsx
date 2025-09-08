


import React, { useState } from react';
import { Input } from '@/components/ui/input;
import { Button } from @/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;
import { HelpCategoryList } from ./HelpCategoryList';
import { HelpArticleList } from './HelpArticleList;
import { HelpArticleView } from ./HelpArticleView';
import { HELP_CATEGORIES } from './help-content;
import { Search } from lucide-react';

origin/cursor/automate-test-improve-and-merge-code-2533
export default function HelpCenter() {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)'
  const [searchQuery, setSearchQuery] = useState()
  const handleCategorySelect = (categoryId: string) => {}
    setSelectedCategory(categoryId);
    setSelectedArticle(null)';
import { Input } from '@/components / ui / input';
import { Button } from @/components / ui / button';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components / ui / tabs;'
import { HelpArticleList } from './HelpArticleList';
import { HelpArticleView } from ./HelpArticleView';'
import { HELP_CATEGORIES } from ./help - content;'
export default /**;
 * HelpCenter - Function description;
 */
  const [selected_category, setSelectedCategory] = useState < string | null>(null);
  const [selected_article, setSelectedArticle] = useState < string | null>(null);
  const [search_query, setSearchQuery] = useState ('');
  const handleCategorySelect = (category_id: string) =>: any {}
    setSelectedCategory (category_id);
    setSelectedArticle (null);
  }
  const handleArticleSelect = (articleId: string) => {}
    setSelectedArticle(articleId)
  }

 */
  const handleCategorySelect = (category_id: string, ) =>: any {}
    setSelectedCategory (category_id),
    setSelectedArticle (null);

  },

    setSelectedCategory (null);
    setSelectedArticle (null);

  }
  const handleBackToArticles = () =>: any {}
    setSelectedArticle (null);
  }

  return (

  constructor(props) {}
    super(props);
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error(Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React, { useState } from react;'
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs';'
import { HelpCategoryList } from ./HelpCategoryList;'
import { HelpArticleView } from './HelpArticleView';

          <div className="relative mb-8>
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className=pl-10"
            />"
            <Search className=absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 />
          </div>
          "
          <Tabs defaultValue="articles className=mb-8">"
            <TabsList className=w-full grid grid-cols-3 mb-6>"
              <TabsTrigger value="articles>Articles</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value=contact">Contact Us</TabsTrigger>
            </TabsList>
            "
            <TabsContent value=articles>
              {!selectedCategory && !selectedArticle && (
                <HelpCategoryList;
                  categories={HELP_CATEGORIES} "
import React, { useState } from "react,
import { Input } from "@/components/ui/input",
import { Button } from @/components/ui/button","
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs,"
import { HelpCategoryList } from "./HelpCategoryList,
import { HelpArticleList } from "./HelpArticleList",
import { HelpArticleView } from ./HelpArticleView","
import { HELP_CATEGORIES } from ./help-content,'
import { Search } from lucide-react;

export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const handleCategorySelect = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>;


      <div className='container mx-auto px-4 py-8'>;
        <div className=max-w-4xl mx-auto>;
          <h1 className='text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent'>;
            Help Center;
          </h1>;
          <p className=text-zion-slate-light mb-6>;
            Find answers to common questions or get in touch with our support;
            team.;


    setSelectedArticle(null);

  },
  const handleArticleSelect = (articleId: string) => {

    setSelectedArticle(articleId);
  },
  const handleBackToCategories = () => {
    setSelectedCategory(null),
    setSelectedArticle(null);
  }
  const handleBackToArticles = () => {
    setSelectedArticle(null);
  }
  return (;


    <>;"
      <div className="container mx-auto px-4 py-8>;
        <div className="max-w-4xl mx-auto">;
          <h1 className=text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Help Center;
          </h1>;"
          <p className="text-zion-slate-light mb-6">;
            Find answers to common questions or get in touch with our support team.;

          </p>;

          <div className='relative mb-8'>;

            <Input'
              placeholder='Search for help articles...'

              value={searchQuery}
              onChange={e => setSearchQuery(e && e.target.value)}'
              className=pl-10            />;'
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 />;
          </div>;

    <>;
      <div className='container mx - auto px - 4 py - 8'>;
        <div className=max - w-4xl mx - auto'>;'
          <h1 className=text - 3xl font - bold mb - 2 bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent>;
            Help Center;
          </h1>;'
          <p className='text - zion - slate - light mb - 6>;
            Find answers to common questions or get in touch with our support;
            team.;
          </p>;
          <div className='relative mb - 8'>;

              <TabsTrigger value="contact">Contact Us</TabsTrigger>;
            </TabsList>;
            <TabsContent value=articles">;
              {!selectedCategory && !selectedArticle && (;
                <HelpCategoryList;
                  categories={HELP_CATEGORIES}

                  onCategorySelect={handleCategorySelect}
                  searchQuery={searchQuery}                />
              )}

              {selectedCategory && !selectedArticle && (
                <>

              {selectedCategory && !selectedArticle && (;
                <>;
                  <Button
                    variant=ghost'
                    onClick={handleBackToCategories}'
                    className=mb-4
                  >
                    ← All Categories;
                  </Button>
                  <HelpArticleList;
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}                  />
                </>

              )}

              {selectedArticle && (;
                <>;

                  <Button'
                    variant='ghost
                    onClick={handleBackToArticles}
                    className='mb-4'                  >

              {selectedCategory && !selectedArticle && (
                <>
                  <Button"
                    variant=ghost
                    onClick={handleBackToCategories}"
                    className="mb-4
                  >
                    ← All Categories;
                  </Button>
                  <HelpArticleList;
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}
                  />;
                </>;
              )}

              {selectedArticle && (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleBackToArticles}
                    className=mb-4"
                  >

                  </Button>
                  <HelpArticleView articleId={selectedArticle} />
                </>
              )}
            </TabsContent>

            <TabsContent value="faq>
              <div className=bg-zion-blue-light/20 rounded-lg p-6">

                <h2 className="text-xl font-semibold mb-4>Frequently Asked Questions</h2>
                
                <div className="space-y-6">



                    <p className=text-zion-slate-light>
                      Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results.

                    </p>

                  </div>

                  <div>


                      What are the payment terms?
                    </h3>
                    <p className='text-zion-slate-light'>
                      Zion offers flexible payment options including
                      milestone-based payments, hourly rates, or fixed project
                      fees. Funds are held in escrow until deliverables are
                      approved, ensuring security for both clients and talent.                    </p>

                  </div>

                    <p className="text-zion-slate-light">
                      You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>



              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                <div className=bg-zion-blue-light/20 rounded-lg p-6>
                  <h2 className="text-xl font-semibold mb-4">Contact Support</h2>

                  <p className=text-zion-slate-light mb-4>
                    Our support team is available 24/7 to assist you with any questions or issues.
                  </p>
                  "
                  <div className="space-y-4>
                    <div className="flex items-center">
                      <div className=bg-zion-purple/10 p-2 rounded-full mr-3">"
                        <svg xmlns=http://www.w3.org/2000/svg className="h-5 w-5 text-zion-purple" viewBox=0 0 20 20 fill="currentColor">
                          <path d=M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />"
                          <path d=M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z />

                        </svg>
                      </div>"



                      </Link>

                    </div>

                        href='mailto:support@ziontechgroup && ziontechgroup.com'

                        className=text-zion-cyan hover:underline>;
                        support@ziontechgroup && ziontechgroup.com;
                      </a>;


                    </div>;
'
                    <div className='flex items-center>;
                      <div className='bg-zion-purple/10 p-2 rounded-full mr-3'>;

                        <svg
                          xmlns=http://www.w3.org/2000/svg''
                          className=h-5 w-5 text-zion-purple'
                          viewBox='0 0 20 20'

                    <div className=flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3>
                        <svg xmlns=http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple viewBox=0 0 20 20" fill="currentColor>

                          <path d=M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />

                        </svg>

                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light>
                    Open Live Chat;
                  </Button>
                </div>
                
                <div className="bg-zion-blue-light/20 rounded-lg p-6">
                  <h2 className=text-xl font-semibold mb-4">Feedback & Suggestions</h2>"
                  <p className=text-zion-slate-light mb-4>
                    We value your input and are constantly looking to improve our platform.
                  </p>
                  "
                  <form className="space-y-4>

                    <div>

                      />
                    </div>

                    <Button className=w-full bg-zion-cyan hover:bg-zion-cyan/80">

                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80">