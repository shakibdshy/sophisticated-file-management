import { cn } from "@/utils/classnames";

export default function TableCell({
  children,
  ...props
}: React.TableHTMLAttributes<HTMLTableCellElement>) {
  const { className, ...rest } = props;
  return (
    <td
      className={cn(
        "align-middle whitespace-nowrap tabular-nums text-left text-slate-700 dark:text-slate-100/90 px-2.5 py-2 text-sm border-slate-100 dark:border-slate-600",
        className
      )}
      {...rest}
    >
      {children}
    </td>
  );
}
