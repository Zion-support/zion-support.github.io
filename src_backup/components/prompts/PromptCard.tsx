<<<<<<< HEAD
import { useState } from 'react',;
import { Copy, Send } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import type { Prompt } from '@/types/prompts',;
=======
import { useState } from 'react';
<<<<<<< HEAD:src/components/prompts/PromptCard.tsx
<<<<<<< HEAD

import { Copy, Send } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface PromptCardProps {;
  prompt: Prompt;
}

<<<<<<< HEAD
export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false),

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.text),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text),
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank')
  },
=======
export function PromptCard(): any ({ prompt }: PromptCardProps) {;
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {;
    navigator && navigator.clipboard.writeText(prompt && prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);  };
  const handleSend = () => {;
    const encoded = encodeURIComponent(prompt && prompt.text);
    window && window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {;
    const encoded = encodeURIComponent(prompt && prompt.text);
    window && window.open(`/zion-gpt?prompt=${encoded}`, '_blank');

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/prompts/PromptCard.tsx
import { Copy, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';

interface PromptCardProps {
  prompt: Prompt;

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.text);
    setCopied(true);
setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text);
window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
  };
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className='p-4 border rounded-md bg-background flex flex-col justify-between'>
      <p className='mb-4 text-sm'>{prompt.text}</p>
      <div className='flex gap-2 mt-auto'>
        <Button
          variant='outline'
          size='sm'
          onClick={handleCopy}
          aria-label='Copy prompt'
        >
          {copied ? 'Copied' : <Copy className='w-4 h-4' />}
<<<<<<< HEAD:src/components/prompts/PromptCard.tsx
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <div className="p-4 border rounded-md bg-background flex flex-col justify-between">
      <p className="mb-4 text-sm">{prompt.text}</p>
      <div className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" onClick={handleCopy} aria-label="Copy prompt">
          {copied ? 'Copied' : <Copy className="w-4 h-4" />}
        </Button>
        <Button variant="secondary" size="sm" onClick={handleSend} aria-label="Send to ZionGPT">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
<<<<<<< HEAD
=======
  );
=======
};
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/prompts/PromptCard.tsx

}

import { useState } from 'react';
import { Copy, Send } from 'lucide-react';
import type { Prompt } from '@/types / prompts';
import { Button } from '@/components / ui / button';
interface PromptCardProps {
  prompt: Prompt;
export /**
 * PromptCard - Function description
 */
function PromptCard() {
  const [copied, set_copied] = useState (false);
  const handle_copy = () =>: any {
    navigator.clipboard.write_text (prompt.text);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000) }
  const handle_send = () =>: any {
    const encoded = encodeURIComponent (prompt.text);
    window.open (`/zion - gpt?prompt=${encoded}`, '_blank');
    set_timeout (() => set_copied (false), 2000);
    set_timeout (() => set_copied (false), 2000);
  }
  const handle_send = () =>: any {
    const encoded = encodeURIComponent (prompt.text);
    window.open (`/zion - gpt?prompt=${encoded}`, '_blank');
  return (
    <div className='p - 4 border rounded - md bg - background flex flex - col justify - between'>;
      <p className='mb - 4 text - sm'>{prompt.text}</p>;
      <div className='flex gap - 2 mt - auto'>;
        <Button;
          variant='outline';
          size='sm';
          on_click={handle_copy}
          aria - label='Copy prompt';
        >;
          {copied ? 'Copied' : <Copy className='w - 4 h - 4' />}
        </Button>;
        <Button;
          variant='secondary';
          size='sm';
          on_click={handle_send}
          aria - label='Send to ZionGPT';
        >;
          <Send className='w - 4 h - 4' />        </Button>;
      </div>;
    </div>);
}        <Button variant="secondary" size="sm" on_click={handle_send} aria - label="Send to ZionGPT">;
          <Send className="w - 4 h - 4" />;
        </Button>;
      </div>;
    </div>);
}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
        </Button>
        <Button
          variant='secondary'
          size='sm'
          onClick={handleSend}
          aria-label='Send to ZionGPT'
        >
          <Send className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
}
<<<<<<< HEAD:src/components/prompts/PromptCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/prompts/PromptCard.tsx
