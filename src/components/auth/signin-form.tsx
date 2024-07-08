"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SocialIcon from "./social-icon";
import Link from "next/link";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function SignInForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", boxShadow: 0, borderRadius: 5 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
          <SocialIcon />
          <Root>
            <Divider component="div" role="presentation">
              <Typography fontSize={16}>Or continue with</Typography>
            </Divider>
          </Root>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/signup" className="no-underline text-green-700 hover:underline">
                  Don&apos;t have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
