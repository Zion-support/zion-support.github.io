import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Page Not Found - Zion Tech Group" }), _jsx("meta", { name: 'description', content: "The page you're looking for doesn't exist." })] }), _jsx("div", { className: 'not-found-page', children: _jsx("div", { className: 'container', children: _jsxs("div", { className: 'not-found-content', children: [_jsx("h1", { children: "404" }), _jsx("h2", { children: "Page Not Found" }), _jsx("p", { children: "The page you're looking for doesn't exist or has been moved." }), _jsx(Link, { to: '/', className: 'btn btn-primary', children: "Go Home" })] }) }) })] }));
};
export default NotFoundPage;
