import { cn } from "@/utils/classnames";

export function TableRow({
    children,
    ...props
  }: React.TableHTMLAttributes<HTMLTableRowElement>) {
    return (
      <tr
        className={cn(
          'transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-700',
          props.className
        )}
      >
        {children}
      </tr>
    );
  }
  