"use client";

import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchFilter() {
  const [type, setType] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  return (
    <Box sx={{ py: 6 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search Files"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: 245,
              "& .MuiInputBase-root": {
                minHeight: 56,
              },
            }}
          />
        </Box>
        <Box sx={{ minWidth: 164 }}>
          <FormControl fullWidth size="medium">
            <InputLabel id="demo-simple-select-label">
              Filter By: Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Filter By: Type"
              onChange={handleChange}
            >
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>File</MenuItem>
              <MenuItem value={20}>Image</MenuItem>
              <MenuItem value={30}>Pdf</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
}
