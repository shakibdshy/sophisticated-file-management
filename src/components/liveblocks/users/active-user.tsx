"use client";

import { useMemo } from "react";

import { generateRandomName } from "@/utils/generate-random-name";
import { useOthers, useSelf } from "@liveblocks/react/suspense";
import Avatar from "./avatar";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function ActiveUsers() {
  const others = useOthers();
  const currentUser = useSelf();
  const checkCurrentUser = useCurrentUser();

  const memoizedUsers = useMemo(() => {
    const hasMoreUsers = others.length > 2;

    return (
      <div className="flex items-center justify-center gap-1">
        {currentUser && (
          <Avatar name="You" otherStyles="border-[3px] border-green-800" />
        )}

        {others.slice(0, 2).map(({ connectionId }) => (
          <Avatar
            key={connectionId}
            name={generateRandomName()}
            otherStyles="-ml-3"
          />
        ))}

        {hasMoreUsers && (
          <div className="z-10 -ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-700">
            +{others.length - 2}
          </div>
        )}
      </div>
    );
  }, [others.length]);

  return memoizedUsers;
}
