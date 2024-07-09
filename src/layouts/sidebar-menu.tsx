import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { menuItems } from "./menu-items";

export default function SidebarMenu() {
  return (
    <div>
      <Toolbar>
        <IconButton size="large" edge="start" color="primary" aria-label="menu">
          <CloudUploadIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          SFM
        </Typography>
      </Toolbar>
      <Divider />

      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
