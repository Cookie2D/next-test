import { Box, TextField } from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
};

export default LoginPage;
