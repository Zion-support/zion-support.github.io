import React { useState useEffect useCallback } from 'react';
import { supabase,, ,  } from '@/integrations/supabase/client';
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel,
import { Button,  } from "@/components/ui/button",
import { Input,  } from "@/components/ui/input",
import { Trash2,, Download,, Share2,  } from 'lucide-react'
import { Send,  } from 'lucide-react', // Added Send icon,
import { toast,  } from "sonner";
import { logErrorToProduction,  } from '@/utils/productionLogger';
interface WhitepaperSection {
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
}return parsed,
}, [])
const distributionChartData: DistributionChartItem[] = React.useMemo ( () => {
  return distributionData .map (item => ({
}if (totalPercentage < 100 && totalPercentage > 0 && processedDistData.length > 0) {
  setError (`Warning: Total distribution is $ {
  totalPercentage,
}%. Consider adjusting to sum to 100%.`)
}else if (totalPercentage === 0 && processedDistData.length > 0 && distributionData.some (d => d.name && d.percentage) ) {
}try {
  const apiPayload: any = {
  tokenName,
tokenSupply: tokenSupply.toString ()
useCases,
rewardsLogic
governanceLogic,
legalDisclaimers
distributionBreakdown,
}
if (processedDistData.length > 0) {
  apiPayload.distributionData = processedDistData,
}const {
  data error: funcError '
}= await supabase.functions.invoke ('generate-whitepaper', {
  body: apiPayload;
})
if (funcError) {
  throw new Error (`Supabase function error: $ {
  funcError.message,
}`)
}if (data && (data as any) .error) {
  throw new Error (`Generation error: $ {
  (data as any) .error,
}`)
}if (!data |! (data as any) .whitepaperDraft) {'
  throw new Error ('No whitepaper draft received from the function.')
}setRawDraft ( (data as any) .whitepaperDraft)
setSections (parseWhitepaperDraft ( (data as any) .whitepaperDraft) )
}catch (e: any) {
  logErrorToProduction (e instanceof Error ? e.message : String (e),  e instanceof Error ? e : undefined {'
  message: 'Error generating whitepaper'
});'
setError (e.message |'An unexpected error occurred.')
setSections ([])
}finally {
  setIsLoading (false)
interface DistributionChartItem {
