"use client";

import { ProfileMenuProps } from "@/types";
import {
  Avatar,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";

export default function ProfileMenu({ title, user, data }: ProfileMenuProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={title}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user?.name!} src={user?.image!} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {data.map((item) => (
          <MenuItem
            key={item.name}
          >
            <Link href={item.href} underline="none" color="inherit">
              <Typography textAlign="center">{item.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
