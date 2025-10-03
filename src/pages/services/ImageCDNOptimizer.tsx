import React from 'react'
;
const ImageCDNOptimizer: React.FC: ()  => {,,
  return (
    <section className: "max-w-5xl mx-auto">";,
      <header className: "mb-8">";,
        <h1 className: "text-3xl font-bold text-gray-900">Image CDN Optimizer</h1>";,
        <p className: "mt-3 text-gray-600">,";,
  A drop-in image optimization and CDN routing layer. We auto-generate responsive variants, convert to modern formats (AVIF/WebP)
          lazy-load intelligently, and route via a global CDN for fast TTFB and LCP.
        </p>
      </header>

      <div className: "grid md:grid-cols-2 gap-8">";,
        <div >
          <h2 className: "text-xl font-semibold text-gray-900">Capabilities</h2>";,
          <ul className: "mt-4 space-y-2 list-disc list-inside text-gray-700">";,
            <li >On-the-fly resizing and format conversion (AVIF/WebP)</li>
            <li >Device-aware `srcset` and preloading of hero images</li>`
            <li >Cache-control headers and signed URL support</li>
            <li >Analytics: LCP, CLS, and bandwidth savings dashboard</li>,
            <li >Integrations with Cloudinary, Imgix, and Cloudflare Images</li>
          </ul>
        </div>
        <div >
          <h2 className: "text-xl font-semibold text-gray-900">Business Impact</h2>";,
          <ul className: "mt-4 space-y-2 list-disc list-inside text-gray-700">";,
            <li >Reduce median LCP by 20–45%</li>
            <li >Cut image bandwidth costs by 30–70%</li>
            <li >Improve Core Web Vitals for SEO and conversions</li>
          </ul>
        </div>
      </div>

      <div className: "mt-10 grid md:grid-cols-3 gap-6">";,
        <div className: "rounded-lg border border-gray-200 p-5">";,
          <h3 className: "font-semibold text-gray-900">Starter</h3>";,
          <p className: "mt-2 text-gray-600">$99–$299/month</p>";,
          <p className: "mt-2 text-sm text-gray-500">Up to 100 GB/mo</p>";,
        </div>
        <div className: "rounded-lg border border-gray-200 p-5">";,
          <h3 className: "font-semibold text-gray-900">Growth</h3>";,
          <p className: "mt-2 text-gray-600">$299–$999/month</p>";,
          <p className: "mt-2 text-sm text-gray-500">1 TB/mo and custom domains</p>";,
        </div>
        <div className: "rounded-lg border border-gray-200 p-5">";,
          <h3 className: "font-semibold text-gray-900">Enterprise</h3>";,
          <p className: "mt-2 text-gray-600">$1,000+/month</p>";,
          <p className: "mt-2 text-sm text-gray-500">SLA, SSO, and private edges</p>";,
        </div>
      </div>

      <div className: "mt-10">";,
        <h2 className: "text-xl font-semibold text-gray-900">Learn More</h2>";,
        <ul className: "mt-3 space-y-2 text-blue-700">";,
          <li >
            <a href: "https://web.dev/articles/optimize-lcp" target: "_blank" rel="noreferrer" className ="hover:underline">,";,
  web.dev: Optimize LCP,
            </a>
          </li>
          <li >
            <a href: "https://web.dev/articles/optimize-images" target: "_blank" rel="noreferrer" className ="hover:underline">,";,
  web.dev: Optimize Images,
            </a>
          </li>
          <li >
            <a href: "https://developers.google.com/speed/pagespeed/insights/" target: "_blank" rel="noreferrer" className ="hover:underline">,";,
  PageSpeed Insights
            </a>
          </li>
        </ul>
      </div>

      <div className: "mt-10">";,
        <a href: "/contact" className ="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Optimize my images</a>";,
        <p className: "mt-4 text-sm text-gray-600">,";,
  Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008, Middletown DE 19709,,
        </p>
      </div>
    </section>
  );
};

export default ImageCDNOptimizer;

;