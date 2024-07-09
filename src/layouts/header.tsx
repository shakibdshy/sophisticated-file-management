"use client";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DRAWER_WIDTH } from "@/utils/abstract";
import { usePathname } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";
import ProfileMenu from "@/components/ui/profile-menu";
import { profileData } from "@/config/profile-data";
import { User } from "@prisma/client";
import ColorMode from "@/components/ui/color-mode";

export default function Header({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
  const pathname = usePathname();
  const user = useCurrentUser();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textTransform: "Uppercase" }}
          >
            {pathname.split("/")[1]}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ColorMode />
            <ProfileMenu
              title="Profile Settings"
              data={profileData}
              user={user as User}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
