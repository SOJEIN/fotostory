import { styled, Typography, Avatar } from "@mui/material";

export const ContainerMain = styled("div")(({ theme }) => ({
  maxWidth: "600px",
  margin: "100px auto",
  padding: "20px",
  paddingTop: "80px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "8px",
}));

export const UserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  marginRight: "8px",
}));

export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "8px",
}));

export const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
}));

export const Likes = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

export const CommentLink = styled(Typography)(({ theme }) => ({
  color: "#0b3c9d",
  cursor: "pointer",
}));
