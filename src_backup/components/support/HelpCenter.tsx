


import React, { useState } from react';
import { Input } from '@/components/ui/input;
import { Button } from @/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;
import { HelpCategoryList } from ./HelpCategoryList';
import { HelpArticleList } from './HelpArticleList;
import { HelpArticleView } from ./HelpArticleView';
import { HELP_CATEGORIES } from './help-content;
import { Search } from lucide-react';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCategoryList } from './HelpCategoryList';
import { HelpArticleList } from './HelpArticleList';
import { HelpArticleView } from './HelpArticleView';
import { HELP_CATEGORIES } from './help-content';
import { Search } from 'lucide-react';



import { Search  } from 'lucide-react';
import React, { useState } from 'react';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { HelpCategoryList  } from './HelpCategoryList';
import { HelpArticleList  } from './HelpArticleList';
import { HelpArticleView  } from './HelpArticleView';
import { HELP_CATEGORIES  } from './help-content';
export default function HelpCenter() {const [selectedCategory, setSelectedCategory] = useState<string | null>(null)const [selectedArticle, setSelectedArticle] = useState<string | null>(null)const [searchQuery, setSearchQuery] = useState('')const handleCategorySelect = (categoryId: string) => {setSelectedCategory(categoryId)setSelectedArticle(null)import { Input  } from '@/components / ui / input';
import { Button  } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { HELP_CATEGORIES  } from './help - content';
export default /**;
 * HelpCenter - Function description;
 */;
function HelpCenter() {const [selected_category, setSelectedCategory] = useState < string | null>(null)const [selected_article, setSelectedArticle] = useState < string | null>(null)const [search_query, setSearchQuery] = useState ('')const handleCategorySelect = (category_id: string) =>: any {setSelectedCategory (category_id)setSelectedArticle (null)}
  const handleArticleSelect = (articleId: string) => {setSelectedArticle(articleId)}export default /**;
 * HelpCenter - Function description;
 */;
function HelpCenter() {const [selected_category, setSelectedCategory] = useState < string | null>(null),const [selected_article, setSelectedArticle] = useState < string | null>(null),const [search_query, setSearchQuery] = useState (""),const handleCategorySelect = (category_id: string, ) =>: any {setSelectedCategory (category_id),setSelectedArticle (null)},const handleArticleSelect = (article_id: string, ) =>: any {setSelectedArticle (article_id)},const handleBackToCategories = () =>: any {setSelectedCategory (null)setSelectedArticle (null)}
  const handleBackToArticles = () =>: any {setSelectedArticle (null)}return (class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
          <div className="relative mb-8">;
            <Input;
              placeholder="Search for help articles...";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10";
            />;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
          </div>;
          <Tabs defaultValue="articles" className="mb-8">;
            <TabsList className="w-full grid grid-cols-3 mb-6">;
              <TabsTrigger value="articles">Articles</TabsTrigger>;
              <TabsTrigger value="faq">FAQ</TabsTrigger>;
              <TabsTrigger value="contact">Contact Us</TabsTrigger>;
            </TabsList>;
            <TabsContent value="articles">;
              {!selectedCategory && !selectedArticle && (<HelpCategoryList;
                  categories={HELP_CATEGORIES}import React, { useState } from "react",import { Input } from "@/components/ui/input",import { Button } from "@/components/ui/button",import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",import { HelpCategoryList } from "./HelpCategoryList",import { HelpArticleList } from "./HelpArticleList",import { HelpArticleView } from "./HelpArticleView",import { HELP_CATEGORIES } from "./help-content",export default function HelpCenter() {const [selectedCategory, setSelectedCategory] = useState<string | null>(null)const [selectedArticle, setSelectedArticle] = useState<string | null>(null)const [searchQuery, setSearchQuery]  = useState('')const handleCategorySelect = (categoryId: string) => {setSelectedCategory(categoryId)setSelectedArticle(null)}const handleArticleSelect = (articleId: string) => {setSelectedArticle(articleId)}export default function HelpCenter() {const [selectedCategory, setSelectedCategory] = useState<string | null>(null),const [selectedArticle, setSelectedArticle] = useState<string | null>(null),const [searchQuery, setSearchQuery]  = useState(""),const handleCategorySelect = (categoryId: string,) => {setSelectedCategory(categoryId),setSelectedArticle(null)},const handleArticleSelect = (articleId: string,) => {setSelectedArticle(articleId)},const handleBackToCategories = () => {setSelectedCategory(null)setSelectedArticle(null)}const handleBackToArticles = () => {setSelectedArticle(null)}export default function HelpCenter() {const [selectedCategory, setSelectedCategory] = useState<string | null>(null)const [selectedArticle, setSelectedArticle] = useState<string | null>(null)const [searchQuery, setSearchQuery] = useState("")const handleCategorySelect  = null;return (<>;



  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId),;


            team.;const handleCategorySelect = (categoryId: string) => {setSelectedCategory(categoryId),setSelectedArticle(null)},const handleArticleSelect = (articleId: string) => {setSelectedArticle(articleId)},const handleBackToCategories = () => {setSelectedCategory(null),setSelectedArticle(null)}const handleBackToArticles = () => {setSelectedArticle(null)}return (<>;
      <div className="container mx-auto px-4 py-8">;

            <Input'
              placeholder='Search for help articles...'

            <Input'
              placeholder='Search for help articles...'
            Find answers to common questions or get in touch with our support team.;</p>;<div className='relative mb-8'>;
            <Input;
              placeholder='Search for help articles...';
            <Input
              placeholder=Search for help articles...'
            Find answers to common questions or get in touch with our support team.;</p>;<div className='relative mb-8>;
            <Input;
              placeholder=Search for help articles...';


                    <h3 className='font-medium text-zion-cyan mb-2'>
                    <h3 className=font-medium text-zion-cyan mb-2>
                      How do I hire someone on Zion?
                    </h3>
                    <p className='text-zion-slate-light'>
                      To hire talent on Zion, post a job or project, review
                      matches or applications, interview candidates through our
                      platform, and extend an offer. Our secure payment system
                      protects both parties throughout the engagement.


                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>
                    <p className="text-zion-slate-light">
                      To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement.

                    <h3 className='font-medium text-zion-cyan mb-2'>


            </TabsContent>;
            <TabsContent value="faq">;
              <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>;
                <div className="space-y-6">;
                  <div>;
                    <h3 className='font-medium text-zion-cyan mb-2'>;
                      How do I hire someone on Zion?;
                    </h3>;
                    <p className='text-zion-slate-light'>;
                      To hire talent on Zion, post a job or project, review;
                      matches or applications, interview candidates through our;
                      platform, and extend an offer. Our secure payment system;
                      protects both parties throughout the engagement.;
                    <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3>;
                    <p className="text-zion-slate-light">;
                      Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results.;
                    </p>;
                  </div>;
                  <div>;
                    <h3 className='font-medium text-zion-cyan mb-2'>;
                      What are the payment terms?;
                    </h3>;
                    <p className='text-zion-slate-light'>;
                      Zion offers flexible payment options including;
                      milestone-based payments, hourly rates, or fixed project;
                      fees. Funds are held in escrow until deliverables are;
                      approved, ensuring security for both clients and talent.;
                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>;
                    <p className="text-zion-slate-light">;
                      To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement.;
                    </p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3>;
                    <p className="text-zion-slate-light">;
                      Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent.;
                    </p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3>;
                    <p className="text-zion-slate-light">;
                      You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab.;
                    </p>;
                  </div>;
                </div>;
              </div>;
            </TabsContent>;
            </TabsContent>;<TabsContent value='faq'>;
              <div className='bg-zion-blue-light/20 rounded-lg p-6'>;
                <h2 className='text-xl font-semibold mb-4'>;
                  Frequently Asked Questions;
                </h2>;<div className='space-y-6'>;
                  <div>;
                    <h3 className='font-medium text-zion-cyan mb-2'>;
                      How does the AI matching work?;
                    </h3>;
                    <p className='text-zion-slate-light'>;
                      Our AI matching algorithm analyzes your requirements and;
                      preferences to match you with the most compatible talent;
                      or services. The process takes into account skills,<TabsContent value='articles'>;
              {!selected_category && !selected_article && (<HelpCategoryList;
                  categories={HELP_CATEGORIES}
                  onCategorySelect={handleCategorySelect}
                  search_query={search_query}                />)}
              {selected_category && !selected_article && (<>;
                  <Button;
                    variant='ghost';
                    on_click={handleBackToCategories}
                    className='mb - 4';
                  >;
                    ← All Categories;
                  </Button>;
                  <HelpArticleList;
                    category_id={selected_category}
                    onArticleSelect={handleArticleSelect}
                    search_query={search_query}                  />;
                </>)}
              {selected_article && (<>;
                  <Button;
                    variant='ghost';
                    on_click={handleBackToArticles}
                    className='mb - 4'                  >;
                    ← Back to Articles;
                  </Button>;
                  <HelpArticleView article_id={selected_article} />;
                </>)}
            </TabsContent>;
            <TabsContent value='faq'>;
              <div className='bg - zion - blue - light / 20 rounded - lg p - 6'>;
                <h2 className='text - xl font - semibold mb - 4'>;
                  Frequently Asked Questions;
                </h2>;
                <div className='space - y-6'>;
                  <div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      How does the AI matching work?;
                    </h3>;
                    <p className='text - zion - slate - light'>;
                      Our AI matching algorithm analyzes your requirements and;
                      preferences to match you with the most compatible talent;
                      or services. The process takes into account skills,experience, availability, and past performance to ensure;
                      optimal results.;
                    </p>;
                  </div>;<div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      How do I hire someone on Zion?;
                    </h3>;
                    <p className='text - zion - slate - light'>;To hire talent on Zion, post a job or project, review;
                      matches or applications, interview candidates through our;
                      platform, and extend an offer. Our secure payment system;
                      protects both parties throughout the engagement.;
                    </p>;
                  </div>;<div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      What are the payment terms?;
                    </h3>;
                    <p className='text - zion - slate - light'>;
                      Zion offers flexible payment options including;
                      milestone - based payments, hourly rates, or fixed project;fees. Funds are held in escrow until deliverables are;
                      approved, ensuring security for both clients and talent.;
                    </p>;
                  </div>;<div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      How do I contact support?;
                    </h3>;
                    <p className='text - zion - slate - light'>;
                      You can reach our support team through the chat widget at;
                      the bottom right of any page, by emailing;
                      support@ziontechgroup.com, or by scheduling a call with;our team through the Contact tab.;
                    </p>;
                  </div>;
                </div>;
              </div>;
            </TabsContent>;


            
            <TabsContent value="contact">


                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">
                      <a href="mailto:support@ziontechgroup.com className=text-zion-cyan hover:underline">
                      </a>
                    </div>

                        href='mailto:support@ziontechgroup && ziontechgroup.com'
            </TabsContent>;<TabsContent value="contact">;
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
                <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                  <h2 className="text-xl font-semibold mb-4">Contact Support</h2>;
                  <p className="text-zion-slate-light mb-4">;
                    Our support team is available 24/7 to assist you with any questions or issues.;
                  </p>;
                  <div className="space-y-4">;
                    <div className="flex items-center">;
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">;
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />;
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />;
                        </svg>;
                      </div>;
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">;
                        support@ziontechgroup.com;
                      </a>;
                      </Link>;
                    </div>;
                        href='mailto:support@ziontechgroup && ziontechgroup.com';


                    </div>;<div className='flex items-center'>;
                      <div className='bg-zion-purple/10 p-2 rounded-full mr-3'>;<svg;
                          xmlns='http://www.w3.org/2000/svg';
                          className='h-5 w-5 text-zion-purple';
                          viewBox='0 0 20 20';
                    <div className="flex items-center">;
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">;
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />;
                        </svg>;
                      </div>;
                      <span className='text-zion-slate-light'>;
                        +1 302 464 0950;
                      </span>;
