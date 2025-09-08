<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
      // Check condition
if ( {) {
  $2
}
        success = await updateWorkExperience (editing_id, experience_data);
      } else {
        success = await addWorkExperience(resumeId, experienceData)
      }
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  };
  const handleEdit = (work: WorkExperience) => {;

import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { Textarea  } from '@/components/ui/textarea';
import { Input  } from '@/components/ui/input';
import { Checkbox  } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { WorkExperience  } from '@/types/resume';
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { format } from 'date-fns'
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'; import { WorkExperience } from '@/types/resume'
import { Loader2, Edit, Trash2 } from 'lucide-react'
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { Card, CardContent  } from '@/components/ui/card';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
// Define schema for form validation
  };

  const handleEdit = (work: WorkExperience) => {

<<<<<<< HEAD


=======
<<<<<<< HEAD
  const handleEdit = (work: WorkExperience) => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setEditingId(work.id!);    form.reset({
      ...work
  const handleEdit = (work: WorkExperience) => {
    setEditingId(work.id!)
    form.reset({
...work,
      start_date: formatDateValue(work.start_date),
      end_date:
        work.end_date && !work.is_current
          ? formatDateValue(work.end_date)
          : undefined
    })
      // Check condition
if ( {) {
  $2

}
;
export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;
  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '',;
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  },;
  const form = useForm<WorkExperienceFormValues>({;
    resolver: zodResolver(workExperienceSchema),;
    defaultValues: {;
      company_name: '',;
      role_title: '',;
      start_date: format(new Date(), 'yyyy-MM-dd'),;
      is_current: false,,
  description: '',;
      location: ''}),;
  const handleAddOrUpdate = async (data: WorkExperienceFormValues) => {;
    try {;
      setError(null),;
      let success,;
      const experienceData: WorkExperience = {;
        company_name: data.company_name, // Required field;
        role_title: data.role_title, // Required field;
        start_date: data.start_date, // Required field;
        end_date: data.is_current ? undefined : (data.end_date || undefined),;
        is_current: data.is_current,,
  description: data.description,;
        location: data.location},;
      if (editingId) {;
        success = await updateWorkExperience(editingId, experienceData);
      } else {;
        success = await addWorkExperience(resumeId, experienceData);
      }
;
      if (success) {;
        form.reset({;
          company_name: '',;
          role_title: '',;
          start_date: format(new Date(), 'yyyy-MM-dd'),;
          is_current: false,,
  description: '',;
          location: ''}),;
        setEditingId(null);
      }
    } catch (err: any) {;
      setError(err.message || 'An error occurred');
    }

    }
  },

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>Work Experience</h2>
        <p className='text-muted-foreground'>
          Add your work history to showcase your professional experience.
        </p>
      </div>

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';import { WorkExperience } from '@/types/resume';
import { Loader2, Edit, Trash2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
// Define schema for form validation;
const workExperienceSchema = z && z.object({;
  company_name: z && z.string().min(1, 'Company name is required'),;
  role_title: z && z.string().min(1, 'Job title is required'),;
  start_date: z && z.string().min(1, 'Start date is required'),;
  end_date: z && z.string().optional(),;
  is_current: z && z.boolean().default(false),,
  description: z && z.string().optional(),;
  location: z && z.string().optional(),;
});

type WorkExperienceFormValues = z && z.infer<typeof workExperienceSchema>;

interface WorkExperienceFormProps {;
  resumeId: string;
  workExperiences: WorkExperience[];
  onComplete: () => void;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onBack: () => void;export function WorkExperienceForm(): any ({resumeId,workExperiences,onComplete,onBack}: WorkExperienceFormProps) {const {addWorkExperience,updateWorkExperience,deleteWorkExperience,isLoading} = useResume()const [editingId, setEditingId] = useState<string | null>(null)const [error, setError]  = useState<string | null>(null)// Helper function to format dates to string;
<<<<<<< HEAD
  const formatDateValue = (dateValue: string | Date | undefined): string => {if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, 'yyyy-MM-dd')
};
=======
  const formatDateValue = (dateValue: string | Date | undefined): string => {if (!dateValue) return ';
    if (typeof dateValue === 'string) return dateValue;
    return format(dateValue, yyyy-MM-dd')
}
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onBack: () => void;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, 'yyyy-MM-dd')
};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const form = useForm<WorkExperienceFormValues>({;
    resolver: zodResolver(workExperienceSchema),;
    defaultValues: {;
      company_name: '',;
      role_title: '',;
      start_date: format(new Date(), 'yyyy-MM-dd'),;
      is_current: false,,
  description: '',;
      location: '',;
    },;
  });

  const handleAddOrUpdate = async (data: WorkExperienceFormValues,) => {;
    try {;
      setError(null);
      let success;

      const experienceData: WorkExperience = {;
        company_name: data && data.company_name, // Required field;
        role_title: data && data.role_title, // Required field;
        start_date: data && data.start_date, // Required field;
        end_date: data && data.is_current ? undefined : data && data.end_date || undefined,;
        is_current: data && data.is_current,,
  description: data && data.description,;
        location: data && data.location,
};

      if (editingId) {;
        success = await updateWorkExperience(editingId, experienceData);
      } else {;
        success = await addWorkExperience(resumeId, experienceData);
      }

      if (success) {;
        form && form.reset({;
          company_name: '',;
          role_title: '',;
          start_date: format(new Date(), 'yyyy-MM-dd'),;
          is_current: false,,
  description: '',;
          location: '',;
        });
        setEditingId(null);
      }
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred');
    }
  };
  const handleEdit = (work: WorkExperience) => {;
    setEditingId(work && work.id!);    form && form.reset({;
      ...work,;

  const handleEdit = (work: WorkExperience) => {;
    setEditingId(work && work.id!);
    form && form.reset({;
      start_date: formatDateValue(work && work.start_date),;
      end_date:;
        work && work.end_date && !work && work.is_current;
          ? formatDateValue(work && work.end_date);
          : undefined,;
    })
};

  const handleDelete = async (id: string,) => {;
    if (confirm('Are you sure you want to delete this work experience?')) {;
      await deleteWorkExperience(id);
    }
  };

  const handleEnhanceDescription = (enhancedContent: string) => {;
    form && form.setValue('description', enhancedContent)
};
  return (
    <div className='space-y-6'>;
      <div>;
        <h2 className='text-xl font-semibold mb-2'>Work Experience</h2>;
        <p className='text-muted-foreground'>;
          Add your work history to showcase your professional experience.;
        </p>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
      </div>;{workExperiences && workExperiences.length > 0 && (<div className='space-y-4'>;
          <h3 className='text-md font-medium'>Added Experience</h3>;
          {workExperiences && workExperiences.map(work => (<Card key={work && work.id} className='bg-muted/40'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;{workExperiences && workExperiences.length > 0 && (<div className='space-y-4>;
          <h3 className=text-md font-medium'>Added Experience</h3>;
          {workExperiences && workExperiences.map(work => (<Card key={work && work.id} className='bg-muted/40>;
              <CardContent className=pt-6'>;
                <div className='flex justify-between>                  <div>;
                    <h4 className=font-medium'>{work && work.role_title}</h4>;
                    <p className='text-sm text-muted-foreground>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;

      {workExperiences && workExperiences.length > 0 && (;
        <div className='space-y-4'>;
          <h3 className='text-md font-medium'>Added Experience</h3>;
          {workExperiences && workExperiences.map(work => (;
            <Card key={work && work.id} className='bg-muted/40'>;
>>>>>>> origin/resolved-merge-conflicts
              <CardContent className='pt-6'>;
                <div className='flex justify-between'>                  <div>;
                    <h4 className='font-medium'>{work && work.role_title}</h4>;
                    <p className='text-sm text-muted-foreground'>;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      {work && work.company_name}
                    </p>;
                    <p className='text-xs text-muted-foreground mt-1'>;
                      {typeof work && work.start_date === 'string';
                        ? work && work.start_date;
                        : format(work && work.start_date, 'MMM yyyy')}{' '}
                      -{' '}
                      {work.is_current
                        ? 'Present'
                        : work.end_date
                          ? typeof work.end_date === 'string'
                            ? work.end_date
                            : format(work.end_date, 'MMM yyyy')
                          : ''}

        <div className='space-y-4'>
          <h3 className='text-md font-medium'>Added Experience</h3>
          {workExperiences.map((work) => (
            <Card key={work.id} className='bg-muted/40'>
              <CardContent className='pt-6'>
                <div className='flex justify-between'>
                  <div>
                    <h4 className='font-medium'>{work.role_title}</h4>
                    <p className='text-sm text-muted-foreground'>{work.company_name}</p>
                    <p className='text-xs text-muted-foreground mt-1'>
                      {typeof work.start_date === 'string' 
                        ? work.start_date 
                        : format(work.start_date, 'MMM yyyy')} - {work.is_current 
                        ? 'Present' 
                        : (work.end_date ? (typeof work.end_date === 'string' 
                          ? work.end_date 
                          : format(work.end_date, 'MMM yyyy')) : '')}
                    </p>
                    {work.location && (
                      <p className='text-xs text-muted-foreground'>{work.location}</p>
                    )}

                    <Button

                    setEditingId(null),

                    setEditingId(null),
                    form.reset({
                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
                      location: ''})
                  } else {
                    onBack()

                onClick={() => {
                  if (editingId) {
                    setEditingId(null)
                    form.reset({
                      company_name: ''
                      role_title: ''
                      start_date: format(new Date(), 'yyyy-MM-dd')
                      is_current: false
                      description: ''
                      location: ''
                    })
                  } else {
                    onBack()

                  }
                }
              >;
                {editingId ? 'Cancel' : 'Back'}
              </Button>

              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}

                  {editingId ? 'Update' : 'Add'} Experience
                </Button>

                {!editingId && workExperiences.length > 0 && (
                  <Button type='button' onClick={onComplete}>
                    Next
                  </Button>
                )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
}> {';
  editingId ? 'Cancel': 'Back' ;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                {!editingId && workExperiences && workExperiences.length > 0 && (;
                  <Button type='button' onClick={onComplete}>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}> {;
  editingId ? 'Cancel': Back ;
>>>>>>> origin/resolved-merge-conflicts
}</Button> Next </Button>) ;
}</div> </div> </form> </Form> </div> </div>) ;
}''
origin/cursor/automate-test-improve-and-merge-code-2533
                    </p>;
                    {work.location && (<p className='text-xs text-muted-foreground'>{work.location}</p>;
                    )}</div>;
                  <div className='flex gap-2'>;</div>;
                  <div className='flex gap-2'>;
                    <Button;
                    setEditingId(null),setEditingId(null),form.reset({company_name: '',role_title: '',start_date: format(new Date(), 'yyyy-MM-dd'),is_current: false,description: '',location: ''})} else {onBack()/>;{error && (<Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>;
            )}<div className='flex justify-between pt-2'>;
              <Button;
                type='button';
                variant='outline';
                onClick={() => {if (editingId) {setEditingId(null)form && form.reset({company_name: '',role_title: '',start_date: format(new Date(), 'yyyy-MM-dd'),is_current: false,description: '',location: ''})} else {onBack()onClick={() => {if (editingId) {setEditingId(null)form.reset({company_name: '';
                      role_title: '';
                      start_date: format(new Date(), 'yyyy-MM-dd')is_current: false;
                      description: '';
                      location: '';
                    })} else {onBack()}
                }
              >;
                {editingId ? 'Cancel' : 'Back'}</Button>;
              <div className='flex gap-2'>;
                <Button type='submit' disabled={isLoading}>;
                  {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}{editingId ? 'Update' : 'Add'} Experience;
                </Button>;
<<<<<<< HEAD
                {!editingId && workExperiences.length > 0 && (<Button type='button' onClick={onComplete}>;
=======
                {!editingId && workExperiences.length > 0 && (<Button type='button onClick={onComplete}>;
=======
              </Button>;

              <div className='flex gap-2'>;
                <Button type='submit' disabled={isLoading}>;
                  {isLoading && (;
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                  )}
                  {editingId ? 'Update' : 'Add'} Experience;
                </Button>;

                {!editingId && workExperiences && workExperiences.length > 0 && (;
                  <Button type='button' onClick={onComplete}>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    Next;
                  </Button>;
                )}

;

                </FormItem>)}
            />;
<<<<<<< HEAD


=======
<<<<<<< HEAD
            {error && (<Alert variant='destructive'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
            {error && (
              <Alert variant='destructive'>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {error && (<Alert variant=destructive'>;
=======
            {error && (
              <Alert variant='destructive'>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <AlertDescription>{error}</AlertDescription>;
              </Alert>)}
            <div className='flex justify - between pt - 2'>;
              <Button;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                type='button';
                variant='outline';
                on_click={() => {// Check condition;
if ( {) {$2;
}
                    setEditingId (null)form.reset ({company_name: '',role_title: '',start_date: format (new Date (), 'yyyy - MM - dd'),is_current: false,description: '',location: ''})} else {on_back ()}
                }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                type='button';
                variant='outline';
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                type=button';
                variant='outline;
                on_click={() => {// Check condition;
if ( {) {$2;
}
                    setEditingId (null)form.reset ({company_name: ',role_title: ',start_date: format (new Date (), yyyy - MM - dd'),is_current: false,description: ',location: '})} else {on_back ()}
=======
                type='button';
                variant='outline';
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    setEditingId (null);
                    form.reset ({
                      company_name: '',
                      role_title: '',
                      start_date: format (new Date (), 'yyyy - MM - dd'),
                      is_current: false,
                      description: '',
                      location: '',
                    });
                  } else {
                    on_back ();
                  }
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                }}
>>>>>>> origin/resolved-merge-conflicts
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
              <div className='flex gap - 2'>;
                <Button type='submit' disabled={is_loading}>;
                  {is_loading && (<Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                  {editing_id ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (<Button type='button' on_click={on_complete}>;
=======
<<<<<<< HEAD
              <div className='flex gap - 2>;
                <Button type=submit' disabled={is_loading}>;
                  {is_loading && (<Loader2 className='mr - 2 h - 4 w - 4 animate - spin />)}
                  {editing_id ? Update' : 'Add} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (<Button type=button' on_click={on_complete}>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <div className='flex gap - 2'>;
                <Button type='submit' disabled={is_loading}>;
                  {is_loading && (
                    <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                  {editing_id ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (
                  <Button type='button' on_click={on_complete}>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    Next;
                  </Button>)}
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;

      ...work;
      start_date: formatDateValue(work.start_date),
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined})
  };

    </div>);
}> {';
  editing_id ? 'Cancel': 'Back';
}</Button> Next </Button>);
}</div> </div> </form> </Form> </div> </div>);
}''  );
}

              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );

}> {';
  editingId ? 'Cancel': 'Back' ;
}</Button> Next </Button>) ;
}</div> </div> </form> </Form> </div> </div>) ;
<<<<<<< HEAD
}''
=======
}'"
>>>>>>> origin/resolved-merge-conflicts
