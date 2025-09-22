:src/components/messaging/resume-selector/ResumePreviewCard.tsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
:src/components/messaging/resume-selector/ResumePreviewCard.tsx

interface Resume {
  id: string;
  title: string,
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
  status?: 'draft' | 'published' | 'archived';
}

import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { Resume } from "@/types/resume",
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
  isLoading: boolean
}

:src/components/messaging/resume-selector/ResumePreviewCard.tsx
export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {
export const ResumePreviewCard: React.FC<ResumePreviewCardProps> = ({
  resume,
  isSelected,
  onSelect,
  onDownload,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">
      <CardContent className="p-4">
:src/components/messaging/resume-selector/ResumePreviewCard.tsx
<div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-white">{resume.basic_info.title}</h4>
            {resume.basic_info.headline && (
              <p className="text-sm text-zion-cyan">{resume.basic_info.headline}</p>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onDownload} 
            disabled={isLoading}
            className="h-8 w-8 p-0"
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
<Badge
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>;
    </Card>;
  );
};
}
:src/components/messaging/resume-selector/ResumePreviewCard.tsx
          {resume.status && (
            <Badge className={getStatusColor(resume.status)}>
              {resume.status}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>Modified: {resume.lastModified}</span>
          <span>{resume.fileSize}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDownload(resume);
            }}
            className="flex-1"
          >
            <Download className="h-4 w-4 text-zion-cyan" />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
{resume.basic_info.summary && (
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">
import React from 'react',;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Download } from 'lucide-react';
import { Resume } from "@/types/resume",;
interface ResumePreviewCardProps {;
  resume: Resume,;
  onDownload: () => void;
  isLoading: boolean;
}
;
export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {;
  return (;
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">;
      <CardContent className="p-4">;
        <div className="flex justify-between items-start mb-2">;
          <div>;
            <h4 className="font-medium text-white">{resume.basic_info.title}</h4>;
            {resume.basic_info.headline && (;
              <p className="text-sm text-zion-cyan">{resume.basic_info.headline}</p>;
            )}
          </div>;
          <Button;
            variant="ghost";
            size="sm";
            onClick={onDownload} ;
            disabled={isLoading}
            className="h-8 w-8 p-0";
          >;
            <Download className="h-4 w-4 text-zion-cyan" />;
            <span className="sr-only">Download Resume</span>;
          </Button>;
        </div>;
        {resume.basic_info.summary && (;
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">;
            {resume.basic_info.summary}
          </p>;
        )}

        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
>
                {skill.name}
              </Badge>;
            ))}
            {resume.skills.length > 5 && (
              <Badge 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
</div>;
        )}
      </CardContent>;
    </Card>;
  );
}
;

}
}
origin/cursor/automate-test-improve-and-merge-code-2533
