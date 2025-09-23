<<<<<<< HEAD
=======
"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  label: string;
}

export default function AppCTAButton({ href, label }: Props) {
  return (
    <Link href={href} className="inline-block px-6 py-3 rounded-lg bg-emerald-600 text-white">
      {label}
    </Link>
  );
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7047
