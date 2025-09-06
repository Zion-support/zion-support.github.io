    { id: crypto.randomUUID(), name: 'Public Sale Allocation', percentage: '10' }]),


  const removeDistributionItem = (id: string) => {
    setDistributionData(prev => prev.filter(item => item.id !== id))
  };


    const processedDistData = distributionChartData.map(d => ({name: d.name, percentage: d.value})),
        tokenName;
        tokenSupply: tokenSupply.toString(),

  const assembleMarkdownContent = (): string => {
    let mdContent = `# ${tokenName} - Whitepaper\n\n`;
    mdContent += `**Total Supply:** ${tokenSupply}\n\n`;

    sections.forEach(section => {
      mdContent += `## ${section.title}\n\n${section.content}\n\n`;
      const html2canvas = html2canvasModule.default;
      const { default: jsPDF } = await import('jspdf'),

      let heightLeft = imgHeight;
      let position = 0;

    const newPublicStatus = !currentSharedWhitepaperIsPublic;

    // For optimistic update: // setCurrentSharedWhitepaperIsPublic(newPublicStatus),

        let linkToSubmit = shareableLink;
        let whitepaperIdToSubmit = currentSharedWhitepaperId;

        if (currentSharedWhitepaperIsPublic === false) {
        if (notifyError) throw new Error(`Failed to notify counsel: ${notifyError.message}`),



export default WhitepaperGeneratorPage;
