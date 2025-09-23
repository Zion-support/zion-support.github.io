"use client";

export default function LoadingSpinner({ size = "md", text }: { size?: "sm" | "md" | "lg"; text?: string; }) {
	const sizeClasses = size === "sm" ? "h-5 w-5" : size === "lg" ? "h-10 w-10" : "h-6 w-6";
	return (
		<div className="flex items-center gap-2">
			<div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizeClasses}`}></div>
			{text ? <span className="text-zinc-400 text-sm">{text}</span> : null}
		</div>
	);
}
