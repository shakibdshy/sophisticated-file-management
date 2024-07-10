import { Box, Stack, Typography } from "@mui/material";
import UploadFile from "@/components/file-manager/upload-file-button";
import CreateWhiteboard from "@/components/file-manager/create-whiteboard-button";

export default function FileHeader() {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5" fontWeight="semibold">
          Manage Files
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CreateWhiteboard />
          <UploadFile />
        </Box>
      </Stack>
    </div>
  );
}
