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

export interface FileStateCardProps {
  title: string;
  icon?: React.ReactNode;
  progressValue?: number;
  minStored?: string | number;
  maxStored?: string | number;
}
