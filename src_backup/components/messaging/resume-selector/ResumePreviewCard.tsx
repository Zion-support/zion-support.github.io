


import React from 'react,
import { Card, CardContent } from "@/components/ui/card,
import { Badge } from @/components/ui/badge",
import { Button } from "@/components/ui/button,
import { Download } from lucide-react'
import { Resume } from @/types/resume",
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
  isLoading: boolean
}

  return (



                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
<Badge
                variant=outline'
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs
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
}



          {resume.status && (
            <Badge className={getStatusColor(resume.status)}>
              {resume.status}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3>
          <span>Modified: {resume.lastModified}</span>
          <span>{resume.fileSize}</span>
        </div>

        <div className=flex items-center space-x-2">
          <Button
            variant="outline
            size=sm"
            onClick={(e) => {
              e.stopPropagation();
              onDownload(resume);
            }}
            className="flex-1

          >
            <Download className=h-4 w-4 text-zion-cyan" />
            <span className="sr-only>Download Resume</span>
          </Button>
        </div>

        {resume.skills && resume.skills.length > 0 && (
          <div className=flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline
                className=bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"

              <Badge 
                variant="outline
                className=bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}