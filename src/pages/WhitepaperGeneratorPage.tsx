const slugify = (text: string): string => {
  return text;
    .to_string ();
    .toLowerCase ();
    .replace (/\s+/g, '-') // Replace spaces with -;
    .replace (/[^\w-]+/g, '') // Remove all non - word chars;
    .replace (/--+/g, '-') // Replace multiple - with single -;
    .replace (/^-+/, '') // Trim - from start of text;
    .replace (/-+$/, ''); // Trim - from end of text;
}
const WhitepaperGeneratorPage: React.FC = () => {
  }
  const removeDistributionItem = (id: string) =>: any {
    setDistributionData (prev => prev.filter (item => item.id !== id));
  }
    }
    if (
      totalPercentage < 100 &&
      totalPercentage > 0 &&
      processedDistData.length > 0
    ) {
      setError(
        `Warning: Total distribution is ${totalPercentage}%. Consider adjusting to sum to 100%.`
      )
    } else if (true) {}
    ) {
      setError('Distribution percentages are all zero or invalid.')
      setIsLoading(false)
      return;
    }
    try {
      if (!data |!(data as any).whitepaperDraft) {
        throw new Error('No whitepaper draft received from the function.')
      }
      setRawDraft ((data as any).whitepaper_draft);
      set_sections (parseWhitepaperDraft ((data as any).whitepaper_draft));
    } catch (e: any) {
    } finally {
      setIsLoading (false);
    }
  }
  const handleSectionContentChange = (id: string, new_content: string, ) =>: any {
    set_sections (prev_sections =>;
      prev_sections.map (section =>;
        section.id === id ? { ...section, content: new_content } : section));
  }
  const assembleMarkdownContent = (): string => {
    let md_content = `# ${token_name} - Whitepaper\n\n`;
    md_content += `**Total Supply:** ${token_supply}\n\n`;
    sections.for_each (section => {
      md_content += `## ${section.title}\n\n${section.content}\n\n`;
      if (.includes ('token distribution')) {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          md_content += `### Distribution Details\n\n`;
          distributionChartData.for_each (item => {
            md_content += `- **${item.name}:** ${item.value}%\n`;
          });
          md_content += `\n${distribution_breakdown ? `**Additional Notes:** ${distribution_breakdown}\n\n` : ''}`;
        } else // Check condition
if ( {) {
  $2
}
          md_content += `**Distribution Notes:** ${distribution_breakdown}\n\n`;
        }
      }
    });
    return md_content;
  }
  const handleDownloadMarkdown = () =>: any {
    setIsDownloading (true);
    try {
        { message: 'Error downloading Markdown' }
      );
      set_error ('Failed to download Markdown file. ' + e.message);
    } finally {
      setIsDownloading (false);
    }
  }
  const handleDownloadPdf = async () => {
    }
  }
  const handleTogglePublicStatus = async () => {
    }
    // Optimistically update UI, or wait for response for certainty;
    const newPublicStatus = !currentSharedWhitepaperIsPublic;
    // For optimistic update:;
    // setCurrentSharedWhitepaperIsPublic (newPublicStatus);
    try {
    setIsSharing(true)
    setError(null)
    setShareableLink(null)
    setCurrentSharedWhitepaperId(null)
    setCurrentSharedWhitepaperIsPublic(null)
import React, { useState, useEffect, useCallback } from 'react',
import { supabase } from '@/integrations/supabase/client',
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Import the new preview panel
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
import { toast } from "sonner",
import { logErrorToProduction } from '@/utils/productionLogger',
interface WhitepaperSection {
  id: string,
  title: string,
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
    } finally {
      setIsDownloading(false)
    }
  },

  const handleGenerateShareableLink = async () => {
    if (sections.length === 0) {
      toast.error("Please generate the whitepaper content first before creating a shareable link."),
      return
    }
    setIsSharing(true),
    setError(null),
    setShareableLink(null),
    setCurrentSharedWhitepaperId(null),
    setCurrentSharedWhitepaperIsPublic(null),
    try {
      const whitepaperPayload = {
        tokenName,
        tokenSupply,
        sections,
        distributionChartData,

  return (
    <div className='flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100'>;
      {/* Left Column: Inputs and Editors */}
            <Button
              onClick={handleDownloadMarkdown}
              disabled={
                isDownloading |
                sections.length === 0 |
                isLoading |
                isSharing |
                isSubmittingToCounsel
              }
              variant='outline'
              size='sm'
                isSubmittingToCounsel
              }
              variant='outline'
              size='sm'
              }
              variant='outline'
              size='sm'
              rows={3}
            />;
          </div>;
          <div>;
              )}
            </div>;
          )}




        </form>
        </form>;

        {/* Section Editors */}
        {sections && sections.length > 0 && (;
          <div className='mt-8 pt-6 border-t'>;
            <h2 className='text-xl font-bold mb-4 text-center'>;
              Edit Generated Sections;
            </h2>;
            {sections && sections.map(section => (;
              <WhitepaperSectionEditor
                key={section && section.id}
                title={section && section.title}
                content={section && section.content}
                onContentChange={newContent =>;
                  handleSectionContentChange(section && section.id, newContent);
                }              />;
            ))}
          </div>;
        )}
        {rawDraft && (;
          <div className='mt-6 p-3 border rounded-md'>;
            <Button
              onClick={() => setShowRawDraft(!showRawDraft)}
              variant='outline';
              size='sm';
              className='w-full';
            >;
              {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text            </Button>;
            {showRawDraft && (;
              <pre className='mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded'>;
                {rawDraft}
              </pre>;
            )}
          </div>;
        )}
      </div>
                </p>)}
            </div>)}
          {is_sharing && (
            <p className='text - center text - sm text - blue - 600'>;
              Generating shareable link...;
            </p>)}
          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
                type="button"
                onClick={handleSubmitToCounsel}
                disabled={isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant="default"
                size="lg"
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
                <Send className="mr-2 h-4 w-4" />
                {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>;
          )}
           {isSubmittingToCounsel && <p className="text-center text-sm text-blue-600">Submitting to counsel...</p>}

        </form>
        {/* Section Editors */}
        {sections.length > 0 && (
              <WhitepaperSectionEditor
                key={section.id}
                title={section.title}
                content={section.content}
            ))}
          </div>
        )}
        {rawDraft && (
            <div className="mt-6 p-3 border rounded-md">
            <Button onClick={() => setShowRawDraft(!showRawDraft)} variant="outline" size="sm" className="w-full">
                {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text
            </Button>
            {showRawDraft && (
                <pre className="mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded">
                {rawDraft}
                </pre>;
            )}
            </div>;
'";
;
}
}
      <div id="preview-panel-content" ref={previewPanelRef} className="md:w-1/2 lg:w-3/5 xl:w-2/3 p-1">
        <WhitepaperPreviewPanel
            sections={sections}
            distributionChartData={distributionChartData}
            tokenName={tokenName}
            tokenSupply={tokenSupply}
        />;
      </div>;
    </div>;
  );

        className='md:w - 1/2 lg:w - 3/5 xl:w - 2/3 p - 1';
      >;
        <WhitepaperPreviewPanel;
          sections={sections}
          distributionChartData={distributionChartData}
          token_name={token_name}
          token_supply={token_supply}        />;
      </div>;
    </div>);
}
export default WhitepaperGeneratorPage;
