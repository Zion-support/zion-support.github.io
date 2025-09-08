

  // Find the article in all categories

import React, { useState } from 'react;
import { Button } from @/components/ui/button';
import { Card } from '@/components/ui/card;
import { ThumbsUp, ThumbsDown } from lucide-react';
import { toast } from '@/components/ui/use-toast;
import { HELP_CATEGORIES } from ./help-content';

import React, { useState } from "react,
import { Button } from @/components/ui/button",
import { Card } from "@/components/ui/card,
import { ThumbsUp, ThumbsDown } from 'lucide-react
import { toast } from @/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content;
origin/cursor/automate-test-improve-and-merge-code-2533
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown } from 'lucide-react'import { toast } from "@/components/ui/use-toast"
import { HELP_CATEGORIES } from "./help-content"
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
interface HelpArticleViewProps {
import { HELP_CATEGORIES } from "./help-content";
  articleId: string
}
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
import { HELP_CATEGORIES } from "./help-content";
import { HELP_CATEGORIES } from "./help-content",
interface HelpArticleViewProps {
  articleId: string
}
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null)
  // Find the article in all categories
  // Find the article in all categories
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),
  
  // Find the article in all categories
  let article,

  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {;
    const found = category && category.articles.find(a => a && a.id === articleId);
    if (found) {;
      article = found;
      break;
    }
  }

  if (!article) {;
    return <div>Article not found</div>;
  }

  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type);

  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric",;
    month: "long",;
    day: "numeric", });
}


    year: "numeric",
    month: "long",
    day: "numeric", });
}


ursor/fix-website-loading-errors-and-merge-6662
;
;
