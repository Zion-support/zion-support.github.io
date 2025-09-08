interface PromptCardProps {;
  prompt: Prompt;
}

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
<<<<<<< HEAD

          {copied ? 'Copied' : <Copy className='w-4 h-4' />}

=======
<<<<<<< HEAD
          {copied ? 'Copied' : <Copy className='w-4 h-4' />}
};
=======
<<<<<<< HEAD
          {copied ? 'Copied : <Copy className=w-4 h-4' />}
}
=======
          {copied ? 'Copied' : <Copy className='w-4 h-4' />}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

}

<<<<<<< HEAD

=======
<<<<<<< HEAD
import { useState } from 'react';
import { Copy, Send } from 'lucide-react';
import type { Prompt } from '@/types/ prompts';
import { Button } from '@/components/ui/ button';
=======
<<<<<<< HEAD
import { useState } from 'react;
import { Copy, Send } from lucide-react';
import type { Prompt } from '@/types/ prompts;
import { Button } from @/components/ui/ button';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react';
import { Copy, Send } from 'lucide-react';
import type { Prompt } from '@/types / prompts';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
    <div className='p - 4 border rounded - md bg - background flex flex - col justify - between'>;
import { useState  } from 'react';
import { Copy, Send  } from 'lucide-react';
import { Button   } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';
interface PromptCardProps  {prompt: Prompt;export function PromptCard(): any ({ prompt }: PromptCardProps) {const [copied, setCopied] = useState(false)const handleCopy = () => {navigator && navigator.clipboard.writeText(prompt && prompt.text)setCopied(true)setTimeout(() => setCopied(false), 2000)}const handleSend = () => {const encoded = encodeURIComponent(prompt && prompt.text)window && window.open(`/zion-gpt?prompt=${encoded}`, '_blank')setTimeout(() => setCopied(false), 2000)setTimeout(() => setCopied(false), 2000)}const handleSend = () => {const encoded = encodeURIComponent(prompt && prompt.text)window && window.open(`/zion-gpt?prompt=${encoded}`, '_blank')import { Button  } from '@/components/ui/button';
interface PromptCardProps  {prompt: Prompt;export function PromptCard() {const [copied, setCopied]  = useState(false)const handleCopy = () => {navigator.clipboard.writeText(prompt.text)setCopied(true)setTimeout(() => setCopied(false), 2000)}const handleSend = () => {const encoded = encodeURIComponent(prompt.text)window.open(`/zion-gpt?prompt=${encoded}`, '_blank')}return (<div className='p-4 border rounded-md bg-background flex flex-col justify-between'>;
      <p className='mb-4 text-sm'>{prompt.text}</p>;
      <div className='flex gap-2 mt-auto'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className='p - 4 border rounded - md bg - background flex flex - col justify - between>;
import { useState  } from react';
import { Copy, Send  } from 'lucide-react;
import { Button   } from @/components/ui/button';
interface PromptCardProps  {prompt: Prompt;export function PromptCard(): any ({ prompt }: PromptCardProps) {const [copied, setCopied] = useState(false)const handleCopy = () => {navigator && navigator.clipboard.writeText(prompt && prompt.text)setCopied(true)setTimeout(() => setCopied(false), 2000)}const handleSend = () => {const encoded = encodeURIComponent(prompt && prompt.text)window && window.open(`/zion-gpt?prompt=${encoded}`, _blank')setTimeout(() => setCopied(false), 2000)setTimeout(() => setCopied(false), 2000)}const handleSend = () => {const encoded = encodeURIComponent(prompt && prompt.text)window && window.open(`/zion-gpt?prompt=${encoded}`, '_blank)import { Button  } from @/components/ui/button';
interface PromptCardProps  {prompt: Prompt;export function PromptCard() {const [copied, setCopied]  = useState(false)const handleCopy = () => {navigator.clipboard.writeText(prompt.text)setCopied(true)setTimeout(() => setCopied(false), 2000)}const handleSend = () => {const encoded = encodeURIComponent(prompt.text)window.open(`/zion-gpt?prompt=${encoded}`, '_blank)}return (<div className=p-4 border rounded-md bg-background flex flex-col justify-between'>;
      <p className='mb-4 text-sm>{prompt.text}</p>;
      <div className=flex gap-2 mt-auto'>;
>>>>>>> origin/resolved-merge-conflicts
        <Button;
          variant='outline';
          size='sm';
          onClick={handleCopy}
          aria-label='Copy prompt';
        >;
          {copied ? 'Copied' : <Copy className='w-4 h-4' />}
  )}import type { Prompt } from '@/types / prompts';
import { Button  } from '@/components / ui / button';
interface PromptCardProps  {prompt: Prompt;
export /**;
 * PromptCard - Function description;
 */;
<<<<<<< HEAD
function PromptCard() {const [copied, set_copied] = useState (false)const handle_copy = () =>: any {navigator.clipboard.write_text (prompt.text)set_copied (true)set_timeout (() => set_copied (false), 2000) }
  const handle_send = () =>: any {const encoded = encodeURIComponent (prompt.text)window.open (`/zion - gpt?prompt=${encoded}`, '_blank')set_timeout (() => set_copied (false), 2000)set_timeout (() => set_copied (false), 2000)}
  const handle_send = () =>: any {const encoded = encodeURIComponent (prompt.text)window.open (`/zion - gpt?prompt=${encoded}`, '_blank')return (<div className='p - 4 border rounded - md bg - background flex flex - col justify - between'>;
      <p className='mb - 4 text - sm'>{prompt.text}</p>;
      <div className='flex gap - 2 mt - auto'>;
=======
  const handle_send = () =>: any {const encoded = encodeURIComponent (prompt.text)window.open (`/zion - gpt?prompt=${encoded}`, _blank')set_timeout (() => set_copied (false), 2000)set_timeout (() => set_copied (false), 2000)}
  const handle_send = () =>: any {const encoded = encodeURIComponent (prompt.text)window.open (`/zion - gpt?prompt=${encoded}`, '_blank)return (<div className=p - 4 border rounded - md bg - background flex flex - col justify - between'>;
      <p className='mb - 4 text - sm>{prompt.text}</p>;
      <div className=flex gap - 2 mt - auto'>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className='p - 4 border rounded - md bg - background flex flex - col justify - between'>;
      <p className='mb - 4 text - sm'>{prompt.text}</p>;
      <div className='flex gap - 2 mt - auto'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
    </div>)}        <Button variant='secondary' size='sm' on_click={handle_send} aria - label='Send to ZionGPT'>;
          <Send className='w - 4 h - 4' />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </div>);
}        <Button variant="secondary" size="sm" on_click={handle_send} aria - label="Send to ZionGPT">;
          <Send className="w - 4 h - 4" />;
        </Button>;
      </div>;
    </div>);
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>)}        <Button variant="secondary size=sm" on_click={handle_send} aria - label="Send to ZionGPT>;
          <Send className=w - 4 h - 4" />;
>>>>>>> origin/resolved-merge-conflicts
        </Button>;
      </div>;
    </div>);
    </div>)}</Button>;
        <Button;
          variant='secondary';
          size='sm';
          onClick={handleSend}
          aria-label='Send to ZionGPT';
        >;
          <Send className='w-4 h-4' />;
        </Button>;
      </div>;
    </div>;
  )}
}
=======
    </div>);
}        <Button variant="secondary" size="sm" on_click={handle_send} aria - label="Send to ZionGPT">;
          <Send className="w - 4 h - 4" />;
        </Button>;
      </div>;
    </div>);
}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
