

const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()
  return (
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size='icon'
          className='fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50'
          aria-label='Open support'        >
          <MessageSquare className='h-6 w-6' />
        </Button>
      )}
      {/* Support panel */}
      {isOpen && (
        <div
          className={cn(
            'fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col'
            theme === 'dark'
              ? 'bg-zion-blue-dark border border-zion-blue-light'
              : 'bg-white border border-gray-200'

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ChatBotPanel } from './ChatBotPanel';
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const router = null;
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
              : "bg-white border border-gray-200"
origin/cursor/automate-test-improve-and-merge-code-2533


                  'font-semibold'
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                  'font-semibold
                  theme === dark' ? 'text-white : text-gray-800'

main



;
ursor/automate-test-improve-and-merge-code-646c;
const [isOpen, setIsOpen] = useState(false)const { theme } = useTheme()const router = useRouter()import React, { useState } from 'react';
import { useRouter  } from 'next/router';
import { Button  } from '@/components/ui/button';
import { ChatBotPanel  } from './ChatBotPanel';
import { MessageSquare, Info, X  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { useTheme  } from '@/hooks/useTheme';
export function SupportWidget() {const [isOpen, setIsOpen] = useState(false)const { theme } = useTheme()const router  = useRouter()return (<>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (<Button;
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}

:src/components/support/SupportWidget.tsx
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => router.push('/help')}
                aria-label='Help center'              >
                <Info className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => setIsOpen(false)}
                aria-label='Close support'              >
                <X className='h-5 w-5' />
              </Button>
            </div>
          </div>
          <ChatBotPanel />
        </div>
      )}
    </>
  )
}
          <ChatBotPanel />
        </div>
      )}
    </>;
  );
};
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
};
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => router.push("/help")}


  );
;

