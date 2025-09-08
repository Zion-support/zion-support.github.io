const slugify = (text: string): string => {
  return text;
    .to_string ();
    .toLowerCase ();
    .replace (/\s+/g, '-') // Replace spaces with -;
    .replace (/[^\w-]+/g, '') // Remove all non - word chars;
    .replace (/--+/g, '-') // Replace multiple - with single -;
    .replace (/^-+/, '') // Trim - from start of text;
    .replace (/-+$/, ''); // Trim - from end of text;
}
const WhitepaperGeneratorPage: React.FC = () => {
    }
    // Check condition
if ( {) {
  $2
}
      set_error (
        `Warning: Total distribution is ${total_percentage}%. Consider adjusting to sum to 100%.`);
    } else // Check condition
if (
    ) {) {
  $2
}
      set_error ('Distribution percentages are all zero or invalid.');
      setIsLoading (false);
      return;
    }
    try {
      if (!data |!(data as any).whitepaperDraft) {
        throw new Error('No whitepaper draft received from the function.')
      }
      setRawDraft ((data as any).whitepaper_draft);
      set_sections (parseWhitepaperDraft ((data as any).whitepaper_draft));
    } catch (e: any) {
    } finally {
      setIsLoading (false);
    }
  }
  const handleSectionContentChange = (id: string, new_content: string, ) =>: any {
    set_sections (prev_sections =>;
      prev_sections.map (section =>;
        section.id === id ? { ...section, content: new_content } : section));
  }
  const assembleMarkdownContent = (): string => {
    let md_content = `# ${token_name} - Whitepaper\n\n`;
    md_content += `**Total Supply:** ${token_supply}\n\n`;
    sections.for_each (section => {
      md_content += `## ${section.title}\n\n${section.content}\n\n`;
      if (.includes ('token distribution')) {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          md_content += `### Distribution Details\n\n`;
          distributionChartData.for_each (item => {
            md_content += `- **${item.name}:** ${item.value}%\n`;
          });
          md_content += `\n${distribution_breakdown ? `**Additional Notes:** ${distribution_breakdown}\n\n` : ''}`;
        } else // Check condition
if ( {) {
  $2
}
          md_content += `**Distribution Notes:** ${distribution_breakdown}\n\n`;
        }
      }
    });
    return md_content;
  }
  const handleDownloadMarkdown = () =>: any {
    setIsDownloading (true);
    try {
        { message: 'Error downloading Markdown' }
      );
      set_error ('Failed to download Markdown file. ' + e.message);
    } finally {
      setIsDownloading (false);
    }
  }
  const handleDownloadPdf = async () => {
    setIsSharing(true)
    setError(null)
    setShareableLink(null)
    setCurrentSharedWhitepaperId(null)
    setCurrentSharedWhitepaperIsPublic(null)

import React, { useState, useEffect, useCallback } from 'react',
import { supabase } from '@/integrations/supabase/client',
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel
<<<<<<< HEAD
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
import { toast } from 'sonner',
=======
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
import { toast } from "sonner",
>>>>>>> origin/resolved-merge-conflicts
import { logErrorToProduction } from '@/utils/productionLogger',
interface WhitepaperSection {
  id: string;
  title: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  content: string
import React, { useState, useEffect, useCallback } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',;
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel;
<<<<<<< HEAD
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
=======
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
>>>>>>> origin/resolved-merge-conflicts
import { Trash2, Download, Share2 } from 'lucide-react';
        useCases,;
        rewardsLogic,;
        governanceLogic,;
        legalDisclaimers,;
      }
      if (data && (data as any).error) {;
        throw new Error(`Generation error: ${(data as any).error}`);
      }
      if (!data || !(data as any).whitepaperDraft) {;
        throw new Error('No whitepaper draft received from the function.');
      }
      setSections([]);
    } finally {;
      setIsLoading(false);
    }
    try {;
      // Temporarily ensure the entire preview panel content is visible for capture if it's scrollable internally.;
      // This might involve temporarily changing styles, which is complex and error-prone.;
      // A better approach for very long content is to paginate in jsPDF directly.;
      // For now, we capture what's visible or rely on html2canvas's capabilities with scroll.;

interface DistributionItem {
  id: string;
  name: string;
  percentage: string
}
{'
  id: crypto.randomUUID (),  name: 'Private Sale Investors', percentage: '20'
}
{'
  id: crypto.randomUUID (),  name: 'Ecosystem Development Fund', percentage: '35'
}
{'
  id: crypto.randomUUID (),  name: 'Community Rewards & Airdrops', percentage: '20'
}
{'
  id: crypto.randomUUID (),  name: 'Public Sale Allocation', percentage: '10'
}])
const [isDownloading, setIsDownloading] = useState (false)
const [isSharing, setIsSharing] = useState (false)
const [isSubmittingToCounsel, setIsSubmittingToCounsel] = useState (false)
const [error, setError] = useState<string | null> (null)
const [shareableLink, setShareableLink] = useState<string | null> (null)
const [currentSharedWhitepaperId, setCurrentSharedWhitepaperId] = useState<string | null> (null), //For public/private toggle const [currentSharedWhitepaperIsPublic, setCurrentSharedWhitepaperIsPublic] = useState<boolean | null> (null), //For public/private toggle const [rawDraft, setRawDraft] = useState<string | null> (null)
const [sections, setSections] = useState<WhitepaperSection[]> ([])
const [showRawDraft, setShowRawDraft] = useState (false)
}return parsed
}, [])
const distributionChartData: DistributionChartItem[] = React.useMemo ( () => {
  return distributionData .map (item => ({
}if (totalPercentage < 100 && totalPercentage > 0 && processedDistData.length > 0) {
  setError (`Warning: Total distribution is $ {
  totalPercentage
}%. Consider adjusting to sum to 100%.`)
}else if (totalPercentage === 0 && processedDistData.length > 0 && distributionData.some (d => d.name && d.percentage) ) {
}try {
  const apiPayload: any = {
  tokenName
tokenSupply: tokenSupply.toString ()
useCases
rewardsLogic
governanceLogic
legalDisclaimers
distributionBreakdown
}
if (processedDistData.length > 0) {
  apiPayload.distributionData = processedDistData
}const {
  data, error: funcError '
}= await supabase.functions.invoke ('generate-whitepaper', {
  body: apiPayload
})
if (funcError) {
  throw new Error (`Supabase function error: $ {
  funcError.message
}`)
}if (data && (data as any) .error) {
  throw new Error (`Generation error: $ {
  (data as any) .error
}`)
}if (!data |! (data as any) .whitepaperDraft) {'
  throw new Error ('No whitepaper draft received from the function.')
}setRawDraft ( (data as any) .whitepaperDraft)
setSections (parseWhitepaperDraft ( (data as any) .whitepaperDraft) )
}catch (e: any) {
  logErrorToProduction (e instanceof Error ? e.message : String (e),  e instanceof Error ? e : undefined, {'
  message: 'Error generating whitepaper'
});'
setError (e.message |'An unexpected error occurred.')
setSections ([])
}finally {
  setIsLoading (false)
interface DistributionChartItem {
    );
  };

    let mdContent = `# ${tokenName} - Whitepaper\n\n`
    mdContent += `**Total Supply:** ${tokenSupply}\n\n`
    sections.forEach(section => {
      mdContent += `## ${section.title}\n\n${section.content}\n\n`;
if (section.title.toLowerCase().includes('token distribution')) {
        if (distributionChartData.length > 0) {
          mdContent += `### Distribution Details\n\n`
          distributionChartData.forEach(item => {
            mdContent += `- **${item.name}:** ${item.value}%\n`
          })
          mdContent += `\n${distributionBreakdown ? `**Additional Notes:** ${distributionBreakdown}\n\n` : ''}`
        } else if (distributionBreakdown) {
          mdContent += `**Distribution Notes:** ${distributionBreakdown}\n\n`
        }
      }
    })
    return mdContent
  }
  const handleDownloadMarkdown = () => {
    setIsDownloading(true)
    try {
      const markdown = assembleMarkdownContent()
      const blob = new Blob([markdown], {
        type: 'text/markdown;charset=utf-8'
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${slugify(tokenName |'whitepaper')}_whitepaper.md`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      setError(null)
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
        { message: 'Error downloading Markdown' }
      )
      setError('Failed to download Markdown file. ' + e.message)
origin/cursor/automate-test-improve-and-merge-code-2533
    } finally {
      setIsDownloading(false)
    }
  },

  const handleGenerateShareableLink = async () => {
    if (sections.length === 0) {
<<<<<<< HEAD
      toast.error('Please generate the whitepaper content first before creating a shareable link.'),
=======
      toast.error("Please generate the whitepaper content first before creating a shareable link."),
>>>>>>> origin/resolved-merge-conflicts
      return
    }
    setIsSharing(true),
    setError(null),
    setShareableLink(null),
    setCurrentSharedWhitepaperId(null),
    setCurrentSharedWhitepaperIsPublic(null),
    try {
      const whitepaperPayload = {
        tokenName,
        tokenSupply,
        sections,
        distributionChartData,
        distributionBreakdown},
      const { data: response, error: funcError } = await supabase.functions.invoke('create-shared-whitepaper', {
        body: whitepaperPayload}),

      if (funcError) throw new Error(`Supabase function error: ${funcError.message}`),
      if (!response) throw new Error('No response received from create-shared-whitepaper function'),
      if ((response as any).error) throw new Error(`Error from create-shared-whitepaper: ${(response as any).error}`),
      if (!(response as any).id) throw new Error('Failed to get ID for shareable link.'),

      const link = `${window.location.origin}/whitepaper/view/${(response as any).id}`,
      setShareableLink(link),
      setCurrentSharedWhitepaperId((response as any).id),
      setCurrentSharedWhitepaperIsPublic((response as any).is_public),
<<<<<<< HEAD
      toast.success('Shareable link generated!')
    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),
      setError('Failed to generate shareable link: ' + e.message),
      toast.error('Failed to generate shareable link.')
=======
      toast.success("Shareable link generated!")
    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),
      setError("Failed to generate shareable link: " + e.message),
      toast.error("Failed to generate shareable link.")
>>>>>>> origin/resolved-merge-conflicts
    } finally {
      setIsSharing(false)
    }
  },

  const handleTogglePublicStatus = async () => {
    if (!currentSharedWhitepaperId || currentSharedWhitepaperIsPublic === null) {
<<<<<<< HEAD
        toast.error('No shareable whitepaper selected or status is unknown.'),
=======
        toast.error("No shareable whitepaper selected or status is unknown."),
>>>>>>> origin/resolved-merge-conflicts
        return
    }
    // Optimistically update UI, or wait for response for certainty
    const newPublicStatus = !currentSharedWhitepaperIsPublic,

    // For optimistic update: // setCurrentSharedWhitepaperIsPublic(newPublicStatus),

    try {
        const { data: response, error: funcError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
<<<<<<< HEAD
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }),
=======
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }}),
>>>>>>> origin/resolved-merge-conflicts
        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`),
        if (!response) throw new Error('No response received from set-shared-whitepaper-public-status function'),
        if ((response as any).error) throw new Error(`Error from set-shared-whitepaper-public-status: ${(response as any).error}`),

        setCurrentSharedWhitepaperIsPublic((response as any).is_public), // Update with actual status from DB
        toast.success(`Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`)

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error toggling public status' }),
<<<<<<< HEAD
        setError('Failed to update public status: ' + e.message),
        toast.error('Failed to update public status.'),
=======
        setError("Failed to update public status: " + e.message),
        toast.error("Failed to update public status."),
>>>>>>> origin/resolved-merge-conflicts
        // Revert optimistic update if it failed:
        // setCurrentSharedWhitepaperIsPublic(!newPublicStatus)
    }
  },

  const handleSubmitToCounsel = async () => {
    if (sections.length === 0) {
<<<<<<< HEAD
        toast.error('Please generate and finalize the whitepaper before submitting.'),
=======
        toast.error("Please generate and finalize the whitepaper before submitting."),
>>>>>>> origin/resolved-merge-conflicts
        return
    }
    setIsSubmittingToCounsel(true),
    setError(null),
    try {
        let linkToSubmit = shareableLink,
        let whitepaperIdToSubmit = currentSharedWhitepaperId,

        if (!linkToSubmit || !whitepaperIdToSubmit) {
<<<<<<< HEAD
            toast.info('Generating a shareable link first to submit to counsel...'),
=======
            toast.info("Generating a shareable link first to submit to counsel..."),
>>>>>>> origin/resolved-merge-conflicts
            const whitepaperPayload = { tokenName, tokenSupply, sections, distributionChartData, distributionBreakdown },
            const { data: linkResponse, error: linkFuncError } = await supabase.functions.invoke('create-shared-whitepaper', {
                body: whitepaperPayload}),
            if (linkFuncError) throw new Error(`Failed to create link for counsel: ${linkFuncError.message}`),
            if (!linkResponse) throw new Error('No response received from create-shared-whitepaper function for counsel'),
            if ((linkResponse as any).error) throw new Error(`Error from create-shared-whitepaper function: ${(linkResponse as any).error}`),
            if (!(linkResponse as any).id) throw new Error('Failed to get ID for shareable link for counsel.'),

            linkToSubmit = `${window.location.origin}/whitepaper/view/${(linkResponse as any).id}`,
            whitepaperIdToSubmit = (linkResponse as any).id,
            setShareableLink(linkToSubmit),
            setCurrentSharedWhitepaperId(whitepaperIdToSubmit),
            setCurrentSharedWhitepaperIsPublic((linkResponse as any).is_public)
        }

        // Ensure it's public before submitting, or handle as per requirements
        if (currentSharedWhitepaperIsPublic === false) {
<<<<<<< HEAD
            toast.info('Making whitepaper public before submitting to counsel...'),
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }),
=======
            toast.info("Making whitepaper public before submitting to counsel..."),
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }}),
>>>>>>> origin/resolved-merge-conflicts
            if (statusError) throw new Error(`Failed to make whitepaper public: ${statusError.message}`),
            if (!statusResponse) throw new Error('No response received from set-shared-whitepaper-public-status function'),
            if ((statusResponse as any).error) throw new Error((statusResponse as any).error),
            setCurrentSharedWhitepaperIsPublic(true)
;
      pdf.save(`${slugify(tokenName || 'whitepaper')}_whitepaper.pdf`);
    } catch (e: any) {;
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading PDF' }),;
<<<<<<< HEAD
      setError('Failed to download PDF file. ' + e.message);
=======
      setError("Failed to download PDF file. " + e.message);
>>>>>>> origin/resolved-merge-conflicts
    } finally {;
      setIsDownloading(false);
    }
  },;
  const handleGenerateShareableLink = async () => {;
    if (sections.length === 0) {;
<<<<<<< HEAD
      toast.error('Please generate the whitepaper content first before creating a shareable link.'),;
=======
      toast.error("Please generate the whitepaper content first before creating a shareable link."),;
>>>>>>> origin/resolved-merge-conflicts
      return;
    }
    setIsSharing(true),;
    setError(null),;
    setShareableLink(null),;
    setCurrentSharedWhitepaperId(null),;
    setCurrentSharedWhitepaperIsPublic(null),;
    try {;
      const whitepaperPayload = {;
        tokenName,;
        tokenSupply,;
        sections,;
        distributionChartData,;
        distributionBreakdown},;
      const { data: response, error: funcError } = await supabase.functions.invoke('create-shared-whitepaper', {;
        body: whitepaperPayload}),;
      if (funcError) throw new Error(`Supabase function error: ${funcError.message}`),;
      if (!response) throw new Error('No response received from create-shared-whitepaper function'),;
      if ((response as any).error) throw new Error(`Error from create-shared-whitepaper: ${(response as any).error}`),;
      if (!(response as any).id) throw new Error('Failed to get ID for shareable link.'),;
      const link = `${window.location.origin}/whitepaper/view/${(response as any).id}`,;
      setShareableLink(link),;
      setCurrentSharedWhitepaperId((response as any).id),;
      setCurrentSharedWhitepaperIsPublic((response as any).is_public),;
<<<<<<< HEAD
      toast.success('Shareable link generated!');
    } catch (e: any) {;
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),;
      setError('Failed to generate shareable link: ' + e.message),;
      toast.error('Failed to generate shareable link.');
=======
      toast.success("Shareable link generated!");
    } catch (e: any) {;
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),;
      setError("Failed to generate shareable link: " + e.message),;
      toast.error("Failed to generate shareable link.");
>>>>>>> origin/resolved-merge-conflicts
    } finally {;
      setIsSharing(false);
    }
  },;
  const handleTogglePublicStatus = async () => {;
    if (!currentSharedWhitepaperId || currentSharedWhitepaperIsPublic === null) {;
<<<<<<< HEAD
        toast.error('No shareable whitepaper selected or status is unknown.'),;
=======
        toast.error("No shareable whitepaper selected or status is unknown."),;
>>>>>>> origin/resolved-merge-conflicts
        return;
    }
    // Optimistically update UI, or wait for response for certainty;
    const newPublicStatus = !currentSharedWhitepaperIsPublic,;
    // For optimistic update: // setCurrentSharedWhitepaperIsPublic(newPublicStatus),;
    try {;
        const { data: response, error: funcError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {;
<<<<<<< HEAD
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }),;
=======
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }}),;
>>>>>>> origin/resolved-merge-conflicts
        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`),;
        if (!response) throw new Error('No response received from set-shared-whitepaper-public-status function'),;
        if ((response as any).error) throw new Error(`Error from set-shared-whitepaper-public-status: ${(response as any).error}`),;
        setCurrentSharedWhitepaperIsPublic((response as any).is_public), // Update with actual status from DB;
        toast.success(`Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`);
    } catch (e: any) {;
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error toggling public status' }),;
<<<<<<< HEAD
        setError('Failed to update public status: ' + e.message),;
        toast.error('Failed to update public status.'),;
=======
        setError("Failed to update public status: " + e.message),;
        toast.error("Failed to update public status."),;
>>>>>>> origin/resolved-merge-conflicts
        // Revert optimistic update if it failed:;
        // setCurrentSharedWhitepaperIsPublic(!newPublicStatus);
    }
  },;
  const handleSubmitToCounsel = async () => {;
    if (sections.length === 0) {;
<<<<<<< HEAD
        toast.error('Please generate and finalize the whitepaper before submitting.'),;
=======
        toast.error("Please generate and finalize the whitepaper before submitting."),;
>>>>>>> origin/resolved-merge-conflicts
        return;
    }
    setIsSubmittingToCounsel(true),;
    setError(null),;
    try {;
        let linkToSubmit = shareableLink,;
        let whitepaperIdToSubmit = currentSharedWhitepaperId,;
        if (!linkToSubmit || !whitepaperIdToSubmit) {;
<<<<<<< HEAD
            toast.info('Generating a shareable link first to submit to counsel...'),;
=======
            toast.info("Generating a shareable link first to submit to counsel..."),;
>>>>>>> origin/resolved-merge-conflicts
            const whitepaperPayload = { tokenName, tokenSupply, sections, distributionChartData, distributionBreakdown },;
            const { data: linkResponse, error: linkFuncError } = await supabase.functions.invoke('create-shared-whitepaper', {;
                body: whitepaperPayload}),;
            if (linkFuncError) throw new Error(`Failed to create link for counsel: ${linkFuncError.message}`),;
            if (!linkResponse) throw new Error('No response received from create-shared-whitepaper function for counsel'),;
            if ((linkResponse as any).error) throw new Error(`Error from create-shared-whitepaper function: ${(linkResponse as any).error}`),;
            if (!(linkResponse as any).id) throw new Error('Failed to get ID for shareable link for counsel.'),;
            linkToSubmit = `${window.location.origin}/whitepaper/view/${(linkResponse as any).id}`,;
            whitepaperIdToSubmit = (linkResponse as any).id,;
            setShareableLink(linkToSubmit),;
            setCurrentSharedWhitepaperId(whitepaperIdToSubmit),;
            setCurrentSharedWhitepaperIsPublic((linkResponse as any).is_public);
        }
;
        // Ensure it's public before submitting, or handle as per requirements;
        if (currentSharedWhitepaperIsPublic === false) {;
<<<<<<< HEAD
            toast.info('Making whitepaper public before submitting to counsel...'),;
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {;
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }),;
=======
            toast.info("Making whitepaper public before submitting to counsel..."),;
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {;
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }}),;
>>>>>>> origin/resolved-merge-conflicts
            if (statusError) throw new Error(`Failed to make whitepaper public: ${statusError.message}`),;
            if (!statusResponse) throw new Error('No response received from set-shared-whitepaper-public-status function'),;
            if ((statusResponse as any).error) throw new Error((statusResponse as any).error),;
            setCurrentSharedWhitepaperIsPublic(true);
        }
;
        const { data: notifyResponse, error: notifyError } = await supabase.functions.invoke('notify-legal-team', {;
            body: {;
                whitepaperId: whitepaperIdToSubmit,;
                sharableLink: linkToSubmit, // Corrected variable name;
                tokenName: tokenName}
        }),
        if (notifyError) throw new Error(`Failed to notify counsel: ${notifyError.message}`),
        if (!notifyResponse) throw new Error('No response received from notify-legal-team function'),
        if ((notifyResponse as any).error) throw new Error(`Error from notify-legal-team: ${(notifyResponse as any).error}`),

<<<<<<< HEAD
        toast.success('Whitepaper submitted to counsel successfully!')

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error submitting to counsel' }),
        setError('Failed to submit to counsel: ' + e.message),
        toast.error('Failed to submit to counsel: ' + e.message)
=======
        toast.success("Whitepaper submitted to counsel successfully!")

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error submitting to counsel' }),
        setError("Failed to submit to counsel: " + e.message),
        toast.error("Failed to submit to counsel: " + e.message)
>>>>>>> origin/resolved-merge-conflicts
    } finally {
        setIsSubmittingToCounsel(false)
    }
},


  return (
    <div className='flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100'>;
      {/* Left Column: Inputs and Editors */}
            <Button
              onClick={handleDownloadMarkdown}
              disabled={
                isDownloading |
                sections.length === 0 |
                isLoading |
                isSharing |
                isSubmittingToCounsel
              }
              variant='outline'
              size='sm'
                isSubmittingToCounsel
              }
              variant='outline'
              size='sm'
        <form onSubmit={e => e.preventDefault()} className='space-y-6'>
          {/* ... (Input fields remain the same) ... */}
          <div>;
            <label htmlFor='tokenName' className='block text-sm font-medium'>;
              Token Name:;
            </label>;
            <Input
              id='tokenName'
              value={tokenName}
              onChange={e => setTokenName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='tokenSupply' className='block text-sm font-medium'>
              Token Supply:
            </label>
            <Input
              id='tokenSupply'
              value={tokenSupply}
              onChange={e => setTokenSupply(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='useCases' className='block text-sm font-medium'>
              Use Cases:
            </label>
            <textarea
              id='useCases'
              value={useCases}
              onChange={e => setUseCases(e.target.value)}
              required
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              rows={3}
            />
          </div>
          <div>
            <label htmlFor='rewardsLogic' className='block text-sm font-medium'>
              Rewards Logic:
            </label>
            <textarea
              id='rewardsLogic'
              value={rewardsLogic}
              onChange={e => setRewardsLogic(e.target.value)}
              required
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              rows={3}
            />
          </div>
          {/* Token Distribution Inputs */}
          <div className='space-y-3 p-3 border rounded-md'>;
            <h2 className='text-lg font-semibold'>Token Distribution</h2>;
            {distributionData && distributionData.map(item => (;
              <div key={item && item.id} className='flex items-center space-x-2'>;
                <Input
                  type='text'
                  placeholder='Category'
                  value={item && item.name}
                  onChange={e =>;
                    handleDistributionChange(item && item.id, 'name', e && e.target.value);
                  }
                  className='flex-grow';
                />;
                <Input
                  type='number'
                  placeholder='%'
                  value={item.percentage}
                  onChange={e =>
                    handleDistributionChange(
                      item.id
                      'percentage'
                      e.target.value
                    )
                  }
                  className='w-24';
                  min='0';
                  max='100';
                />;
                <Button
                  variant='ghost'
                  size='icon'
            ))}
<<<<<<< HEAD
            <Button type='button' onClick={addDistributionItem} variant='outline' className='w-full'>Add Distribution Item</Button>
=======
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
>>>>>>> origin/resolved-merge-conflicts
            <div>
              rows={3}
            />;
          </div>;
          <div>;
          </div>
          <div>
          </div>
          <div>
            <label
              htmlFor='legalDisclaimers'
          {shareableLink && !isSharing && currentSharedWhitepaperId && (
<<<<<<< HEAD
            <div className='mt-4 p-3 border rounded-md bg-green-50'>
              <div className='flex justify-between items-center'>
                <label className='block text-sm font-medium text-green-700'>Shareable Link:</label>
=======
            <div className="mt-4 p-3 border rounded-md bg-green-50">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-green-700">Shareable Link:</label>
>>>>>>> origin/resolved-merge-conflicts
                <Button
              )}
            </div>
          )}

              type='button'
              onClick={handleSubmitToCounsel}
              disabled={
                isSubmittingToCounsel |isLoading |isSharing |isDownloading
              }
              variant='default'
              size='lg'
              className='w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white'            >
              <Send className='mr-2 h-4 w-4' />
              {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>
          )}
          {isSubmittingToCounsel && (
            <p className='text-center text-sm text-blue-600'>
              Submitting to counsel...
            </p>
          )}
<<<<<<< HEAD
                type='button'
                onClick={handleSubmitToCounsel}
                disabled={isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant='default'
                size='lg'
                className='w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white'
            >
                <Send className='mr-2 h-4 w-4' />
                {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>;
          )}
           {isSubmittingToCounsel && <p className='text-center text-sm text-blue-600'>Submitting to counsel...</p>}
=======
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
>>>>>>> origin/resolved-merge-conflicts




        </form>
        </form>;

        {/* Section Editors */}
        {sections && sections.length > 0 && (;
          <div className='mt-8 pt-6 border-t'>;
            <h2 className='text-xl font-bold mb-4 text-center'>;
              Edit Generated Sections;
            </h2>;
            {sections && sections.map(section => (;
              <WhitepaperSectionEditor
                key={section && section.id}
                title={section && section.title}
                content={section && section.content}
                onContentChange={newContent =>;
                  handleSectionContentChange(section && section.id, newContent);
                }              />;
            ))}
          </div>;
        )}
        {rawDraft && (;
          <div className='mt-6 p-3 border rounded-md'>;
            <Button
              onClick={() => setShowRawDraft(!showRawDraft)}
              variant='outline';
              size='sm';
              className='w-full';
            >;
              {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text            </Button>;
            {showRawDraft && (;
              <pre className='mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded'>;
                {rawDraft}
              </pre>;
            )}
          </div>;
        )}
      </div>
                </p>)}
            </div>)}
          {is_sharing && (
            <p className='text - center text - sm text - blue - 600'>;
              Generating shareable link...;
            </p>)}
          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
              type='button'
              onClick={handleSubmitToCounsel}
              disabled={
                isSubmittingToCounsel |isLoading |isSharing |isDownloading
              }
              variant='default'
              size='lg'
              className='w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white'            >
              <Send className='mr-2 h-4 w-4' />
              {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>
          )}
          {isSubmittingToCounsel && (
            <p className='text-center text-sm text-blue-600'>
              Submitting to counsel...
            </p>
          )}
<<<<<<< HEAD
                type='button'
                onClick={handleSubmitToCounsel}
                disabled={isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant='default'
                size='lg'
                className='w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white'
            >
                <Send className='mr-2 h-4 w-4' />
                {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>;
          )}
           {isSubmittingToCounsel && <p className='text-center text-sm text-blue-600'>Submitting to counsel...</p>}
=======
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
>>>>>>> origin/resolved-merge-conflicts

        </form>
        {/* Section Editors */}
        {sections.length > 0 && (
              <WhitepaperSectionEditor
                key={section.id}
                title={section.title}
                content={section.content}

            ))}
          </div>
        )}
        {rawDraft && (
<<<<<<< HEAD
            <div className='mt-6 p-3 border rounded-md'>
            <Button onClick={() => setShowRawDraft(!showRawDraft)} variant='outline' size='sm' className='w-full'>
                {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text
            </Button>
            {showRawDraft && (
                <pre className='mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded'>
=======
            <div className="mt-6 p-3 border rounded-md">
            <Button onClick={() => setShowRawDraft(!showRawDraft)} variant="outline" size="sm" className="w-full">
                {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text
            </Button>
            {showRawDraft && (
                <pre className="mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded">
>>>>>>> origin/resolved-merge-conflicts
                {rawDraft}
                </pre>;
            )}
            </div>;

        )}
      </div>
      {/* Right Column: Preview Panel - Pass ref here */}

<<<<<<< HEAD
'';
=======
'";
>>>>>>> origin/resolved-merge-conflicts
;
}
}

        )}
      </div>
      {/* Right Column: Preview Panel - Pass ref here */}
<<<<<<< HEAD
      <div id='preview-panel-content' ref={previewPanelRef} className='md:w-1/2 lg:w-3/5 xl:w-2/3 p-1'>
=======
      <div id="preview-panel-content" ref={previewPanelRef} className="md:w-1/2 lg:w-3/5 xl:w-2/3 p-1">
>>>>>>> origin/resolved-merge-conflicts
        <WhitepaperPreviewPanel
            sections={sections}
            distributionChartData={distributionChartData}
            tokenName={tokenName}
            tokenSupply={tokenSupply}
        />;
      </div>;
    </div>;
  );



        className='md:w - 1/2 lg:w - 3/5 xl:w - 2/3 p - 1';
      >;
        <WhitepaperPreviewPanel;
          sections={sections}
          distributionChartData={distributionChartData}
          token_name={token_name}
          token_supply={token_supply}        />;
      </div>;
    </div>);
}
export default WhitepaperGeneratorPage
<<<<<<< HEAD
''
=======
'"
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
