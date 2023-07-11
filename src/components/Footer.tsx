import React from "react";
import { AppBar, Container } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <AppBar sx={{ top: "auto", bottom: 0 }}>
        <Container>Created by &copy;IhorS</Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
