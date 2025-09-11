<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import React, { useState, useEffect, useCallback } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import React, { useState, useEffect, useCallback } from 'react',
import { supabase } from '@/integrations/supabase/client',
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
import { toast } from "sonner";
import { logErrorToProduction } from '@/utils/productionLogger';
interface WhitepaperSection {

  id: string
title: string
content: string
}interface DistributionItem {
  id: string
name: string
percentage: string
}interface DistributionChartItem {
  name: string
value: number
}const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#AA00FF#FF00AA#00AAAA#AAAA00']
//Helper for slugifying filenames const slugify = (text: string) : string => {'
  return text.toString () .toLowerCase () .replace (/\s+/g, '-') //Replace spaces with - .replace (/[^\w-]+/g, '') //Remove all non-word chars .replace (/--+/g, '-') //Replace multiple - with single - .replace (/^-+/, '') //Trim - from start of text .replace (/-+$/,  ''), //Trim - from end of text
}
const WhitepaperGeneratorPage: React.FC = () => {'
import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/integrations/supabase/client';
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel'; // Import the new preview panel
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Trash2, Download, Share2 } from 'lucide-react';
import { Send } from 'lucide-react'; // Added Send icon
import { toast } from 'sonner'
import { logErrorToProduction } from '@/utils/productionLogger'
interface WhitepaperSection {
  id: string
title: string
content: string 
}interface DistributionItem {
  id: string
name: string
percentage: string 
}interface DistributionChartItem {
  name: string
value: number 
}const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#AA00FF#FF00AA#00AAAA#AAAA00']
//Helper for slugifying filenames const slugify = (text: string) : string => {'
  return text.toString () .toLowerCase () .replace (/\s+/g, '-') //Replace spaces with - .replace (/[^\w-]+/g, '') //Remove all non-word chars .replace (/--+/g, '-') //Replace multiple - with single - .replace (/^-+/, '') //Trim - from start of text .replace (/-+$/,  ''), //Trim - from end of text 
};
const WhitepaperGeneratorPage: React.FC = () => {';
  const [tokenName, setTokenName] = useState ('My Awesome Token');'
const [tokenSupply, setTokenSupply] = useState<string> ('1000000000');'
const [useCases, setUseCases] = useState ('To facilitate transactions and reward users in our innovative freelance AI marketplace. It will be used for payments, staking for dispute resolution, and accessing premium features.');'
const [rewardsLogic, setRewardsLogic] = useState ('Users earn tokens by completing projects and participating in platform governance. A percentage of transaction fees is burned, creating a deflationary pressure. Staking rewards are distributed weekly.');'
const [distributionBreakdown, setDistributionBreakdown] = useState ('');'
const [governanceLogic, setGovernanceLogic] = useState ('Token holders can vote on platform upgrades, fee structures, and policy changes. Staking tokens increases voting power. A decentralized council oversees proposal implementation.');'
const [legalDisclaimers, setLegalDisclaimers] = useState ('This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. The token is a utility token and should not be considered an investment. Please consult with a legal professional in your jurisdiction.')
const [distributionData, setDistributionData] = useState<DistributionItem[]> ([ {'
  id: crypto.randomUUID (),  name: 'Team & Advisors', percentage: '15'

}
{'
  id: crypto.randomUUID (),  name: 'Private Sale Investors', percentage: '20'
  id: crypto.randomUUID (),  name: 'Private Sale Investors', percentage: '20'
  id: crypto.randomUUID (),  name: 'Private Sale Investors', percentage: '20' 
}
{'
  id: crypto.randomUUID (),  name: 'Ecosystem Development Fund', percentage: '35' 
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

  name: string
  value: number
const COLORS = [
  '#0088FE'
  '#00C49F'
  '#FFBB28'
  '#FF8042'
  '#AA00FF'
  '#FF00AA'
  '#00AAAA'
  '#AAAA00'
]
// Helper for slugifying filenames
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
const WhitepaperGeneratorPage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [tokenName, setTokenName] = useState('My Awesome Token')
  const [tokenSupply, setTokenSupply] = useState<string>('1000000000')
  const [useCases, setUseCases] = useState(
    'To facilitate transactions and reward users in our innovative freelance AI marketplace. It will be used for payments, staking for dispute resolution, and accessing premium features.'
  )
  const [rewardsLogic, setRewardsLogic] = useState(
    'Users earn tokens by completing projects and participating in platform governance. A percentage of transaction fees is burned, creating a deflationary pressure. Staking rewards are distributed weekly.'
  )
  const [distributionBreakdown, setDistributionBreakdown] = useState('')
  const [governanceLogic, setGovernanceLogic] = useState(
    'Token holders can vote on platform upgrades, fee structures, and policy changes. Staking tokens increases voting power. A decentralized council oversees proposal implementation.'
  )
  const [legalDisclaimers, setLegalDisclaimers] = useState(
    'This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. The token is a utility token and should not be considered an investment. Please consult with a legal professional in your jurisdiction.'
  )
  const [distributionData, setDistributionData] = useState<DistributionItem[]>([
    { id: crypto.randomUUID(), name: 'Team & Advisors', percentage: '15' }
    {
      id: crypto.randomUUID()
      name: 'Private Sale Investors'
      percentage: '20'
    }
    {
      id: crypto.randomUUID()
      name: 'Ecosystem Development Fund'
      percentage: '35'
    }
    {
      id: crypto.randomUUID()
      name: 'Community Rewards & Airdrops'
      percentage: '20'
    }
    {
      id: crypto.randomUUID()
      name: 'Public Sale Allocation'
      percentage: '10'
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [isSubmittingToCounsel, setIsSubmittingToCounsel] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [shareableLink, setShareableLink] = useState<string | null>(null)
  const [currentSharedWhitepaperId, setCurrentSharedWhitepaperId] = useState<
    string | null
  >(null); // For public/private toggle
  const [currentSharedWhitepaperIsPublic, setCurrentSharedWhitepaperIsPublic] =
    useState<boolean | null>(null); // For public/private toggle
  const [rawDraft, setRawDraft] = useState<string | null>(null)
  const [sections, setSections] = useState<WhitepaperSection[]>([])
  const [showRawDraft, setShowRawDraft] = useState(false)
  const previewPanelRef = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (true) {}
      setError(null)
  }, [
    tokenName
    tokenSupply
    useCases
    rewardsLogic
    distributionData
    governanceLogic
    legalDisclaimers
    sections
  ])
  const parseWhitepaperDraft = useCallback(
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [token_name, setTokenName] = useState ('My Awesome Token');
  const [token_supply, setTokenSupply] = useState < string>('1000000000');
  const [use_cases, setUseCases] = useState (
    'To facilitate transactions and reward users in our innovative freelance AI marketplace. It will be used for payments, staking for dispute resolution, and accessing premium features.');
  const [rewards_logic, setRewardsLogic] = useState (
    'Users earn tokens by completing projects and participating in platform governance. A percentage of transaction fees is burned, creating a deflationary pressure. Staking rewards are distributed weekly.');
  const [distribution_breakdown, setDistributionBreakdown] = useState ('');
  const [governance_logic, setGovernanceLogic] = useState (
    'Token holders can vote on platform upgrades, fee structures, and policy changes. Staking tokens increases voting power. A decentralized council oversees proposal implementation.');
  const [legal_disclaimers, setLegalDisclaimers] = useState (
    'This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. The token is a utility token and should not be considered an investment. Please consult with a legal professional in your jurisdiction.');
  const [distribution_data, setDistributionData] = useState < DistributionItem[]>([;
    { id: crypto.randomUUID (), name: 'Team & Advisors', percentage: '15' },
    {
      id: crypto.randomUUID (),
      name: 'Private Sale Investors',
      percentage: '20',
    },
    {
      id: crypto.randomUUID (),
      name: 'Ecosystem Development Fund',
      percentage: '35',
    },
    {
      id: crypto.randomUUID (),
      name: 'Community Rewards & Airdrops',
      percentage: '20',
    },
    {
      id: crypto.randomUUID (),
      name: 'Public Sale Allocation',
      percentage: '10',
    },
  ]);
  const [is_loading, setIsLoading] = useState (false);
  const [is_downloading, setIsDownloading] = useState (false);
  const [is_sharing, setIsSharing] = useState (false);
  const [isSubmittingToCounsel, setIsSubmittingToCounsel] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [shareable_link, setShareableLink] = useState < string | null>(null);
  const [currentSharedWhitepaperId, setCurrentSharedWhitepaperId] = useState<;
    string | null;
  >(null); // For public / private toggle;
  const [currentSharedWhitepaperIsPublic, setCurrentSharedWhitepaperIsPublic] =;
    useState < boolean | null>(null); // For public / private toggle;
  const [raw_draft, setRawDraft] = useState < string | null>(null);
  const [sections, set_sections] = useState < WhitepaperSection[]>([]);
  const [showRawDraft, setShowRawDraft] = useState (false);
  const previewPanelRef = React.useRef < HTMLDivElement>(null);
  useEffect (() => {
    if (
      set_error (null)) {
  $2
}
  }, [;
    token_name,
    token_supply,
    use_cases,
    rewards_logic,
    distribution_data,
    governance_logic,
    legal_disclaimers,
    sections,
  ]);
  const parseWhitepaperDraft = useCallback (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    (draft: string): WhitepaperSection[] => {
      if (!draft) return []
      const sectionRegex = null;
        /(?:^|\n)(?:##\s*(.*?)\s*\n|^\*\*(.*?):\*\*\s*\n)([\s\S]*?)(?=\n(?:##\s|\*\*.+:\*\*)|$)/g
      const parsed: WhitepaperSection[] = []
      let match
      let idCounter = 0
      while ((match = sectionRegex.exec(draft)) !== null) {
        const title = (
<<<<<<< HEAD
<<<<<<< HEAD
          match[1] |
          match[2] |
          `Section ${idCounter + 1}`
        ).trim()
        const content = (match[3] |'').trim()
        parsed.push({
          id: `section-${idCounter++}-${title.toLowerCase().replace(/\s+/g, '-')}`
          title
          content
        })
      }
      if (parsed.length === 0 && draft.trim().length > 0) {
        parsed.push({
          id: 'section-0-full-draft'
          title: 'Full Draft'
          content: draft.trim()
        })
      }
      return parsed
    }
    []
  )
  const handleDistributionChange = (
    id: string
    field: 'name' | 'percentage'
    value: string
  ) => {
    setDistributionData(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    )
  }
  const addDistributionItem = () => {
    setDistributionData(prev => [
      ...prev
      { id: crypto.randomUUID(), name: '', percentage: '' }
    ])
  }
  const removeDistributionItem = (id: string) => {
    setDistributionData(prev => prev.filter(item => item.id !== id))
  }
  const distributionChartData: DistributionChartItem[] = React.useMemo((,) => {
    return distributionData
      .map(item => ({
        name: item.name |'Unnamed'
        value: parseFloat(item.percentage) |0
      }))
      .filter(item => item.value > 0)
  }, [distributionData])
  const handleGenerateWhitepaper = async () => {
    setIsLoading(true)
    setError(null)
    setRawDraft(null)
    const processedDistData = distributionChartData.map(d => ({
      name: d.name
      percentage: d.value
    }))
    const totalPercentage = processedDistData.reduce(
      (sum, item) => sum + item.percentage
      0
    );    if (totalPercentage > 100) {
      setError('Total distribution percentage cannot exceed 100%.')
      setIsLoading(false)
      return;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          match[1] ||;
          match[2] ||;
          `Section ${id_counter + 1}`).trim ();
        const content = (match[3] || '').trim ();
        parsed.push ({
          id: `section-${id_counter++}-${title.toLowerCase ().replace (/\s+/g, '-')}`,
          title,
          content,
        });
      }
      // Check condition
if (.length > 0) {) {
  $2
}
        parsed.push ({
          id: 'section - 0-full - draft',
          title: 'Full Draft',
          content: draft.trim (),
        });
      }
      return parsed;
    },
    []);
  const handleDistributionChange = (
    id: string,
    field: 'name' | 'percentage',
    value: string) =>: any {
    setDistributionData (prev =>;
      prev.map (item => (item.id === id ? { ...item, [field]: value } : item)));
  }
  const addDistributionItem = () =>: any {
    setDistributionData (prev => [;
      ...prev,
      { id: crypto.randomUUID (), name: '', percentage: '' },
    ]);

  }
  const removeDistributionItem = (id: string) =>: any {
    setDistributionData (prev => prev.filter (item => item.id !== id));
  }

  const distributionChartData: DistributionChartItem[] = React.useMemo ((, ) => {
    return distribution_data;
      .map (item => ({
        name: item.name || 'Unnamed',
        value: parse_float (item.percentage) || 0,
      }));
      .filter (item => item.value > 0);
  }, [distribution_data]);
  const handleGenerateWhitepaper = async () => {
    setIsLoading (true);
    set_error (null);
    setRawDraft (null);
    const processedDistData = distributionChartData.map (d => ({
      name: d.name,
      percentage: d.value,
    }));
    const total_percentage = processedDistData.reduce (
      (sum, item) => sum + item.percentage,
      0);    // Check condition
if ( {) {
  $2
}
      set_error ('Total distribution percentage cannot exceed 100%.');
      setIsLoading (false);
      return;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    if (
      totalPercentage < 100 &&
      totalPercentage > 0 &&
      processedDistData.length > 0
    ) {
      setError(
        `Warning: Total distribution is ${totalPercentage}%. Consider adjusting to sum to 100%.`
      )
    } else if (true) {}
    ) {
      setError('Distribution percentages are all zero or invalid.')
      setIsLoading(false)
      return;
    }
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const apiPayload: any = {
        tokenName
        tokenSupply: tokenSupply.toString()
        useCases
        rewardsLogic
        governanceLogic
        legalDisclaimers
        distributionBreakdown
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const api_payload: any = {
        token_name,
        token_supply: token_supply.to_string (),
        use_cases,
        rewards_logic,
        governance_logic,
        legal_disclaimers,
        distribution_breakdown,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      if (processedDistData.length > 0) {
        apiPayload.distributionData = processedDistData
      }
<<<<<<< HEAD
<<<<<<< HEAD
      const { data, error: funcError } = await supabase.functions.invoke(
        'generate-whitepaper'
        {
          body: apiPayload
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const { data, error: func_error } = await supabase.functions.invoke (
        'generate - whitepaper',
        {
          body: api_payload,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      )
      if (funcError) {
        throw new Error(`Supabase function error: ${funcError.message}`)
      }
      if (data && (data as any).error) {
        throw new Error(`Generation error: ${(data as any).error}`)
      }
<<<<<<< HEAD
<<<<<<< HEAD
      if (!data |!(data as any).whitepaperDraft) {
        throw new Error('No whitepaper draft received from the function.')
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      // Check condition
if (.whitepaper_draft) {) {
  $2
}
        throw new Error ('No whitepaper draft received from the function.');

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      setRawDraft((data as any).whitepaperDraft)
      setSections(parseWhitepaperDraft((data as any).whitepaperDraft))
    } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
        { message: 'Error generating whitepaper' }
      )
      setError(e.message |'An unexpected error occurred.')
      setSections([])
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      logErrorToProduction (
        e instanceof Error ? e.message : String (e),
        e instanceof Error ? e : undefined,
        { message: 'Error generating whitepaper' }
      );
      set_error (e.message || 'An unexpected error occurred.');
      set_sections ([]);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsLoading(false)
    }
  }
  const handleSectionContentChange = (id: string, newContent: string,) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === id ? { ...section, content: newContent } : section
      )
    )
  }
  const assembleMarkdownContent = (): string => {
    let mdContent = `# ${tokenName} - Whitepaper\n\n`
    mdContent += `**Total Supply:** ${tokenSupply}\n\n`
    sections.forEach(section => {
      mdContent += `## ${section.title}\n\n${section.content}\n\n`
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const markdown = assembleMarkdownContent ();
      const blob = new Blob ([markdown], {
        type: 'text / markdown;charset = utf - 8',
      });
      const url = URL.createObjectURL (blob);
      const link = document.create_element ('a');
      link.href = url;
      link.download = `${slugify (token_name || 'whitepaper')}_whitepaper.md`;
      document.body.append_child (link);
      link.click ();
      document.body.remove_child (link);
      URL.revokeObjectURL (url);
      set_error (null);
    } catch (e: any) {
      logErrorToProduction (
        e instanceof Error ? e.message : String (e),
        e instanceof Error ? e : undefined,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { message: 'Error downloading Markdown' }
      )
      setError('Failed to download Markdown file. ' + e.message)
    } finally {
      setIsDownloading(false)
    }
  }
  const handleDownloadPdf = async () => {
    setIsDownloading(true)
    setError(null)
    if (!previewPanelRef.current) {
      setError('Preview panel is not available. Cannot generate PDF.')
      setIsDownloading(false)
      return;
    }
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      // Temporarily ensure the entire preview panel content is visible for capture if it's scrollable internally.
      // This might involve temporarily changing styles, which is complex and error-prone.
      // A better approach for very long content is to paginate in jsPDF directly.
      // For now, we capture what's visible or rely on html2canvas's capabilities with scroll.
      const html2canvasModule = await import('html2canvas')
      const html2canvas = html2canvasModule.default
      const { default: jsPDF } = await import('jspdf')
      const canvas = await html2canvas(previewPanelRef.current, {
        scale: 2, // Increase scale for better resolution
        useCORS: true, // If there are any external images/fonts (though unlikely here)
        logging: true, // For debugging
        onclone: documentClone => {
          // You might need to re-apply some styles here if they don't transfer well
          // For example, ensure SVGs from recharts are fully rendered.
          // This is advanced usage of html2canvas.
        }
      })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgProps = pdf.getImageProperties(imgData)
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width
      let heightLeft = imgHeight
      let position = 0
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
      heightLeft -= pdfHeight
      while (heightLeft > 0) {
        position = heightLeft - imgHeight; // Or position = position - pdfHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
        heightLeft -= pdfHeight
      }
      pdf.save(`${slugify(tokenName |'whitepaper')}_whitepaper.pdf`)
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      // Temporarily ensure the entire preview panel content is visible for capture if it's scrollable internally.;
      // This might involve temporarily changing styles, which is complex and error - prone.;
      // A better approach for very long content is to paginate in jsPDF directly.;
      // For now, we capture what's visible or rely on html2canvas's capabilities with scroll.;
      const html2canvasModule = await import ('html2canvas');
      const html2canvas = html2canvasModule.default;
      const { default: jsPDF } = await import ('jspdf');
      const canvas = await html2canvas (previewPanelRef.current, {
        scale: 2, // Increase scale for better resolution;
        useCORS: true, // If there are any external images / fonts (though unlikely here);
        logging: true, // For debugging;
        onclone: document_clone => {
          // You might need to re - apply some styles here if they don't transfer well;
          // For example, ensure SVGs from recharts are fully rendered.;
          // This is advanced usage of html2canvas.;
        },
      });
      const img_data = canvas.toDataURL ('image / png');
      const pdf = new jsPDF ('p', 'mm', 'a4');
      const pdf_width = pdf.internal.page_size.get_width ();
      const pdf_height = pdf.internal.page_size.get_height ();
      const img_props = pdf.getImageProperties (img_data);
      const img_height = (img_props.height * pdf_width) / img_props.width;
      let height_left = img_height;
      let position = 0;
      pdf.add_image (img_data, 'PNG', 0, position, pdf_width, img_height);
      height_left -= pdf_height;
      while (height_left > 0) {
        position = height_left - img_height; // Or position = position - pdf_height;
        pdf.add_page ();
        pdf.add_image (img_data, 'PNG', 0, position, pdf_width, img_height);
        height_left -= pdf_height;
      }
      pdf.save (`${slugify (token_name || 'whitepaper')}_whitepaper.pdf`);
    } catch (e: any) {
      logErrorToProduction (
        e instanceof Error ? e.message : String (e),
        e instanceof Error ? e : undefined,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { message: 'Error downloading PDF' }
      )
      setError('Failed to download PDF file. ' + e.message)
    } finally {
      setIsDownloading(false)
    }
  }
  const handleGenerateShareableLink = async () => {
    if (sections.length === 0) {
      toast.error(
        'Please generate the whitepaper content first before creating a shareable link.'
      )
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    setIsSharing(true)
    setError(null)
    setShareableLink(null)
    setCurrentSharedWhitepaperId(null)
    setCurrentSharedWhitepaperIsPublic(null)
    try {
      const whitepaperPayload = {
        tokenName
        tokenSupply
        sections
        distributionChartData
        distributionBreakdown
      }
      const { data: response, error: funcError } =
        await supabase.functions.invoke('create-shared-whitepaper', {
          body: whitepaperPayload
        })
      if (funcError)
        throw new Error(`Supabase function error: ${funcError.message}`)
      if (!response)
        throw new Error(
          'No response received from create-shared-whitepaper function'
        )
      if ((response as any).error)
        throw new Error(
          `Error from create-shared-whitepaper: ${(response as any).error}`
        )
      if (!(response as any).id)
        throw new Error('Failed to get ID for shareable link.')
      const link = `${window.location.origin}/whitepaper/view/${(response as any).id}`
      setShareableLink(link)
      setCurrentSharedWhitepaperId((response as any).id)
      setCurrentSharedWhitepaperIsPublic((response as any).is_public)
      toast.success('Shareable link generated!')
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const whitepaper_payload = {
        token_name,
        token_supply,
        sections,
        distributionChartData,
        distribution_breakdown,
      }
      const { data: response, error: func_error } =;
        await supabase.functions.invoke ('create - shared - whitepaper', {
          body: whitepaper_payload,
        });
      if (
        throw new Error (`Supabase function error: ${func_error.message}`)) {
  $2
}
      // Check condition
if (
        throw new Error () {
  $2
}
          'No response received from create - shared - whitepaper function');
      if (.error)) {
  $2
}
        throw new Error (
          `Error from create - shared - whitepaper: ${(response as any).error}`);
      if (.id)) {
  $2
}
        throw new Error ('Failed to get ID for shareable link.');
      const link = `${window.location.origin}/whitepaper / view/${(response as any).id}`;
      setShareableLink (link);
      setCurrentSharedWhitepaperId ((response as any).id);
      setCurrentSharedWhitepaperIsPublic ((response as any).is_public);
      toast.success ('Shareable link generated!');
    } catch (e: any) {
      logErrorToProduction (
        e instanceof Error ? e.message : String (e),
        e instanceof Error ? e : undefined,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { message: 'Error generating shareable link' }
      )
      setError('Failed to generate shareable link: ' + e.message)
      toast.error('Failed to generate shareable link.')
    } finally {
      setIsSharing(false)
    }
  }
  const handleTogglePublicStatus = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (
      !currentSharedWhitepaperId |
      currentSharedWhitepaperIsPublic === null
    ) {
      toast.error('No shareable whitepaper selected or status is unknown.')
      return
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    // Check condition
if ( {) {
  $2
}
      toast.error ('No shareable whitepaper selected or status is unknown.');
      return;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    // Optimistically update UI, or wait for response for certainty
    const newPublicStatus = !currentSharedWhitepaperIsPublic
    // For optimistic update:
    // setCurrentSharedWhitepaperIsPublic(newPublicStatus)
    try {
      const { data: response, error: funcError } =
        await supabase.functions.invoke('set-shared-whitepaper-public-status', {
          body: {
<<<<<<< HEAD
<<<<<<< HEAD
            whitepaperId: currentSharedWhitepaperId
            isPublic: newPublicStatus
          }
        })
      if (funcError)
        throw new Error(`Supabase function error: ${funcError.message}`)
      if (!response)
        throw new Error(
          'No response received from set-shared-whitepaper-public-status function'
        )
      if ((response as any).error)
        throw new Error(
          `Error from set-shared-whitepaper-public-status: ${(response as any).error}`
        )
      setCurrentSharedWhitepaperIsPublic((response as any).is_public); // Update with actual status from DB
      toast.success(
        `Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`
      )
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            whitepaper_id: currentSharedWhitepaperId,
            is_public: newPublicStatus,
          },
        });
      if (
        throw new Error (`Supabase function error: ${func_error.message}`)) {
  $2
}
      // Check condition
if (
        throw new Error () {
  $2
}
          'No response received from set - shared - whitepaper - public - status function');
      if (.error)) {
  $2
}
        throw new Error (
          `Error from set - shared - whitepaper - public - status: ${(response as any).error}`);
      setCurrentSharedWhitepaperIsPublic ((response as any).is_public); // Update with actual status from DB;
      toast.success (
        `Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`);
    } catch (e: any) {
      logErrorToProduction (
        e instanceof Error ? e.message : String (e),
        e instanceof Error ? e : undefined,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { message: 'Error toggling public status' }
      )
      setError('Failed to update public status: ' + e.message)
      toast.error('Failed to update public status.')
      // Revert optimistic update if it failed:
      // setCurrentSharedWhitepaperIsPublic(!newPublicStatus)
    }
  }
  const handleSubmitToCounsel = async () => {
    if (sections.length === 0) {
      toast.error(
        'Please generate and finalize the whitepaper before submitting.'
      )
      return
    }
    setIsSubmittingToCounsel(true)
    setError(null)
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      let linkToSubmit = shareableLink
      let whitepaperIdToSubmit = currentSharedWhitepaperId
      if (!linkToSubmit |!whitepaperIdToSubmit) {
        toast.info('Generating a shareable link first to submit to counsel...')
        const whitepaperPayload = {
          tokenName
          tokenSupply
          sections
          distributionChartData
          distributionBreakdown
        }
        const { data: linkResponse, error: linkFuncError } =
          await supabase.functions.invoke('create-shared-whitepaper', {
            body: whitepaperPayload
          })
        if (linkFuncError)
          throw new Error(
            `Failed to create link for counsel: ${linkFuncError.message}`
          )
        if (!linkResponse)
          throw new Error(
            'No response received from create-shared-whitepaper function for counsel'
          )
        if ((linkResponse as any).error)
          throw new Error(
            `Error from create-shared-whitepaper function: ${(linkResponse as any).error}`
          )
        if (!(linkResponse as any).id)
          throw new Error('Failed to get ID for shareable link for counsel.')
        linkToSubmit = `${window.location.origin}/whitepaper/view/${(linkResponse as any).id}`
        whitepaperIdToSubmit = (linkResponse as any).id
        setShareableLink(linkToSubmit)
        setCurrentSharedWhitepaperId(whitepaperIdToSubmit)
        setCurrentSharedWhitepaperIsPublic((linkResponse as any).is_public)
      }
      // Ensure it's public before submitting, or handle as per requirements
      if (currentSharedWhitepaperIsPublic === false) {
        toast.info('Making whitepaper public before submitting to counsel...')
        const { data: statusResponse, error: statusError } =
          await supabase.functions.invoke(
            'set-shared-whitepaper-public-status'
            {
              body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      let linkToSubmit = shareable_link;
      let whitepaperIdToSubmit = currentSharedWhitepaperId;
      // Check condition
if ( {) {
  $2
}
        toast.info ('Generating a shareable link first to submit to counsel...');
        const whitepaper_payload = {
          token_name,
          token_supply,
          sections,
          distributionChartData,
          distribution_breakdown,
        }
        const { data: link_response, error: linkFuncError } =;
          await supabase.functions.invoke ('create - shared - whitepaper', {
            body: whitepaper_payload,
          });
        // Check condition
if (
          throw new Error () {
  $2
}
            `Failed to create link for counsel: ${linkFuncError.message}`);
        // Check condition
if (
          throw new Error () {
  $2
}
            'No response received from create - shared - whitepaper function for counsel');
        if (.error)) {
  $2
}
          throw new Error (
            `Error from create - shared - whitepaper function: ${(link_response as any).error}`);
        if (.id)) {
  $2
}
          throw new Error ('Failed to get ID for shareable link for counsel.');
        linkToSubmit = `${window.location.origin}/whitepaper / view/${(link_response as any).id}`;
        whitepaperIdToSubmit = (link_response as any).id;
        setShareableLink (linkToSubmit);
        setCurrentSharedWhitepaperId (whitepaperIdToSubmit);
        setCurrentSharedWhitepaperIsPublic ((link_response as any).is_public);
      }
      // Ensure it's public before submitting, or handle as per requirements;
      // Check condition
if ( {) {
  $2
}
        toast.info ('Making whitepaper public before submitting to counsel...');
        const { data: status_response, error: status_error } =;
          await supabase.functions.invoke (
            'set - shared - whitepaper - public - status',
            {
              body: { whitepaper_id: whitepaperIdToSubmit, is_public: true },

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }
          )
        if (statusError)
          throw new Error(
            `Failed to make whitepaper public: ${statusError.message}`
          )
        if (!statusResponse)
          throw new Error(
            'No response received from set-shared-whitepaper-public-status function'
          )
        if ((statusResponse as any).error)
          throw new Error((statusResponse as any).error)
        setCurrentSharedWhitepaperIsPublic(true)
      }
<<<<<<< HEAD
<<<<<<< HEAD
      const { data: notifyResponse, error: notifyError } =
        await supabase.functions.invoke('notify-legal-team', {
          body: {
            whitepaperId: whitepaperIdToSubmit
            sharableLink: linkToSubmit, // Corrected variable name
            tokenName: tokenName
          }
        })
      if (notifyError)
        throw new Error(`Failed to notify counsel: ${notifyError.message}`)
      if (!notifyResponse)
        throw new Error('No response received from notify-legal-team function')
      if ((notifyResponse as any).error)
        throw new Error(
          `Error from notify-legal-team: ${(notifyResponse as any).error}`
        )
      toast.success('Whitepaper submitted to counsel successfully!')
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const { data: notify_response, error: notify_error } =;
        await supabase.functions.invoke ('notify - legal - team', {
          body: {
            whitepaper_id: whitepaperIdToSubmit,
            sharable_link: linkToSubmit, // Corrected variable name;
            token_name: token_name,
          },
        });
      if (
        throw new Error (`Failed to notify counsel: ${notify_error.message}`)) {
  $2
}
      if (
        throw new Error ('No response received from notify - legal - team function')) {
  $2
}
      if (.error)) {
  $2
}
        throw new Error (
          `Error from notify - legal - team: ${(notify_response as any).error}`);
      toast.success ('Whitepaper submitted to counsel successfully!');
    } catch (e: any) {
      logErrorToProduction (
        e instanceof Error ? e.message : String (e),
        e instanceof Error ? e : undefined,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { message: 'Error submitting to counsel' }
      )
      setError('Failed to submit to counsel: ' + e.message)
      toast.error('Failed to submit to counsel: ' + e.message)
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      const whitepaperPayload = {
        tokenName
        tokenSupply
        sections
        distributionChartData
        distributionBreakdown
      }
      const { data: response, error: funcError } =
        await supabase.functions.invoke('create-shared-whitepaper', {
          body: whitepaperPayload
        })
      if (funcError)
        throw new Error(`Supabase function error: ${funcError.message}`)
      if (!response)
        throw new Error(
          'No response received from create-shared-whitepaper function'
        )
      if ((response as any).error)
        throw new Error(
          `Error from create-shared-whitepaper: ${(response as any).error}`
        )
      if (!(response as any).id)
        throw new Error('Failed to get ID for shareable link.')
      const link = `${window.location.origin}/whitepaper/view/${(response as any).id}`
      setShareableLink(link)
      setCurrentSharedWhitepaperId((response as any).id)
      setCurrentSharedWhitepaperIsPublic((response as any).is_public)
      toast.success('Shareable link generated!')
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
        { message: 'Error generating shareable link' }
      )
      setError('Failed to generate shareable link: ' + e.message)
      toast.error('Failed to generate shareable link.')
    } finally {
      setIsSharing(false)
    }
  }
  const handleTogglePublicStatus = async () => {
    if (
      !currentSharedWhitepaperId |
      currentSharedWhitepaperIsPublic === null
    ) {
      toast.error('No shareable whitepaper selected or status is unknown.')
      return
    }
    // Optimistically update UI, or wait for response for certainty
    const newPublicStatus = !currentSharedWhitepaperIsPublic
    // For optimistic update:
    // setCurrentSharedWhitepaperIsPublic(newPublicStatus)
    try {
      const { data: response, error: funcError } =
        await supabase.functions.invoke('set-shared-whitepaper-public-status', {
          body: {
            whitepaperId: currentSharedWhitepaperId
            isPublic: newPublicStatus
          }
        })
      if (funcError)
        throw new Error(`Supabase function error: ${funcError.message}`)
      if (!response)
        throw new Error(
          'No response received from set-shared-whitepaper-public-status function'
        )
      if ((response as any).error)
        throw new Error(
          `Error from set-shared-whitepaper-public-status: ${(response as any).error}`
        )
      setCurrentSharedWhitepaperIsPublic((response as any).is_public); // Update with actual status from DB
      toast.success(
        `Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`
      )
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
        { message: 'Error toggling public status' }
      )
      setError('Failed to update public status: ' + e.message)
      toast.error('Failed to update public status.')
      // Revert optimistic update if it failed:
      // setCurrentSharedWhitepaperIsPublic(!newPublicStatus)
    }
  }
  const handleSubmitToCounsel = async () => {
    if (sections.length === 0) {
      toast.error(
        'Please generate and finalize the whitepaper before submitting.'
      )
      return
    }
    setIsSubmittingToCounsel(true)
    setError(null)
    try {
      let linkToSubmit = shareableLink
      let whitepaperIdToSubmit = currentSharedWhitepaperId
      if (!linkToSubmit |!whitepaperIdToSubmit) {
        toast.info('Generating a shareable link first to submit to counsel...')
        const whitepaperPayload = {
          tokenName
          tokenSupply
          sections
          distributionChartData
          distributionBreakdown
        }
        const { data: linkResponse, error: linkFuncError } =
          await supabase.functions.invoke('create-shared-whitepaper', {
            body: whitepaperPayload
          })
        if (linkFuncError)
          throw new Error(
            `Failed to create link for counsel: ${linkFuncError.message}`
          )
        if (!linkResponse)
          throw new Error(
            'No response received from create-shared-whitepaper function for counsel'
          )
        if ((linkResponse as any).error)
          throw new Error(
            `Error from create-shared-whitepaper function: ${(linkResponse as any).error}`
          )
        if (!(linkResponse as any).id)
          throw new Error('Failed to get ID for shareable link for counsel.')
        linkToSubmit = `${window.location.origin}/whitepaper/view/${(linkResponse as any).id}`
        whitepaperIdToSubmit = (linkResponse as any).id
        setShareableLink(linkToSubmit)
        setCurrentSharedWhitepaperId(whitepaperIdToSubmit)
        setCurrentSharedWhitepaperIsPublic((linkResponse as any).is_public)
      }
      // Ensure it's public before submitting, or handle as per requirements
      if (currentSharedWhitepaperIsPublic === false) {
        toast.info('Making whitepaper public before submitting to counsel...')
        const { data: statusResponse, error: statusError } =
          await supabase.functions.invoke(
            'set-shared-whitepaper-public-status'
            {
              body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }
            }
          )
        if (statusError)
          throw new Error(
            `Failed to make whitepaper public: ${statusError.message}`
          )
        if (!statusResponse)
          throw new Error(
            'No response received from set-shared-whitepaper-public-status function'
          )
        if ((statusResponse as any).error)
          throw new Error((statusResponse as any).error)
        setCurrentSharedWhitepaperIsPublic(true)
      }
      const { data: notifyResponse, error: notifyError } =
        await supabase.functions.invoke('notify-legal-team', {
          body: {
            whitepaperId: whitepaperIdToSubmit
            sharableLink: linkToSubmit, // Corrected variable name
            tokenName: tokenName
          }
        })
      if (notifyError)
        throw new Error(`Failed to notify counsel: ${notifyError.message}`)
      if (!notifyResponse)
        throw new Error('No response received from notify-legal-team function')
      if ((notifyResponse as any).error)
        throw new Error(
          `Error from notify-legal-team: ${(notifyResponse as any).error}`
        )
      toast.success('Whitepaper submitted to counsel successfully!')
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e)
        e instanceof Error ? e : undefined
        { message: 'Error submitting to counsel' }
      )
      setError('Failed to submit to counsel: ' + e.message)
      toast.error('Failed to submit to counsel: ' + e.message)
    } finally {
      setIsSubmittingToCounsel(false)
    }
  }
      setIsSubmittingToCounsel(false)
    }
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { supabase } from '@/integrations/supabase/client';
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel'; // Import the new preview panel;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
    setIsSharing(true)
    setError(null)
    setShareableLink(null)
    setCurrentSharedWhitepaperId(null)
    setCurrentSharedWhitepaperIsPublic(null)

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useCallback } from 'react',
import { supabase } from '@/integrations/supabase/client',
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { toast } from "sonner",
import { logErrorToProduction } from '@/utils/productionLogger',
interface WhitepaperSection {
  id: string,
  title: string,
  content: string
import React, { useState, useEffect, useCallback } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',;
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Trash2, Download, Share2 } from 'lucide-react';
import { Send } from 'lucide-react', // Added Send icon;
import { toast } from "sonner",;
import { logErrorToProduction } from '@/utils/productionLogger',;
interface WhitepaperSection {;
  id: string,;
  title: string,;
  content: string;
}
;
interface DistributionItem {;
  id: string,;
  name: string,;
  percentage: string;
}
;
interface DistributionChartItem {;
    name: string,;
    value: number;
}
;
const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#AA00FF#FF00AA#00AAAA#AAAA00'],;
// Helper for slugifying filenames;
const slugify = (text: string): string => {;
  return text.toString().toLowerCase();
    .replace(/\s+/g, '-')           // Replace spaces with -;
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars;
    .replace(/--+/g, '-')         // Replace multiple - with single -;
    .replace(/^-+/, '')             // Trim - from start of text;
    .replace(/-+$/, ''),            // Trim - from end of text;
},;
const WhitepaperGeneratorPage: React.FC = () => {;
  const [tokenName, setTokenName] = useState('My Awesome Token'),;
  const [tokenSupply, setTokenSupply] = useState<string>('1000000000'),;
  const [useCases, setUseCases] = useState('To facilitate transactions and reward users in our innovative freelance AI marketplace. It will be used for payments, staking for dispute resolution, and accessing premium features.'),;
  const [rewardsLogic, setRewardsLogic] = useState('Users earn tokens by completing projects and participating in platform governance. A percentage of transaction fees is burned, creating a deflationary pressure. Staking rewards are distributed weekly.'),;
  const [distributionBreakdown, setDistributionBreakdown] = useState(''),;
  const [governanceLogic, setGovernanceLogic] = useState('Token holders can vote on platform upgrades, fee structures, and policy changes. Staking tokens increases voting power. A decentralized council oversees proposal implementation.'),;
  const [legalDisclaimers, setLegalDisclaimers] = useState('This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. The token is a utility token and should not be considered an investment. Please consult with a legal professional in your jurisdiction.'),;
  const [distributionData, setDistributionData] = useState<DistributionItem[]>([;
    { id: crypto.randomUUID(), name: 'Team & Advisors', percentage: '15' },;
    { id: crypto.randomUUID(), name: 'Private Sale Investors', percentage: '20' },;
    { id: crypto.randomUUID(), name: 'Ecosystem Development Fund', percentage: '35' },;
    { id: crypto.randomUUID(), name: 'Community Rewards & Airdrops', percentage: '20' },;
    { id: crypto.randomUUID(), name: 'Public Sale Allocation', percentage: '10' }]),;
  const [isLoading, setIsLoading] = useState(false),;
  const [isDownloading, setIsDownloading] = useState(false),;
  const [isSharing, setIsSharing] = useState(false),;
  const [isSubmittingToCounsel, setIsSubmittingToCounsel] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [shareableLink, setShareableLink] = useState<string | null>(null),;
  const [currentSharedWhitepaperId, setCurrentSharedWhitepaperId] = useState<string | null>(null), // For public/private toggle;
  const [currentSharedWhitepaperIsPublic, setCurrentSharedWhitepaperIsPublic] = useState<boolean | null>(null), // For public/private toggle;
  const [rawDraft, setRawDraft] = useState<string | null>(null),;
  const [sections, setSections] = useState<WhitepaperSection[]>([]),;
  const [showRawDraft, setShowRawDraft] = useState(false),;
  const previewPanelRef = React.useRef<HTMLDivElement>(null),;
  useEffect(() => {;
    if(error && !isLoading && !isDownloading && !isSharing && !isSubmittingToCounsel) setError(null);
  }, [tokenName, tokenSupply, useCases, rewardsLogic, distributionData, governanceLogic, legalDisclaimers, sections]),;
  const parseWhitepaperDraft = useCallback((draft: string): WhitepaperSection[] => {;
    if (!draft) return [],;
    const sectionRegex = /(?:^|\n)(?:##\s*(.*?)\s*\n|^\*\*(.*?):\*\*\s*\n)([\s\S]*?)(?=\n(?:##\s|\*\*.+:\*\*)|$)/g,;
    const parsed: WhitepaperSection[] = [],;
    let match,;
    let idCounter = 0,;
    while ((match = sectionRegex.exec(draft)) !== null) {;
      const title = (match[1] || match[2] || `Section ${idCounter + 1}`).trim(),;
      const content = (match[3] || '').trim(),;
      parsed.push({ id: `section-${idCounter++}-${title.toLowerCase().replace(/\s+/g, '-')}`, title, content });
    }
    if (parsed.length === 0 && draft.trim().length > 0) {;
      parsed.push({ id: 'section-0-full-draft', title: 'Full Draft', content: draft.trim() });
    }
    return parsed
  }, []),

  const handleDistributionChange = (id: string, field: 'name' | 'percentage', value: string) => {
    setDistributionData(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item))
  },

  const addDistributionItem = () => {
    setDistributionData(prev => [...prev, { id: crypto.randomUUID(), name: '', percentage: '' }])
  },

  const removeDistributionItem = (id: string) => {
    setDistributionData(prev => prev.filter(item => item.id !== id))
  },

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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const whitepaperPayload = {
        tokenName,
        tokenSupply,
        sections,
        distributionChartData,
<<<<<<< HEAD
<<<<<<< HEAD
        distributionBreakdown,
      }
      const { data: response, error: funcError } =
        await supabase.functions.invoke('create-shared-whitepaper', {
          body: whitepaperPayload,
        })
      if (true) {}
        throw new Error(`Supabase function error: ${funcError.message}`)
      if (true) {}
        throw new Error(
          'No response received from create-shared-whitepaper function'
        )
      if ((response as any).error)
        throw new Error(
          `Error from create-shared-whitepaper: ${(response as any).error}`
        )
      if (!(response as any).id)
        throw new Error('Failed to get ID for shareable link.')
      const link = `${window.location.origin}/whitepaper/view/${(response as any).id}`
      setShareableLink(link)
      setCurrentSharedWhitepaperId((response as any).id)
      setCurrentSharedWhitepaperIsPublic((response as any).is_public)
      toast.success('Shareable link generated!')
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e),
        e instanceof Error ? e : undefined,
        { message: 'Error generating shareable link' }
      )
      setError('Failed to generate shareable link: ' + e.message)
      toast.error('Failed to generate shareable link.')
    } finally {
      setIsSharing(false)
    }
  }
  const handleTogglePublicStatus = async () => {
    if (
      !currentSharedWhitepaperId ||
      currentSharedWhitepaperIsPublic === null
    ) {
      toast.error('No shareable whitepaper selected or status is unknown.')
      return;
    }
    // Optimistically update UI, or wait for response for certainty
    const newPublicStatus = !currentSharedWhitepaperIsPublic
    // For optimistic update:
    // setCurrentSharedWhitepaperIsPublic(newPublicStatus)
    try {
      const { data: response, error: funcError } =
        await supabase.functions.invoke('set-shared-whitepaper-public-status', {
          body: {
            whitepaperId: currentSharedWhitepaperId,
            isPublic: newPublicStatus,
          },
        })
      if (true) {}
        throw new Error(`Supabase function error: ${funcError.message}`)
      if (true) {}
        throw new Error(
          'No response received from set-shared-whitepaper-public-status function'
        )
      if ((response as any).error)
        throw new Error(
          `Error from set-shared-whitepaper-public-status: ${(response as any).error}`
        )
      setCurrentSharedWhitepaperIsPublic((response as any).is_public); // Update with actual status from DB
      toast.success(
        `Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`
      )
    } catch (e: any) {
      logErrorToProduction(
        e instanceof Error ? e.message : String(e),
        e instanceof Error ? e : undefined,
        { message: 'Error toggling public status' }
      )
      setError('Failed to update public status: ' + e.message)
      toast.error('Failed to update public status.')
      // Revert optimistic update if it failed:
      // setCurrentSharedWhitepaperIsPublic(!newPublicStatus)
    }
  }
  const handleSubmitToCounsel = async () => {
    if (sections.length === 0) {
      toast.error(
        'Please generate and finalize the whitepaper before submitting.'
      )
      return;
    }
    setIsSubmittingToCounsel(true)
    setError(null)
    try {
      let linkToSubmit = shareableLink
      let whitepaperIdToSubmit = currentSharedWhitepaperId
      if (!linkToSubmit || !whitepaperIdToSubmit) {
        toast.info('Generating a shareable link first to submit to counsel...')
        const whitepaperPayload = {
          tokenName,
          tokenSupply,
          sections,
          distributionChartData,
          distributionBreakdown,
        }
        const { data: linkResponse, error: linkFuncError } =
          await supabase.functions.invoke('create-shared-whitepaper', {
            body: whitepaperPayload,
          })
        if (true) {}
          throw new Error(
            `Failed to create link for counsel: ${linkFuncError.message}`
          )
        if (true) {}
          throw new Error(
            'No response received from create-shared-whitepaper function for counsel'
          )
        if ((linkResponse as any).error)
          throw new Error(
            `Error from create-shared-whitepaper function: ${(linkResponse as any).error}`
          )
        if (!(linkResponse as any).id)
          throw new Error('Failed to get ID for shareable link for counsel.')
        linkToSubmit = `${window.location.origin}/whitepaper/view/${(linkResponse as any).id}`
        whitepaperIdToSubmit = (linkResponse as any).id
        setShareableLink(linkToSubmit)
        setCurrentSharedWhitepaperId(whitepaperIdToSubmit)
        setCurrentSharedWhitepaperIsPublic((linkResponse as any).is_public)
      }

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
      toast.success("Shareable link generated!")
    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),
      setError("Failed to generate shareable link: " + e.message),
      toast.error("Failed to generate shareable link.")
    } finally {
      setIsSharing(false)
    }
  },

  const handleTogglePublicStatus = async () => {
    if (!currentSharedWhitepaperId || currentSharedWhitepaperIsPublic === null) {
        toast.error("No shareable whitepaper selected or status is unknown."),
        return
    }
    // Optimistically update UI, or wait for response for certainty
    const newPublicStatus = !currentSharedWhitepaperIsPublic,

    // For optimistic update: // setCurrentSharedWhitepaperIsPublic(newPublicStatus),

    try {
        const { data: response, error: funcError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }}),
        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`),
        if (!response) throw new Error('No response received from set-shared-whitepaper-public-status function'),
        if ((response as any).error) throw new Error(`Error from set-shared-whitepaper-public-status: ${(response as any).error}`),

        setCurrentSharedWhitepaperIsPublic((response as any).is_public), // Update with actual status from DB
        toast.success(`Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`)

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error toggling public status' }),
        setError("Failed to update public status: " + e.message),
        toast.error("Failed to update public status."),
        // Revert optimistic update if it failed:
        // setCurrentSharedWhitepaperIsPublic(!newPublicStatus)
    }
  },

  const handleSubmitToCounsel = async () => {
    if (sections.length === 0) {
        toast.error("Please generate and finalize the whitepaper before submitting."),
        return
    }
    setIsSubmittingToCounsel(true),
    setError(null),
    try {
        let linkToSubmit = shareableLink,
        let whitepaperIdToSubmit = currentSharedWhitepaperId,

        if (!linkToSubmit || !whitepaperIdToSubmit) {
            toast.info("Generating a shareable link first to submit to counsel..."),
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
            toast.info("Making whitepaper public before submitting to counsel..."),
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }}),
            if (statusError) throw new Error(`Failed to make whitepaper public: ${statusError.message}`),
            if (!statusResponse) throw new Error('No response received from set-shared-whitepaper-public-status function'),
            if ((statusResponse as any).error) throw new Error((statusResponse as any).error),
            setCurrentSharedWhitepaperIsPublic(true)
;
      pdf.save(`${slugify(tokenName || 'whitepaper')}_whitepaper.pdf`);
    } catch (e: any) {;
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading PDF' }),;
      setError("Failed to download PDF file. " + e.message);
    } finally {;
      setIsDownloading(false);
    }
  },;
  const handleGenerateShareableLink = async () => {;
    if (sections.length === 0) {;
      toast.error("Please generate the whitepaper content first before creating a shareable link."),;
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
      toast.success("Shareable link generated!");
    } catch (e: any) {;
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),;
      setError("Failed to generate shareable link: " + e.message),;
      toast.error("Failed to generate shareable link.");
    } finally {;
      setIsSharing(false);
    }
  },;
  const handleTogglePublicStatus = async () => {;
    if (!currentSharedWhitepaperId || currentSharedWhitepaperIsPublic === null) {;
        toast.error("No shareable whitepaper selected or status is unknown."),;
        return;
    }
    // Optimistically update UI, or wait for response for certainty;
    const newPublicStatus = !currentSharedWhitepaperIsPublic,;
    // For optimistic update: // setCurrentSharedWhitepaperIsPublic(newPublicStatus),;
    try {;
        const { data: response, error: funcError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {;
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }}),;
        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`),;
        if (!response) throw new Error('No response received from set-shared-whitepaper-public-status function'),;
        if ((response as any).error) throw new Error(`Error from set-shared-whitepaper-public-status: ${(response as any).error}`),;
        setCurrentSharedWhitepaperIsPublic((response as any).is_public), // Update with actual status from DB;
        toast.success(`Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`);
    } catch (e: any) {;
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error toggling public status' }),;
        setError("Failed to update public status: " + e.message),;
        toast.error("Failed to update public status."),;
        // Revert optimistic update if it failed:;
        // setCurrentSharedWhitepaperIsPublic(!newPublicStatus);
    }
  },;
  const handleSubmitToCounsel = async () => {;
    if (sections.length === 0) {;
        toast.error("Please generate and finalize the whitepaper before submitting."),;
        return;
    }
    setIsSubmittingToCounsel(true),;
    setError(null),;
    try {;
        let linkToSubmit = shareableLink,;
        let whitepaperIdToSubmit = currentSharedWhitepaperId,;
        if (!linkToSubmit || !whitepaperIdToSubmit) {;
            toast.info("Generating a shareable link first to submit to counsel..."),;
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
            toast.info("Making whitepaper public before submitting to counsel..."),;
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {;
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }}),;
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

        toast.success("Whitepaper submitted to counsel successfully!")

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error submitting to counsel' }),
        setError("Failed to submit to counsel: " + e.message),
        toast.error("Failed to submit to counsel: " + e.message)
    } finally {
        setIsSubmittingToCounsel(false)
    }
},
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">
      {/* Left Column: Inputs and Editors */}

<<<<<<< HEAD
        <form onSubmit={e => e.preventDefault()} className='space-y-6'>
          {/* ... (Input fields remain the same) ... */}
          <div>
            <label htmlFor='tokenName' className='block text-sm font-medium'>
              Token Name:
            </label>

    <div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">
      {/* Left Column: Inputs and Editors */}
        <form onSubmit={e => e.preventDefault()} className='space-y-6'>
ursor/fix-website-loading-errors-and-merge-6662

  return (
    <div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">
      {/* Left Column: Inputs and Editors */}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">
      {/* Left Column: Inputs and Editors */}
      <div className='md:w-1/2 lg:w-2/5 xl:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-xl font-bold text-center flex-grow'>
            Whitepaper Configuration
          </h1>
          <div className='flex space-x-1'>
            <Button
              onClick={handleDownloadMarkdown}
              disabled={
                isDownloading |
                sections.length === 0 |
                isLoading |
                isSharing |
<<<<<<< HEAD
=======
                isDownloading ||
                sections && sections.length === 0 ||
                isLoading ||
                isSharing ||

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                isSubmittingToCounsel
              }
              variant='outline'
              size='sm'
              title='Download as Markdown'
            >
              <Download className='h-4 w-4' />{' '}
              <span className='ml-1 hidden sm:inline'>MD</span>
            </Button>
            <Button
              onClick={handleDownloadPdf}
              disabled={
<<<<<<< HEAD
<<<<<<< HEAD
                isDownloading |
                sections.length === 0 |
                isLoading |
                isSharing |
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                isDownloading ||
                sections && sections.length === 0 ||
                isLoading ||
                isSharing ||

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                isSubmittingToCounsel
              }
              variant='outline'
              size='sm'
              title='Download as PDF'
            >
              <Download className='h-4 w-4' />{' '}
              <span className='ml-1 hidden sm:inline'>PDF</span>
            </Button>
            <Button
              onClick={handleGenerateShareableLink}
              disabled={
<<<<<<< HEAD
<<<<<<< HEAD
                isSharing |
                sections.length === 0 |
                isLoading |
                isDownloading |
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                isSharing ||
                sections && sections.length === 0 ||
                isLoading ||
                isDownloading ||

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                isSubmittingToCounsel
              }
              variant='outline'
              size='sm'
              title='Generate Shareable Link'
            >
              <Share2 className='h-4 w-4' />{' '}
<<<<<<< HEAD
<<<<<<< HEAD
              <span className='ml-1 hidden sm:inline'>Share</span>
            </Button>
          </div>
        </div>
        <form onSubmit={e => e.preventDefault()} className='space-y-6'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <span className='ml-1 hidden sm:inline'>Share</span>;
            </Button>;
          </div>;
        </div>;

        <form onSubmit={e => e && e.preventDefault()} className='space-y-6'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* ... (Input fields remain the same) ... */}
          <div>
            <label htmlFor='tokenName' className='block text-sm font-medium'>
              Token Name:
            </label>
            <Input
              id='tokenName'
              value={tokenName}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={e => setTokenName(e && e.target.value)}
      setIsSubmittingToCounsel (false);
    }
  }
  return (
    <div className='flex flex - col md:flex - row h - screen max - h-screen p - 4 gap - 4 bg - gray - 100'>;
      {/* Left Column: Inputs and Editors */}
      <div className='md:w - 1/2 lg:w - 2/5 xl:w - 1/3 p - 4 bg - white rounded - lg shadow - md overflow - y-auto'>;
        <div className='flex justify - between items - center mb - 6'>;
          <h1 className='text - xl font - bold text - center flex - grow'>;
            Whitepaper Configuration;
          </h1>;
          <div className='flex space - x-1'>;
            <Button;
              on_click={handleDownloadMarkdown}
              disabled={
                is_downloading ||;
                sections.length === 0 ||;
                is_loading ||;
                is_sharing ||;
                isSubmittingToCounsel;
              }
              variant='outline';
              size='sm';
              title='Download as Markdown';
            >;
              <Download className='h - 4 w - 4' />{' '}
              <span className='ml - 1 hidden sm:inline'>MD</span>;
            </Button>;
            <Button;
              on_click={handleDownloadPdf}
              disabled={
                is_downloading ||;
                sections.length === 0 ||;
                is_loading ||;
                is_sharing ||;
                isSubmittingToCounsel;
              }
              variant='outline';
              size='sm';
              title='Download as PDF';
            >;
              <Download className='h - 4 w - 4' />{' '}
              <span className='ml - 1 hidden sm:inline'>PDF</span>;
            </Button>;
            <Button;
              on_click={handleGenerateShareableLink}
              disabled={
                is_sharing ||;
                sections.length === 0 ||;
                is_loading ||;
                is_downloading ||;
                isSubmittingToCounsel;
              }
              variant='outline';
              size='sm';
              title='Generate Shareable Link';
            >;
              <Share2 className='h - 4 w - 4' />{' '}
              <span className='ml - 1 hidden sm:inline'>Share</span>;
            </Button>;
          </div>;
        </div>;
        <form on_submit={e => e.prevent_default ()} className='space - y-6'>;
          {/* ... (Input fields remain the same) ... */}
          <div>;
            <label html_for='token_name' className='block text - sm font - medium'>;
              Token Name:;
            </label>;
            <Input;
              id='token_name';
              value={token_name}
              on_change={e => setTokenName (e.target.value)}
              required;
            />;
          </div>;
          <div>;

            <label html_for='token_supply' className='block text - sm font - medium'>;
              Token Supply:;
            </label>;
            <Input;
              id='token_supply';
              value={token_supply}
              on_change={e => setTokenSupply (e.target.value)}

              required;
            />;
          </div>;
          <div>;

            <label html_for='use_cases' className='block text - sm font - medium'>;
              Use Cases:;
            </label>;
            <textarea;
              id='use_cases';
              value={use_cases}
              on_change={e => setUseCases (e.target.value)}
              required;
              className='mt - 1 block w - full border - gray - 300 rounded - md shadow - sm';

              rows={3}
            />;
          </div>;
          <div>;

            />;
          </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Token Distribution Inputs */}
          <div className='space-y-3 p-3 border rounded-md'>
            <h2 className='text-lg font-semibold'>Token Distribution</h2>
            {distributionData.map(item => (
              <div key={item.id} className='flex items-center space-x-2'>
                <Input
                  type='text'
                  placeholder='Category'
                  value={item.name}
                  onChange={e =>
                    handleDistributionChange(item.id, 'name', e.target.value)
                  }
                  className='flex-grow'
                />
                <Input
                  type='number'
                  placeholder='%'
<<<<<<< HEAD
<<<<<<< HEAD
                  value={item.percentage}
                  onChange={e =>
                    handleDistributionChange(
                      item.id
                      'percentage'
                      e.target.value
                    )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  value={item && item.percentage}
                  onChange={e =>;
                    handleDistributionChange(;
                      item && item.id,;
                      'percentage',;
                      e && e.target.value;
                    );

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }
                  className='w-24'
                  min='0'
                  max='100'
                />
                <Button
                  variant='ghost'
                  size='icon'
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="md:w-1/2 lg:w-2/5 xl:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-center flex-grow">Whitepaper Configuration</h1>
            <div className="flex space-x-1">
                <Button onClick={handleDownloadMarkdown} disabled={isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel } variant="outline" size="sm" title="Download as Markdown">
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">MD</span>
                </Button>
                <Button onClick={handleDownloadPdf} disabled={isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel} variant="outline" size="sm" title="Download as PDF">
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">PDF</span>
                </Button>
                 <Button onClick={handleGenerateShareableLink} disabled={isSharing || sections.length === 0 || isLoading || isDownloading || isSubmittingToCounsel} variant="outline" size="sm" title="Generate Shareable Link">
                    <Share2 className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">Share</span>
                </Button>
            </div>
        </div>
=======
                  onClick={() => removeDistributionItem(item.id)}
                  aria-label='Remove'
                >
                  <Trash2 className='h-4 w-4' />
                </Button>              </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => removeDistributionItem(item && item.id)}
                  aria-label='Remove';
                >;
                  <Trash2 className='h-4 w-4' />;
                </Button>              </div>;
            ))}
            <Button
              type='button'
              onClick={addDistributionItem}
              variant='outline'
              className='w-full'>;
              Add Distribution Item;
            </Button>;
            <div>;
              <label
                htmlFor='distributionBreakdownDetails'
                className='block text-sm font-medium'>;
                Additional Distribution Details (Text):;
              </label>;
              <textarea
                id='distributionBreakdownDetails'
                value={distributionBreakdown}
                onChange={e => setDistributionBreakdown(e && e.target.value)}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm';
                rows={2}

              />            </div>;
          </div>;

          <div>;

            <label
              htmlFor='governanceLogic'
              className='block text-sm font-medium'>;
              Governance Logic:;
            </label>;
            <textarea
              id='governanceLogic'
              value={governanceLogic}
              onChange={e => setGovernanceLogic(e && e.target.value)}
              required;
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm';
            <label html_for='rewards_logic' className='block text - sm font - medium'>;
              Rewards Logic:;
            </label>;
            <textarea;
              id='rewards_logic';
              value={rewards_logic}
              on_change={e => setRewardsLogic (e.target.value)}
              required;
              className='mt - 1 block w - full border - gray - 300 rounded - md shadow - sm';
              rows={3}
            />;
          </div>;
          {/* Token Distribution Inputs */}
          <div className='space - y-3 p - 3 border rounded - md'>;
            <h2 className='text - lg font - semibold'>Token Distribution</h2>;
            {distribution_data.map (item => (
              <div key={item.id} className='flex items - center space - x-2'>;
                <Input;
                  type='text';
                  placeholder='Category';
                  value={item.name}
                  on_change={e =>;
                    handleDistributionChange (item.id, 'name', e.target.value);
                  }
                  className='flex - grow';
                />;
                <Input;
                  type='number';
                  placeholder='%';
                  value={item.percentage}
                  on_change={e =>;
                    handleDistributionChange (
                      item.id,
                      'percentage',
                      e.target.value);
                  }
                  className='w - 24';
                  min='0';
                  max='100';
                />;
                <Button;
                  variant='ghost';
                  size='icon';
                  on_click={() => removeDistributionItem (item.id)}
                  aria - label='Remove';
                >;
                  <Trash2 className='h - 4 w - 4' />;
                </Button>              </div>))}
            <Button;
              type='button';
              on_click={addDistributionItem}
              variant='outline';
              className='w - full';
            >;
              Add Distribution Item;
            </Button>;
            <div>;
              <label;
                html_for='distributionBreakdownDetails';
                className='block text - sm font - medium';
              >;
                Additional Distribution Details (Text):;
              </label>;
              <textarea;
                id='distributionBreakdownDetails';
                value={distribution_breakdown}
                on_change={e => setDistributionBreakdown (e.target.value)}
                className='mt - 1 block w - full border - gray - 300 rounded - md shadow - sm';
                rows={2}
              />            </div>;
          </div>;
          <div>;
            <label;
              html_for='governance_logic';
              className='block text - sm font - medium';
            >;
              Governance Logic:;
            </label>;
            <textarea;
              id='governance_logic';
              value={governance_logic}
              on_change={e => setGovernanceLogic (e.target.value)}
              required;
              className='mt - 1 block w - full border - gray - 300 rounded - md shadow - sm';
              rows={3}
            />;
          </div>;
          <div>;



            ))}
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
            <div>

<<<<<<< HEAD
          </div>
          <div>

          </div>
          <div>
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
            <div>
            ))}
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
            <div>
            ))}
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
            <div>
              <label
                htmlFor='distributionBreakdownDetails'
                className='block text-sm font-medium'
              >
                Additional Distribution Details (Text):
              </label>
              <textarea
                id='distributionBreakdownDetails'
                value={distributionBreakdown}
                onChange={e => setDistributionBreakdown(e.target.value)}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
                rows={2}
              />            </div>
              <label htmlFor="distributionBreakdownDetails" className="block text-sm font-medium">Additional Distribution Details (Text):</label>
              <textarea id="distributionBreakdownDetails" value={distributionBreakdown} onChange={(e) => setDistributionBreakdown(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={2}/>
            </div>
          </div>
          <div>
            <label
              htmlFor='governanceLogic'
              className='block text-sm font-medium'
            >
              Governance Logic:
            </label>
            <textarea
              id='governanceLogic'
              value={governanceLogic}
              onChange={e => setGovernanceLogic(e.target.value)}
              required
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              rows={3}
            />
=======
              <label htmlFor="distributionBreakdownDetails" className="block text-sm font-medium">Additional Distribution Details (Text):</label>
              <textarea id="distributionBreakdownDetails" value={distributionBreakdown} onChange={(e) => setDistributionBreakdown(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={2}/>
            </div>


          </div>
          <div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <label htmlFor="governanceLogic" className="block text-sm font-medium">Governance Logic:</label>
            <textarea id="governanceLogic" value={governanceLogic} onChange={(e) => setGovernanceLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>
          </div>
          <div>
            <label htmlFor="legalDisclaimers" className="block text-sm font-medium">Legal Disclaimers:</label>
            <textarea id="legalDisclaimers" value={legalDisclaimers} onChange={(e) => setLegalDisclaimers(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>

          </div>
          <div>
            <label
              htmlFor='legalDisclaimers'
<<<<<<< HEAD
              className='block text-sm font-medium'
            >
              Legal Disclaimers:
            </label>
            <textarea
              id='legalDisclaimers'
              value={legalDisclaimers}
              onChange={e => setLegalDisclaimers(e.target.value)}
              required
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              rows={3}
            />          </div>
          {/* END OF INPUT FIELDS */}
          <Button
            type='button'
            onClick={handleGenerateWhitepaper}
=======
              className='block text-sm font-medium'>;
              Legal Disclaimers:;
            </label>;
            <textarea
              id='legalDisclaimers'
              value={legalDisclaimers}
              onChange={e => setLegalDisclaimers(e && e.target.value)}
              required;
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm';
              rows={3}
            />          </div>;
          {/* END OF INPUT FIELDS */}
          <Button

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>;

          {isLoading && (;
            <p className='text-center text-sm text-blue-600'>;
              Draft generation in progress...;
            </p>;

          )}
          {error &&;
            !isLoading &&;
            !isDownloading &&;
            !isSharing &&;
            !isSubmittingToCounsel && (;
              <p className='text-center text-sm text-red-600 p-2 bg-red-50 rounded-md'>;
                {error}
              </p>;
            )}


          {shareableLink && !isSharing && currentSharedWhitepaperId && (;
            <div className='mt-4 p-3 border rounded-md bg-green-50'>;
              <div className='flex justify-between items-center'>;
                <label className='block text-sm font-medium text-green-700'>;
                  Shareable Link:;
                </label>;

                <Button
                  onClick={handleTogglePublicStatus}
                  variant='outline'
                  size='sm' // smaller button
                  disabled={isSharing} // Disable while another share operation is in progress
                  className={
                    currentSharedWhitepaperIsPublic
                      ? 'bg-red-100 hover:bg-red-200'
                      : 'bg-green-100 hover:bg-green-200'
                  }>;
            <label;
              html_for='legal_disclaimers';
              className='block text - sm font - medium';
            >;
              Legal Disclaimers:;
            </label>;
            <textarea;
              id='legal_disclaimers';
              value={legal_disclaimers}
              on_change={e => setLegalDisclaimers (e.target.value)}
              required;
              className='mt - 1 block w - full border - gray - 300 rounded - md shadow - sm';
              rows={3}
            />          </div>;
          {/* END OF INPUT FIELDS */}
          <Button;
            type='button';
            on_click={handleGenerateWhitepaper}
            disabled={
<<<<<<< HEAD
              isLoading |isDownloading |isSharing |isSubmittingToCounsel
            }
            size='lg'
            className='w-full'          >
            {isLoading ? 'Generating Draft...' : 'Generate Whitepaper Draft'}
          </Button>
          {isLoading && (
            <p className='text-center text-sm text-blue-600'>
              Draft generation in progress...
            </p>
          )}
          {error &&
            !isLoading &&
            !isDownloading &&
            !isSharing &&
            !isSubmittingToCounsel && (
              <p className='text-center text-sm text-red-600 p-2 bg-red-50 rounded-md'>
=======
              is_loading || is_downloading || is_sharing || isSubmittingToCounsel;
            }
            size='lg';
            className='w - full'          >;
            {is_loading ? 'Generating Draft...' : 'Generate Whitepaper Draft'}
          </Button>;
          {is_loading && (
            <p className='text - center text - sm text - blue - 600'>;
              Draft generation in progress...;
            </p>)}
          {error &&;
            !is_loading &&;
            !is_downloading &&;
            !is_sharing &&;
            !isSubmittingToCounsel && (
              <p className='text - center text - sm text - red - 600 p - 2 bg - red - 50 rounded - md'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {error}
              </p>)}
          {shareable_link && !is_sharing && currentSharedWhitepaperId && (
            <div className='mt - 4 p - 3 border rounded - md bg - green - 50'>;
              <div className='flex justify - between items - center'>;
                <label className='block text - sm font - medium text - green - 700'>;
                  Shareable Link:;
                </label>;
                <Button;
                  on_click={handleTogglePublicStatus}
                  variant='outline';
                  size='sm' // smaller button;
                  disabled={is_sharing} // Disable while another share operation is in progress;
                  className={
                    currentSharedWhitepaperIsPublic;
                      ? 'bg - red - 100 hover:bg - red - 200';
                      : 'bg - green - 100 hover:bg - green - 200';
                  }                >;
                  {currentSharedWhitepaperIsPublic;
                    ? 'Make Private';
                    : 'Make Public'}
                </Button>;
              </div>;

                  onClick={() => {;
                    navigator && navigator.clipboard.writeText(shareableLink);
                    toast && toast.success('Link copied to clipboard!');

              <div className='flex items - center space - x-2 mt - 1'>;
                <Input;
                  type='text';
                  value={shareable_link}
                  read_only;
                  className='flex - grow bg - white text - xs';
                />;

            type="button"
            onClick={handleGenerateWhitepaper}
            disabled={isLoading || isDownloading || isSharing || isSubmittingToCounsel}
            size="lg"
            className="w-full"
          >
            {isLoading ? 'Generating Draft...' : 'Generate Whitepaper Draft'}
          </Button>

          {isLoading && <p className="text-center text-sm text-blue-600">Draft generation in progress...</p>}
          {error && !isLoading && !isDownloading && !isSharing && !isSubmittingToCounsel &&
            <p className="text-center text-sm text-red-600 p-2 bg-red-50 rounded-md">{error}</p>
          }


          {shareableLink && !isSharing && currentSharedWhitepaperId && (
            <div className="mt-4 p-3 border rounded-md bg-green-50">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-green-700">Shareable Link:</label>
                <Button
<<<<<<< HEAD
                  onClick={handleTogglePublicStatus}
                  variant='outline'
                  size='sm' // smaller button
                  disabled={isSharing} // Disable while another share operation is in progress
                  className={
                    currentSharedWhitepaperIsPublic
                      ? 'bg-red-100 hover:bg-red-200'
                      : 'bg-green-100 hover:bg-green-200'
                  }                >
                  {currentSharedWhitepaperIsPublic
                    ? 'Make Private'
                    : 'Make Public'}
                </Button>
              </div>
              <div className='flex items-center space-x-2 mt-1'>
                <Input
                  type='text'
                  value={shareableLink}
                  readOnly
                  className='flex-grow bg-white text-xs'
                />
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => {
                    navigator.clipboard.writeText(shareableLink)
                    toast.success('Link copied to clipboard!')
                  }}
                >
                  Copy
                </Button>              </div>
              {currentSharedWhitepaperIsPublic !== null && (
                <p className='text-xs mt-1 text-gray-600'>
                  Currently:{' '}
                  {currentSharedWhitepaperIsPublic
                    ? 'Public'
                    : 'Private (Only admins can view)'}
                </p>
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    onClick={handleTogglePublicStatus}
                    variant="outline"
                    size="sm" // smaller button
                    disabled={isSharing} // Disable while another share operation is in progress
                    className={currentSharedWhitepaperIsPublic ? "bg-red-100 hover:bg-red-200" : "bg-green-100 hover:bg-green-200"}
                >
                    {currentSharedWhitepaperIsPublic ? 'Make Private' : 'Make Public'}
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Input type="text" value={shareableLink} readOnly className="flex-grow bg-white text-xs"/>
                <Button variant="outline" size="sm" onClick={() => {
                    navigator.clipboard.writeText(shareableLink),
                    toast.success("Link copied to clipboard!")
                }}>Copy</Button>
              </div>
               {currentSharedWhitepaperIsPublic !== null && (
                <p className="text-xs mt-1 text-gray-600">
                    Currently: {currentSharedWhitepaperIsPublic ? "Public" : "Private (Only admins can view)"}
                </p>
        }),;
        if (notifyError) throw new Error(`Failed to notify counsel: ${notifyError.message}`),;
        if (!notifyResponse) throw new Error('No response received from notify-legal-team function'),;
        if ((notifyResponse as any).error) throw new Error(`Error from notify-legal-team: ${(notifyResponse as any).error}`),;
        toast.success("Whitepaper submitted to counsel successfully!");
    } catch (e: any) {;
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error submitting to counsel' }),;
        setError("Failed to submit to counsel: " + e.message),;
        toast.error("Failed to submit to counsel: " + e.message);
    } finally {;
        setIsSubmittingToCounsel(false);
    }
},;
  return (;
    <div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">;
      {/* Left Column: Inputs and Editors */}
      <div className="md:w-1/2 lg:w-2/5 xl:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto">;
        <div className="flex justify-between items-center mb-6">;
            <h1 className="text-xl font-bold text-center flex-grow">Whitepaper Configuration</h1>;
            <div className="flex space-x-1">;
                <Button onClick={handleDownloadMarkdown} disabled={isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel } variant="outline" size="sm" title="Download as Markdown">;
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">MD</span>;
                </Button>;
                <Button onClick={handleDownloadPdf} disabled={isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel} variant="outline" size="sm" title="Download as PDF">;
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">PDF</span>;
                </Button>;
                 <Button onClick={handleGenerateShareableLink} disabled={isSharing || sections.length === 0 || isLoading || isDownloading || isSubmittingToCounsel} variant="outline" size="sm" title="Generate Shareable Link">;
                    <Share2 className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">Share</span>;
                </Button>;
            </div>;
        </div>;
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">;
          {/* ... (Input fields remain the same) ... */}
           <div>;
            <label htmlFor="tokenName" className="block text-sm font-medium">Token Name:</label>;
            <Input id="tokenName" value={tokenName} onChange={(e) => setTokenName(e.target.value)} required />;
          </div>;
          <div>;
            <label htmlFor="tokenSupply" className="block text-sm font-medium">Token Supply:</label>;
            <Input id="tokenSupply" value={tokenSupply} onChange={(e) => setTokenSupply(e.target.value)} required />;
          </div>;
          <div>;
            <label htmlFor="useCases" className="block text-sm font-medium">Use Cases:</label>;
            <textarea id="useCases" value={useCases} onChange={(e) => setUseCases(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>;
          </div>;
          <div>;
            <label htmlFor="rewardsLogic" className="block text-sm font-medium">Rewards Logic:</label>;
            <textarea id="rewardsLogic" value={rewardsLogic} onChange={(e) => setRewardsLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>;
          </div>;
          {/* Token Distribution Inputs */}
          <div className="space-y-3 p-3 border rounded-md">;
            <h2 className="text-lg font-semibold">Token Distribution</h2>;
            {distributionData.map((item) => (;
              <div key={item.id} className="flex items-center space-x-2">;
                <Input type="text" placeholder="Category" value={item.name} onChange={(e) => handleDistributionChange(item.id, 'name', e.target.value)} className="flex-grow"/>;
                <Input type="number" placeholder="%" value={item.percentage} onChange={(e) => handleDistributionChange(item.id, 'percentage', e.target.value)} className="w-24" min="0" max="100"/>;
                <Button variant="ghost" size="icon" onClick={() => removeDistributionItem(item.id)} aria-label="Remove"><Trash2 className="h-4 w-4"/></Button>;
              </div>;
            ))}
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>;
            <div>;
              <label htmlFor="distributionBreakdownDetails" className="block text-sm font-medium">Additional Distribution Details (Text):</label>;
              <textarea id="distributionBreakdownDetails" value={distributionBreakdown} onChange={(e) => setDistributionBreakdown(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={2}/>;
            </div>;
          </div>;
          <div>;
            <label htmlFor="governanceLogic" className="block text-sm font-medium">Governance Logic:</label>;
            <textarea id="governanceLogic" value={governanceLogic} onChange={(e) => setGovernanceLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>;
          </div>;
          <div>;
            <label htmlFor="legalDisclaimers" className="block text-sm font-medium">Legal Disclaimers:</label>;
            <textarea id="legalDisclaimers" value={legalDisclaimers} onChange={(e) => setLegalDisclaimers(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>;
          </div>;
          {/* END OF INPUT FIELDS */}
;
          <Button;
            type="button";
            onClick={handleGenerateWhitepaper}
            disabled={isLoading || isDownloading || isSharing || isSubmittingToCounsel}
            size="lg";
            className="w-full";
          >;
            {isLoading ? 'Generating Draft...' : 'Generate Whitepaper Draft'}
          </Button>;
          {isLoading && <p className="text-center text-sm text-blue-600">Draft generation in progress...</p>}
          {error && !isLoading && !isDownloading && !isSharing && !isSubmittingToCounsel &&;
            <p className="text-center text-sm text-red-600 p-2 bg-red-50 rounded-md">{error}</p>;
          }
;
          {shareableLink && !isSharing && currentSharedWhitepaperId && (;
            <div className="mt-4 p-3 border rounded-md bg-green-50">;
              <div className="flex justify-between items-center">;
                <label className="block text-sm font-medium text-green-700">Shareable Link:</label>;
                <Button;
                  variant='outline';
                  size='sm';
                  on_click={() => {
                    navigator.clipboard.write_text (shareable_link);
                    toast.success ('Link copied to clipboard!');
                  }}
                >;
                  Copy;
                </Button>              </div>;

              {currentSharedWhitepaperIsPublic !== null && (
                <p className='text - xs mt - 1 text - gray - 600'>;

                  Currently:{' '}
                  {currentSharedWhitepaperIsPublic;
                    ? 'Public';
                    : 'Private (Only admins can view)'}



              )}
            </div>
          )}
<<<<<<< HEAD
          {isSharing && (
            <p className='text-center text-sm text-blue-600'>
              Generating shareable link...
            </p>
          )}
          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
           {isSharing && <p className="text-center text-sm text-blue-600">Generating shareable link...</p>}

          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
              type='button'
              onClick={handleSubmitToCounsel}
<<<<<<< HEAD
=======
            ))}
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
            <div>
              )}
            </div>
          )}


           {isSharing && <p className="text-center text-sm text-blue-600">Generating shareable link...</p>}


          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
           {isSharing && <p className="text-center text-sm text-blue-600">Generating shareable link...</p>}

          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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

      </div>;


                </p>)}
            </div>)}
          {is_sharing && (
            <p className='text - center text - sm text - blue - 600'>;
              Generating shareable link...;
            </p>)}
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button;
              type='button';
              on_click={handleSubmitToCounsel}
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
           {isSharing && <p className="text-center text-sm text-blue-600">Generating shareable link...</p>}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
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
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='mt-8 pt-6 border-t'>
            <h2 className='text-xl font-bold mb-4 text-center'>
              Edit Generated Sections
            </h2>
            {sections.map(section => (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          tokenSupply={tokenSupply}        />;

          <div className="mt-8 pt-6 border-t">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Generated Sections</h2>
            {sections.map((section) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <WhitepaperSectionEditor
                key={section.id}
                title={section.title}
                content={section.content}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onContentChange={newContent =>
                  handleSectionContentChange(section.id, newContent)
                }              />
                onContentChange={(newContent) => handleSectionContentChange(section.id, newContent)}
              />;
<<<<<<< HEAD
            ))}
          </div>
        )}
        {rawDraft && (
        {/* Section Editors */}
        {sections.length > 0 && (
          <div className='mt-8 pt-6 border-t'>
            <h2 className='text-xl font-bold mb-4 text-center'>
              Edit Generated Sections
            </h2>
            {sections.map(section => (
                key={section.id}
                title={section.title}
                content={section.content}
                onContentChange={newContent =>
                  handleSectionContentChange(section.id, newContent)
                }              />
          </div>
        )}
        {rawDraft && (
          <div className='mt-6 p-3 border rounded-md'>
            <Button
              onClick={() => setShowRawDraft(!showRawDraft)}
              variant='outline'
              size='sm'
              className='w-full'
            >
              {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text            </Button>
            {showRawDraft && (
              <pre className='mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded'>
                {rawDraft}
              </pre>
            )}
          </div>
      </div>
      {/* Right Column: Preview Panel - Pass ref here */}
'"
=======

                onContentChange={(newContent) => handleSectionContentChange(section.id, newContent)}
              />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            ))}
          </div>
        )}
        {rawDraft && (
<<<<<<< HEAD

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

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='mt-6 p-3 border rounded-md'>
            <Button
              onClick={() => setShowRawDraft(!showRawDraft)}
              variant='outline'
              size='sm'
              className='w-full'
            >
              {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text            </Button>
            {showRawDraft && (
              <pre className='mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded'>
                {rawDraft}
              </pre>
            )}
          </div>
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
<<<<<<< HEAD
        )}
      </div>
      {/* Right Column: Preview Panel - Pass ref here */}
      <div
        id='preview-panel-content'
        ref={previewPanelRef}
        className='md:w-1/2 lg:w-3/5 xl:w-2/3 p-1'
      >
        <WhitepaperPreviewPanel
          sections={sections}
          distributionChartData={distributionChartData}
          tokenName={tokenName}
          tokenSupply={tokenSupply}        />
      </div>
    </div>
  )
}
export default WhitepaperGeneratorPage
'"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        )}
      </div>
      {/* Right Column: Preview Panel - Pass ref here */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
'";
;
}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
export default WhitepaperGeneratorPage;
<<<<<<< HEAD
<<<<<<< HEAD
'";
=======
'";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
'";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
