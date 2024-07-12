import { cn } from "@/utils/classnames";

export default function TableBody({
  children,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <tbody
      className={cn(
        "align-top overflow-x-auto divide-y divide-slate-100 dark:divide-slate-600",
        props.className
      )}
    >
      {children}
    </tbody>
  );
}
