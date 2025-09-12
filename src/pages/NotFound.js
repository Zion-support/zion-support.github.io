import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-6xl font-bold text-foreground mb-4", children: "404" }), _jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4", children: "Page Not Found" }), _jsx("p", { className: "text-muted-foreground mb-8 max-w-md mx-auto", children: "The page you're looking for doesn't exist or has been moved." }), _jsx(Link, { to: "/", className: "inline-block bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors", children: "Go Home" })] }) }));
}
