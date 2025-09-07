
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
import { toast } from "sonner",;
import { logErrorToProduction } from '@/utils/productionLogger',;
interface WhitepaperSection {
  id: string,
  title: string,
  id: string;
  title: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  content: string
import React, { useState, useEffect, useCallback } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',;
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
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

      pdf.save(`${slugify(tokenName || 'whitepaper')}_whitepaper.pdf`)

    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading PDF' }),
      setError("Failed to download PDF file. " + e.message)
interface DistributionItem {
  id: string;
  name: string;
  percentage: string
}
{'
  id: crypto.randomUUID (),  name: 'Private Sale Investors', percentage: '20'
}

