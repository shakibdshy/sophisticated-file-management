import { uploadFile } from "@/actions/file-action";
import { UploadDropzone } from "@/utils/uploadthing";
import { Box } from "@mui/material";
import React from "react";
import { toast } from "sonner";

export default function UploadFileForm() {
  return (
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
          };
          uploadFile(imageData);
          toast.success("Uploaded successfully");
        }}
        onUploadError={(error: Error) => {
          toast.error(`Upload failed: ${error.message}`);
        }}
      />
    </Box>
  );
}
