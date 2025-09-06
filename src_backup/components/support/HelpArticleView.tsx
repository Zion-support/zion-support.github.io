import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { HELP_CATEGORIES } from './help-content';

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content";
origin/cursor/automate-test-improve-and-merge-code-2533
interface HelpArticleViewProps {
  articleId: string
}

  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null)

  // Find the article in all categories
    const found = category.articles.find(a => a.id === articleId),
    if (found) {
      article = found,
      break
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { toast } from "@/components/ui/use-toast",;
import { HELP_CATEGORIES } from "./help-content",;
interface HelpArticleViewProps {;
  articleId: string;
}
;
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),;
}

;
    const found = null;
    day: "numeric"
  })
}
;
origin/cursor/automate-test-improve-and-merge-code-2533
