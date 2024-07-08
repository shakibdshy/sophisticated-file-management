"use client";

import { signOut } from "@/auth";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@mui/material";

export default function DashboardPage() {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button onClick={onClick} variant="contained" color="error">
        Sign Out
      </Button>
    </div>
  );
}
