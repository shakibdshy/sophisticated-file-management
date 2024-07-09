"use client";

import FileState from "@/components/dashboard/file-state";
import { Toolbar } from "@mui/material";

export default function DashboardPage() {
  return (
    <div>
      <Toolbar />
      <FileState />
    </div>
  );
}
