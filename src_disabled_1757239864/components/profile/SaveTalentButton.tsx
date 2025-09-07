<<<<<<< HEAD
import { Star } from 'lucide-react'
=======
<<<<<<< HEAD
import React from 'react';
import { Button } from "@/components/ui/button";
import React from 'react',
import { Button } from "@/components/ui/button",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Star } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from "@/components/ui/button";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface SaveTalentButtonProps {
  talentId: string
  onSave: (talentId: string) => void
  isSaved: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD
export function SaveTalentButton({
  talentId
  onSave
  isSaved
}: SaveTalentButtonProps) {
      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm'
      className={
        isSaved
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10'
      }    >
import { Button } from "@/components/ui/button"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
import { Star } from 'lucide-react';


<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_disabled_1757239864/components/profile/SaveTalentButton.tsx
=======
<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/SaveTalentButton.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  talentId: string
  onSave: (talentId: string,) => void

  isSaved: boolean
}
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
}}
}
import React from 'react',;
import { Button } from "@/components/ui/button",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface SaveTalentButtonProps {;
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;

export function SaveTalentButton(): any ({;
  talentId,;
  onSave,;
  isSaved,;
}: SaveTalentButtonProps) {;

      onClick={() => onSave(talentId)}
      variant={isSaved ? 'default' : 'outline'}
      size='sm';
      className={;
        isSaved;
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white';
          : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500/10';
      }    >;
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string,) => void,;
  isSaved: boolean;
}

export function SaveTalentButton(): any ({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
  return (
    <Button


      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );


}
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import { Button } from '@/components/ui/ button';
import { Star } from 'lucide-react';
interface SaveTalentButtonProps {
  talent_id: string;
  on_save: (talent_id: string) => void;
  is_saved: boolean;
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
      on_click={() => on_save (talent_id)}
      variant={is_saved ? 'default' : 'outline'}
      size='sm';
      className={
        is_saved;
          ? 'bg - yellow - 500 hover:bg - yellow - 600 text - white';
          : 'text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10';
      }    >;
import { Button  } from '@/components/ui/ button';
interface SaveTalentButtonProps {
  talent_id: string,
  on_save: (talent_id: string, ) => void,
  is_saved: boolean;
}
export /**
 * SaveTalentButton - Function description
 */
function SaveTalentButton() {
  return (
<<<<<<< HEAD
    <Button;
      on_click = {(, ) => on_save (talent_id), }
      variant = {is_saved ? "default" : "outline", }
      size="sm";
      class_name = {is_saved ? "bg - yellow - 500 hover:bg - yellow - 600 text - white" : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10", }
      <Star className={`h - 4 w - 4 ${is_saved ? 'fill - current' : ''} mr - 1`} />;
      {is_saved ? 'Saved' : 'Save'}
    </Button>);
=======
    <Button
      onClick = {(,) => onSave(talentId),}
      variant = {isSaved ? "default" : "outline",}
      size="sm"
      className = {isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10",}
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}}
}

  talentId: string,
  onSave: (talentId: string,) => void,
<<<<<<< HEAD
  isSaved: boolean
=======
<<<<<<< HEAD:src_disabled_1757239864/components/profile/SaveTalentButton.tsx
  isSaved: boolean
=======
<<<<<<< HEAD
  isSaved: boolean
=======
  isSaved: boolean
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/SaveTalentButton.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
