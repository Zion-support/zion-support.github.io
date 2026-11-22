"""Read-only contracts for the current catalog, showcase and sitemap sources."""
import importlib.util
import json
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / 'public'
ORIGIN = 'https://ziontechgroup.com'
LANGUAGES = {'en': 'en', 'pt': 'pt-BR', 'es': 'es', 'fr': 'fr', 'de': 'de'}
NS = '{http://www.sitemaps.org/schemas/sitemap/0.9}'

spec = importlib.util.spec_from_file_location('showcase_contract_source', ROOT / 'scripts/render-apps-showcase.py')
showcase = importlib.util.module_from_spec(spec)
spec.loader.exec_module(showcase)


def route(locale, family):
    prefix = '/' if locale == 'en' else '/' + locale + '/'
    if family == 'home':
        return '/en/' if locale == 'en' else prefix
    return prefix + ('apps/' if family == 'catalog' else 'apps-network-showcase/')


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.schemas = []
        self.schema_text = None
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        self.tags.append((tag, attributes))
        if tag == 'script' and attributes.get('type') == 'application/ld+json':
            self.schema_text = ''

    def handle_data(self, data):
        if self.schema_text is not None:
            self.schema_text += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.schema_text is not None:
            self.schemas.append(json.loads(self.schema_text))
            self.schema_text = None

    def find(self, tag):
        return [attributes for name, attributes in self.tags if name == tag]


def validate_page(text, locale, family):
    """Validate real source bytes, independently of the renderer's route helpers."""
    page = Page(text)
    assert [x.get('lang') for x in page.find('html')] == [LANGUAGES[locale]], 'Document language'
    assert len(page.find('h1')) == 1, 'One page heading'
    canonical = ORIGIN + route(locale, family)
    assert [x.get('href') for x in page.find('link') if x.get('rel') == 'canonical'] == [canonical], 'Canonical route'
    alternates = [x for x in page.find('link') if x.get('rel') == 'alternate']
    expected = {language: ORIGIN + route(key, family) for key, language in LANGUAGES.items()}
    expected['x-default'] = ORIGIN + route('en', family)
    assert len(alternates) == 6, 'Six unique language alternates'
    assert {x.get('hreflang'): x.get('href') for x in alternates} == expected, 'Reciprocal route family'
    assert not any(x.get('http-equiv', '').lower() == 'refresh' for x in page.find('meta')), 'No redirect stub'
    ids = [x['id'] for _, x in page.tags if 'id' in x]
    assert len(ids) == len(set(ids)), 'Unique anchor IDs'
    links = [x.get('href', '') for x in page.find('a')]
    for link in links:
        assert not link.startswith('//'), 'No ambiguous internal host'
        if link.startswith('#'):
            assert link[1:] in ids, 'Anchor destination'
    assert route(locale, 'showcase') in links, 'Localized showcase entry'
    # The English legacy homepage/catalog retain their additive showcase
    # promotion; the maintained six-card interface is the linked showcase.
    if locale != 'en' or family == 'showcase':
        assert len(page.find('article')) == 6, 'Six maintained resource cards'
        assert all(link in links for link in showcase.resource_routes(locale)), 'Every localized resource destination'
        assert 'mailto:commercial@ziontechgroup.com' in links, 'Commercial contact'
        assert any(x.get('href') == '/discovery/' and x.get('hreflang') == 'pt-BR' for x in page.find('a')), 'Discovery language disclosure'
        collection = [x for x in page.schemas if x.get('@type') == 'CollectionPage']
        assert len(collection) == 1, 'One collection schema'
        assert collection[0].get('url') == canonical, 'Structured canonical'
        assert collection[0].get('inLanguage') == LANGUAGES[locale], 'Structured language'
        assert [x.get('content') for x in page.find('meta') if x.get('property') == 'og:url'] == [canonical], 'Open Graph route'
    return page


def sitemap_locations(text, kind):
    root = ET.fromstring(text)
    assert root.tag == NS + kind, 'Sitemap document type'
    locations = [node.text for node in root.findall('.//' + NS + 'loc')]
    assert locations and len(locations) == len(set(locations)), 'Nonempty unique sitemap URLs'
    for location in locations:
        parsed = urlsplit(location)
        assert parsed.scheme == 'https' and parsed.netloc == 'ziontechgroup.com', 'First-party HTTPS sitemap'
        assert parsed.path.startswith('/') and not parsed.query and not parsed.fragment, 'Canonical sitemap URL'
    return locations


def validate_sitemaps(index_text, documents):
    children = sitemap_locations(index_text, 'sitemapindex')
    assert {ORIGIN + '/sitemap-0.xml', ORIGIN + '/apps/apps-sitemap.xml'} <= set(children), 'Required sitemap children'
    all_routes = set()
    for child in children:
        assert child in documents, 'Sitemap child source exists'
        all_routes.update(sitemap_locations(documents[child], 'urlset'))
    required = {ORIGIN + route(locale, family) for locale in LANGUAGES for family in ('home', 'catalog', 'showcase')}
    assert required <= all_routes, 'All fifteen maintained routes are indexed'


class CurrentDirectoryContract(unittest.TestCase):
    def source(self, locale='pt', family='catalog'):
        return (PUBLIC / route(locale, family).lstrip('/') / 'index.html').read_text()

    def sitemap_sources(self):
        index = (PUBLIC / 'sitemap.xml').read_text()
        children = sitemap_locations(index, 'sitemapindex')
        return index, {url: (PUBLIC / urlsplit(url).path.lstrip('/')).read_text() for url in children}

    def test_current_fifteen_pages_have_matching_metadata_and_navigation(self):
        for locale in LANGUAGES:
            for family in ('home', 'catalog', 'showcase'):
                with self.subTest(locale=locale, family=family):
                    validate_page(self.source(locale, family), locale, family)

    def test_catalog_renderer_preserves_the_published_route_family(self):
        for locale in ('pt', 'es', 'fr', 'de'):
            self.assertEqual(showcase.render(locale, is_catalog=True), self.source(locale))
        with self.assertRaisesRegex(AssertionError, 'one route family'):
            showcase.render('pt', True, is_catalog=True)

    def test_existing_english_promotions_remain_unique_and_link_all_languages(self):
        for path in ('index.html', 'en/index.html', 'apps/index.html'):
            text = (PUBLIC / path).read_text()
            self.assertEqual(text.count('id="zion-apps-showcase"'), 1, path)
            self.assertEqual(text.count(showcase.promotion('en')), 1, path)

    def test_current_sitemap_index_and_all_maintained_routes(self):
        validate_sitemaps(*self.sitemap_sources())

    def test_current_shared_stylesheet_exists(self):
        stylesheet = PUBLIC / 'assets/css/apps-showcase.css'
        self.assertGreater(stylesheet.stat().st_size, 500)
        for locale in LANGUAGES:
            page = Page(self.source(locale, 'showcase'))
            self.assertTrue(any(x.get('href') == '/assets/css/apps-showcase.css' for x in page.find('link')))

    def test_wrong_language_and_catalog_family_are_rejected(self):
        text = self.source()
        bad_cases = [text.replace('<html lang="pt-BR">', '<html lang="en">'),
                     text.replace('https://ziontechgroup.com/pt/apps/', 'https://ziontechgroup.com/pt/apps-network-showcase/')]
        for bad in bad_cases:
            with self.assertRaises(AssertionError):
                validate_page(bad, 'pt', 'catalog')

    def test_missing_or_duplicate_alternate_is_rejected(self):
        text = self.source()
        alternate = '<link rel="alternate" hreflang="de" href="https://ziontechgroup.com/de/apps/">'
        self.assertIn(alternate, text)
        for bad in (text.replace(alternate, ''), text.replace(alternate, alternate * 2)):
            with self.assertRaises(AssertionError):
                validate_page(bad, 'pt', 'catalog')

    def test_missing_resource_and_broken_anchor_are_rejected(self):
        text = self.source()
        resource = showcase.resource_routes('pt')[0]
        for bad in (text.replace(resource, '/missing-resource/'), text.replace('href="#resources"', 'href="#missing-resources"')):
            with self.assertRaises(AssertionError):
                validate_page(bad, 'pt', 'catalog')

    def test_wrong_structured_url_is_rejected(self):
        text = self.source().replace('"url": "https://ziontechgroup.com/pt/apps/"', '"url": "https://ziontechgroup.com/apps/"')
        with self.assertRaisesRegex(AssertionError, 'Structured canonical'):
            validate_page(text, 'pt', 'catalog')

    def test_index_replacement_or_missing_child_is_rejected(self):
        index, children = self.sitemap_sources()
        with self.assertRaises(AssertionError):
            validate_sitemaps(children[ORIGIN + '/sitemap-0.xml'], children)
        with self.assertRaisesRegex(AssertionError, 'child source'):
            validate_sitemaps(index, {})

    def test_missing_route_and_duplicate_sitemap_entry_are_rejected(self):
        index, children = self.sitemap_sources()
        path = ORIGIN + '/sitemap-0.xml'
        for changed in (children[path].replace(ORIGIN + '/pt/apps-network-showcase/', ORIGIN + '/missing-showcase/'),
                        children[path].replace('</urlset>', '<url><loc>' + ORIGIN + '/en/</loc></url></urlset>')):
            with self.assertRaises(AssertionError):
                validate_sitemaps(index, {**children, path: changed})

    def test_malformed_sitemap_is_rejected(self):
        with self.assertRaises(ET.ParseError):
            sitemap_locations('<urlset>', 'urlset')


if __name__ == '__main__':
    unittest.main()
