
<<<<<<< HEAD
    { id: crypto.randomUUID(), name: 'Public Sale Allocation', percentage: '10' }]),

<<<<<<< HEAD


  const removeDistributionItem = (id: string) => {
    setDistributionData(prev => prev.filter(item => item.id !== id))
  };


<<<<<<< HEAD


  const assembleMarkdownContent = (): string => {
    let mdContent = `# ${tokenName} - Whitepaper\n\n`;
    mdContent += `**Total Supply:** ${tokenSupply}\n\n`;

    sections.forEach(section => {
      mdContent += `## ${section.title}\n\n${section.content}\n\n`;

<<<<<<< HEAD
      const html2canvas = html2canvasModule.default;
      const { default: jsPDF } = await import('jspdf'),



<<<<<<< HEAD
    const newPublicStatus = !currentSharedWhitepaperIsPublic;

    // For optimistic update: // setCurrentSharedWhitepaperIsPublic(newPublicStatus),
<<<<<<< HEAD



<<<<<<< HEAD
        if (currentSharedWhitepaperIsPublic === false) {
<<<<<<< HEAD

        if (notifyError) throw new Error(`Failed to notify counsel: ${notifyError.message}`),
<<<<<<< HEAD


<<<<<<< HEAD


export default WhitepaperGeneratorPage;

