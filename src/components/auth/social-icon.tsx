import { Button, Grid } from "@mui/material";
import { signIn } from "next-auth/react";
import { defaultRedirectPath } from "@/config/routes";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

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
          <IconBrandGoogle stroke={2} />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" fullWidth onClick={() => onClick("github")}>
          <IconBrandGithub stroke={2} />
        </Button>
      </Grid>
    </Grid>
  );
}
