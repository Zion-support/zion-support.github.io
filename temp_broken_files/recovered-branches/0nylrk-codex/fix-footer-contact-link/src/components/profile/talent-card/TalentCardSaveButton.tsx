 interface TalentCardSaveButtonProps {
  profileId: string;
profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean 
}export function TalentCardSaveButton ({
  profileId;
profileName;
isSaved;
onToggleSave;
isAuthenticated 
}: TalentCardSaveButtonProps) {
  const {
  toast 
}= useToast ();
const [localIsSaved, setLocalIsSaved] = React.useState (isSaved);
//Handle save toggle const handleSaveToggle = (e: React.MouseEvent) => {
  e.stopPropagation ();
if (!isAuthenticated) {
  toast ({
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}variant: "default" 
}) 
};
}/> </button>) 
}