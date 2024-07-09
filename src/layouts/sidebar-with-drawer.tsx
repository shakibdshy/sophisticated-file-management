import { DRAWER_WIDTH } from "@/utils/abstract";
import {
  Box,
  Drawer,
} from "@mui/material";
import SidebarMenu from "@/layouts/sidebar-menu";

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerTransitionEnd: () => void;
  handleDrawerClose: () => void;
}

export default function SidebarWithDrawer({
  mobileOpen,
  handleDrawerTransitionEnd,
  handleDrawerClose,
}: SidebarProps) {
  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          <SidebarMenu />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          <SidebarMenu />
        </Drawer>
      </Box>
    </>
  );
}
