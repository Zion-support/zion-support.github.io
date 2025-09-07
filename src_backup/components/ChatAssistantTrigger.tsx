<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx
// Handle sending messages to the AI chat assistant

=======
  // Handle sending messages to the AI chat assistant
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {



        body: JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});
            avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Virtual Assistant';      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }

          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
import { useState } from "react",;
import { MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { ChatAssistant } from "@/components/ChatAssistant",;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false),;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
    try {;
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"},;
        body: JSON.stringify({;
          messages: [{ role: "user", content: message }];
        })}),;
      if (!response.ok) {;
        throw new Error("Failed to get response from AI assistant");


  const [isOpen, setIsOpen] = useState(false);

  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
    try {;
      const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});

            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';      if (!response && response.ok) {;
        throw new Error("Failed to get response from AI assistant");
      }
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx

      return Promise && Promise.resolve();
    } catch (error) {;
      logErrorToProduction('Error in AI chat:', { data: error }),;
      return Promise && Promise.resolve();
    }



=======
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error })
      return Promise.resolve()
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx
  },;
  return (;
    <>;
      <Button;
        onClick={() => setIsOpen(true)}



        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx
      
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error }),
      return Promise.resolve()
    }
  },

<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx

  return (
    <>;
      <Button
        onClick = {(,) => setIsOpen(true),}

        size="icon";
=======

;
  // Handle sending messages to the AI chat assistant;
// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {try {const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {method: "POST";
        headers: {body: JSON.stringify({messages: [{ role: "user", content: message }] ;
        })})avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Virtual Assistant';      if (!response.ok) {throw new Error("Failed to get response from AI assistant")}"Content-Type": "application/json"},body: JSON.stringify({messages: [{ role: "user", content: message }];
        })}),if (!response.ok) {throw new Error("Failed to get response from AI assistant")import { useState } from "react",import { MessageSquare  } from 'lucide-react';
import { Button } from "@/components/ui/button",import { ChatAssistant } from "@/components/ChatAssistant",import {logErrorToProduction} from '@/utils/productionLogger',export function ChatAssistantTrigger() {const [isOpen, setIsOpen] = useState(false),// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {try {const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({messages: [{ role: "user", content: message }];
        })}),if (!response.ok) {throw new Error("Failed to get response from AI assistant")const [isOpen, setIsOpen]  = useState(false)// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {try {const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {method: "POST",headers: {"Content-Type": "application/json"}body: JSON && JSON.stringify({messages: [{ role: "user", content: message }] ;
        })})avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',role: 'Virtual Assistant';      if (!response && response.ok) {throw new Error("Failed to get response from AI assistant")}return Promise.resolve()} catch (error) {logErrorToProduction('Error in AI chat:', { data: error })return Promise.resolve()}return Promise && Promise.resolve()} catch (error) {logErrorToProduction('Error in AI chat:', { data: error }),return Promise && Promise.resolve()}},return (<>;
      <Button;
        onClick={() => setIsOpen(true)}size="icon";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ChatAssistantTrigger.tsx
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx

      {isOpen && (;

=======
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx
        <ChatAssistant
          isOpen = {isOpen,}
          onClose = {(,) => setIsOpen(false),}

          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';



<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatAssistant } from '@/components/ChatAssistant';
import { logErrorToProduction } from '@/utils/productionLogger';

import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ChatAssistant } from "@/components/ChatAssistant";
import {logErrorToProduction} from '@/utils/productionLogger';
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false);
  // Handle sending messages to the AI chat assistant
  const handleSendMessage = null;
            role: 'Virtual Assistant'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      {isOpen && (
        <ChatAssistant
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx
          }}
          onSendMessage = {handleSendMessage,}
        />;
      )}
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx

    </>;
  );
}

import { useState  } from './react';
import { MessageSquare } from 'lucide-react'import { Button  } from '@/components/ui/ button';
import { ChatAssistant  } from '@/components/ ChatAssistant';
import {logErrorToProduction} from '@/utils/ production_logger';
export /**
 * ChatAssistantTrigger - Function description
 */
function ChatAssistantTrigger() {
  const [is_open, setIsOpen] = useState (false);
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise < void> => {
    try {
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {
        method: "POST",
        headers: {
          "Content - Type": "application / json"}
        body: JSON.stringify ({
          messages: [{ role: "user", content: message }];
        })});
            avatar_url: 'https://placehold.co / 64x64?text = AI',
            role: 'Virtual Assistant';      // Check condition
if ( {) {
  $2
}
        throw new Error ("Failed to get response from AI assistant");
      }
      return Promise.resolve ();
    } catch (error) {
      logErrorToProduction ('Error in AI chat:', { data: error }),
      return Promise.resolve ();
    }
  },
  return (
    <>;
=======
      return Promise.resolve()} catch (error) {logErrorToProduction('Error in AI chat:', { data: error }),return Promise.resolve()}
  },size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;
  return (<>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ChatAssistantTrigger.tsx
      <Button;
        onClick = {(,) => setIsOpen(true)}size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;{isOpen && (<ChatAssistant;
          isOpen = {isOpen}
          onClose = {(,) => setIsOpen(false)}isOpen={isOpen}
          onClose={() => setIsOpen(false)}recipient={{id: 'ai-assistant',name: 'AI Assistant',avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',role: 'Virtual Assistant';{isOpen && (<ChatAssistant;
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { ChatAssistant  } from '@/components/ChatAssistant';
import { logErrorToProduction  } from '@/utils/productionLogger';
import { logErrorToProduction } from '@/utils/productionLogger';
export function ChatAssistantTrigger() {const [isOpen, setIsOpen] = useState(false)// Handle sending messages to the AI chat assistant;
  const handleSendMessage = null;
            role: 'Virtual Assistant';
          }}
          onSendMessage = {handleSendMessage}
        />;
      )}</>;
  )}import { useState   } from './react';
import { MessageSquare } from 'lucide-react'import { Button   } from '@/components / ui / button';
import { ChatAssistant   } from '@/components / ChatAssistant';
import { logErrorToProduction } from '@/utils / production_logger';
export /**;
 * ChatAssistantTrigger - Function description;
 */;
function ChatAssistantTrigger() {const [is_open, setIsOpen] = useState (false)// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise < void> => {try {const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {method: "POST",headers: {"Content - Type": "application / json"}
        body: JSON.stringify ({messages: [{ role: "user", content: message }];
        })})avatar_url: 'https://placehold.co / 64x64?text = AI',role: 'Virtual Assistant';      // Check condition;
if ( {) {$2;
}
        throw new Error ("Failed to get response from AI assistant")}
      return Promise.resolve ()} catch (error) {logErrorToProduction ('Error in AI chat:', { data: error }),return Promise.resolve ()}
  },return (<>;
      <Button;
        on_click = {(, ) => setIsOpen (true) }
        size="icon";
        variant="outline";
        className="fixed bottom - 4 right - 4 h - 12 w - 12 rounded - full shadow - lg bg - zion - purple text - white hover:bg - zion - purple - light z - 50";
        aria - label="Open chat assistant";
      >;
        <MessageSquare className="h - 5 w - 5" />;
      </Button>;
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx
      {is_open && (
        <ChatAssistant;
          is_open = {is_open, }
          on_close = {(, ) => setIsOpen (false), }
          recipient={{
            id: 'ai - assistant',
            name: 'AI Assistant',
            avatar_url: 'https://placehold.co / 64x64?text = AI',
            role: 'Virtual Assistant';
          }}
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          onSendMessage = {handleSendMessage, }
        />)}
    </>);
}


=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx
    </>;
  );
}
;


;

    </>
  );

};
return (<> <Button > <MessageSquare className="h-5 w-5" /> </Button> {;
  isOpen && (<ChatAssistant isOpen= {;
  isOpen ;
}onClose= {;
  () => setIsOpen (false) ;
}recipient= {;
  {';
  id: 'ai-assistant', name: 'AI Assistant',  avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Virtual Assistant' ;

}onSendMessage= {;
  handleSendMessage ;
}/>) ;
}</>) ;
}'"
<<<<<<< HEAD:src_backup/components/ChatAssistantTrigger.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      {is_open && (<ChatAssistant;
          is_open = {is_open }
          on_close = {(, ) => setIsOpen (false) }
          recipient={{id: 'ai - assistant',name: 'AI Assistant',avatar_url: 'https://placehold.co / 64x64?text = AI',role: 'Virtual Assistant';
          }}onSendMessage = {handleSendMessage }
        />)}
    </>)}</>;
  )};;
    </>;
  )}return (<> <Button > <MessageSquare className="h-5 w-5" /> </Button> {isOpen && (<ChatAssistant isOpen= {isOpen ;
}onClose= {() => setIsOpen (false)}recipient= {{';
  id: 'ai-assistant', name: 'AI Assistant',  avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Virtual Assistant' ;}onSendMessage= {handleSendMessage ;
}/>)}</>)}'";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ChatAssistantTrigger.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/ChatAssistantTrigger.tsx
