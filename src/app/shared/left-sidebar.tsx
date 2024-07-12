"use client";

import { useMemo } from "react";
import Image from "next/image";
import { getShapeInfo } from "@/utils/get-shape-info";

export default function LeftSidebar({ allShapes }: { allShapes: Array<any> }) {
  const memoizedShapes = useMemo(
    () => (
      <aside className="flex flex-col border-t border-grey-200 bg-gray-900 text-white min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
        <h3 className="border border-gray-200 px-5 py-4 text-xs uppercase">
          Layers
        </h3>
        <div className="flex flex-col">
          {allShapes?.map((shape: any) => {
            const info = getShapeInfo(shape[1]?.type);

            return (
              <div
                key={shape[1]?.objectId}
                className="group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer hover:bg-green-700 hover:text-gray-900"
              >
                <Image
                  src={info?.icon}
                  alt="Layer"
                  width={16}
                  height={16}
                  className="group-hover:invert"
                />
                <h3 className="text-sm font-semibold capitalize">
                  {info.name}
                </h3>
              </div>
            );
          })}
        </div>
      </aside>
    ),
    [allShapes?.length]
  );

  return memoizedShapes;
}
