import { cn } from "@/utils/classnames";

export function TableHeaderCell({
  children,
  ...props
}: React.TableHTMLAttributes<HTMLTableCellElement>) {
  const { className, ...rest } = props;
  return (
    <th
      className={cn(
        "sticky whitespace-nowrap text-left text-sm text-slate-700 dark:text-slate-100 font-medium top-0 px-2.5 py-2 border-slate-100 dark:border-slate-600",
        className
      )}
      {...rest}
    >
      {children}
    </th>
  );
}
