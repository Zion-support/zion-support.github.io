


  const distributionChartData: DistributionChartItem[] = React.useMemo(() => {
    return distributionData
      .map(item => ({
        name: item.name || 'Unnamed',
        value: parseFloat(item.percentage) || 0}))
      .filter(item => item.value > 0)

  }, [distributionData]),

  const handleGenerateWhitepaper = async () => {
    setIsLoading(true),
    setError(null),
    setRawDraft(null),

    const processedDistData = distributionChartData.map(d => ({name: d.name, percentage: d.value})),
    const totalPercentage = processedDistData.reduce((sum, item) => sum + item.percentage, 0),
    if (totalPercentage > 100) {
        setError("Total distribution percentage cannot exceed 100%."),
        setIsLoading(false),

        return
    }
     if (totalPercentage < 100 && totalPercentage > 0 && processedDistData.length > 0) {
        setError(`Warning: Total distribution is ${totalPercentage}%. Consider adjusting to sum to 100%.`)
    } else if (totalPercentage === 0 && processedDistData.length > 0 && distributionData.some(d => d.name && d.percentage)) {

        setError("Distribution percentages are all zero or invalid."),
        setIsLoading(false),
        return
    return parsed;
  }, []),;
  const handleDistributionChange = (id: string, field: 'name' | 'percentage', value: string) => {;
    setDistributionData(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  },;
  const addDistributionItem = () => {;
    setDistributionData(prev => [...prev, { id: crypto.randomUUID(), name: '', percentage: '' }]);
  },;
  const removeDistributionItem = (id: string) => {;
    setDistributionData(prev => prev.filter(item => item.id !== id));
  },;
  const distributionChartData: DistributionChartItem[] = React.useMemo(() => {;
    return distributionData;
      .map(item => ({;
        name: item.name || 'Unnamed',;
        value: parseFloat(item.percentage) || 0}));
      .filter(item => item.value > 0);
  }, [distributionData]),;
  const handleGenerateWhitepaper = async () => {;
    setIsLoading(true),;
    setError(null),;
    setRawDraft(null),;
    const processedDistData = distributionChartData.map(d => ({name: d.name, percentage: d.value})),;
    const totalPercentage = processedDistData.reduce((sum, item) => sum + item.percentage, 0),;
    if (totalPercentage > 100) {;
        setError("Total distribution percentage cannot exceed 100%."),;
        setIsLoading(false),;
        return;
    }
     if (totalPercentage < 100 && totalPercentage > 0 && processedDistData.length > 0) {;
        setError(`Warning: Total distribution is ${totalPercentage}%. Consider adjusting to sum to 100%.`);
    } else if (totalPercentage === 0 && processedDistData.length > 0 && distributionData.some(d => d.name && d.percentage)) {;
        setError("Distribution percentages are all zero or invalid."),;
        setIsLoading(false),;
        return;
    }
;
    try {;
      const apiPayload: any = {;
        tokenName,;
        tokenSupply: tokenSupply.toString(),;
        useCases,;
        rewardsLogic,;
        governanceLogic,;
        legalDisclaimers,;
        distributionBreakdown},;
      if (processedDistData.length > 0) {;
        apiPayload.distributionData = processedDistData;
      }
;
      const { data, error: funcError } = await supabase.functions.invoke('generate-whitepaper', {;
        body: apiPayload}),;
      if (funcError) {;
        throw new Error(`Supabase function error: ${funcError.message}`);
      }
      if (data && (data as any).error) {;
        throw new Error(`Generation error: ${(data as any).error}`);
      }
      if (!data || !(data as any).whitepaperDraft) {;
        throw new Error('No whitepaper draft received from the function.');
      }
      setRawDraft((data as any).whitepaperDraft),;
      setSections(parseWhitepaperDraft((data as any).whitepaperDraft));
    } catch (e: any) {;
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating whitepaper' }),;
      setError(e.message || 'An unexpected error occurred.'),;
      setSections([]);
    } finally {;
      setIsLoading(false);
    }
  },;
  const handleSectionContentChange = (id: string, newContent: string) => {;
    setSections(prevSections =>;
      prevSections.map(section =>;
        section.id === id ? { ...section, content: newContent } : section;
      );
    );
  },;
  const assembleMarkdownContent = (): string => {;
    let mdContent = `# ${tokenName} - Whitepaper\n\n`,;
    mdContent += `**Total Supply:** ${tokenSupply}\n\n`,;
    sections.forEach(section => {;
      mdContent += `## ${section.title}\n\n${section.content}\n\n`,;
      if (section.title.toLowerCase().includes('token distribution')) {;
        if (distributionChartData.length > 0) {;
          mdContent += `### Distribution Details\n\n`,;
          distributionChartData.forEach(item => {;
            mdContent += `- **${item.name}:** ${item.value}%\n`;
          }),;
          mdContent += `\n${distributionBreakdown ? `**Additional Notes:** ${distributionBreakdown}\n\n` : ''}`;
        } else if (distributionBreakdown) {;
           mdContent += `**Distribution Notes:** ${distributionBreakdown}\n\n`;
        }
      }
    }),
    return mdContent
  },

  const handleDownloadMarkdown = () => {
    setIsDownloading(true),
    try {
      const markdown = assembleMarkdownContent(),
      const blob = new Blob([markdown], { type: 'text/markdown,charset=utf-8' }),
      const url = URL.createObjectURL(blob),
      const link = document.createElement('a'),
      link.href = url,
      link.download = `${slugify(tokenName || 'whitepaper')}_whitepaper.md`,
      document.body.appendChild(link),
      link.click(),
      document.body.removeChild(link),
      URL.revokeObjectURL(url),

      setError(null)
    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading Markdown' }),
        setError("Failed to download Markdown file. " + e.message)
    } finally {
        setIsDownloading(false)
    }

  },

  const handleDownloadPdf = async () => {
    setIsDownloading(true),
    setError(null),
    if (!previewPanelRef.current) {
      setError("Preview panel is not available. Cannot generate PDF."),
      setIsDownloading(false),
      return
    }),;
    return mdContent;
  },;
  const handleDownloadMarkdown = () => {;
    setIsDownloading(true),;
    try {;
      const markdown = assembleMarkdownContent(),;
      const blob = new Blob([markdown], { type: 'text/markdown,charset=utf-8' }),;
      const url = URL.createObjectURL(blob),;
      const link = document.createElement('a'),;
      link.href = url,;
      link.download = `${slugify(tokenName || 'whitepaper')}_whitepaper.md`,;
      document.body.appendChild(link),;
      link.click(),;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      setError(null);
    } catch (e: any) {;
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading Markdown' }),;
        setError("Failed to download Markdown file. " + e.message);
    } finally {;
        setIsDownloading(false);
    }
  },;
  const handleDownloadPdf = async () => {;
    setIsDownloading(true),;
    setError(null),;
    if (!previewPanelRef.current) {;
      setError("Preview panel is not available. Cannot generate PDF."),;
      setIsDownloading(false),;
      return;
    }
;
    try {;
      // Temporarily ensure the entire preview panel content is visible for capture if it's scrollable internally.;
      // This might involve temporarily changing styles, which is complex and error-prone.;
      // A better approach for very long content is to paginate in jsPDF directly.;
      // For now, we capture what's visible or rely on html2canvas's capabilities with scroll.;
      const html2canvasModule = await import('html2canvas'),;
      const html2canvas = html2canvasModule.default,;
      const { default: jsPDF } = await import('jspdf'),;
      const canvas = await html2canvas(previewPanelRef.current, {;
        scale: 2, // Increase scale for better resolution;
        useCORS: true, // If there are any external images/fonts (though unlikely here);
        logging: true, // For debugging;
        onclone: (documentClone) => {;
            // You might need to re-apply some styles here if they don't transfer well;
            // For example, ensure SVGs from recharts are fully rendered.;
            // This is advanced usage of html2canvas.;
        }
      }),;
      const imgData = canvas.toDataURL('image/png'),;
      const pdf = new jsPDF('pmma4'),;
      const pdfWidth = pdf.internal.pageSize.getWidth(),;
      const pdfHeight = pdf.internal.pageSize.getHeight(),;
      const imgProps = pdf.getImageProperties(imgData),;
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width,;
      let heightLeft = imgHeight,;
      let position = 0,;
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight),;
      heightLeft -= pdfHeight,;
      while (heightLeft > 0) {;
        position = heightLeft - imgHeight, // Or position = position - pdfHeight,;
        pdf.addPage(),;
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight),;
        heightLeft -= pdfHeight;
      }


      pdf.save(`${slugify(tokenName || 'whitepaper')}_whitepaper.pdf`)

    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading PDF' }),
      setError("Failed to download PDF file. " + e.message)
    } finally {
      setIsDownloading(false)
    }

  },

  const handleGenerateShareableLink = async () => {
    if (sections.length === 0) {
      toast.error("Please generate the whitepaper content first before creating a shareable link."),
      return
    }
    setIsSharing(true),
    setError(null),
    setShareableLink(null),
    setCurrentSharedWhitepaperId(null),
    setCurrentSharedWhitepaperIsPublic(null),


  return (
    <div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">
      {/* Left Column: Inputs and Editors */}




        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* ... (Input fields remain the same) ... */}
           <div>
            <label htmlFor="tokenName" className="block text-sm font-medium">Token Name:</label>
            <Input id="tokenName" value={tokenName} onChange={(e) => setTokenName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="tokenSupply" className="block text-sm font-medium">Token Supply:</label>
            <Input id="tokenSupply" value={tokenSupply} onChange={(e) => setTokenSupply(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="useCases" className="block text-sm font-medium">Use Cases:</label>
            <textarea id="useCases" value={useCases} onChange={(e) => setUseCases(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>
          </div>
          <div>
            <label htmlFor="rewardsLogic" className="block text-sm font-medium">Rewards Logic:</label>
            <textarea id="rewardsLogic" value={rewardsLogic} onChange={(e) => setRewardsLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>
          </div>

          {/* Token Distribution Inputs */}
          <div className="space-y-3 p-3 border rounded-md">
            <h2 className="text-lg font-semibold">Token Distribution</h2>
            {distributionData.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Input type="text" placeholder="Category" value={item.name} onChange={(e) => handleDistributionChange(item.id, 'name', e.target.value)} className="flex-grow"/>
                <Input type="number" placeholder="%" value={item.percentage} onChange={(e) => handleDistributionChange(item.id, 'percentage', e.target.value)} className="w-24" min="0" max="100"/>
                <Button variant="ghost" size="icon" onClick={() => removeDistributionItem(item.id)} aria-label="Remove"><Trash2 className="h-4 w-4"/></Button>
              </div>


                type="button"
                onClick={handleSubmitToCounsel}
                disabled={isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant="default"
                size="lg"
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
                <Send className="mr-2 h-4 w-4" />
                {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}

            </Button>;

          )}
           {isSubmittingToCounsel && <p className="text-center text-sm text-blue-600">Submitting to counsel...</p>}

        </form>

        {/* Section Editors */}
        {sections.length > 0 && (

              <WhitepaperSectionEditor
                key={section.id}
                title={section.title}
                content={section.content}


            <div className="mt-6 p-3 border rounded-md">
            <Button onClick={() => setShowRawDraft(!showRawDraft)} variant="outline" size="sm" className="w-full">
                {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text
            </Button>
            {showRawDraft && (
                <pre className="mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded">
                {rawDraft}

                </pre>;
            )}
            </div>;

        )}
      </div>
      {/* Right Column: Preview Panel - Pass ref here */}


      <div id="preview-panel-content" ref={previewPanelRef} className="md:w-1/2 lg:w-3/5 xl:w-2/3 p-1">
        <WhitepaperPreviewPanel
            sections={sections}
            distributionChartData={distributionChartData}
            tokenName={tokenName}
            tokenSupply={tokenSupply}

        />;
      </div>;
    </div>;
  );
},;
export default WhitepaperGeneratorPage;

