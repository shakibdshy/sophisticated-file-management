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
import { useState, useTransition } from "react";
import { SubmitHandler } from "react-hook-form";
import { signUpSchema, SignUpSchema } from "@/schemas/auth.schema";
import { Form } from "../ui/form";
import { signUpAction } from "@/actions/signup-action";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const initialValues: SignUpSchema = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};

export default function SignUpForm() {
  const [isError, setError] = useState<string | undefined>("");
  const [isSuccess, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useTransition();

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    setIsPending(() => {
      signUpAction(data).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <Card sx={{ maxWidth: 500, margin: "auto", boxShadow: 0, borderRadius: 5 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <CardHeader
            className="text-center"
            title="Create an Account"
            subheader="Enter your details to create an account"
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
          <Form<SignUpSchema>
            validationSchema={signUpSchema}
            onSubmit={onSubmit}
            useFormProps={{
              mode: "onChange",
              defaultValues: initialValues,
            }}
          >
            {({ register, formState: { errors } }) => (
              <Stack spacing={2} alignItems="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("fName")}
                      error={!!errors.fName}
                      helperText={errors.fName?.message}
                      disabled={isPending}
                      autoComplete="given-name"
                      fullWidth
                      label="First Name"
                      autoFocus
                      sx={{
                        "& .MuiInputBase-root": {
                          minHeight: 56,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("lName")}
                      error={!!errors.lName}
                      helperText={errors.lName?.message}
                      disabled={isPending}
                      fullWidth
                      label="Last Name"
                      autoComplete="family-name"
                      sx={{
                        "& .MuiInputBase-root": {
                          minHeight: 56,
                        },
                      }}
                    />
                  </Grid>
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
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href="/auth/signup"
                      className="no-underline text-green-700 hover:underline"
                    >
                      Already have an account? Sign In
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
