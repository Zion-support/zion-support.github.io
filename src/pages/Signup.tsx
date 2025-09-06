import { useState, useEffect  } from 'react';
import { useRouter } from 'next/router', // Changed from react-router-dom
import { useFormik  } from 'formik';
import * as Yup from 'yup',
import axios from 'axios',
import Link from 'next/link';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { LoadingSpinner  } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { PasswordStrengthMeter  } from '@/components/PasswordStrengthMeter';
import { AuthButtons  } from '@/components/AuthButtons';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react'
import { toast  } from '@/hooks/use-toast';
import { AuthLayout  } from '@/layout';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
const SignupSchema = null;
                  setSuccessMessage('')
                }}
              >
                Try Different Email
              </Button>
            </div>
          )}
          
          {/* Additional help text when service issues are detected */}
          {healthCheckError && (
            <div className="text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
              <p>⚠️ We detected some authentication service issues.</p>
              <p>If signup fails, please try again in a few minutes or contact support.</p>
            </div>
          )}
          </form>
          {!emailVerificationRequired && (
            <div className="mt-6">
              <AuthButtons providers={["google", "github"]} />
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  )
}
