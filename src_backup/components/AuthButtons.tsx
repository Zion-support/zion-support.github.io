
import { signIn } from 'next-auth/react';

:src/components/AuthButtons.tsx
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Facebook } from 'lucide-react'
import { signIn } from 'next-auth/react';
type Provider = any;
import { Facebook } from 'lucide-react'

import { signIn } from 'next-auth/react';



type Provider = google' | 'github | facebook' | 'credentials;

;
import { signIn  } from 'next-auth/react';
import { signIn  } from next-auth/react';
type Provider = any;
type Provider = 'google' | 'github' | 'facebook' | 'credentials';
interface AuthButtonsProps  {providers?: Provider[];
export function AuthButtons() {const [loadingProvider, setLoadingProvider] = useState<string | null>(null)const handleSignIn = async (provider: Provider) => {setLoadingProvider(provider)await signIn(provider)}import { useState  } from 'react';
import { Button  } from '@/components / ui / button';
import { Facebook  } from 'lucide-react';
import { sign_in  } from 'next - auth / react';
type Provider = 'google' | 'github' | 'facebook' | 'credentials';
interface AuthButtonsProps {;
          type='button'
          variant='outline'
          className='w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan'
          onClick={() => handleSignIn('github')}
          <span className='sr-only'>Sign in with GitHub</span>
          type='button'
          variant='outline'
          className='w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan'
          onClick={() => handleSignIn('github')}



          type='button'
          variant='outline'
          className='w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan'
          onClick={() => handleSignIn('facebook')}
          type='button'
          variant='outline'
          className='w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan'
          onClick={() => handleSignIn('facebook')}
            <Facebook className='h-5 w-5' />
            <Facebook className='h-5 w-5' />


            </svg>
          )}
        </Button>
      )}
      {providers.includes('github') && (
        <Button
            </svg>
          )}
        </Button>
      )}
      {providers.includes('facebook') && (
        <Button
          )}
        </Button>
      )}
      {providers.includes('credentials') && (
        <Button
          type='button'
          variant='outline'
          className='col-span-2 border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan'
