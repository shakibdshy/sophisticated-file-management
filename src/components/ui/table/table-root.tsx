import { cn } from "@/utils/classnames";
import React from "react";

export default function TableRoot({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <table
      className={cn(
        "table-fixed border-spacing-0 w-full border-y border-slate-100 dark:border-slate-600",
        props.className
      )}
    >
      {children}
    </table>
  );
}
