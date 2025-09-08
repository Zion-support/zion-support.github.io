



  const handleEdit = (work: WorkExperience) => {
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
  onBack: () => void;export function WorkExperienceForm(): any ({resumeId,workExperiences,onComplete,onBack}: WorkExperienceFormProps) {const {addWorkExperience,updateWorkExperience,deleteWorkExperience,isLoading} = useResume()const [editingId, setEditingId] = useState<string | null>(null)const [error, setError]  = useState<string | null>(null)// Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, 'yyyy-MM-dd')
};


      </div>;{workExperiences && workExperiences.length > 0 && (<div className='space-y-4'>;
          <h3 className='text-md font-medium'>Added Experience</h3>;
          {workExperiences && workExperiences.map(work => (<Card key={work && work.id} className='bg-muted/40'>;
      </div>;{workExperiences && workExperiences.length > 0 && (<div className='space-y-4>;
          <h3 className=text-md font-medium'>Added Experience</h3>;
          {workExperiences && workExperiences.map(work => (<Card key={work && work.id} className='bg-muted/40>;
              <CardContent className=pt-6'>;
                <div className='flex justify-between>                  <div>;
                    <h4 className=font-medium'>{work && work.role_title}</h4>;
                    <p className='text-sm text-muted-foreground>;
}> {';
  editingId ? 'Cancel': 'Back' ;
}> {;
  editingId ? 'Cancel': Back ;
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
                {!editingId && workExperiences.length > 0 && (<Button type='button' onClick={onComplete}>;


            {error && (<Alert variant='destructive'>;
            {error && (<Alert variant=destructive'>;


                type='button';
                variant='outline';
                on_click={() => {// Check condition;
if ( {) {$2;
}
                    setEditingId (null)form.reset ({company_name: '',role_title: '',start_date: format (new Date (), 'yyyy - MM - dd'),is_current: false,description: '',location: ''})} else {on_back ()}
                }
                type=button';
                variant='outline;
                on_click={() => {// Check condition;
if ( {) {$2;
}
                    setEditingId (null)form.reset ({company_name: ',role_title: ',start_date: format (new Date (), yyyy - MM - dd'),is_current: false,description: ',location: '})} else {on_back ()}

              <div className='flex gap - 2'>;
                <Button type='submit' disabled={is_loading}>;
                  {is_loading && (<Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                  {editing_id ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (<Button type='button' on_click={on_complete}>;
              <div className='flex gap - 2>;
                <Button type=submit' disabled={is_loading}>;
                  {is_loading && (<Loader2 className='mr - 2 h - 4 w - 4 animate - spin />)}
                  {editing_id ? Update' : 'Add} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (<Button type=button' on_click={on_complete}>;

}''
