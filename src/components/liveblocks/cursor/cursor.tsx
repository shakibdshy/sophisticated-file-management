import CursorSVG from "@/components/icons/cursor-svg";

interface CursorProps {
  x: number;
  y: number;
  message: string;
  color: string;
}

export default function Cursor({ x, y, message, color }: CursorProps) {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />

      {message && (
        <div
          className="absolute left-2 top-5 rounded-3xl px-4 py-2"
          style={{ backgroundColor: color, borderRadius: 20 }}
        >
          <p className="whitespace-nowrap text-sm leading-relaxed text-white">
            {message}
          </p>
        </div>
      )}
    </div>
  );
}
