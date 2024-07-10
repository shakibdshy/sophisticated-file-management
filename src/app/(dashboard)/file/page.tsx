import FileHeader from "@/components/file-manager/file-header";
import { Toolbar } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "File Manager",
  description: "Manage your files",
};

export default function File() {
  return (
    <div className="mt-6">
      <Toolbar />
      <FileHeader />
    </div>
  );
}
