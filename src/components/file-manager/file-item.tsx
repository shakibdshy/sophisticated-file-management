'use client';

import { File } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { DynamicFileIcon, FileIconType } from "@/components/common/dynamic-file-icon";

export default function FileItem({
  file,
}: {
  file: File;
}) {
  return (
    <div
      key={file.id}
      className="relative flex flex-col items-center justify-center p-4 transition-all rounded-md group hover:bg-steel-50 dark:hover:bg-gray-100"
    >
      <Link
        className="flex flex-col items-center justify-center w-full text-center no-underline text-gray-900"
        href={`/dashboard/file/${file.id}`}
      >
        <div className="relative h-14 w-auto">
          <DynamicFileIcon
            className="w-auto h-full shrink-0"
            iconType={file.type as FileIconType}
          />
        </div>
        <p className="font-normal w-full mt-5 text-center truncate text-steel-700 dark:text-steel-300">
          {file.name}
        </p>
      </Link>
    </div>
  );
}
