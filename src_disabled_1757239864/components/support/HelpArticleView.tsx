import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {
  articleId: string
}
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
  // Find the article in all categories
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
    year: "numeric"
    month: "long"
    day: "numeric", })
}
                No
              </Button>
            </div>
          </div>

          {feedbackGiven === 'not-helpful' && (
            <div className='mt-4 bg-zion-blue-dark p-4 rounded-md'>
              <p className='text-sm text-zion-slate-light mb-2'>
                We're sorry this article wasn't helpful. Please contact our
                support team for further assistance.
              </p>
              <Button
                size='sm'
                className='bg-zion-purple hover:bg-zion-purple-light'
              >
                Contact Support
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

}'"