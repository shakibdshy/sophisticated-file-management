"use client";

import { File } from "@prisma/client";
import FileItem from "@/components/file-manager/file-item";

interface ShowFilesProps {
  files: File[];
}

export default function ShowFiles({ files }: ShowFilesProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-7 3xl:grid-cols-8">
      {files.map((file) => (
        <FileItem key={file.id} file={file}/>
      ))}
    </div>
  );
}
