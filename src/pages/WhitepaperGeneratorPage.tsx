

  const assembleMarkdownContent = (): string => {
    let mdContent = `# ${tokenName} - Whitepaper\n\n`;
    mdContent += `**Total Supply:** ${tokenSupply}\n\n`;

    sections.forEach(section => {
      mdContent += `## ${section.title}\n\n${section.content}\n\n`;

