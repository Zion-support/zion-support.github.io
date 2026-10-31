"""Focused regressions for preserving both published sitemap index files."""

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
        self.secondary = self.output / "sitemap-index.xml"
        self.secondary.write_bytes(RESTORED_7F)
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

    def test_both_indexes_preserve_their_own_entries_and_encodings(self):
        primary_prefix = INDEX_886[:-len(b'</sitemapindex>\n')] + (
            b'<!-- primary only -->\n'
            b'<sitemap id="primary"><loc>https://ziontechgroup.com/primary-only.xml</loc>'
            b'<lastmod>2026-01-02</lastmod></sitemap>\n'
        )
        primary_suffix = b'</sitemapindex>\n'
        secondary_prefix = (
            '<?xml version="1.0" encoding="UTF-16"?>\r\n'
            '<sm:sitemapindex xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9" data-keep="secondary">\r\n'
            '<!-- secondary only; keep formatting -->\r\n'
            '<sm:sitemap id="secondary"><sm:loc>https://ziontechgroup.com/secondary-only.xml</sm:loc>'
            '<sm:lastmod>2025-02-03</sm:lastmod></sm:sitemap>\r\n'
        )
        secondary_suffix = '  </sm:sitemapindex>\r\n<?keep secondary?>\r\n'
        secondary_added = (
            '<sm:sitemap><sm:loc>https://ziontechgroup.com/sitemap-0.xml</sm:loc></sm:sitemap>\r\n'
            '<sm:sitemap><sm:loc>https://ziontechgroup.com/apps/apps-sitemap.xml</sm:loc></sm:sitemap>\r\n'
        )
        self.index.write_bytes(primary_prefix + primary_suffix)
        self.secondary.write_bytes(
            codecs.BOM_UTF16_BE + (secondary_prefix + secondary_suffix).encode("utf-16-be"))
        self.assertEqual(ensure_index(self.output), 4)
        self.assertEqual(self.index.read_bytes(), primary_prefix + ZERO + APPS + primary_suffix)
        self.assertEqual(self.secondary.read_bytes(), codecs.BOM_UTF16_BE + (
            secondary_prefix + secondary_added + secondary_suffix).encode("utf-16-be"))

    def test_both_indexes_are_idempotent_without_rewriting(self):
        for index in [self.index, self.secondary]:
            index.write_bytes(INDEX_886)
            index.chmod(0o640)
        self.assertEqual(ensure_index(self.output), 4)
        before = {}
        for index in [self.index, self.secondary]:
            self.assertEqual(index.read_bytes(), RESTORED_7F)
            self.assertEqual(index.stat().st_mode & 0o777, 0o640)
            os.utime(index, ns=(123456789, 123456789))
            stat = index.stat()
            before[index] = (stat.st_ino, stat.st_mtime_ns, stat.st_mode)
        self.assertEqual(ensure_index(self.output), 0)
        for index in [self.index, self.secondary]:
            stat = index.stat()
            self.assertEqual((stat.st_ino, stat.st_mtime_ns, stat.st_mode), before[index])
            self.assertEqual(index.read_bytes(), RESTORED_7F)
        self.assertEqual(list(self.output.glob(".sitemap-index-*")), [])

    def test_complete_primary_is_not_rewritten_when_secondary_needs_one_reference(self):
        self.index.write_bytes(RESTORED_7F)
        os.utime(self.index, ns=(123456789, 123456789))
        before = self.index.stat()
        prefix = INDEX_886[:-len(b'</sitemapindex>\n')]
        self.secondary.write_bytes(prefix + ZERO + b'</sitemapindex>\n')
        self.assertEqual(ensure_index(self.output), 1)
        self.assertEqual(self.secondary.read_bytes(), RESTORED_7F)
        after = self.index.stat()
        self.assertEqual((after.st_ino, after.st_mtime_ns, after.st_mode),
                         (before.st_ino, before.st_mtime_ns, before.st_mode))
        self.assertEqual(self.index.read_bytes(), RESTORED_7F)

    def test_invalid_secondary_is_rejected_before_either_index_is_replaced(self):
        cases = [
            b'<sitemapindex><broken>',
            b'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
            b'<sitemapindex xmlns="urn:wrong"></sitemapindex>',
            b'<sitemapindex></sitemapindex>',
            b'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>',
            b'',
        ]
        for raw in cases:
            with self.subTest(raw=raw):
                self.secondary.write_bytes(raw)
                with self.assertRaisesRegex(ValueError, "sitemap-index.xml"):
                    ensure_index(self.output)
                self.assertEqual(self.index.read_bytes(), INDEX_886)
                self.assertEqual(self.secondary.read_bytes(), raw)
                self.assertEqual(list(self.output.glob(".sitemap-index-*")), [])

    def test_missing_secondary_is_not_created_or_copied_from_primary(self):
        self.secondary.unlink()
        with self.assertRaisesRegex(ValueError, "sitemap-index.xml"):
            ensure_index(self.output)
        self.assertFalse(self.secondary.exists())
        self.assertEqual(self.index.read_bytes(), INDEX_886)

    def test_symlink_secondary_is_rejected_before_primary_is_replaced(self):
        outside = Path(self.temporary.name) / "outside-secondary.xml"
        outside.write_bytes(INDEX_886)
        self.secondary.unlink()
        self.secondary.symlink_to(outside)
        with self.assertRaisesRegex(ValueError, "sitemap-index.xml"):
            ensure_index(self.output)
        self.assertTrue(self.secondary.is_symlink())
        self.assertEqual(outside.read_bytes(), INDEX_886)
        self.assertEqual(self.index.read_bytes(), INDEX_886)

    def test_cli_success_and_nonzero_exit_for_a_missing_target(self):
        self.secondary.write_bytes(INDEX_886)
        result = subprocess.run([sys.executable, "-B", str(HELPER), str(self.output)],
                                capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("4 required reference(s) added", result.stdout)
        self.assertEqual(self.index.read_bytes(), RESTORED_7F)
        self.assertEqual(self.secondary.read_bytes(), RESTORED_7F)
        self.targets[1].unlink()
        result = subprocess.run([sys.executable, "-B", str(HELPER), str(self.output)],
                                capture_output=True, text=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("required sitemap", result.stderr)
        self.assertEqual(self.index.read_bytes(), RESTORED_7F)
        self.assertEqual(self.secondary.read_bytes(), RESTORED_7F)


if __name__ == "__main__":
    unittest.main()
