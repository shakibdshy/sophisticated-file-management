import FileState from "@/components/dashboard/file-state";
import FilesTable from "@/components/dashboard/files-table";
import { Toolbar } from "@mui/material";

export default async function DashboardPage() {
  return (
    <div>
      <Toolbar />
      <FileState />
      <FilesTable />
      {/* <AllFiles columns={columns} rows={rows} /> */}
    </div>
  );
}
