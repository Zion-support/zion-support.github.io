import React from 'react';'''
import JSZip from 'jszip';'''
import { saveAs } from 'file-saver';'''
import { AppLayout } from '@/layout/AppLayout';'''
import { NextSeo } from '@/components/NextSeo';'''
import { Button } from '@/components/ui/button';''
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";'''
import { Input } from '@/components/ui/input';'''
import { Label } from '@/components/ui/label';'''
// Card components are usually exported from 'card.tsx' like this:''''
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';'''
// However, the provided JSX doesn't use Card, CardHeader, etc. explicitly as wrappers,
// but implies their styling might be used. The current JSX structure is fine as is;
// and will rely on Tailwind classes primarily. If Card components were needed for structure,
// their import would be added here.;
const LaunchToolkitPage = () => {}
'
    const [customDate, setCustomDate] = React.useState('');'
    const [selectedTemplateUrl, setSelectedTemplateUrl] = React.useState('');'
    const [selectedTemplateContent, setSelectedTemplateContent] = React.useState('');'
    const [generatedPressRelease, setGeneratedPressRelease] = React.useState('');
    const [isLoadingTemplate, setIsLoadingTemplate] = React.useState(false);'
    const [loadError, setLoadError] = React.useState('');'
    const [explainerCopy, setExplainerCopy] = React.useState('');
    const [isLoadingCopy, setIsLoadingCopy] = React.useState(false);'
    const [loadCopyError, setLoadCopyError] = React.useState('');
    const [isZipping, setIsZipping] = React.useState(false);'
    const [zipError, setZipError] = React.useState('');'
    const [activeBundle, setActiveBundle] = React.useState('general');
    const toolkitAssets = ['
        // Media Kit''
        'toolkit_assets/media_kit/zion_brand_guidelines.md',toolkit_assets/media_kit/zion_color_palette.md',toolkit_assets/media_kit/zion_typography.md',toolkit_assets/media_kit/logos/zion_logo_color.svg',toolkit_assets/media_kit/logos/zion_logo_white.png',toolkit_assets/media_kit/press_release_templates/press_release_seed_round_template.md',toolkit_assets/media_kit/press_release_templates/press_release_launch_template.md',toolkit_assets/media_kit/press_release_templates/press_release_token_sale_template.md','
        // Social Media Kit''
        'toolkit_assets/social_media_kit/banners/linkedin_banner.png',toolkit_assets/social_media_kit/banners/twitter_banner.png',toolkit_assets/social_media_kit/gifs/promo_banner.gif',toolkit_assets/social_media_kit/copy_blocks/explainer_copy_1.txt','
        // Legal Bundle''
        'toolkit_assets/legal_bundle/terms_of_use.md',toolkit_assets/legal_bundle/privacy_policy.md',toolkit_assets/legal_bundle/token_sale_notice.md',toolkit_assets/legal_bundle/dao_disclaimer.md',toolkit_assets/legal_bundle/jurisdictional_disclosures.md','
        // Playbooks''
        'toolkit_assets/pre_launch_playbook.md',toolkit_assets/post_launch_playbook.md'
    ];
    const handleDownloadAll = async () => {}
        setIsZipping(true);'
        setZipError('');
        const zip = new JSZip();
        try {}
            for (const assetPath of toolkitAssets) {}
                const response = await fetch(`/${assetPath}`); // Fetch from public directory;
                if (!response.ok) {}
`
``
                    // // // // // // // // console.error(`Failed to fetch asset: ${assetPath}`);'
                    // Optionally, decide if one failed asset should stop the whole process''"""
                    // or if it should be skipped. For now, we'll log and continue.""""
            // // // // // // // // console.error("Error creating ZIP:", error);'
            setZipError(error instanceof Error ? error.message : 'An unknown error occurred while creating ZIP.');


            {/* Column 2: Press Release Generator */}"""
            <div>""""
              <h3 className="text-xl font-semibold mb-3">Press Release Templates</h3>""""
              <p className="text-xs text-gray-500 mb-2">Content may vary based on selected bundle: {activeBundle}</p>"'"""
              <div className="space-y-2 mb-4">'"'"""
                {(activeBundle === 'general' || activeBundle === 'institutional') && (<Button variant="outline" size="sm" onClick={() => loadTemplate('/toolkit_assets/media_kit/press_release_templates/press_release_seed_round_template.md')} disabled={isLoadingTemplate}>'
                    {selectedTemplateUrl === '/toolkit_assets/media_kit/press_release_templates/press_release_seed_round_template.md' && isLoadingTemplate ? 'Loading...' : 'Load Seed Round Template'}'"""
                  </Button>)}'"'"""
                {(activeBundle === 'general' || activeBundle === 'institutional') && (<Button variant="outline" size="sm" onClick={() => loadTemplate('/toolkit_assets/media_kit/press_release_templates/press_release_launch_template.md')} disabled={isLoadingTemplate}>'
                    {selectedTemplateUrl === '/toolkit_assets/media_kit/press_release_templates/press_release_launch_template.md' && isLoadingTemplate ? 'Loading...' : 'Load Platform Launch Template'}'"""
                  </Button>)}'"'"""
                {(activeBundle === 'general' || activeBundle === 'web3') && (<Button variant="outline" size="sm" onClick={() => loadTemplate('/toolkit_assets/media_kit/press_release_templates/press_release_token_sale_template.md')} disabled={isLoadingTemplate}>'
                    {selectedTemplateUrl === '/toolkit_assets/media_kit/press_release_templates/press_release_token_sale_template.md' && isLoadingTemplate ? 'Loading...' : 'Load Token Sale Template'}
                  </Button>)}
              </div>"""
""""
              {loadError && <p className="text-red-500">Error: {loadError}</p>}"""
""""
              {selectedTemplateContent && !isLoadingTemplate && (<div className="my-4 p-3 border rounded bg-gray-50 dark:bg-gray-800">""""
                  <h4 className="font-medium mb-2">Selected Template:</h4>""""
                  <pre className="whitespace-pre-wrap text-sm h-40 overflow-auto">{selectedTemplateContent}</pre>
                </div>)}"""
""""
              {selectedTemplateContent && !isLoadingTemplate && (<div className="space-y-2">""""
                  <Label htmlFor="custom-date">Enter Custom Date (YYYY-MM-DD):</Label>""""
                  <Input type="text" id="custom-date" placeholder="YYYY-MM-DD" value={customDate} onChange={(e) => setCustomDate(e.target.value)} className="max-w-xs"/>
                  <Button onClick={generateWithDate} disabled={!customDate}>Generate with Date</Button>
                </div>)}"""
""""
              {generatedPressRelease && (<div className="my-4 p-3 border rounded bg-green-50 dark:bg-green-900 dark:bg-opacity-25">""""
                  <h4 className="font-medium mb-2">Generated Press Release:</h4>""""
                  <pre className="whitespace-pre-wrap text-sm">{generatedPressRelease}</pre>
                </div>)}
            </div>
          </div>
        </section>"""
""""
        <section id="social-media-kit" className="mb-12">""""
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Social Media Kit</h2>""""
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1: Banners & GIFs */}"""
            <div>""""
              <h3 className="text-xl font-semibold mb-3">Banners</h3>""""
              <div className="space-y-3 mb-6">"""
                <div>""""
                  <h4 className="font-medium">LinkedIn Banner</h4>""""
                  <img loading="lazy" src="/toolkit_assets/social_media_kit/banners/linkedin_banner.png" alt="LinkedIn Banner Placeholder" className="h-20 border p-1 rounded mb-1"/>""""
                  <a href="/toolkit_assets/social_media_kit/banners/linkedin_banner.png" download className="text-blue-600 hover:underline">Download (PNG)</a>
                </div>"""
                <div>""""
                  <h4 className="font-medium">Twitter Banner</h4>""""
                  <img loading="lazy" src="/toolkit_assets/social_media_kit/banners/twitter_banner.png" alt="Twitter Banner Placeholder" className="h-20 border p-1 rounded mb-1"/>""""
                  <a href="/toolkit_assets/social_media_kit/banners/twitter_banner.png" download className="text-blue-600 hover:underline">Download (PNG)</a>
                </div>
              </div>"""
""""
              <h3 className="text-xl font-semibold mb-3">GIFs</h3>""""
              <div className="space-y-3">"""
                <div>""""
                  <h4 className="font-medium">Promotional GIF</h4>""""
                  <img loading="lazy" src="/toolkit_assets/social_media_kit/gifs/promo_banner.gif" alt="Promo GIF Placeholder" className="h-20 border p-1 rounded mb-1"/>""""
                  <a href="/toolkit_assets/social_media_kit/gifs/promo_banner.gif" download className="text-blue-600 hover:underline">Download (GIF)</a>
                </div>
              </div>
            </div>

            {/* Column 2: Explainer Copy */}"""
            <div>""""
              <h3 className="text-xl font-semibold mb-3">Explainer Copy Blocks</h3>"""
              {isLoadingCopy && <p>Loading copy...</p>}""""
              {loadCopyError && <p className="text-red-500">Error: {loadCopyError}</p>}""""
              {!isLoadingCopy && !loadCopyError && explainerCopy && (<div className="p-3 border rounded bg-gray-50 dark:bg-gray-800">""""
                  <h4 className="font-medium mb-2">General Explainer</h4>""""
                  <pre className="whitespace-pre-wrap text-sm">{explainerCopy}</pre>""""
                  <a href="/toolkit_assets/social_media_kit/copy_blocks/explainer_copy_1.txt" download="explainer_copy_1.txt" className="text-blue-600 hover:underline mt-2 inline-block">
                    Download (.txt)
                  </a>
                </div>)}
              {!isLoadingCopy && !loadCopyError && !explainerCopy && (<p>No explainer copy loaded.</p>)}
            </div>
          </div>
        </section>"""
""""
        <section id="rollout-timeline" className="mb-12">""""
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Rollout Timeline</h2>""""
          <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">
            {/* Using prose for nice typography for this content-heavy section */}"""
""""
            <h3 className="text-xl font-semibold mt-4 mb-2">Suggested Schedule</h3>""""
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Week 1:</strong> Closed Beta Invite</li>
              <li><strong>Week 2:</strong> ZionGPT Core Reveal</li>
              <li><strong>Week 3:</strong> Token Airdrop Snapshot</li>
              <li><strong>Week 4:</strong> Zion Global Summit</li>
            </ul>"""
""""
            <h3 className="text-xl font-semibold mt-6 mb-2">Playbooks</h3>""""
            <div className="space-y-2">"""
              <div>""""
                <a href="/toolkit_assets/pre_launch_playbook.md" download="pre_launch_playbook.md" className="text-blue-600 hover:underline">
                  Download Pre-launch Playbook (.md)
                </a>
              </div>"""
              <div>""""
                <a href="/toolkit_assets/post_launch_playbook.md" download="post_launch_playbook.md" className="text-blue-600 hover:underline">
                  Download Post-launch Playbook (.md)
                </a>
              </div>
            </div>"""
""""
            <h3 className="text-xl font-semibold mt-6 mb-2">Optional Activations</h3>
            <p>
              Consider influencer and creator activation strategies to broaden reach and engagement.
              Specific plans for these activations can be developed based on target audience and campaign goals.
            </p>
          </div>
        </section>"""
""""
        <section id="legal-bundle" className="mb-12">""""
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Legal Bundle</h2>""""
          <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">'
            {/* Using prose for nice typography if these were to be displayed directly. For links, it's less critical but maintains consistency. */}"""
""""
            <p className="mb-4">
              The following legal documents are provided as templates. It is crucial to consult with legal counsel;
              to customize these documents to your specific jurisdiction and operational details.
            </p>"""
""""
            <ul className="list-none space-y-3"> {/* Using list-none to remove bullets, styling links directly */}'"""
              {(activeBundle === 'general' || activeBundle === 'institutional') && (<li>""""
                  <h4 className="font-medium inline mr-2">Terms of Use:</h4>""""
                  <a href="/toolkit_assets/legal_bundle/terms_of_use.md" download="terms_of_use.md" className="text-blue-600 hover:underline">
                    Download (.md)
                  </a>
                </li>)}'"""
              {(activeBundle === 'general' || activeBundle === 'institutional') && (<li>""""
                  <h4 className="font-medium inline mr-2">Privacy Policy:</h4>""""
                  <a href="/toolkit_assets/legal_bundle/privacy_policy.md" download="privacy_policy.md" className="text-blue-600 hover:underline">
                    Download (.md)
                  </a>
                </li>)}'"""
              {(activeBundle === 'general' || activeBundle === 'web3') && (<li>""""
                  <h4 className="font-medium inline mr-2">Token Sale Notice:</h4>""""
                  <a href="/toolkit_assets/legal_bundle/token_sale_notice.md" download="token_sale_notice.md" className="text-blue-600 hover:underline">
                    Download (.md) (If applicable)
                  </a>
                </li>)}'"""
              {(activeBundle === 'general' || activeBundle === 'web3') && (<li>""""
                  <h4 className="font-medium inline mr-2">DAO Disclaimer:</h4>""""
                  <a href="/toolkit_assets/legal_bundle/dao_disclaimer.md" download="dao_disclaimer.md" className="text-blue-600 hover:underline">
                    Download (.md)
                  </a>
                </li>)}'
              {(activeBundle === 'general' || activeBundle === 'institutional') && ( // Assuming Jurisdictional is more general/institutional"""
        <li>""""
                  <h4 className="font-medium inline mr-2">Jurisdictional Usage Disclosures:</h4>""""
                  <a href="/toolkit_assets/legal_bundle/jurisdictional_disclosures.md" download="jurisdictional_disclosures.md" className="text-blue-600 hover:underline">
                    Download (.md)
                  </a>
                </li>)}
            </ul>
          </div>
        </section>
"""
        {/* Generate PDF Kit Section Placeholder */}""""
        <section id="generate-pdf-kit" className="mb-12">""""
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Generate PDF Kit</h2>""""
          <div className="p-4 border rounded bg-gray-50 dark:bg-gray-800">""""
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              This feature will allow you to generate a consolidated PDF from selected toolkit assets.
              For now, you can download a sample PDF kit."""
            </p>""""
            <a href="/toolkit_assets/sample_zion_kit.pdf" download="Zion_Sample_Kit.pdf">""""
              <Button variant="secondary">
                Download Sample PDF Kit;
              </Button>"""
            </a>""""
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              Full PDF generation capabilities are under development.
            </p>
          </div>
        </section>
      </div>
    </AppLayout>)};
export default LaunchToolkitPage;
}}}}}}}}}}}}}}}}

export { LaunchToolkitPage };

export { LaunchToolkitPage };

export { LaunchToolkitPage };

export { LaunchToolkitPage };

export { LaunchToolkitPage };
