"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { Role } from "@prisma/client";
import AccessDenied from "@/components/common/access-denied";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: Role;
}

export default function RoleGate({ children, allowedRole }: RoleGateProps) {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <AccessDenied />;
  }

  return <>{children}</>;
}
