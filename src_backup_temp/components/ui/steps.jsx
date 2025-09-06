import {cn} from &apos;@/lib/utils&apos;; export const Steps = (props) => { return ( <div className=&quot;min-h-screen bg-white&quot;> {React.Children.map(children,(child,index) => { if (React.isValidElement(child)) { return React.cloneElement(child,{ isActive: index === currentStep,isCompleted: index < currentStep,};)} return child})} </div>)}; export const Step = (props) => { return ( <div className=&quot;min-h-screen bg-white&quot;> <div className={cn(&quot;flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium&quot;,isActive && &quot;border-primary bg-primary text-white&quot;,isCompleted && &quot;border-green-600 bg-green-600 text-white&quot;,!isActive && !isCompleted && &quot;border-gray-300 text-gray-500&quot;)}> {isCompleted ? &quot;✓&quot; : children}; </div> </div>)};&apos;; ;&apos;;&apos;;
import {cn} from '@/lib/utils';
export const Steps = ("props": "any) => {;
    return (<div className={cn("flex items-center space-x-2"", className)}>;
      {React.Children.map(children, (child, index) => {;
            if (React.isValidElement(child)) {;
                return React.cloneElement(child, {;
                    "isActive": "index === currentStep",;
                    "isCompleted": "index < currentStep",;
                });
export const Steps = (props: any) => {
    return (
        <div className={cn("flex items-center space-x-2", className)}>
      {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    isActive: index === currentStep,
                    isCompleted: index < currentStep,
                }
    );
export const Steps = (props) => {
    return (
    <div className="min-h-screen bg-white">
      {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    "isActive": index === currentStep,
                    "isCompleted": index < currentStep};);
            }
            return child;
        })}
    </div>
    );
};
export const Step = ("props": "any) => {;
    return (<div className={cn("flex items-center space-x-2"", isActive && "text-primary", isCompleted && "text-green-600", className)}>;
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium", isActive && "border-primary bg-primary text-white", isCompleted && "border-green-600 bg-green-600 text-white", !isActive && !isCompleted && "border-gray-300 text-gray-500")}>;
        {isCompleted ? "✓" : "children"}
      </div>;
    </div>);
export const Step = (props: any) => {
    return (
        <div className={cn("flex items-center space-x-2", isActive && "text-primary", isCompleted && "text-green-600", className)}>
export const Step = (props) => {
    return (
    <div className="min-h-screen bg-white">
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium", isActive && "border-primary bg-primary text-white", isCompleted && "border-green-600 bg-green-600 text-white", !isActive && !isCompleted && "border-gray-300 text-gray-500")}>
        {isCompleted ? "✓" : children};
      </div>
    </div>
    );
};
    </div>);
};';';';
import {cn} from '@/lib/utils'; export const Steps = (props) => { return ( <div className="min-h-screen bg-white"> {React.Children.map(children,(child,index) => { if (React.isValidElement(child)) { return React.cloneElement(child,{ isActive: index === currentStep,isCompleted: index < currentStep,};)} return child})} </div>)}; export const Step = (props) => { return ( <div className="min-h-screen bg-white"> <div className={cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium",isActive && "border-primary bg-primary text-white",isCompleted && "border-green-600 bg-green-600 text-white",!isActive && !isCompleted && "border-gray-300 text-gray-500")}> {isCompleted ? "✓" : children}; </div> </div>)};'; ;';';