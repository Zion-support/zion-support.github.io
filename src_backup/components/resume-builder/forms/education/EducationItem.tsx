import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import { Education  } from '@/types/resume';
import { EducationItemProps } from './types';
export function EducationItem({ education, onEdit, onDelete }: EducationItemProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
export function EducationItem({
  education
  onEdit
  onDelete
}: EducationItemProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
              onClick={() => onDelete(education.id!)}
              aria-label='Delete education'
            >
              <Trash2 className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
            </Button>
          </div>
        </div>
        {education.description && (
<p className='text-sm mt-3 line-clamp-2'>{education.description}</p>
origin/cursor/automate-test-improve-and-merge-code-2533
        )}
      </CardContent>
    </Card>
  );
}

origin/cursor/automate-test-improve-and-merge-code-2533
