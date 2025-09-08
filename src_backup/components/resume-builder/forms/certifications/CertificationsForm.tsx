<<<<<<< HEAD


=======
<<<<<<< HEAD
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Certification } from '@/types/resume';
import { Loader2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';

import { useState  } from 'react';

return (<div className='space-y-6'>;
return (

import { Loader2  } from 'lucide-react';
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { zodResolver  } from '@hookform/resolvers/zod';
import { format  } from 'date-fns';
import { CertificationsList  } from './CertificationsList';
import { CertificationFormFields  } from './CertificationFormFields';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
return (

    <div className='space-y-6'>;
      <div>;
        <h2 className='text-xl font-semibold mb-2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text-muted-foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;

      {certifications && certifications.length > 0 && (;

=======

>>>>>>> origin/resolved-merge-conflicts
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Certification } from '@/types/resume';
import { Loader2 } from 'lucide-react'
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CertificationsList } from './CertificationsList';
import { CertificationFormFields } from './CertificationFormFields';
<<<<<<< HEAD
import { CertificationFormValues, certificationSchema } from './types';

interface CertificationsFormProps {
=======
=======
<<<<<<< HEAD
=======
return (

    <div className='space-y-6'>;
      <div>;
        <h2 className='text-xl font-semibold mb-2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text-muted-foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;

      {certifications && certifications.length > 0 && (;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/chore/fix-lint-and-merge
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Certification } from '@/types/resume';
import { Loader2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';

<<<<<<< HEAD

return (<div className='space-y-6'>;
return (

import { Loader2  } from 'lucide-react';
=======
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { Button  } from '@/components/ui/button';
import { Form  } from '@/components/ui/form';
import { Certification  } from '@/types/resume';
import { Loader2 } from 'lucide-react'
>>>>>>> origin/chore/fix-lint-and-merge
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { zodResolver  } from '@hookform/resolvers/zod';
import { format  } from 'date-fns';
import { CertificationsList  } from './CertificationsList';
import { CertificationFormFields  } from './CertificationFormFields';
<<<<<<< HEAD
import { CertificationFormValues, certificationSchema } from './types';
interface CertificationsFormProps {
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { CertificationFormValues, certificationSchema } from './types';
interface CertificationsFormProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  resumeId: string,
  certifications: Certification[],
  onComplete: () => void,
  onBack: () => void
<<<<<<< HEAD
  resumeId: string;
  certifications: Certification[];
  onComplete: () => void;
      </div>;
  onBack: () => void,
=======
>>>>>>> origin/resolved-merge-conflicts
}

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates as strings for form inputs
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, 'yyyy-MM-dd')
  };

  const form = useForm<CertificationFormValues>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: '',
      issuing_organization: '',
      issue_date: '',
      expiration_date: '',
      credential_id: '',
      credential_url: ''}),

  const handleAddOrUpdate = async (data: CertificationFormValues) => {
    try {
      setError(null);
      let success;

      const certData: Certification = {
        name: data.name,
        issuing_organization: data.issuing_organization,
        issue_date: data.issue_date || undefined,
        expiration_date: data.expiration_date || undefined,
        credential_id: data.credential_id,
        credential_url: data.credential_url},

      if (editingId) {
        success = await updateCertification(editingId, certData)
      } else {
        success = await addCertification(resumeId, certData)
      }

      if (success) {
        form.reset({
          name: '',
          issuing_organization: '',
          issue_date: '',
          expiration_date: '',
          credential_id: '',
          credential_url: ''}),
        setEditingId(null)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    }
<<<<<<< HEAD
  };
=======
  }
<<<<<<< HEAD

=======
=======
  resumeId: string;
  certifications: Certification[];
  onComplete: () => void;
  onBack: () => void
  };
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!);    form.reset({
      ...cert
  }
  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!)
    form.reset({
...cert,
      issue_date: formatDateValue(cert.issue_date),
<<<<<<< HEAD

      expiration_date: formatDateValue(cert.expiration_date),
    });
  };

=======
<<<<<<< HEAD
      expiration_date: formatDateValue(cert.expiration_date)})
<<<<<<< HEAD
  };
=======
  }
=======
      expiration_date: formatDateValue(cert.expiration_date),
    });
  };
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id)
    }
<<<<<<< HEAD
  };
=======
  }
<<<<<<< HEAD

  return (
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>Certifications & Licenses</h2>
        <p className='text-muted-foreground'>
          Add any professional certifications, licenses, or credentials you have earned.
=======
  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>
          Certifications & Licenses
        </h2>
        <p className='text-muted-foreground'>
          Add any professional certifications, licenses, or credentials you have
          earned.

        </p>
      </div>
      {certifications.length > 0 && (
origin/cursor/automate-test-improve-and-merge-code-2533
        <CertificationsList
          certifications={certifications}
          onEdit={handleEdit}
          onDelete={handleDelete}        />;
      )}

        <CertificationsList 
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />

      )}

      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>

        <Form {...form}>
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className='space-y-4'>
=======
<<<<<<< HEAD
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className=space-y-4">
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <form
            onSubmit={form.handleSubmit(handleAddOrUpdate)}
            className='space-y-4'
          >
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <CertificationFormFields form={form} />

            {error && <Alert variant='destructive'><AlertDescription>{error}</AlertDescription></Alert>}

            <div className='flex justify-between pt-2'>
              <Button
<<<<<<< HEAD

=======
<<<<<<< HEAD
                type='button'
                variant='outline'
                onClick={() => {
                  if (editingId) {
                    setEditingId(null);
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',

                    setEditingId(null),
                    setEditingId(null),
                    setEditingId($2);
=======
<<<<<<< HEAD
                type="button
                variant=outline"
                onClick={() => {
                  if (editingId) {
                    setEditingId(null);
>>>>>>> origin/resolved-merge-conflicts
                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
                      credential_url: ''})
                  } else {
                    onBack()
<<<<<<< HEAD
import { useState   } from 'react';
import { useForm   } from 'react-hook-form';
import { Button   } from '@/components/ui/button';
import { Form   } from '@/components/ui/form';
import { Certification   } from '@/types/resume';
import { useResume   } from '@/hooks/useResume';
import { Alert, AlertDescription   } from '@/components/ui/alert';
import { zodResolver   } from '@hookform/resolvers/zod';
import { format   } from 'date-fns';
import { CertificationsList   } from './CertificationsList';
import { CertificationFormFields   } from './CertificationFormFields';
import { CertificationFormValues, certificationSchema  } from './types';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState   } from 'react;
import { useForm   } from react-hook-form';
import { Button   } from '@/components/ui/button;
import { Form   } from @/components/ui/form';
import { Certification   } from '@/types/resume;
import { useResume   } from @/hooks/useResume';
import { Alert, AlertDescription   } from '@/components/ui/alert;
import { zodResolver   } from @hookform/resolvers/zod';
import { format   } from 'date-fns;
import { CertificationsList   } from ./CertificationsList';
import { CertificationFormFields   } from './CertificationFormFields;
import { CertificationFormValues, certificationSchema  } from ./types';
>>>>>>> origin/resolved-merge-conflicts
interface CertificationsFormProps  {resumeId: string;
  certifications: Certification[];
  onComplete: () => void;
  onBack: () => void;
  }const handleEdit = (cert: Certification) => {setEditingId(cert.id!)form.reset({...cert;
  }
  const handleEdit = (cert: Certification) => {setEditingId(cert.id!)form.reset({...cert,issue_date: formatDateValue(cert.issue_date),expiration_date: formatDateValue(cert.expiration_date)})}const handleDelete = async (id: string) => {if (confirm('Are you sure you want to delete this certification?')) {await deleteCertification(id)}
  }
  return (<div className='space-y-6'>;
      <div>;
        <h2 className='text-xl font-semibold mb-2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text-muted-foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (<CertificationsList;
          certifications={certifications}
          onEdit={handleEdit}
          onDelete={handleDelete}        />;
      )}<CertificationsList;
          certifications={certifications}onEdit={handleEdit}onDelete={handleDelete}/>;
      )}<div className='bg-muted/40 p-6 rounded-lg'>;
        <h3 className='text-md font-medium mb-4'>;
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>;
        <Form {...form}>;
          <form;
            onSubmit={form.handleSubmit(handleAddOrUpdate)}
            className='space-y-4';
          >;
            <CertificationFormFields form={form} />;
            {error && <Alert variant='destructive'><AlertDescription>{error}</AlertDescription></Alert>}<div className='flex justify-between pt-2'>;
              <Button;
                type='button';
                variant='outline';
                onClick={() => {if (editingId) {setEditingId(null),setEditingId(null),form.reset({name: '',issuing_organization: '',issue_date: '',expiration_date: '',credential_id: '',setEditingId(null),setEditingId(null),form.reset({name: '',issuing_organization: '',issue_date: '',expiration_date: '',credential_id: '',credential_url: ''})name: '';
                      issuing_organization: '';
                      issue_date: '';
                      expiration_date: '';
                      credential_id: '';
                      credential_url: '';
                    })} else {onBack()<div className='bg-muted/40 p-6 rounded-lg'>;
        <h3 className='text-md font-medium mb-4'>;
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>;<Form {...form}>;
          <form;
            onSubmit={form && form.handleSubmit(handleAddOrUpdate)}
            className='space-y-4'>;
            <CertificationFormFields form={form} />;{error && (<Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>;
            )}<div className='flex justify-between pt-2'>;
              <Button;
                type='button';
                variant='outline';
                onClick={() => {if (editingId) {setEditingId(null)form && form.reset({name: '',issuing_organization: '',issue_date: '',expiration_date: '',credential_id: '',credential_url: ''})} else {onBack()}
                }
              >;
<<<<<<< HEAD
                {editingId ? 'Cancel' : 'Back'}</Button>;
              <div className='flex gap-2'>;
                <Button type='submit' disabled={isLoading}>;
=======
                {editingId ? Cancel' : 'Back}</Button>;
              <div className="flex gap-2>;
                <Button type=submit" disabled={isLoading}>;
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  }
                }
              >
<<<<<<< HEAD
                {editingId ? 'Cancel' : 'Back'}
              </Button>

              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type='button' onClick={onComplete}>
=======
                {editingId ? Cancel' : 'Back'}

              </Button>

              <div className="flex gap-2>
                <Button type=submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={onComplete}>

>>>>>>> origin/resolved-merge-conflicts
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
  );
  )
                  {editingId ? 'Update' : 'Add'} Certification;
                </Button>;
<<<<<<< HEAD
                <Button type='button' onClick={onComplete}>;
=======
                <Button type="button" onClick={onComplete}>;
>>>>>>> origin/resolved-merge-conflicts
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>;
  )</Button>;<div className='flex gap-2'>;
                <Button type='submit' disabled={isLoading}>;
                  {isLoading && (<Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                  )}
                  {editingId ? 'Update' : 'Add'} Certification;
                </Button>;<Button type='button' onClick={onComplete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>;)}> {editingId ? 'Cancel' : 'Back' ;
<<<<<<< HEAD
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>)}''}// Check condition;
if ( {) {$2;
}
        form.reset ({name: '',issuing_organization: '',issue_date: '',expiration_date: '',credential_id: '',credential_url: ''})setEditingId (null)}
    } catch (err: any) {set_error (err.message || 'An error occurred')}
  }
  const handle_edit = (cert: Certification) =>: any {setEditingId (cert.id!)form.reset ({...cert}
  const handle_edit = (cert: Certification) =>: any {setEditingId (cert.id!)form.reset ({issue_date: formatDateValue (cert.issue_date),expiration_date: formatDateValue (cert.expiration_date)})}
  const handle_delete = async (id: string, ) => {if () {) {$2;
}
      await delete_certification (id)}
  }
  return (<div className='space - y-6'>;
      <div>;
        <h2 className='text - xl font - semibold mb - 2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text - muted - foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (<CertificationsList;
          certifications={certifications}
          on_edit={handle_edit}
          on_delete={handle_delete}        />)}
      <div className='bg - muted / 40 p - 6 rounded - lg'>;
        <h3 className='text - md font - medium mb - 4'>;
          {editing_id ? 'Update Certification' : 'Add Certification'}
        </h3>;
        <Form {...form}>;
          <form;
            on_submit={form.handle_submit (handleAddOrUpdate)}
            className='space - y-4';
          >;
            <CertificationFormFields form={form} />;
            {error && (<Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>)}
            <div className='flex justify - between pt - 2'>;
              <Button;
                type='button';
                variant='outline';
                on_click={() => {// Check condition;
if ( {) {$2;
}
                    setEditingId (null)form.reset ({name: '',issuing_organization: '',issue_date: '',expiration_date: '',credential_id: '',credential_url: ''})} else {on_back ()}
                }
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className='flex gap - 2'>;
                <Button type='submit' disabled={is_loading}>;
                  {is_loading && (<Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                  {editing_id ? 'Update' : 'Add'} Certification;
                </Button>;
                <Button type='button' on_click={on_complete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>)}> {editing_id ? 'Cancel' : 'Back';
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>)}''}}'';
}
;
=======
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>)}'"}// Check condition;
if ( {) {$2;
}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
}> {;
  editingId ? 'Cancel' : 'Back' ;
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) ;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
