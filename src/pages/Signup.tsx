import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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
            <div className='mt-6'>
              <AuthButtons providers={['google', 'github']} />
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  )
})
}
toast ({'
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created!',  description: isPartnerSignup ? 'Please verify your email. Your partner application will be reviewed after verification.'? 'Partner application submitted successfully! You can now log in and your application will be reviewed.': 'Account created successfully!'
setSuccessMessage (data.message |message)
toast ({'
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created successfully!', description: isPartnerSignup ? 'Welcome to the partner program. You can now log in.': 'Welcome to the platform. You can now log in.'
})
//Redirect to appropriate page after a short delay
}catch (err: unknown) {'
  logErrorToProduction ('Signup error details:', {
  message: err.message, response: err.response ? {
  status: err.response.status,  statusText: err.response.statusText, data: err.response.data '
}: 'No response';'
request: err.request ? 'Request made but no response': 'No request'
})
}return undefined
}, [emailVerificationRequired, formik.values.email, router])
//Show loading state only during initial health check if (healthCheckLoading) {
  return (<AuthLayout> <div className="flex min-h-screen items-center justify-center p-4" > <div className="text-center space-y-4" > <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" ></div> <p className="text-muted-foreground" >Initializing signup...</p> </div> </div> </AuthLayout> Join the Zion AI Partner Program and start earning rewards </p> </div>)
}> {'
  healthCheckLoading ? 'Checking...': 'Retry'
}</Button> </AlertDescription> </Alert>)
}<AlertDescription> {
  errorMessage
}</AlertDescription> </Alert>)
}<AlertDescription> Before you can log in, please click the verification link in the email we sent to <strong> {
  formik.values.email
}</strong>. </AlertDescription> </Alert>) "
}<div> <label htmlFor="name" className="block text-sm font-medium" > Full Name </label> <Input) "
}</div> <div> <label htmlFor="email" className="block text-sm font-medium" > Email address </label> <Input) "
}</div> <div> <label htmlFor="password" className="block text-sm font-medium" > Password </label> <Input) "
}</div> <div> <label htmlFor="confirm" className="block text-sm font-medium" > Confirm Password </label> <Input) "
}</div> <div className="flex items-center space-x-2" > <input)
}{"
  !emailVerificationRequired ? (<Button type="submit" disabled= {
  loading
}> {'"
  loading ? (<> <LoadingSpinner size="sm" className="mr-2" /> Creating Account... </>) : (healthCheckError ? 'Try Creating Account': 'Create Account')
}</Button> > Go to Login </Button> <Button router.push (`/verify-status?email=$ {
  encodeURIComponent (formik.values.email)
}`)
}> Check Verification Status </Button> <Button > Try Different Email </Button> </div>)
}<p>⚠️ We detected some authentication service issues.</p> <p>If signup fails, please try again in a few minutes or contact support.</p> </div>)
}</form> </div>)
}</div> </div> </AuthLayout>)
}'"
