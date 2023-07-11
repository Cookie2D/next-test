import Link from "next/link";
import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
