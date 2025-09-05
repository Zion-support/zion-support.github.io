<<<<<<< HEAD
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
import { useFeatureUsage } from "@/hooks/useFeatureUsage",
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus",
=======
import React, { useEffect } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';
import { useFeatureUsage } from &quot;@/hooks/useFeatureUsage&quot;;
import { useAdvancedOnboardingStatus } from &quot;@/hooks/useAdvancedOnboardingStatus&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT'),
  const schema = {
<<<<<<< HEAD
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Content Generation",
    "description": "Generate SEO-optimized content using ZionGPT to boost your online visibility.",
    "url": "https://app.ziontechgroup.com/features/ai-content-generation"
  },
=======
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;AI Content Generation&quot;,
    &quot;description&quot;: &quot;Generate SEO-optimized content using ZionGPT to boost your online visibility.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/ai-content-generation&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const { markAiExplored } = useAdvancedOnboardingStatus(),

  useEffect(() => {
    markAiExplored()
  }, [markAiExplored]),

  return (
    <>
      <SEO
        title=&quot;AI Content Generation&quot;
        description=&quot;Generate SEO-optimized blog posts, service descriptions and FAQs with ZionGPT.&quot;
        keywords=&quot;AI content generation, ZionGPT, SEO tools&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/ai-content-generation&quot;
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>AI Content Generation</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
            ZionGPT helps you craft high quality articles, service descriptions and FAQs in minutes.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mb-12 mx-auto rounded-lg shadow-xl overflow-hidden&quot;>
            <img
<<<<<<< HEAD
              src="https: //placehold.co/800x400"
              alt="Screenshot of ZionGPT content tool"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
=======
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of ZionGPT content tool&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <li>Save time drafting marketing content for your products or services.</li>
            <li>Improve search rankings with keyword optimized text.</li>
            <li>Create multilingual content to reach a global audience.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>How does ZionGPT generate content?</p>
              <p className=&quot;text-zion-slate-light&quot;>Our fine-tuned AI model analyzes your prompts and produces human-like copy tailored for SEO.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>Can I edit the generated text?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, you can review and modify all suggestions before publishing.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/open-app&quot;>Try ZionGPT Now</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
