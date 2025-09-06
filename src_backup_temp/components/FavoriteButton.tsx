import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface FavoriteButtonProps {;
  "talentId": "string;
  "isFavorite": boolean;
  "onToggle": ("talentId": string) => void;
  className?: string;
"}
export function FavoriteButton({ talentId, isFavorite, onToggle, className }: "FavoriteButtonProps) {;
  const handleToggle = ("e": React.MouseEvent) => {;
    e.preventDefault();
    e.stopPropagation();
    onToggle(talentId);
  "}
  return (;
    <Button;
      variant="ghost";
      size="sm";
      onClick={handleToggle}
      className={`p-1 ${className}`}
    >;
      <Heart;
        className={`w-4 h-4 ${;
          isFavorite;
            ? 'fill-red-500 text-red-500';
            : 'text-gray-400 "hover": "text-red-500';
        "}`}
      />;
    </Button>;
  );
;,"}
    );,})
    );,"})"
}