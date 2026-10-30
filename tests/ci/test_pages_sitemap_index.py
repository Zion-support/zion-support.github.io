"""Focused regressions for preserving the published sitemap index bytes."""

import codecs
import hashlib
import os
from pathlib import Path
import runpy
import subprocess
import sys
import tempfile
import unittest
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
HELPER = ROOT / "scripts" / "ensure-pages-sitemap-index.py"
MODULE = runpy.run_path(str(HELPER))
ensure_index = MODULE["ensure_index"]
NAMESPACE = MODULE["NAMESPACE"]

INDEX_886 = (
    b'<?xml version="1.0" encoding="UTF-8"?>\n'
    b'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    b'  <sitemap><loc>https://ziontechgroup.com/sitemap-1.xml</loc><lastmod>2026-10-30</lastmod></sitemap>\n'
    b'  <sitemap><loc>https://ziontechgroup.com/sitemap-2.xml</loc><lastmod>2026-10-30</lastmod></sitemap>\n'
    b'</sitemapindex>\n'
)
ZERO = b'<sitemap><loc>https://ziontechgroup.com/sitemap-0.xml</loc></sitemap>\n'
APPS = b'<sitemap><loc>https://ziontechgroup.com/apps/apps-sitemap.xml</loc></sitemap>\n'
RESTORED_7F = INDEX_886[:-len(b'</sitemapindex>\n')] + ZERO + APPS + b'</sitemapindex>\n'
PAYLOAD = (
    b'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    b'<url><loc>https://ziontechgroup.com/</loc></url></urlset>\n'
)


def blob_sha(raw):
    return hashlib.sha1(b"blob " + str(len(raw)).encode() + b"\0" + raw).hexdigest()


class PagesSitemapIndexTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.output = Path(self.temporary.name) / "out"
        (self.output / "apps").mkdir(parents=True)
        self.index = self.output / "sitemap.xml"
        self.index.write_bytes(INDEX_886)
        self.targets = [self.output / "sitemap-0.xml", self.output / "apps/apps-sitemap.xml"]
        for target in self.targets:
            target.write_bytes(PAYLOAD)

    def test_exact_886_bytes_are_restored_to_the_reviewed_version(self):
        self.assertEqual(blob_sha(INDEX_886), "2415dd2a43b0f71a03b3c57b588e94352c32eadb")
        self.assertEqual(blob_sha(RESTORED_7F), "c74f10388f8032ae1febf25d1880b2402dfb33f6")
        self.assertEqual(ensure_index(self.output), 2)
        self.assertEqual(self.index.read_bytes(), RESTORED_7F)
        self.assertEqual(len(MODULE["locations"](ET.fromstring(self.index.read_bytes()))), 4)
        for target in self.targets:
            self.assertEqual(target.read_bytes(), PAYLOAD)

    def test_extra_entries_lastmod_attributes_and_comments_are_preserved(self):
        prefix = (
            b'<?xml version="1.0" encoding="UTF-8"?>\n'
            b'<sitemapindex data-owner="preserve" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            b'<!-- a literal </sitemapindex> is not the closing element -->\n'
            b'<sitemap id="service"><loc>https://ziontechgroup.com/services.xml</loc><lastmod>2024-03-02</lastmod></sitemap>\n'
            b'<sitemap><loc>https://ziontechgroup.com/services.xml</loc></sitemap>\n'
        )
        suffix = b'  </sitemapindex>\n<!-- trailing </sitemapindex> -->\n<?keep unchanged?>\n'
        self.index.write_bytes(prefix + suffix)
        self.assertEqual(ensure_index(self.output), 2)
        self.assertEqual(self.index.read_bytes(), prefix + ZERO + APPS + suffix)
        self.assertEqual(self.index.read_bytes().count(b"https://ziontechgroup.com/services.xml"), 2)

    def test_complete_index_is_idempotent_without_rewriting(self):
        self.index.write_bytes(RESTORED_7F)
        self.index.chmod(0o640)
        os.utime(self.index, ns=(123456789, 123456789))
        before = self.index.stat()
        self.assertEqual(ensure_index(self.output), 0)
        after = self.index.stat()
        self.assertEqual(self.index.read_bytes(), RESTORED_7F)
        self.assertEqual((after.st_ino, after.st_mtime_ns, after.st_mode),
                         (before.st_ino, before.st_mtime_ns, before.st_mode))
        self.assertEqual(list(self.output.glob(".sitemap-index-*")), [])

    def test_only_the_missing_reference_is_added(self):
        prefix = INDEX_886[:-len(b'</sitemapindex>\n')]
        for present, absent in [(ZERO, APPS), (APPS, ZERO)]:
            with self.subTest(absent=absent):
                self.index.write_bytes(prefix + present + b'</sitemapindex>\n')
                self.assertEqual(ensure_index(self.output), 1)
                self.assertEqual(self.index.read_bytes(), prefix + present + absent + b'</sitemapindex>\n')

    def test_invalid_xml_wrong_root_and_wrong_namespace_do_not_write(self):
        cases = [
            b'<sitemapindex><broken>',
            b'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
            b'<sitemapindex xmlns="urn:wrong"></sitemapindex>',
            b'<sitemapindex></sitemapindex>',
            b'',
        ]
        for raw in cases:
            with self.subTest(raw=raw):
                self.index.write_bytes(raw)
                with self.assertRaises((ValueError, ET.ParseError)):
                    ensure_index(self.output)
                self.assertEqual(self.index.read_bytes(), raw)

    def test_missing_or_empty_targets_fail_even_when_the_index_is_complete(self):
        for target in self.targets:
            for state in ["missing", "empty"]:
                with self.subTest(target=target.name, state=state):
                    self.index.write_bytes(RESTORED_7F)
                    for item in self.targets:
                        item.write_bytes(PAYLOAD)
                    if state == "missing":
                        target.unlink()
                    else:
                        target.write_bytes(b"")
                    with self.assertRaises(ValueError):
                        ensure_index(self.output)
                    self.assertEqual(self.index.read_bytes(), RESTORED_7F)
                    if state == "missing":
                        self.assertFalse(target.exists())
                    else:
                        self.assertEqual(target.read_bytes(), b"")

    def test_a_missing_index_is_not_created(self):
        self.index.unlink()
        with self.assertRaises(ValueError):
            ensure_index(self.output)
        self.assertFalse(self.index.exists())

    def test_prefixed_namespace_bom_crlf_and_existing_whitespace(self):
        prefix = (
            codecs.BOM_UTF8
            + b'<?xml version="1.0" encoding="UTF-8"?>\r\n'
            + b'<sm:sitemapindex xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns="urn:other" data-keep="yes">\r\n'
            + b'<sm:sitemap><sm:loc> \t https://ziontechgroup.com/sitemap-0.xml \t </sm:loc></sm:sitemap>\r\n'
            + b'<!-- </sm:sitemapindex> -->\r\n'
        )
        suffix = b'  </sm:sitemapindex>\r\n<!-- trailing -->\r\n'
        inserted = b'<sm:sitemap><sm:loc>https://ziontechgroup.com/apps/apps-sitemap.xml</sm:loc></sm:sitemap>\r\n'
        self.index.write_bytes(prefix + suffix)
        self.assertEqual(ensure_index(self.output), 1)
        self.assertEqual(self.index.read_bytes(), prefix + inserted + suffix)
        self.assertEqual(MODULE["locations"](ET.fromstring(self.index.read_bytes())),
                         {url for _relative, url in MODULE["REQUIRED"]})
        self.assertEqual(ensure_index(self.output), 0)

    def test_utf16_encoding_is_preserved(self):
        current = INDEX_886.decode().replace('encoding="UTF-8"', 'encoding="UTF-16"')
        restored = RESTORED_7F.decode().replace('encoding="UTF-8"', 'encoding="UTF-16"')
        for encoding, bom in [("utf-16-le", codecs.BOM_UTF16_LE), ("utf-16-be", codecs.BOM_UTF16_BE)]:
            with self.subTest(encoding=encoding):
                self.index.write_bytes(bom + current.encode(encoding))
                self.assertEqual(ensure_index(self.output), 2)
                self.assertEqual(self.index.read_bytes(), bom + restored.encode(encoding))

    def test_self_closing_root_is_rejected_without_rewriting(self):
        raw = b'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>'
        self.index.write_bytes(raw)
        with self.assertRaises(ValueError):
            ensure_index(self.output)
        self.assertEqual(self.index.read_bytes(), raw)

    def test_directory_target_is_rejected(self):
        self.targets[0].unlink()
        self.targets[0].mkdir()
        with self.assertRaises(ValueError):
            ensure_index(self.output)
        self.assertEqual(self.index.read_bytes(), INDEX_886)

    def test_symlink_index_is_rejected_without_touching_its_target(self):
        outside = Path(self.temporary.name) / "outside.xml"
        outside.write_bytes(INDEX_886)
        self.index.unlink()
        self.index.symlink_to(outside)
        with self.assertRaises(ValueError):
            ensure_index(self.output)
        self.assertTrue(self.index.is_symlink())
        self.assertEqual(outside.read_bytes(), INDEX_886)

    def test_cli_success_and_nonzero_exit_for_a_missing_target(self):
        result = subprocess.run([sys.executable, "-B", str(HELPER), str(self.output)],
                                capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("2 required reference(s) added", result.stdout)
        self.targets[1].unlink()
        result = subprocess.run([sys.executable, "-B", str(HELPER), str(self.output)],
                                capture_output=True, text=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("required sitemap", result.stderr)
        self.assertEqual(self.index.read_bytes(), RESTORED_7F)


if __name__ == "__main__":
    unittest.main()
