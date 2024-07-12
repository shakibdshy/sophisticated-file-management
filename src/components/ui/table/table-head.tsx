import { cn } from "@/utils/classnames";

export function TableHead({
    children,
    ...props
  }: React.TableHTMLAttributes<HTMLTableElement>) {
    return (
      <thead
        className={cn(
          'text-left border-b border-slate-100 dark:border-slate-600',
          props.className
        )}
      >
        {children}
      </thead>
    );
  }
  