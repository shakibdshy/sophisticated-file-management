import { Button, Grid } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Github from '@mui/icons-material/Github';
import { signIn } from "next-auth/react";
import { defaultRedirectPath } from "@/config/routes";

export default function SocialIcon() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: defaultRedirectPath,
    });
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Button variant="outlined" fullWidth onClick={() => onClick("google")}>
          <GoogleIcon />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" fullWidth onClick={() => onClick("github")}>
          <Github />
        </Button>
      </Grid>
    </Grid>
  );
}
