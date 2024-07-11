import { GridColDef } from "@mui/x-data-grid";
import Table from "../ui/table";
import { useMemo } from "react";
import { File } from "@prisma/client";
import formatFileSize from "@/utils/format-file-size";

export default function FilesTable() {
  const columns = useMemo<GridColDef<(typeof rows)[number]>[]>(
    () => [
      {
        field: "name",
        headerName: "Name",
        width: 250,
        editable: true,
      },
      {
        field: "size",
        headerName: "Size",
        width: 150,
        editable: true,
      },
      {
        field: "type",
        headerName: "Type",
        width: 150,
        editable: true,
      },
      {
        field: "modifiedAt",
        headerName: "Modified",
        width: 150,
        editable: true,
      },
    ],
    []
  );

  const rows = [
    {
      id: 1,
      name: "file1.txt",
      size: formatFileSize(1024),
      type: "text",
      modifiedAt: new Date(),
    },
    {
      id: 2,
      name: "file2.png",
      size: formatFileSize(2048),
      type: "image",
      modifiedAt: new Date(),
    },
    {
      id: 3,
      name: "file3.jpg",
      size: formatFileSize(3072),
      type: "image",
      modifiedAt: new Date(),
    },
    {
      id: 4,
      name: "file4.pdf",
      size: formatFileSize(4096),
      type: "pdf",
      modifiedAt: new Date(),
    },
    {
      id: 5,
      name: "file5.txt",
      size: formatFileSize(5120),
      type: "text",
      modifiedAt: new Date(),
    },
    {
      id: 6,
      name: "file6.png",
      size: formatFileSize(6144),
      type: "text",
      modifiedAt: new Date(),
    },
    {
      id: 7,
      name: "file7.txt",
      size: formatFileSize(7168),
      type: "text",
      modifiedAt: new Date(),
    },
    {
      id: 8,
      name: "file8.txt",
      size: formatFileSize(8192),
      type: "text",
      modifiedAt: new Date(),
    },
  ];
  return <Table columns={columns} rows={rows} />;
}
