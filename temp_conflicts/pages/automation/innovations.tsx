import type {_NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Innovations: NextPage = () => {_const _functions = [
    {
      name: 'Repository Sync (Auto Pages)', _id: 'auto_repo_sync', _desc: 'Periodically commits a timestamped auto-update page to the repo to verify pipeline health and trigger deploys.'},
    {_name: 'Link Health Monitor', _id: 'link_health', _desc: 'Checks key routes and commits a JSON report with availability and status codes.'},
    {_name: 'Homepage Promo Rotator', _id: 'promo_rotator', _desc: 'Rotates highlighted content and commits data for the homepage to use.'},
    {_name: 'Site Index Builder', _id: 'site_index', _desc: 'Crawls key pages, _extracts internal links, _and commits a site index JSON.'},
    {_name: 'SEO Audit', _id: 'seo_audit', _desc: 'Audits TSX pages for Head/title/meta description and commits an SEO report.'},
    {_name: 'Daily Status Reporter', _id: 'daily_status_report', _desc: 'Composes a daily markdown report from automation outputs and commits it.'},
    {_name: 'Link Health Issue Manager', _id: 'issue_link_health', _desc: 'Opens or updates a GitHub issue when link health failures are detected.'},
    {_name: 'PageSpeed Audit', _id: 'pagespeed_audit', _desc: 'Runs Google PageSpeed Insights for key routes and commits performance scores.'},
    {_name: 'Security Headers Audit', _id: 'security_headers_audit', _desc: 'Checks for recommended security headers across key routes and commits a report.'},
    {_name: 'Stale Content Issues', _id: 'stale_content_issues', _desc: 'Flags stale blog posts and opens/updates a GitHub issue with details.'},
    {_name: 'Sitemap from Site Index', _id: 'sitemap_from_index', _desc: 'Generates sitemap.xml from the site index and commits to the repository.'},
    {_name: 'OG/Twitter Meta Audit', _id: 'og_meta_audit', _desc: 'Audits OG and Twitter meta tags on key routes and commits a JSON report.'},
    {_name: 'RSS Generator', _id: 'rss_generator', _desc: 'Generates an RSS feed from blog pages and commits it to public/feed.xml.'},
    {_name: 'Broken Image Checker', _id: 'broken_image_checker', _desc: 'Scans for broken images across key routes and commits a report.'},
    {_name: 'Commit Changelog', _id: 'commit_changelog', _desc: 'Summarizes recent commits into a daily changelog markdown file.'},
    {_name: 'Deep Link Health (from Site Index)', _id: 'deep_link_health_from_index', _desc: 'Checks all discovered links from the site index and commits a deep health report; optionally opens an issue on high failure ratio.'},
    {_name: 'Sitemap Submitter', _id: 'sitemap_submitter', _desc: 'Submits the sitemap to Google and Bing, _committing a ping log to the repository.'},
    {_name: 'OSV Dependency Audit', _id: 'osv_dependency_audit', _desc: 'Audits npm dependencies via OSV API and commits a security report.'},
    {_name: 'External Link Audit', _id: 'external_link_audit', _desc: 'Audits external links discovered across key pages and commits a health report; opens an issue if failure rate is high.'},
    {_name: 'Automation Summary', _id: 'automation_summary', _desc: 'Aggregates the latest outputs from multiple automations into a single summary JSON.'},
    {_name: 'README Badges Updater', _id: 'readme_badges_updater', _desc: 'Updates README.md badges to reflect the latest automation status.'}
  ];

  return (
    <div>
      <Head>
        <title>Autonomous Innovations - Zion</title>
        <meta name="description" content="Autonomous cloud automations running on schedule with Netlify Functions." />
      </Head>
      <main>
        <h1 className="text-3xl font-bold mb-4">Autonomous Cloud Automations</h1>
        <p className="text-gray-700 mb-8">These automations run in the cloud on a schedule, without human interaction. You can also invoke them manually:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {_functions.map(f => (
            <div key={f.id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{_f.name}</h2>
              <p className="text-gray-600 mb-4">{_f.desc}</p>
              <a href={_`/.netlify/functions/${f.id}`} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Run now</a>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/">
            <a className="text-indigo-700 font-semibold hover:underline">← Back to Home</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Innovations;