"use client";

import { DRAWER_WIDTH } from "@/utils/abstract";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import UploadButton from "../ui/upload-button";
import { UploadDropzone } from "@/utils/uploadthing";
import { toast } from "sonner";
import { Form } from "../ui/form";
import { File } from "@prisma/client";
import { uploadFile } from "@/actions/file-action";

export default function UploadFile() {
  const [open, setOpen] = useState(false);
  const [isImageObject, setIsImageObject] = useState<any>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // console.log(isImageObject[0]);

  // uploadFile(isImageObject[0]);

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Upload File
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box sx={{ width: { md: 445 }, flexShrink: { md: 0 } }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="column">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Upload File
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                Add your files to upload
              </Typography>
            </Stack>
            <IconButton aria-label="close" onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Box sx={{ mt: 4, px: 3 }}>
            <UploadDropzone
              endpoint="imageAndPdfUploader"
              onClientUploadComplete={(res) => {
                const imageData = {
                  name: res[0].name,
                  key: res[0].key,
                  url: res[0].url,
                  type: res[0].type,
                  size: res[0].size,
                }
                uploadFile(imageData);
                toast.success("Uploaded successfully");
              }}
              onUploadError={(error: Error) => {
                toast.error(`Upload failed: ${error.message}`);
              }}
            />
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
