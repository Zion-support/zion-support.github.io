
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',

  return (
    <>
      <SEO
        title="AI Content Generation"
        description="Generate SEO-optimized blog posts, service descriptions and FAQs with ZionGPT."
        keywords="AI content generation, ZionGPT, SEO tools"
        canonical="https://app.ziontechgroup.com/features/ai-content-generation"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">AI Content Generation</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            ZionGPT helps you craft high quality articles, service descriptions and FAQs in minutes.
          </p>
          <div className="relative w-full h-auto aspect-video mb-12 mx-auto rounded-lg shadow-xl overflow-hidden">
            <img

            <li>Improve search rankings with keyword optimized text.</li>
            <li>Create multilingual content to reach a global audience.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">How does ZionGPT generate content?</p>
              <p className="text-zion-slate-light">Our fine-tuned AI model analyzes your prompts and produces human-like copy tailored for SEO.</p>
            </div>
            <div>
              <p className="font-semibold">Can I edit the generated text?</p>
              <p className="text-zion-slate-light">Yes, you can review and modify all suggestions before publishing.</p>
            </div>
          </div>

            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/open-app">Try ZionGPT Now</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
