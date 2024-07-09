"use client";

import { DRAWER_WIDTH } from "@/utils/abstract";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import UploadButton from "../ui/upload-button";

export default function UploadFile() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Upload File
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box sx={{ width: { md: 445 }, flexShrink: { md: 0 } }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Upload File
            </Typography>
            <IconButton aria-label="close" onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Box sx={{ mt: 4, px: 3 }}>
            <UploadButton />
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
