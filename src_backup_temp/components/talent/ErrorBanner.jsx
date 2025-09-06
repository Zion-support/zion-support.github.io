export function ErrorBanner("props": "any) {;
    return (<div className="p-4 bg-red-500/20 text-red-400 text-center rounded-md">;
      {msg"}
    </div>)}
;
export function ErrorBanner(props: any) {
    return (
        <div className="p-4 bg-red-500/20 text-red-400 text-center rounded-md">
      {msg}
    </div>)}
export function ErrorBanner($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> {msg} </div> )} export default ErrorBanner;
module.exports = function ErrorBanner($1) { return ( <div className="min-h-screen bg-white"> {msg} </div> )} export default ErrorBanner;""
import React from 'react';
export function ErrorBanner({ message }) {
  return (
    <div className="min-h-screen bg-white">
      {message}
    </div>
  );
}
export default ErrorBanner;