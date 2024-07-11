import { LiveCursorProps } from "@/types/liveblocks";
import Cursor from "./cursor";
import { COLORS } from "@/constants";

export default function LiveCursors({ others }: LiveCursorProps) {
  return others.map(({ connectionId, presence }) => {
    if (presence == null || !presence?.cursor) {
      return null;
    }

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
}
