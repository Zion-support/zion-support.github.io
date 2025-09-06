import React, { useState, useEffect, useCallback } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
import { toast } from "sonner";
import { logErrorToProduction } from '@/utils/productionLogger';
interface WhitepaperSection {
  id: string;
  title: string;
  content: string
}

interface DistributionItem {
  id: string;
  name: string;
  percentage: string
}

interface DistributionChartItem {
    name: string;
    value: number
}

const COLORS = null;