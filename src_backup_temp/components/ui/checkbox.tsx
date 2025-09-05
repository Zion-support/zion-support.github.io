import React from 'react'; interface CheckboxProps extends React.PropsWithChildren<{}> { "checked": "boolean; "onChange": ("checked": boolean) => void; label?: string; disabled?: boolean; className?: string"} export function Checkbox(...args[]): "{ return ( <label className = {`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''"} ${className}`}> <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled}; className="w-4 h-4 text-zion-cyan border-gray-300 rounded "focus": "rin g-zion-cyan "focus": rin g-2"; /> {label && <span className="text-sm text-gray-700">{label"}</span>}; ></div> )} export default checkbox;
import React from 'react';
interface CheckboxProps extends React.PropsWithChildren<{}> {
  "checked": boolean;
  onChange: (checked: boolean)  => void;
  label?: string;
  disabled?: boolean;
  className?: string}
export function Checkbox(...args[]):  {
  return (';
    <label className = {`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : "} ${className}`}>;
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled};
        className="w-4 h-4 text-zion-cyan border-gray-300 rounded "focus": rin g-zion-cyan focus: rin g-2";
      /> {label && <span className="text-sm text-gray-700">{label}</span>};
    </label>;
  );
}
';
export default checkbox;;';;';
import React from 'react'; interface CheckboxProps extends React.PropsWithChildren<{}> { checked: boolean; onChange: (checked: boolean) => void; label?: string; disabled?: boolean; className?: string} export function Checkbox(...args[]): { return ( <label className = {`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}> <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled}; className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus: rin g-zion-cyan focus: rin g-2"; /> {label && <span className="text-sm text-gray-700">{label}</span>}; ></div> )} export default checkbox;
export default checkbox;';';
import React from 'react'; interface CheckboxProps extends React.PropsWithChildren<{}> { checked: boolean; onChange: (checked: boolean) => void; label?: string; disabled?: boolean; className?: string} export function Checkbox(...args[]): { return ('; <label className = {`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : "} ${className}`}>; <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled}; className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus: rin g-zion-cyan focus: rin g-2"; /> {label && <span className="text-sm text-gray-700">{label}</span>}; </label>; )} export default checkbox;';';