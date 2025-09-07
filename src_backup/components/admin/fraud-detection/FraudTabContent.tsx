:src/components/admin/fraud-detection/FraudTabContent.tsx
import React from "react;
import React from 'react;
import { AlertTriangle, AlertCircle, CheckCircle } from lucide-react';

import React from react";
origin/cursor/automate-test-improve-and-merge-code-2533
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react
import { AlertTriangle, AlertCircle, CheckCircle } from lucide-react'

import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react
import { AlertTriangle, AlertCircle, CheckCircle } from lucide-react'

import React from 'react;
import { AlertTriangle, AlertCircle, CheckCircle } from lucide-react';
:src/components/admin/fraud-detection/FraudTabContent.tsx
        <div className='bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center>
          <AlertTriangle className=mx-auto h-12 w-12 text-amber-500 mb-4' />
          <h3 className='text-xl font-medium mb-4>Pending Review Flags</h3>
          <p className=text-muted-foreground'>
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      )
      return (
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center>
          <AlertTriangle className=mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4>Pending Review Flags</h3>
          <p className=text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      ),
    
interface FraudTabContentProps {

  tab_value: string;
export const FraudTabContent: React.FC < FraudTabContentProps> = ({
  tab_value}) => {

        <div className='bg - amber - 50 dark:bg - amber - 950 / 20 p - 8 rounded - lg text - center>;
import React from react';
import { AlertTriangle, AlertCircle, CheckCircle  } from 'lucide-react;
interface FraudTabContentProps  {tab_value: string;
export const FraudTabContent: React.FC < FraudTabContentProps> = ({tab_value}) => {<div className=bg - amber - 50 dark:bg - amber - 950 / 20 p - 8 rounded - lg text - center'>;
          <AlertTriangle className='mx - auto h - 12 w - 12 text - amber - 500 mb - 4 />;
          <h3 className=text - xl font - medium mb - 4'>Pending Review Flags</h3>;
          <p className='text - muted - foreground>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>)case dangerous':;switch (tabValue) {    case 'pending:;
  switch (tabValue) {    case pending':;
interface FraudTabContentProps  {tabValue: string;import React from "react,interface FraudTabContentProps  {tabValue: string;
}export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {switch(tabValue) {case 'pending:;
      return (<div className=bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">;
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4 />;
          <h3 className=text-xl font-medium mb-4">Pending Review Flags</h3>;
          <p className="text-muted-foreground>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
    case dangerous':;
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudTabContent.tsx

  switch (tabValue) {    case 'pending:

interface FraudTabContentProps {
  tabValue: string;

import React from react",
import { AlertTriangle, AlertCircle, CheckCircle } from lucide-react'

interface FraudTabContentProps {
  tabValue: string
}

export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {
  switch(tabValue) {
    case 'pending:

      return (

  switch (tabValue) {    case pending':
    case 'dangerous:

      return (
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center>
          <AlertCircle className=mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-medium mb-4>Dangerous Flags</h3>
          <p className=text-muted-foreground">
            This tab shows high-priority dangerous flags requiring immediate attention.
          </p>
        </div>

:src/components/admin/fraud-detection/FraudTabContent.tsx
      )
    case actioned':
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center>
          <CheckCircle className=mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4>Actioned Flags</h3>
          <p className=text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
      )
    default:
      return null
  }
}

      ),

    case 'actioned:
      return (

        <div className=bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text - center'>;
      return (<div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center>;
          <AlertCircle className=mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4>Dangerous Flags</h3>;
          <p className=text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
      ),case 'actioned:;
      return (<div className=bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text - center'>;
          <AlertCircle className='mx - auto h - 12 w - 12 text - red - 500 mb - 4 />;
          <h3 className=text - xl font - medium mb - 4'>Dangerous Flags</h3>;
          <p className='text - muted - foreground>;
            This tab shows high - priority dangerous flags requiring immediate;
            attention.;
          </p>;
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudTabContent.tsx
        </div>);
    case actioned':;
      return (

      return null;
  }
}

}

interface FraudTabContentProps {
  tabValue: string;
        </div>)case 'actioned:;
      return (case actioned':;
      return (<div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center>;
          <CheckCircle className=mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4>Actioned Flags</h3>;
          <p className=text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      return null;
  }}}),default:;
      return null;
interface FraudTabContentProps  {tabValue: string;export const FraudTabContent: React.FC<FraudTabContentProps> = ({tabValue}) => {switch (tabValue) {    case 'pending:;
      return (<div className=bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center'>;
          <AlertTriangle className='mx-auto h-12 w-12 text-amber-500 mb-4 />;
          <h3 className=text-xl font-medium mb-4'>Pending Review Flags</h3>;
          <p className='text-muted-foreground>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
      )case dangerous':;
      return (<div className='bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center>;
          <AlertCircle className=mx-auto h-12 w-12 text-red-500 mb-4' />;
          <h3 className='text-xl font-medium mb-4>Dangerous Flags</h3>;
          <p className=text-muted-foreground'>;
            This tab shows high-priority dangerous flags requiring immediate;
            attention.;
          </p>;
        </div>;
      )case 'actioned:;
      return (<div className=bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center'>;
          <CheckCircle className='mx-auto h-12 w-12 text-green-500 mb-4 />;
          <h3 className=text-xl font-medium mb-4'>Actioned Flags</h3>;
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudTabContent.tsx
          <p className='text-muted-foreground>;

    case actioned':
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center>
          <CheckCircle className=mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4>Actioned Flags</h3>
          <p className=text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
}
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {
  switch(tabValue) {
    case 'pending:;
      return (;
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center>;
          <AlertTriangle className=mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4>Pending Review Flags</h3>;
          <p className=text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
      ),
    case dangerous':;
      return (;
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center>;
          <AlertCircle className=mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4>Dangerous Flags</h3>;
          <p className=text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
      ),
    case 'actioned:;

            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      );


    default:;
      return null;

}

        <div className=bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center'>;
          <p className='text-muted-foreground>;This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      )default:;
      return null;}<div className=bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center'>;
          <CheckCircle className='mx - auto h - 12 w - 12 text - green - 500 mb - 4 />;
          <h3 className=text - xl font - medium mb - 4'>Actioned Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>)default:;
      return null;
  }
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudTabContent.tsx
}

  }

}

      );

    default:
      return null;
  }
}
}}})default:;
      return null;
  }
}
