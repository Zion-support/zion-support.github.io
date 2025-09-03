import React from 'react';''';
import JSZip from 'jszip';''';
import { saveAs } from 'file-saver';''';
import { AppLayout } from '@/layout/AppLayout';''';
import { NextSeo } from '@/components/NextSeo';''';
import { Button } from '@/components/ui/button';''';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';''';
import { Input } from '@/components/ui/input';''';
import { Label } from '@/components/ui/label';''';
// Card components are usually exported from 'card.tsx' like this:'''';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';''';
// However, the provided JSX doesn't use Card, CardHeader, etc. explicitly as wrappers,;
// but implies their styling might be used. The current JSX structure is fine as is;
// and will rely on Tailwind classes primarily. If Card components were needed for structure,;
// their import would be added here.;
const LaunchToolkitPage = () => {}
  return <div>Component</div>;
};
';
  const [customDate, setCustomDate] = React.useState('');';
  const [selectedTemplateUrl, setSelectedTemplateUrl] = React.useState('');';
  const [selectedTemplateContent, setSelectedTemplateContent] ='';
    React.useState('');';
  const [generatedPressRelease, setGeneratedPressRelease] = React.useState('');
  const [isLoadingTemplate, setIsLoadingTemplate] = React.useState(false);';
  const [loadError, setLoadError] = React.useState('');';
  const [explainerCopy, setExplainerCopy] = React.useState('');
  const [isLoadingCopy, setIsLoadingCopy] = React.useState(false);';
  const [loadCopyError, setLoadCopyError] = React.useState('');
  const [isZipping, setIsZipping] = React.useState(false);';
  const [zipError, setZipError] = React.useState('');';
  const [activeBundle, setActiveBundle] = React.useState('general');
  const toolkitAssets = [';
    // Media Kit'';
    'toolkit_assets/media_kit/zion_brand_guidelines.md',toolkit_assets/media_kit/zion_color_palette.md',toolkit_assets/media_kit/zion_typography.md',toolkit_assets/media_kit/logos/zion_logo_color.svg',toolkit_assets/media_kit/logos/zion_logo_white.png',toolkit_assets/media_kit/press_release_templates/press_release_seed_round_template.md',toolkit_assets/media_kit/press_release_templates/press_release_launch_template.md',toolkit_assets/media_kit/press_release_templates/press_release_token_sale_template.md',';
    // Social Media Kit'';
    'toolkit_assets/social_media_kit/banners/linkedin_banner.png',toolkit_assets/social_media_kit/banners/twitter_banner.png',toolkit_assets/social_media_kit/gifs/promo_banner.gif',toolkit_assets/social_media_kit/copy_blocks/explainer_copy_1.txt',';
    // Legal Bundle'';
    'toolkit_assets/legal_bundle/terms_of_use.md',toolkit_assets/legal_bundle/privacy_policy.md',toolkit_assets/legal_bundle/token_sale_notice.md',toolkit_assets/legal_bundle/dao_disclaimer.md',toolkit_assets/legal_bundle/jurisdictional_disclosures.md',';
    // Playbooks'';
    'toolkit_assets/pre_launch_playbook.md',toolkit_assets/post_launch_playbook.md';
  ];
  const handleDownloadAll = async () => {}
    setIsZipping(true);';
    setZipError('');
    const zip = new JSZip();
    try {}
      for (const assetPath of toolkitAssets) {}
        const response = await fetch(`/${assetPath}`); // Fetch from public directory;
        if (!response.ok) {}
`;
``;
``'`;
``'`'`;
          // console.error(`Failed to fetch asset: ${assetPath}`);''';
          // Optionally, decide if one failed asset should stop the whole process'''';
          // or if it should be skipped. For now, we'll log and continue.;
          continue}
        const blob = await response.blob();';
        // The path in the zip should be relative to 'toolkit_assets' or a desired root folder in the zip;
        const pathInZip = assetPath.replace()';
          /^toolkit_assets\//,Zion_Launch_Toolkit/';
        );';
        zip.file(pathInZip, blob);''}''';
      const zipBlob = await zip.generateAsync({ type: 'blob' });''';
      saveAs(zipBlob,Zion_Launch_Toolkit.zip')} catch (error) {}
      // console.error("Error creating ZIP:", error);
      setZipError();
        error instanceof Error';
          ? error.message'';
          : 'An unknown error occurred while creating ZIP.';
      )} finally {}
      setIsZipping(false)}
  }
  React.useEffect(() => {}
    const fetchExplainerCopy = async () => {}
      setIsLoadingCopy(true);';
      setLoadCopyError('');
      try {}
';
'';
''';
        const response = await fetch('''';
          '/toolkit_assets/social_media_kit/copy_blocks/explainer_copy_1.txt';
        );
        if (!response.ok) {}
`;
``;
```;
          throw new Error()````;
            `Failed to fetch explainer copy: ${response.statusText}`;
          )}
        const text = await response.text();
        setExplainerCopy(text)} catch (error) {}
";
"";
        // console.error("Error loading explainer copy:", error);';
        setExplainerCopy('Could not load explainer copy.');';
        setLoadCopyError('';
          error instanceof Error ? error.message : 'An unknown error occurred.';
        )} finally {}
        setIsLoadingCopy(false)}
    }
    fetchExplainerCopy()}, []); // Empty dependency array means this runs once on mount;
  const loadTemplate = async url => {}
    setSelectedTemplateUrl(url);';
    setSelectedTemplateContent(''); // Clear previous template content'';
    setGeneratedPressRelease(''); // Clear previous generated content;
    setIsLoadingTemplate(true);';
    setLoadError('');
    try {}
      const response = await fetch(url);
      if (!response.ok) {}
`;
``;
```;
````;
        throw new Error(`Failed to fetch template: ${response.statusText}`)}
      const text = await response.text();
      setSelectedTemplateContent(text)} catch (error) {}
";
"";
      // console.error("Error loading template:", error);';
      setSelectedTemplateContent('');';
      setLoadError('';
        error instanceof Error ? error.message : 'An unknown error occurred.';
      )} finally {}
      setIsLoadingTemplate(false)}
  }
  const generateWithDate = () => {}
  return <div>Component</div>;
};
    if (selectedTemplateContent && customDate) {}
      setGeneratedPressRelease();
        selectedTemplateContent.replace(/\[DATE\]/g, customDate);
      )} else if (!selectedTemplateContent) {}
';
'';
''';
      setGeneratedPressRelease('Please load a template first.')} else {}
';
'';
''';
      setGeneratedPressRelease('Please enter a date.')}
  }
  return();
    <AppLayout>";
      <div>Broken JSX</div>
      />"";
      <div className="container mx-auto py-8 px-4">"";
        <h1 className="text-3xl font-bold mb-2 text-center">';
          Launch Operations Toolkit'';
        </h1>{' '}";
        {/* Reduced mb from 8 to 2 */}"";
        <div className="text-center mb-8">';
          {' '}";
          {/* New div for button */}"";
          <Button onClick={handleDownloadAll} disabled={isZipping} size="lg">';
            {isZipping ? 'Zipping...' : 'Download All Assets as ZIP'}
          </Button>";
          {};
            <p className="text-red-500 mt-2">Error creating ZIP: {zipError}</p>;
          )}";
        </div>"";
        <div className="my-8">;
          <div>Broken JSX</div>
            onValueChange={value => setActiveBundle(value)}"";
            className="w-full"">"";
            <TabsList className="grid w-full grid-cols-3 md:max-w-md mx-auto">"";
              <TabsTrigger value="general">General</TabsTrigger>"";
              <TabsTrigger value="web3">Web3 Focused</TabsTrigger>"";
              <TabsTrigger value="institutional">;
                Institutional Focused;
              </TabsTrigger>;
            </TabsList>";
            {/* Empty TabsContent to satisfy component structure if needed, content is handled inline */}"";
            <TabsContent value="general"></TabsContent>"";
            <TabsContent value="web3"></TabsContent>"";
            <TabsContent value="institutional"></TabsContent>";
          </Tabs>"";
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">'";
            Currently viewing:{' '}'"'";
            <span className="font-semibold capitalize">{activeBundle}</span>{' '}
            bundle. Some assets may be highlighted or filtered based on;
            selection.;
          </p>";
        </div>"";
        <section id="media-kit" className="mb-12">"";
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">;
            Media Kit";
          </h2>"";
          <div className="grid md:grid-cols-2 gap-6">;
            {/* Column 1: Assets */}";
            <div>"";
              <h3 className="text-xl font-semibold mb-3">Brand Assets</h3>"";
              <div className="space-y-3">";
                <div>"";
                  <h4 className="font-medium">Brand Guidelines</h4>";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline">;
                    Download (.md);
                  </a>;
                </div>";
                <div>"";
                  <h4 className="font-medium">Color Palette</h4>";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline">;
                    Download (.md);
                  </a>;
                </div>";
                <div>"";
                  <h4 className="font-medium">Typography</h4>";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline">;
                    Download (.md);
                  </a>;
                </div>;
              </div>";
"";
              <h3 className="text-xl font-semibold mt-6 mb-3">Logos</h3>"";
              <div className="space-y-3">";
                <div>"";
                  <h4 className="font-medium">Zion Logo - Color</h4>"";
                  <div className="flex items-center space-x-4">";
                    <div>Broken JSX</div>
                    />";
                    <div>Broken JSX</div>
                      className="text-blue-600 hover:underline">;
                      Download (SVG);
                    </a>;
                  </div>;
                </div>";
                <div>"";
                  <h4 className="font-medium">Zion Logo - White</h4>';
                  {/* For PNG, direct display might not be ideal if it's large. Link is primary. */}";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline">;
                    Download (PNG);
                  </a>;
                </div>;
              </div>;
            </div>;

            {/* Column 2: Press Release Generator */}";
            <div>"";
              <h3 className="text-xl font-semibold mb-3">;
                Press Release Templates";
              </h3>"";
              <p className="text-xs text-gray-500 mb-2">;
                Content may vary based on selected bundle: {activeBundle}";
              </p>"";
              <div className="space-y-2 mb-4">';
                {};
}
                    disabled={isLoadingTemplate}
                  >';
                    {};
                      : 'Load Seed Round Template'}
                  </Button>;
                )}';
                {};
}
                    disabled={isLoadingTemplate}
                  >';
                    {};
                      : 'Load Platform Launch Template'}
                  </Button>;
                )}';
                {};
}';
                    disabled={isLoadingTemplate}'';
                  >''';
                    {};
                      : 'Load Token Sale Template'}
                  </Button>;
                )}
              </div>";
"";
              {loadError && <p className="text-red-500">Error: {loadError}</p>}
";
              {};
                    {selectedTemplateContent}
                  </pre>;
                </div>;
              )}
";
              {};
                    onChange={e => setCustomDate(e.target.value)}"";
                    className="max-w-xs";
                  />;
                  <Button onClick={generateWithDate} disabled={!customDate}>;
                    Generate with Date;
                  </Button>;
                </div>;
              )}
";
              {};
                    {generatedPressRelease}
                  </pre>;
                </div>;
              )}
            </div>;
          </div>";
        </section>"";
        <section id="social-media-kit" className="mb-12">"";
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">;
            Social Media Kit";
          </h2>"";
          <div className="grid md:grid-cols-2 gap-6">;
            {/* Column 1: Banners & GIFs */}";
            <div>"";
              <h3 className="text-xl font-semibold mb-3">Banners</h3>"";
              <div className="space-y-3 mb-6">";
                <div>"";
                  <h4 className="font-medium">LinkedIn Banner</h4>";
                  <div>Broken JSX</div>
                  />";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline">;
                    Download (PNG);
                  </a>;
                </div>";
                <div>"";
                  <h4 className="font-medium">Twitter Banner</h4>";
                  <div>Broken JSX</div>
                  />";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline">;
                    Download (PNG);
                  </a>;
                </div>;
              </div>";
"";
              <h3 className="text-xl font-semibold mb-3">GIFs</h3>"";
              <div className="space-y-3">";
                <div>"";
                  <h4 className="font-medium">Promotional GIF</h4>";
                  <div>Broken JSX</div>
                  />";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline">;
                    Download (GIF);
                  </a>;
                </div>;
              </div>;
            </div>;

            {/* Column 2: Explainer Copy */}";
            <div>"";
              <h3 className="text-xl font-semibold mb-3">;
                Explainer Copy Blocks;
              </h3>;
              {isLoadingCopy && <p>Loading copy...</p>}";
              {};
                <p className="text-red-500">Error: {loadCopyError}</p>;
              )}";
              {};
                    {explainerCopy}
                  </pre>";
                  <div>Broken JSX</div>
                    className="text-blue-600 hover:underline mt-2 inline-block">;
                    Download (.txt);
                  </a>;
                </div>;
              )}
              {};
              )}
            </div>;
          </div>";
        </section>"";
        <section id="rollout-timeline" className="mb-12">"";
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">;
            Rollout Timeline";
          </h2>"";
          <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">;
            {/* Using prose for nice typography for this content-heavy section */}";
"";
            <h3 className="text-xl font-semibold mt-4 mb-2">;
              Suggested Schedule";
            </h3>"";
            <ul className="list-disc pl-5 space-y-1">;
              <li>;
                <strong>Week 1:</strong> Closed Beta Invite;
              </li>;
              <li>;
                <strong>Week 2:</strong> ZionGPT Core Reveal;
              </li>;
              <li>;
                <strong>Week 3:</strong> Token Airdrop Snapshot;
              </li>;
              <li>;
                <strong>Week 4:</strong> Zion Global Summit;
              </li>;
            </ul>";
"";
            <h3 className="text-xl font-semibold mt-6 mb-2">Playbooks</h3>"";
            <div className="space-y-2">;
              <div>";
                <div>Broken JSX</div>
                  className="text-blue-600 hover:underline">;
                  Download Pre-launch Playbook (.md);
                </a>;
              </div>;
              <div>";
                <div>Broken JSX</div>
                  className="text-blue-600 hover:underline">;
                  Download Post-launch Playbook (.md);
                </a>;
              </div>;
            </div>";
"";
            <h3 className="text-xl font-semibold mt-6 mb-2">;
              Optional Activations;
            </h3>;
            <p>;
              Consider influencer and creator activation strategies to broaden;
              reach and engagement. Specific plans for these activations can be;
              developed based on target audience and campaign goals.;
            </p>;
          </div>";
        </section>"";
        <section id="legal-bundle" className="mb-12">"";
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">;
            Legal Bundle";
          </h2>"";
          <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">';
            {/* Using prose for nice typography if these were to be displayed directly. For links, it's less critical but maintains consistency. */}";
"";
            <p className="mb-4">;
              The following legal documents are provided as templates. It is;
              crucial to consult with legal counsel to customize these documents;
              to your specific jurisdiction and operational details.;
            </p>";
"";
            <ul className="list-none space-y-3">';
              {' '}
              {/* Using list-none to remove bullets, styling links directly */}';
              {};
              )}';
              {};
              )}';
              {};
              )}';
              {};
              )}';
              {};
              )}
            </ul>;
          </div>;
        </section>";
        {/* Generate PDF Kit Section Placeholder */}"";
        <section id="generate-pdf-kit" className="mb-12">"";
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">;
            Generate PDF Kit";
          </h2>"";
          <div className="p-4 border rounded bg-gray-50 dark:bg-gray-800">"";
            <p className="mb-3 text-gray-700 dark:text-gray-300">;
              This feature will allow you to generate a consolidated PDF from;
              selected toolkit assets. For now, you can download a sample PDF;
              kit.;
            </p>";
            <div>Broken JSX</div>
              download="Zion_Sample_Kit.pdf"">"";
              <Button variant="secondary">Download Sample PDF Kit</Button>";
            </a>"";
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">;
              Full PDF generation capabilities are under development.;
            </p>;
          </div>;
        </section>;
      </div>;
    </AppLayout>)}
export default LaunchToolkitPage;


export { LaunchToolkitPage }
export { LaunchToolkitPage }
export { LaunchToolkitPage }
export { LaunchToolkitPage }
export { LaunchToolkitPage }