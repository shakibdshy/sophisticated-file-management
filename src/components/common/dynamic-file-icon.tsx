import React, { SVGProps } from "react";
import { ImageFileIcon } from "../icons/image";
import { FileIcon } from "../icons/file-icons";
import { PdfFileIcon } from "../icons/pdf";

const fileIcons = {
  "image/png": ImageFileIcon,
  "application/pdf": PdfFileIcon,
  file: FileIcon,
};

export type FileIconType = keyof typeof fileIcons;

type GetIconProps = SVGProps<SVGElement> & {
  iconType: FileIconType | null;
};

export const DynamicFileIcon = ({ iconType, ...rest }: GetIconProps) => {
  if (!iconType || !Object.keys(fileIcons).includes(iconType)) {
    return <FileIcon {...rest} />;
  } else {
    const TagName = fileIcons[iconType as FileIconType];
    return !!TagName ? <TagName {...rest} /> : null;
  }
};
