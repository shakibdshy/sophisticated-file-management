import { exportToPdf } from "@/utils/export-pdf";
import { Button } from "@mui/material";

const Export = () => (
  <div className="flex flex-col gap-3 px-5 py-3">
    <h3 className="text-[10px] uppercase">Export</h3>
    <Button
      variant="outlined"
      className="w-full border border-gray-100 hover:bg-green-900 hover:text-white"
      onClick={exportToPdf}
    >
      Export to PDF
    </Button>
  </div>
);

export default Export;
