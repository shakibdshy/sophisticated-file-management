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
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function SearchFilter() {
  const [type, setType] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [query] = useDebounce(search, 500);
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const encodedSearch = encodeURI(query);
  router.push(`/files?search=${encodedSearch}`);

  return (
    <Box sx={{ py: 6 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
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
              <MenuItem value="">All</MenuItem>
              <MenuItem value="file">File</MenuItem>
              <MenuItem value="image">Image</MenuItem>
              <MenuItem value="pdf">Pdf</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
}
