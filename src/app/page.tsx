'use client'

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container component="main">
      <Button fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </Container>
  );
}
