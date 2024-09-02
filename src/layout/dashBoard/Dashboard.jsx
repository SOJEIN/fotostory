import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  AppBar,
  IconButtonCustom,
  DrawerHeader,
  Drawer,
  ContainerMain,
} from "./styles/Dashboard.styles";
import { Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const items = [{ text: "Galeria", path: "/gallery" }];
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <ContainerMain>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButtonCustom
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            open={open}
          >
            <MenuIcon />
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
          </IconButtonCustom>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {items.map(({ text, path }, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(path)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                {text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      {/* Agregar aquí el espacio para el contenido principal */}
      <div style={{ marginTop: theme.mixins.toolbar.minHeight }}>
        {/* Aquí se renderizaría el contenido principal de la página */}
      </div>
    </ContainerMain>
  );
}

export default Dashboard;
