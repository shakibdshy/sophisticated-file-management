import UploadFile from "@/components/file-manager/upload-file";
import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function File() {
  return (
    <div className="mt-6">
      <Toolbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5" fontWeight="semibold">Manage Files</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="contained" color="secondary">Create Whiteboard</Button>
          <UploadFile />
        </Box>
      </Stack>
    </div>
  );
}
