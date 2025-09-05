import React, {_useState, _useEffect, _useCallback} from 'react';
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel'; // Import the new preview panel


interface WhitepaperSection {_id: string;
  title: string;
  content: string;}

interface DistributionItem {_id: string;
  name: string;
  percentage: string;}

interface DistributionChartItem {_name: string;
    value: number;}

const _COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#FF00AA', '#00AAAA', '#AAAA00'];

// Helper for slugifying filenames
const _slugify = (text: string): string => {_return text.toString().toLowerCase()
    .replace(/\s+/g, _'-')           // Replace spaces with -
    .replace(/[^\w-]+/g, _'')       // Remove all non-word chars
    .replace(/--+/g, _'-')         // Replace multiple - with single -
    .replace(/^-+/, _'')             // Trim - from start of text
    .replace(/-+$/, _'');            // Trim - from end of text};


const WhitepaperGeneratorPage: React.FC = () => {_const [tokenName, _setTokenName] = useState('My Awesome Token');
  const [tokenSupply, _setTokenSupply] = useState<string>('1000000000');
  const [useCases, _setUseCases] = useState('To facilitate transactions and reward users in our innovative freelance AI marketplace. It will be used for payments, _staking for dispute resolution, _and accessing premium features.');
  const [rewardsLogic, _setRewardsLogic] = useState('Users earn tokens by completing projects and participating in platform governance. A percentage of transaction fees is burned, _creating a deflationary pressure. Staking rewards are distributed weekly.');
  const [distributionBreakdown, _setDistributionBreakdown] = useState('');
  const [governanceLogic, _setGovernanceLogic] = useState('Token holders can vote on platform upgrades, _fee structures, _and policy changes. Staking tokens increases voting power. A decentralized council oversees proposal implementation.');
  const [legalDisclaimers, _setLegalDisclaimers] = useState('This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. The token is a utility token and should not be considered an investment. Please consult with a legal professional in your jurisdiction.');

  const [distributionData, _setDistributionData] = useState<DistributionItem[]>([
    { id: window.crypto.randomUUID(), _name: 'Team & Advisors', _percentage: '15'},
    {_id: window.crypto.randomUUID(), _name: 'Private Sale Investors', _percentage: '20'},
    {_id: window.crypto.randomUUID(), _name: 'Ecosystem Development Fund', _percentage: '35'},
    {_id: window.crypto.randomUUID(), _name: 'Community Rewards & Airdrops', _percentage: '20'},
    {_id: window.crypto.randomUUID(), _name: 'Public Sale Allocation', _percentage: '10'}]);

  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isSubmittingToCounsel, setIsSubmittingToCounsel] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shareableLink, setShareableLink] = useState<string | null>(null);
  const [currentSharedWhitepaperId, setCurrentSharedWhitepaperId] = useState<string | null>(null); // For public/private toggle
  const [currentSharedWhitepaperIsPublic, setCurrentSharedWhitepaperIsPublic] = useState<boolean | null>(null); // For public/private toggle
  const [rawDraft, setRawDraft] = useState<string | null>(null);
  const [sections, setSections] = useState<WhitepaperSection[]>([]);
  const [showRawDraft, setShowRawDraft] = useState(false);

  const _previewPanelRef = React.useRef<HTMLDivElement>(null);


  useEffect__(() => {_if(error && !isLoading && !isDownloading && !isSharing && !isSubmittingToCounsel) setError(null);}, [tokenName, tokenSupply, useCases, rewardsLogic, distributionData, governanceLogic, legalDisclaimers, sections]);


  const _parseWhitepaperDraft = useCallback((draft: string): WhitepaperSection[] => {_if (!draft) return [];
    const _sectionRegex = /(?:^|\n)(?:##\s*(.*?)\s*\n|^\*\*(.*?):\*\*\s*\n)([\s\S]*?)(?=\n(?:##\s|\*\*.+:\*\*)|$)/g;
    const parsed: WhitepaperSection[] = [];
    let match;
    let _idCounter = 0;
    while ((match = sectionRegex.exec(draft)) !== null) {
      const _title = (match[1] || match[2] || `Section ${idCounter + 1}`).trim();
      const _content = (match[3] || '').trim();
      parsed.push({_id: `section-${idCounter++}-${_title.toLowerCase().replace(/\s+/g, _'-')}`, title, content });
    }
    if (parsed.length === 0 && draft.trim().length > 0) {_parsed.push({ id: 'section-0-full-draft', _title: 'Full Draft', _content: draft.trim()});
    }
    return parsed;
  }, []);

  const _handleDistributionChange = (_id: string, _field: 'name' | 'percentage', _value: string) => {_setDistributionData(prev => prev.map(item => item.id === id ? { ...item, _[field]: value} : item));
  };

  const _addDistributionItem = () => {_setDistributionData(prev => [...prev, _{ id: window.crypto.randomUUID(), _name: '', _percentage: ''}]);
  };

  const _removeDistributionItem = (_id: string) => {_setDistributionData(prev => prev.filter(item => item.id !== id));};

  const distributionChartData: DistributionChartItem[] = React.useMemo__(() => {_return distributionData
      .map(item => ({
        name: item.name || 'Unnamed', _value: parseFloat(item.percentage) || 0}))
      .filter(item => item.value > 0);
  }, [distributionData]);

  const _handleGenerateWhitepaper = async () => {_setIsLoading(true);
    setError(null);
    setRawDraft(null);

    const _processedDistData = distributionChartData.map(d => ({name: d.name, _percentage: d.value}));
    const _totalPercentage = processedDistData.reduce(_(sum, _item) => sum + item.percentage, 0);
    if (totalPercentage > 100) {_setError("Total distribution percentage cannot exceed 100%.");
        setIsLoading(false);
        return;}
     if (totalPercentage < 100 && totalPercentage > 0 && processedDistData.length > 0) {_setError(`Warning: Total distribution is ${totalPercentage}%. Consider adjusting to sum to 100%.`);
    } else if (totalPercentage === 0 && processedDistData.length > 0 && distributionData.some(d => d.name && d.percentage)) {_setError("Distribution percentages are all zero or invalid.");
        setIsLoading(false);
        return;}

    try {_const apiPayload: unknown = {
        tokenName, _tokenSupply: tokenSupply.toString(), _useCases, _rewardsLogic, _governanceLogic, _legalDisclaimers, _distributionBreakdown};

      if (processedDistData.length > 0) {_apiPayload.distributionData = processedDistData;}

      const {_data, _error: funcError} = await supabase.functions.invoke('generate-whitepaper', {_body: apiPayload});

      if (funcError) {_throw new Error(`Supabase function error: ${funcError.message}`);
      }
      if (_data && (data as any).error) {_throw new Error(`Generation error: ${(data as any).error}`);
      }
      if (!data || !(data as any).whitepaperDraft) {_throw new Error('No whitepaper draft received from the function.');}
      setRawDraft((data as any).whitepaperDraft);
      setSections(parseWhitepaperDraft((data as any).whitepaperDraft));
    } catch (e: unknown) {_logErrorToProduction(e instanceof Error ? e.message : String(e), _e instanceof Error ? e : undefined, _{ message: 'Error generating whitepaper'});
      setError(e.message || 'An unexpected error occurred.');
      setSections([]);
    } finally {_setIsLoading(false);}
  };

  const _handleSectionContentChange = (_id: string, _newContent: string) => {_setSections(prevSections =>
      prevSections.map(section =>
        section.id === id ? { ...section, _content: newContent} : section
      )
    );
  };

  const _assembleMarkdownContent = (): string => {_let _mdContent = `# ${tokenName} - Whitepaper\n\n`;
    mdContent += `**Total Supply:** ${_tokenSupply}\n\n`;

    sections.forEach(section => {_mdContent += `## ${section.title}\n\n${_section.content}\n\n`;
      if (section.title.toLowerCase().includes('token distribution')) {_if (distributionChartData.length > 0) {
          mdContent += `### Distribution Details\n\n`;
          distributionChartData.forEach(item => {
            mdContent += `- **${item.name}:** ${_item.value}%\n`;
          });
          mdContent += `\n${_distributionBreakdown ? `**Additional Notes:** ${distributionBreakdown}\n\n` : ''}`;
        } else if (distributionBreakdown) {_mdContent += `**Distribution Notes:** ${distributionBreakdown}\n\n`;
        }
      }
    });
    return mdContent;
  };

  const _handleDownloadMarkdown = () => {_setIsDownloading(true);
    try {
      const _markdown = assembleMarkdownContent();
      const _blob = new Blob([markdown], _{ type: 'text/markdown;charset=utf-8'});
      const _url = window.URL.createObjectURL(blob);
      const _link = document.createElement('a');
      link.href = url;
      link.download = `${_slugify(tokenName || 'whitepaper')}_whitepaper.md`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setError(null);
    } catch (e: unknown) {_logErrorToProduction(e instanceof Error ? e.message : String(e), _e instanceof Error ? e : undefined, _{ message: 'Error downloading Markdown'});
        setError("Failed to download Markdown file. " + e.message);
    } finally {_setIsDownloading(false);}
  };

  const _handleDownloadPdf = async () => {_setIsDownloading(true);
    setError(null);
    if (!previewPanelRef.current) {
      setError("Preview panel is not available. Cannot generate PDF.");
      setIsDownloading(false);
      return;}

    try {_// Temporarily ensure the entire preview panel content is visible for capture if it's scrollable internally.
      // This might involve temporarily changing styles, _which is complex and error-prone.
      // A better approach for very long content is to paginate in jsPDF directly.
      // For now, _we capture what's visible or rely on html2canvas's capabilities with scroll.

      const _html2canvasModule = await import('html2canvas');
      const _html2canvas = html2canvasModule.default;
      const { default: jsPDF} = await import('jspdf');

      const _canvas = await html2canvas(previewPanelRef.current, {_scale: 2, _// Increase scale for better resolution
        useCORS: true, _// If there are any external images/fonts (though unlikely here)
        logging: true, _// For debugging
        onclone: (_documentClone) => {
            // You might need to re-apply some styles here if they don't transfer well
            // For example, _ensure SVGs from recharts are fully rendered.
            // This is advanced usage of html2canvas.}
      });

      const _imgData = canvas.toDataURL('image/png');
      const _pdf = new jsPDF('p', 'mm', 'a4');
      const _pdfWidth = pdf.internal.pageSize.getWidth();
      const _pdfHeight = pdf.internal.pageSize.getHeight();

      const _imgProps = pdf.getImageProperties(imgData);
      const _imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let _heightLeft = imgHeight;
      let _position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {_position = heightLeft - imgHeight; // Or position = position - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, _'PNG', _0, _position, _pdfWidth, _imgHeight);
        heightLeft -= pdfHeight;}

      pdf.save(`${_slugify(tokenName || 'whitepaper')}_whitepaper.pdf`);

    } catch (e: unknown) {_logErrorToProduction(e instanceof Error ? e.message : String(e), _e instanceof Error ? e : undefined, _{ message: 'Error downloading PDF'});
      setError("Failed to download PDF file. " + e.message);
    } finally {_setIsDownloading(false);}
  };

  const _handleGenerateShareableLink = async () => {_if (sections.length === 0) {
      toast.error("Please generate the whitepaper content first before creating a shareable link.");
      return;}
    setIsSharing(true);
    setError(null);
    setShareableLink(null);
    setCurrentSharedWhitepaperId(null);
    setCurrentSharedWhitepaperIsPublic(null);
    try {_const _whitepaperPayload = {
        tokenName, _tokenSupply, _sections, _distributionChartData, _distributionBreakdown};
      const {_data: response, _error: funcError} = await supabase.functions.invoke('create-shared-whitepaper', {_body: whitepaperPayload});

      if (funcError) throw new Error(`Supabase function error: ${_funcError.message}`);
      if (_!response) throw new Error('No response received from create-shared-whitepaper function');
      if ((response as any).error) throw new Error(`Error from create-shared-whitepaper: ${_(response as any).error}`);
      if (!(response as any).id) throw new Error('Failed to get ID for shareable link.');

      const _link = `${_window.location.origin}/whitepaper/view/${_(response as any).id}`;
      setShareableLink(link);
      setCurrentSharedWhitepaperId((response as any).id);
      setCurrentSharedWhitepaperIsPublic((response as any).is_public);
      toast.success("Shareable link generated!");
    } catch (e: unknown) {_logErrorToProduction(e instanceof Error ? e.message : String(e), _e instanceof Error ? e : undefined, _{ message: 'Error generating shareable link'});
      setError("Failed to generate shareable link: " + e.message);
      toast.error("Failed to generate shareable link.");
    } finally {_setIsSharing(false);}
  };

  const _handleTogglePublicStatus = async () => {_if (!currentSharedWhitepaperId || currentSharedWhitepaperIsPublic === null) {
        toast.error("No shareable whitepaper selected or status is unknown.");
        return;}
    // Optimistically update UI, or wait for response for certainty
    const _newPublicStatus = !currentSharedWhitepaperIsPublic;

    // For optimistic update:
    // setCurrentSharedWhitepaperIsPublic(newPublicStatus);

    try {_const { data: response, _error: funcError} = await supabase.functions.invoke('set-shared-whitepaper-public-status', {_body: { whitepaperId: currentSharedWhitepaperId, _isPublic: newPublicStatus}});
        if (funcError) throw new Error(`Supabase function error: ${_funcError.message}`);
        if (_!response) throw new Error('No response received from set-shared-whitepaper-public-status function');
        if ((response as any).error) throw new Error(`Error from set-shared-whitepaper-public-status: ${_(response as any).error}`);

        setCurrentSharedWhitepaperIsPublic((response as any).is_public); // Update with actual status from DB
        toast.success(`Whitepaper is now ${_(response as any).is_public ? 'public' : 'private'}.`);

    } catch (e: unknown) {_logErrorToProduction(e instanceof Error ? e.message : String(e), _e instanceof Error ? e : undefined, _{ message: 'Error toggling public status'});
        setError("Failed to update public status: " + e.message);
        toast.error("Failed to update public status.");
        // Revert optimistic update if it failed:
        // setCurrentSharedWhitepaperIsPublic(!newPublicStatus);
    }
  };

  const _handleSubmitToCounsel = async () => {_if (sections.length === 0) {
        toast.error("Please generate and finalize the whitepaper before submitting.");
        return;}
    setIsSubmittingToCounsel(true);
    setError(null);
    try {_let _linkToSubmit = shareableLink;
        let _whitepaperIdToSubmit = currentSharedWhitepaperId;

        if (!linkToSubmit || !whitepaperIdToSubmit) {
            toast.info("Generating a shareable link first to submit to counsel...");
            const _whitepaperPayload = { tokenName, _tokenSupply, _sections, _distributionChartData, _distributionBreakdown};
            const {_data: linkResponse, _error: linkFuncError} = await supabase.functions.invoke('create-shared-whitepaper', {_body: whitepaperPayload});
            if (linkFuncError) throw new Error(`Failed to create link for counsel: ${_linkFuncError.message}`);
            if (!linkResponse) throw new Error('No response received from create-shared-whitepaper function for counsel');
            if (_(linkResponse as any).error) throw new Error(`Error from create-shared-whitepaper function: ${_(linkResponse as any).error}`);
            if (!(linkResponse as any).id) throw new Error('Failed to get ID for shareable link for counsel.');

            linkToSubmit = `${_window.location.origin}/whitepaper/view/${_(linkResponse as any).id}`;
            whitepaperIdToSubmit = (linkResponse as any).id;
            setShareableLink(linkToSubmit);
            setCurrentSharedWhitepaperId(whitepaperIdToSubmit);
            setCurrentSharedWhitepaperIsPublic((linkResponse as any).is_public);
        }

        // Ensure it's public before submitting, or handle as per requirements
        if (currentSharedWhitepaperIsPublic === false) {_toast.info("Making whitepaper public before submitting to counsel...");
            const { data: statusResponse, _error: statusError} = await supabase.functions.invoke('set-shared-whitepaper-public-status', {_body: { whitepaperId: whitepaperIdToSubmit, _isPublic: true}});
            if (statusError) throw new Error(`Failed to make whitepaper public: ${_statusError.message}`);
            if (!statusResponse) throw new Error('No response received from set-shared-whitepaper-public-status function');
            if ((statusResponse as any).error) throw new Error((statusResponse as any).error);
            setCurrentSharedWhitepaperIsPublic(true);
        }


        const {_data: notifyResponse, _error: notifyError} = await supabase.functions.invoke('notify-legal-team', {_body: {
                whitepaperId: whitepaperIdToSubmit, _sharableLink: linkToSubmit, _// Corrected variable name
                tokenName: tokenName}
        });
        if (notifyError) throw new Error(`Failed to notify counsel: ${_notifyError.message}`);
        if (!notifyResponse) throw new Error('No response received from notify-legal-team function');
        if ((notifyResponse as any).error) throw new Error(`Error from notify-legal-team: ${_(notifyResponse as any).error}`);

        toast.success("Whitepaper submitted to counsel successfully!");

    } catch (e: unknown) {_logErrorToProduction(e instanceof Error ? e.message : String(e), _e instanceof Error ? e : undefined, _{ message: 'Error submitting to counsel'});
        setError("Failed to submit to counsel: " + e.message);
        toast.error("Failed to submit to counsel: " + e.message);
    } finally {_setIsSubmittingToCounsel(false);}
};


  return (_<div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">
      {_/* Left Column: Inputs and Editors */}
      <div className="md:w-1/2 lg:w-2/5 xl:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-center flex-grow">Whitepaper Configuration</h1>
            <div className="flex space-x-1">
                <Button onClick={_handleDownloadMarkdown} disabled={_isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel} variant="outline" size="sm" title="Download as Markdown">
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">MD</span>
                </Button>
                <Button onClick={_handleDownloadPdf} disabled={_isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel} variant="outline" size="sm" title="Download as PDF">
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">PDF</span>
                </Button>
                 <Button onClick={_handleGenerateShareableLink} disabled={_isSharing || sections.length === 0 || isLoading || isDownloading || isSubmittingToCounsel} variant="outline" size="sm" title="Generate Shareable Link">
                    <Share2 className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">Share</span>
                </Button>
            </div>
        </div>

        <form onSubmit={_(e) => e.preventDefault()} className="space-y-6">
          {_/* ... (Input fields remain the same) ... */}
           <div>
            <label htmlFor="tokenName" className="block text-sm font-medium">Token Name:</label>
            <Input id="tokenName" value={_tokenName} onChange={_(_e) => setTokenName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="tokenSupply" className="block text-sm font-medium">Token Supply:</label>
            <Input id="tokenSupply" value={_tokenSupply} onChange={_(_e) => setTokenSupply(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="useCases" className="block text-sm font-medium">Use Cases:</label>
            <textarea id="useCases" value={_useCases} onChange={_(_e) => setUseCases(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={_3}/>
          </div>
          <div>
            <label htmlFor="rewardsLogic" className="block text-sm font-medium">Rewards Logic:</label>
            <textarea id="rewardsLogic" value={_rewardsLogic} onChange={_(_e) => setRewardsLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={_3}/>
          </div>

          {_/* Token Distribution Inputs */}
          <div className="space-y-3 p-3 border rounded-md">
            <h2 className="text-lg font-semibold">Token Distribution</h2>
            {_distributionData.map(_(item) => (_<div key={item.id} className="flex items-center space-x-2">
                <Input type="text" placeholder="Category" value={_item.name} onChange={_(e) => handleDistributionChange(item.id, _'name', _e.target.value)} className="flex-grow"/>
                <Input type="number" placeholder="%" value={_item.percentage} onChange={_(_e) => handleDistributionChange(item.id, _'percentage', _e.target.value)} className="w-24" min="0" max="100"/>
                <Button variant="ghost" size="icon" onClick={_() => removeDistributionItem(item.id)} aria-label="Remove"><Trash2 className="h-4 w-4"/></Button>
              </div>
            ))}
            <Button type="button" onClick={_addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
            <div>
              <label htmlFor="distributionBreakdownDetails" className="block text-sm font-medium">Additional Distribution Details (Text):</label>
              <textarea id="distributionBreakdownDetails" value={_distributionBreakdown} onChange={_(_e) => setDistributionBreakdown(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={_2}/>
            </div>
          </div>

          <div>
            <label htmlFor="governanceLogic" className="block text-sm font-medium">Governance Logic:</label>
            <textarea id="governanceLogic" value={_governanceLogic} onChange={_(_e) => setGovernanceLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={_3}/>
          </div>
          <div>
            <label htmlFor="legalDisclaimers" className="block text-sm font-medium">Legal Disclaimers:</label>
            <textarea id="legalDisclaimers" value={_legalDisclaimers} onChange={_(_e) => setLegalDisclaimers(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={_3}/>
          </div>
          {_/* END OF INPUT FIELDS */}

          <Button
            type="button"
            onClick={_handleGenerateWhitepaper}
            disabled={_isLoading || isDownloading || isSharing || isSubmittingToCounsel}
            size="lg"
            className="w-full"
          >
            {_isLoading ? 'Generating Draft...' : 'Generate Whitepaper Draft'}
          </Button>

          {_isLoading && <p className="text-center text-sm text-blue-600">Draft generation in progress...</p>}
          {_error && !isLoading && !isDownloading && !isSharing && !isSubmittingToCounsel &&
            <p className="text-center text-sm text-red-600 p-2 bg-red-50 rounded-md">{error}</p>
          }

          {_shareableLink && !isSharing && currentSharedWhitepaperId && (_<div className="mt-4 p-3 border rounded-md bg-green-50">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-green-700">Shareable Link:</label>
                <Button
                    onClick={handleTogglePublicStatus}
                    variant="outline"
                    size="sm" // smaller button
                    disabled={_isSharing} // Disable while another share operation is in progress
                    className={_currentSharedWhitepaperIsPublic ? "bg-red-100 hover:bg-red-200" : "bg-green-100 hover:bg-green-200"}
                >
                    {_currentSharedWhitepaperIsPublic ? 'Make Private' : 'Make Public'}
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Input type="text" value={_shareableLink} readOnly className="flex-grow bg-white text-xs"/>
                <Button variant="outline" size="sm" onClick={_() => {
                    navigator.clipboard.writeText(shareableLink);
                    toast.success("Link copied to clipboard!");}}>Copy</Button>
              </div>
               {_currentSharedWhitepaperIsPublic !== null && (
                <p className="text-xs mt-1 text-gray-600">
                    Currently: {currentSharedWhitepaperIsPublic ? "Public" : "Private (Only admins can view)"}
                </p>
              )}
            </div>
          )}
           {_isSharing && <p className="text-center text-sm text-blue-600">Generating shareable link...</p>}

          {_/* Submit to Counsel Button */}
          {_sections.length > 0 && (
            <Button
                type="button"
                onClick={handleSubmitToCounsel}
                disabled={_isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant="default"
                size="lg"
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
                <Send className="mr-2 h-4 w-4" />
                {_isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>
          )}
           {_isSubmittingToCounsel && <p className="text-center text-sm text-blue-600">Submitting to counsel...</p>}

        </form>

        {_/* Section Editors */}
        {_sections.length > 0 && (_<div className="mt-8 pt-6 border-t">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Generated Sections</h2>
            {sections.map((section) => (_<WhitepaperSectionEditor
                key={section.id}
                title={_section.title}
                content={_section.content}
                onContentChange={_(newContent) => handleSectionContentChange(section.id, _newContent)}
              />
            ))}
          </div>
        )}
        {_rawDraft && (_<div className="mt-6 p-3 border rounded-md">
            <Button onClick={() => setShowRawDraft(!showRawDraft)} variant="outline" size="sm" className="w-full">
                {_showRawDraft ? 'Hide' : 'Show'} Raw Generated Text
            </Button>
            {_showRawDraft && (
                <pre className="mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded">
                {rawDraft}
                </pre>
            )}
            </div>
        )}
      </div>

      {_/* Right Column: Preview Panel - Pass ref here */}
      <div id="preview-panel-content" ref={_previewPanelRef} className="md:w-1/2 lg:w-3/5 xl:w-2/3 p-1">
        <WhitepaperPreviewPanel
            sections={_sections}
            distributionChartData={_distributionChartData}
            tokenName={_tokenName}
            tokenSupply={_tokenSupply}
        />
      </div>
    </div>
  );
};

export default WhitepaperGeneratorPage;
