import { Button, Grid } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Github from '@mui/icons-material/Github';

export default function SocialIcon() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Button variant="outlined" fullWidth>
          <GoogleIcon />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" fullWidth>
          <Github />
        </Button>
      </Grid>
    </Grid>
  );
}
