"use client";

import Image from "next/image";
import { memo } from "react";

import { navElements } from "@/constants";
import { ActiveElement, NavbarProps } from "@/types/liveblocks";
import ActiveUsers from "./users/active-user";
import { Box, IconButton, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Navbar = ({
  activeElement,
  imageInputRef,
  handleImageUpload,
  handleActiveElement,
}: NavbarProps) => {
  const isActive = (value: string | Array<ActiveElement>) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) &&
      value.some((val) => val?.value === activeElement?.value));

  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-gray-700 px-5 text-white">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="large" edge="start" color="primary" aria-label="menu">
          <CloudUploadIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          SFM
        </Typography>
      </Box>
      
      <ActiveUsers />
    </nav>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
