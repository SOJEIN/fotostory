import React from "react";
import { useTheme } from "@mui/material/styles";
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
import useGlobalStore from "../../store/store";
import { getAuth, signOut } from "firebase/auth";

function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const items = [{ text: "Galeria", path: "/gallery" }];
  const a = useGlobalStore((state) => state.setUser);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        a(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
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
          <ListItem key="logout" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleLogout}
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
              <Typography variant="button">Cerrar Sesión</Typography>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <div style={{ marginTop: theme.mixins.toolbar.minHeight }}></div>
    </ContainerMain>
  );
}

export default Dashboard;
