
import Link from 'next/link';
const SitemapPage: React.FC = () => {
    return (
    <div>
        <div>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-gray-300">Complete directory of all pages on our website</p>
          </header>

          <div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">All Pages</h2>
              <div>
                {pages.map((page, index) => (
                  <div>
                    <Link
                      href={page.url}
                      className="text-blue-400 hover:text-blue-300 font-medium block mb-2"
                    >
                      {page.title}
                    </Link>
                    <div>
                      Priority: {page.priority}
                    </div>
                    <div>
                      {page.url}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Link
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>);
}
export default SitemapPage