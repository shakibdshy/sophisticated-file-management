import { auth, signOut } from "@/auth";
import { Button } from "@mui/material";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" variant="contained" color="error">
          Sign Out
        </Button>
      </form>
    </div>
  );
}
