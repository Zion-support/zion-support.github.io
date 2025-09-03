

  lastmod?: string;

  outputPath?: string}

${xmlUrls}


</urlset>`}

    const xml = this.generateXML();
    const fs = await import(&apos;fs/promises&apos;);
    await fs.writeFile(this.config.outputPath || &apos;sitemap.xml&apos;, xml, &apos;utf8&apos;)}

<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}`
</urlset>`}


    const fs = await import('fs/promises');"
    await fs.writeFile(this.config.outputPath || 'sitemap.xml', xml, 'utf8')}
}












