import LiveCursors from "@/components/liveblocks/cursor/live-cursors";
import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import { PointerEvent, useCallback } from "react";

export default function Live() {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((e: PointerEvent) => {
    e.preventDefault();

    const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

    updateMyPresence({
      cursor: {
        x,
        y,
      },
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    updateMyPresence({
      cursor: null,
      message: null,
    });
  }, []);

  const handlePointerDown = useCallback((e: PointerEvent) => {
    const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

    updateMyPresence({
      cursor: {
        x,
        y,
      },
    });
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-screen w-full flex justify-center items-center"
    >
      <LiveCursors others={others} />
    </div>
  );
}
