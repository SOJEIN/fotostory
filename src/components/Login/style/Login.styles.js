import { styled, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import fondo from "assets/image/fondologin.webp";
import { Container } from "@mui/material";

export const ContainerMain = styled("div")(({ theme }) => ({
  backgroundImage: `url(${fondo})`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const ContainerCustom = styled(Container)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.958)",
}));

export const Loginheader = styled(Typography)(({ theme }) => ({
  marginBottom: "16px",
  color: "#000000",
  fontWeight: "bold",
}));

export const LoginLink = styled(Typography)(({ theme }) => ({
  color: "#0b3c9d9f",
  textDecoration: "none",
}));

export const Mt2 = styled(LoadingButton)(({ theme }) => ({
  marginTop: "16px",
  marginBottom: "16px",
}));
