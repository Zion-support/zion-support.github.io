
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \'react\'; const NewsPage = () => { return ( <> <SEOHead title=\"News - Zion Tech Group\" description=\"Latest news and updates from Zion Tech Group.\" /> <main className=\"max-w-5xl mx-auto px-4 py-16\"> <h1 className=\"text-4xl font-bold mb-6\">News</h1> <p className=\"text-gray-600\">Stay tuned for company announcements,product updates,and industry insights.</p> </main> </> )}; export default NewsPage;
const React from "react"; const NewsPage = () => { return ( <> <SEOHead title="News - Zion Tech Group" description="Latest news and updates from Zion Tech Group." /> <main className="max-w-5xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold mb-6">News</h1> <p className="text-gray-600">Stay tuned for company announcements,product updates,and industry insights.</p> </main> </> )}; export default NewsPage;'"'";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import _React from 'react'; const NewsPage = () => { return ( <> <SEOHead title="News - Zion Tech Group" description="Latest news and updates from Zion Tech Group." /> <main className="max-w-5xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold mb-6">News</h1> <p className="text-gray-600">Stay tuned for company announcements,product updates,and industry insights.</p> </main> </> )}; export default NewsPage;
import _React from 'react'; const NewsPage = () => { return ( <> <SEOHead title="News - Zion Tech Group" description="Latest news and updates from Zion Tech Group." /> <main className="max-w-5xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold mb-6">News</h1> <p className="text-gray-600">Stay tuned for company announcements,product updates,and industry insights.</p> </main> </> )}; export default NewsPage;
import _React from 'react'; const NewsPage = () => { return ( <> <SEOHead title="News - Zion Tech Group" description="Latest news and updates from Zion Tech Group." /> <main className="max-w-5xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold mb-6">News</h1> <p className="text-gray-600">Stay tuned for company announcements,product updates,and industry insights.</p> </main> </> )}; export default NewsPage;