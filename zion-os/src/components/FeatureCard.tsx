<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
"use client",;
import Link from "next/link",;
import { ReactNode } from "react",;
interface FeatureCardProps {;
  id: number,;
  title: string,;
  description: string,;
  icon: ReactNode,;
  color: string,;
  href: string,;
  isActive: boolean,;
  onClick: () => void;
}
;
export function FeatureCard({;
  title,;
  description,;
  icon,;
  color,;
  href,;
  isActive,;
  onClick;
}: FeatureCardProps) {;
  const colorClasses = {;
    blue: "bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30",;
    purple: "bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/30",;
    green: "bg-green-500/20 hover:bg-green-500/30 border-green-500/30",;
    red: "bg-red-500/20 hover:bg-red-500/30 border-red-500/30",;
    yellow: "bg-yellow-500/20 hover:bg-yellow-500/30 border-yellow-500/30",;
    indigo: "bg-indigo-500/20 hover:bg-indigo-500/30 border-indigo-500/30";
  };
  return (;
    <div;
      className={`card group cursor-pointer transition-all duration-300 ${;
        isActive ? 'scale-105 shadow-2xl' : 'hover:scale-105';
      } ${colorClasses[color as keyof typeof colorClasses]}`}
      onClick={onClick}
      onKeyDown={(e) => {;
        if (e.key === 'Enter' || e.key === ' ') {;

          e.preventDefault();
          onClick();
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
"use client",
import Link from './next / link';,'
import { ReactNode  } from './react';,
interface FeatureCardProps {}
=======
"use client",
import Link from './next / link';,;
import { ReactNode  } from './react';,;
interface FeatureCardProps {
"use client",""
import Link from './next / link';,;
import { ReactNode  } from './react';,;
interface FeatureCardProps {
  // TODO: Implement
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: number,
  title: string,
  description: string,
  icon: ReactNode,
  color: string,
  href: string,
  is_active: boolean,
  on_click: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
"use client";
import Link from "next/link";
import { ReactNode } from "react";
interface FeatureCardProps {id: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
=======
=======}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export /**
 * FeatureCard - Function description
=======


}
export /**;
 * FeatureCard - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function FeatureCard() {}
  const color_classes = {"
    blue: "bg - blue - 500 / 20 hover:bg - blue - 500 / 30 border - blue - 500 / 30","
    purple: "bg - purple - 500 / 20 hover:bg - purple - 500 / 30 border - purple - 500 / 30","
    green: "bg - green - 500 / 20 hover:bg - green - 500 / 30 border - green - 500 / 30","
    red: "bg - red - 500 / 20 hover:bg - red - 500 / 30 border - red - 500 / 30","
    yellow: "bg - yellow - 500 / 20 hover:bg - yellow - 500 / 30 border - yellow - 500 / 30","
    indigo: "bg - indigo - 500 / 20 hover:bg - indigo - 500 / 30 border - indigo - 500 / 30";
  }
  return (
    <div;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className={`card group cursor - pointer transition - all duration - 300 ${
        is_active ? 'scale - 105 shadow - 2xl' : 'hover:scale - 105';
      } ${color_classes[color as keyof typeof color_classes]}`}
      on_click={on_click}
      onKeyDown={(e) => {
        // Check condition
if ( {) {
  $2
}
          e.prevent_default ();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          on_click ();
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      className={`card group cursor-pointer transition-all duration-300 ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-105';
      } ${colorClasses[color as keyof typeof colorClasses]}`}
      onClick={onClick}
      onKeyDown={(e) => {if (e.key === 'Enter' |e.key === ' ') {;
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
"use client",;
import Link from "next/link",;
import { ReactNode } from "react",;
interface FeatureCardProps {;
  id: number,;
  title: string,;
  description: string,;
  icon: ReactNode,;
  color: string,;
  href: string,;
  isActive: boolean,;
  onClick: () => void;
}
;
export function FeatureCard({;
  title,;
  description,;
  icon,;
  color,;
  href,;
  isActive,;
  onClick;
}: FeatureCardProps) {;
  const colorClasses = {;
    blue: "bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30",;
    purple: "bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/30",;
    green: "bg-green-500/20 hover:bg-green-500/30 border-green-500/30",;
    red: "bg-red-500/20 hover:bg-red-500/30 border-red-500/30",;
    yellow: "bg-yellow-500/20 hover:bg-yellow-500/30 border-yellow-500/30",;
    indigo: "bg-indigo-500/20 hover:bg-indigo-500/30 border-indigo-500/30";
  };
  return (;
    <div;
      className={`card group cursor-pointer transition-all duration-300 ${;
        isActive ? 'scale-105 shadow-2xl' : 'hover:scale-105';
      } ${colorClasses[color as keyof typeof colorClasses]}`}
      onClick={onClick}
      onKeyDown={(e) => {;
        if (e.key === 'Enter' || e.key === ' ') {;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
          on_click ();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          e.preventDefault();
          on_click ();          e.preventDefault();
          onClick();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
      }}
      tabIndex={0}
      role="button";
      aria-pressed={isActive}
      aria-label={`${title} - ${description}`}
    >;
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">;
        {icon}
      </div>;
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">;
        {title}
      </h3>;
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">;
        {description}
      </p>;
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">;
        <Link;
          href={href}
          className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded";
          onClick={(e) => e.stopPropagation()}
=======
          on_click ();          e.preventDefault();
          onClick();
=======
          on_click ();          e.preventDefault();
          onClick();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          e.preventDefault();
          onClick();


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
      }}
      tab_index={0}"
      role="button";
      aria - pressed={is_active}
      aria - label={`${title} - ${description}`}
<<<<<<< HEAD
    >;
      <div className="w - 12 h - 12 rounded - lg flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration-200">;
        {icon}
      </div>;
      <h3 className="text - xl font - semibold mb - 2 group - hover:text - white transition-colors">;
        {title}
      </h3>;
      <p className="text - gray - 400 group - hover:text - gray - 300 transition-colors">;
        {description}
      </p>;
      <div className="mt - 4 opacity - 0 group - hover:opacity - 100 transition - opacity duration-200">;
        <Link;
          href={href}
<<<<<<< HEAD
<<<<<<< HEAD
          className="text - sm font - medium hover:underline focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue-500 rounded";
=======
    >;"
      <div className="w - 12 h - 12 rounded - lg flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 200">;
        {icon}
      </div>;"
      <h3 className="text - xl font - semibold mb - 2 group - hover:text - white transition - colors">;
        {title}
      </h3>;"
      <p className="text - gray - 400 group - hover:text - gray - 300 transition - colors">;
        {description}
      </p>;"
      <div className="mt - 4 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 200">;
        <Link;
          href={href}"
          className="text - sm font - medium hover:underline focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500 rounded";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          className="text - sm font - medium hover:underline focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500 rounded";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          className="text - sm font - medium hover:underline focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue-500 rounded";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          on_click={(e) => e.stop_propagation ()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        >;
          Learn more →;
        </Link>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
;
export function FeatureCard({;
  title,;
  description,;
  icon,;
  color,;
  href,;
  isActive,;
  onClick;
}: FeatureCardProps) {;
  const colorClasses = {;
    blue: "bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30",;
    purple: "bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/30",;
    green: "bg-green-500/20 hover:bg-green-500/30 border-green-500/30",;
    red: "bg-red-500/20 hover:bg-red-500/30 border-red-500/30",;
    yellow: "bg-yellow-500/20 hover:bg-yellow-500/30 border-yellow-500/30",;
    indigo: "bg-indigo-500/20 hover:bg-indigo-500/30 border-indigo-500/30";
  };
  return (;
    <div;
      className={`card group cursor-pointer transition-all duration-300 ${;
        isActive ? 'scale-105 shadow-2xl' : 'hover:scale-105';
      } ${colorClasses[color as keyof typeof colorClasses]}`}
      onClick={onClick}
      onKeyDown={(e) => {;
        if (e.key === 'Enter' || e.key === ' ') {;
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button";
      aria-pressed={isActive}
      aria-label={`${title} - ${description}`}
    >;
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">;
        {icon}
      </div>;
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">;
        {title}
      </h3>;
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">;
        {description}
      </p>;
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">;
        <Link;
          href={href}
          className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded";
          onClick={(e) => e.stopPropagation()}
        >;
          Learn more →;
        </Link>;
      </div>;
    </div>;
  );
}
"use client";""
import Link from "next/link";""
import { ReactNode } from "react";"
interface FeatureCardProps {id: number;,
  title: string;
  description: string;,
  icon: ReactNode;
  color: string;,
  href: string;
  isActive: boolean;,
  onClick: () => void;
export /**
 * FeatureCard - Function description;
 */
function FeatureCard() {
  const color_classes = {"
    blue: "bg - blue - 500 / 20 hover:bg - blue - 500 / 30 border - blue - 500 / 30",""
    purple: "bg - purple - 500 / 20 hover:bg - purple - 500 / 30 border - purple - 500 / 30",""
    green: "bg - green - 500 / 20 hover:bg - green - 500 / 30 border - green - 500 / 30",""
    red: "bg - red - 500 / 20 hover:bg - red - 500 / 30 border - red - 500 / 30",""
    yellow: "bg - yellow - 500 / 20 hover:bg - yellow - 500 / 30 border - yellow - 500 / 30",""
    indigo: "bg - indigo - 500 / 20 hover:bg - indigo - 500 / 30 border - indigo - 500 / 30";"
  return (
    <div;
      className={`card group cursor - pointer transition - all duration - 300 ${"
        is_active ? 'scale - 105 shadow - 2xl' : 'hover:scale - 105';`;
      } ${color_classes[color as keyof typeof color_classes]}`}
      on_click={on_click})
      onKeyDown={(e) => {
</div>
      <div className="w - 12 h - 12 rounded - lg flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 200">;"
      </div>;"
      <h3 className="text - xl font - semibold mb - 2 group - hover:text - white transition - colors">;"
</h3>
      </h3>;"
      <p className="text - gray - 400 group - hover:text - gray - 300 transition - colors">;"
</p>
      </p>;"
      <div className="mt - 4 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 200">;"
        <Link;
          href={href}"
          className="text - sm font - medium hover:underline focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500 rounded";"
          on_click={(e) => e.stop_propagation ()}

        ;
      </div>;
    </div>);"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
