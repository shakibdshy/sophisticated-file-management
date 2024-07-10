import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import UploadFile from "./upload-file-button";

export default function FileHeader() {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5" fontWeight="semibold">
          Manage Files
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="contained" color="secondary">
            Create Whiteboard
          </Button>
          <UploadFile />
        </Box>
      </Stack>
    </div>
  );
}
