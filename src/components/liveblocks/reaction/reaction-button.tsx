export default function ReactionSelector({
  setReaction,
}: {
  setReaction: (reaction: string) => void;
}) {
  return (
    <div
      className="absolute bottom-20 left-0 right-0 mx-auto w-fit transform rounded-full bg-white px-2"
      onPointerMove={(e) => e.stopPropagation()}
    >
      <ReactionButton reaction="👍" onSelect={setReaction} />
      <ReactionButton reaction="🔥" onSelect={setReaction} />
      <ReactionButton reaction="😍" onSelect={setReaction} />
      <ReactionButton reaction="👀" onSelect={setReaction} />
      <ReactionButton reaction="😱" onSelect={setReaction} />
      <ReactionButton reaction="🙁" onSelect={setReaction} />
    </div>
  );
}
interface ReactionButtonProps {
  reaction: string;
  onSelect: (reaction: string) => void;
}

export function ReactionButton({ reaction, onSelect }: ReactionButtonProps) {
  return (
    <button
      className="transform select-none p-2 text-xl transition-transform hover:scale-150 focus:scale-150 focus:outline-none"
      onPointerDown={() => onSelect(reaction)}
    >
      {reaction}
    </button>
  );
}
