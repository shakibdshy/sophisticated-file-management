import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Stack, Typography } from "@mui/material";

export default function AllFiles({columns, rows}: {columns: GridColDef<(typeof rows)[number]>[], rows: any}) {
  return (
    <Stack spacing={3} direction="column" sx={{ width: "100%", mt: 4 }}>
      <Typography variant="h5" component="div" fontWeight="semibold">
        All Files
      </Typography>
      <Box
        sx={{
          height: 400,
          width: "100%",
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
    </Stack>
  );
}
