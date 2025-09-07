<<<<<<< HEAD

import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string) => void,
  isSaved: boolean
<<<<<<< HEAD
}

export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {
  return (
    <Button
=======

import { Star } from 'lucide-react';
interface SaveTalentButtonProps {;
  talentId: string,;
  onSave: (talentId: string) => void;
  isSaved: boolean;
}
;
export function SaveTalentButton({ talentId, onSave, isSaved }: SaveTalentButtonProps) {;
  return (;
    <Button;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
      size="sm"
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}
<<<<<<< HEAD
    </Button>
  )
}
=======
    </Button>;
  );
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
