"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
	href: string;
	children: ReactNode;
	className?: string;
}

export function CTAButton({ href, children, className = "" }: CTAButtonProps) {
	return (
		<Link href={href} className={`inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition ${className}`}>
			{children}
		</Link>
	);
}
