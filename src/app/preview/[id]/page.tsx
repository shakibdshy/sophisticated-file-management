"use client";

import { Room } from "@/app/shared/room";
import Live from "@/components/liveblocks/live";
import Navbar from "@/components/liveblocks/navbar";

export default function page({ params }: { params: { id: string } }) {
  return (
    <Room>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <section className="flex h-full flex-row">
          <Live />
        </section>
      </div>
    </Room>
  );
}
