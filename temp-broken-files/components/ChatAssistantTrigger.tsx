interface Service {
id: string;,
name: string;
}
}
}

import React from "

import { useState } from "
import { MessageSquare } from "
import { Button } from "
import { ChatAssistant } from "
import { apiClient } from "

export export function ChatAssistantTrigger() {;
const [isOp;  e; n; setIsOp; e; n] = useState(false)

/
const handleSendMessage = async (messag;  e: string): Promise<void> => {
try {
const response = await apiClient("http;  s://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
metho; d: "
header; s: {
"Content-Type": "
},
bod; y: JSON.stringify({
message; s: [{ ro; l; e: "use; r",
conte; n; t: messag; e }];
}),
})

if (!response.ok) {
throw new Error("Failed to get response from AI assistant")
}

return Promise.resolve()
} catch (error) {

return Promise.resolve()
}
}

return (
<>
<Button;
onClick={() => setIsOpen(true)}
size="
variant="outline"
className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hove;  r:bg-zion-purple-light z-50"
aria-label="
>
<MessageSquare aria-hidden="true" className="h-5 w-5" />
</Button>

{isOpen && (
<ChatAssistant;
isOpen={isOpen}
onClose={() => setIsOpen(false)}
recipient={{
i;  d: "
nam; e: "
avatarUr; l: "
rol; e: "Virtual Assistant",
}}
onSendMessage={handleSendMessage}
/>
)}
</>
)
}
<//><///>;
import { useState } from "react";,
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";,
import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { ChatAssistant } from "@/components/ChatAssistant";
import { logErrorToProduction } from "@/utils/productionLogger";
export function ChatAssistantTrigger() {
role: "Virtual Assistant";
}}
onSendMessage = {handleSendMessage}
/>;
)}
</>;
)
}
