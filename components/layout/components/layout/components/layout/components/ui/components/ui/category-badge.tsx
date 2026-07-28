import Link from "next/link";
import { cn } from "@/utils/cn";

export type CategoryType =
  | "Project Finance"
  | "Infrastructure"
  | "Renewable Energy"
  | "Climate Finance"
  | "Public-Private Partnerships"
  | "PPP"
  | "Financial Models"
  | string;

interface CategoryBadgeProps {
  category: CategoryType;
  href?: string;
  size?: "sm" | "md";
  className?: string;
}

const colorVariants: Record<string, string> = {
  "Project Finance": "bg-blue-50 text-primary border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
  "Infrastructure": "bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800/60 dark:text-slate-200 dark:border-slate-700",
  "Renewable Energy": "bg-emerald-50 text-secondary border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  "Climate Finance": "bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800",
  "Public-Private Partnerships": "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
  "PPP": "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
  "Financial Models": "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800",
};

export function CategoryBadge({
  category,
  href,
  size = "sm",
  className,
}: CategoryBadgeProps) {
  const variantClass =
    colorVariants[category] ||
    "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700";

  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2.5 py-0.5"
      : "text-xs px-3 py-1 font-semibold";

  const content = (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border transition-all duration-200 hover:opacity-90 tracking-wide uppercase",
        variantClass,
        sizeClasses,
        className
      )}
    >
      {category}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
