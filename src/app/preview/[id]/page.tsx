"use client";

import { Room } from "@/app/shared/room";
import Live from "@/components/liveblocks/live";

export default function page({ params }: { params: { id: string } }) {
  return (
    <Room>
      <Live />
    </Room>
  );
}
