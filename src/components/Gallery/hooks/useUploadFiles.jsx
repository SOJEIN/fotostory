import React, { useRef } from "react";
import { Typography, Box, IconButton, Fab } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";

import {
  Actions,
  AvatarStyled,
  CommentLink,
  ContainerMain,
  Header,
  Likes,
  UserInfo,
} from "./styles/Gallery.styles";
import useUploadFiles from "./hooks/useUploadFiles";
import { styled } from "@mui/material/styles";

const Gallery = () => {
  const fileInputRef = useRef(null);

  const handleAddPhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { images, error, isLoading, uploadFile } = useUploadFiles();

  const VisuallyHiddenInput = styled("input")({
    display: "none",
  });

  const GalleryGrid = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
    padding: "16px",
  });

  const GalleryItem = styled("div")({
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  });

  const StyledImage = styled("img")({
    width: "100%",
    height: "auto",
    display: "block",
  });

  return (
    <ContainerMain>
      <Header>
        <UserInfo>
          <AvatarStyled alt="User Name" src="path-to-avatar.jpg" />
          <div>
            <Typography variant="subtitle1" fontWeight="bold">
              mayitho_0212
            </Typography>
            <Typography variant="caption" color="textSecondary">
              1 sem
            </Typography>
          </div>
        </UserInfo>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Header>

      {/* Bloque para mostrar las imágenes en estilo de galería */}
      <GalleryGrid>
        {images.map((url, index) => (
          <GalleryItem key={index}>
            <StyledImage src={url} alt={`Imagen ${index + 1}`} />
            <Actions>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "8px 0",
                }}
              >
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Box>
            </Actions>
          </GalleryItem>
        ))}
      </GalleryGrid>

      <Likes>18 Me gusta</Likes>
      <CommentLink variant="body2">Ver 1 comentario</CommentLink>
      <Typography variant="body2" color="textSecondary">
        Agrega un comentario...
      </Typography>

      {/* Input oculto para subir archivos */}
      <VisuallyHiddenInput
        type="file"
        ref={fileInputRef}
        onChange={(event) => uploadFile({ event })}
        multiple
        accept="image/*"
      />

      {/* Botón flotante para agregar imágenes */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={handleAddPhotoClick}
      >
        <AddIcon />
      </Fab>

      {/* Mostrar el estado de carga y errores si existen */}
      {isLoading && <Typography>Subiendo imagen...</Typography>}
      {error && <Typography color="error">Error al subir la imagen</Typography>}
    </ContainerMain>
  );
};

export default Gallery;
