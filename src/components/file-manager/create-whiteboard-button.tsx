"use client";

import { useDrawer } from "@/utils/store/drawer.store";
import { Button } from "@mui/material";
import CreateWhiteboardForm from "@/components/file-manager/create-whiteboard-form";

const title = "Create Whiteboard File";
const description = "Add your files";

export default function CreateWhiteboard() {
  const { openDrawer } = useDrawer();
  return (
    <Button
      variant="contained"
      color="secondary"
      aria-label="Create Whiteboard Button"
      onClick={() => {
        openDrawer(CreateWhiteboardForm, title, description);
      }}
    >
      Create Whiteboard
    </Button>
  );
}
