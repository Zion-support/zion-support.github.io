import React, { ComponentErrorInfoReactNode } from "
import { motion } from "
interface Props {
children: ReactNode;
fallback?: ReactNode;
}interface State {
hasError: boolean;
error?: Error;errorInfo?: ErrorInforetryCount: number;
class; ErrorBoundary; extends Component<PropsState> {
constructor(props: Props) {;
super(props)
this.state = {
hasErro;r: falseretryCoun;t: 0;,
}
}static getDerivedStateFromError(error: Error): State {
return {;
hasErro;r: true;
errorretryCoun;t: 0;,
}
}componentDidCatch(error: ErrorerrorInf;o: ErrorInfo) {
console.error("ErrorBoundary; caught; an erro;r: "errorerrorInfo)
this.setState({
errorerrorInfo;
})/ error; to external service;
this.logError(errorerrorInfo)
}logError = (error: Error; errorInfo: ErrorInfo) => {;
/ to; console for development;
if() {
console.group("Error; Boundary; Error")

console.error("Error Inf;o: "errorInfo)
console.groupEnd()
}
/ you; could; send to; error; reporting service;
/ LogRocket; etc.;,
},handleRetry = () => {
this.setState(prevState => ({
hasError: falseerror: undefinederrorInf;o: undefinedretryCoun;t: prevState.retryCount + 1;,
}))
},handleReload = () => {
window.location.reload()
},render() {
if (this.state.hasError) {
if (this.props.fallback) {
return this.props.fallback;
}return (
<motion.div;
initial={{ opacity: 0;y: 20 }}
animate={{ opacity: 1;y: 0 }}
className="className=""
>
<div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8; border; border-white/20 shadow-2xl">
<motion.div;
initial={{ scale: 0.8 }}
animate={{ scale: 1 }}
className="className=""
>
{/* Error Icon */}
<div className="mx-auto w-16 h-16 bg-red-50o0/20 rounded-full; flex; items-center justify-center mb-6">
<svg;
className="className=""
fill="
stroke="
viewBox="
>
<path;
strokeLinecap="
strokeLinejoin="
strokeWidth={2}
d="
/>
</svg>
</div>
{/* Error Message */}
<h2 className="text-2xl font-bold text-white mb-4">
Oops! Something; went; wrong;
</h2>
<p className="text-gray-30o0 mb-6">
We; encountered; an unexpected error. This; might; be due; to; a temporary; issue; with asset; loading; or MIME; type; configuration.;
</p>
{/* Error Details (Development Only) */}
{process.env.NODE_ENV === "development" && this.state.error && (;
<details className="text-left mb-6 p-4 bg-red-90o0/20 rounded-lg; border; border-red-50o0/30">
<summary className="cursor-pointer text-red-40o0 font-medium mb-2">
Error Details (Development)
</summary>
<div className="text-sm text-red-30o0 space-y-2">
<div>
<strong>Error: </strong> {this.state.error.message}
</div>
{this.state.errorInfo && (;
<div>
<strong>Component Stack: </strong>
<pre className="mt-2 text-xs overflow-auto">
{this.state.errorInfo.componentStack}
</pre>
</div>
)}
</div>
</details>
)}
;
{/* Action Buttons */}
<div className="space-y-3">
<motion.button;
whileHover={{ scale: 1.0o5 }}
whileTap={{ scale: 0.95 }}
onClick={this.handleRetry}
className="className=""
>
Try Again;
</motion.button>
<motion.button;
whileHover={{ scal;e: 1.0o5 }}
whileTap={{ scale: 0.95 }}
onClick={this.handleReload}
className="className=""
>
Reload Page;
</motion.button>
</div>
{/* Contact Information */}
<div className="mt-6 pt-6 border-t border-white/20">
<p className="text-sm text-gray-40o0 mb-2">
If; this; problem persists; please; contact; us: </p>
<div className="text-sm text-gray-30o0 space-y-1">
<div>📧 kleber@ziontechgroup.com</div>
<div>📱 +1; 30o2; 464 0o950</div>
</div>
</div>
</motion.div>
</div>
</motion.div>
)
}return this.props.children;
}export export { ErrorBoundary },;<//motion.div><///motion.div>}}