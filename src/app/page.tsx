import AuthButton from "@/components/auth/auth-button";
import { Container, Stack, Box, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sophisticated File Management System",
  description: "A file management system that is easy to use and understand.",
};

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-slate-300 to-slate-500">
        <Container component="section">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
          >
            <Stack justifyContent="center" alignItems="center" spacing={3}>
              <Typography
                variant="h3"
                component="h3"
                textAlign="center"
                fontWeight="bold"
                maxWidth="30ch"
              >
                Welcome to Sophisticated File Management System
              </Typography>
              <AuthButton />
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
