"use client";

import { File } from "@prisma/client";
import Link from "next/link";
import { DynamicFileIcon, FileIconType } from "../common/dynamic-file-icon";

interface ShowFilesProps {
  files: File[];
}

export default function ShowFiles({ files }: ShowFilesProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-7 3xl:grid-cols-8">
      {files.map((file) => (
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
      ))}
    </div>
  );
}
