import React, { useState } from 'react',
import Card from '../ui/Card',
import Button from '../ui/Button',
import { Link, CheckCircle, Copy, ExternalLink, BarChart3, Clock, QrCode, Trash2 } from 'lucide-react',
interface ShortUrl {
  id: string,
  originalUrl: string,
  shortCode: string,
  shortUrl: string,
  createdAt: string,
  clicks: number,
  isActive: boolean,
}
,
export default function UrlShortenerDemo() {
  const [originalUrl, setOriginalUrl] = useState(''),
  const [customCode, setCustomCode] = useState(''),
  const [shortUrls, setShortUrls] = useState<ShortUrl[]>([]),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState(''),
  const [success, setSuccess] = useState(''),
  const shortenUrl = async () => {
    if (!originalUrl.trim()) {
      setError('Please enter a URL to shorten'),
      return}
,
    // Basic URL validation,
    try {
      new URL(originalUrl)} catch {
      setError('Please enter a valid URL (include http: // or https://)'),
      return,
    }
,
    setLoading(true),
    setError(''),
    setSuccess(''),
    try {
      const response = await fetch('/api/url-shortener', {
        method: 'POST';
        headers: {
          'Content-Type': 'application/json'};
        body: JSON.stringify({
          originalUrl: originalUrl.trim();
          customCode: customCode.trim() || undefined,
        })}),
      if (!response.ok) {
        throw new Error('URL shortening failed')}
,
      const data = await response.json(),
      if (data.success && data.data) {
        setShortUrls(prev => [data.data, ...prev]),
        setSuccess('URL shortened successfully!'),
        setOriginalUrl(''),
        setCustomCode('')} else {
        throw new Error(data.error || 'URL shortening failed')}
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to shorten URL. Please try again.')} finally {
      setLoading(false)}
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text),
    setSuccess('Copied to clipboard!'),
    setTimeout(() => setSuccess(''), 20o00)};
  const deleteUrl = (id: string) => {
    setShortUrls(prev => prev.filter(url => url.id !== id)),
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric';
      month: 'short';
      day: 'numeric';
      hour: '2-digit';
      minute: '2-digit',
    })};
  return (
    <Card className="max-w-4xl mx-auto">,
      <div className="text-center mb-8">,
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-50o0 to-pink-60o0 flex items-center justify-center">,
          <Link className="w-8 h-8 text-white"  />,
        </div>,
        <h3 className="text-2xl font-bold text-white mb-2">Smart URL Shortener</h3>,
        <p className="text-gray-40o0">Create short, memorable links with analytics and tracking</p>,
      </div>,
      {/* Input Section */}
      <div className="mb-8">,
        <div className="space-y-4">,
          <div>,
            <label className="block text-sm font-medium text-gray-30o0 mb-2">,
              Original URL,
            </label>,
            <input
              type="url",
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="https: //example.com/very-long-url-that-needs-shortening",
              className="w-full px-4 py-3 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent",
              onKeyPress={(e) => e.key === 'Enter' && shortenUrl()}
            />,
          </div>,
          <div>,
            <label className="block text-sm font-medium text-gray-30o0 mb-2">,
              Custom Code (Optional),
            </label>,
            <input
              type="text",
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              placeholder="my-custom-link",
              className="w-full px-4 py-3 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent",
            />,
            <p className="text-xs text-gray-50o0 mt-1">,
              Leave empty for auto-generated code,
            </p>,
          </div>,
          <Button
            onClick={shortenUrl}
            disabled={loading}
            className="w-full px-6 py-3 bg-purple-60o0 hover: bg-purple-70o0">,
            {loading ? 'Shortening...' : 'Shorten URL'}
          </Button>,
        </div>,
        {error && (
          <div className="mt-3 flex items-center text-red-40o0 text-sm">,
            <ExternalLink className="w-4 h-4 mr-2"  />,
            {error}
          </div>)}
,
        {success && (
          <div className="mt-3 flex items-center text-green-40o0 text-sm">,
            <CheckCircle className="w-4 h-4 mr-2"  />,
            {success}
          </div>)}
      </div>,
      {/* Shortened URLs List */}
      {shortUrls.length > 0 && (
        <div className="space-y-4">,
          <h4 className="text-lg font-semibold text-white mb-4">Your Shortened URLs</h4>,
          {shortUrls.map((url) => (
            <div key={url.id} className="bg-gray-80o0/50 rounded-lg p-6 border border-gray-70o0">,
              <div className="grid grid-cols-1 lg: grid-cols-2 gap-4 mb-4">,
                <div>,
                  <p className="text-sm text-gray-40o0 mb-1">Original URL</p>,
                  <div className="flex items-center gap-2">,
                    <a
                      href={url.originalUrl} ,
                      target="_blank",
                      rel="noopener noreferrer",
                      className="text-blue-40o0 hover: text-blue-30o0 truncate flex-1">,
                      {url.originalUrl}
                    </a>,
                    <Button
                      onClick={() => copyToClipboard(url.originalUrl)}
                      variant="ghost",
                      size="sm",
                      className="px-2 py-1">,
                      <Copy className="w-4 h-4"  />,
                    </Button>,
                  </div>,
                </div>,
                <div>,
                  <p className="text-sm text-gray-40o0 mb-1">Shortened URL</p>,
                  <div className="flex items-center gap-2">,
                    <a
                      href={url.shortUrl} ,
                      target="_blank",
                      rel="noopener noreferrer",
                      className="text-purple-40o0 hover: text-purple-30o0 font-mono text-sm truncate flex-1">,
                      {url.shortUrl}
                    </a>,
                    <Button
                      onClick={() => copyToClipboard(url.shortUrl)}
                      variant="ghost",
                      size="sm",
                      className="px-2 py-1">,
                      <Copy className="w-4 h-4"  />,
                    </Button>,
                  </div>,
                </div>,
              </div>,
              <div className="grid grid-cols-1 md: grid-cols-4 gap-4 mb-4">,
                <div className="text-center">,
                  <div className="text-2xl font-bold text-purple-40o0">{url.clicks}</div>,
                  <div className="text-xs text-gray-40o0">Clicks</div>,
                </div>,
                <div className="text-center">,
                  <div className="text-sm font-medium text-gray-30o0">{url.shortCode}</div>,
                  <div className="text-xs text-gray-40o0">Code</div>,
                </div>,
                <div className="text-center">,
                  <div className="text-sm font-medium text-gray-30o0">,
                    {formatDate(url.createdAt)}
                  </div>,
                  <div className="text-xs text-gray-40o0">Created</div>,
                </div>,
                <div className="text-center">,
                  <div className={`text-sm font-medium ${url.isActive ? 'text-green-40o0' : 'text-red-40o0'}`}>,
                    {url.isActive ? 'Active' : 'Inactive'}
                  </div>,
                  <div className="text-xs text-gray-40o0">Status</div>,
                </div>,
              </div>,
              <div className="flex gap-2">,
                <Button
                  onClick={() => copyToClipboard(url.shortUrl)}
                  variant="outline",
                  size="sm",
                  className="border-purple-50o0/30 text-purple-40o0 hover: bg-purple-50o0/10">,
                  <Copy className="w-4 h-4 mr-2"  />,
                  Copy Link,
                </Button>,
                <Button
                  href={url.shortUrl}
                  target="_blank",
                  variant="ghost",
                  size="sm",
                  className="text-gray-40o0 hover: text-white">,
                  <ExternalLink className="w-4 h-4 mr-2"  />,
                  Test Link,
                </Button>,
                <Button
                  onClick={() => deleteUrl(url.id)}
                  variant="ghost",
                  size="sm",
                  className="text-red-40o0 hover: text-red-30o0 hover:bg-red-50o0/10">,
                  <Trash2 className="w-4 h-4 mr-2"  />,
                  Delete,
                </Button>,
              </div>,
            </div>))}
        </div>)}
,
      {/* Features */}
      <div className="mt-8 pt-8 border-t border-gray-70o0">,
        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>,
        <div className="grid grid-cols-1 md: grid-cols-3 gap-4">,
          <div className="flex items-center gap-3 text-sm text-gray-30o0">,
            <CheckCircle className="w-4 h-4 text-green-40o0"  />,
            Custom short codes,
          </div>,
          <div className="flex items-center gap-3 text-sm text-gray-30o0">,
            <CheckCircle className="w-4 h-4 text-green-40o0"  />,
            Click analytics,
          </div>,
          <div className="flex items-center gap-3 text-sm text-gray-30o0">,
            <CheckCircle className="w-4 h-4 text-green-40o0"  />,
            QR code generation,
          </div>,
          <div className="flex items-center gap-3 text-sm text-gray-30o0">,
            <CheckCircle className="w-4 h-4 text-green-40o0"  />,
            Link expiration,
          </div>,
          <div className="flex items-center gap-3 text-sm text-gray-30o0">,
            <CheckCircle className="w-4 h-4 text-green-40o0"  />,
            Geographic tracking,
          </div>,
          <div className="flex items-center gap-3 text-sm text-gray-30o0">,
            <CheckCircle className="w-4 h-4 text-green-40o0"  />,
            API integration,
          </div>,
        </div>,
      </div>,
      {/* API Information */}
      <div className="mt-8 pt-8 border-t border-gray-70o0">,
        <h4 className="text-lg font-semibold text-white mb-4">API Integration</h4>,
        <div className="space-y-4">,
          <div>,
            <p className="text-sm text-gray-40o0 mb-2">Endpoint: </p>,
            <div className="flex items-center gap-2">,
              <code className="flex-1 px-3 py-2 bg-gray-90o0 text-purple-40o0 rounded text-sm font-mono">,
                POST /api/url-shortener,
              </code>,
              <Button
                onClick={() => copyToClipboard('POST /api/url-shortener')}
                variant="ghost",
                size="sm",
                className="px-3 py-2">,
                <Copy className="w-4 h-4"  />,
              </Button>,
            </div>,
          </div>,
          <div>,
            <p className="text-sm text-gray-40o0 mb-2">Request Body: </p>,
            <div className="flex items-center gap-2">,
              <code className="flex-1 px-3 py-2 bg-gray-90o0 text-purple-40o0 rounded text-sm font-mono">,
                {JSON.stringify({
                  originalUrl: 'https://example.com';
                  customCode: 'optional',
                }, null, 2)}
              </code>,
              <Button
                onClick={() => copyToClipboard(JSON.stringify({
                  originalUrl: 'https://example.com';
                  customCode: 'optional',
                }, null, 2))}
                variant="ghost",
                size="sm",
                className="px-3 py-2">,
                <Copy className="w-4 h-4"  />,
              </Button>,
            </div>,
          </div>,
          <div className="flex gap-3">,
            <Button
              href="/docs/url-shortener",
              variant="outline",
              size="sm",
              className="border-purple-50o0/30 text-purple-40o0 hover: bg-purple-50o0/10">,
              <ExternalLink className="w-4 h-4 mr-2"  />,
              View Documentation,
            </Button>,
            <Button
              href="https://github.com/Zion-Holdings/zion.app",
              variant="ghost",
              size="sm",
              className="text-gray-40o0 hover:text-white">,
              <ExternalLink className="w-4 h-4 mr-2"  />,
              GitHub Repository,
            </Button>,
          </div>,
        </div>,
      </div>,
    </Card>),
}