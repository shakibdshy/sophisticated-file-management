"use client";

import { Button, Drawer as MUIDrawer } from "@mui/material";
import React, { useState } from "react";

interface DrawerProps {
  title: string;
  children: React.ReactNode;
}

export default function Drawer({ title, children }: DrawerProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{title}</Button>
      <MUIDrawer open={open} onClose={toggleDrawer(false)}>
        {children}
      </MUIDrawer>
    </div>
  );
}
