"use client";

import { useDrawer } from "@/utils/store/drawer.store";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function RightDrawer() {
  const { open, closeDrawer, component, title, description, props } =
    useDrawer();

  const Component = component;
  const hasProps = props && Object.keys(props).length > 0;

  return (
    <Drawer open={open} onClose={closeDrawer} anchor="right">
      <Box
        sx={{ width: { xs: "100%", sm: 280, md: 445 }, flexShrink: { md: 0 } }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="column">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              {description}
            </Typography>
          </Stack>
          <IconButton aria-label="close" onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {component && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "stretch",
              flexDirection: "column",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
            }}
          >
            {hasProps ? <Component {...props} /> : <Component />}
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
