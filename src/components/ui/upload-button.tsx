"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";

export default function UploadButton() {
    const [isImageObject, setIsImageObject] = useState<any>(null);
    console.log("isImageObject", isImageObject);

  return (
    <>
      <UploadDropzone
        endpoint="imageAndPdfUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          setIsImageObject(res[0]);
        }}
        onUploadError={(error: Error) => {
          console.error("Upload error: ", error);
        }}
      />
    </>
  );
}
