import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';
import { useTranslationService } from '@/hooks/useTranslationService';
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext';

interface TranslatableJobFormProps {
  onSubmit: (data: any) => void;
  isSubmitting: boolean;
}

export function TranslatableJobForm({
  onSubmit,
  isSubmitting,
}: TranslatableJobFormProps) {
  const { t } = useTranslation();
  const { translateText } = useTranslationService();
  const { currentLanguage, setLanguage } = useLanguage();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    type: 'full-time',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleLanguageChange = (language: SupportedLanguage) => {
    setLanguage(language);
  };

  return (
    <Card className='w-full max-w-4xl mx-auto'>
      <CardContent className='p-6'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            {t('jobForm.title', 'Create Job Posting')}
          </h2>

          <Tabs value={currentLanguage} onValueChange={handleLanguageChange}>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='en'>English</TabsTrigger>
              <TabsTrigger value='es'>Español</TabsTrigger>
              <TabsTrigger value='fr'>Français</TabsTrigger>
            </TabsList>

            <TabsContent value='en' className='mt-6'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='title' className='text-white'>
                      {t('jobForm.jobTitle', 'Job Title')}
                    </Label>
                    <Input
                      id='title'
                      value={formData.title}
                      onChange={e => handleInputChange('title', e.target.value)}
                      placeholder={t(
                        'jobForm.jobTitlePlaceholder',
                        'Enter job title'
                      )}
                      className='bg-zion-blue border-zion-blue-light text-white'
                      required
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='location' className='text-white'>
                      {t('jobForm.location', 'Location')}
                    </Label>
                    <Input
                      id='location'
                      value={formData.location}
                      onChange={e =>
                        handleInputChange('location', e.target.value)
                      }
                      placeholder={t(
                        'jobForm.locationPlaceholder',
                        'Enter location'
                      )}
                      className='bg-zion-blue border-zion-blue-light text-white'
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='description' className='text-white'>
                    {t('jobForm.description', 'Job Description')}
                  </Label>
                  <Textarea
                    id='description'
                    value={formData.description}
                    onChange={e =>
                      handleInputChange('description', e.target.value)
                    }
                    placeholder={t(
                      'jobForm.descriptionPlaceholder',
                      'Describe the role and responsibilities'
                    )}
                    className='bg-zion-blue border-zion-blue-light text-white min-h-[120px]'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='requirements' className='text-white'>
                    {t('jobForm.requirements', 'Requirements')}
                  </Label>
                  <Textarea
                    id='requirements'
                    value={formData.requirements}
                    onChange={e =>
                      handleInputChange('requirements', e.target.value)
                    }
                    placeholder={t(
                      'jobForm.requirementsPlaceholder',
                      'List required skills and qualifications'
                    )}
                    className='bg-zion-blue border-zion-blue-light text-white min-h-[100px]'
                    required
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='salary' className='text-white'>
                      {t('jobForm.salary', 'Salary Range')}
                    </Label>
                    <Input
                      id='salary'
                      value={formData.salary}
                      onChange={e =>
                        handleInputChange('salary', e.target.value)
                      }
                      placeholder={t(
                        'jobForm.salaryPlaceholder',
                        'e.g., $50,000 - $70,000'
                      )}
                      className='bg-zion-blue border-zion-blue-light text-white'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='type' className='text-white'>
                      {t('jobForm.jobType', 'Job Type')}
                    </Label>
                    <select
                      id='type'
                      value={formData.type}
                      onChange={e => handleInputChange('type', e.target.value)}
                      className='w-full p-2 bg-zion-blue border border-zion-blue-light text-white rounded-md'
                    >
                      <option value='full-time'>
                        {t('jobForm.fullTime', 'Full-time')}
                      </option>
                      <option value='part-time'>
                        {t('jobForm.partTime', 'Part-time')}
                      </option>
                      <option value='contract'>
                        {t('jobForm.contract', 'Contract')}
                      </option>
                      <option value='freelance'>
                        {t('jobForm.freelance', 'Freelance')}
                      </option>
                    </select>
                  </div>
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white'
                >
                  {isSubmitting
                    ? t('jobForm.submitting', 'Creating...')
                    : t('jobForm.submit', 'Create Job Posting')}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value='es' className='mt-6'>
              <div className='text-center py-8'>
                <p className='text-zion-slate-light'>
                  {t(
                    'jobForm.translationComingSoon',
                    'Spanish translation coming soon!'
                  )}
                </p>
              </div>
            </TabsContent>

            <TabsContent value='fr' className='mt-6'>
              <div className='text-center py-8'>
                <p className='text-zion-slate-light'>
                  {t(
                    'jobForm.translationComingSoon',
                    'French translation coming soon!'
                  )}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}
