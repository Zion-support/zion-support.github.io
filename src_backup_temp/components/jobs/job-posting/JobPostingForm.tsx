import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useJobForm } from './useJobForm';
import { BasicInfoFields } from './BasicInfoFields';
import { DateFields } from './DateFields';
import { DescriptionFields } from './DescriptionFields';
import { useJobs } from '@/hooks/useJobs';
import { JobSchemaType } from './validation';
  return () => {;
    // Cleanup function;
};
}, []); []);    if(jobId) {;
      setIsFormLoading(true);
      getJobById(jobId);
        .then((job) => {;
          if(job) {;
            const currentValues = getValues(); // Use destructured getValues;
            Object.entries(job).forEach(([key, value]) => {;
              if(key === 'published_date' && value) {;
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
      if(onSuccess) {;
        onSuccess();
}
    } catch(error: any) {;
      console.error("Error creating/updating job:", error);
      toast.error(error.message || "Failed to post job");
} finally {;
      setIsFormLoading(false);
}  };
  if(isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;
  return (<Form {...form}>;
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;
          <h3 className="text-lg font-medium">Post a Job</h3>;
          <p className="text-sm text-muted-foreground">;
            Fill in the details below to create a job posting.</p>;
        </div>;
        <BasicInfoFields control={form.control}  />;
        ;
        <DateFields startDate={startDate} ;  return (<Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Post a Job
          <p className="text-sm text-muted-foreground">
            Fill in the details below to create a job posting.</p>
        </div>
        <BasicInfoFields control={form.control}  />
        <DateFields startDate={startDate} 

        <BasicInfoFields control={form.control} />;
        <DateFields ;
          startDate={startDate} ;          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
         />;
        <div>;
          <Label htmlFor="isRemote">;
            <Input;
              type="checkbox";
              id="isRemote";
              checked={isRemote}
              className="mr-2";
              onChange={(e) => setIsRemote(e.target.checked)}
            />;
            Remote;
          </Label>;
        </div>;
        <DescriptionFields control={form.control} ;
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
         />;
        <Button type="submit" disabled={isSubmitting || isFormLoading}>;
          {isSubmitting || isFormLoading ? "Submitting..." : "jobId ? "Update Job" : "Post Job""}
        </Button>;
      </form>;
    </Form>;
  );
}
;
</DescriptionFields>;
</DateFields>;
</any>;
</any>