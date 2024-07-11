"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@mui/material";

export default function AuthButton() {
  const user = useCurrentUser();
  return (
    <div>
      {user ? (
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/dashboard"
        >
          Dashboard
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/auth/signin"
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
