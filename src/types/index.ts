import { User } from "@prisma/client";

export interface profileData {
  name: string;
  href: string;
}

export interface ProfileMenuProps {
    title: string;
  user: User;
  data: profileData[];
}
