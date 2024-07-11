export default function formatFileSize(fileSizeInBytes: number): string {
  const KB = fileSizeInBytes / 1024;
  const MB = KB / 1024;

  if (MB >= 1) {
    return `${MB.toFixed(2)} MB`;
  } else {
    return `${KB.toFixed(2)} KB`;
  }
}
