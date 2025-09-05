<<<<<<< HEAD
=======
prev.includes(value)
          ? prev.filter(item => item !== value) : [...prev, value];
prev.includes(value); ? prev.filter(item => item !== value); [...prev,value]; )}}; ; return (); <div className = {`space-y-1 ${className}`}>; {React.Children.map(children,(child) => {; if (React.isValidElement(child)) {; return React.cloneElement(child,{; isOpen: openItem s.includes(child.props.value),; onToggle: : unknown handleToggle(child.props.value)})} return child})} export function Accordion($1) {; const [openItems,setOpenItems] = useState<string[]>(; defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []; ); ; if (type === &apos;single&apos;) {; setOpenItems(openItems.includes(value) ? [] : [value])} else {; setOpenItems(prev = > ; prev.includes(value) ; ? prev.filter(item => item !== value); : [...prev,value]; )}; ; return ()`; <div className={`space-y-1 ${className}`}>; {React.Children.map(children,(child) => {; if (React.isValidElement(child)) {; return React.cloneElement(child,{; isOpen: openItem s.includes(child.props.value),; onToggle: : unknown handleToggle(child.props.value)}); ; return child})} </div> )} interface AccordionItemProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; value: string; className?: string; isOpen?: boolean; onToggle?: () => void} ; export function AccordionItem($1) {; return (;` <div className={`border-b border-gray-200 ${className}`}> {React.Children.map(children: unknow n,(child: unknow n {; if (React.isValidElement(child)) {; return React.cloneElement(child,{ isOpen,onToggle }); ; return child})} </div> )} interface AccordionTriggerProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; className?: string; isOpen?: boolean; onToggle?: () => void} ; export function AccordionTrigger($1) {; return (); <button`; className = {`flex w-full items-center justify-between py-4 font-medium transition-all hover: underline focus:outline-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 ${className}`} onClick={onToggle} ; {children} <ChevronDown` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${ &apos; isOpen ? &apos;rotate-180&apos; : &quot;` }`} /> </button> )} interface AccordionContentProps extends React.PropsWithChildren<{}> {;` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${;&apos;;&apos;; isOpen ? &apos;rotate-180&apos; : &apos;` }`} ; />; </button>; )} ; children: React.ReactNode; className?: string; isOpen?: boolean} ; export function AccordionContent($1) {; if (!isOpen) return null; ; return ()`; <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}>; {children} </div> )} export function AccordionContent($1) {; if (!isOpen) return null; ; return ()`; <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}> {children}; </div>;&apos;; )} &apos;` </ChevronDown> </string> </div>&apos;;
        prev.includes(value);
          ? prev.filter(item => item !== value);
          [...prev, value];
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
      )}};
  return ();
    <div className = {`space-y-1 ${className}`}>;
      {React.Children.map(children, (child) => {;
        if (React.isValidElement(child)) {;
          return React.cloneElement(child, {;
<<<<<<< HEAD
=======
            "isOpen": "openItem s.includes(child.props.value)",;
            "onToggle": ": unknown handleToggle(child.props.value);
          "})}
        return child})}
export function Accordion("props": "any) {;
  const [openItems", setOpenItems] = useState<string[]>(;
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : "[defaultValue]) : [];
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
            "isOpen": openItem s.includes(child.props.value),;
            "onToggle": : unknown handleToggle(child.props.value);
          })}
        return child})}
export function Accordion($1) {;
  const [openItems, setOpenItems] = useState<string[]>(;
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : [];
  );
    if (type === 'single') {;
      setOpenItems(openItems.includes(value) ? [] : [value])"} else {;
      setOpenItems(prev = > ;
        prev.includes(value) ;
          ? prev.filter(item => item !== value);
          : "[...prev", value];
      )};
<<<<<<< HEAD
=======
  return ()`
    <div className={`space-y-1 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openItem s.includes(child.props.value),
            onToggle: : unknown handleToggle(child.props.value)
          }
    );
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
  return ()";
    <div className={"space-y-1 ${className}"}>;
      {React.Children.map(children, (child) => {;
        if (React.isValidElement(child)) {;
          return React.cloneElement(child, {;
<<<<<<< HEAD
=======
            "isOpen": "openItem s.includes(child.props.value)",;
            "onToggle": ": unknown handleToggle(child.props.value);
          "});
;
        return child})}
        </div>
  );
}
interface AccordionItemProps extends React.PropsWithChildren<{}> {
  children: Reac t.ReactNode;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
    </div>;
  )}
;
interface AccordionItemProps extends React.PropsWithChildren<{}> {;
<<<<<<< HEAD
=======
  children: React.ReactNode;
  value: string;
  className?: string;
  isOpen?: boolean;
  onToggle?: ()  => void}
;
export function AccordionItem(props: any) {;
  return (;`    <div className={`border-b border-gray-200 ${className}`}> {React.Children.map(children: unknow n, (child: unknow n {;
        if (React.isValidElement(child)) {;
          return React.cloneElement(child, { isOpen, onToggle });
;
        return child})}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
  "children": "React.ReactNode;
  "value": string;
            "isOpen": openItem s.includes(child.props.value),;
            "onToggle": : unknown handleToggle(child.props.value);
          });
        return child})}
        </div>
  );
}
interface AccordionItemProps extends React.PropsWithChildren<{}> {
<<<<<<< HEAD
=======
  children: Reac t.ReactNode;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
  children: React.ReactNode;
  "children": Reac t.ReactNode;
  value: string;
  className?: string;
  isOpen?: boolean;
  onToggle?: ()  => void"}
;
<<<<<<< HEAD
export function AccordionItem($1) {;
  return (;"    <div className={`border-b border-gray-200 ${className}`}> {React.Children.map("children": unknow n, ("child": unknow n {;
        if (React.isValidElement(child)) {;
=======
export function AccordionItem("props": "any) {;
  return (;`    <div className={`border-b border-gray-200 ${className"}`}> {React.Children.map("children": "unknow n", ("child": "unknow n {;
        if (React.isValidElement(child)) {;
          return React.cloneElement(child", { isOpen, onToggle });
;
        return child})}
    </div>;
  )}
;
interface AccordionTriggerProps extends React.PropsWithChildren<{}> {;
  "children": "React.ReactNode;
export function AccordionItem($1) {;
  return (;"    <div className={`border-b border-gray-200 ${className}`}> {React.Children.map("children": unknow n, ("child": unknow n {;
        if (React.isValidElement(child)) {;
          return React.cloneElement(child, { isOpen, onToggle }
    );
          return React.cloneElement(child, { isOpen, onToggle });
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
        return child})}
        </div>
  );
}
interface AccordionTriggerProps extends React.PropsWithChildren<{}> {
<<<<<<< HEAD
=======
  children: React.ReactNode;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
  "children": Reac t.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: ()  => void"}
;
<<<<<<< HEAD
=======
export function AccordionTrigger("props": "any) {;
  return ();
    <button`;
      className = {`flex w-full items-center justify-between py-4 font-medium transition-all "hover": underline "focus":outline-none "focus": rin g-2 "focus": rin g-blue-500 "focus": rin g-offset-2 ${className"}`}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
export function AccordionTrigger($1) {;
  return ();
    <button";
      className = {"flex w-full items-center justify-between py-4 font-medium transition-all "hover": underline focus:outline-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 ${className}"}
      onClick={onToggle}
;
      {children}
<<<<<<< HEAD
=======
      <ChevronDown`';
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${';';
'';';
          isOpen ? 'rotate-180' : ''`        }`}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
      <ChevronDown"
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
'
          isOpen ? 'rotate-180' : "`        }"}
       />
    </button>
  )}
interface AccordionContentProps extends React.PropsWithChildren<{}> {;"
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${;';';
<<<<<<< HEAD
=======
          isOpen ? 'rotate-180' : '';`
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
      <ChevronDown`;
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${;
';
          isOpen ? 'rotate-180' : ''`        }`}
       />;
          isOpen ? 'rotate-180' : '`
        }"} ;      />;
    </button>;
  )}
<<<<<<< HEAD
=======
;
interface AccordionContentProps extends React.PropsWithChildren<{}> {;`;
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${;
          isOpen ? 'rotate-180' : '';`;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
        }`} ;      />;
    </button>;
  )}
;
  "children": "React.ReactNode;
<<<<<<< HEAD
=======
  children: React.ReactNode;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
;
  "children": React.ReactNode;
  className?: string;
  isOpen?: boolean"}
;
<<<<<<< HEAD
=======
export function AccordionContent("props": "any) {;
  if (!isOpen) return null;
;
  return ()`;
    <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className"}`}>;
      {children}
    </div>;
  )}
export function AccordionContent("props": "any) {;
  if (!isOpen) return null;
;
  return ()`;
    <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className"}`}> {children};
    </div>;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
export function AccordionContent($1) {;
  if (!isOpen) return null;
  return ()";
    <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}>;
      {children}
<<<<<<< HEAD
=======
        </div>
  );
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
    </div>;
  )}
export function AccordionContent(props: any) {;
  if (!isOpen) return null;
;
  return ()`;
    <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}> {children};
<<<<<<< HEAD
=======
    </div>;';
  )}';';
'`
</ChevronDown>
</string>';
</div>';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
    </div>;
  )}
'`;
</ChevronDown>;
</string>;
</div>;
        </div>
  );
}
export function AccordionContent($1) {;
  if (!isOpen) return null;
  return ()";
    <div className = {"overflow-hidden text-sm transition-all pb-4 pt-0 ${className}"}> {children};
    </div>;';
  )}
'"
</ChevronDown>
</string>
</div>';
<<<<<<< HEAD
prev.includes(value); ? prev.filter(item => item !== value); [...prev,value]; )}}; ; return (); <div className = {`space-y-1 ${className}`}>; {React.Children.map(children,(child) => {; if (React.isValidElement(child)) {; return React.cloneElement(child,{; isOpen: openItem s.includes(child.props.value),; onToggle: : unknown handleToggle(child.props.value)})} return child})} export function Accordion($1) {; const [openItems,setOpenItems] = useState<string[]>(; defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []; ); ; if (type === 'single') {; setOpenItems(openItems.includes(value) ? [] : [value])} else {; setOpenItems(prev = > ; prev.includes(value) ; ? prev.filter(item => item !== value); : [...prev,value]; )}; ; return ()`; <div className={`space-y-1 ${className}`}>; {React.Children.map(children,(child) => {; if (React.isValidElement(child)) {; return React.cloneElement(child,{; isOpen: openItem s.includes(child.props.value),; onToggle: : unknown handleToggle(child.props.value)}); ; return child})} </div> )} interface AccordionItemProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; value: string; className?: string; isOpen?: boolean; onToggle?: () => void} ; export function AccordionItem($1) {; return (;` <div className={`border-b border-gray-200 ${className}`}> {React.Children.map(children: unknow n,(child: unknow n {; if (React.isValidElement(child)) {; return React.cloneElement(child,{ isOpen,onToggle }); ; return child})} </div> )} interface AccordionTriggerProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; className?: string; isOpen?: boolean; onToggle?: () => void} ; export function AccordionTrigger($1) {; return (); <button`; className = {`flex w-full items-center justify-between py-4 font-medium transition-all hover: underline focus:outline-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 ${className}`} onClick={onToggle} ; {children} <ChevronDown` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${ ' isOpen ? 'rotate-180' : "` }`} /> </button> )} interface AccordionContentProps extends React.PropsWithChildren<{}> {;` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${;';'; isOpen ? 'rotate-180' : '` }`} ; />; </button>; )} ; children: React.ReactNode; className?: string; isOpen?: boolean} ; export function AccordionContent($1) {; if (!isOpen) return null; ; return ()`; <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}>; {children} </div> )} export function AccordionContent($1) {; if (!isOpen) return null; ; return ()`; <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}> {children}; </div>;'; )} '` </ChevronDown> </string> </div>';
=======
prev.includes(value); ? prev.filter(item => item !== value); [...prev,value]; )}}; ; return (); <div className = {`space-y-1 ${className}`}>; {React.Children.map(children,(child) => {; if (React.isValidElement(child)) {; return React.cloneElement(child,{; isOpen: openItem s.includes(child.props.value),; onToggle: : unknown handleToggle(child.props.value)})} return child})} export function Accordion($1) {; const [openItems,setOpenItems] = useState<string[]>(; defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []; ); ; if (type === 'single') {; setOpenItems(openItems.includes(value) ? [] : [value])} else {; setOpenItems(prev = > ; prev.includes(value) ; ? prev.filter(item => item !== value); : [...prev,value]; )}; ; return ()`; <div className={`space-y-1 ${className}`}>; {React.Children.map(children,(child) => {; if (React.isValidElement(child)) {; return React.cloneElement(child,{; isOpen: openItem s.includes(child.props.value),; onToggle: : unknown handleToggle(child.props.value)}); ; return child})} </div> )} interface AccordionItemProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; value: string; className?: string; isOpen?: boolean; onToggle?: () => void} ; export function AccordionItem($1) {; return (;` <div className={`border-b border-gray-200 ${className}`}> {React.Children.map(children: unknow n,(child: unknow n {; if (React.isValidElement(child)) {; return React.cloneElement(child,{ isOpen,onToggle }); ; return child})} </div> )} interface AccordionTriggerProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; className?: string; isOpen?: boolean; onToggle?: () => void} ; export function AccordionTrigger($1) {; return (); <button`; className = {`flex w-full items-center justify-between py-4 font-medium transition-all hover: underline focus:outline-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 ${className}`} onClick={onToggle} ; {children} <ChevronDown` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${ ' isOpen ? 'rotate-180' : "` }`} /> </button> )} interface AccordionContentProps extends React.PropsWithChildren<{}> {;` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${;';'; isOpen ? 'rotate-180' : '` }`} ; />; </button>; )} ; children: React.ReactNode; className?: string; isOpen?: boolean} ; export function AccordionContent($1) {; if (!isOpen) return null; ; return ()`; <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}>; {children} </div> )} export function AccordionContent($1) {; if (!isOpen) return null; ; return ()`; <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}> {children}; </div>;'; )} '` </ChevronDown> </string> </div>';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
