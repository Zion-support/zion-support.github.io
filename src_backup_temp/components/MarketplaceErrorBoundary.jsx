import {ErrorBoundary} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import {mutate} from 'swr';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
