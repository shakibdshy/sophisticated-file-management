import { auth } from "@/auth";
import SidebarLayout from "@/layouts";
import { SessionProvider } from "next-auth/react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <SidebarLayout>{children}</SidebarLayout>
    </SessionProvider>
  );
}
