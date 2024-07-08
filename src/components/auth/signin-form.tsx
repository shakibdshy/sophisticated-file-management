"use client";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SocialIcon from "./social-icon";
import Link from "next/link";
import { Form } from "../ui/form";
import { signInSchema, SignInSchema } from "@/schemas/auth.schema";
import { useState, useTransition } from "react";
import { SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { signInAction } from "@/actions/signin-action";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const initialValues: SignInSchema = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [reset, setReset] = useState({});
  const [isError, setError] = useState<string | undefined>("");
  const [isSuccess, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useTransition();

  const onSubmit: SubmitHandler<SignInSchema> = (data) => {
    console.log(data);
    setIsPending(() => {
      signInAction(data).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
    // setReset({ email: "", password: "", isRememberMe: false });
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", boxShadow: 0, borderRadius: 5 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <CardHeader
            className="text-center"
            title="Welcome Back"
            subheader="Enter your credentials to access your account"
            classes={{
              title: "text-3xl font-bold mb-3",
            }}
          />
          <SocialIcon />
          <Root>
            <Divider component="div" role="presentation">
              <Typography fontSize={16}>Or continue with</Typography>
            </Divider>
          </Root>
          <Form<SignInSchema>
            validationSchema={signInSchema}
            resetValues={reset}
            onSubmit={onSubmit}
            useFormProps={{
              mode: "onChange",
              defaultValues: initialValues,
            }}
          >
            {({ register, formState: { errors } }) => (
              <Stack spacing={2} alignItems="center">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      disabled={isPending}
                      fullWidth
                      label="Email Address"
                      sx={{
                        "& .MuiInputBase-root": {
                          minHeight: 56,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("password")}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      disabled={isPending}
                      fullWidth
                      label="Password"
                      type="password"
                      sx={{
                        "& .MuiInputBase-root": {
                          minHeight: 56,
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                {isSuccess && (
                  <Alert severity="success" sx={{ width: "100%" }}>
                    {isSuccess}
                  </Alert>
                )}
                {isError && (
                  <Alert severity="error" sx={{ width: "100%" }}>
                    {isError}
                  </Alert>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isPending}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href="/auth/signup"
                      className="no-underline text-green-700 hover:underline"
                    >
                      Don&apos;t have an account? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </Stack>
            )}
          </Form>
        </Stack>
      </CardContent>
    </Card>
  );
}
