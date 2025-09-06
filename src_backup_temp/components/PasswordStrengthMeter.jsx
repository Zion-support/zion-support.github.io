import {calculatePasswordStrength, getStrengthLabel} from "@/utils/passwordStrength";
import {Progress} from "@/components/ui/progress";
export function PasswordStrengthMeter("props": "any) {;
    const score = calculatePasswordStrength(password);
    const value = (score / 4) * 100;
    const label = getStrengthLabel(score);
    return (<div className="mt-2" aria-live="polite">;
      <Progress value={value"} className="h-2" />;
      <p className="text-xs text-zion-slate-light mt-1">{label}</p>;
    return (
        <div className="mt-2" aria-live="polite">
      <Progress value={value} className="h-2" />
      <p className="text-xs text-zion-slate-light mt-1">{label}</p>
    </div>)}
;
export default PasswordStrengthMeter;
import {calculatePasswordStrength,getStrengthLabel} from &quot;@/utils/passwordStrength&quot;; import {Progress} from &quot;@/components/ui/progress&quot;; export function PasswordStrengthMeter($1) { const score = calculatePasswordStrength(password); const value = (score / 4) * 100; const label = getStrengthLabel(score); return ( <div className=&quot;min-h-screen bg-white&quot;> <Progress value={value} className=&quot;h-2&quot; /> <p className=&quot;text-xs text-zion-slate-light mt-1&quot;>{label}</p> </div> )} export default PasswordStrengthMeter;
const {calculatePasswordStrength,getStrengthLabel} from "@/utils/passwordStrength"; import {Progress} from "@/components/ui/progress"; export function PasswordStrengthMeter($1) { const score = calculatePasswordStrength(password); const value = (score / 4) * 100; const label = getStrengthLabel(score); return ( <div className="min-h-screen bg-white"> <Progress value={value} className="h-2" /> <p className="text-xs text-zion-slate-light mt-1">{label}</p> </div> )} export default PasswordStrengthMeter;""
import {calculatePasswordStrength,getStrengthLabel} from "@/utils/passwordStrength"; import {Progress} from "@/components/ui/progress"; export function PasswordStrengthMeter(_) { const score = calculatePasswordStrength(password); const value = (score / 4) * 100; const label = getStrengthLabel(score); return ( <div className="min-h-screen bg-white"> <Progress value={value} className="h-2" /> <p className="text-xs text-zion-slate-light mt-1">{label}</p> </div> )} export default PasswordStrengthMeter;