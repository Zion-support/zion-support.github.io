import React from 'react';

interface SiteLayoutProps {
	children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
				<div className="container mx-auto px-4 py-3 font-semibold">Zion Tech Group</div>
			</header>
			<main className="flex-1 container mx-auto px-4 py-8">{children}</main>
			<footer className="border-t bg-white">
				<div className="container mx-auto px-4 py-6 text-sm text-gray-500">© {new Date().getFullYear()} Zion Tech Group</div>
			</footer>
		</div>
	);
};

export default SiteLayout;