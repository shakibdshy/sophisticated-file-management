"use client";

import Image from "next/image";
import { ShapesMenuProps } from "@/types/liveblocks";
import {
  Button,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const ShapesMenu = ({
  item,
  activeElement,
  handleActiveElement,
  handleImageUpload,
  imageInputRef,
}: ShapesMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isDropdownElem = item.value.some(
    (elem: any) => elem?.value === activeElement.value
  );

  return (
    <>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText>
            <Image
              src={isDropdownElem ? activeElement.icon : item.icon}
              alt={item.name}
              fill
              className={isDropdownElem ? "invert" : ""}
            />
          </ListItemText>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {item.value.map((elem, index) => (
          <MenuItem
            key={elem?.value}
            selected={index === selectedIndex}
            onClick={() => {
              handleActiveElement(elem);
            }}
          >
            <div className="group flex items-center gap-2">
              <Image
                src={elem?.icon as string}
                alt={elem?.name as string}
                width={20}
                height={20}
                className={activeElement.value === elem?.value ? "invert" : ""}
              />
              <p
                className={`text-sm  ${
                  activeElement.value === elem?.value
                    ? "text-black"
                    : "text-gray-800"
                }`}
              >
                {elem?.name}
              </p>
            </div>
          </MenuItem>
        ))}
      </Menu>

      <input
        type="file"
        className="hidden"
        ref={imageInputRef}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </>
  );
};

export default ShapesMenu;
