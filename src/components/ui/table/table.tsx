"use client";

import { Stack, Typography, useMediaQuery } from "@mui/material";
import {
  flexRender,
  type Table as ReactTableType,
} from "@tanstack/react-table";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import TableRoot from "./table-root";
import { TableHead } from "./table-head";
import { TableRow } from "./table-row";
import { TableHeaderCell } from "./table-header-cell";
import TableBody from "./table-body";
import TableCell from "./table-cell";

type TableType<T extends Record<string, any>> = {
  table: ReactTableType<T>;
  total?: number;
  noDataFallback?: React.ReactNode;
  tableRootClassName?: string;
};

export default function Table<TData extends Record<string, any>>({
  table,
  total,
  noDataFallback,
  tableRootClassName,
}: TableType<TData>) {
  const isSmall = useMediaQuery("(max-width: 424px)");

  if (table === null || table === undefined) return null;

  const isEmptyTable = total === 0;

  return (
    <Stack direction="column" alignItems="stretch" width="100%" gap="3">
      <TableRoot className={tableRootClassName}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableHead key={headerGroup.id}>
            <TableRow className="hover:bg-inherit dark:hover:bg-inherit">
              {headerGroup.headers.map((header) => (
                <TableHeaderCell
                  key={header.id}
                  {...{
                    colSpan: header.colSpan,
                    style: {
                      width:
                        header.getSize() === Number.MAX_SAFE_INTEGER
                          ? "auto"
                          : header.getSize(),
                    },
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none flex items-center gap-2"
                          : "flex items-center gap-2",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort()
                        ? {
                            asc: (
                              <KeyboardDoubleArrowUpIcon
                                sx={{ w: 20, h: 20 }}
                              />
                            ),
                            desc: <SortIcon sx={{ w: 20, h: 20 }} />,
                          }[header.column.getIsSorted() as string] ??
                          (header.column.columnDef.header !== "" && (
                            <ImportExportIcon sx={{ w: 20, h: 20 }} />
                          ))
                        : null}
                    </div>
                  )}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
        ))}

        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    {...{
                      className: "td break-words box-border",
                      style: {
                        width:
                          cell.column.getSize() === Number.MAX_SAFE_INTEGER
                            ? "auto"
                            : cell.column.getSize(),
                      },
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </TableRoot>
      {isEmptyTable && (
        <>
          {noDataFallback ? (
            noDataFallback
          ) : (
            <Stack
              alignItems="center"
              justifyItems="center"
              width="100%"
              height="240"
            >
              <Typography className="text-slate-400">No Data Found</Typography>
            </Stack>
          )}
        </>
      )}
    </Stack>
  );
}
