import { getFiles } from "@/actions/file-action";
import FileHeader from "@/components/file-manager/file-header";
import SearchFilter from "@/components/file-manager/search-filter";
import ShowFiles from "@/components/file-manager/show-files";
import { Toolbar } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "File Manager",
  description: "Manage your files",
};

export default async function File() {
  const files = await getFiles();

  return (
    <div className="mt-6">
      <Toolbar />
      <FileHeader />
      <SearchFilter />
      <ShowFiles files={files} />
    </div>
  );
}
