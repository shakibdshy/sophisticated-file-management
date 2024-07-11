import { Tooltip } from "@mui/material";
import Image from "next/image";

interface AvatarProps {
  name: string;
  otherStyles?: string;
}

export default function Avatar({ name, otherStyles }: AvatarProps) {
  return (
    <>
      <Tooltip title={name}>
        <div
          className={`relative h-9 w-9 rounded-full ${otherStyles}`}
          data-tooltip={name}
        >
          <Image
            src={`https://liveblocks.io/avatars/avatar-${Math.floor(
              Math.random() * 30
            )}.png`}
            fill
            className="rounded-full"
            alt={name}
          />
        </div>
      </Tooltip>
    </>
  );
}
