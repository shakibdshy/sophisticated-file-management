import { Container, Stack, Box, Typography, Button } from "@mui/material";

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
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/auth/signin"
              >
                Sign In
              </Button>
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
