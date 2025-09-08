<<<<<<< HEAD


  // Find the article in all categories

=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/components/support/HelpArticleView.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/components/support/HelpArticleView.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/support/HelpArticleView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
interface HelpArticleViewProps {
  articleId: string
}

  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null)

  // Find the article in all categories
=======
<<<<<<< HEAD
  // Find the article in all categories
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Find the article in all categories
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD:src_backup/components/support/HelpArticleView.tsx
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  let article = null;
  for (const category of HELP_CATEGORIES) {

    const found = category.articles.find(a => a.id === articleId)
    if (found) {
      article = found
      break
    }
  }
  if (!article) {
    return <div>Article not found</div>
  }
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type)
  return new Date(date).toLocaleDateString("en-US", {

export function HelpArticleView(): any ({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);

    year: "numeric",;
    month: "long",;
    day: "numeric", })
};
}

    year: "numeric",;
    month: "long",;
    day: "numeric", });
}

import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import { Card  } from '@/components / ui / card';
import { ThumbsUp, ThumbsDown } from 'lucide-react'import { toast  } from '@/components / ui / use - toast';
import { HELP_CATEGORIES  } from './help - content';
interface HelpArticleViewProps {
  article_id: string;
}
export /**
 * HelpArticleView - Function description
 */
function HelpArticleView() {
  const [feedback_given, setFeedbackGiven] = useState<"helpful" | "not - helpful" | null>(null);
  // Find the article in all categories;
  let article;
<<<<<<< HEAD
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),
  
  // Find the article in all categories
  let article,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  for (const category of HELP_CATEGORIES) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/support/HelpArticleView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

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

import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import { Card  } from '@/components / ui / card';
import { ThumbsUp, ThumbsDown } from 'lucide-react'import { toast  } from '@/components / ui / use - toast';
import { HELP_CATEGORIES  } from './help - content';
interface HelpArticleViewProps {
  article_id: string;
}
export /**
 * HelpArticleView - Function description
 */
function HelpArticleView() {
  const [feedback_given, setFeedbackGiven] = useState<"helpful" | "not - helpful" | null>(null);
  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find (array => a.id === article_id);
    // Check condition
if ( {) {
  $2
}
      article = found;
      break;
    }
  }
  // Check condition
if ( {) {
  $2
}
    return <div > Article not found</div>;
  }
  const handle_feedback = (type: "helpful" | "not - helpful") =>: any {
    setFeedbackGiven (type);
  return new Date (date).toLocaleDateString ("en - US", {
    year: "numeric",
    month: "long",
    day: "numeric", });}


=======
<<<<<<< HEAD:src_backup/components/support/HelpArticleView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    const found = null;
    day: "numeric"
  })
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
;
;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/support/HelpArticleView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
