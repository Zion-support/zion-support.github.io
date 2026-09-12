#!/usr/bin/env python3
"""Generate sitemap.xml from services catalog and blog posts."""
import json
import os
from datetime import datetime, timezone
from xml.etree.ElementTree import Element, SubElement, ElementTree

BASE_URL = "https://ziontechgroup.com"
SITE_ROOT = "/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support"
SITEMAP_PATH = os.path.join(SITE_ROOT, "public", "sitemap.xml")
SERVICES_JSON = os.path.join(SITE_ROOT, "app", "data", "servicesData.json")
BLOG_DIR = os.path.join(SITE_ROOT, "app", "blog")

today = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# Static routes
static_routes = [
    ("/", "1.0"),
    ("/services", "0.9"),
    ("/blog", "0.8"),
]

# Load services
with open(SERVICES_JSON) as f:
    data = json.load(f)
services = data["services"]

# Discover blog posts
blog_posts = []
if os.path.isdir(BLOG_DIR):
    for entry in sorted(os.listdir(BLOG_DIR)):
        blog_path = os.path.join(BLOG_DIR, entry)
        if os.path.isdir(blog_path) and os.path.exists(os.path.join(blog_path, "page.tsx")):
            blog_posts.append(entry)

# Build XML
urlset = Element("urlset")
urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")

for path, priority in static_routes:
    url = SubElement(urlset, "url")
    SubElement(url, "loc").text = BASE_URL + path
    SubElement(url, "lastmod").text = today
    SubElement(url, "priority").text = priority

for svc in services:
    url = SubElement(urlset, "url")
    SubElement(url, "loc").text = f"{BASE_URL}/service/{svc['slug']}"
    SubElement(url, "lastmod").text = today
    SubElement(url, "priority").text = "0.7"

for slug in blog_posts:
    url = SubElement(urlset, "url")
    SubElement(url, "loc").text = f"{BASE_URL}/blog/{slug}"
    SubElement(url, "lastmod").text = today
    SubElement(url, "priority").text = "0.7"

tree = ElementTree(urlset)
with open(SITEMAP_PATH, "wb") as f:
    tree.write(f, encoding="UTF-8", xml_declaration=True)

total = len(static_routes) + len(services) + len(blog_posts)
print(f"Sitemap generated: {total} URLs")
print(f"  Static: {len(static_routes)}")
print(f"  Services: {len(services)}")
print(f"  Blog: {len(blog_posts)}")
