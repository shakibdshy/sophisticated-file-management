import { Box, Container } from "@mui/material";
import React from "react";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
