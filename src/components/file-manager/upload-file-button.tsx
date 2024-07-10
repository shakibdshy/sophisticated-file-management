"use client";

import { Button } from "@mui/material";
import { useDrawer } from "@/utils/store/drawer.store";
import UploadFileForm from "./upload-file-form";

const title = "Upload file";
const description = "Add your files to upload";

export default function UploadFile() {
  const { openDrawer } = useDrawer();

  return (
    <div>
      <Button
        variant="contained"
        aria-label="Upload File Button"
        onClick={() => {
          openDrawer(UploadFileForm, title, description);
        }}
      >
        Upload File
      </Button>
    </div>
  );
}
